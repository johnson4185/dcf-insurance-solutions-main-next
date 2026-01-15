"use client";

import { useState } from "react";
import { usePurchase } from "@/contexts/PurchaseContext";
import { CreditCard, ArrowRight, ArrowLeft, Check } from "lucide-react";

export default function BillingStep() {
  const { state, updateState, goToNextStep, goToPreviousStep } = usePurchase();
  const [frequency, setFrequency] = useState(state.billing.frequency);
  const [model, setModel] = useState(state.billing.model);

  const handleContinue = () => {
    updateState({ billing: { frequency, model } });
    goToNextStep();
  };

  const basePrice = state.totalPrice || 5000;
  const annualDiscount = 0.15;
  const monthlyPrice = basePrice;
  const annualPrice = Math.round(basePrice * 12 * (1 - annualDiscount));
  const vat = 0.15;

  const finalPrice = frequency === "monthly" ? monthlyPrice : Math.round(annualPrice / 12);
  const vatAmount = Math.round(finalPrice * vat);
  const total = finalPrice + vatAmount;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CreditCard className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Configure Billing</h1>
        <p className="text-lg text-gray-600">Set up your preferred billing model and payment frequency</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Billing Options */}
        <div className="space-y-6">
          {/* Billing Frequency */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Billing Frequency</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">How often would you like to be billed?</p>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setFrequency("monthly")}
                className={`relative p-6 border-2 rounded-xl transition-all ${
                  frequency === "monthly"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {frequency === "monthly" && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">Monthly</h3>
                  <p className="text-sm text-gray-600">Flexible payments</p>
                </div>
              </button>

              <button
                onClick={() => setFrequency("annual")}
                className={`relative p-6 border-2 rounded-xl transition-all ${
                  frequency === "annual"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {frequency === "annual" && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Save 15%
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">Annual</h3>
                  <p className="text-sm text-gray-600">Billed yearly</p>
                </div>
              </button>
            </div>
          </div>

          {/* Billing Model */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Billing Model</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">Choose how you prefer to pay</p>

            <div className="space-y-3">
              <button
                onClick={() => setModel("subscription")}
                className={`w-full p-4 border-2 rounded-xl transition-all text-left ${
                  model === "subscription"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      model === "subscription" ? "border-blue-600 bg-blue-600" : "border-gray-300"
                    }`}>
                      {model === "subscription" && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Subscription</h3>
                      <p className="text-sm text-gray-600">Fixed monthly/annual fee</p>
                    </div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setModel("per-member")}
                className={`w-full p-4 border-2 rounded-xl transition-all text-left ${
                  model === "per-member"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      model === "per-member" ? "border-blue-600 bg-blue-600" : "border-gray-300"
                    }`}>
                      {model === "per-member" && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Per Member</h3>
                      <p className="text-sm text-gray-600">Pay per member</p>
                    </div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setModel("transaction")}
                className={`w-full p-4 border-2 rounded-xl transition-all text-left ${
                  model === "transaction"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      model === "transaction" ? "border-blue-600 bg-blue-600" : "border-gray-300"
                    }`}>
                      {model === "transaction" && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Transaction</h3>
                      <p className="text-sm text-gray-600">Pay per transaction</p>
                    </div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setModel("hybrid")}
                className={`w-full p-4 border-2 rounded-xl transition-all text-left ${
                  model === "hybrid"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      model === "hybrid" ? "border-blue-600 bg-blue-600" : "border-gray-300"
                    }`}>
                      {model === "hybrid" && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">Hybrid</h3>
                        <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Best of both</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="lg:sticky lg:top-8 h-fit">
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <CreditCard className="w-4 h-4" />
              Pricing Summary
            </div>

            <div className="bg-white rounded-lg p-6 space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Base Platform</span>
                <span className="font-semibold text-gray-900">{finalPrice.toLocaleString()} SAR</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">VAT (15%)</span>
                <span className="font-semibold text-gray-900">{vatAmount.toLocaleString()} SAR</span>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{total.toLocaleString()} SAR</div>
                    <div className="text-sm text-gray-500">/ {frequency === "monthly" ? "month" : "month (billed annually)"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2">Included in all plans:</h3>
              <ul className="space-y-2">
                {["Unlimited users", "API access", "Email support", "Regular updates"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={goToPreviousStep}
          className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 font-medium hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={handleContinue}
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
