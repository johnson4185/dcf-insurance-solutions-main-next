"use client";

import { ScrollFadeIn } from "@/components/shared/ScrollAnimations";
import { Check } from "lucide-react";

interface Integration {
  name: string;
  description: string;
  icon?: any;
}

interface ProductIntegrationsProps {
  title: string;
  description: string;
  integrations: Integration[];
  colorScheme: string;
}

export default function ProductIntegrations({ title, description, integrations, colorScheme }: ProductIntegrationsProps) {
  const gradientClasses = {
    blue: "from-blue-900 to-blue-800",
    indigo: "from-indigo-900 to-indigo-800",
    purple: "from-purple-900 to-purple-800",
    orange: "from-orange-900 to-orange-800",
  };

  const gradient = gradientClasses[colorScheme as keyof typeof gradientClasses] || gradientClasses.blue;

  return (
    <section className={`py-16 bg-gradient-to-br ${gradient} text-white`}>
      <div className="container-wide mx-auto px-4 md:px-8">
        <ScrollFadeIn>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-gray-200">{description}</p>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <ScrollFadeIn key={integration.name} delay={index * 0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{integration.name}</h3>
                    <p className="text-sm text-gray-200">{integration.description}</p>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
