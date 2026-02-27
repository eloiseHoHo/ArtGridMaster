import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.photogrid.space"),
  title: {
    default: "PhotoGrid Online — Free Photo Collage & Instagram Grid Splitter",
    template: "%s | PhotoGrid.space",
  },
  description:
    "Create social-ready photo grids online free. Make collages, split images for Instagram puzzle posts, and use art tools like grid overlay, line art, and sketch. No app, no signup, no watermark.",
  keywords: [
    "photogrid online",
    "add grid to photo online free",
    "grid drawing online",
    "grid drawing tool online free",
    "image to grid",
    "photo to grid converter",
    "grid art online",
    "grid lines maker",
    "free photo grid maker",
    "photo grid collage",
    "photo grid maker online",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.photogrid.space",
    siteName: "PhotoGrid.space",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <CookieConsent />
        </div>

        {/* Google Analytics 4 */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        )}


      </body>
    </html>
  );
}
