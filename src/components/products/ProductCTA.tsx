"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn } from "@/components/shared/ScrollAnimations";

interface ProductCTAProps {
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  tertiaryButton?: { text: string; href: string };
  colorScheme: string;
}

export default function ProductCTA({ title, description, primaryButton, secondaryButton, tertiaryButton, colorScheme }: ProductCTAProps) {
  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    indigo: "bg-indigo-600 hover:bg-indigo-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    orange: "bg-orange-600 hover:bg-orange-700",
  };

  const buttonColor = colorClasses[colorScheme as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-xl text-gray-300 mb-8">{description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={primaryButton.href} className={`inline-flex items-center gap-2 px-8 py-4 ${buttonColor} text-white font-semibold rounded-lg transition-all shadow-lg`}>
                {primaryButton.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
              {secondaryButton && (
                <Link href={secondaryButton.href} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all">
                  {secondaryButton.text}
                </Link>
              )}
              {tertiaryButton && (
                <Link href={tertiaryButton.href} className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all">
                  {tertiaryButton.text}
                </Link>
              )}
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
