import Link from "next/link";
import { ArrowRight, HeartHandshake, Sparkles, Users } from "lucide-react";

const lifeAtDcf = [
  {
    icon: Users,
    title: "Collaborative Teams",
    description: "Work with product, engineering, and insurance experts who value clarity, ownership, and outcomes.",
  },
  {
    icon: Sparkles,
    title: "Meaningful Impact",
    description: "Help modernize the insurance industry with platforms that improve customer experiences and operational resilience.",
  },
  {
    icon: HeartHandshake,
    title: "People-First Culture",
    description: "We prioritize transparency, continuous learning, and a supportive environment where everyone can thrive.",
  },
];

const benefits = [
  "Flexible work arrangements",
  "Learning and development budget",
  "Comprehensive health coverage",
  "Growth-focused performance reviews",
  "Team retreats and offsites",
];

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider mb-4 px-4 py-2 bg-white rounded-full shadow-sm border border-primary/10">
              Careers at DCF
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
              Build the future of insurance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a team delivering modern insurance platforms for carriers, brokers, and enterprise customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              No open roles right now
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We’re not hiring at the moment, but we’re always happy to meet great talent. Share your profile and we’ll reach out when a role opens.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 btn-primary">
              Send Your Profile
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Life at DCF */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Life at DCF
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We’re building a culture rooted in ownership, transparency, and care for our customers and teammates.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {lifeAtDcf.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                Benefits & growth
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We invest in the wellbeing and growth of our team through flexible policies, learning support, and a culture of feedback.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 btn-outline">
                Ask About Careers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
