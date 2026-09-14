import test from "node:test";
import assert from "node:assert/strict";
import { submitContactForm } from "../lib/contact-form.mjs";

for (const success of [true, "true"]) {
  test(`contact submission accepts service success ${JSON.stringify(success)}`, async (t) => {
    const data = new FormData();
    data.set("Name", "Local test");
    t.mock.method(globalThis, "fetch", async (endpoint, options) => {
      assert.equal(endpoint, "https://example.test/contact");
      assert.equal(options.method, "POST");
      assert.equal(options.body, data);
      assert.equal(options.headers.Accept, "application/json");
      assert.equal(options.headers["Content-Type"], undefined, "browser must set multipart boundary");
      return { ok: true, json: async () => ({ success }) };
    });
    await submitContactForm("https://example.test/contact", data);
  });
}

for (const result of [false, "false", undefined, null]) {
  test(`contact rejects unconfirmed service response ${JSON.stringify(result)}`, async (t) => {
    t.mock.method(globalThis, "fetch", async () => ({ ok: true, json: async () => result === null ? null : { success: result } }));
    await assert.rejects(submitContactForm("https://example.test/contact", new FormData()), /not accepted/);
  });
}

test("contact rejects HTTP errors, network failures and invalid JSON", async (t) => {
  const responses = [
    async () => ({ ok: false }),
    async () => { throw new Error("offline"); },
    async () => ({ ok: true, json: async () => { throw new SyntaxError("invalid JSON"); } }),
  ];
  for (const response of responses) {
    t.mock.method(globalThis, "fetch", response);
    await assert.rejects(submitContactForm("https://example.test/contact", new FormData()));
    t.mock.restoreAll();
  }
});
