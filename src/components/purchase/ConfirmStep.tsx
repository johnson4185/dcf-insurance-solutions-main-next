"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePurchase } from "@/contexts/PurchaseContext";
import { CheckCircle, Building, CreditCard, Palette, Shield, ArrowLeft, Loader2 } from "lucide-react";

export default function ConfirmStep() {
  const { state, goToPreviousStep } = usePurchase();
  const router = useRouter();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [usageAccepted, setUsageAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProvision = async () => {
    if (!termsAccepted || !usageAccepted) return;
    
    setIsProcessing(true);
    // Simulate provisioning
    await new Promise(resolve => setTimeout(resolve, 2000));
    router.push("/purchase/success");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Review & Confirm</h1>
        <p className="text-lg text-gray-600">Accept the terms to complete your subscription</p>
      </div>

      {/* Configuration Summary */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Configuration Summary</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Company */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Company</div>
              <div className="font-semibold text-gray-900">
                {state.branding.companyName || "Not set"}
              </div>
            </div>
          </div>

          {/* Subdomain */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Palette className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Subdomain</div>
              <div className="font-semibold text-gray-900">
                {state.branding.subdomain || "Not set"}
              </div>
            </div>
          </div>

          {/* Billing Model */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Billing Model</div>
              <div className="font-semibold text-gray-900 capitalize">
                {state.billing.model.replace("-", " ")}
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Product</div>
              <div className="font-semibold text-gray-900">
                {state.product || "Insurance Build"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="space-y-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <div>
              <p className="font-medium text-gray-900 mb-1">
                I accept the <a href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</a> and{" "}
                <a href="/privacy" className="text-blue-600 hover:underline">Service Level Agreement</a>
              </p>
              <p className="text-sm text-gray-600">
                By accepting, you agree to our terms of service and privacy policy.
              </p>
            </div>
          </label>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={usageAccepted}
              onChange={(e) => setUsageAccepted(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <div>
              <p className="font-medium text-gray-900 mb-1">
                I accept the <a href="/usage-policy" className="text-blue-600 hover:underline">Usage-Based Billing Policy</a>
              </p>
              <p className="text-sm text-gray-600">
                I understand that charges may vary based on actual usage.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <button
          onClick={goToPreviousStep}
          disabled={isProcessing}
          className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 font-medium hover:text-gray-900 disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={handleProvision}
          disabled={!termsAccepted || !usageAccepted || isProcessing}
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Accept & Provision
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
