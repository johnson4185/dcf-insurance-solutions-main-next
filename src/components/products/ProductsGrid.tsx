"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { allProducts, productsOverviewContent } from "@/data/products.data";
import { ScrollFadeIn } from "@/components/shared/ScrollAnimations";

export default function ProductsGrid() {
  const { sectionTitle, sectionDescription } = productsOverviewContent;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-wide mx-auto px-4 md:px-8">
        {/* Section Header */}
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              {sectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {sectionDescription}
            </p>
          </div>
        </ScrollFadeIn>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <ScrollFadeIn key={product.name} delay={index * 0.1}>
                <div
                  className={`group relative bg-card border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${
                    product.highlight
                      ? "border-primary shadow-lg shadow-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {product.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        RECOMMENDED
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-display">
                      {product.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Best For */}
                    <div className="mb-6 pt-6 border-t border-border">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        Best For
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.bestFor.map((item) => (
                          <span
                            key={item}
                            className="inline-block px-3 py-1 bg-muted text-xs text-foreground rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <Link
                      href={`${product.path}#purchase`}
                      className="w-full px-4 py-2.5 bg-primary text-primary-foreground text-center font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Purchase
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`${product.path}#trial`}
                        className="px-4 py-2 bg-muted text-foreground text-center text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors"
                      >
                        Start Trial
                      </Link>
                      <Link
                        href="/contact"
                        className="px-4 py-2 border-2 border-border text-foreground text-center text-sm font-medium rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        Contact Sales
                      </Link>
                    </div>
                    <Link
                      href={product.path}
                      className="inline-flex items-center gap-2 text-primary font-semibold justify-center mt-2 group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
