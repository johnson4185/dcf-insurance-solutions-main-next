"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Globe, BarChart3, Lock, Smartphone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with ISO 27001 and SOC 2 compliance to protect your data."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance delivering sub-second response times for all operations."
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description: "Built-in support for SAMA, CCHI, NPHIES, and other regulatory requirements."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and predictive analytics to drive better business decisions."
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "GDPR and HIPAA compliant with advanced encryption at rest and in transit."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Native mobile apps for iOS and Android with offline capabilities."
  }
];

export default function ProductsFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Modern Insurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platforms are designed with cutting-edge technology to meet the demands 
            of today's insurance operations and tomorrow's innovations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-all">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/0 to-blue-600/0 group-hover:from-sky-400/5 group-hover:to-blue-600/5 transition-all pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
