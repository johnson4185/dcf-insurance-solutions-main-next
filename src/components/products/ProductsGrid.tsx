"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { allProducts, productsOverviewContent } from "@/data/products.data";
import { ScrollFadeIn } from "@/components/shared/ScrollAnimations";

export default function ProductsGrid() {
  const { sectionTitle, sectionDescription } = productsOverviewContent;

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container-wide mx-auto px-4 md:px-8">
        {/* Section Header */}
        <ScrollFadeIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Choose Your Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {sectionTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {sectionDescription}
            </p>
          </div>
        </ScrollFadeIn>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product, index) => {
            const Icon = product.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                }}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.2 }
                }}
                className={`group relative bg-white border rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${
                  product.highlight
                    ? "border-blue-600 shadow-lg hover:shadow-xl"
                    : "border-gray-200 hover:border-blue-500 hover:shadow-xl"
                }`}
              >

                {product.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <motion.span 
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
                          '0 15px 35px -5px rgba(59, 130, 246, 0.5)',
                          '0 10px 25px -5px rgba(59, 130, 246, 0.3)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </motion.span>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 mb-2 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-md mb-4">
                    {product.tagline}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6">
                    {product.features.slice(0, 4).map((feature) => (
                      <div 
                        key={feature} 
                        className="flex items-start gap-2.5"
                      >
                        <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Best For */}
                  <div className="mb-6 pt-6 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Best For
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.bestFor.map((item) => (
                        <span
                          key={item}
                          className="inline-block px-2.5 py-1 bg-gray-50 text-xs text-gray-600 rounded-md font-medium border border-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 mt-auto pt-6 relative z-10">
                  <Link
                    href={product.path}
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/trial"
                      className="block px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 text-center text-sm font-medium rounded-lg transition-colors border border-gray-300"
                    >
                      Free Trial
                    </Link>
                    <Link
                      href="/purchase"
                      className="block px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 text-center text-sm font-medium rounded-lg transition-colors border border-gray-300"
                    >
                      Purchase
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
