import Link from "next/link";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";

export default function DocsIndex() {
  const docs = [
    { title: 'Quick Start', href: '/resources/docs/quickstart', description: 'Get started quickly with DCF' },
    { title: 'Integration Guides', href: '/resources/docs/integrations', description: 'Connect with third-party systems' },
    { title: 'Admin Guide', href: '/resources/docs/admin', description: 'Administration and configuration' },
  ];

  return (
    <main className="pt-16">
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">Documentation</h1>
              <p className="text-muted-foreground">Guides, tutorials, and reference to help you integrate and operate DCF products.</p>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {docs.map((d) => (
              <ScrollFadeIn key={d.href}>
                <Link href={d.href} className="block bg-card border border-border rounded-lg p-6 hover:shadow-lg">
                  <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
                  <p className="text-muted-foreground text-sm">{d.description}</p>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
