import { Link } from "react-router-dom";
import { ArrowRight, FileText, ClipboardCheck, DollarSign, BarChart3, LineChart, PieChart, Monitor, Users, Building, Headphones, Shield, Award, Layers, CheckCircle, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import heroImage from "@/assets/hero-image.jpg";
import dashboardImage from "@/assets/digital-dashboard.jpg";
import riyadhImage from "@/assets/riyadh-business.jpg";

const InsuranceSuite = () => {
  const coreCapabilities = [
    { icon: FileText, name: "Policy Lifecycle", description: "Complete policy management from quote to renewal" },
    { icon: ClipboardCheck, name: "Claims Settlement", description: "End-to-end claims adjudication and settlement" },
    { icon: DollarSign, name: "Billing & Pricing", description: "Enterprise-grade billing and dynamic pricing" },
  ];

  const operationsAnalytics = [
    { icon: BarChart3, name: "Operational Dashboards", description: "Real-time visibility into all operations" },
    { icon: LineChart, name: "Compliance Reporting", description: "Automated regulatory report generation" },
    { icon: PieChart, name: "Advanced Analytics", description: "AI-powered insights and predictions" },
  ];

  const digitalExperience = [
    { icon: Users, name: "Member Portal", description: "Full self-service capabilities" },
    { icon: Building, name: "Provider Portal", description: "Network and claims management" },
    { icon: Monitor, name: "Broker Portal", description: "Sales and distribution tools" },
    { icon: Headphones, name: "Service Center", description: "Omnichannel support platform" },
  ];

  const idealFor = [
    { title: "Large Insurers", description: "Manage complex, high-volume operations with ease" },
    { title: "Enterprise Organizations", description: "Enterprise-grade security and scalability" },
    { title: "Regulated Markets", description: "Full compliance with global regulatory frameworks" },
  ];

  const enterpriseFeatures = [
    "99.99% Uptime SLA",
    "Dedicated Account Manager",
    "24/7 Priority Support",
    "Custom Integrations",
    "On-premise Deployment Option",
    "Advanced Security & Audit",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Enterprise insurance operations in a modern setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/70" />
        </div>
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollFadeIn>
              <nav className="flex items-center gap-2 text-sm text-secondary-foreground/70 mb-6">
                <Link to="/" className="hover:text-secondary-foreground">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-secondary-foreground">Products</Link>
                <span>/</span>
                <span className="text-secondary-foreground">Insurance Suite</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Enterprise Solution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 font-display">
                Insurance Suite
              </h1>
              <p className="text-xl text-secondary-foreground/90 mb-4">
                Enterprise insurance product for end-to-end operations
              </p>
              <p className="text-lg text-secondary-foreground/80 mb-8">
                Insurance Suite is a complete enterprise-grade insurance product covering the entire insurance lifecycle from policy issuance to claims settlement and reporting — trusted by leading insurers worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="btn-primary">
                  Contact Sales
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 border-2 border-secondary-foreground text-secondary-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-secondary-foreground hover:text-secondary transition-colors">
                  Request Demo
                </a>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Enterprise Features Bar */}
      <section className="bg-primary py-6">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Insurance Capabilities */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollFadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Complete Solution</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Core Insurance Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to run enterprise insurance operations</p>
          </ScrollFadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <StaggerItem key={index}>
                <div className="card-service flex flex-col h-full text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto">
                    <capability.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground text-xl mb-3 font-display">{capability.name}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Operations and Analytics */}
      <section className="section-padding bg-muted overflow-hidden">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn direction="left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Powerful Analytics</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
                Operations and Analytics
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Insurance Suite includes enterprise-grade analytics and operational dashboards that provide complete visibility into your insurance operations.
              </p>
              <div className="space-y-4">
                {operationsAnalytics.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-display">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn direction="right">
              <img
                src={dashboardImage}
                alt="Insurance analytics dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Digital Experience */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollFadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Omnichannel</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Digital Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Complete digital portals for all stakeholders in your ecosystem</p>
          </ScrollFadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Global Markets Section */}
      <section className="section-padding bg-secondary overflow-hidden">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn direction="left">
              <img
                src={riyadhImage}
                alt="Modern business district"
                className="rounded-2xl shadow-2xl"
              />
            </ScrollFadeIn>

            <ScrollFadeIn direction="right">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Global Markets</span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 font-display">
                Built for Global Operations
              </h2>
              <p className="text-secondary-foreground/80 mb-6 text-lg">
                Insurance Suite is designed for insurers operating across multiple markets with configurable compliance and localized support options.
              </p>
              <ul className="space-y-4 mb-8">
                {["Global Regulatory Compliance", "Local Market Integrations", "Multi-language Support", "Data Residency Options", "24/7 Localized Support"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-secondary-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <ScrollFadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Enterprise Ready</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Ideal For</h2>
          </ScrollFadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {idealFor.map((item, index) => (
              <StaggerItem key={index}>
                <div className="bg-card rounded-2xl p-8 text-center border border-border h-full hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                    <Layers className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3 font-display">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent">
        <ScrollFadeIn className="container-wide mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 font-display">
            Ready for Enterprise-Grade Insurance Operations?
          </h2>
          <p className="text-primary-foreground/90 mb-10 max-w-2xl mx-auto text-lg">
            Join leading insurers worldwide who trust DCF Insurance Suite for their operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn-secondary text-lg px-10 py-4">
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground hover:text-primary transition-colors">
              Request Demo
            </a>
          </div>
        </ScrollFadeIn>
      </section>
    </Layout>
  );
};

export default InsuranceSuite;