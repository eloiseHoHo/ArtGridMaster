import { Button } from "@/components/ui/button";
import { Upload, Image } from "lucide-react";
import { useLocation } from "wouter";

export default function CTASection() {
  const [, navigate] = useLocation();
  
  return (
    <section className="bg-gray-900 rounded-lg text-white p-8 mb-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Transform Your Images for Free</h2>
        <p className="text-white/90 mb-8">Our simple tools help artists create grids, line art, and sketches from any image.</p>
        <div className="flex justify-center">
          <Button 
            onClick={() => navigate("/transform")}
            variant="secondary" 
            className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-medium"
          >
            <Upload className="mr-2 h-4 w-4" />
            Try It Now
          </Button>
        </div>
        <p className="text-sm text-white/70 mt-6">100% free - no account or credit card required</p>
      </div>
    </section>
  );
}
