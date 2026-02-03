"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  
  // Don't show header/footer on auth page
  const isAuthPage = pathname === "/auth";

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with navigation */}
      <Header />
      
      {/* Main content area - receives page-specific content */}
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      
      {/* Footer with links and info */}
      <Footer />
    </div>
  );
}
