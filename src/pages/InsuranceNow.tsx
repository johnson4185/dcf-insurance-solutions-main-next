import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, Workflow, Calculator, Receipt, Monitor, Shield, CheckCircle, TrendingUp, Users, Building, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import teamImage from "@/assets/team-collaboration.jpg";
import dashboardImage from "@/assets/digital-dashboard.jpg";

const InsuranceNow = () => {
  const coreCapabilities = [
    { icon: ClipboardCheck, name: "Claims Management", description: "End-to-end claims processing with automated adjudication" },
    { icon: Workflow, name: "Pre-Authorization", description: "Intelligent workflows for pre-auth approvals" },
    { icon: Calculator, name: "Pricing Engine", description: "Dynamic pricing with rate management tools" },
    { icon: Receipt, name: "Billing & Invoicing", description: "Automated billing cycles and payment collection" },
  ];

  const digitalExperience = [
    { icon: Users, name: "Member Portal", description: "Full-featured self-service for members" },
    { icon: Building, name: "Provider Portal", description: "Healthcare provider network management" },
    { icon: TrendingUp, name: "Broker Portal", description: "Advanced tools for distribution partners" },
  ];

  const regulatorySupport = [
    { name: "Local Market Integrations", description: "Integrations with local health and regulatory platforms" },
    { name: "Tax & Billing Gateways", description: "Support for regional tax and billing systems" },
    { name: "Identity & KYC", description: "Identity verification and KYC integrations" },
    { name: "Compliance Frameworks", description: "Support for common regulatory reporting requirements" },
  ];

  const idealFor = [
    { title: "Growing Insurers", description: "Scale operations without scaling complexity" },
    { title: "Expanding Product Lines", description: "Launch new products with speed" },
    { title: "Higher Volumes", description: "Handle thousands of daily transactions" },
  ];

  const features = [
    "Advanced Workflow Engine",
    "Real-time Analytics",
    "Multi-currency Support",
    "Provider Network Tools",
    "Automated Renewals",
    "Custom Reporting",
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
                <span className="text-primary-foreground">Insurance Now</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary-foreground text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Most Popular Choice
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-display">
                Insurance Now
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Advanced insurance product for growing operations
              </p>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Insurance Now extends core capabilities with advanced workflows, pricing controls, and comprehensive digital experiences — designed for insurers ready to scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="btn-secondary">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
                  Schedule Demo
                </a>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn direction="right">
              <img
                src={teamImage}
                alt="Insurance team collaborating in an office"
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Advanced Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Powerful tools to manage complex insurance operations</p>
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

      {/* Analytics Section */}
      <section className="section-padding bg-muted overflow-hidden">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn direction="left">
              <img
                src={dashboardImage}
                alt="Insurance analytics dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </ScrollFadeIn>

            <ScrollFadeIn direction="right">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Real-time Insights</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
                Data-Driven Decision Making
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Insurance Now includes powerful analytics dashboards that give you real-time visibility into claims, policies, and operational performance.
              </p>
              <ul className="space-y-4 mb-8">
                {["Claims Analytics Dashboard", "Policy Performance Reports", "Provider Network Insights", "Custom KPI Tracking"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Digital Experience */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollFadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Digital Portals</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Digital Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive portals for all stakeholders</p>
          </ScrollFadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {digitalExperience.map((item, index) => (
              <StaggerItem key={index}>
                <div className="card-service flex flex-col h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3 font-display">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Regulatory Support */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn direction="left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Compliance Ready</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
                Regulatory Support
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Insurance Now is built for compliance with major regulatory frameworks and local market requirements, helping you stay audit-ready.
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                {regulatorySupport.map((item, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1 font-display">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollFadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Perfect Match</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Ideal For</h2>
          </ScrollFadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {idealFor.map((item, index) => (
              <StaggerItem key={index}>
                <div className="card-service text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3 font-display">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-navy-light">
        <ScrollFadeIn className="container-wide mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 font-display">
            Get Started with Insurance Now
          </h2>
          <p className="text-secondary-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
            Ready to scale your insurance operations? Start your free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn-primary text-lg px-10 py-4">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 border-2 border-secondary-foreground text-secondary-foreground px-10 py-4 rounded-full font-semibold text-lg hover:bg-secondary-foreground hover:text-secondary transition-colors">
              View Pricing
            </a>
          </div>
        </ScrollFadeIn>
      </section>
    </Layout>
  );
};

export default InsuranceNow;