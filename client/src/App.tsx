import { Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Transform from "@/pages/transform";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog/BlogPost";
import Categories from "@/pages/categories";
import PortraitPhotoGrid from "@/pages/categories/portrait-photo-grid";
import WomenPortraitPhotoGrid from "@/pages/categories/portrait-photo-grid/women-portrait-photo-grid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/transform/:id" component={Transform} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/categories" component={Categories} />
      <Route path="/categories/portrait-photo-grid" component={PortraitPhotoGrid} />
      <Route path="/categories/portrait-photo-grid/women-portrait-photo-grid" component={WomenPortraitPhotoGrid} />
      <Route component={NotFound} />
    </Switch>
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
