"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimations";
import { productsShowcase, productsSection } from "@/data/home.data";

export default function ProductsSection() {
  const { badge, title, description, ctaText, ctaHref } = productsSection;

  const getFeatures = (index: number) => {
    const features = [
      ["Policy Admin", "Claims Intake"],
      ["Pricing Engine", "Digital Portals"],
      ["Full Lifecycle", "Analytics"],
    ];
    return features[index] || [];
  };

  const getTags = (index: number) => {
    const tags = [
      ["Small Teams", "Quick Start"],
      ["Growing Orgs", "High Volume"],
      ["Enterprise", "Global Scale"],
    ];
    return tags[index] || [];
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="watermark-text left-1/2 top-20 -translate-x-1/2 text-white/10">
        PRODUCTS
      </div>

      <div className="container-wide mx-auto relative z-10">
        <ScrollFadeIn className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-primary-foreground/80 font-semibold text-xs uppercase tracking-wider mb-2 px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3 font-display">
            {title}
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-base">
            {description}
          </p>
        </ScrollFadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {productsShowcase.map((product, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
              >
                {/* Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                
                {/* Card */}
                <div className="relative bg-gray-900/60 backdrop-blur-sm group-hover:bg-white/90 group-hover:backdrop-blur-md rounded-2xl p-5 transition-all duration-500 h-full flex flex-col overflow-hidden border border-white/10 group-hover:border-blue-200">
                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 flex items-center justify-center shadow-2xl transition-all duration-500"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <product.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </motion.div>
                    {product.highlight && (
                      <div className="absolute -top-2 -right-2 px-2.5 py-0.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold rounded-full shadow-lg">
                        POPULAR
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-xl font-bold mb-2 font-display text-white group-hover:text-gray-900 transition-colors duration-500">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-gray-400 group-hover:text-gray-600 mb-4 leading-relaxed transition-colors duration-500">
                      {product.description}
                    </p>

                    {/* Features - Simplified */}
                    <div className="space-y-2 mb-4">
                      {getFeatures(index).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-green-500/20 group-hover:bg-green-500 flex items-center justify-center transition-all duration-500">
                            <CheckCircle className="w-3.5 h-3.5 text-green-400 group-hover:text-white transition-colors duration-500" strokeWidth={2.5} />
                          </div>
                          <span className="text-xs font-medium text-gray-300 group-hover:text-blue-600 transition-colors duration-500">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tags - Simplified */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {getTags(index).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white/5 group-hover:bg-blue-50 text-[10px] text-gray-400 group-hover:text-blue-600 rounded-md font-medium border border-white/10 group-hover:border-blue-200 transition-all duration-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={product.path}
                    className="relative inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:from-blue-600 group-hover:to-blue-700 text-white text-sm rounded-lg font-semibold transition-all duration-500 overflow-hidden group/btn shadow-lg group-hover:shadow-2xl"
                  >
                    <span className="relative z-10">Explore Solution</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollFadeIn className="text-center">
          <Link 
            href={ctaHref} 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-primary font-bold text-sm rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group/cta"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-2 transition-transform" />
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
