"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Monitor } from "lucide-react";

interface ProductHeroProps {
  badge: { icon: any; text: string };
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
  colorScheme: string; // e.g., "blue", "indigo", "purple", "orange"
  image?: { src: string; alt: string };
}

export default function ProductHero({ badge, title, subtitle, description, features, cta, colorScheme, image }: ProductHeroProps) {
  const Icon = badge.icon;
  
  const colorClasses = {
    blue: {
      bg: "from-blue-50",
      badge: "bg-blue-600",
      subtitle: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700",
      icon: "text-blue-600",
      iconBg: "from-blue-100 to-blue-50",
    },
    indigo: {
      bg: "from-indigo-50",
      badge: "bg-indigo-600",
      subtitle: "text-indigo-600",
      button: "bg-indigo-600 hover:bg-indigo-700",
      icon: "text-indigo-600",
      iconBg: "from-indigo-100 to-indigo-50",
    },
    purple: {
      bg: "from-purple-50",
      badge: "bg-purple-600",
      subtitle: "text-purple-600",
      button: "bg-purple-600 hover:bg-purple-700",
      icon: "text-purple-600",
      iconBg: "from-purple-100 to-purple-50",
    },
    orange: {
      bg: "from-orange-50",
      badge: "bg-orange-600",
      subtitle: "text-orange-600",
      button: "bg-orange-600 hover:bg-orange-700",
      icon: "text-orange-600",
      iconBg: "from-orange-100 to-orange-50",
    },
  };

  const colors = colorClasses[colorScheme as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <section className={`relative pt-20 pb-16 bg-gradient-to-b ${colors.bg} to-white overflow-hidden`}>
      <div className="container-wide mx-auto px-4 md:px-8">
        {/* Back and Compare buttons */}
        <div className="flex gap-3 mb-6">
          <Link href="/products" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all border border-gray-200 shadow-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <Link href="/comparison" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all border border-gray-200 shadow-sm">
            Compare Features
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.badge} text-white font-medium text-xs mb-4`}>
              <Icon className="w-3.5 h-3.5" />
              {badge.text}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">{title}</h1>
            <p className={`text-xl ${colors.subtitle} font-semibold mb-4`}>{subtitle}</p>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">{description}</p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href={cta.primary.href} className={`inline-flex items-center gap-2 px-6 py-3 ${colors.button} text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg`}>
                {cta.primary.text}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={cta.secondary.href} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-900">
                {cta.secondary.text}
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${colors.iconBg}`}>
              {image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Monitor className={`w-20 h-20 ${colors.icon} mx-auto mb-4`} />
                    <p className="text-sm text-gray-600">{title} Dashboard</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
