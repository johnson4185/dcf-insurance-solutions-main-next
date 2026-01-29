import Link from "next/link";
import { industriesDetail } from "@/data/industries.data";

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider mb-4 px-4 py-2 bg-white rounded-full shadow-sm border border-primary/10">
              By Industry
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
              Industries We Serve
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore how DCF supports each insurance vertical with modern platforms, proven workflows, and regulatory-ready capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industriesDetail.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
                    {industry.name}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {industry.highlights && industry.highlights.length > 0 && (
                    <ul className="mb-8 space-y-2 text-sm text-muted-foreground">
                      {industry.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={industry.ctaHref}
                    className="mt-auto inline-flex items-center justify-center btn-primary"
                  >
                    Explore Products
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
