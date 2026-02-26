"use client";
import dynamic from "next/dynamic";

const SimpleImageEditor = dynamic(
  () => import("@/components/SimpleImageEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg h-[500px] animate-pulse bg-gray-50" />
          <div className="border border-gray-200 rounded-lg h-[500px] animate-pulse bg-gray-50" />
        </div>
      </div>
    ),
  }
);

export default function ClientEditorWrapper() {
  return <SimpleImageEditor />;
}
