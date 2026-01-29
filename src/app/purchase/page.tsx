"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Building, Globe, Palette, CreditCard, Shield, CheckCircle, Check, ChevronRight, ChevronLeft, Mail } from "lucide-react";

export default function PurchasePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Branding
    companyLegalName: "",
    brandDisplayName: "",
    shortCode: "",
    website: "",
    industryType: "INSURANCE",
    subdomain: "",
    colorTheme: "blue",
    buttonStyle: "rounded",
    cardRadius: "medium",
    tableDensity: "comfortable",
    emailFooter: "",
    supportEmail: "",
    supportPhone: "",
    
    // Compliance
    licenseNumber: "",
    registeredState: "",
    registrationType: "INSURANCE_CARRIER",
    regulatoryBody: "",
    complianceConfirmed: false,
    
    // Billing
    billingModel: "subscription",
    billingFrequency: "monthly",
    
    // Payment
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    
    // Contact
    email: "",
    phone: "",
  });

  const steps = [
    { number: 1, label: "Branding", icon: Palette, description: "Customize your look" },
    { number: 2, label: "Compliance", icon: Shield, description: "Legal verification" },
    { number: 3, label: "Billing", icon: CreditCard, description: "Choose your plan" },
    { number: 4, label: "Payment", icon: CreditCard, description: "Secure checkout" },
    { number: 5, label: "Confirm", icon: CheckCircle, description: "Review & finalize" },
  ];

  const colorThemes = [
    { id: "blue", name: "Ocean Blue", colors: ["#0EA5E9", "#0284C7", "#0369A1"] },
    { id: "purple", name: "Royal Purple", colors: ["#A855F7", "#9333EA", "#7E22CE"] },
    { id: "green", name: "Forest Green", colors: ["#10B981", "#059669", "#047857"] },
    { id: "orange", name: "Sunset Orange", colors: ["#F59E0B", "#D97706", "#B45309"] },
    { id: "red", name: "Ruby Red", colors: ["#EF4444", "#DC2626", "#B91C1C"] },
    { id: "teal", name: "Teal Wave", colors: ["#14B8A6", "#0D9488", "#0F766E"] },
    { id: "pink", name: "Pink Bloom", colors: ["#EC4899", "#DB2777", "#BE185D"] },
    { id: "indigo", name: "Deep Indigo", colors: ["#6366F1", "#4F46E5", "#4338CA"] },
  ];

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in localStorage for success page
    localStorage.setItem('purchaseData', JSON.stringify(formData));
    console.log("Form submitted:", formData);
    router.push("/purchase/success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50">
      {/* Stepper */}
      <div className="w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/80 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="hidden lg:block">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />
              <motion.div
                className="absolute top-6 left-0 h-0.5 bg-blue-600"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />

              {/* Steps */}
              <div className="relative flex items-start justify-between">
                {steps.map((step) => {
                  const Icon = step.icon;
                  const isCompleted = currentStep > step.number;
                  const isCurrent = currentStep === step.number;

                  return (
                    <div key={step.number} className="flex flex-col items-center" style={{ width: '120px' }}>
                      <button
                        onClick={() => setCurrentStep(step.number)}
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all mb-3 ${
                          isCompleted ? "bg-blue-600 text-white shadow-lg" :
                          isCurrent ? "bg-blue-600 text-white shadow-xl" :
                          "bg-gray-100 text-gray-400 border-2 border-gray-200"
                        }`}
                      >
                        {isCompleted ? <Check className="w-5 h-5" strokeWidth={3} /> : <Icon className="w-5 h-5" />}
                        
                        {isCurrent && (
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-blue-400"
                            animate={{ scale: [1, 1.4], opacity: [0.8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                      </button>

                      <p className={`text-sm font-semibold mb-1 ${isCurrent ? "text-blue-600" : isCompleted ? "text-gray-900" : "text-gray-400"}`}>
                        {step.label}
                      </p>
                      <p className={`text-xs ${isCurrent || isCompleted ? "text-gray-600" : "text-gray-400"}`}>
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Stepper */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  {currentStep}
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-600">{steps[currentStep - 1].label}</p>
                  <p className="text-xs text-gray-600">{steps[currentStep - 1].description}</p>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-900">{currentStep}/{steps.length}</p>
            </div>
            <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-blue-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {/* Step 1: Branding */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">Brand Your Platform</h1>
                  <p className="text-lg text-gray-600">Customize your insurance platform's look and feel</p>
                </div>

                {/* Company Identity */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Company Identity</h3>
                      <p className="text-sm text-gray-500">Your company foundation</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Legal Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyLegalName}
                        onChange={(e) => setFormData({ ...formData, companyLegalName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your registered company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Brand / Display Name
                      </label>
                      <input
                        type="text"
                        value={formData.brandDisplayName}
                        onChange={(e) => setFormData({ ...formData, brandDisplayName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your brand name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Short Name / Code
                      </label>
                      <input
                        type="text"
                        value={formData.shortCode}
                        onChange={(e) => setFormData({ ...formData, shortCode: e.target.value.toUpperCase() })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                        placeholder="ABC"
                        maxLength={5}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Website
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://yourcompany.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Industry Type
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {["INSURANCE", "TPA", "GOVT", "OTHER"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, industryType: type })}
                            className={`px-4 py-2.5 text-sm font-semibold border-2 rounded-lg transition-all ${
                              formData.industryType === type
                                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform URL */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Platform URL</h3>
                      <p className="text-sm text-gray-500">Choose your unique subdomain</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Subdomain <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-stretch">
                      <div className="flex items-center px-4 bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg text-sm text-gray-500">
                        https://
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.subdomain}
                        onChange={(e) => setFormData({ ...formData, subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") })}
                        placeholder="yourcompany"
                        className="flex-1 px-4 py-3 border-y border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                      />
                      <div className="flex items-center px-4 bg-gray-50 border border-l-0 border-gray-300 rounded-r-lg text-sm text-gray-500">
                        .pmisoft.cloud
                      </div>
                    </div>
                    {formData.subdomain && (
                      <p className="mt-2 text-sm text-green-600">✓ Available</p>
                    )}
                  </div>
                </div>

                {/* Color Theme */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Color Theme</h3>
                      <p className="text-sm text-gray-500">Choose your brand colors</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {colorThemes.map((theme) => (
                      <button
                        key={theme.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, colorTheme: theme.id })}
                        className={`p-4 border-2 rounded-xl transition-all ${
                          formData.colorTheme === theme.id
                            ? "border-blue-600 bg-blue-50 shadow-md"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-1 mb-3">
                          {theme.colors.map((color, i) => (
                            <div
                              key={i}
                              className="flex-1 h-8 rounded-md shadow-sm"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{theme.name}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email & Support */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Support Contact</h3>
                      <p className="text-sm text-gray-500">Customer support information</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Support Email
                      </label>
                      <input
                        type="email"
                        value={formData.supportEmail}
                        onChange={(e) => setFormData({ ...formData, supportEmail: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="support@yourcompany.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Support Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.supportPhone}
                        onChange={(e) => setFormData({ ...formData, supportPhone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Compliance */}
            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">License & Compliance</h1>
                  <p className="text-lg text-gray-600">Regulatory and compliance information</p>
                </div>

                {/* License Information */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">License Details</h3>
                      <p className="text-sm text-gray-500">Required regulatory information</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        License Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.licenseNumber}
                        onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter license number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Registered State
                      </label>
                      <input
                        type="text"
                        value={formData.registeredState}
                        onChange={(e) => setFormData({ ...formData, registeredState: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="State"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Registration Type
                      </label>
                      <select
                        value={formData.registrationType}
                        onChange={(e) => setFormData({ ...formData, registrationType: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="INSURANCE_CARRIER">Insurance Carrier</option>
                        <option value="TPA">TPA</option>
                        <option value="BROKER">Broker</option>
                        <option value="AGENT">Agent</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Regulatory Body
                      </label>
                      <input
                        type="text"
                        value={formData.regulatoryBody}
                        onChange={(e) => setFormData({ ...formData, regulatoryBody: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., State DOI"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.complianceConfirmed}
                          onChange={(e) => setFormData({ ...formData, complianceConfirmed: e.target.checked })}
                          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          I confirm that all information is accurate and complies with regulatory requirements
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Billing */}
            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">Choose Your Plan</h1>
                  <p className="text-lg text-gray-600">Select billing model and frequency</p>
                </div>

                {/* Billing Model */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Billing Model</h3>
                      <p className="text-sm text-gray-500">Choose how you want to be billed</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { value: "subscription", label: "Subscription", price: "$1,000/mo", desc: "Fixed monthly rate" },
                      { value: "per-member", label: "Per Member", price: "$5/member", desc: "Pay per active member" },
                      { value: "transaction", label: "Transaction", price: "$2/transaction", desc: "Pay per transaction" },
                    ].map((model) => (
                      <button
                        key={model.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, billingModel: model.value })}
                        className={`p-6 border-2 rounded-xl text-left transition-all ${
                          formData.billingModel === model.value
                            ? "border-blue-600 bg-blue-50 shadow-md"
                            : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                        }`}
                      >
                        <div className="font-bold text-lg text-gray-900 mb-1">{model.label}</div>
                        <div className="text-2xl font-bold text-blue-600 mb-2">{model.price}</div>
                        <div className="text-sm text-gray-500">{model.desc}</div>
                        {formData.billingModel === model.value && (
                          <div className="mt-3 flex items-center gap-2 text-blue-600">
                            <Check className="w-5 h-5" />
                            <span className="text-sm font-semibold">Selected</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Billing Frequency */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Billing Frequency</h3>
                    <p className="text-sm text-gray-500">Save 20% with annual billing</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, billingFrequency: "monthly" })}
                      className={`p-5 border-2 rounded-xl font-semibold transition-all ${
                        formData.billingFrequency === "monthly"
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-lg mb-1">Monthly</div>
                      <div className="text-sm opacity-75">Billed monthly</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, billingFrequency: "annual" })}
                      className={`p-5 border-2 rounded-xl font-semibold transition-all relative ${
                        formData.billingFrequency === "annual"
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Save 20%
                      </div>
                      <div className="text-lg mb-1">Annual</div>
                      <div className="text-sm opacity-75">Billed yearly</div>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">Payment Information</h1>
                  <p className="text-lg text-gray-600">Secure payment details</p>
                </div>

                {/* Card Information */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Card Details</h3>
                      <p className="text-sm text-gray-500">Your payment information is secure</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Cardholder Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cardholderName}
                        onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Card Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value.replace(/\D/g, "").slice(0, 16) })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Expiry Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="MM/YY"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          CVV <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value.replace(/\D/g, "").slice(0, 3) })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Billing Address</h3>
                    <p className="text-sm text-gray-500">Address associated with your payment method</p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.billingAddress}
                        onChange={(e) => setFormData({ ...formData, billingAddress: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.billingCity}
                          onChange={(e) => setFormData({ ...formData, billingCity: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="City"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          State <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.billingState}
                          onChange={(e) => setFormData({ ...formData, billingState: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="State"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          ZIP Code <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.billingZip}
                          onChange={(e) => setFormData({ ...formData, billingZip: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="12345"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Confirm */}
            {currentStep === 5 && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">Review & Confirm</h1>
                  <p className="text-lg text-gray-600">Double-check your information before submitting</p>
                </div>

                {/* Branding Summary */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Branding</h3>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Company:</span>
                      <span className="ml-2 text-gray-900 font-medium">{formData.companyLegalName}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Brand:</span>
                      <span className="ml-2 text-gray-900 font-medium">{formData.brandDisplayName}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Subdomain:</span>
                      <span className="ml-2 text-gray-900 font-medium">{formData.subdomain}.pmisoft.cloud</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Theme:</span>
                      <span className="ml-2 text-gray-900 font-medium capitalize">{formData.colorTheme}</span>
                    </div>
                  </div>
                </div>

                {/* Compliance Summary */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Compliance</h3>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">License #:</span>
                      <span className="ml-2 text-gray-900 font-medium">{formData.licenseNumber}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Type:</span>
                      <span className="ml-2 text-gray-900 font-medium">{formData.registrationType}</span>
                    </div>
                  </div>
                </div>

                {/* Billing Summary */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Billing</h3>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Model:</span>
                      <span className="ml-2 text-gray-900 font-medium capitalize">{formData.billingModel.replace("-", " ")}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Frequency:</span>
                      <span className="ml-2 text-gray-900 font-medium capitalize">{formData.billingFrequency}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Payment</h3>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Card:</span>
                      <span className="ml-2 text-gray-900 font-medium">•••• {formData.cardNumber.slice(-4)}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Name:</span>
                      <span className="ml-2 text-gray-900 font-medium">{formData.cardholderName}</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>
            )}
            
            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all ml-auto"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all ml-auto"
              >
                <CheckCircle className="w-5 h-5" />
                Complete Purchase
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

