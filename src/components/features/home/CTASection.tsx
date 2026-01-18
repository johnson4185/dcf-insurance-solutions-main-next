"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";
import { closingCTAContent } from "@/data/home.data";

export default function CTASection() {
  const { title, description, cta } = closingCTAContent;

  return (
    <section className="section-padding bg-secondary">
      <ScrollFadeIn className="container-wide mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-6 font-display">
          {title}
        </h2>
        <p className="text-secondary-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={cta.primary.href} className="btn-primary text-lg px-10 py-4">
            {cta.primary.text}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href={cta.secondary.href} className="btn-outline border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary text-lg px-10 py-4">
            {cta.secondary.text}
          </Link>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
