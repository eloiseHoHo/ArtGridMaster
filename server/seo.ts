interface PageMeta {
  title: string;
  description: string;
  ogType?: string;
  keywords?: string;
}

const DOMAIN = "https://photogrid.space";

const routeMeta: Record<string, PageMeta> = {
  "/": {
    title: "Free Photo Grid Maker, Line Art & Sketch Creator for Artists | PhotoGrid.space",
    description: "Transform photos into artist grids, line art, sketches, coloring pages, paint by numbers, pixel art & paintings. 100% free online tool, no signup required. Used by 10,000+ artists worldwide.",
    keywords: "free photo grid maker, photo to line art, photo to sketch, grid drawing tool, artist grid generator, coloring page maker, paint by numbers generator, pixel art converter, free drawing grid, grid method drawing",
  },
  "/photo-to-grid": {
    title: "Grid Maker for Artists Free | PhotoGrid.space",
    description: "Add drawing grids to any photo free. Create grid overlays for proportions, scale drawings, and canvas transfers. Adjustable rows, columns, and colors.",
    keywords: "photo grid maker, drawing grid generator, image grid generator, grid drawing tool for artists, grid overlay for drawing, scale drawing with grid, transfer image to canvas grid, free grid maker for artists, add grid to photo, proportional grid maker, art grid tool, grid method drawing, reference grid maker, photo grid overlay",
  },
  "/photo-to-lineart": {
    title: "Photo to Line Art Converter Free | PhotoGrid.space",
    description: "Convert photos to line art free online. Create outlines, stencils, tattoo designs, and line drawings. Multiple styles available. No signup.",
    keywords: "photo to line art, line art converter, photo to outline, image to line drawing, turn photo into line drawing, photo to stencil, line art for tattoo, free line art converter, photo to SVG outline, convert image to line art, line drawing from photo, photo to outline drawing, line art generator free",
  },
  "/photo-to-sketch": {
    title: "Photo to Sketch Converter Free | PhotoGrid.space",
    description: "Turn photos into pencil sketches free online. Create pencil drawings, charcoal effects, and cartoon sketches. Multiple styles. No signup.",
    keywords: "photo to sketch, photo to pencil drawing, turn photo into drawing, pencil sketch converter, photo to charcoal drawing, AI sketch generator, photo to cartoon sketch, free sketch maker, convert photo to drawing, image to sketch online, photo to hand drawn effect, digital sketch from photo, pencil drawing from photo",
  },
  "/photo-to-coloring-page": {
    title: "Photo to Coloring Page Maker Free | PhotoGrid.space",
    description: "Turn any photo into a printable coloring page free. Create custom coloring pages for kids and adults. Multiple styles. No signup required.",
    keywords: "photo to coloring page, coloring page maker, custom coloring book maker, coloring page from photo free, printable coloring page from photo, coloring page for adults, pet coloring page maker, turn family photo into coloring page, custom coloring pages for kids, free coloring page generator, photo coloring book creator, make your own coloring page",
  },
  "/photo-to-paint-by-numbers": {
    title: "Paint by Numbers Generator Free | PhotoGrid.space",
    description: "Create custom paint by numbers from any photo free. Printable templates with numbered regions, color legend, and 4-24 color palette.",
    keywords: "paint by numbers generator, custom paint by numbers from photo, photo to paint by numbers, free paint by numbers maker, DIY paint by numbers template, paint by numbers printable, create paint by numbers, personalized paint by numbers, paint by number from photo free, custom paint by numbers kit, make your own paint by numbers",
  },
  "/photo-to-pixel-art": {
    title: "Photo to Pixel Art Converter Free | PhotoGrid.space",
    description: "Convert photos to pixel art free. Create 8-bit art, pixel avatars, and retro game sprites. Adjustable pixel size and color palette. No signup required.",
    keywords: "photo to pixel art, pixel art converter, pixel art maker, photo to 8 bit art, pixel art avatar maker, retro pixel art generator, photo to minecraft pixel art, convert image to pixel art, pixel art from photo free, pixelate photo online, 8-bit art converter, pixel art generator free, turn photo into pixel art",
  },
  "/photo-to-watercolor": {
    title: "Photo to Painting Converter Free | PhotoGrid.space",
    description: "Turn photos into watercolor, oil painting, and canvas art free online. Apply Van Gogh style effects and impressionist filters. No signup needed.",
    keywords: "photo to watercolor, photo to oil painting, photo to painting converter, turn photo into painting free, watercolor effect online, oil painting effect, photo to canvas painting, Van Gogh style photo filter, photo to acrylic painting, impressionist photo effect, painting converter free, turn picture into painting, photo to art converter",
  },
  "/blog": {
    title: "Art & Drawing Tips Blog | Grid Drawing Techniques & Tutorials | PhotoGrid.space",
    description: "Learn grid drawing techniques, art tips, and creative tutorials. Master the grid method for portraits, landscapes, and more. Free educational content for artists of all skill levels.",
    ogType: "website",
    keywords: "art blog, drawing tips, grid drawing techniques, art tutorials, drawing for beginners, grid method tutorial",
  },
  "/blog/how-to-use-grid-for-perfect-portraits": {
    title: "How to Use a Grid for Perfect Portraits: Step-by-Step Guide | PhotoGrid.space Blog",
    description: "Learn how to use the grid drawing method to create accurate portraits. Step-by-step tutorial with tips on proportions, facial features, and shading techniques for portrait artists.",
    ogType: "article",
    keywords: "grid drawing portraits, portrait grid method, how to draw portraits with grid, portrait proportions grid",
  },
  "/blog/grid-method-for-perfect-portraits": {
    title: "The Grid Method for Perfect Portraits: Complete Artist Guide | PhotoGrid.space Blog",
    description: "Master the grid method for drawing perfect portraits. Comprehensive guide covering grid setup, proportion techniques, and professional tips for achieving accurate portrait drawings.",
    ogType: "article",
    keywords: "grid method portraits, portrait drawing technique, accurate portrait drawing, grid drawing guide",
  },
  "/blog/perspective-grid-techniques-for-landscapes": {
    title: "Perspective Grid Techniques for Landscape Drawing | PhotoGrid.space Blog",
    description: "Learn how to use perspective grids for landscape art. Master horizon lines, vanishing points, and spatial relationships to create stunning landscape drawings and paintings.",
    ogType: "article",
    keywords: "perspective grid landscape, landscape drawing techniques, vanishing point grid, perspective drawing tutorial",
  },
  "/blog/line-art-vs-sketch-which-style-for-your-art": {
    title: "Line Art vs Sketch: Which Drawing Style is Right for Your Art? | PhotoGrid.space Blog",
    description: "Compare line art and sketch drawing styles. Learn the key differences, when to use each, and how to convert photos to both styles using free online tools.",
    ogType: "article",
    keywords: "line art vs sketch, difference between line art and sketch, line art drawing, sketch drawing style, convert photo to line art",
  },
  "/blog/how-to-create-coloring-pages-from-photos": {
    title: "How to Create Custom Coloring Pages from Your Photos | PhotoGrid.space Blog",
    description: "Turn any photo into a printable coloring page. Step-by-step guide to making custom coloring books for kids and adults. Free online coloring page maker.",
    ogType: "article",
    keywords: "create coloring pages from photos, photo to coloring page, custom coloring book, make your own coloring pages, free coloring page maker",
  },
  "/blog/beginner-guide-to-pixel-art": {
    title: "Beginner's Guide to Pixel Art: From Photos to Retro Masterpieces | PhotoGrid.space Blog",
    description: "Learn how to create pixel art from photos. Complete beginner's guide covering pixel art fundamentals, photo conversion, and creative uses for retro-style art.",
    ogType: "article",
    keywords: "pixel art tutorial, how to make pixel art, photo to pixel art, pixel art converter, pixel art for beginners",
  },
  "/blog/grid-drawing-for-beginners": {
    title: "Complete Guide to Grid Drawing for Beginners | PhotoGrid.space Blog",
    description: "Start your grid drawing journey with this comprehensive beginner's guide. Learn the grid method step by step, from setup to finished artwork. Free tips and techniques for new artists.",
    ogType: "article",
    keywords: "grid drawing beginners, learn grid drawing, grid method tutorial, beginner drawing technique",
  },
  "/blog/grid-drawing-technique": {
    title: "5 Essential Grid Drawing Techniques to Transform Your Art | PhotoGrid.space Blog",
    description: "Master 5 essential grid drawing techniques used by professional artists. From basic square grids to perspective grids, learn how to dramatically improve your drawing accuracy.",
    ogType: "article",
    keywords: "grid drawing techniques, grid method art, drawing accuracy techniques, professional grid drawing",
  },
  "/blog/using-grids-for-landscape-paintings": {
    title: "Using Grids for Landscape Paintings: A Complete Guide | PhotoGrid.space Blog",
    description: "Learn how to use the grid method for landscape paintings. Tips for capturing perspective, proportions, and natural scenes accurately using grid overlay techniques.",
    ogType: "article",
    keywords: "grid landscape painting, landscape grid method, painting with grid overlay, landscape art technique",
  },
  "/categories": {
    title: "Photo Grid Categories | Browse Grid Templates by Subject | PhotoGrid.space",
    description: "Browse our collection of photo grid categories organized by subject. Find the perfect grid setup for portraits, landscapes, animals, architecture, and more.",
    keywords: "photo grid categories, grid templates, drawing grid types, art grid collection",
  },
  "/categories/portrait-photo-grid": {
    title: "Portrait Photo Grid | Grid Overlay for Portrait Drawing | PhotoGrid.space",
    description: "Use our portrait-optimized grid overlay for accurate portrait drawings. Specialized grid settings for facial proportions, features alignment, and portrait composition.",
    keywords: "portrait photo grid, portrait drawing grid, face grid overlay, portrait proportions grid",
  },
  "/categories/portrait-photo-grid/women-portrait-photo-grid": {
    title: "Women Portrait Photo Grid | Female Portrait Drawing Grid | PhotoGrid.space",
    description: "Specialized grid overlay for drawing women's portraits. Optimized grid settings for female facial proportions, features, and feminine portrait composition.",
    keywords: "women portrait grid, female portrait drawing, women face grid, female portrait proportions",
  },
  "/privacy": {
    title: "Privacy Policy | PhotoGrid.space",
    description: "Read our privacy policy. PhotoGrid.space processes images in your browser - your photos never leave your device. Learn how we protect your privacy.",
    keywords: "privacy policy, data protection, image privacy",
  },
  "/terms": {
    title: "Terms of Service | PhotoGrid.space",
    description: "Read the terms of service for PhotoGrid.space. Free online image transformation tools for artists.",
    keywords: "terms of service, terms and conditions",
  },
};

