import { MetadataRoute } from "next";
import { resourcePosts, siteConfig } from "@/data/site";

const routes = ["", "/about", "/features", "/industries", "/pricing", "/case-studies", "/resources", "/compliance-monitoring-checklist", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route === "" ? 1 : route === "/resources" ? 0.9 : 0.8
  }));

  const resourceRoutes = resourcePosts.map((post) => ({
    url: `${siteConfig.url}/resources/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: 0.72
  }));

  return [...staticRoutes, ...resourceRoutes];
}
