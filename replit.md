# Overview

PhotoGrid.space is a free online tool suite for artists that transforms photos into various artistic formats: grids, line art, sketches, coloring pages, paint by numbers, pixel art, and watercolor/oil paintings. The app processes images both client-side (canvas-based effects) and server-side (Sharp library), allowing users to upload photos, adjust transformation settings, and download results. No authentication is required for basic usage. The site is heavily SEO-optimized with dedicated landing pages for each tool, a blog section, and category pages.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend
- **Framework**: React with TypeScript, built with Vite
- **Routing**: Wouter (lightweight client-side router)
- **State/Data Fetching**: TanStack React Query for server state management
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives, styled with Tailwind CSS and CSS variables for theming
- **Image Processing (Client-side)**: Canvas API-based effects in `client/src/lib/imageEffects.ts` — grid overlays, line art edge detection, sketch effects, coloring page conversion, paint by numbers, pixel art, and watercolor. Also uses `roughjs` for hand-drawn style effects
- **File Upload**: react-dropzone for drag-and-drop image uploads
- **SEO**: react-helmet for per-page meta tags, structured data, Open Graph tags. Each tool has its own dedicated landing page optimized for specific keywords. Server-side meta tag injection via `server/seo.ts` ensures crawlers see pre-rendered meta tags (title, description, OG, canonical, GEO) in the initial HTML response before JavaScript loads. FAQPage, HowTo, BreadcrumbList, and WebApplication JSON-LD schemas on all key pages

## Backend
- **Framework**: Express.js with TypeScript, bundled via esbuild for production
- **Image Processing (Server-side)**: Sharp library for image transformations (grid overlays via SVG compositing, edge detection, blur effects)
- **File Upload Handling**: Multer with disk storage, 10MB limit, JPEG/PNG only. Files stored in `uploads/` directory with transformed versions in `uploads/transformed/`
- **API Structure**: RESTful endpoints under `/api/` prefix — image upload, transformation, and gallery endpoints
- **Development**: Vite dev server middleware integrated with Express for HMR

## Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (via `@neondatabase/serverless` driver)
- **Schema** (`shared/schema.ts`):
  - `users` table: id, username, password
  - `images` table: id, userId (FK to users), originalFilename, originalPath, transformedPath, transformationType, transformationSettings (JSONB), isPublic, createdAt
- **Current Storage**: MemStorage class (in-memory) is the active implementation, with database schema defined for future PostgreSQL persistence
- **Schema Push**: Use `npm run db:push` (drizzle-kit push) to sync schema to database

## Project Structure
```
client/           → Frontend React app
  src/
    components/   → UI components (editors, galleries, comparisons)
    pages/        → Route pages (home, tool-specific landing pages, blog)
    lib/          → Utilities (imageEffects, imageProcessing, queryClient)
    hooks/        → Custom React hooks
  public/         → Static assets, manifest, robots.txt
server/           → Express backend
  index.ts        → Server entry point
  routes.ts       → API route definitions
  storage.ts      → Data access layer (MemStorage)
  imageProcessor.ts → Server-side Sharp transformations
  vite.ts         → Vite dev server integration
shared/           → Shared code between client and server
  schema.ts       → Drizzle schema, Zod validators, TypeScript types
scripts/          → Image processing utility scripts
attached_assets/  → Reference HTML files for image effects
```

## Key Design Decisions
- **Client-side processing as primary**: Most image transformations happen in the browser via Canvas API, reducing server load and enabling instant previews. Server-side processing via Sharp is available as a fallback/alternative for higher quality results
- **In-memory storage default**: The app uses MemStorage for simplicity, with Drizzle schema ready for PostgreSQL migration. When connecting to a real database, switch the storage implementation
- **SEO-first architecture**: Each tool type has its own landing page with unique content, meta tags, and structured markup to maximize search engine visibility
- **No authentication required**: Core functionality is free and anonymous, though the user/auth schema exists for potential future features

# External Dependencies

- **Database**: PostgreSQL via `@neondatabase/serverless` (Neon serverless driver). Requires `DATABASE_URL` environment variable
- **Image Processing**: `sharp` (server-side), `canvas` npm package (for Node.js scripts), `roughjs` (client-side hand-drawn effects)
- **Session Management**: `connect-pg-simple` for PostgreSQL-backed sessions (available but not actively used with MemStorage)
- **Key NPM Packages**: express, multer, drizzle-orm, drizzle-kit, vite, react, wouter, @tanstack/react-query, zod, react-dropzone, react-helmet, tailwindcss, shadcn/ui components (Radix UI)
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer` (dev only)