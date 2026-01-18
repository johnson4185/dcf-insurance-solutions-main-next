import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/data/site.config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import "@/styles/globals.css";

// Font optimization - only load required character sets and weights
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap', // Prevent invisible text during font load
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-plus-jakarta",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk",
  display: 'swap',
});

/**
 * Root metadata configuration
 * Comprehensive SEO setup for better search engine visibility
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "insurance software",
    "insurance platform",
    "policy administration",
    "claims management",
    "insurance technology",
    "insurtech",
    "digital insurance",
    "insurance CRM",
    "underwriting software",
    "insurance analytics",
  ],
  authors: [
    {
      name: "DCF Insurance Solutions",
      url: siteConfig.url,
    },
  ],
  creator: "DCF Insurance Solutions",
  publisher: "DCF Insurance Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@dcfinsurance',
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

/**
 * Viewport configuration
 * Ensures proper mobile rendering and prevents zoom issues
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

/**
 * Root Layout Component
 * 
 * Wraps the entire application with:
 * - Font optimization with swap display strategy
 * - Error boundaries for graceful error handling
 * - Global UI providers (tooltips, toasts)
 * - Semantic HTML structure with proper accessibility
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for potential external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body 
        className={`${inter.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ErrorBoundary>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              {/* Header with navigation */}
              <Header />
              
              {/* Main content area - receives page-specific content */}
              <main className="flex-1 pt-16 md:pt-20">
                {children}
              </main>
              
              {/* Footer with links and info */}
              <Footer />
            </div>
            
            {/* Toast notification systems */}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
