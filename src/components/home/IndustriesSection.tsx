"use client";

import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimations";
import { industries } from "@/data/home.data";

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <ScrollFadeIn className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            Serving diverse insurance markets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our products support a wide range of insurance verticals across regulated markets worldwide
          </p>
        </ScrollFadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <StaggerItem key={index}>
              <div className="card-service text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 mx-auto">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{industry.name}</h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
