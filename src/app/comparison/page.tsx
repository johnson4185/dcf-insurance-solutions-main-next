'use client';

import { comparisonTableData, comparisonPageContent } from '@/data/comparison.data';
import { Check, X, Sparkles, ArrowRight, Shield, Zap, Users, Building2, Globe, BarChart3, Code, Award, Star, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';

const categoryIcons = {
  'CORE MODULES': Code,
  'DIGITAL CAPABILITIES': Globe,
  'COMPLIANCE & INTEGRATIONS': Shield,
  'ANALYTICS & REPORTING': BarChart3,
  'ENTERPRISE': Building2,
};

export default function ComparisonPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Hero Section - Atlassian Style */}
      <section ref={heroRef} className="relative py-32 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
          >
            <Award className="w-4 h-4" />
            Enterprise Product Comparison
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent"
          >
            Find Your Perfect Solution
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Compare features, capabilities, and pricing across our complete insurance platform portfolio. 
            Choose the solution that scales with your business.
          </motion.p>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Building2, label: '4 Products', value: 'Complete Suite' },
              { icon: Users, label: '50K+', value: 'Active Users' },
              { icon: Shield, label: '100%', value: 'Compliant' },
              { icon: TrendingUp, label: '99.9%', value: 'Uptime SLA' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Product Cards Section */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Lineup</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each product is designed for specific needs, from startups to enterprise organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {comparisonTableData.products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer ${
                  product.highlighted ? 'ring-2 ring-blue-600 ring-offset-4' : ''
                }`}
                onClick={() => setSelectedProduct(product.name)}
              >
                {product.highlighted && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-xs font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Product Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 overflow-hidden">
                  {/* SVG Dashboard Preview */}
                  <img 
                    src={`/images/products/${product.name.toLowerCase().replace(' ', '-')}-dashboard.svg`}
                    alt={`${product.name} Dashboard`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-semibold flex items-center gap-2">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.subtext}
                  </p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-blue-600">{product.price.split('/')[0]}</span>
                    <span className="text-gray-500 text-sm">/{product.price.split('/')[1]}</span>
                  </div>
                  <Link 
                    href={product.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group/link"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">{/* Sticky Header with Products */}
          <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md shadow-xl rounded-t-2xl border border-gray-200 py-6">
            <div className="overflow-x-auto px-6">
              <div className="min-w-[1200px]">
                <div className="grid grid-cols-5 gap-6">
                  {/* Feature Column Header */}
                  <div className="flex items-end pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Compare</span>
                        <span className="text-lg font-bold text-gray-900">Features</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Headers */}
                  {comparisonTableData.products.map((product, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`text-center p-4 rounded-xl transition-all cursor-pointer ${
                        selectedProduct === product.name 
                          ? 'bg-blue-50 ring-2 ring-blue-600' 
                          : 'hover:bg-gray-50'
                      } ${product.highlighted ? 'bg-gradient-to-br from-blue-50 to-purple-50' : ''}`}
                      onClick={() => setSelectedProduct(selectedProduct === product.name ? null : product.name)}
                    >
                      {product.highlighted && (
                        <div className="flex items-center justify-center gap-1 mb-2">
                          <Star className="w-3 h-3 text-blue-600 fill-blue-600" />
                          <span className="text-xs font-bold text-blue-600 uppercase">Popular</span>
                        </div>
                      )}
                      <h3 className="text-sm font-bold mb-1 text-gray-900">{product.name}</h3>
                      <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {product.price}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{product.subtext}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Table Content */}
          <div className="bg-white rounded-b-2xl shadow-xl border border-t-0 border-gray-200 overflow-hidden">
            <div className="overflow-x-auto px-6 py-8">
              <div className="min-w-[1200px]">

              {/* Comparison Categories */}
              {comparisonTableData.categories.map((category, categoryIndex) => {
                const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Code;
                
                return (
                  <motion.div 
                    key={categoryIndex} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="mb-12 last:mb-0"
                  >
                    {/* Category Header */}
                    <motion.div 
                      className="relative mb-6 group cursor-pointer"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center gap-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 px-6 rounded-xl shadow-lg">
                        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                            {category.name}
                          </h2>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-lg font-bold">{category.features.length} Features</span>
                            <Zap className="w-4 h-4 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-3 left-6 right-6 h-3 bg-gradient-to-b from-gray-900/10 to-transparent rounded-b-xl blur-md"></div>
                    </motion.div>

                    {/* Features */}
                    <div className="space-y-1">
                      {category.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                          whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                          className="grid grid-cols-5 gap-6 py-4 px-4 rounded-lg border border-transparent hover:border-blue-200 transition-all duration-200 group"
                        >
                          {/* Feature Name */}
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 group-hover:font-semibold transition-all">
                              {feature.name}
                            </span>
                          </div>

                          {/* Feature Availability for Each Product */}
                          {feature.availability.map((isAvailable, productIndex) => (
                            <motion.div 
                              key={productIndex} 
                              className="flex items-center justify-center"
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              {isAvailable ? (
                                <motion.div 
                                  className="relative"
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                                    <Check className="w-5 h-5 text-white font-bold" strokeWidth={3} />
                                  </div>
                                  <motion.div
                                    className="absolute inset-0 bg-green-400 rounded-full -z-10"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  />
                                </motion.div>
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                                  <X className="w-5 h-5 text-gray-400" strokeWidth={2} />
                                </div>
                              )}
                            </motion.div>
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
                transition={{ duration: 0.6 }}
                className="mt-16 pt-12 border-t-2 border-gray-200"
              >
                <div className="grid grid-cols-5 gap-6">
                  <div className="flex items-center">
                    <div className="text-sm font-semibold text-gray-500">
                      Ready to get started?
                    </div>
                  </div>
                  {comparisonTableData.products.map((product, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link 
                        href={product.link}
                        className={`block w-full py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl ${
                          product.highlighted
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Get Started
                          <ArrowRight className="w-4 h-4" />
                        </span>
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
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-12 overflow-hidden shadow-2xl"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10 text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
              >
                <Users className="w-8 h-8" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Still not sure which to choose?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our product specialists are here to help you find the perfect solution for your business needs.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2"
                >
                  Talk to Sales
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/trial"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all inline-flex items-center gap-2"
                >
                  Start Free Trial
                  <Zap className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
