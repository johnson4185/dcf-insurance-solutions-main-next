"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimations";
import { productsShowcase, productsSection } from "@/data/home.data";

export default function ProductsSection() {
  const { badge, title, description, ctaText, ctaHref } = productsSection;

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      <div className="watermark-text left-1/2 top-20 -translate-x-1/2 text-white/5">
        PRODUCTS
      </div>
      <div className="container-wide mx-auto relative z-10">
        <ScrollFadeIn className="text-center mb-16">
          <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-4 block">{badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 font-display">
            {title}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            {description}
          </p>
        </ScrollFadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productsShowcase.map((product, index) => (
            <StaggerItem key={index}>
              <Link
                href={product.path}
                className={`block rounded-2xl p-8 transition-all duration-300 hover:scale-105 h-full ${
                  product.highlight
                    ? "bg-secondary text-secondary-foreground shadow-2xl"
                    : "bg-white text-foreground"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  product.highlight ? "bg-primary/20" : "bg-primary/10"
                }`}>
                  <product.icon className={`w-7 h-7 ${product.highlight ? "text-primary" : "text-primary"}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{product.name}</h3>
                <p className={`text-sm mb-6 ${product.highlight ? "text-secondary-foreground/80" : "text-muted-foreground"}`}>
                  {product.description}
                </p>
                <span className={`link-arrow ${product.highlight ? "text-primary" : ""}`}>
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollFadeIn className="text-center mt-12">
          <Link href={ctaHref} className="inline-flex items-center gap-2 text-primary-foreground font-semibold hover:underline">
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
