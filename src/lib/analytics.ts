/**
 * Google Analytics 4 event tracking helpers.
 * GA4 script is loaded in layout.tsx via next/script.
 * Replace GA_MEASUREMENT_ID with your actual ID.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
}

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  gtag("event", eventName, params);
}

// --- Specific events ---

export function trackUploadImage() {
  trackEvent("upload_image");
}

export function trackApplyEffect(tool: string) {
  trackEvent("apply_effect", { tool });
}

export function trackDownloadImage(tool: string) {
  trackEvent("download_image", { tool });
}

export function trackExportSocial(tool: string, format: string) {
  trackEvent("export_social", { tool, format });
}

export function trackShareClick(tool: string, method: string) {
  trackEvent("share_click", { tool, method });
}
