"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ScrollFadeIn } from "@/components/shared/ScrollAnimations";
import type { CapabilityItem } from "@/types";

interface ProductCapabilitiesProps {
  title: string;
  description: string;
  capabilities: CapabilityItem[];
  colorScheme: string;
}

export default function ProductCapabilities({ title, description, capabilities, colorScheme }: ProductCapabilitiesProps) {
  const colorClasses = {
    blue: "bg-blue-600 group-hover:bg-blue-700",
    indigo: "bg-indigo-600 group-hover:bg-indigo-700",
    purple: "bg-purple-600 group-hover:bg-purple-700",
    orange: "bg-orange-600 group-hover:bg-orange-700",
  };

  const bgColor = colorClasses[colorScheme as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <section className="py-16 bg-white">
      <div className="container-wide mx-auto px-4 md:px-8">
        <ScrollFadeIn>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const CapIcon = capability.icon;
            return (
              <ScrollFadeIn key={capability.name} delay={index * 0.1}>
                <motion.div className="group" whileHover={{ y: -4 }}>
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center mb-4 transition-colors`}>
                      <CapIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.name}</h3>
                    <p className="text-gray-600 mb-4">{capability.description}</p>
                  </div>
                  {capability.features && (
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
