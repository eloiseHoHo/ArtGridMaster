import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = lazy(() => import("@/pages/home"));
const Transform = lazy(() => import("@/pages/transform"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog/BlogPost"));
const HowToUseGridForPerfectPortraits = lazy(() => import("@/pages/blog/how-to-use-grid-for-perfect-portraits"));
const GridMethodForPerfectPortraits = lazy(() => import("@/pages/blog/grid-method-for-perfect-portraits"));
const PerspectiveGridTechniquesForLandscapes = lazy(() => import("@/pages/blog/perspective-grid-techniques-for-landscapes"));
const PhotoToSketch = lazy(() => import("@/pages/photo-to-sketch"));
const PhotoToLineart = lazy(() => import("@/pages/photo-to-lineart"));
const PhotoToGrid = lazy(() => import("@/pages/photo-to-grid"));
const PhotoToColoringPage = lazy(() => import("@/pages/photo-to-coloring-page"));
const PhotoToPaintByNumbers = lazy(() => import("@/pages/photo-to-paint-by-numbers"));
const PhotoToPixelArt = lazy(() => import("@/pages/photo-to-pixel-art"));
const PhotoToWatercolor = lazy(() => import("@/pages/photo-to-watercolor"));
const Categories = lazy(() => import("@/pages/categories"));
const PortraitPhotoGrid = lazy(() => import("@/pages/categories/portrait-photo-grid"));
const WomenPortraitPhotoGrid = lazy(() => import("@/pages/categories/portrait-photo-grid/women-portrait-photo-grid"));
const NotFound = lazy(() => import("@/pages/not-found"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/transform/:id" component={Transform} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/how-to-use-grid-for-perfect-portraits" component={HowToUseGridForPerfectPortraits} />
        <Route path="/blog/grid-method-for-perfect-portraits" component={GridMethodForPerfectPortraits} />
        <Route path="/blog/perspective-grid-techniques-for-landscapes" component={PerspectiveGridTechniquesForLandscapes} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/photo-to-sketch" component={PhotoToSketch} />
        <Route path="/photo-to-lineart" component={PhotoToLineart} />
        <Route path="/photo-to-grid" component={PhotoToGrid} />
        <Route path="/photo-to-coloring-page" component={PhotoToColoringPage} />
        <Route path="/photo-to-paint-by-numbers" component={PhotoToPaintByNumbers} />
        <Route path="/photo-to-pixel-art" component={PhotoToPixelArt} />
        <Route path="/photo-to-watercolor" component={PhotoToWatercolor} />
        <Route path="/categories" component={Categories} />
        <Route path="/categories/portrait-photo-grid" component={PortraitPhotoGrid} />
        <Route path="/categories/portrait-photo-grid/women-portrait-photo-grid" component={WomenPortraitPhotoGrid} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Router />
        </div>
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
