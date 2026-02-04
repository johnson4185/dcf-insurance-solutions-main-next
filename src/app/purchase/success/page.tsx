"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  CreditCard,
  ExternalLink,
  FileText,
  Loader2,
  Mail,
  Palette,
  Shield,
} from "lucide-react";

export default function SuccessPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [setupStep, setSetupStep] = useState(0);
  const [setupComplete, setSetupComplete] = useState(false);

  const setupSteps = [
    { label: "Creating tenant" },
    { label: "Customizing branding" },
    { label: "Provisioning servers" },
    { label: "Configuring database" },
    { label: "Enabling compliance" },
    { label: "Configuring security" },
    { label: "Enabling monitoring" },
    { label: "Installing modules" },
    { label: "Configuring domain" },
  ];

  useEffect(() => {
    const savedData = localStorage.getItem("purchaseData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const calculateAmount = () => {
    if (!formData) return "$0";
    const baseAmount =
      formData.billingModel === "subscription"
        ? 1000
        : formData.billingModel === "member-based"
        ? 50
        : formData.billingModel === "transaction"
        ? 0.5
        : 1000;
    const multiplier = formData.billingCycle === "annual" ? 12 : 1;
    const discount = formData.billingCycle === "annual" ? 0.85 : 1;
    const total = baseAmount * multiplier * discount;
    return `$${total.toLocaleString()}/${formData.billingCycle === "annual" ? "year" : "month"}`;
  };

  const purchaseData = {
    company: formData?.brandDisplayName || formData?.companyLegalName || "Your Company",
    subdomain: formData?.subdomain || "yourcompany",
    theme: formData?.colorTheme
      ? formData.colorTheme.charAt(0).toUpperCase() + formData.colorTheme.slice(1)
      : "Default",
    licenseNumber: formData?.licenseNumber || "N/A",
    billingModel: formData?.billingModel
      ? formData.billingModel.charAt(0).toUpperCase() + formData.billingModel.slice(1).replace("-", " ")
      : "Subscription",
    billingFrequency: formData?.billingCycle
      ? formData.billingCycle.charAt(0).toUpperCase() + formData.billingCycle.slice(1)
      : "Monthly",
    amount: calculateAmount(),
    email: formData?.email || formData?.supportEmail || "admin@company.com",
    phone: formData?.phone || formData?.supportPhone || "",
    setupTime: "2-3 business days",
  };

  const paletteMap: Record<string, string[]> = {
    default: ["#0ea5e9", "#6366f1", "#14b8a6", "#f59e0b"],
    ocean: ["#0ea5e9", "#0284c7", "#0f766e", "#22c55e"],
    royal: ["#6366f1", "#8b5cf6", "#ec4899", "#f97316"],
    slate: ["#0f172a", "#334155", "#64748b", "#94a3b8"],
    emerald: ["#10b981", "#059669", "#14b8a6", "#22c55e"],
  };

  const themeKey = (formData?.colorTheme || "default").toLowerCase();
  const palette = paletteMap[themeKey] || paletteMap.default;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let completeTimer: ReturnType<typeof setTimeout> | undefined;

    if (setupStep < setupSteps.length) {
      timer = setTimeout(() => {
        setSetupStep((prev) => prev + 1);
      }, 650);
    } else if (setupStep === setupSteps.length && !setupComplete) {
      completeTimer = setTimeout(() => {
        setSetupComplete(true);
        setTimeout(() => setStep(1), 300);
        setTimeout(() => setStep(2), 700);
        setTimeout(() => setStep(3), 1100);
        setTimeout(() => setStep(4), 1500);
      }, 800);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (completeTimer) clearTimeout(completeTimer);
    };
  }, [setupStep, setupComplete, setupSteps.length]);

  return (
    <div className="min-h-screen bg-slate-50">
      {!setupComplete ? (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-5xl w-full rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden"
          >
            <motion.div
              className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-violet-500/20"
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 rounded-3xl pointer-events-none" />
            <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white px-6 py-8 md:px-10">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-black/80" />
              <div className="absolute inset-y-0 right-0 w-1.5 bg-black/80" />
              <div className="absolute inset-y-0 left-1.5 w-px bg-gradient-to-b from-transparent via-slate-600/40 to-transparent" />
              <div className="absolute inset-y-0 right-1.5 w-px bg-gradient-to-b from-transparent via-slate-600/40 to-transparent" />
              <div className="absolute inset-0 opacity-50">
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl" />
                <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" />
              </div>
              <motion.div
                className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"
                animate={{ opacity: [0.2, 0.9, 0.2], scaleX: [0.7, 1.05, 0.7] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute right-10 bottom-6 h-16 w-16 rounded-full border border-blue-400/30"
                animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.2, 0.6, 0.2] }}
                transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}
              />
              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Provisioning</p>
                  <h3 className="text-2xl md:text-3xl font-semibold mt-2">Bringing your platform online</h3>
                  <p className="text-sm text-slate-300 mt-2">Secure environment setup and brand configuration in progress.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs">Secure tenant</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs">Compliance ready</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs">Branding applied</span>
                  </div>
                </div>
                <div className="relative h-24 w-24">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.9, 0.7, 0.9] }}
                    transition={{ repeat: Infinity, duration: 2.4 }}
                  />
                  <motion.div
                    className="absolute inset-2 rounded-full bg-slate-900/80 border border-white/10 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  >
                    <Loader2 className="w-6 h-6 text-blue-200 animate-spin" />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="px-6 py-8 md:px-10 bg-white relative">
              <motion.div
                className="absolute -top-4 right-10 h-10 w-10 rounded-full bg-blue-500/10"
                animate={{ y: [0, -6, 0], opacity: [0.2, 0.6, 0.2] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
              />
              <div className="relative">
                <div className="absolute inset-x-0 top-3 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="h-3" />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span>Progress</span>
                <span>{Math.round((setupStep / setupSteps.length) * 100)}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(setupStep / setupSteps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)]"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                <span>Initializing</span>
                <span>Applying branding</span>
                <span>Securing access</span>
              </div>

              <div className="mt-6">
                <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-5 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_55%)]"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 relative">
                    {setupSteps.map((stepItem, index) => {
                      const isCompleted = index < setupStep;
                      const isCurrent = index === setupStep;
                      return (
                        <motion.div
                          key={stepItem.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`flex items-center justify-between gap-3 rounded-full border px-5 py-3 text-sm shadow-sm ${
                            isCompleted
                              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                              : isCurrent
                              ? "border-blue-200 bg-blue-50 text-blue-700"
                              : "border-slate-200 bg-white text-slate-600"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${
                                isCompleted
                                  ? "bg-emerald-500"
                                  : isCurrent
                                  ? "bg-blue-500 animate-pulse"
                                  : "bg-slate-300"
                              }`}
                            />
                            {stepItem.label}
                          </span>
                          {isCompleted ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : isCurrent ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <span className="text-xs">Queued</span>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-4 text-xs text-slate-500">Live provisioning checklist for your environment.</div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
          <div className="max-w-5xl w-full space-y-6">
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-black" />
              <div className="absolute inset-y-0 right-0 w-1.5 bg-black" />
              <div className="absolute left-6 right-6 top-3 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              <motion.div
                className="absolute right-6 top-10 h-20 w-20 rounded-full border border-slate-300/40"
                animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 6.2, ease: "easeInOut" }}
              />
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold mb-3">
                    <CheckCircle className="w-4 h-4" />
                    Provisioned
                  </div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Platform ready</h1>
                  <p className="text-slate-600">Your environment is live and ready to use.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-600">Tenant secured</span>
                    <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-600">Compliance active</span>
                    <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-600">Branding synced</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm min-w-[220px]">
                  <div className="text-slate-500 text-xs uppercase tracking-[0.2em]">Workspace URL</div>
                  <div className="text-blue-600 font-semibold mt-1">{purchaseData.subdomain}.pmisoft.cloud</div>
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                  <div className="mt-3 text-xs text-slate-500">Ready for handoff</div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                {palette.map((color, index) => (
                  <span
                    key={index}
                    className="h-2 w-16 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="mt-2 text-xs text-slate-500">Theme palette applied across cards, capsules, and data lines.</div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-4">
                  <p className="text-xs text-slate-500">Company</p>
                  <p className="text-lg font-semibold text-slate-900">{purchaseData.company}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-4">
                  <p className="text-xs text-slate-500">Billing</p>
                  <p className="text-lg font-semibold text-slate-900">{purchaseData.amount}</p>
                  <p className="text-sm text-slate-500">{purchaseData.billingModel} • {purchaseData.billingFrequency}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-4">
                  <p className="text-xs text-slate-500">Theme</p>
                  <p className="text-lg font-semibold text-slate-900">{purchaseData.theme}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-4">
                  <p className="text-xs text-slate-500">License</p>
                  <p className="text-lg font-semibold text-slate-900">{purchaseData.licenseNumber}</p>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-black/90" />
              <div className="absolute inset-y-0 right-0 w-1.5 bg-black/90" />
              <motion.div
                className="absolute left-6 right-6 top-4 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                animate={{ opacity: [0.2, 0.7, 0.2] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
              />
              <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Activation highlights</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-600">Live access</span>
                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-600">Security</span>
                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-600">Branding</span>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-5" />
              <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Workspace</p>
                  <p className="mt-2 text-slate-900 font-semibold">{purchaseData.subdomain}.pmisoft.cloud</p>
                  <div className="mt-3 flex gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full text-[11px] bg-white border border-slate-200">SSO ready</span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] bg-white border border-slate-200">Audit logs</span>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Branding</p>
                  <p className="mt-2 text-slate-900 font-semibold">{purchaseData.theme} theme applied</p>
                  <div className="mt-3 flex items-center gap-2">
                    {palette.slice(0, 3).map((color, index) => (
                      <span key={index} className="h-6 w-6 rounded-full border border-white" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Support</p>
                  <p className="mt-2 text-slate-900 font-semibold">Priority onboarding enabled</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>{purchaseData.email}</span>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {step >= 4 && formData && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:border-gray-300 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-bold text-gray-900">View Complete Details</h3>
                          <p className="text-sm text-gray-500">See all your submitted information</p>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: showDetails ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-6 h-6 text-gray-600" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 bg-white rounded-2xl p-8 shadow-sm border border-gray-200 overflow-hidden"
                      >
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Palette className="w-5 h-5 text-purple-600" />
                              <h4 className="font-bold text-lg text-gray-900">Branding</h4>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="text-sm font-medium text-gray-500">Company Legal Name</label>
                                <p className="text-gray-900 font-medium">{formData.companyLegalName || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Brand Display Name</label>
                                <p className="text-gray-900 font-medium">{formData.brandDisplayName || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Short Code</label>
                                <p className="text-gray-900 font-medium">{formData.shortCode || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Website</label>
                                <p className="text-gray-900 font-medium">{formData.website || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Industry Type</label>
                                <p className="text-gray-900 font-medium">{formData.industryType || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Subdomain</label>
                                <p className="text-blue-600 font-medium">{formData.subdomain}.pmisoft.cloud</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Color Theme</label>
                                <p className="text-gray-900 font-medium capitalize">{formData.colorTheme || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Support Email</label>
                                <p className="text-gray-900 font-medium">{formData.supportEmail || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Support Phone</label>
                                <p className="text-gray-900 font-medium">{formData.supportPhone || "—"}</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Shield className="w-5 h-5 text-green-600" />
                              <h4 className="font-bold text-lg text-gray-900">Compliance</h4>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="text-sm font-medium text-gray-500">License Number</label>
                                <p className="text-gray-900 font-medium font-mono">{formData.licenseNumber || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Licensed Authority</label>
                                <p className="text-gray-900 font-medium">{formData.licensedAuthority || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Company Type</label>
                                <p className="text-gray-900 font-medium">{formData.companyType || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">NPHIES Registered</label>
                                <p className="text-gray-900 font-medium">{formData.nphiesRegistered === "yes" ? "Yes" : "No"}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 mb-4 mt-8">
                              <CreditCard className="w-5 h-5 text-orange-600" />
                              <h4 className="font-bold text-lg text-gray-900">Billing & Payment</h4>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="text-sm font-medium text-gray-500">Billing Model</label>
                                <p className="text-gray-900 font-medium capitalize">{formData.billingModel?.replace('-', ' ') || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Billing Cycle</label>
                                <p className="text-gray-900 font-medium capitalize">{formData.billingCycle || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Amount</label>
                                <p className="text-2xl font-bold text-green-600">{purchaseData.amount}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 mb-4 mt-8">
                              <Mail className="w-5 h-5 text-blue-600" />
                              <h4 className="font-bold text-lg text-gray-900">Contact</h4>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="text-sm font-medium text-gray-500">Email</label>
                                <p className="text-gray-900 font-medium">{formData.email || "—"}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Phone</label>
                                <p className="text-gray-900 font-medium">{formData.phone || "—"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {step >= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="/"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition-all"
                  >
                    Go to Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/resources"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md transition-all"
                  >
                    View Documentation
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-center text-sm text-gray-600">
              Questions?{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                Contact our support team
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
