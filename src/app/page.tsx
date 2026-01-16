import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import HeroSection from "@/components/home/HeroSection";

// Lazy load sections below the fold for better initial page load performance
// These components will only be downloaded when they're about to appear on screen
const WhyDCFSection = dynamic(() => import("@/components/home/WhyDCFSection"), {
  loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
});

const DigitalTransformationSection = dynamic(() => import("@/components/home/DigitalTransformationSection"), {
  loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
});

const IndustriesSection = dynamic(() => import("@/components/home/IndustriesSection"), {
  loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
});

const ProductsSection = dynamic(() => import("@/components/home/ProductsSection"), {
  loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
});

const CTASection = dynamic(() => import("@/components/home/CTASection"), {
  loading: () => <div className="h-64 bg-muted/20 animate-pulse" />,
});

/**
 * Home Page Component
 * 
 * Main landing page showcasing DCF's insurance solutions.
 * Implements performance optimizations:
 * - Critical content (hero) loads immediately
 * - Below-fold content lazy loads to reduce initial bundle size
 * - Error boundaries prevent crashes from propagating
 * - Suspense boundaries provide loading states
 */
export default function HomePage() {
  return (
    <>
      {/* Hero section loads immediately - it's above the fold */}
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>

      {/* Below-fold sections lazy load to improve initial page performance */}
      <ErrorBoundary>
        <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
          <WhyDCFSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
          <DigitalTransformationSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
          <IndustriesSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
          <ProductsSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div className="h-64 bg-muted/20 animate-pulse" />}>
          <CTASection />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
