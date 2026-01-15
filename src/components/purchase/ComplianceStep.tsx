"use client";

import { useState } from "react";
import { usePurchase } from "@/contexts/PurchaseContext";
import { Shield, ArrowRight, ArrowLeft, Building } from "lucide-react";

export default function ComplianceStep() {
  const { state, updateState, goToNextStep, goToPreviousStep } = usePurchase();
  const [formData, setFormData] = useState(state.compliance);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    updateState({ compliance: formData });
    goToNextStep();
  };

  const isValid = formData.legalName && formData.vatNumber && formData.licenseNumber && 
                  formData.authorizedSignatory && formData.designation && formData.confirmed;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">License & Compliance</h1>
        <p className="text-lg text-gray-600">Verify your company's eligibility to operate on the platform</p>
      </div>

      <div className="space-y-8">
        {/* Company Information */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Building className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Company Information</h2>
          </div>
          <p className="text-sm text-gray-600 mb-6">Basic details about your organization</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Legal Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.legalName}
                onChange={(e) => handleChange("legalName", e.target.value)}
                placeholder="Registered company name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country of Registration <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="UAE">United Arab Emirates</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Qatar">Qatar</option>
                <option value="Oman">Oman</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Type <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                {["Insurance", "TPA", "Govt", "Other"].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleChange("companyType", type)}
                    className={`flex-1 px-4 py-3 border-2 rounded-lg font-medium transition-all ${
                      formData.companyType === type
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                VAT Registration Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.vatNumber}
                onChange={(e) => handleChange("vatNumber", e.target.value)}
                placeholder="300000000000003"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Regulatory Details */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Regulatory Details</h2>
          </div>
          <p className="text-sm text-gray-600 mb-6">Your insurance licensing information</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Licensed Authority <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                {["CCHI", "SAMA", "GOVT", "Other"].map((auth) => (
                  <button
                    key={auth}
                    onClick={() => handleChange("licensedAuthority", auth)}
                    className={`flex-1 px-4 py-3 border-2 rounded-lg font-medium transition-all ${
                      formData.licensedAuthority === auth
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {auth}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                License Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.licenseNumber}
                onChange={(e) => handleChange("licenseNumber", e.target.value)}
                placeholder="License number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Authorized Signatory <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.authorizedSignatory}
                onChange={(e) => handleChange("authorizedSignatory", e.target.value)}
                placeholder="Full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Designation / Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.designation}
                onChange={(e) => handleChange("designation", e.target.value)}
                placeholder="e.g., CEO, Managing Director"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Confirmation */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.confirmed}
              onChange={(e) => handleChange("confirmed", e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <div>
              <p className="font-medium text-gray-900 mb-1">I confirm that the information provided is accurate</p>
              <p className="text-sm text-gray-600">
                I declare that all information submitted is true and I am authorized to represent this organization.
              </p>
            </div>
          </label>
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
          Continue
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
