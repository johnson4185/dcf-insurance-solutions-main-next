"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: { text: string; href: string; icon?: React.ReactNode };
  secondaryButton?: { text: string; href: string; icon?: React.ReactNode };
  tertiaryButton?: { text: string; href: string; icon?: React.ReactNode };
  variant?: "default" | "gradient" | "dark";
  colorScheme?: "blue" | "indigo" | "purple" | "orange";
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  variant = "gradient",
  colorScheme = "blue",
}: CTASectionProps) {
  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    indigo: "bg-indigo-600 hover:bg-indigo-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    orange: "bg-orange-600 hover:bg-orange-700",
  };

  const buttonColor = colorClasses[colorScheme] || colorClasses.blue;

  const variantStyles = {
    default: "bg-secondary",
    gradient: "bg-gradient-to-br from-primary via-primary to-accent",
    dark: "bg-gray-900",
  };

  const textColor = variant === "default" ? "text-secondary-foreground" : "text-white";
  const descColor = variant === "default" ? "text-secondary-foreground/80" : variant === "dark" ? "text-gray-300" : "text-white/90";

  return (
    <section className={`py-20 md:py-28 ${variantStyles[variant]} relative overflow-hidden`}>
      {/* Background Pattern */}
      {variant === "gradient" && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
      )}

      <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
        <ScrollFadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-6 font-display`}>
              {title}
            </h2>
            <p className={`text-lg md:text-xl ${descColor} mb-10 max-w-2xl mx-auto`}>
              {description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={primaryButton.href}
                className={`inline-flex items-center gap-2 px-8 py-4 ${
                  variant === "default" ? "btn-primary" : variant === "dark" ? buttonColor : "bg-white text-primary hover:bg-gray-50"
                } font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105`}
              >
                {primaryButton.icon}
                {primaryButton.text}
                {!primaryButton.icon && <ArrowRight className="w-5 h-5" />}
              </Link>
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className={`inline-flex items-center gap-2 px-8 py-4 ${
                    variant === "gradient" || variant === "dark"
                      ? "bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20"
                      : "bg-white text-gray-900 hover:bg-gray-100"
                  } font-semibold rounded-lg transition-all`}
                >
                  {secondaryButton.icon}
                  {secondaryButton.text}
                  {!secondaryButton.icon && <ArrowRight className="w-5 h-5" />}
                </Link>
              )}
              {tertiaryButton && (
                <Link
                  href={tertiaryButton.href}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all"
                >
                  {tertiaryButton.icon}
                  {tertiaryButton.text}
                </Link>
              )}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
