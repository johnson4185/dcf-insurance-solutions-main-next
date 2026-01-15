"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-wide mx-auto px-4 md:px-8 text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4 font-display">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 btn-primary"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
