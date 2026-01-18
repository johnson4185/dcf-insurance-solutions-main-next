"use client";

import Link from "next/link";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";
import { ArrowRight, Award, Users, TrendingUp, Shield, Zap, Globe } from "lucide-react";

export default function WhyDCFPage() {
  const benefits = [
    {
      icon: Award,
      title: "Industry Leader",
      description: "Trusted by over 500+ insurance companies worldwide with 20+ years of experience"
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Average 40% reduction in operational costs and 3x faster policy processing"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with bank-level encryption and compliance"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 dedicated support team with 95% customer satisfaction rating"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Get live in weeks, not months, with our proven onboarding process"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Supporting operations in 50+ countries with multi-language support"
    }
  ];

  const stats = [
    { value: "500+", label: "Insurance Companies" },
    { value: "20+", label: "Years Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "95%", label: "Customer Satisfaction" }
  ];

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
        
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <ScrollFadeIn>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display">
                Why Choose DCF Insurance Solutions
              </h1>
              <p className="text-xl text-muted-foreground">
                The trusted partner for insurance digital transformation with proven results
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                Why Insurance Leaders Choose DCF
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Delivering value through innovation, reliability, and exceptional service
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
        
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <ScrollFadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                Ready to Transform Your Insurance Business?
              </h2>
              <p className="text-xl text-white/90">
                Join hundreds of insurers who trust DCF for their digital transformation
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/products" className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Contact Sales
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </main>
  );
}
