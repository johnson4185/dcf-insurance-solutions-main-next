"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Building, Globe, Palette, CreditCard, Shield, CheckCircle, Check, ChevronRight, ChevronLeft, Mail, FileText } from "lucide-react";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

function PurchasePageContent() {
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
    primaryLogo: "",
    secondaryLogo: "",
    favicon: "",
    loginBanner: "",
    brandGuidelines: "",
    colorTheme: "ocean",
    primaryColor: "#0EA5E9",
    secondaryColor: "#0B3B80",
    accentColor: "#38BDF8",
    buttonStyle: "rounded",
    cardRadius: "medium",
    tableDensity: "normal",
    emailHeaderLogo: "",
    invoiceLogo: "",
    footerText: "",
    supportEmail: "",
    supportPhone: "",

    // Compliance
    legalCompanyName: "",
    countryOfRegistration: "",
    companyType: "INSURANCE",
    commercialRegistrationNumber: "",
    crExpiryDate: "",
    unifiedNationalId: "",
    vatRegistrationNumber: "",
    vatCertificate: "",
    zakatRegistrationNumber: "",
    bankName: "",
    iban: "",
    licensedAuthority: "CHI",
    licenseNumber: "",
    licenseExpiryDate: "",
    licenseDocument: "",
    scopeOfLicense: "",
    nphiesPayerId: "",
    nphiesRegistered: "no",
    nphiesEnvironment: "sandbox",
    integrationReadiness: "api",
    dataResidencyRequired: "no",
    iso27001Available: "no",
    pdplComplianceAccepted: false,
    securityContactEmail: "",
    dpoName: "",
    authorizedPersonName: "",
    authorizedDesignation: "",
    authorizedNationalId: "",
    authorizedEmail: "",
    authorizedMobile: "",
    authorizationLetter: "",
    confirmInfoAccurate: false,
    authorizeVerification: false,

    // Billing
    billingModel: "subscription",
    billingCycle: "monthly",
    subscriptionFee: "",
    discountPercent: "",
    contractDuration: "1-year",
    autoRenewal: "yes",
    infrastructureFee: "",
    billingEntity: "",
    vatNumber: "",
    billingEmail: "",
    invoiceCurrency: "SAR",
    invoiceFrequency: "monthly",
    paymentMethod: "bank-transfer",

    // Review
    acceptTerms: false,
    acceptBillingPolicy: false,
    acknowledgeUsageCharges: false,

    // Payment
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",

    // Contact
    email: "",
    phone: "",
  });

  const steps = [
    { number: 1, label: "Branding", icon: Palette, description: "Brand your platform" },
    { number: 2, label: "Compliance", icon: Shield, description: "License & compliance" },
    { number: 3, label: "Billing", icon: CreditCard, description: "Configure billing" },
    { number: 4, label: "Payment", icon: CreditCard, description: "Payment details" },
    { number: 5, label: "Review", icon: CheckCircle, description: "Finalize" },
  ];

  const colorThemes = [
    { id: "ocean", name: "Ocean Blue", colors: ["#0EA5E9", "#0B3B80", "#38BDF8"], primary: "#0EA5E9", secondary: "#0B3B80", accent: "#38BDF8" },
    { id: "royal", name: "Royal Purple", colors: ["#8B5CF6", "#5B21B6", "#A78BFA"], primary: "#8B5CF6", secondary: "#5B21B6", accent: "#A78BFA" },
    { id: "emerald", name: "Emerald", colors: ["#10B981", "#065F46", "#6EE7B7"], primary: "#10B981", secondary: "#065F46", accent: "#6EE7B7" },
    { id: "amber", name: "Amber", colors: ["#F59E0B", "#92400E", "#FCD34D"], primary: "#F59E0B", secondary: "#92400E", accent: "#FCD34D" },
    { id: "crimson", name: "Crimson", colors: ["#EF4444", "#991B1B", "#FCA5A5"], primary: "#EF4444", secondary: "#991B1B", accent: "#FCA5A5" },
    { id: "midnight", name: "Midnight", colors: ["#1F2937", "#111827", "#6B7280"], primary: "#1F2937", secondary: "#111827", accent: "#6B7280" },
    { id: "teal", name: "Teal", colors: ["#14B8A6", "#0F766E", "#5EEAD4"], primary: "#14B8A6", secondary: "#0F766E", accent: "#5EEAD4" },
    { id: "rose", name: "Rose", colors: ["#F43F5E", "#9F1239", "#FDA4AF"], primary: "#F43F5E", secondary: "#9F1239", accent: "#FDA4AF" },
  ];

  const handleThemeSelect = (themeId: string) => {
    const theme = colorThemes.find((item) => item.id === themeId);
    if (!theme) return;
    setFormData({
      ...formData,
      colorTheme: theme.id,
      primaryColor: theme.primary,
      secondaryColor: theme.secondary,
      accentColor: theme.accent,
    });
  };

  const handleSaveDraft = () => {
    localStorage.setItem("purchaseDraft", JSON.stringify(formData));
  };

  

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="relative">
            <div className="relative rounded-full bg-gray-100 p-1">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600"
                initial={{ width: "0%" }}
                animate={{
                  width: `${(currentStep / steps.length) * 100}%`,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  width: { duration: 0.45, ease: "easeOut" },
                  backgroundPosition: { duration: 3.5, repeat: Infinity, ease: "linear" },
                }}
                style={{ backgroundSize: "200% 100%" }}
              />
              <div className="relative z-10 flex items-center gap-2 overflow-x-auto scrollbar-hide px-1 py-1">
                {steps.map((step) => {
                  const isCompleted = currentStep > step.number;
                  const isCurrent = currentStep === step.number;

                  return (
                    <button
                      key={step.number}
                      onClick={() => setCurrentStep(step.number)}
                      className={`flex min-w-[140px] flex-col items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition-all sm:min-w-0 sm:flex-1 sm:text-sm ${
                        isCurrent
                          ? "bg-white text-blue-600 shadow-sm ring-1 ring-blue-200"
                          : isCompleted
                          ? "bg-white/70 text-blue-700"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <span className="text-sm sm:text-sm">{step.label}</span>
                      <span className={`text-xs ${isCurrent || isCompleted ? "text-gray-500" : "text-gray-400"}`}>
                        {step.description}
                      </span>
                      {isCurrent && (
                        <span className="mt-1 h-0.5 w-8 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.35)]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
                className="space-y-4"
              >
                <div className="text-center mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Brand Your Platform</h1>
                  <p className="text-base text-gray-600">Configure how your platform looks and feels</p>
                </div>
                <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
                  <div className="space-y-4">
                    {/* Company Identity */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Company Identity</h3>
                          <p className="text-sm text-gray-500">Basic company information</p>
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
                            placeholder="Registered company name"
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

                        <div className="grid md:grid-cols-2 gap-4">
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

                    {/* Brand Assets */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Brand Assets</h3>
                          <p className="text-sm text-gray-500">Logos, banners, and brand guidelines</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Logo</label>
                          <input
                            type="file"
                            onChange={(e) =>
                              setFormData({ ...formData, primaryLogo: e.target.files?.[0]?.name ?? "" })
                            }
                            className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-xs text-gray-500 file:hidden hover:border-blue-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Secondary / Dark Logo</label>
                          <input
                            type="file"
                            onChange={(e) =>
                              setFormData({ ...formData, secondaryLogo: e.target.files?.[0]?.name ?? "" })
                            }
                            className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-xs text-gray-500 file:hidden hover:border-blue-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Favicon</label>
                          <input
                            type="file"
                            onChange={(e) =>
                              setFormData({ ...formData, favicon: e.target.files?.[0]?.name ?? "" })
                            }
                            className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-xs text-gray-500 file:hidden hover:border-blue-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Login Page Banner</label>
                          <input
                            type="file"
                            onChange={(e) =>
                              setFormData({ ...formData, loginBanner: e.target.files?.[0]?.name ?? "" })
                            }
                            className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-xs text-gray-500 file:hidden hover:border-blue-400"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Brand Guidelines (PDF)</label>
                          <input
                            type="file"
                            onChange={(e) =>
                              setFormData({ ...formData, brandGuidelines: e.target.files?.[0]?.name ?? "" })
                            }
                            className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-xs text-gray-500 file:hidden hover:border-blue-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Theme */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                          <Palette className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Theme</h3>
                          <p className="text-sm text-gray-500">Select a preset color palette</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {colorThemes.map((theme) => (
                          <button
                            key={theme.id}
                            type="button"
                            onClick={() => handleThemeSelect(theme.id)}
                            className={`rounded-xl border px-4 py-3 text-left transition-all ${
                              formData.colorTheme === theme.id
                                ? "border-blue-600 bg-blue-50 shadow-sm"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="h-3.5 w-full rounded-full overflow-hidden border border-gray-100 bg-white">
                              <div className="flex h-full">
                                {theme.colors.map((color, i) => (
                                  <span key={i} className="flex-1" style={{ backgroundColor: color }} />
                                ))}
                              </div>
                            </div>
                            <div className="mt-2 text-sm font-semibold text-gray-900">{theme.name}</div>
                          </button>
                        ))}
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {[
                          { label: "Primary", value: formData.primaryColor },
                          { label: "Secondary", value: formData.secondaryColor },
                          { label: "Accent", value: formData.accentColor },
                        ].map((item) => (
                          <div key={item.label} className="rounded-lg border border-gray-200 p-3">
                            <div className="text-xs font-semibold text-gray-600 mb-2">{item.label} Color</div>
                            <div className="h-3.5 rounded-full" style={{ backgroundColor: item.value }} />
                            <div className="mt-2 text-xs text-gray-400 font-mono">{item.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* UI Preferences */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">UI Preferences</h3>

                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Button Style</p>
                          <div className="grid grid-cols-3 gap-3">
                            {["square", "rounded", "pill"].map((style) => (
                              <button
                                key={style}
                                type="button"
                                onClick={() => setFormData({ ...formData, buttonStyle: style })}
                                className="p-0 border-0 bg-transparent"
                              >
                                <span
                                  className={`h-8 w-full border text-xs font-semibold flex items-center justify-center uppercase tracking-wide transition-all ${
                                    style === "square"
                                      ? "rounded-none"
                                      : style === "rounded"
                                      ? "rounded-md"
                                      : "rounded-full"
                                  } ${
                                    formData.buttonStyle === style
                                      ? "border-blue-600 text-white bg-blue-600"
                                      : "border-gray-300 text-gray-500"
                                  }`}
                                >
                                  {style}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Card Radius</p>
                          <div className="grid grid-cols-3 gap-3">
                            {["small", "medium", "large"].map((radius) => (
                              <button
                                key={radius}
                                type="button"
                                onClick={() => setFormData({ ...formData, cardRadius: radius })}
                                className="p-0 border-0 bg-transparent"
                              >
                                <span
                                  className={`h-10 w-full border text-xs font-semibold flex flex-col items-center justify-center uppercase tracking-wide transition-all ${
                                    radius === "small"
                                      ? "rounded-sm"
                                      : radius === "medium"
                                      ? "rounded-md"
                                      : "rounded-xl"
                                  } ${
                                    formData.cardRadius === radius
                                      ? "border-blue-600 text-white bg-blue-600"
                                      : "border-gray-300 text-gray-500"
                                  }`}
                                >
                                  {radius}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Table Density</p>
                          <div className="grid grid-cols-2 gap-3">
                            {["compact", "normal"].map((density) => (
                              <button
                                key={density}
                                type="button"
                                onClick={() => setFormData({ ...formData, tableDensity: density })}
                                className="p-0 border-0 bg-transparent"
                              >
                                <span
                                  className={`h-10 w-full border text-xs font-semibold flex flex-col items-center justify-center uppercase tracking-wide transition-all ${
                                    formData.tableDensity === density
                                      ? "border-blue-600 text-white bg-blue-600"
                                      : "border-gray-300 text-gray-500"
                                  }`}
                                >
                                  {density}
                                </span>
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
                          Platform URL <span className="text-red-500">*</span>
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
                      </div>
                    </div>

                    {/* Email & Communication */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Email & Communication</h3>
                          <p className="text-sm text-gray-500">Header, invoicing, and support info</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Header Logo</label>
                          <input
                            type="file"
                            onChange={(e) =>
                              setFormData({ ...formData, emailHeaderLogo: e.target.files?.[0]?.name ?? "" })
                            }
                            className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-xs text-gray-500 file:hidden hover:border-blue-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Invoice / Letterhead Logo</label>
                          <input
                            type="file"
                            onChange={(e) =>
                              setFormData({ ...formData, invoiceLogo: e.target.files?.[0]?.name ?? "" })
                            }
                            className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-xs text-gray-500 file:hidden hover:border-blue-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Footer Text</label>
                          <textarea
                            value={formData.footerText}
                            onChange={(e) => setFormData({ ...formData, footerText: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            rows={3}
                            placeholder="Footer text"
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Support Email</label>
                            <input
                              type="email"
                              value={formData.supportEmail}
                              onChange={(e) => setFormData({ ...formData, supportEmail: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="support@yourcompany.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Support Phone</label>
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
                    </div>
                  </div>

                  {/* Live Preview */}
                  <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-semibold text-gray-700">Live Preview</p>
                        <span className="text-xs text-gray-400">Your Company</span>
                      </div>

                      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: formData.primaryColor }} />
                            <div>
                              <p className="text-xs font-semibold text-gray-900">Your Company</p>
                              <p className="text-xs text-gray-500">Connect</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="px-3 py-1.5 text-xs font-semibold rounded-md text-white"
                            style={{ backgroundColor: formData.secondaryColor }}
                          >
                            Connect
                          </button>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 mb-4">
                          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
                            <span className="text-xs text-gray-500">Recent Activity</span>
                            <span className="text-xs text-gray-400">Details</span>
                          </div>
                          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
                            <span className="text-xs text-gray-700">Item 1</span>
                            <span className="text-xs text-gray-400">Details</span>
                          </div>
                          <div className="flex items-center justify-between px-3 py-2">
                            <span className="text-xs text-gray-700">Item 2</span>
                            <span className="text-xs text-gray-400">Details</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="w-full py-2 text-xs font-semibold rounded-md text-white"
                          style={{ backgroundColor: formData.primaryColor }}
                        >
                          Primary Action
                        </button>
                        <button
                          type="button"
                          className="w-full mt-2 py-2 text-xs font-semibold rounded-md border"
                          style={{ borderColor: formData.primaryColor, color: formData.primaryColor }}
                        >
                          Secondary Action
                        </button>

                        <p className="text-xs text-gray-400 text-center mt-3">
                          https://{formData.subdomain || "yourcompany"}.pmisoft.cloud
                        </p>
                      </div>
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
                <div className="text-center mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">License & Compliance</h1>
                  <p className="text-base text-gray-600">Verify your company eligibility to operate</p>
                </div>
                {/* Legal Entity Information */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Legal Entity Information</h3>
                      <p className="text-sm text-gray-500">Basic company details</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Legal Company Name</label>
                      <input
                        type="text"
                        value={formData.legalCompanyName}
                        onChange={(e) => setFormData({ ...formData, legalCompanyName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Registered company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Country of Registration</label>
                      <select
                        value={formData.countryOfRegistration}
                        onChange={(e) => setFormData({ ...formData, countryOfRegistration: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select country</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Qatar">Qatar</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Type</label>
                      <div className="grid grid-cols-4 gap-2">
                        {["INSURANCE", "TPA", "GOVT", "OTHER"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, companyType: type })}
                            className={`px-3 py-2 text-xs font-semibold border-2 rounded-lg transition-all ${
                              formData.companyType === type
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-700 border-gray-300"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Commercial Registration #</label>
                      <input
                        type="text"
                        value={formData.commercialRegistrationNumber}
                        onChange={(e) => setFormData({ ...formData, commercialRegistrationNumber: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="CR Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">CR Expiry Date</label>
                      <input
                        type="date"
                        value={formData.crExpiryDate}
                        onChange={(e) => setFormData({ ...formData, crExpiryDate: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Unified National No (NISA)</label>
                      <input
                        type="text"
                        value={formData.unifiedNationalId}
                        onChange={(e) => setFormData({ ...formData, unifiedNationalId: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="7000000000"
                      />
                    </div>
                  </div>
                </div>

                {/* Tax & Financial Compliance */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Tax & Financial Compliance</h3>
                      <p className="text-sm text-gray-500">VAT and banking details</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">VAT Registration No</label>
                      <input
                        type="text"
                        value={formData.vatRegistrationNumber}
                        onChange={(e) => setFormData({ ...formData, vatRegistrationNumber: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="VAT Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">VAT Certificate (PDF)</label>
                      <input
                        type="file"
                        onChange={(e) => setFormData({ ...formData, vatCertificate: e.target.files?.[0]?.name ?? "" })}
                        className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-xs text-gray-500 file:hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Zakat Registration No</label>
                      <input
                        type="text"
                        value={formData.zakatRegistrationNumber}
                        onChange={(e) => setFormData({ ...formData, zakatRegistrationNumber: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Zakat Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bank Name</label>
                      <input
                        type="text"
                        value={formData.bankName}
                        onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Bank Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">IBAN</label>
                      <input
                        type="text"
                        value={formData.iban}
                        onChange={(e) => setFormData({ ...formData, iban: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="SA00..."
                      />
                    </div>
                  </div>
                </div>

                {/* Insurance Regulatory Details */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Insurance Regulatory Details</h3>
                      <p className="text-sm text-gray-500">Licensing and authority details</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Licensed Authority</label>
                      <div className="grid grid-cols-4 gap-2">
                        {["CHI", "SAMA", "GOVT", "OTHER"].map((authority) => (
                          <button
                            key={authority}
                            type="button"
                            onClick={() => setFormData({ ...formData, licensedAuthority: authority })}
                            className={`px-3 py-2 text-xs font-semibold border-2 rounded-lg transition-all ${
                              formData.licensedAuthority === authority
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-700 border-gray-300"
                            }`}
                          >
                            {authority}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">License Number</label>
                      <input
                        type="text"
                        value={formData.licenseNumber}
                        onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="License #"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">License Valid Until</label>
                      <input
                        type="date"
                        value={formData.licenseExpiryDate}
                        onChange={(e) => setFormData({ ...formData, licenseExpiryDate: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">License Document (PDF)</label>
                      <input
                        type="file"
                        onChange={(e) => setFormData({ ...formData, licenseDocument: e.target.files?.[0]?.name ?? "" })}
                        className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-xs text-gray-500 file:hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Scope of License</label>
                      <select
                        value={formData.scopeOfLicense}
                        onChange={(e) => setFormData({ ...formData, scopeOfLicense: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select scope</option>
                        <option value="health">Health</option>
                        <option value="life">Life</option>
                        <option value="motor">Motor</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* NPHIES & Digital Readiness */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">NPHIES & Digital Readiness</h3>
                      <p className="text-sm text-gray-500">Integration readiness</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">NPHIES Payer ID</label>
                      <input
                        type="text"
                        value={formData.nphiesPayerId}
                        onChange={(e) => setFormData({ ...formData, nphiesPayerId: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Payer ID"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">NPHIES Registered</label>
                      <div className="flex items-center gap-4 pt-2">
                        {[
                          { id: "yes", label: "Yes" },
                          { id: "no", label: "No" },
                        ].map((option) => (
                          <label key={option.id} className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                              type="radio"
                              name="nphiesRegistered"
                              checked={formData.nphiesRegistered === option.id}
                              onChange={() => setFormData({ ...formData, nphiesRegistered: option.id })}
                              className="w-4 h-4 text-blue-600"
                            />
                            {option.label}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">NPHIES Environment</label>
                      <select
                        value={formData.nphiesEnvironment}
                        onChange={(e) => setFormData({ ...formData, nphiesEnvironment: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="sandbox">Sandbox</option>
                        <option value="production">Production</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Integration Readiness</label>
                      <div className="flex items-center gap-4 pt-2">
                        {[
                          { id: "api", label: "API" },
                          { id: "manual", label: "Manual" },
                          { id: "hybrid", label: "Hybrid" },
                        ].map((option) => (
                          <label key={option.id} className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                              type="radio"
                              name="integrationReadiness"
                              checked={formData.integrationReadiness === option.id}
                              onChange={() => setFormData({ ...formData, integrationReadiness: option.id })}
                              className="w-4 h-4 text-blue-600"
                            />
                            {option.label}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Privacy & Security */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Data Privacy & Security</h3>
                      <p className="text-sm text-gray-500">Compliance and security requirements</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Data Residency Required</label>
                      <div className="flex items-center gap-4 pt-2">
                        {[
                          { id: "yes", label: "Yes" },
                          { id: "no", label: "No" },
                        ].map((option) => (
                          <label key={option.id} className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                              type="radio"
                              name="dataResidencyRequired"
                              checked={formData.dataResidencyRequired === option.id}
                              onChange={() => setFormData({ ...formData, dataResidencyRequired: option.id })}
                              className="w-4 h-4 text-blue-600"
                            />
                            {option.label}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">ISO 27001 Available?</label>
                      <div className="flex items-center gap-4 pt-2">
                        {[
                          { id: "yes", label: "Yes" },
                          { id: "no", label: "No" },
                        ].map((option) => (
                          <label key={option.id} className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                              type="radio"
                              name="iso27001Available"
                              checked={formData.iso27001Available === option.id}
                              onChange={() => setFormData({ ...formData, iso27001Available: option.id })}
                              className="w-4 h-4 text-blue-600"
                            />
                            {option.label}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                          type="checkbox"
                          checked={formData.pdplComplianceAccepted}
                          onChange={(e) => setFormData({ ...formData, pdplComplianceAccepted: e.target.checked })}
                          className="w-4 h-4 text-blue-600"
                        />
                        I acknowledge PDPL compliance requirements
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Security Contact Email</label>
                      <input
                        type="email"
                        value={formData.securityContactEmail}
                        onChange={(e) => setFormData({ ...formData, securityContactEmail: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="security@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">DPO / Compliance Officer</label>
                      <input
                        type="text"
                        value={formData.dpoName}
                        onChange={(e) => setFormData({ ...formData, dpoName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Name & Contact"
                      />
                    </div>
                  </div>
                </div>

                {/* Authorized Signatory */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Authorized Signatory</h3>
                      <p className="text-sm text-gray-500">Authorized person details</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Authorized Person Name</label>
                      <input
                        type="text"
                        value={formData.authorizedPersonName}
                        onChange={(e) => setFormData({ ...formData, authorizedPersonName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Designation</label>
                      <input
                        type="text"
                        value={formData.authorizedDesignation}
                        onChange={(e) => setFormData({ ...formData, authorizedDesignation: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="CEO / COO / Director"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">National ID / Iqama</label>
                      <input
                        type="text"
                        value={formData.authorizedNationalId}
                        onChange={(e) => setFormData({ ...formData, authorizedNationalId: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="ID Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Official Email</label>
                      <input
                        type="email"
                        value={formData.authorizedEmail}
                        onChange={(e) => setFormData({ ...formData, authorizedEmail: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                      <input
                        type="tel"
                        value={formData.authorizedMobile}
                        onChange={(e) => setFormData({ ...formData, authorizedMobile: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+966..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Authorization Letter (PDF)</label>
                      <input
                        type="file"
                        onChange={(e) => setFormData({ ...formData, authorizationLetter: e.target.files?.[0]?.name ?? "" })}
                        className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-xs text-gray-500 file:hidden"
                      />
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={formData.confirmInfoAccurate}
                        onChange={(e) => setFormData({ ...formData, confirmInfoAccurate: e.target.checked })}
                        className="w-4 h-4 text-blue-600"
                      />
                      I confirm the above information is true and valid
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={formData.authorizeVerification}
                        onChange={(e) => setFormData({ ...formData, authorizeVerification: e.target.checked })}
                        className="w-4 h-4 text-blue-600"
                      />
                      I authorize platform verification
                    </label>
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
                <div className="text-center mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Configure Billing</h1>
                  <p className="text-base text-gray-600">Set your pricing model</p>
                </div>
                <div className="grid lg:grid-cols-[minmax(0,1fr)_260px] gap-6">
                  <div className="space-y-6">
                    {/* Billing Model */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Billing Model</h3>
                          <p className="text-sm text-gray-500">Select a pricing model</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { value: "subscription", label: "Subscription" },
                          { value: "member-based", label: "Member Based" },
                          { value: "transaction", label: "Transaction Based" },
                          { value: "hybrid", label: "Hybrid" },
                        ].map((model) => (
                          <button
                            key={model.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, billingModel: model.value })}
                            className={`p-4 border-2 rounded-xl text-left transition-all ${
                              formData.billingModel === model.value
                                ? "border-blue-600 bg-blue-50 shadow-md"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="font-semibold text-gray-900">{model.label}</div>
                            {formData.billingModel === model.value && (
                              <div className="mt-2 flex items-center gap-2 text-blue-600">
                                <Check className="w-4 h-4" />
                                <span className="text-xs font-semibold">Selected</span>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Billing Cycle */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Billing Cycle</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, billingCycle: "monthly" })}
                          className={`p-4 border-2 rounded-xl font-semibold transition-all ${
                            formData.billingCycle === "monthly"
                              ? "border-blue-600 bg-blue-50 text-blue-600"
                              : "border-gray-200 text-gray-700"
                          }`}
                        >
                          <div className="text-sm">Monthly</div>
                          <div className="text-xs text-gray-500">Flexible payments</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, billingCycle: "annual" })}
                          className={`p-4 border-2 rounded-xl font-semibold transition-all ${
                            formData.billingCycle === "annual"
                              ? "border-blue-600 bg-blue-50 text-blue-600"
                              : "border-gray-200 text-gray-700"
                          }`}
                        >
                          <div className="text-sm">Annual</div>
                          <div className="text-xs text-gray-500">Save 15%</div>
                        </button>
                      </div>
                    </div>

                    {/* Subscription */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Subscription</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Base Platform Fee (SAR)</label>
                          <input
                            type="text"
                            value={formData.subscriptionFee}
                            onChange={(e) => setFormData({ ...formData, subscriptionFee: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Discount (%)</label>
                          <input
                            type="text"
                            value={formData.discountPercent}
                            onChange={(e) => setFormData({ ...formData, discountPercent: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Contract Duration</label>
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { id: "1-year", label: "1 Year" },
                              { id: "3-years", label: "3 Years" },
                              { id: "5-years", label: "5 Years" },
                            ].map((option) => (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => setFormData({ ...formData, contractDuration: option.id })}
                                className={`px-3 py-2 text-xs font-semibold border-2 rounded-lg transition-all ${
                                  formData.contractDuration === option.id
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300"
                                }`}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Auto-renewal</label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { id: "yes", label: "Yes" },
                              { id: "no", label: "No" },
                            ].map((option) => (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => setFormData({ ...formData, autoRenewal: option.id })}
                                className={`px-3 py-2 text-xs font-semibold border-2 rounded-lg transition-all ${
                                  formData.autoRenewal === option.id
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300"
                                }`}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Infrastructure */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Infrastructure</h3>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Infrastructure Fee (SAR)</label>
                      <input
                        type="text"
                        value={formData.infrastructureFee}
                        onChange={(e) => setFormData({ ...formData, infrastructureFee: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Invoicing Details */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Invoicing Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Billing Entity</label>
                          <input
                            type="text"
                            value={formData.billingEntity}
                            onChange={(e) => setFormData({ ...formData, billingEntity: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">VAT Number</label>
                          <input
                            type="text"
                            value={formData.vatNumber}
                            onChange={(e) => setFormData({ ...formData, vatNumber: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Billing Email</label>
                          <input
                            type="email"
                            value={formData.billingEmail}
                            onChange={(e) => setFormData({ ...formData, billingEmail: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Invoice Currency</label>
                          <div className="grid grid-cols-2 gap-3">
                            {["SAR", "USD"].map((currency) => (
                              <button
                                key={currency}
                                type="button"
                                onClick={() => setFormData({ ...formData, invoiceCurrency: currency })}
                                className={`px-4 py-2 text-xs font-semibold border-2 rounded-lg transition-all ${
                                  formData.invoiceCurrency === currency
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300"
                                }`}
                              >
                                {currency}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Invoice Frequency</label>
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { id: "monthly", label: "Monthly" },
                              { id: "quarterly", label: "Quarterly" },
                              { id: "annual", label: "Annual" },
                            ].map((option) => (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => setFormData({ ...formData, invoiceFrequency: option.id })}
                                className={`px-3 py-2 text-xs font-semibold border-2 rounded-lg transition-all ${
                                  formData.invoiceFrequency === option.id
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300"
                                }`}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Method</label>
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { id: "bank-transfer", label: "Bank Transfer" },
                              { id: "online", label: "Online" },
                              { id: "cheque", label: "Cheque" },
                            ].map((option) => (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => setFormData({ ...formData, paymentMethod: option.id })}
                                className={`px-3 py-2 text-xs font-semibold border-2 rounded-lg transition-all ${
                                  formData.paymentMethod === option.id
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300"
                                }`}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Summary */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-fit">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">Pricing Summary</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-between">
                        <span>Subscription</span>
                        <span>0 SAR</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Member Charges</span>
                        <span>0 SAR</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Infrastructure</span>
                        <span>0 SAR</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>VAT (15%)</span>
                        <span>0 SAR</span>
                      </div>
                      <div className="border-t pt-2 flex items-center justify-between font-semibold text-gray-900">
                        <span>Total</span>
                        <span>0 SAR</span>
                      </div>
                    </div>
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
                <div className="text-center mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Payment Information</h1>
                  <p className="text-base text-gray-600">Secure payment processing</p>
                </div>
                <div className="max-w-xl mx-auto">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Payment Details</h3>
                        <p className="text-sm text-gray-500">Your payment is secured with SSL encryption</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          required
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value.replace(/\D/g, "").slice(0, 16) })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="4242 4242 4242 4242"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name</label>
                        <input
                          type="text"
                          required
                          value={formData.cardholderName}
                          onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Name on card"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
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
                          <label className="block text-sm font-semibold text-gray-700 mb-2">CVC</label>
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
                      <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                        <span className="inline-flex w-4 h-4 rounded-full bg-blue-600/10 text-blue-600 items-center justify-center">🔒</span>
                        Your payment is secured with 256-bit SSL encryption
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Review */}
            {currentStep === 5 && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Review</h1>
                  <p className="text-base text-gray-600">Confirm your configuration before submitting</p>
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
                      <span className="text-gray-500">Authority:</span>
                      <span className="ml-2 text-gray-900 font-medium">{formData.licensedAuthority}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Company Type:</span>
                      <span className="ml-2 text-gray-900 font-medium">{formData.companyType}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">NPHIES:</span>
                      <span className="ml-2 text-gray-900 font-medium">
                        {formData.nphiesRegistered === "yes" ? "Registered" : "Not Registered"}
                      </span>
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
                      <span className="ml-2 text-gray-900 font-medium capitalize">{formData.billingCycle}</span>
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

                {/* Review & Finalize */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Configuration Summary</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { label: "Company", value: formData.companyLegalName || "—" },
                      { label: "Subdomain", value: `${formData.subdomain || "—"}.pmisoft.cloud` },
                      { label: "Billing Model", value: formData.billingModel.replace("-", " ") },
                      { label: "Industry Type", value: formData.industryType },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                        <p className="text-xs font-semibold text-gray-500 mb-1">{item.label}</p>
                        <p className="text-sm font-semibold text-gray-900">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Contract & Confirmation</h3>
                  <div className="space-y-3">
                    {[
                      {
                        id: "acceptTerms",
                        label: "Accept Terms & Conditions",
                        value: formData.acceptTerms,
                      },
                      {
                        id: "acceptBillingPolicy",
                        label: "Accept Billing Policy",
                        value: formData.acceptBillingPolicy,
                      },
                      {
                        id: "acknowledgeUsageCharges",
                        label: "Acknowledge usage-based charges",
                        value: formData.acknowledgeUsageCharges,
                      },
                    ].map((item) => (
                      <label key={item.id} className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
                        <input
                          type="checkbox"
                          checked={item.value}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [item.id]: e.target.checked,
                            })
                          }
                          className="h-4 w-4 text-blue-600"
                        />
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                      </label>
                    ))}
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
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>
            )}
            
            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="ml-auto group flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition-all"
              >
                Continue
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            ) : (
              <div className="ml-auto flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  className="px-4 py-2 text-sm font-semibold rounded-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="group flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition-all"
                >
                  <CheckCircle className="w-4 h-4" />
                  Submit & Provision Platform
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default function PurchasePage() {
  return (
    <ProtectedRoute>
      <PurchasePageContent />
    </ProtectedRoute>
  );
}

