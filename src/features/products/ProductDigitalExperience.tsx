"use client";

import { ScrollFadeIn } from "@/components/common/ScrollAnimations";
import type { FeatureItem } from "@/types";

interface ProductDigitalExperienceProps {
  title: string;
  description: string;
  experiences: FeatureItem[];
  colorScheme: string;
}

export default function ProductDigitalExperience({ title, description, experiences, colorScheme }: ProductDigitalExperienceProps) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    indigo: "bg-indigo-100 text-indigo-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  const iconColor = colorClasses[colorScheme as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-wide mx-auto px-4 md:px-8">
        <ScrollFadeIn>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <ScrollFadeIn key={item.name} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    {ItemIcon && (
                      <div className={`w-12 h-12 rounded-lg ${iconColor} flex items-center justify-center flex-shrink-0`}>
                        <ItemIcon className="w-6 h-6" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
