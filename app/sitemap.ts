import { MetadataRoute } from "next";
import { featureLandingPages, industryLandingPages, resourcePosts, siteConfig } from "@/data/site";

const routes = ["", "/about", "/features", "/industries", "/pricing", "/security", "/use-cases", "/resources", "/compliance-monitoring-checklist", "/contact"];

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

  const featureRoutes = featureLandingPages.map((page) => ({
    url: `${siteConfig.url}/features/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: 0.78
  }));

  const industryRoutes = industryLandingPages.map((page) => ({
    url: `${siteConfig.url}/industries/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: 0.76
  }));

  return [...staticRoutes, ...featureRoutes, ...industryRoutes, ...resourceRoutes];
}
