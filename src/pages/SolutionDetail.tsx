import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { solutions } from "@/lib/solutionsData";

const SolutionDetail = () => {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return (
      <Layout>
        <div className="container-wide mx-auto py-20">
          <h2 className="text-2xl font-bold mb-4">Solution not found</h2>
          <p className="mb-6">We couldn't find the solution you're looking for.</p>
          <Link to="/solutions" className="link-arrow">
            Back to Solutions
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container-wide mx-auto py-20">
        <div className="max-w-3xl">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Solution Area</span>
          <h1 className="text-4xl font-bold mb-6 font-display">{solution.title}</h1>
          <p className="text-muted-foreground mb-8">{solution.description}</p>
          <div className="prose mb-8">
            <p>{solution.content}</p>
            <p>Contact our team to discuss how this solution can be customized to your market and business needs.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/solutions" className="btn-outline">Back to Solutions</Link>
            <Link to="/contact" className="btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionDetail;
