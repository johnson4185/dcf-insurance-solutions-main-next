"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Users, Award,
  CheckCircle2, TrendingUp, ChevronDown, Sparkles
} from "lucide-react";
import { aboutData } from "@/data/about.data";
import { useState } from "react";

export default function AboutPage() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  
  const iconMap: Record<string, any> = {
    users: Users,
    handshake: Award,
    award: Award,
  };

  return (
    <main className="pt-16">
      {/* Hero Section with Diagonal Image Layout */}
      <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden bg-background">
        <div className="absolute inset-0 flex items-center">
          <div className="container-wide mx-auto px-4 md:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="py-12 md:py-20"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block mb-4 text-sm font-semibold text-primary tracking-wide uppercase"
                >
                  {aboutData.hero.subtitle}
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display leading-tight">
                  {aboutData.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {aboutData.hero.description}
                </p>

                {/* Stats - Clean inline design */}
                <div className="flex flex-wrap gap-8 mb-8">
                  {aboutData.stats.slice(0, 3).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="group cursor-default"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-foreground mb-1">
                        {stat.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.description}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Link 
                    href="/products" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3 shadow-md hover:shadow-lg"
                  >
                    Explore Our Products
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Diagonal Image on Right - Hidden on mobile */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>

        {/* Diagonal Hero Image - Xceedance Style */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block absolute top-0 right-0 w-[55%] h-full"
          style={{
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        >
          <div className="relative w-full h-full">
            {/* Hero Image */}
            <img 
              src="/images/about/saudi-professionals-riyadh.png"
              alt="DCF Team in Riyadh"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />
          </div>
        </motion.div>

        {/* Mobile Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:hidden mt-8 px-4"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/about/saudi-professionals-riyadh.png"
              alt="DCF Team in Riyadh"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display leading-tight">
                {aboutData.story.title}
              </h2>
              <p className="text-xl text-primary font-semibold mb-6">
                {aboutData.story.subtitle}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-10">
                {aboutData.story.description}
              </p>

              {/* Clean accordion sections */}
              <div className="space-y-4 mb-8">
                {aboutData.story.sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                  >
                    <div className="flex items-start gap-3 pb-3 border-b border-border group-hover:border-primary transition-colors">
                      <motion.div
                        animate={{ rotate: expandedSection === index ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1"
                      >
                        <ChevronDown className="w-4 h-4 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        <AnimatePresence>
                          {expandedSection === index && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-base text-muted-foreground leading-relaxed"
                            >
                              {section.content}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link 
                href="/careers" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300 group"
              >
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Life at DCF
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right Image (replaces video placeholder) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg bg-gray-50">
                  <img
                    src="/images/about/hero-abstract-riyadh.svg?v=2"
                    alt="Team meeting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0" />
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dedicated to Insurance Industry */}
      <section className="py-20 md:py-24 bg-muted/20">
        <div className="container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display leading-tight">
              {aboutData.differentiators.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aboutData.differentiators.items.map((item, index) => {
              const Icon = iconMap[item.icon] || Users;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md"
                  >
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display leading-tight">
              {aboutData.testimonials.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aboutData.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-4 h-4 text-primary" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-base text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground mb-1">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Clean List Style */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Our values
            </h2>
            <p className="text-base text-muted-foreground">
              The principles that guide how we work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {aboutData.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="flex items-start gap-3 pb-4 border-b border-border group-hover:border-primary transition-colors">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-background to-muted/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display leading-tight">
              Leadership Team
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              {aboutData.team.description}
            </p>
            <div className="inline-flex items-center gap-2 text-primary text-base font-semibold">
              <Users className="w-4 h-4" />
              {aboutData.team.size} Global Professionals
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {aboutData.leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center relative overflow-hidden mb-4 shadow-md"
                >
                  <Users className="w-16 h-16 text-primary/40" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {leader.name}
                </h3>
                <div className="text-sm font-semibold text-primary mb-3">
                  {leader.title}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Culture highlights - Clean list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Our Culture
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutData.team.culture.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-base text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <TrendingUp className="w-12 h-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Ready to Transform Your Insurance Operations?
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Join hundreds of leading insurers who trust DCF Insurance Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/trial" 
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
