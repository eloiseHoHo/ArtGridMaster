"use client";
import dynamic from "next/dynamic";

const GridSplitterTool = dynamic(
  () => import("@/components/GridSplitterTool"),
  {
    ssr: false,
    loading: () => (
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg h-[300px] animate-pulse bg-gray-50 dark:bg-gray-800" />
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg h-[280px] animate-pulse bg-gray-50 dark:bg-gray-800" />
          </div>
          <div className="lg:col-span-2">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg h-[400px] animate-pulse bg-gray-50 dark:bg-gray-800" />
          </div>
        </div>
      </div>
    ),
  }
);

export default function ClientGridSplitterWrapper() {
  return <GridSplitterTool />;
}
