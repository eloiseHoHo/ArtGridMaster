import { Button } from "@/components/ui/button";
import { Upload, Star } from "lucide-react";
import { useLocation } from "wouter";

export default function CTASection() {
  const [, navigate] = useLocation();
  
  return (
    <section className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl text-white p-8 mb-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Artistic Process?</h2>
        <p className="text-white/90 mb-8">Join thousands of artists who are using our tools to enhance their creative workflow.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={() => navigate("/transform/new")}
            variant="secondary" 
            className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-medium"
          >
            <Upload className="mr-2 h-4 w-4" />
            Start Transforming
          </Button>
          <Button 
            variant="outline" 
            className="px-6 py-3 bg-primary-600 border border-white/30 text-white rounded-lg hover:bg-primary-700 transition-all font-medium"
          >
            <Star className="mr-2 h-4 w-4" />
            Upgrade to Pro
          </Button>
        </div>
        <p className="text-sm text-white/70 mt-6">No credit card required for basic transformations</p>
      </div>
    </section>
  );
}
