"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { ScrollFadeIn } from "@/components/shared/ScrollAnimations";
import { digitalTransformationContent } from "@/data/home.data";

export default function DigitalTransformationSection() {
  const { badge, title, description, features, image } = digitalTransformationContent;

  return (
    <section className="section-padding bg-muted overflow-hidden">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn direction="left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">{badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              {title}
            </h2>
            <p className="text-muted-foreground mb-8">
              {description}
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </ScrollFadeIn>
          <ScrollFadeIn direction="right">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={false}
                loading="lazy"
              />
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
