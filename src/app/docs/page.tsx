"use client";

import Link from "next/link";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";
import { 
  ArrowRight, BookOpen, Code, Play, Download, 
  Shield, Terminal, ExternalLink, Clock 
} from "lucide-react";
import { documentationData } from "@/data/documentation.data";

export default function DocumentationPage() {
  const levelColors = {
    Beginner: "bg-green-500/10 text-green-600 dark:text-green-400",
    Intermediate: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    Advanced: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  };

  const methodColors = {
    GET: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    POST: "bg-green-500/10 text-green-600 dark:text-green-400",
    PUT: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    DELETE: "bg-red-500/10 text-red-600 dark:text-red-400",
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
        
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <ScrollFadeIn>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display">
                {documentationData.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {documentationData.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link 
                  href="#quick-start" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Quick Start
                </Link>
                <Link 
                  href="#api-reference" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-border bg-background rounded-lg font-semibold hover:bg-muted/50 transition-colors"
                >
                  <Terminal className="w-4 h-4" />
                  API Reference
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section id="quick-start" className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                {documentationData.quickStart.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {documentationData.quickStart.description}
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {documentationData.quickStart.guides.map((guide, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary group cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[guide.level as keyof typeof levelColors]}`}>
                      {guide.level}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {guide.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                  <div className="space-y-2 mb-4">
                    {guide.topics.map((topic, i) => (
                      <div key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {topic}
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Start Guide
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product Documentation */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                Product Documentation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete guides for each of our products
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            {documentationData.productDocs.map((product, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                      <p className="text-muted-foreground">{product.description}</p>
                    </div>
                    <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {product.sections.map((section, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-foreground mb-3">{section.title}</h4>
                        <ul className="space-y-2">
                          {section.items.map((item, j) => (
                            <li key={j}>
                              <Link 
                                href={`/docs/${product.name.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                              >
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section id="api-reference" className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                {documentationData.apiReference.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {documentationData.apiReference.description}
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {documentationData.apiReference.sections.map((section, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="bg-muted/50 px-6 py-4 border-b border-border">
                    <h3 className="text-xl font-bold text-foreground">{section.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {section.endpoints.map((endpoint, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors group cursor-pointer"
                        >
                          <span className={`px-3 py-1 rounded text-xs font-bold ${methodColors[endpoint.method as keyof typeof methodColors]}`}>
                            {endpoint.method}
                          </span>
                          <code className="font-mono text-sm text-foreground flex-1">
                            {endpoint.path}
                          </code>
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {endpoint.description}
                          </span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                Developer Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional tools and resources to help you build better
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentationData.resources.map((resource, index) => {
              const icons = [Code, Download, Play, Shield];
              const Icon = icons[index % icons.length];
              return (
                <ScrollFadeIn key={index} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <ul className="space-y-2">
                      {resource.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                {documentationData.changelog.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay up to date with the latest features and improvements
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {documentationData.changelog.updates.map((update, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {update.version}
                    </span>
                    <span className="text-muted-foreground">{update.date}</span>
                  </div>
                  <ul className="space-y-2">
                    {update.changes.map((change, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                {documentationData.support.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {documentationData.support.description}
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {documentationData.support.options.map((option, index) => (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <Link href={option.href} className="block group">
                  <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-lg transition-all hover:border-primary">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {option.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      {option.cta}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
