import { Star } from "lucide-react";

export default function SocialProofStrip() {
  return (
    <div className="border-y border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">50K+</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">grids created</span>
        </div>
        <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 hidden sm:block" />
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className={`h-4 w-4 ${i <= 4 ? "text-amber-400 fill-amber-400" : "text-amber-400 fill-amber-400/50"}`} />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">4.8</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">rating</span>
        </div>
        <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 hidden sm:block" />
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">120+</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">countries</span>
        </div>
      </div>
    </div>
  );
}
