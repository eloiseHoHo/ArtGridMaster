import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How does the grid transformation work?", a: "Our grid tool overlays a customizable grid pattern on your image. You can adjust grid size, opacity, color, and style to create the perfect reference for transferring to canvas or paper." },
  { q: "Can I use the transformed images commercially?", a: "Yes. You upload your own images and we provide the transformation. You retain all rights to the resulting artwork for both personal and commercial use." },
  { q: "What image formats are supported?", a: "We support JPEG and PNG formats up to 10MB. We recommend high-quality images for the best results." },
  { q: "Is there a usage limit?", a: "No. All tools are completely free with no usage limits, no signup required, and no watermarks." },
  { q: "Is my image data safe?", a: "All image processing happens in your browser. Your photos are never uploaded to our servers, ensuring complete privacy." },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number>(0);

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
      <div className="max-w-2xl divide-y divide-gray-100">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              className="flex justify-between items-center w-full py-4 text-left"
              onClick={() => setOpenId(openId === i ? -1 : i)}
            >
              <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
              <ChevronDown className={`h-4 w-4 text-gray-400 flex-shrink-0 transition-transform ${openId === i ? 'rotate-180' : ''}`} />
            </button>
            {openId === i && (
              <p className="pb-4 text-gray-500 leading-relaxed">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
