import { Link } from "react-router-dom";
import { ArrowRight, Check, Minus } from "lucide-react";
import Layout from "@/components/Layout";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";

const ProductComparison = () => {
  const products = [
    { name: "Insurance Basic", path: "/products/insurance-basic" },
    { name: "Insurance Now", path: "/products/insurance-now" },
    { name: "Insurance Suite", path: "/products/insurance-suite" },
    { name: "TPA Product", path: "/products" },
    { name: "Insurance Build", path: "/products" },
  ];

  const categories = [
    {
      name: "Core Insurance Capabilities",
      features: [
        { name: "Policy Administration", values: [true, true, true, false, true] },
        { name: "Member Management", values: [true, true, true, true, true] },
        { name: "Policy Lifecycle Management", values: [false, true, true, false, true] },
        { name: "Product Configuration", values: [false, true, true, false, true] },
      ],
    },
    {
      name: "Claims and Pre-Authorization",
      features: [
        { name: "Claims Intake", values: [true, true, true, true, true] },
        { name: "Claims Management", values: [false, true, true, true, true] },
        { name: "Pre-Authorization Workflows", values: [false, true, true, true, true] },
        { name: "Claims Adjudication", values: [false, false, true, true, false] },
        { name: "Claims Settlement", values: [false, false, true, true, false] },
      ],
    },
    {
      name: "Billing and Pricing",
      features: [
        { name: "Billing Setup", values: [true, true, true, false, true] },
        { name: "Billing & Invoicing", values: [false, true, true, false, true] },
        { name: "Pricing Engine", values: [false, true, true, false, true] },
        { name: "Advanced Pricing Controls", values: [false, false, true, false, true] },
      ],
    },
    {
      name: "Digital Portals",
      features: [
        { name: "Member Portal", values: [true, true, true, true, true] },
        { name: "Broker Portal", values: [true, true, true, false, true] },
        { name: "Provider Portal", values: [false, true, true, true, true] },
        { name: "Service Center", values: [false, false, true, false, false] },
      ],
    },
    {
      name: "Compliance and Integrations",
      features: [
        { name: "CHI Integration", values: [true, true, true, true, true] },
        { name: "ZATCA Integration", values: [true, true, true, false, true] },
        { name: "SADAD Integration", values: [true, false, true, false, true] },
        { name: "NPHIES Integration", values: [false, true, true, true, true] },
        { name: "YAKEEN Integration", values: [false, true, true, false, true] },
      ],
    },
    {
      name: "Analytics and Reporting",
      features: [
        { name: "Basic Reporting", values: [true, true, true, true, true] },
        { name: "Operational Dashboards", values: [false, true, true, true, true] },
        { name: "Compliance Reporting", values: [false, false, true, true, true] },
        { name: "Advanced Analytics", values: [false, false, true, false, true] },
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span>Product Comparison</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Product Comparison
            </h1>
            <p className="text-lg text-muted-foreground">
              Compare features and capabilities across all DCF insurance products to find the right fit for your organization.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-background">
        <ScrollFadeIn className="container-wide mx-auto overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground w-64">Features</th>
                {products.map((product, index) => (
                  <th key={index} className="text-center py-4 px-4">
                    <Link
                      to={product.path}
                      className="font-semibold text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {product.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category, categoryIndex) => (
                <>
                  <tr key={`category-${categoryIndex}`} className="bg-cream">
                    <td colSpan={6} className="py-4 px-4 font-bold text-foreground">
                      {category.name}
                    </td>
                  </tr>
                  {category.features.map((feature, featureIndex) => (
                    <tr
                      key={`feature-${categoryIndex}-${featureIndex}`}
                      className="border-b border-border hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-3 px-4 text-foreground">{feature.name}</td>
                      {feature.values.map((value, valueIndex) => (
                        <td key={valueIndex} className="text-center py-3 px-4">
                          {value ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <Minus className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </ScrollFadeIn>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <ScrollFadeIn className="container-wide mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary-foreground mb-4">
            Need help choosing?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team can help you find the right product for your organization's needs.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-amber-dark transition-colors"
          >
            Contact Sales
            <ArrowRight className="w-5 h-5" />
          </a>
        </ScrollFadeIn>
      </section>
    </Layout>
  );
};

export default ProductComparison;
