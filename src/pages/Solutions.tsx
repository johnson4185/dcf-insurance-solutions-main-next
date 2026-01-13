import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { motion } from "framer-motion";
import { solutions } from "@/lib/solutionsData";

const Solutions = () => {
  const cards = [
    {
      title: "Insurers",
      description:
        "Modernize operations, adapt in the digital age, and flourish with a strategic consulting partner.",
    },
    {
      title: "Agents & Brokers",
      description:
        "Scale operations and strengthen critical relationships by accelerating essential administrative tasks.",
    },
    {
      title: "Managing General Agents",
      description:
        "Achieve a sustainable competitive edge with a one-stop consulting, technology, and insurance services partner.",
    },
    {
      title: "Reinsurers",
      description:
        "Streamline processes, upgrade systems, and bolster data security with solutions for modern reinsurers.",
    },
  ];

  return (
    <Layout>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Solutions</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
              Proven solutions for insurance organizations
            </h1>
            <p className="max-w-3xl text-muted-foreground mb-10">
              Tailored solutions across the insurance value chain — for insurers, brokers, TPAs, and reinsurers. Explore how our platforms and services can be adapted to your market and operations.
            </p>
          </ScrollFadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="grid grid-cols-1 gap-6 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.slice(0, 2).map((c, i) => (
                  <StaggerItem key={i}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="card-solution group h-full"
                    >
                      <div className="card-content">
                        <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                        <p className="text-sm mb-4 text-muted-foreground">{c.description}</p>
                        <Link to={`/solutions/policy-product-administration`} className="inline-flex items-center gap-2 font-semibold">
                          <span>Explore solutions</span>
                          <ArrowRight className="w-5 h-5 cta-arrow" />
                        </Link>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.slice(2).map((c, i) => (
                  <StaggerItem key={i + 2}>
                    <motion.div whileHover={{ scale: 1.02 }} className="card-solution group h-full">
                      <div className="card-content">
                        <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                        <p className="text-sm mb-4 text-muted-foreground">{c.description}</p>
                        <Link to={`/solutions/claims-pre-authorization`} className="inline-flex items-center gap-2 font-semibold">
                          <span>Explore solutions</span>
                          <ArrowRight className="w-5 h-5 cta-arrow" />
                        </Link>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>

              {/* Solution Areas */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutions.map((s, idx) => (
                  <StaggerItem key={s.slug}>
                    <motion.div whileHover={{ scale: 1.03 }} className="card-solution group h-full">
                      <div className="card-content">
                        <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                        <p className="text-sm mb-4 text-muted-foreground">{s.description}</p>
                        <Link to={`/solutions/${s.slug}`} className="inline-flex items-center gap-2 font-semibold">
                          <span>Explore solutions</span>
                          <ArrowRight className="w-5 h-5 cta-arrow" />
                        </Link>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </div>

            {/* CTA block */}
            <StaggerItem>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden h-full"
              >
                <div className="h-full bg-yellow-400 text-black p-8 flex flex-col justify-between">
                  <div />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Request a Consultation</h3>
                    <p className="mb-6 text-sm">Talk to our team to explore how DCF can serve as the core insurance platform for your organization.</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 font-semibold">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
