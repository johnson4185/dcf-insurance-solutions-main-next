"use client";

import { useState } from "react";
import { usePurchase } from "@/contexts/PurchaseContext";
import { Upload, Palette, Globe, Building, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const colorThemes = [
  { id: "ocean-blue", name: "Ocean Blue", colors: ["#0EA5E9", "#1E293B", "#E0F2FE"] },
  { id: "royal-purple", name: "Royal Purple", colors: ["#8B5CF6", "#4C1D95", "#EDE9FE"] },
  { id: "emerald", name: "Emerald", colors: ["#10B981", "#064E3B", "#D1FAE5"] },
  { id: "amber", name: "Amber", colors: ["#F59E0B", "#78350F", "#FEF3C7"] },
  { id: "crimson", name: "Crimson", colors: ["#EF4444", "#7F1D1D", "#FEE2E2"] },
  { id: "midnight", name: "Midnight", colors: ["#3B82F6", "#1E3A8A", "#DBEAFE"] },
  { id: "teal", name: "Teal", colors: ["#14B8A6", "#115E59", "#CCFBF1"] },
  { id: "rose", name: "Rose", colors: ["#F43F5E", "#881337", "#FFE4E6"] },
];

export default function BrandingStep() {
  const { state, updateState, goToNextStep } = usePurchase();
  const [formData, setFormData] = useState({
    companyLegalName: state.branding.companyName || "",
    brandDisplayName: "",
    shortCode: "",
    website: "",
    industryType: "INSURANCE",
    subdomain: state.branding.subdomain || "",
    colorTheme: state.branding.colorTheme || "ocean-blue",
    buttonStyle: "rounded",
    cardRadius: "medium",
    tableDensity: "comfortable",
    emailFooter: "",
    supportEmail: "",
    supportPhone: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    updateState({
      branding: {
        companyName: formData.companyLegalName,
        subdomain: formData.subdomain,
        colorTheme: formData.colorTheme,
        logo: null as any,
      },
    });
    goToNextStep();
  };

  const selectedTheme = colorThemes.find(t => t.id === formData.colorTheme);
  const isValid = formData.companyLegalName && formData.subdomain;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Hero Section with Image */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Step 1 of 5 - Brand Customization
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              >
                Brand Your Platform
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Create a unique identity for your insurance platform with custom branding, colors, and design preferences.
              </motion.p>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/purchase/branding-hero.svg" 
                  alt="Branding" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Identity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Company Identity</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Legal Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyLegalName}
                    onChange={(e) => handleChange("companyLegalName", e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Brand / Display Name
                  </label>
                  <input
                    type="text"
                    value={formData.brandDisplayName}
                    onChange={(e) => handleChange("brandDisplayName", e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
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
                    onChange={(e) => handleChange("shortCode", e.target.value.toUpperCase())}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    placeholder="ABC"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    placeholder="https://yourcompany.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry Type
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {["INSURANCE", "TPA", "GOVT", "OTHER"].map((type) => (
                      <button
                        key={type}
                        onClick={() => handleChange("industryType", type)}
                        className={`px-4 py-2.5 text-sm font-semibold border-2 rounded-lg transition-all ${
                          formData.industryType === type
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                            : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:shadow-md"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Brand Assets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                <p className="text-xs text-purple-100 font-semibold mb-1">Trial-setup</p>
                <h3 className="text-lg font-bold text-white">Brand Assets</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  "Primary Logo",
                  "Secondary / Dark Logo",
                  "Favicon",
                  "Login Page Banner",
                  "Brand Guidelines (PDF)",
                ].map((asset, index) => (
                  <div key={index}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {asset}
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-pointer group">
                      <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-600 mx-auto mb-2 transition-colors" />
                      <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                        Click to upload or drag and drop
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Theme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Theme</h3>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {colorThemes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => handleChange("colorTheme", theme.id)}
                      className={`p-4 border-2 rounded-xl transition-all ${
                        formData.colorTheme === theme.id
                          ? "border-blue-600 bg-blue-50 shadow-lg scale-105"
                          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center gap-1 mb-3">
                        {theme.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-7 h-7 rounded-lg shadow-md border-2 border-white"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{theme.name}</p>
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Primary Color
                    </label>
                    <div className="h-12 rounded-lg shadow-md border-2 border-gray-200" style={{ backgroundColor: selectedTheme?.colors[0] }} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Secondary Color
                    </label>
                    <div className="h-12 rounded-lg shadow-md border-2 border-gray-200" style={{ backgroundColor: selectedTheme?.colors[1] }} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Accent Color
                    </label>
                    <div className="h-12 rounded-lg shadow-md border-2 border-gray-200" style={{ backgroundColor: selectedTheme?.colors[2] }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* UI Preferences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4">
                <h3 className="text-lg font-bold text-white">UI Preferences</h3>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Button Style
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "square", label: "square" },
                      { value: "rounded", label: "rounded" },
                      { value: "pill", label: "pill" },
                    ].map((style) => (
                      <button
                        key={style.value}
                        onClick={() => handleChange("buttonStyle", style.value)}
                        className={`px-4 py-2.5 text-sm font-semibold border-2 rounded-lg transition-all ${
                          formData.buttonStyle === style.value
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                            : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:shadow-md"
                        }`}
                      >
                        {style.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Card Radius
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["small", "medium", "large"].map((size) => (
                      <button
                        key={size}
                        onClick={() => handleChange("cardRadius", size)}
                        className={`px-4 py-2.5 text-sm font-semibold border-2 rounded-lg transition-all ${
                          formData.cardRadius === size
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                            : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:shadow-md"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Table Density
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["compact", "comfortable", "spacious"].map((density) => (
                      <button
                        key={density}
                        onClick={() => handleChange("tableDensity", density)}
                        className={`px-4 py-2.5 text-sm font-semibold border-2 rounded-lg transition-all ${
                          formData.tableDensity === density
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                            : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:shadow-md"
                        }`}
                      >
                        {density}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Platform URL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Platform URL</h3>
                </div>
              </div>
              <div className="p-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Subdomain
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={formData.subdomain}
                    onChange={(e) => handleChange("subdomain", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
                    placeholder="yourcompany"
                    className="flex-1 px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-mono"
                  />
                  <span className="text-base text-gray-600 whitespace-nowrap font-semibold">.pmisoft.cloud</span>
                </div>
              </div>
            </motion.div>

            {/* Email & Communication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                <h3 className="text-lg font-bold text-white">Email & Communication</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Header Logo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-pointer group">
                    <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-600 mx-auto mb-2 transition-colors" />
                    <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                      Click to upload or drag and drop
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Invoice / Letterhead Logo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-pointer group">
                    <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-600 mx-auto mb-2 transition-colors" />
                    <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                      Click to upload or drag and drop
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Footer Text
                  </label>
                  <textarea
                    value={formData.emailFooter}
                    onChange={(e) => handleChange("emailFooter", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                    placeholder="Add footer text for emails"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Support Email
                  </label>
                  <input
                    type="email"
                    value={formData.supportEmail}
                    onChange={(e) => handleChange("supportEmail", e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
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
                    onChange={(e) => handleChange("supportPhone", e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Live Preview */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200"
            >
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 rounded-t-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-white">Live Preview</span>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-xl border-2 border-slate-200">
                  {/* Header */}
                  <div
                    className="px-6 py-4 flex items-center gap-3"
                    style={{ backgroundColor: selectedTheme?.colors[1] }}
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Palette className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white text-lg font-bold">
                      {formData.companyLegalName || "Your Company"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                      <div className="h-3 bg-slate-200 rounded mb-2" />
                      <div className="h-3 bg-slate-200 rounded w-3/4" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                        <div className="h-2 bg-slate-200 rounded mb-2" />
                        <div className="h-2 bg-slate-200 rounded w-2/3" />
                      </div>
                      <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                        <div className="h-2 bg-slate-200 rounded mb-2" />
                        <div className="h-2 bg-slate-200 rounded w-2/3" />
                      </div>
                    </div>
                    <button
                      className="w-full py-3 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                      style={{ backgroundColor: selectedTheme?.colors[0] }}
                    >
                      Primary Action
                    </button>
                    <button className="w-full py-3 border-2 border-slate-300 rounded-lg text-slate-700 font-semibold hover:border-slate-400 transition-all">
                      Secondary Action
                    </button>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-white border-t-2 border-slate-200">
                    <p className="text-sm text-slate-600 text-center font-mono">
                      https://{formData.subdomain || "yourcompany"}.pmisoft.cloud
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-12 flex justify-end"
        >
          <button
            onClick={handleContinue}
            disabled={!isValid}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl hover:shadow-2xl flex items-center gap-3"
          >
            <span>Continue to Compliance</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
