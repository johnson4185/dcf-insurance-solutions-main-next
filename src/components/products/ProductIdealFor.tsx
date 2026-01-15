"use client";

import { ScrollFadeIn } from "@/components/shared/ScrollAnimations";
import type { IdealForItem } from "@/types";

interface ProductIdealForProps {
  title: string;
  description: string;
  segments: IdealForItem[];
  colorScheme: string;
}

export default function ProductIdealFor({ title, description, segments, colorScheme }: ProductIdealForProps) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    indigo: "bg-indigo-100 text-indigo-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  const iconColor = colorClasses[colorScheme as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <section className="py-16 bg-white">
      <div className="container-wide mx-auto px-4 md:px-8">
        <ScrollFadeIn>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <ScrollFadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  {ItemIcon && (
                    <div className={`w-12 h-12 rounded-lg ${iconColor} flex items-center justify-center mb-4`}>
                      <ItemIcon className="w-6 h-6" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
