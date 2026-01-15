"use client";

import { PurchaseProvider, usePurchase } from "@/contexts/PurchaseContext";
import PurchaseSteps from "@/components/purchase/PurchaseSteps";
import BrandingStep from "@/components/purchase/BrandingStep";
import ComplianceStep from "@/components/purchase/ComplianceStep";
import BillingStep from "@/components/purchase/BillingStep";
import PaymentStep from "@/components/purchase/PaymentStep";
import ConfirmStep from "@/components/purchase/ConfirmStep";

function PurchaseContent() {
  const { currentStep } = usePurchase();

  return (
    <div className="min-h-screen bg-gray-50">
      <PurchaseSteps />
      
      {currentStep === 1 && <BrandingStep />}
      {currentStep === 2 && <ComplianceStep />}
      {currentStep === 3 && <BillingStep />}
      {currentStep === 4 && <PaymentStep />}
      {currentStep === 5 && <ConfirmStep />}
    </div>
  );
}

export default function PurchasePage() {
  return (
    <PurchaseProvider>
      <PurchaseContent />
    </PurchaseProvider>
  );
}