function getBreadcrumbSchema(path: string): object | null {
  if (path === "/") return null;

  const segments = path.split("/").filter(Boolean);
  const breadcrumbs: Array<{ name: string; url: string }> = [
    { name: "Home", url: DOMAIN }
  ];

  const nameMap: Record<string, string> = {
    "photo-to-grid": "Grid Maker",
    "photo-to-lineart": "Line Art Converter",
    "photo-to-sketch": "Sketch Converter",
    "photo-to-coloring-page": "Coloring Page Maker",
    "photo-to-paint-by-numbers": "Paint by Numbers",
    "photo-to-pixel-art": "Pixel Art Converter",
    "photo-to-watercolor": "Watercolor & Oil Painting",
    "blog": "Blog",
    "categories": "Categories",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "portrait-photo-grid": "Portrait Grid",
    "women-portrait-photo-grid": "Women Portrait Grid",
  };

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const name = nameMap[segment] || segment.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    breadcrumbs.push({ name, url: `${DOMAIN}${currentPath}` });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getMetaTagsHtml(path: string): string {
  const cleanPath = path.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
  const meta = routeMeta[cleanPath];

  if (!meta) return "";

  const canonicalUrl = `${DOMAIN}${cleanPath === "/" ? "" : cleanPath}`;
  const ogType = meta.ogType || "website";
  const breadcrumb = getBreadcrumbSchema(cleanPath);
  const breadcrumbTag = breadcrumb ? `\n    <script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>` : "";

  return `
    <title>${meta.title}</title>
    <meta name="description" content="${escapeAttr(meta.description)}" />
    ${meta.keywords ? `<meta name="keywords" content="${escapeAttr(meta.keywords)}" />` : ""}
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${escapeAttr(meta.title)}" />
    <meta property="og:description" content="${escapeAttr(meta.description)}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${DOMAIN}/og-image.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="${escapeAttr(meta.title)}" />
    <meta property="twitter:description" content="${escapeAttr(meta.description)}" />
    <meta property="twitter:url" content="${canonicalUrl}" />
    <meta property="twitter:image" content="${DOMAIN}/og-image.png" />
    <meta name="geo.region" content="US" />
    <meta name="geo.position" content="37.09024;-95.712891" />
    <meta name="ICBM" content="37.09024, -95.712891" />
    <meta name="robots" content="index, follow" />${breadcrumbTag}
  `;
}

export function injectMetaTags(html: string, path: string): string {
  const metaHtml = getMetaTagsHtml(path);
  if (!metaHtml) return html;

  html = html.replace(/<title>[\s\S]*?<\/title>/g, "");
  html = html.replace(/<meta\s+name="title"[^>]*>/g, "");
  html = html.replace(/<meta\s+name="description"[^>]*>/g, "");
  html = html.replace(/<meta\s+name="keywords"[^>]*>/g, "");
  html = html.replace(/<link\s+rel="canonical"[^>]*>/g, "");
  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*>/g, "");
  html = html.replace(/<meta\s+property="twitter:[^"]*"[^>]*>/g, "");
  html = html.replace(/<meta\s+name="geo\.[^"]*"[^>]*>/g, "");
  html = html.replace(/<meta\s+name="ICBM"[^>]*>/g, "");
  html = html.replace(/<meta\s+name="robots"[^>]*>/g, "");

  html = html.replace(/\n\s*\n\s*\n/g, "\n\n");

  html = html.replace("</head>", `${metaHtml}\n  </head>`);

  return html;
}

function escapeAttr(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function generateSitemap(): string {
  const pages = Object.keys(routeMeta);
  const now = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  for (const path of pages) {
    const url = `${DOMAIN}${path === "/" ? "" : path}`;
    const priority = path === "/" ? "1.0" : path.startsWith("/blog") ? "0.7" : path.startsWith("/photo-to-") ? "0.9" : path.startsWith("/categories") ? "0.6" : "0.5";
    const changefreq = path === "/" ? "daily" : path.startsWith("/blog") ? "weekly" : "weekly";

    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  }

  xml += `</urlset>`;
  return xml;
}

export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
`;
}
