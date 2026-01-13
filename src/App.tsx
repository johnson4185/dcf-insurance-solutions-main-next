import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductComparison from "./pages/ProductComparison";
import ProductsOverview from "./pages/ProductsOverview";
import InsuranceBasic from "./pages/InsuranceBasic";
import InsuranceNow from "./pages/InsuranceNow";
import InsuranceSuite from "./pages/InsuranceSuite";
import SolutionDetail from "./pages/SolutionDetail";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comparison" element={<ProductComparison />} />
          <Route path="/products" element={<ProductsOverview />} />
          <Route path="/products/insurance-basic" element={<InsuranceBasic />} />
          <Route path="/products/insurance-now" element={<InsuranceNow />} />
          <Route path="/products/insurance-suite" element={<InsuranceSuite />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
