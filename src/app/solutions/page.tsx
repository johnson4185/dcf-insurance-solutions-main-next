"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { solutionsCategoryCards } from "@/data/home.data";
import { ScrollFadeIn } from "@/components/shared/ScrollAnimations";

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

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
                Can't Find Your Use Case?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We work with organizations across many industries and geographies. Let's discuss your specific needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </main>
  );
}
