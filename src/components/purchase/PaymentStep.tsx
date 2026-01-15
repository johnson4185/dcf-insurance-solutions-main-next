"use client";

import { useState } from "react";
import { usePurchase } from "@/contexts/PurchaseContext";
import { CreditCard, ArrowRight, ArrowLeft, Lock } from "lucide-react";

export default function PaymentStep() {
  const { state, updateState, goToNextStep, goToPreviousStep } = usePurchase();
  const [formData, setFormData] = useState(state.payment);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    const chunks = cleaned.match(/.{1,4}/g) || [];
    return chunks.join(" ");
  };

  const handleCardNumberChange = (value: string) => {
    const formatted = formatCardNumber(value.replace(/\s/g, "").slice(0, 16));
    handleChange("cardNumber", formatted);
  };

  const handleExpiryChange = (value: string) => {
    let cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      cleaned = cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    handleChange("expiryDate", cleaned.slice(0, 5));
  };

  const handleContinue = () => {
    updateState({ payment: formData });
    goToNextStep();
  };

  const isValid = formData.cardNumber.replace(/\s/g, "").length === 16 &&
                  formData.cardholderName &&
                  formData.expiryDate.length === 5 &&
                  formData.cvc.length === 3;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CreditCard className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Details</h1>
        <p className="text-lg text-gray-600">Secure payment processing</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <div className="space-y-6">
          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.cardNumber}
                onChange={(e) => handleCardNumberChange(e.target.value)}
                placeholder="4242 4242 4242 4242"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
              />
            </div>
          </div>

          {/* Cardholder Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cardholder Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.cardholderName}
              onChange={(e) => handleChange("cardholderName", e.target.value.toUpperCase())}
              placeholder="Name on card"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
            />
          </div>

          {/* Expiry and CVC */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.expiryDate}
                onChange={(e) => handleExpiryChange(e.target.value)}
                placeholder="MM/YY"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVC <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.cvc}
                onChange={(e) => handleChange("cvc", e.target.value.replace(/\D/g, "").slice(0, 3))}
                placeholder="123"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
              />
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                Your payment is secured with 256-bit SSL encryption
              </p>
            </div>
          </div>

          {/* Authorization Notice */}
          <div className="text-sm text-gray-600 text-center pt-4 border-t border-gray-200">
            By proceeding, you authorize PMISoft to charge your card for the subscription amount.
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
          disabled={!isValid}
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Authorize Payment
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
