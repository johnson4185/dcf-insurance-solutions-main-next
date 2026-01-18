"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Building, Globe, Palette, Upload, CreditCard, Shield, CheckCircle, Check, ChevronRight, ChevronLeft, ArrowRight, ArrowLeft, Mail, Phone, AlertCircle, Info } from "lucide-react";

export default function TrialPage() {
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
    
    // Compliance - Optional for trial
    licenseNumber: "",
    registeredState: "",
    registrationType: "INSURANCE_CARRIER",
    regulatoryBody: "",
    complianceConfirmed: false,
    
    // Billing - Optional for trial
    billingModel: "subscription",
    billingFrequency: "monthly",
    
    // Payment - Not needed for trial
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
    { number: 2, label: "Compliance", icon: Shield, description: "Optional for trial", skippable: true },
    { number: 3, label: "Billing", icon: CreditCard, description: "Optional for trial", skippable: true },
    { number: 4, label: "Payment", icon: CreditCard, description: "Not required" },
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

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSkip = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('purchaseData', JSON.stringify(formData));
    console.log("Trial Form submitted:", formData);
    router.push("/purchase/success");
  };

  const selectedTheme = colorThemes.find(t => t.id === formData.colorTheme);

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
                transition={{ duration: 0.3 }}
              />
              
              {/* Steps */}
              <div className="relative flex justify-between">
                {steps.map((step) => (
                  <div key={step.number} className="flex flex-col items-center">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                        currentStep === step.number
                          ? "bg-blue-600 border-blue-600 text-white shadow-lg scale-110"
                          : currentStep > step.number
                          ? "bg-green-500 border-green-500 text-white"
                          : "bg-white border-gray-300 text-gray-400"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {currentStep > step.number ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </motion.div>
                    <div className="mt-2 text-center">
                      <div className={`text-sm font-semibold ${
                        currentStep === step.number ? "text-blue-600" : "text-gray-600"
                      }`}>
                        {step.label}
                      </div>
                      <div className={`text-xs ${step.skippable ? "text-orange-500 font-medium" : "text-gray-400"}`}>
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Stepper */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-600">
                Step {currentStep} of {steps.length}
              </div>
              <div className="text-sm font-semibold text-blue-600">
                {steps[currentStep - 1].label}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-blue-600 h-2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Trial Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">14-Day Free Trial</span>
          </div>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {/* Step 1: Branding */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Brand Identity</h2>
                    <p className="text-gray-600">Set up your company profile and brand appearance</p>
                  </div>

                  {/* Same branding fields as purchase page */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyLegalName}
                        onChange={(e) => setFormData({ ...formData, companyLegalName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Acme Insurance Inc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Brand Display Name
                      </label>
                      <input
                        type="text"
                        value={formData.brandDisplayName}
                        onChange={(e) => setFormData({ ...formData, brandDisplayName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Acme Insurance"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Short Code
                      </label>
                      <input
                        type="text"
                        value={formData.shortCode}
                        onChange={(e) => setFormData({ ...formData, shortCode: e.target.value.toUpperCase() })}
                        maxLength={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all uppercase"
                        placeholder="ACME"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="https://acmeinsurance.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subdomain *
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        required
                        value={formData.subdomain}
                        onChange={(e) => setFormData({ ...formData, subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="acme"
                      />
                      <div className="px-4 py-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-xl text-gray-600 font-medium">
                        .pmisoft.cloud
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Color Theme *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {colorThemes.map((theme) => (
                        <button
                          key={theme.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, colorTheme: theme.id })}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.colorTheme === theme.id
                              ? "border-blue-600 bg-blue-50 shadow-lg"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex gap-1 mb-2">
                            {theme.colors.map((color, i) => (
                              <div
                                key={i}
                                className="flex-1 h-8 rounded"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <div className="text-sm font-medium text-gray-900">{theme.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Compliance - Skippable */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Compliance Information</h2>
                    <p className="text-gray-600">Regulatory and license details</p>
                  </div>

                  {/* Skip Notice */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Info className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Optional for Trial</h3>
                        <p className="text-gray-700 mb-4">
                          You can complete these compliance details later when converting your trial to a paid subscription. Click "Skip" to continue setting up your trial now.
                        </p>
                        <button
                          type="button"
                          onClick={handleSkip}
                          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                          Skip This Step →
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-75">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          License Number
                        </label>
                        <input
                          type="text"
                          value={formData.licenseNumber}
                          onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="INS-2026-12345"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Registered State
                        </label>
                        <input
                          type="text"
                          value={formData.registeredState}
                          onChange={(e) => setFormData({ ...formData, registeredState: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="California"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Billing - Skippable */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Billing Preferences</h2>
                    <p className="text-gray-600">Choose your pricing model</p>
                  </div>

                  {/* Skip Notice */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <Info className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">No Payment Required</h3>
                        <p className="text-gray-700 mb-4">
                          Your 14-day free trial doesn't require any billing information. You can select your billing preferences later when you're ready to subscribe. Click "Skip" to continue.
                        </p>
                        <button
                          type="button"
                          onClick={handleSkip}
                          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                          Skip This Step →
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-75">
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Billing Model (Preview Only)
                    </label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {["subscription", "per-member", "transaction-based"].map((model) => (
                        <button
                          key={model}
                          type="button"
                          onClick={() => setFormData({ ...formData, billingModel: model })}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.billingModel === model
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="text-sm font-semibold text-gray-900 capitalize">
                            {model.replace("-", " ")}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Payment - Not Required */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Information</h2>
                    <p className="text-gray-600">No payment required for trial</p>
                  </div>

                  {/* Not Required Notice */}
                  <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-2 border-green-300 rounded-2xl p-8 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">No Credit Card Required!</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Start your 14-day free trial without any payment information. We'll only ask for billing details when you decide to continue after your trial period.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md text-green-700 font-semibold">
                      <CheckCircle className="w-5 h-5" />
                      No charges for 14 days
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Confirm */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Review & Start Trial</h2>
                    <p className="text-gray-600">Confirm your information and start your free trial</p>
                  </div>

                  {/* Trial Summary */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Trial Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Company:</span>
                        <span className="font-semibold text-gray-900">{formData.companyLegalName || "—"}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Subdomain:</span>
                        <span className="font-mono font-semibold text-blue-600">
                          {formData.subdomain || "—"}.pmisoft.cloud
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Theme:</span>
                        <span className="font-semibold text-gray-900 capitalize">
                          {selectedTheme?.name || "—"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Trial Duration:</span>
                        <span className="font-bold text-green-600">14 Days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Cost:</span>
                        <span className="font-bold text-green-600 text-2xl">$0</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="admin@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trial Benefits */}
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included in Your Trial</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Full platform access",
                        "All premium features",
                        "Unlimited users",
                        "Priority support",
                        "Custom branding",
                        "No credit card required"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
              ) : (
                <div />
              )}
              
              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
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
                  Start Free Trial
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
