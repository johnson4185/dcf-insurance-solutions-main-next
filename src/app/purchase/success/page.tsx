"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle, Loader2, Server, Palette, Database, Shield, Zap, Lock, Activity, BarChart3, Globe, Settings, ExternalLink } from "lucide-react";

const provisioningSteps = [
  { icon: Server, label: "Creating Tenant", description: "Setting up your dedicated environment" },
  { icon: Palette, label: "Customizing Branding", description: "Applying your brand colors and logo" },
  { icon: Server, label: "Creating Servers", description: "Provisioning cloud infrastructure" },
  { icon: Database, label: "Configuring Database", description: "Setting up your dedicated data layer" },
  { icon: Shield, label: "Enabling Compliance", description: "Configuring regulatory integrations" },
  { icon: Zap, label: "Enabling Logging", description: "Setting up audit trails" },
  { icon: Lock, label: "Configuring Security", description: "Applying enterprise security policies" },
  { icon: Activity, label: "Enabling Monitoring", description: "Configuring health checks" },
  { icon: BarChart3, label: "Enabling Analytics", description: "Setting up dashboards" },
  { icon: Settings, label: "Installing Modules", description: "Deploying core platform modules" },
  { icon: Globe, label: "Configuring Domain", description: "Setting up your custom subdomain" },
];

export default function SuccessPage() {
  const [completedSteps, setCompletedSteps] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedSteps((prev) => {
        if (prev >= provisioningSteps.length) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
            isComplete ? "bg-green-500 scale-100" : "bg-green-400 scale-95"
          }`}>
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {isComplete ? "Platform Ready!" : "Setting Up Your Platform..."}
          </h1>
          <p className="text-xl text-gray-600">
            {isComplete 
              ? "Your production environment is ready to use" 
              : "Please wait while we configure your environment"}
          </p>
        </div>

        {/* Provisioning Steps */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <div className="space-y-4">
            {provisioningSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isCompleted = index < completedSteps;
              const isActive = index === completedSteps - 1;

              return (
                <div
                  key={step.label}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    isActive ? "bg-blue-50 scale-105" : isCompleted ? "bg-green-50" : "bg-gray-50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                    isCompleted ? "bg-green-500" : isActive ? "bg-blue-600" : "bg-gray-300"
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : isActive ? (
                      <Loader2 className="w-6 h-6 text-white animate-spin" />
                    ) : (
                      <StepIcon className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{step.label}</div>
                    <div className="text-sm text-gray-600">{step.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Environment Details */}
        {isComplete && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8 animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Environment Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Environment</span>
                <span className="font-semibold text-gray-900">Production</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">URL</span>
                <span className="font-semibold text-blue-600">demo.pmisoft.io</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Status</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Active
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        {isComplete && (
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://demo.pmisoft.io"
              target="_blank"
              className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              Go to Dashboard
              <ExternalLink className="w-5 h-5" />
            </Link>
            <Link
              href="/resources"
              className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200"
            >
              View Documentation
            </Link>
          </div>
        )}

        {/* Help */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline font-medium">
              Contact Sales
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
