"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { heroContent, stats } from "@/data/home.data";

export default function HeroSection() {
  const { badge, title, description, cta, posterImage, posterAlt } = heroContent;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-[700px] md:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {isClient && (
          <Image
            src={posterImage}
            alt={posterAlt}
            fill
            className="object-cover"
            priority
            quality={75}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/75 to-secondary/55" />
      </div>
      
      <div className="container-wide mx-auto px-4 md:px-8 py-28 md:py-36 relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {badge}
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6 font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href={cta.primary.href} className="btn-primary">
              {cta.primary.text}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={cta.secondary.href} className="btn-outline border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              {cta.secondary.text}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="text-2xl md:text-3xl font-bold text-primary font-display">{stat.value}</div>
                <div className="text-sm text-secondary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
