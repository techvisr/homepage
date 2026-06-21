export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://techvisr.com/sitemap.xml",
    host: "https://techvisr.com",
  };
}
