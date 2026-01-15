"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EnterprisePage() {
  return (
    <main>
      <section className="relative pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
              Enterprise Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Scalable, secure, and compliant insurance platforms for large organizations
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/products/insurance-suite" className="inline-flex items-center gap-2 btn-primary">
                View Insurance Suite
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
