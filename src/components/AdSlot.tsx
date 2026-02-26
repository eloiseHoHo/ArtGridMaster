"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  /** AdSense ad slot ID */
  slot: string;
  /** Ad format: auto, rectangle, horizontal, vertical */
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  /** Whether to use responsive sizing */
  responsive?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * Google AdSense ad slot component.
 * 
 * Usage: <AdSlot slot="1234567890" format="auto" responsive />
 * 
 * Note: Requires the AdSense script to be loaded in layout.tsx.
 * Currently commented out — uncomment when AdSense is approved.
 */
export default function AdSlot({
  slot,
  format = "auto",
  responsive = true,
  className = "",
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // @ts-expect-error AdSense global
      if (window.adsbygoogle) {
        // @ts-expect-error AdSense global
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch {
      // AdSense not loaded yet
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
