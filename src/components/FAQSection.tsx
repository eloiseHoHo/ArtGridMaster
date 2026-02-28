"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How does the grid transformation work?", a: "Our grid tool overlays a customizable grid pattern on your image. You can adjust grid size, opacity, color, and style to create the perfect reference for transferring to canvas or paper. All processing happens in your browser for instant results." },
  { q: "Is PhotoGrid.space really 100% free?", a: "Yes, all 9 tools are completely free with no usage limits, no signup required, no watermarks, and no hidden fees. We believe creative tools should be accessible to everyone." },
  { q: "Are my photos safe when I use PhotoGrid.space?", a: "Absolutely. All image processing happens entirely in your browser using client-side technology. Your photos are never uploaded to our servers, ensuring complete privacy and security." },
  { q: "What image formats are supported?", a: "We support JPEG, JPG, and PNG formats up to 10MB. For the best results, we recommend high-resolution images. All output can be downloaded as PNG files." },
  { q: "Can I use the transformed images commercially?", a: "Yes. You upload your own images and we provide the transformation tools. You retain all rights to the resulting artwork for both personal and commercial use." },
  { q: "What tools does PhotoGrid.space offer?", a: "PhotoGrid.space offers 9 free tools: Photo Grid Collage, Instagram Grid Splitter, Grid Overlay, Line Art converter, Pencil Sketch, Coloring Page generator, Paint by Numbers, Pixel Art converter, and Watercolor & Oil Painting effects." },
  { q: "Do I need to install any software?", a: "No installation needed. PhotoGrid.space works entirely in your web browser on any device — desktop, tablet, or mobile. Simply visit the website, upload your image, and start transforming." },
  { q: "Can I use PhotoGrid for portrait drawing?", a: "Yes, PhotoGrid is excellent for portrait drawing. The grid overlay tool helps you capture accurate facial proportions, and the line art and sketch tools can create reference outlines for portrait work. Many portrait artists use grid methods to achieve accurate proportions." },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number>(0);

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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
