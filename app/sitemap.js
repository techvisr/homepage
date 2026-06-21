import { blogPosts } from "../components/variants/v3/blogContent";
import { caseStudies } from "../components/variants/v3/caseStudiesContent";

const siteUrl = "https://techvisr.com";

const staticRoutes = [
  "",
  "/about-us",
  "/services",
  "/why-techvisr",
  "/case-studies",
  "/blogs",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

const toEntry = (path, options = {}) => ({
  url: `${siteUrl}${path}`,
  lastModified: options.lastModified || new Date(),
  changeFrequency: options.changeFrequency || "monthly",
  priority: options.priority ?? 0.7,
});

export default function sitemap() {
  const staticEntries = staticRoutes.map((route) =>
    toEntry(route || "/", {
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.75,
    }),
  );

  const blogEntries = blogPosts.map((post) =>
    toEntry(`/blogs/${post.slug}`, {
      lastModified: post.published,
      changeFrequency: "monthly",
      priority: 0.65,
    }),
  );

  const caseStudyEntries = caseStudies.map((study) =>
    toEntry(study.href || `/case-studies/${study.slug}`, {
      changeFrequency: "monthly",
      priority: 0.65,
    }),
  );

  return [...staticEntries, ...blogEntries, ...caseStudyEntries];
}
