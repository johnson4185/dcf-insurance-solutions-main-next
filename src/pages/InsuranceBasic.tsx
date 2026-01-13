import { Link } from "react-router-dom";
import { ArrowRight, FileText, Users, ClipboardList, DollarSign, Monitor, Shield, CheckCircle, Zap, Star } from "lucide-react";
import Layout from "@/components/Layout";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import digitalServicesImage from "@/assets/digital-services.jpg";

const InsuranceBasic = () => {
  const coreCapabilities = [
    { icon: FileText, name: "Policy Administration", description: "Manage policy lifecycle from quote to renewal with ease" },
    { icon: Users, name: "Member Management", description: "Comprehensive member enrollment and data management" },
    { icon: ClipboardList, name: "Claims Intake", description: "Streamlined claims submission and initial processing" },
    { icon: DollarSign, name: "Billing Setup", description: "Flexible billing configuration and payment tracking" },
  ];

  const digitalExperience = [
    { name: "Member Portal", description: "Self-service portal for policyholders" },
    { name: "Broker Portal", description: "Tools for broker partners to manage clients" },
  ];

  const regulatorySupport = [
    { name: "Local Market Integrations", description: "Integrations with local regulatory and health platforms" },
    { name: "Tax & Billing Gateways", description: "Support for regional tax and billing systems" },
    { name: "Payment Gateways", description: "Payment and billing integrations" },
  ];

  const idealFor = [
    { title: "Small Insurance Teams", description: "Perfect for teams of 10-50 looking to digitize operations" },
    { title: "New Insurance Products", description: "Ideal for launching new lines of business quickly" },
    { title: "Pilot Programs", description: "Test and validate insurance concepts with minimal investment" },
  ];

  const features = [
    "Multi-language Interface",
    "Cloud-Based Platform",
    "99.9% Uptime SLA",
    "Data Residency Options",
    "24/7 Technical Support",
    "API Integration Ready",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn direction="left">
              <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6">
                <Link to="/" className="hover:text-primary-foreground">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-primary-foreground">Products</Link>
                <span>/</span>
                <span className="text-primary-foreground">Insurance Basic</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary-foreground text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Quick Start Solution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-display">
                Insurance Basic
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Essential insurance product for small teams
              </p>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Insurance Basic provides core insurance capabilities required to manage policies, members, and basic claims workflows — perfect for starting your digital transformation journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="btn-secondary">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
                  Request Demo
                </a>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn direction="right">
                <img
                src={digitalServicesImage}
                alt="Digital insurance services and collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-secondary py-6">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-secondary-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollFadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Platform Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to run your insurance operations</p>
          </ScrollFadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCapabilities.map((capability, index) => (
              <StaggerItem key={index}>
                <div className="card-service flex flex-col h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 mx-auto">
                    <capability.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3 font-display">{capability.name}</h3>
                  <p className="text-muted-foreground text-sm">{capability.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Digital Experience & Regulatory */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollFadeIn direction="left">
              <div className="bg-card rounded-2xl p-8 h-full border border-border">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Monitor className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground font-display">Digital Experience</h2>
                </div>
                <div className="space-y-4">
                  {digitalExperience.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn direction="right">
              <div className="bg-card rounded-2xl p-8 h-full border border-border">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground font-display">Regulatory Support</h2>
                </div>
                <div className="space-y-4">
                  {regulatorySupport.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollFadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Best Fit</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Ideal For</h2>
          </ScrollFadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {idealFor.map((item, index) => (
              <StaggerItem key={index}>
                <div className="card-service text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Star className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3 font-display">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-navy-light">
        <ScrollFadeIn className="container-wide mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 font-display">
            Get Started with Insurance Basic
          </h2>
          <p className="text-secondary-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
            Start your digital transformation journey today with our essential insurance platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="btn-primary text-lg px-10 py-4"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-secondary-foreground text-secondary-foreground px-10 py-4 rounded-full font-semibold text-lg hover:bg-secondary-foreground hover:text-secondary transition-colors"
            >
              View Pricing
            </a>
          </div>
        </ScrollFadeIn>
      </section>
    </Layout>
  );
};

export default InsuranceBasic;