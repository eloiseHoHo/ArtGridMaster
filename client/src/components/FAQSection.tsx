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
      answer: "No, you can transform as many images as you want. Our service is completely free and has no usage limits."
    },
    {
      id: 4,
      question: "How can I give feedback or request new features?",
      answer: "We're always looking to improve! You can send your feedback and feature requests to us at contact@photogrid.space or through our social media channels. We appreciate your input as it helps us make our service better."
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
