"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import ProductHero from "@/components/products/ProductHero";
import ProductStats from "@/components/products/ProductStats";
import ProductCapabilities from "@/components/products/ProductCapabilities";
import ProductDigitalExperience from "@/components/products/ProductDigitalExperience";
import ProductIntegrations from "@/components/products/ProductIntegrations";
import ProductIdealFor from "@/components/products/ProductIdealFor";
import ProductCTA from "@/components/products/ProductCTA";
import ProductBuildModules from "@/components/products/ProductBuildModules";
import { getProductBySlug } from "@/data/products-complete.data";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Special handling for Insurance Build (modular selection)
  const isInsuranceBuild = slug === "insurance-build";

  return (
    <main className="bg-white">
      <ProductHero
        badge={product.hero.badge}
        title={product.hero.title}
        subtitle={product.hero.subtitle}
        description={product.hero.description}
        features={product.hero.features}
        cta={product.hero.cta}
        colorScheme={product.colorScheme}
      />

      <ProductStats stats={product.stats} />

      {isInsuranceBuild ? (
        // Special modular selection UI for Insurance Build
        <>
          <ProductCapabilities
            title={product.capabilities.title}
            description={product.capabilities.description}
            capabilities={product.capabilities.items}
            colorScheme={product.colorScheme}
          />
          <ProductBuildModules colorScheme={product.colorScheme} />
        </>
      ) : (
        // Standard product page sections
        <>
          <ProductCapabilities
            title={product.capabilities.title}
            description={product.capabilities.description}
            capabilities={product.capabilities.items}
            colorScheme={product.colorScheme}
          />

          <ProductDigitalExperience
            title={product.digitalExperience.title}
            description={product.digitalExperience.description}
            experiences={product.digitalExperience.items}
            colorScheme={product.colorScheme}
          />

          {product.integrations && (
            <ProductIntegrations
              title={product.integrations.title}
              description={product.integrations.description}
              integrations={product.integrations.items}
              colorScheme={product.colorScheme}
            />
          )}

          <ProductIdealFor
            title={product.idealFor.title}
            description={product.idealFor.description}
            segments={product.idealFor.items}
            colorScheme={product.colorScheme}
          />

          <ProductCTA
            title={product.cta.title}
            description={product.cta.description}
            primaryButton={product.cta.primaryButton}
            secondaryButton={product.cta.secondaryButton}
            tertiaryButton={product.cta.tertiaryButton}
            colorScheme={product.colorScheme}
          />
        </>
      )}
    </main>
  );
}
