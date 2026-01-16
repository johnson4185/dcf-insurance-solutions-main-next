import ProductsHero from "@/components/products/ProductsHero";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsComparison from "@/components/products/ProductsComparison";
import ProductsCTA from "@/components/products/ProductsCTA";

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <ProductsHero />
      <ProductsGrid />
      <ProductsComparison />
      <ProductsCTA />
    </main>
  );
}
