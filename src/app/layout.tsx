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
    default: "PhotoGrid - Free Online Grid Maker & Photo Art Tools for Artists",
    template: "%s | PhotoGrid.space",
  },
  description:
    "Transform your photos into artist reference grids, line art, and sketches 100% free. No login required. Perfect for drawing, painting, and art practice.",
  keywords: [
    "photo grid",
    "artist grid",
    "drawing grid",
    "line art generator",
    "sketch converter",
    "free artist tools",
    "reference grid",
    "art grid maker",
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
      <body className={`${inter.variable} font-sans`}>
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

        {/* Schema.org structured data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "PhotoGrid",
              url: "https://www.photogrid.space",
              description:
                "Free online tool for artists to transform images into grids, line art, and sketches",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "PhotoGrid",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
