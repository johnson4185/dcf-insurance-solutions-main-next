import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqSections = [
  {
    title: "Getting Started",
    items: [
      {
        question: "How long does implementation take?",
        answer: "Most teams go live in 4–12 weeks depending on product scope, data migration, and integrations.",
      },
      {
        question: "Do you provide onboarding and training?",
        answer: "Yes. We provide onboarding plans, admin training, and role-based enablement for operations teams.",
      },
      {
        question: "Can we start small and scale later?",
        answer: "Absolutely. The platform is modular, so you can launch with core capabilities and add modules over time.",
      },
    ],
  },
  {
    title: "Security & Compliance",
    items: [
      {
        question: "What compliance standards do you support?",
        answer: "We support regional and global standards including SOC 2, ISO 27001, GDPR, and industry-specific regulations.",
      },
      {
        question: "How is data protected?",
        answer: "Data is encrypted in transit and at rest, with strict access controls, audit logs, and continuous monitoring.",
      },
      {
        question: "Do you offer data residency options?",
        answer: "Yes. We provide deployment options aligned with regional data residency requirements.",
      },
    ],
  },
  {
    title: "Products & Pricing",
    items: [
      {
        question: "How is pricing structured?",
        answer: "Pricing depends on product tier, modules selected, and scale. Contact sales for a tailored quote.",
      },
      {
        question: "Which products fit enterprise needs?",
        answer: "Insurance Suite and Insurance Build are designed for enterprise scale, compliance, and customization.",
      },
      {
        question: "Can you integrate with existing systems?",
        answer: "Yes. We provide APIs and pre-built integrations for core systems, payment providers, and data services.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider mb-4 px-4 py-2 bg-white rounded-full shadow-sm border border-primary/10">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Find quick answers about implementation, security, and product capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {faqSections.map((section) => (
              <div key={section.title} className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 font-display">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.question}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is ready to help with product guidance, demos, and implementation planning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 btn-primary">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/resources/support" className="btn-outline">
                Visit Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
