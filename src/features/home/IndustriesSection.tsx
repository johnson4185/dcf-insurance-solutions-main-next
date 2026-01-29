"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";
import { industries } from "@/data/home.data";
import { Sparkles } from "lucide-react";

export default function IndustriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-10 md:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-600"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#3b82f6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl" />
        
        {/* Diagonal Line Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonals" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="#3b82f6" strokeWidth="1" />
                <line x1="30" y1="0" x2="30" y2="60" stroke="#0ea5e9" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonals)" />
          </svg>
        </div>
        
        {/* Modern Line Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.10]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Horizontal flowing lines */}
            <path d="M0,100 Q250,80 500,100 T1000,100" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <path d="M0,200 Q250,180 500,200 T1000,200" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
            <path d="M0,300 Q250,280 500,300 T1000,300" stroke="#3b82f6" strokeWidth="1" fill="none" />
            <path d="M0,400 Q250,420 500,400 T1000,400" stroke="#0ea5e9" strokeWidth="1" fill="none" />
            
            {/* Vertical accent lines */}
            <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.2" />
            <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
            
            {/* Circle accents */}
            <circle cx="10%" cy="20%" r="3" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
            <circle cx="90%" cy="80%" r="5" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
            <circle cx="50%" cy="50%" r="8" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
          </svg>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 text-[160px] md:text-[180px] lg:text-[200px] font-black text-gray-500/15 select-none pointer-events-none whitespace-nowrap tracking-wide z-0">
        INDUSTRIES
      </div>

      <div className="container-wide mx-auto relative z-10">
        <ScrollFadeIn className="text-center mb-10">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-wider mb-3 px-4 py-2 bg-white rounded-full shadow-md border border-blue-100"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>By Industry</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            One Platform, <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Every Vertical</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Comprehensive insurance solutions tailored for diverse markets
          </p>
        </ScrollFadeIn>

        {/* Horizontal Cards Row */}
        <div className="relative flex items-center justify-center min-h-[260px] overflow-visible px-4">
          <div className="flex gap-4 items-center justify-center max-w-7xl">
            {industries.map((industry, index) => {
              const isHovered = hoveredIndex === index;
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
              
              // Calculate position shift for centering
              const totalCards = industries.length;
              const middleIndex = (totalCards - 1) / 2;
              const distanceFromMiddle = index - middleIndex;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.15 : isOtherHovered ? 0.9 : 1,
                      x: isHovered 
                        ? -distanceFromMiddle * 130 // Move to center
                        : isOtherHovered 
                          ? (index < hoveredIndex! ? -20 : 20) // Push others away
                          : 0,
                      y: isHovered ? -12 : 0,
                      zIndex: isHovered ? 50 : isOtherHovered ? 1 : 10,
                      opacity: isOtherHovered ? 0.5 : 1,
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20 
                    }}
                    className="relative"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      animate={{
                        opacity: isHovered ? 0.4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute -inset-4 bg-blue-400 rounded-2xl blur-xl"
                    />
                    
                    {/* Card */}
                    <motion.div
                      animate={{
                        borderColor: isHovered ? "#3b82f6" : "#e5e7eb",
                        boxShadow: isHovered 
                          ? "0 20px 50px rgba(59, 130, 246, 0.25)" 
                          : "0 4px 15px rgba(0, 0, 0, 0.08)"
                      }}
                      className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 border-2 w-56 shadow-sm flex flex-col items-center"
                    >
                        {/* Icon Circle */}
                        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4 shadow-md">
                          <industry.icon className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>

                        {/* Text */}
                        <h3 className="font-bold text-gray-900 text-base text-center mb-3 leading-tight">
                          {industry.name}
                        </h3>

                        {/* Status Bar */}
                        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "50%" }}
                            animate={{ width: isHovered ? "100%" : "50%" }}
                            className="h-full bg-blue-500 rounded-full"
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                      </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
