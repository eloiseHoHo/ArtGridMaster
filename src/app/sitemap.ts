import type { MetadataRoute } from "next";

const DOMAIN = "https://www.photogrid.space";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const toolPages = [
    "photo-to-grid",
    "photo-to-lineart",
    "photo-to-sketch",
    "photo-to-coloring-page",
    "photo-to-paint-by-numbers",
    "photo-to-pixel-art",
    "photo-to-watercolor",
    "instagram-grid-splitter",
    "photo-grid-collage",
  ];

  const blogPages = [
    "beginner-guide-to-pixel-art",
    "line-art-vs-sketch-which-style-for-your-art",
    "how-to-create-coloring-pages-from-photos",
    "how-to-use-grid-for-perfect-portraits",
    "grid-method-for-perfect-portraits",
    "perspective-grid-techniques-for-landscapes",
  ];

  const categoryPages = [
    "categories",
    "categories/portrait-photo-grid",
    "categories/portrait-photo-grid/women-portrait-photo-grid",
    "categories/portrait-photo-grid/men-portrait-photo-grid",
    "categories/portrait-photo-grid/children-portrait-photo-grid",
    "categories/landscape-photo-grid",
    "categories/animal-photo-grid",
    "categories/architecture-photo-grid",
  ];

  return [
    { url: DOMAIN, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    ...toolPages.map((p) => ({
      url: `${DOMAIN}/${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    { url: `${DOMAIN}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...blogPages.map((p) => ({
      url: `${DOMAIN}/blog/${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...categoryPages.map((p) => ({
      url: `${DOMAIN}/${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    { url: `${DOMAIN}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${DOMAIN}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
