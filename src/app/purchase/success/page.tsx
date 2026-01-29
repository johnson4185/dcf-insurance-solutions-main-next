"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  Sparkles, 
  Building, 
  Globe, 
  Palette, 
  CreditCard, 
  Shield, 
  Zap,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  ChevronDown,
  FileText,
  Server,
  Database,
  Lock,
  FileCheck,
  Eye,
  BarChart,
  Package,
  Settings,
  Loader2
} from "lucide-react";

export default function SuccessPage() {
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [setupStep, setSetupStep] = useState(0);
  const [setupComplete, setSetupComplete] = useState(false);

  const setupSteps = [
    { label: "Creating Tenant", icon: Building, color: "text-blue-600" },
    { label: "Customizing Branding", icon: Palette, color: "text-purple-600" },
    { label: "Creating Servers", icon: Server, color: "text-green-600" },
    { label: "Configurating Database", icon: Database, color: "text-orange-600" },
    { label: "Enabling Compliance", icon: Shield, color: "text-red-600" },
    { label: "Enabling logging", icon: FileCheck, color: "text-teal-600" },
    { label: "Configuring security", icon: Lock, color: "text-pink-600" },
    { label: "Enabling monitoring", icon: Eye, color: "text-indigo-600" },
    { label: "Enabling Analytics", icon: BarChart, color: "text-yellow-600" },
    { label: "Installing modules", icon: Package, color: "text-cyan-600" },
    { label: "Configuring domain", icon: Globe, color: "text-emerald-600" },
  ];

  // Load form data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('purchaseData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    return;
  }, []);

  // Calculate billing amount
  const calculateAmount = () => {
    if (!formData) return "$0";
    const baseAmount = formData.billingModel === 'subscription' ? 1000 :
                      formData.billingModel === 'per-member' ? 50 :
                      formData.billingModel === 'transaction-based' ? 0.5 : 1000;
    const multiplier = formData.billingFrequency === 'annual' ? 12 : 1;
    const discount = formData.billingFrequency === 'annual' ? 0.8 : 1;
    const total = baseAmount * multiplier * discount;
    return `$${total.toLocaleString()}/${formData.billingFrequency === 'annual' ? 'year' : 'month'}`;
  };

  const purchaseData = {
    company: formData?.brandDisplayName || formData?.companyLegalName || "Your Company",
    subdomain: formData?.subdomain || "yourcompany",
    theme: formData?.colorTheme ? formData.colorTheme.charAt(0).toUpperCase() + formData.colorTheme.slice(1) : "Default",
    licenseNumber: formData?.licenseNumber || "N/A",
    billingModel: formData?.billingModel ? formData.billingModel.charAt(0).toUpperCase() + formData.billingModel.slice(1).replace('-', ' ') : "Subscription",
    billingFrequency: formData?.billingFrequency ? formData.billingFrequency.charAt(0).toUpperCase() + formData.billingFrequency.slice(1) : "Monthly",
    amount: calculateAmount(),
    email: formData?.email || formData?.supportEmail || "admin@company.com",
    phone: formData?.phone || formData?.supportPhone || "",
    setupTime: "2-3 business days"
  };

  useEffect(() => {
    const savedData = localStorage.getItem('purchaseData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Setup animation sequence - starts immediately
  useEffect(() => {
    if (setupStep < setupSteps.length) {
      const timer = setTimeout(() => {
        setSetupStep(setupStep + 1);
      }, 800); // Each step takes 800ms
      return () => clearTimeout(timer);
    } else if (setupStep === setupSteps.length && !setupComplete) {
      // When setup completes, wait 1 second then show success page
      const completeTimer = setTimeout(() => {
        setSetupComplete(true);
        setShowConfetti(true);
        
        // Start success page animations
        setTimeout(() => setStep(1), 500);
        setTimeout(() => setStep(2), 1500);
        setTimeout(() => setStep(3), 2500);
        setTimeout(() => setStep(4), 3500);
        
        // Hide confetti after 3 seconds
        setTimeout(() => setShowConfetti(false), 3000);
      }, 1000);
      
      return () => clearTimeout(completeTimer);
    }
    return;
  }, [setupStep, setupComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 relative overflow-hidden">
      {/* Show setup animation first, then success page */}
      {!setupComplete ? (
        /* Setup Progress Screen */
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
              >
                <Settings className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Setting Up Your Platform</h3>
                <p className="text-blue-200">
                  {setupStep === setupSteps.length ? "Setup Complete! 🎉" : `Step ${setupStep + 1} of ${setupSteps.length}`}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(setupStep / setupSteps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-blue-200">
                <span>0%</span>
                <span className="font-bold text-lg">{Math.round((setupStep / setupSteps.length) * 100)}%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Setup Steps */}
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {setupSteps.map((stepItem, index) => {
                const isCompleted = index < setupStep;
                const isCurrent = index === setupStep;
                const Icon = stepItem.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isCompleted || isCurrent ? 1 : 0.4,
                      x: 0 
                    }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                      isCurrent 
                        ? "bg-white/20 shadow-lg scale-105" 
                        : isCompleted 
                        ? "bg-white/5" 
                        : "bg-white/5"
                    }`}
                  >
                    <div className={`relative flex items-center justify-center w-10 h-10 rounded-lg ${
                      isCompleted 
                        ? "bg-green-500" 
                        : isCurrent 
                        ? "bg-blue-500" 
                        : "bg-white/10"
                    }`}>
                      {isCompleted ? (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", duration: 0.5 }}
                        >
                          <CheckCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </motion.div>
                      ) : isCurrent ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader2 className="w-6 h-6 text-white" />
                        </motion.div>
                      ) : (
                        <Icon className="w-5 h-5 text-white/50" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className={`font-semibold text-lg ${
                        isCompleted || isCurrent ? "text-white" : "text-white/40"
                      }`}>
                        {stepItem.label}
                      </div>
                      {isCurrent && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-blue-200"
                        >
                          In progress...
                        </motion.div>
                      )}
                      {isCompleted && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-green-300"
                        >
                          ✓ Completed
                        </motion.div>
                      )}
                    </div>

                    {isCurrent && (
                      <motion.div
                        animate={{ 
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity 
                        }}
                        className="w-3 h-3 bg-blue-400 rounded-full"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Completion Message */}
            {setupStep === setupSteps.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Platform Ready!</h4>
                    <p className="text-green-200">Redirecting to your dashboard...</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      ) : (
        /* Success Page Content */
        <div className="relative z-10">
          {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Confetti Effect */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: -20,
                  backgroundColor: ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 5)]
                }}
                initial={{ y: -20, opacity: 1, rotate: 0 }}
                animate={{ 
                  y: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000, 
                  opacity: 0,
                  rotate: 360
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          {/* Success Icon & Title */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="relative inline-block mb-6">
              <motion.div
                className="w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl"
                animate={{ 
                  boxShadow: ["0 20px 60px rgba(16, 185, 129, 0.3)", "0 20px 80px rgba(16, 185, 129, 0.5)", "0 20px 60px rgba(16, 185, 129, 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle className="w-16 h-16 text-white" strokeWidth={2.5} />
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-10 h-10 text-yellow-400" />
              </motion.div>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              Purchase Complete!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600"
            >
              Welcome to the future of insurance technology
            </motion.p>
          </motion.div>

          {/* Animated Data Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Company Info Card */}
            <AnimatePresence>
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Building className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-900">Your Company</h3>
                      <p className="text-sm text-gray-500">Organization details</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold text-gray-900"
                    >
                      {purchaseData.company}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-2 text-blue-600 font-medium"
                    >
                      <Globe className="w-4 h-4" />
                      {purchaseData.subdomain}.pmisoft.cloud
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Branding Card */}
            <AnimatePresence>
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", duration: 0.6, delay: 0.1 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center"
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <Palette className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-900">Brand Theme</h3>
                      <p className="text-sm text-gray-500">Visual identity</p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex gap-1">
                      {['#0EA5E9', '#0284C7', '#0369A1'].map((color, i) => (
                        <motion.div
                          key={i}
                          className="w-10 h-10 rounded-lg"
                          style={{ backgroundColor: color }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                        />
                      ))}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">{purchaseData.theme}</div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Compliance Card */}
            <AnimatePresence>
              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Shield className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-900">License</h3>
                      <p className="text-sm text-gray-500">Compliance verified</p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-mono font-bold text-gray-900"
                  >
                    {purchaseData.licenseNumber}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Billing Card */}
            <AnimatePresence>
              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", duration: 0.6, delay: 0.1 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    >
                      <DollarSign className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-900">Billing</h3>
                      <p className="text-sm text-gray-500">Payment plan</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold text-gray-900"
                    >
                      {purchaseData.amount}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-gray-600"
                    >
                      {purchaseData.billingModel} • {purchaseData.billingFrequency}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact & Next Steps */}
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 shadow-2xl mb-8 text-white"
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-8 h-8" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">What Happens Next?</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Confirmation Email</div>
                      <div className="text-sm text-blue-100">Sent to {purchaseData.email}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Platform Setup</div>
                      <div className="text-sm text-blue-100">Ready in {purchaseData.setupTime}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Onboarding Call</div>
                      <div className="text-sm text-blue-100">Our team will reach out to schedule</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Billing Active</div>
                      <div className="text-sm text-blue-100">First invoice in 30 days</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* View All Details Section */}
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
                  className="w-full bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-gray-900">View Complete Details</h3>
                        <p className="text-sm text-gray-500">See all your submitted information</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: showDetails ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
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
                      className="mt-4 bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Branding Section */}
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

                        {/* Compliance Section */}
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
                              <label className="text-sm font-medium text-gray-500">Registered State</label>
                              <p className="text-gray-900 font-medium">{formData.registeredState || "—"}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-500">Registration Type</label>
                              <p className="text-gray-900 font-medium">{formData.registrationType || "—"}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-500">Regulatory Body</label>
                              <p className="text-gray-900 font-medium">{formData.regulatoryBody || "—"}</p>
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
                              <label className="text-sm font-medium text-gray-500">Billing Frequency</label>
                              <p className="text-gray-900 font-medium capitalize">{formData.billingFrequency || "—"}</p>
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

          {/* Action Buttons */}
          <AnimatePresence>
            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Go to Dashboard
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <Link
                    href="/resources"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-200"
                  >
                    View Documentation
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600">
              Questions?{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                Contact our support team
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
      </div>
      )}
    </div>
  );
}
