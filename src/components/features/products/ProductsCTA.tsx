"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";

export default function ProductsCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
        <ScrollFadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Ready to Transform Your Insurance Operations?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join hundreds of insurers worldwide who trust DCF to power their digital transformation. Let's discuss which product is right for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to Sales
              </Link>
              <Link
                href="/comparison"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                View Comparison
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
