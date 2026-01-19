import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import ProductsHero from "@/features/products/ProductsHero";
import type { Metadata } from 'next';

// Lazy load components below the fold
const ProductsGrid = dynamic(() => import("@/features/products/ProductsGrid"), {
  loading: () => <div className="h-screen bg-muted/20 animate-pulse" />,
});

const ProductsComparison = dynamic(() => import("@/features/products/ProductsComparison"), {
  loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
});

const ProductsCTA = dynamic(() => import("@/features/products/ProductsCTA"), {
  loading: () => <div className="h-64 bg-muted/20 animate-pulse" />,
});

/**
 * SEO metadata for products page
 * Helps search engines understand and rank the page properly
 */
export const metadata: Metadata = {
  title: 'Insurance Products | DCF Insurance Solutions',
  description: 'Explore our comprehensive suite of digital insurance products including Life & Annuity, Property & Casualty, Group Health, and Individual Health solutions.',
  keywords: ['insurance software', 'life insurance', 'health insurance', 'property casualty', 'insurance platform'],
  openGraph: {
    title: 'Insurance Products | DCF Insurance Solutions',
    description: 'Comprehensive digital insurance solutions for modern insurers',
    type: 'website',
  },
};

/**
 * Products Page Component
 * 
 * Showcases DCF's product portfolio with optimized loading:
 * - Hero loads immediately for LCP optimization
 * - Grid, comparison, and CTA sections lazy load
 * - Error boundaries prevent component failures from crashing the page
 */
export default function ProductsPage() {
  return (
    <main className="bg-white">
      <ErrorBoundary>
        <ProductsHero />
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div className="h-screen bg-muted/20 animate-pulse" />}>
          <ProductsGrid />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
          <ProductsComparison />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<div className="h-64 bg-muted/20 animate-pulse" />}>
          <ProductsCTA />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
