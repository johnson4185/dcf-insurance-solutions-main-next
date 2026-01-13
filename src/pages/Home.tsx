import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileText, DollarSign, Scale, Heart, Car, Plane, Home as HomeIcon, Users, Building, Play, CheckCircle, Zap, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import heroImage from "@/assets/hero-image.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import dashboardImage from "@/assets/digital-dashboard.jpg";
import { solutions as capabilities } from "@/lib/solutionsData";

const Home = () => {


  const industries = [
    { icon: Heart, name: "Health Insurance" },
    { icon: Users, name: "Life Insurance" },
    { icon: Car, name: "Motor Insurance" },
    { icon: Plane, name: "Travel Insurance" },
    { icon: HomeIcon, name: "Property & Casualty" },
    { icon: Building, name: "Third Party Administrators" },
  ];

  const products = [
    {
      name: "Insurance Basic",
      description: "Essential insurance product for small or focused teams starting their digital journey.",
      path: "/products/insurance-basic",
      highlight: false,
      icon: Zap,
    },
    {
      name: "Insurance Now",
      description: "Advanced insurance product for growing organizations with complex workflows.",
      path: "/products/insurance-now",
      highlight: true,
      icon: Globe,
    },
    {
      name: "Insurance Suite",
      description: "Complete enterprise insurance product covering the full lifecycle end-to-end.",
      path: "/products/insurance-suite",
      highlight: false,
      icon: Award,
    },
  ];

  const stats = [
    { value: "50+", label: "Insurance Clients" },
    { value: "5M+", label: "Policies Managed" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Global Support" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[700px] md:min-h-[800px] overflow-hidden">
        {/* Background Video (uses poster image as fallback) */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={heroImage}
            aria-hidden
          >
            <source src="/hero.mp4" type="video/mp4" />
            {/* Fallback image for browsers that don't support video */}
            <img
              src={heroImage}
              alt="Insurance professionals collaborating in a modern office"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/75 to-secondary/55" />
        </div>
        
        <div className="container-wide mx-auto px-4 md:px-8 py-28 md:py-36 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Trusted by Leading Insurers Worldwide
            </motion.span>
              <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6 font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Enterprise Insurance Products for Global Markets
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              DCF builds insurance products that help insurers worldwide operate efficiently, stay compliant with regional regulations, and scale with confidence.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/comparison" className="btn-primary">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/products" className="btn-outline border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                Explore Products
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-display">{stat.value}</div>
                  <div className="text-sm text-secondary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Built for Insurance Operations */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollFadeIn className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">WHY DCF</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-display">
              Proven insurance platforms for modern insurers
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              A unified, enterprise-grade insurance platform covering core systems, digital experiences, analytics, and compliance — built for insurers, brokers, TPAs, and reinsurers.
            </p>
          </ScrollFadeIn>

          <div className="why-grid mt-8">
            <StaggerContainer className="why-cards">
              {capabilities.slice(0,6).map((c, i) => (
                <StaggerItem key={i}>
                  <div className="why-card h-full">
                    <div className="card-inner">
                      <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                      <p className="text-sm mb-4 text-muted-foreground">{c.description}</p>
                      <Link className="explore" to={`/solutions/${c.slug}`}>
                        <span>Explore solutions</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="why-image h-[520px] relative">
              <img src={heroImage} alt="Business collaboration" />

              <div className="why-cta">
                <h3 className="text-2xl font-bold mb-2">Request a Consultation</h3>
                <p className="text-sm">Talk to our team to explore how DCF can serve as the core insurance platform for your organization.</p>
                <div className="mt-6">
                  <a href="/contact" className="font-semibold inline-flex items-center gap-3 contact-link">
                    <span>Contact Us</span>
                    <span className="contact-button" aria-hidden="true">
                      <ArrowRight className="w-5 h-5 contact-arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Content Section */}
      <section className="section-padding bg-muted overflow-hidden">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn direction="left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Digital Transformation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
                Powering the Future of Insurance Operations
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Our platform is designed to accelerate digital transformation across markets, with multi-language support and configurable regulatory workflows.
              </p>
              <ul className="space-y-4 mb-8">
                {["NPHIES Integration Ready", "CHI Compliance Built-in", "ZATCA e-Invoicing Support", "Arabic & English Interface"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/products" className="link-arrow text-lg">
                Learn More About Our Technology
                <ArrowRight className="w-5 h-5" />
              </Link>
            </ScrollFadeIn>

            <ScrollFadeIn direction="right">
              <div className="relative">
                <img
                  src={teamImage}
                  alt="Business team collaborating on insurance solutions"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-3xl font-bold font-display">98%</div>
                  <div className="text-sm opacity-90">Client Satisfaction</div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-wide mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn direction="left">
              <div className="relative group cursor-pointer">
                <img
                  src={dashboardImage}
                  alt="Insurance analytics dashboard"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn direction="right">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">See It In Action</span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 font-display">
                Real-Time Analytics & Reporting
              </h2>
              <p className="text-secondary-foreground/80 mb-6 text-lg">
                Monitor your entire insurance operation with powerful dashboards. Get insights into claims, policies, and regulatory compliance at a glance.
              </p>
              <Link to="/products/insurance-suite" className="btn-primary">
                Explore Insurance Suite
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="watermark-text left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          INDUSTRIES
        </div>
        <div className="container-wide mx-auto relative z-10">
          <ScrollFadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Sectors We Serve</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-display">
              Industry Solutions
            </h2>
          </ScrollFadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <StaggerItem key={index}>
                <div className="bg-card rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <industry.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{industry.name}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Choose Your Product */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="watermark-text left-1/2 top-20 -translate-x-1/2 text-white/5">
          PRODUCTS
        </div>
        <div className="container-wide mx-auto relative z-10">
          <ScrollFadeIn className="text-center mb-16">
            <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-4 block">Our Solutions</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 font-display">
              Choose Your Product
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Select the right insurance product for your organization's needs
            </p>
          </ScrollFadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <StaggerItem key={index}>
                <Link
                  to={product.path}
                  className={`block rounded-2xl p-8 transition-all duration-300 hover:scale-105 h-full ${
                    product.highlight
                      ? "bg-secondary text-secondary-foreground shadow-2xl"
                      : "bg-white text-foreground"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    product.highlight ? "bg-primary/20" : "bg-primary/10"
                  }`}>
                    <product.icon className={`w-7 h-7 ${product.highlight ? "text-primary" : "text-primary"}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">{product.name}</h3>
                  <p className={`text-sm mb-6 ${product.highlight ? "text-secondary-foreground/80" : "text-muted-foreground"}`}>
                    {product.description}
                  </p>
                  <span className={`link-arrow ${product.highlight ? "text-primary" : ""}`}>
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollFadeIn className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center gap-2 text-primary-foreground font-semibold hover:underline">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-secondary">
        <ScrollFadeIn className="container-wide mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-6 font-display">
            Ready to modernize your insurance operations?
          </h2>
          <p className="text-secondary-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
            Join leading insurers worldwide who trust DCF for their digital transformation journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/comparison" className="btn-primary text-lg px-10 py-4">
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/products" className="btn-outline border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary text-lg px-10 py-4">
              Compare Products
            </Link>
          </div>
        </ScrollFadeIn>
      </section>
    </Layout>
  );
};

export default Home;