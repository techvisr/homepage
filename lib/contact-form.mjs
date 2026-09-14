export async function submitContactForm(endpoint, formData) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  });
  if (!response.ok) throw new Error("Unable to submit contact form");
  const result = await response.json();
  if (result?.success !== true && result?.success !== "true") {
    throw new Error("Contact form was not accepted");
  }
}
