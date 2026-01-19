"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/common/ScrollAnimations";
import { whyDCFContent } from "@/data/home.data";
import { solutions } from "@/data/solutions.data";

export default function WhyDCFSection() {
  const { badge, title, description, image, cta } = whyDCFContent;

  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <ScrollFadeIn className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">{badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-display">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {description}
          </p>
        </ScrollFadeIn>

        <div className="why-grid mt-8">
          <StaggerContainer className="why-cards">
            {solutions.slice(0, 6).map((solution, i) => (
              <StaggerItem key={i}>
                <div className="why-card h-full">
                  <div className="card-inner">
                    <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-sm mb-4 text-muted-foreground">{solution.description}</p>
                    <Link className="explore" href={`/solutions/${solution.slug}`}>
                      <span>Explore solutions</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="why-image h-[520px] relative">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={false}
              loading="lazy"
            />

            <div className="why-cta">
              <h3 className="text-2xl font-bold mb-2">{cta.title}</h3>
              <p className="text-sm">{cta.description}</p>
              <div className="mt-6">
                <a href={cta.href} className="font-semibold inline-flex items-center gap-3 contact-link">
                  <span>{cta.linkText}</span>
                  <span className="contact-button" aria-hidden="true">
                    <ArrowRight className="w-5 h-5 contact-arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
