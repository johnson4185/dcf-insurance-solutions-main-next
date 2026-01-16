"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { productsOverviewContent } from "@/data/products.data";
import { Sparkles, Zap, Shield, TrendingUp, Award, Layers } from "lucide-react";
import { useRef } from "react";

export default function ProductsHero() {
  const { title, description } = productsOverviewContent;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, x: "10%", y: "20%", color: "text-sky-500" },
    { Icon: Zap, delay: 0.2, x: "85%", y: "15%", color: "text-blue-500" },
    { Icon: Shield, delay: 0.4, x: "15%", y: "70%", color: "text-indigo-500" },
    { Icon: TrendingUp, delay: 0.6, x: "80%", y: "75%", color: "text-cyan-500" },
    { Icon: Award, delay: 0.8, x: "50%", y: "10%", color: "text-blue-600" },
    { Icon: Layers, delay: 1, x: "90%", y: "50%", color: "text-sky-600" },
  ];

  return (
    <section ref={heroRef} className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-sky-50/50 via-white to-blue-50/30">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-sky-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center">
            <item.Icon className={`w-6 h-6 ${item.color}`} />
          </div>
        </motion.div>
      ))}

      <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          style={{ y, opacity }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-200 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                5 Powerful Insurance Platforms
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
          >
            {[
              { value: "2,500+", label: "Active Clients" },
              { value: "50+", label: "Countries" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-sky-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64 C320,96 640,32 960,64 C1280,96 1440,64 1440,64 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
