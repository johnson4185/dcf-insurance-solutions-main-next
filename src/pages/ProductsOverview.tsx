import { Link } from "react-router-dom";
import { ArrowRight, Building, TrendingUp, Briefcase, Wrench, Settings, CheckCircle, Zap, Globe, Award, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import riyadhImage from "@/assets/hero-image.jpg";

const ProductsOverview = () => {
  const products = [
    {
      icon: Zap,
      name: "Insurance Basic",
      tagline: "Start Your Digital Journey",
      description: "A foundational insurance product providing essential capabilities to manage policies, members, and claims with configurable compliance for local markets.",
      bestFor: ["Small insurers", "Pilot programs", "Focused operations"],
      path: "/products/insurance-basic",
      highlight: false,
      features: ["Policy Administration", "Member Management", "Claims Intake", "Local Compliance Support"],
    },
    {
      icon: TrendingUp,
      name: "Insurance Now",
      tagline: "Scale With Confidence",
      description: "An advanced insurance product designed to support growing insurers with complex workflows, pricing engines, and comprehensive digital experiences.",
      bestFor: ["Mid-size insurers", "Expanding operations", "High transaction volumes"],
      path: "/products/insurance-now",
      highlight: true,
      features: ["Claims Management", "Pre-Authorization", "Pricing Engine", "Local Integrations"],
    },
    {
      icon: Award,
      name: "Insurance Suite",
      tagline: "Enterprise Excellence",
      description: "A comprehensive enterprise insurance product covering the full insurance lifecycle with advanced analytics and complete regulatory compliance.",
      bestFor: ["Large insurers", "Enterprise organizations", "Regulated markets"],
      path: "/products/insurance-suite",
      highlight: false,
      features: ["Full Lifecycle", "Advanced Analytics", "Omnichannel Portals", "Enterprise SLA"],
    },
    {
      icon: Building,
      name: "TPA Product",
      tagline: "Operations Focused",
      description: "An operations-focused insurance product built specifically for third-party administrators managing claims and provider networks.",
      bestFor: ["TPAs", "Claims administrators", "Healthcare managers"],
      path: "/products",
      highlight: false,
      features: ["Claims Processing", "Provider Network", "Client Reporting", "Multi-client Support"],
    },
    {
      icon: Layers,
      name: "Insurance Build",
      tagline: "Custom Solutions",
      description: "A customizable insurance product allowing organizations to select and combine modules based on their unique operational needs.",
      bestFor: ["Custom insurance models", "Specialized operations", "Unique workflows"],
      path: "/products",
      highlight: false,
      features: ["Modular Architecture", "Custom Workflows", "API-First Design", "Flexible Pricing"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
            <img
            src={riyadhImage}
            alt="Modern business district"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/70" />
        </div>
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <ScrollFadeIn className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-secondary-foreground/70 mb-6">
              <Link to="/" className="hover:text-secondary-foreground">Home</Link>
              <span>/</span>
              <span className="text-secondary-foreground">Products</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 font-display">
              DCF Insurance Products
            </h1>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl">
              DCF offers a range of insurance products designed to support different stages of insurance operations, from early-stage teams to large enterprises across global markets.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollFadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Our Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Choose Your Product
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the right insurance platform for your organization's needs
            </p>
          </ScrollFadeIn>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {products.slice(0, 3).map((product, index) => (
              <StaggerItem key={index}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col ${
                    product.highlight
                      ? "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-xl"
                      : "card-service"
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    product.highlight ? "bg-white/20" : "bg-gradient-to-br from-primary/20 to-accent/20"
                  }`}>
                    <product.icon className={`w-8 h-8 ${product.highlight ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${product.highlight ? "text-primary-foreground/70" : "text-primary"}`}>
                    {product.tagline}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-display">{product.name}</h3>
                  <p className={`text-sm mb-6 flex-grow ${product.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${product.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                      Key Features
                    </div>
                    <div className="space-y-2">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 ${product.highlight ? "text-primary-foreground" : "text-primary"}`} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${product.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                      Best For
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.bestFor.map((item, i) => (
                        <span key={i} className={`text-xs px-3 py-1 rounded-full ${
                          product.highlight ? "bg-white/20" : "bg-primary/10 text-foreground"
                        }`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={product.path}
                    className={`link-arrow mt-auto ${product.highlight ? "text-primary-foreground" : ""}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.slice(3).map((product, index) => (
              <StaggerItem key={index}>
                <div className="card-service h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                    <product.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    {product.tagline}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.bestFor.map((item, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to={product.path} className="link-arrow mt-auto">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Compare CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent">
        <ScrollFadeIn className="container-wide mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">
            Not sure which product fits your needs?
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
            Compare all features and capabilities across our product range to find the perfect match.
          </p>
          <Link
            to="/comparison"
            className="btn-secondary text-lg px-10 py-4"
          >
            Compare Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollFadeIn>
      </section>
    </Layout>
  );
};

export default ProductsOverview;