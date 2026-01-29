"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { solutionsCategoryCards } from "@/data/home.data";
import { industriesDetail } from "@/data/industries.data";
import { useCases } from "@/data/use-cases.data";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
              Solutions for Every Insurance Need
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how DCF's insurance platforms support diverse business models across regulated markets worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* By Industry */}
      <section id="industry" className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              By Industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored capabilities for each insurance vertical — designed to reduce complexity and accelerate growth.
            </p>
          </ScrollFadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industriesDetail.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
                    {industry.name}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {industry.highlights && industry.highlights.length > 0 && (
                    <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                      {industry.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link href="/products" className="mt-auto inline-flex items-center justify-center btn-primary">
                    Explore Products
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* By Use Case */}
      <section id="use-case" className="py-20 bg-muted/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              By Use Case
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Focused solutions for the most critical insurance workflows — from underwriting to claims.
            </p>
          </ScrollFadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={useCase.title}
                  className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
                    {useCase.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {useCase.description}
                  </p>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {useCase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsCategoryCards.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <ScrollFadeIn key={solution.title} delay={index * 0.1}>
                  <Link href={solution.href}>
                    <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
                        {solution.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        Explore Solutions
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </ScrollFadeIn>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
