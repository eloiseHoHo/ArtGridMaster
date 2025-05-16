import { useState } from "react";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number>(0);
  
  const faqs = [
    {
      id: 0,
      question: "How does the grid transformation work?",
      answer: "Our grid transformation tool overlays a customizable grid pattern on your image. You can adjust the grid size, opacity, color, and style to create the perfect reference for your artistic needs. The grid helps you maintain proper proportions when transferring the image to canvas or paper."
    },
    {
      id: 1,
      question: "Can I use the transformed images commercially?",
      answer: "Yes, you can use the transformed images for both personal and commercial projects. Since you're uploading your own images and we're simply providing the transformation tool, you retain all rights to the resulting artwork."
    },
    {
      id: 2,
      question: "What image formats are supported?",
      answer: "Currently, we support JPEG and PNG image formats. We recommend using high-quality images for the best results. The maximum file size is 10MB."
    },
    {
      id: 3,
      question: "Is there a limit to how many images I can transform?",
      answer: "The free version allows up to 10 image transformations per day. For unlimited transformations and access to advanced features, consider upgrading to our Pro version."
    },
    {
      id: 4,
      question: "What's the difference between the free and Pro versions?",
      answer: "The Pro version offers higher resolution outputs, additional transformation styles, batch processing, the ability to save custom presets, and priority support. Pro users also get access to new features first."
    }
  ];
  
  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };
  
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <button 
              className="flex justify-between items-center w-full px-6 py-4 text-left"
              onClick={() => toggleQuestion(faq.id)}
            >
              <h3 className="font-medium text-gray-900">{faq.question}</h3>
              {openQuestion === faq.id ? (
                <ChevronDown className="text-lg text-gray-500" />
              ) : (
                <Plus className="text-lg text-gray-500" />
              )}
            </button>
            
            {openQuestion === faq.id && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
