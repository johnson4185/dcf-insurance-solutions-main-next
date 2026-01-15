"use client";

import { usePurchase } from "@/contexts/PurchaseContext";
import { Check, Palette, Shield, CreditCard, Receipt, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { number: 1, label: "Branding", id: "branding", icon: Palette, color: "#3B82F6" },
  { number: 2, label: "Compliance", id: "compliance", icon: Shield, color: "#8B5CF6" },
  { number: 3, label: "Billing", id: "billing", icon: Receipt, color: "#10B981" },
  { number: 4, label: "Payment", id: "payment", icon: CreditCard, color: "#F59E0B" },
  { number: 5, label: "Confirm", id: "confirm", icon: CheckCircle, color: "#EF4444" },
];

export default function PurchaseSteps() {
  const { currentStep, setCurrentStep } = usePurchase();

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/80">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Progress Bar Background */}
        <div className="relative mb-8">
          <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 rounded-full" />
          <motion.div
            className="absolute top-8 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          
          {/* Steps */}
          <div className="relative flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.number;
              const isCurrent = currentStep === step.number;
              const isUpcoming = currentStep < step.number;

              return (
                <motion.div
                  key={step.id}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => currentStep > step.number && setCurrentStep(step.number)}
                    disabled={currentStep < step.number}
                    whileHover={currentStep > step.number ? { scale: 1.1 } : {}}
                    whileTap={currentStep > step.number ? { scale: 0.95 } : {}}
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center font-bold transition-all duration-300 shadow-lg ${
                      isCompleted
                        ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white cursor-pointer hover:shadow-xl"
                        : isCurrent
                        ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl"
                        : "bg-white text-gray-400 border-2 border-gray-200"
                    }`}
                    style={{
                      boxShadow: isCurrent ? `0 8px 24px ${step.color}40` : undefined,
                    }}
                  >
                    {isCompleted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      >
                        <Check className="w-7 h-7" strokeWidth={3} />
                      </motion.div>
                    ) : (
                      <Icon className={`w-7 h-7 ${isCurrent ? "animate-pulse" : ""}`} />
                    )}
                    
                    {/* Pulse Animation for Current Step */}
                    {isCurrent && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-blue-400"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </motion.button>
                  
                  <motion.div
                    className="mt-3 text-center"
                    animate={{
                      scale: isCurrent ? 1.05 : 1,
                    }}
                  >
                    <span
                      className={`text-sm font-semibold ${
                        isCompleted || isCurrent ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </span>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {isCompleted ? "Completed" : isCurrent ? "In Progress" : "Pending"}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Step Information */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            <span>Step {currentStep} of {steps.length}</span>
            <span>•</span>
            <span>{Math.round((currentStep / steps.length) * 100)}% Complete</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
