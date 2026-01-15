"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn } from "@/components/shared/ScrollAnimations";

export default function ProductsComparison() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-wide mx-auto px-4 md:px-8">
        <ScrollFadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
              Not Sure Which Product is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Compare all our products side by side to find the perfect fit for your organization's needs, budget, and growth plans.
            </p>
            <Link
              href="/comparison"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Compare All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
