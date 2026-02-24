import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { injectMetaTags, generateSitemap, generateRobotsTxt } from "./seo";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const blockedPaths = [
  '/wp-login.php', '/wp-admin', '/wp-content', '/wp-includes',
  '/wp-json', '/xmlrpc.php', '/wp-cron.php', '/wp-config',
  '/.env', '/.git', '/phpmyadmin', '/administrator',
  '/wp-signup.php', '/wp-trackback.php', '/wp-links-opml.php',
];
app.use((req, res, next) => {
  const p = req.path.toLowerCase();
  if (blockedPaths.some(blocked => p.startsWith(blocked))) {
    return res.status(404).end();
  }
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  app.get("/sitemap.xml", (_req, res) => {
    res.set("Content-Type", "application/xml");
    res.send(generateSitemap());
  });

  app.get("/robots.txt", (_req, res) => {
    res.set("Content-Type", "text/plain");
    res.send(generateRobotsTxt());
  });

  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith("/api") || req.path.startsWith("/uploads") || req.path.includes(".")) {
      return next();
    }
    const originalEnd = res.end.bind(res);
    res.end = function (chunk?: any, ...args: any[]) {
      const contentType = res.getHeader("content-type");
      if (contentType && String(contentType).includes("text/html") && chunk) {
        const html = typeof chunk === "string" ? chunk : chunk.toString("utf-8");
        const injected = injectMetaTags(html, req.originalUrl);
        return originalEnd(injected, ...args);
      }
      return originalEnd(chunk, ...args);
    } as any;
    next();
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
