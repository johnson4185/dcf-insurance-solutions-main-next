'use client';

import { comparisonTableData } from '@/data/comparison.data';
import { Check, X, Sparkles, ArrowRight, Shield, Users, Building2, Globe, BarChart3, Code, Award } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const categoryIcons = {
  'CORE MODULES': Code,
  'DIGITAL CAPABILITIES': Globe,
  'COMPLIANCE & INTEGRATIONS': Shield,
  'ANALYTICS & REPORTING': BarChart3,
  'ENTERPRISE': Building2,
  'SECURITY & COMPLIANCE': Shield,
};

export default function ComparisonPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-sky-400/5"></div>
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-6"
          >
            <Award className="w-4 h-4" />
            Enterprise Product Comparison
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Find Your Perfect Solution
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Compare features, capabilities, and pricing across our complete insurance 
            platform portfolio. Choose the solution that scales with your business.
          </motion.p>
        </motion.div>
      </section>



      {/* Comparison Table */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Sticky Header with Products */}
          <div className="sticky top-16 z-40 bg-gradient-to-r from-white via-sky-50/30 to-white backdrop-blur-sm shadow-xl rounded-t-2xl border border-gray-100 py-6">
            <div className="overflow-x-auto px-8">
              <div className="min-w-[1200px]">
                <div className="grid grid-cols-5 gap-6">
                  {/* Feature Column Header */}
                  <div className="flex items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide block">Compare</span>
                        <span className="text-lg font-bold text-gray-900">Features</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Headers */}
                  {comparisonTableData.products.map((product, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      className="text-center p-4 rounded-xl bg-gradient-to-br from-white to-sky-50/50 border border-sky-100 shadow-sm hover:shadow-md transition-all"
                    >
                      <h3 className="text-base font-bold mb-2 text-gray-900">{product.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                          {product.price.split('/')[0]}
                        </span>
                        <span className="text-xs text-gray-500">/{product.price.split('/')[1]}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Table Content */}
          <div className="bg-white rounded-b-xl shadow-lg border border-t-0 border-gray-200 overflow-hidden">
            <div className="overflow-x-auto px-6 py-6">
              <div className="min-w-[1200px]">

              {/* Comparison Categories */}
              {comparisonTableData.categories.map((category, categoryIndex) => {
                const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Code;
                
                return (
                  <motion.div 
                    key={categoryIndex} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
                    className="mb-10 last:mb-0"
                  >
                    {/* Category Header */}
                    <div className="mb-5">
                      <div className="relative">
                        <div className="flex items-center gap-4 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 text-white py-4 px-6 rounded-xl shadow-lg shadow-blue-500/20">
                          <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h2 className="text-sm font-bold uppercase tracking-wider">
                              {category.name}
                            </h2>
                            <p className="text-xs text-sky-100 mt-0.5">{category.features.length} Features</p>
                          </div>
                        </div>
                        <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-b from-blue-500/10 to-transparent rounded-b-xl"></div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-1">
                      {category.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.02 }}
                          className="grid grid-cols-5 gap-6 py-3.5 px-5 rounded-lg hover:bg-gradient-to-r hover:from-sky-50/50 hover:to-blue-50/30 hover:shadow-sm transition-all group border border-transparent hover:border-sky-100"
                        >
                          {/* Feature Name */}
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 group-hover:font-medium transition-all">
                              {feature.name}
                            </span>
                          </div>

                          {/* Feature Availability for Each Product */}
                          {feature.availability.map((isAvailable, productIndex) => (
                            <div 
                              key={productIndex} 
                              className="flex items-center justify-center"
                            >
                              {isAvailable ? (
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-sm shadow-green-500/30 group-hover:scale-110 transition-transform">
                                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                </div>
                              ) : (
                                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                                  <X className="w-4 h-4 text-gray-300" strokeWidth={2} />
                                </div>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}

              {/* CTA Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-14 pt-10 border-t-2 border-sky-200"
              >
                <div className="grid grid-cols-5 gap-6">
                  <div className="flex items-center">
                    <div className="text-sm font-semibold text-gray-700">
                      Ready to get started?
                    </div>
                  </div>
                  {comparisonTableData.products.map((product, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link 
                        href={product.link}
                        className="block w-full py-3.5 rounded-xl font-semibold transition-all bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                      >
                        Get Started
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-sky-500 via-blue-500 to-blue-600 rounded-3xl p-12 text-center text-white overflow-hidden shadow-2xl shadow-blue-500/30"
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg"
              >
                <Users className="w-8 h-8" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Still not sure which to choose?
              </h2>
              <p className="text-lg text-sky-50 mb-8 max-w-xl mx-auto">
                Our product specialists are here to help you find the perfect solution for your business needs.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Talk to Sales
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/trial"
                  className="px-8 py-3.5 bg-blue-700/50 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-blue-700/70 transition-all inline-flex items-center gap-2"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
