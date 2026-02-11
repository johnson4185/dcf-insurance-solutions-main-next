"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  User,
  Mail,
  Building,
  Phone,
  MapPin,
  Calendar,
  Package,
  Settings,
  LogOut,
  Edit2,
  Save,
  X,
  Eye,
  CreditCard,
  ShieldCheck,
  Palette,
  Globe,
  IdCard,
  ChevronDown
} from "lucide-react";

function ProfilePageContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<"profile" | "account" | "purchases" | "billing">("profile");
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    if (tabParam && ["profile", "account", "purchases", "billing"].includes(tabParam)) {
      setActiveTab(tabParam as "profile" | "account" | "purchases" | "billing");
    }
  }, [tabParam]);
  
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "+971 50 123 4567",
    company: user?.company || "DCF Holdings",
    addressLine1: "Level 12, Tower A",
    addressLine2: "DIFC Gate Avenue",
    city: "Dubai",
    region: "Dubai",
    postalCode: "00000",
    country: "United Arab Emirates",
    memberSince: "January 2026"
  });

  const [accountData, setAccountData] = useState({
    brandDisplayName: "DCF Insurance Suite",
    shortCode: "DCF",
    industryType: "INSURANCE",
    website: "www.dcfinsurance.com",
    subdomain: "dcf-insurance",
    colorTheme: "ocean",
    primaryLogo: "logo-primary.svg",
    favicon: "favicon.svg",
    emailHeaderLogo: "email-header.svg",
    invoiceLogo: "invoice-logo.svg",
    footerText: "Trusted digital insurance platform.",
    legalCompanyName: "DCF Holdings LLC",
    countryOfRegistration: "United Arab Emirates",
    companyType: "Insurance",
    commercialRegistrationNumber: "CR-102938",
    vatRegistrationNumber: "AE-TRN-000123",
    zakatRegistrationNumber: "ZAKAT-1122",
    iban: "AE070331234567890123456",
    licenseNumber: "LIC-98321",
    licenseExpiryDate: "Jan 15, 2028",
    licenseDocument: "license-certificate.pdf",
    nphiesPayerId: "NPH-88482",
    nphiesRegistered: "Yes",
    nphiesEnvironment: "Production",
    dataResidencyRequired: "UAE",
    iso27001Available: "Yes",
    securityContactEmail: "security@dcfinsurance.com",
    dpoName: "Amina Rahman",
    authorizedPersonName: "Omar Aziz",
    authorizedDesignation: "Compliance Director",
    authorizedNationalId: "784-1987-0000000-1",
    authorizedEmail: "omar.aziz@dcfinsurance.com",
    authorizedMobile: "+971 50 555 0101",
    authorizationLetter: "authorization-letter.pdf"
  });

  const [billingData, setBillingData] = useState({
    billingModel: "subscription",
    billingCycle: "annual",
    contractDuration: "24 months",
    autoRenewal: "Yes",
    billingEntity: "DCF Holdings LLC",
    vatNumber: "AE-TRN-000123",
    billingEmail: "billing@dcfinsurance.com",
    billingContactName: "Finance Ops",
    purchaseOrderNumber: "PO-2026-1042",
    invoiceCurrency: "USD",
    invoiceFrequency: "Monthly",
    netTerms: "Net 30",
    billingStartDate: "Jan 15, 2026",
    paymentMethod: "Bank Transfer",
    billingAddress: "Level 12, Tower A",
    billingCity: "Dubai",
    billingState: "Dubai",
    billingZip: "00000",
    deploymentModel: "SaaS",
    environmentCount: "2",
    dataResidency: "UAE",
    infrastructureFee: "$2,000/month"
  });

  const themePalettes: Record<string, string[]> = {
    ocean: ["#0EA5E9", "#0B3B80", "#38BDF8"],
    royal: ["#8B5CF6", "#5B21B6", "#A78BFA"],
    emerald: ["#10B981", "#065F46", "#6EE7B7"],
    amber: ["#F59E0B", "#92400E", "#FCD34D"],
    crimson: ["#EF4444", "#991B1B", "#FCA5A5"],
    midnight: ["#1F2937", "#111827", "#6B7280"],
    teal: ["#14B8A6", "#0F766E", "#5EEAD4"],
    rose: ["#F43F5E", "#9F1239", "#FDA4AF"],
  };

  // Mock data for purchased products
  const purchases = [
    {
      id: 1,
      name: "DCF Insurance Basic",
      description: "Essential insurance management platform",
      price: "$499/month",
      status: "Active",
      plan: "Basic",
      modules: "Policy, Claims",
      seats: "50",
      billingCycle: "Annual",
      contractTerm: "12 months",
      startDate: "Jan 15, 2026",
      renewalDate: "Jan 15, 2027",
      onboardingOwner: "Customer Success",
      implementationWindow: "4 weeks",
      deploymentModel: "SaaS",
      environmentCount: "2",
      dataResidency: "UAE",
      integrationReadiness: "API",
      supportTier: "Priority",
      sla: "99.9%",
      tenantUrl: "dcf-insurance.pmisoft.cloud"
    },
    {
      id: 2,
      name: "Analytics Module",
      description: "Advanced reporting and analytics",
      price: "$199/month",
      status: "Active",
      plan: "Analytics",
      modules: "Dashboards, Exports",
      seats: "25",
      billingCycle: "Monthly",
      contractTerm: "Month-to-month",
      startDate: "Jan 20, 2026",
      renewalDate: "Feb 20, 2026",
      onboardingOwner: "Analytics Specialist",
      implementationWindow: "2 weeks",
      deploymentModel: "SaaS",
      environmentCount: "1",
      dataResidency: "UAE",
      integrationReadiness: "API",
      supportTier: "Standard",
      sla: "99.5%",
      tenantUrl: "analytics-dcf.pmisoft.cloud"
    }
  ];

  // Mock billing history
  const billingHistory = [
    {
      id: 1,
      date: "Jan 20, 2026",
      description: "Analytics Module - Monthly Subscription",
      amount: "$199.00",
      status: "Paid",
      invoice: "INV-2026-0120"
    },
    {
      id: 2,
      date: "Jan 15, 2026",
      description: "DCF Insurance Basic - Annual Subscription",
      amount: "$5,988.00",
      status: "Paid",
      invoice: "INV-2026-0115"
    },
    {
      id: 3,
      date: "Dec 20, 2025",
      description: "Analytics Module - Monthly Subscription",
      amount: "$199.00",
      status: "Paid",
      invoice: "INV-2025-1220"
    },
    {
      id: 4,
      date: "Nov 20, 2025",
      description: "Analytics Module - Monthly Subscription",
      amount: "$199.00",
      status: "Paid",
      invoice: "INV-2025-1120"
    }
  ];

  const handleSaveProfile = () => {
    // Save profile logic here
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#e8f0ff,_#f8fafc_55%,_#eef2ff)] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 mb-6 border border-white/60">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue to-blue-dark rounded-2xl flex items-center justify-center text-white shadow-lg">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 mb-0.5">
                  {profileData.firstName} {profileData.lastName}
                </h1>
                <p className="text-sm text-gray-600 mb-1">{profileData.email}</p>
                <p className="text-xs text-gray-500">
                  <Calendar className="w-3 h-3 inline mr-1" />
                  Member since {profileData.memberSince}
                </p>
              </div>
            </div>
            <Button
              onClick={signOut}
              variant="outline"
              size="sm"
              className="text-red-600 border-red-300 hover:bg-red-50 text-xs"
            >
              <LogOut className="w-3 h-3 mr-1.5" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl mb-6 overflow-hidden border border-white/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-3 text-xs font-semibold rounded-2xl transition-all ${
                activeTab === "profile"
                  ? "bg-blue text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Settings className="w-4 h-4 inline mr-1.5" />
              Profile
            </button>
            <button
              onClick={() => setActiveTab("account")}
              className={`px-4 py-3 text-xs font-semibold rounded-2xl transition-all ${
                activeTab === "account"
                  ? "bg-blue text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <IdCard className="w-4 h-4 inline mr-1.5" />
              Account
            </button>
            <button
              onClick={() => setActiveTab("purchases")}
              className={`px-4 py-3 text-xs font-semibold rounded-2xl transition-all ${
                activeTab === "purchases"
                  ? "bg-blue text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Package className="w-4 h-4 inline mr-1.5" />
              Active Products ({purchases.length})
            </button>
            <button
              onClick={() => setActiveTab("billing")}
              className={`px-4 py-3 text-xs font-semibold rounded-2xl transition-all ${
                activeTab === "billing"
                  ? "bg-blue text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Calendar className="w-4 h-4 inline mr-1.5" />
              Billing History
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 border border-white/60">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-900">Profile Information</h2>
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} size="sm" className="bg-blue hover:bg-blue-dark text-xs">
                    <Edit2 className="w-3 h-3 mr-1.5" />
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProfile} size="sm" className="bg-blue hover:bg-blue-dark text-xs">
                      <Save className="w-3 h-3 mr-1.5" />
                      Save
                    </Button>
                    <Button onClick={() => setIsEditing(false)} size="sm" variant="outline" className="text-xs">
                      <X className="w-3 h-3 mr-1.5" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="border border-gray-200/80 rounded-2xl p-5 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-4 h-4 text-blue" />
                    <h3 className="text-sm font-semibold text-gray-900">User Details</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="firstName" className="text-xs font-medium text-gray-900">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                          disabled={!isEditing}
                          className="pl-8 h-9 text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="lastName" className="text-xs font-medium text-gray-900">Last Name</Label>
                      <div className="relative">
                        <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                          disabled={!isEditing}
                          className="pl-8 h-9 text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs font-medium text-gray-900">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          disabled
                          className="pl-8 h-9 text-xs bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-xs font-medium text-gray-900">Phone</Label>
                      <div className="relative">
                        <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          disabled={!isEditing}
                          className="pl-8 h-9 text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-xs font-medium text-gray-900">Company</Label>
                      <div className="relative">
                        <Building className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <Input
                          id="company"
                          value={profileData.company}
                          onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                          disabled={!isEditing}
                          className="pl-8 h-9 text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200/80 rounded-2xl p-5 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-blue" />
                    <h3 className="text-sm font-semibold text-gray-900">Address</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="addressLine1" className="text-xs font-medium text-gray-900">Address Line 1</Label>
                      <Input
                        id="addressLine1"
                        value={profileData.addressLine1}
                        onChange={(e) => setProfileData({ ...profileData, addressLine1: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="addressLine2" className="text-xs font-medium text-gray-900">Address Line 2</Label>
                      <Input
                        id="addressLine2"
                        value={profileData.addressLine2}
                        onChange={(e) => setProfileData({ ...profileData, addressLine2: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="city" className="text-xs font-medium text-gray-900">City</Label>
                      <Input
                        id="city"
                        value={profileData.city}
                        onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="region" className="text-xs font-medium text-gray-900">State / Region</Label>
                      <Input
                        id="region"
                        value={profileData.region}
                        onChange={(e) => setProfileData({ ...profileData, region: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="postalCode" className="text-xs font-medium text-gray-900">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={profileData.postalCode}
                        onChange={(e) => setProfileData({ ...profileData, postalCode: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="country" className="text-xs font-medium text-gray-900">Country</Label>
                      <Input
                        id="country"
                        value={profileData.country}
                        onChange={(e) => setProfileData({ ...profileData, country: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Account Tab */}
          {activeTab === "account" && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-900">Account Details</h2>
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} size="sm" className="bg-blue hover:bg-blue-dark text-xs">
                    <Edit2 className="w-3 h-3 mr-1.5" />
                    Edit Account
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProfile} size="sm" className="bg-blue hover:bg-blue-dark text-xs">
                      <Save className="w-3 h-3 mr-1.5" />
                      Save
                    </Button>
                    <Button onClick={() => setIsEditing(false)} size="sm" variant="outline" className="text-xs">
                      <X className="w-3 h-3 mr-1.5" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6">
                <details className="group border border-gray-200/80 rounded-2xl p-5 bg-white" open>
                  <summary className="flex items-center justify-between gap-2 text-sm font-semibold text-gray-900 cursor-pointer">
                    <span className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-blue" />
                    Branding & Platform
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="brandDisplayName" className="text-xs font-medium text-gray-900">Brand Display Name</Label>
                      <Input
                        id="brandDisplayName"
                        value={accountData.brandDisplayName}
                        onChange={(e) => setAccountData({ ...accountData, brandDisplayName: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="shortCode" className="text-xs font-medium text-gray-900">Short Code</Label>
                      <Input
                        id="shortCode"
                        value={accountData.shortCode}
                        onChange={(e) => setAccountData({ ...accountData, shortCode: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="industryType" className="text-xs font-medium text-gray-900">Industry Type</Label>
                      <Input
                        id="industryType"
                        value={accountData.industryType}
                        onChange={(e) => setAccountData({ ...accountData, industryType: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="website" className="text-xs font-medium text-gray-900">Website</Label>
                      <div className="relative">
                        <Globe className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                        <Input
                          id="website"
                          value={accountData.website}
                          onChange={(e) => setAccountData({ ...accountData, website: e.target.value })}
                          disabled={!isEditing}
                          className="pl-8 h-9 text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="subdomain" className="text-xs font-medium text-gray-900">Platform Subdomain</Label>
                      <Input
                        id="subdomain"
                        value={accountData.subdomain}
                        onChange={(e) => setAccountData({ ...accountData, subdomain: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="colorTheme" className="text-xs font-medium text-gray-900">Theme</Label>
                      <select
                        id="colorTheme"
                        value={accountData.colorTheme}
                        onChange={(e) => setAccountData({ ...accountData, colorTheme: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs w-full rounded-md border border-gray-200 bg-white px-3"
                      >
                        <option value="ocean">Ocean</option>
                        <option value="royal">Royal</option>
                        <option value="emerald">Emerald</option>
                        <option value="amber">Amber</option>
                        <option value="crimson">Crimson</option>
                        <option value="midnight">Midnight</option>
                        <option value="teal">Teal</option>
                        <option value="rose">Rose</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs font-medium text-gray-900">Theme Palette</Label>
                      <div className="flex items-center gap-2 h-9 px-3 rounded-md border border-gray-200 bg-white">
                        {(themePalettes[accountData.colorTheme] || themePalettes.ocean).map((color) => (
                          <span
                            key={color}
                            className="h-4 w-4 rounded-full border border-gray-200"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  </div>
                </details>

                <details className="group border border-gray-200/80 rounded-2xl p-5 bg-white">
                  <summary className="flex items-center justify-between gap-2 text-sm font-semibold text-gray-900 cursor-pointer">
                    <span className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-blue" />
                    Brand Assets & UI Preferences
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="primaryLogo" className="text-xs font-medium text-gray-900">Primary Logo</Label>
                      <Input
                        id="primaryLogo"
                        value={accountData.primaryLogo}
                        onChange={(e) => setAccountData({ ...accountData, primaryLogo: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="favicon" className="text-xs font-medium text-gray-900">Favicon</Label>
                      <Input
                        id="favicon"
                        value={accountData.favicon}
                        onChange={(e) => setAccountData({ ...accountData, favicon: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="emailHeaderLogo" className="text-xs font-medium text-gray-900">Email Header Logo</Label>
                      <Input
                        id="emailHeaderLogo"
                        value={accountData.emailHeaderLogo}
                        onChange={(e) => setAccountData({ ...accountData, emailHeaderLogo: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="invoiceLogo" className="text-xs font-medium text-gray-900">Invoice Logo</Label>
                      <Input
                        id="invoiceLogo"
                        value={accountData.invoiceLogo}
                        onChange={(e) => setAccountData({ ...accountData, invoiceLogo: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5 md:col-span-2">
                      <Label htmlFor="footerText" className="text-xs font-medium text-gray-900">Footer Text</Label>
                      <Input
                        id="footerText"
                        value={accountData.footerText}
                        onChange={(e) => setAccountData({ ...accountData, footerText: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                  </div>
                  </div>
                </details>

                <details className="group border border-gray-200/80 rounded-2xl p-5 bg-white">
                  <summary className="flex items-center justify-between gap-2 text-sm font-semibold text-gray-900 cursor-pointer">
                    <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue" />
                    Legal & Compliance
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="legalCompanyName" className="text-xs font-medium text-gray-900">Legal Company Name</Label>
                      <Input
                        id="legalCompanyName"
                        value={accountData.legalCompanyName}
                        onChange={(e) => setAccountData({ ...accountData, legalCompanyName: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="countryOfRegistration" className="text-xs font-medium text-gray-900">Country of Registration</Label>
                      <Input
                        id="countryOfRegistration"
                        value={accountData.countryOfRegistration}
                        onChange={(e) => setAccountData({ ...accountData, countryOfRegistration: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="companyType" className="text-xs font-medium text-gray-900">Company Type</Label>
                      <Input
                        id="companyType"
                        value={accountData.companyType}
                        onChange={(e) => setAccountData({ ...accountData, companyType: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="commercialRegistrationNumber" className="text-xs font-medium text-gray-900">Commercial Registration Number</Label>
                      <Input
                        id="commercialRegistrationNumber"
                        value={accountData.commercialRegistrationNumber}
                        onChange={(e) => setAccountData({ ...accountData, commercialRegistrationNumber: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="vatRegistrationNumber" className="text-xs font-medium text-gray-900">VAT Registration Number</Label>
                      <Input
                        id="vatRegistrationNumber"
                        value={accountData.vatRegistrationNumber}
                        onChange={(e) => setAccountData({ ...accountData, vatRegistrationNumber: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="zakatRegistrationNumber" className="text-xs font-medium text-gray-900">Zakat Registration Number</Label>
                      <Input
                        id="zakatRegistrationNumber"
                        value={accountData.zakatRegistrationNumber}
                        onChange={(e) => setAccountData({ ...accountData, zakatRegistrationNumber: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="iban" className="text-xs font-medium text-gray-900">IBAN</Label>
                      <Input
                        id="iban"
                        value={accountData.iban}
                        onChange={(e) => setAccountData({ ...accountData, iban: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>


                    <div className="space-y-1.5">
                      <Label htmlFor="licenseNumber" className="text-xs font-medium text-gray-900">License Number</Label>
                      <Input
                        id="licenseNumber"
                        value={accountData.licenseNumber}
                        onChange={(e) => setAccountData({ ...accountData, licenseNumber: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="licenseExpiryDate" className="text-xs font-medium text-gray-900">License Expiry Date</Label>
                      <Input
                        id="licenseExpiryDate"
                        value={accountData.licenseExpiryDate}
                        onChange={(e) => setAccountData({ ...accountData, licenseExpiryDate: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="licenseDocument" className="text-xs font-medium text-gray-900">License Document</Label>
                      <Input
                        id="licenseDocument"
                        value={accountData.licenseDocument}
                        onChange={(e) => setAccountData({ ...accountData, licenseDocument: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="nphiesPayerId" className="text-xs font-medium text-gray-900">NPHIES Payer ID</Label>
                      <Input
                        id="nphiesPayerId"
                        value={accountData.nphiesPayerId}
                        onChange={(e) => setAccountData({ ...accountData, nphiesPayerId: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="nphiesRegistered" className="text-xs font-medium text-gray-900">NPHIES Registered</Label>
                      <Input
                        id="nphiesRegistered"
                        value={accountData.nphiesRegistered}
                        onChange={(e) => setAccountData({ ...accountData, nphiesRegistered: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="nphiesEnvironment" className="text-xs font-medium text-gray-900">NPHIES Environment</Label>
                      <Input
                        id="nphiesEnvironment"
                        value={accountData.nphiesEnvironment}
                        onChange={(e) => setAccountData({ ...accountData, nphiesEnvironment: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>


                    <div className="space-y-1.5">
                      <Label htmlFor="dataResidencyRequired" className="text-xs font-medium text-gray-900">Data Residency Required</Label>
                      <Input
                        id="dataResidencyRequired"
                        value={accountData.dataResidencyRequired}
                        onChange={(e) => setAccountData({ ...accountData, dataResidencyRequired: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="iso27001Available" className="text-xs font-medium text-gray-900">ISO 27001 Available</Label>
                      <Input
                        id="iso27001Available"
                        value={accountData.iso27001Available}
                        onChange={(e) => setAccountData({ ...accountData, iso27001Available: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                  </div>
                  </div>
                </details>

                <details className="group border border-gray-200/80 rounded-2xl p-5 bg-white">
                  <summary className="flex items-center justify-between gap-2 text-sm font-semibold text-gray-900 cursor-pointer">
                    <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue" />
                    Security & Authorization
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="securityContactEmail" className="text-xs font-medium text-gray-900">Security Contact Email</Label>
                      <Input
                        id="securityContactEmail"
                        value={accountData.securityContactEmail}
                        onChange={(e) => setAccountData({ ...accountData, securityContactEmail: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="dpoName" className="text-xs font-medium text-gray-900">Data Protection Officer</Label>
                      <Input
                        id="dpoName"
                        value={accountData.dpoName}
                        onChange={(e) => setAccountData({ ...accountData, dpoName: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="authorizedPersonName" className="text-xs font-medium text-gray-900">Authorized Signatory</Label>
                      <Input
                        id="authorizedPersonName"
                        value={accountData.authorizedPersonName}
                        onChange={(e) => setAccountData({ ...accountData, authorizedPersonName: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="authorizedDesignation" className="text-xs font-medium text-gray-900">Authorized Designation</Label>
                      <Input
                        id="authorizedDesignation"
                        value={accountData.authorizedDesignation}
                        onChange={(e) => setAccountData({ ...accountData, authorizedDesignation: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="authorizedNationalId" className="text-xs font-medium text-gray-900">Authorized National ID</Label>
                      <Input
                        id="authorizedNationalId"
                        value={accountData.authorizedNationalId}
                        onChange={(e) => setAccountData({ ...accountData, authorizedNationalId: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="authorizedEmail" className="text-xs font-medium text-gray-900">Authorized Email</Label>
                      <Input
                        id="authorizedEmail"
                        value={accountData.authorizedEmail}
                        onChange={(e) => setAccountData({ ...accountData, authorizedEmail: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="authorizedMobile" className="text-xs font-medium text-gray-900">Authorized Mobile</Label>
                      <Input
                        id="authorizedMobile"
                        value={accountData.authorizedMobile}
                        onChange={(e) => setAccountData({ ...accountData, authorizedMobile: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="authorizationLetter" className="text-xs font-medium text-gray-900">Authorization Letter</Label>
                      <Input
                        id="authorizationLetter"
                        value={accountData.authorizationLetter}
                        onChange={(e) => setAccountData({ ...accountData, authorizationLetter: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                  </div>
                  </div>
                </details>
              </div>
            </div>
          )}

          {/* Purchases Tab */}
          {activeTab === "purchases" && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-5">Active Products</h2>
              {purchases.length === 0 ? (
                <div className="text-center py-8">
                  <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">No active products</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {purchases.map((purchase) => (
                    <div key={purchase.id} className="border border-gray-200/80 rounded-2xl p-5 hover:shadow-md transition-shadow bg-white">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue/10 to-blue-dark/10 rounded-xl flex items-center justify-center">
                            <Package className="w-6 h-6 text-blue" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{purchase.name}</h3>
                                <p className="text-xs text-gray-600 mb-1.5">{purchase.description}</p>
                              </div>
                              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ml-3 ${
                                purchase.status === "Active" 
                                  ? "bg-green-100 text-green-700" 
                                  : "bg-gray-100 text-gray-700"
                              }`}>
                                {purchase.status}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                              <div>
                                <span className="text-gray-500 block mb-0.5">Price</span>
                                <span className="font-semibold text-blue">{purchase.price}</span>
                              </div>
                              <div>
                                <span className="text-gray-500 block mb-0.5">Billing Cycle</span>
                                <span className="font-medium text-gray-900">{purchase.billingCycle}</span>
                              </div>
                              <div>
                                <span className="text-gray-500 block mb-0.5">Renewal Date</span>
                                <span className="font-medium text-gray-900">{purchase.renewalDate}</span>
                              </div>
                            </div>
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                              <div>
                                <span className="text-gray-500 block mb-0.5">Deployment Model</span>
                                <span className="font-medium text-gray-900">{purchase.deploymentModel}</span>
                              </div>
                              <div>
                                <span className="text-gray-500 block mb-0.5">Tenant URL</span>
                                <span className="font-medium text-gray-900">{purchase.tenantUrl}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs ml-3">
                          <Eye className="w-3 h-3 mr-1.5" />
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Billing History Tab */}
          {activeTab === "billing" && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-900">Billing History</h2>
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} size="sm" className="bg-blue hover:bg-blue-dark text-xs">
                    <Edit2 className="w-3 h-3 mr-1.5" />
                    Edit Billing
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProfile} size="sm" className="bg-blue hover:bg-blue-dark text-xs">
                      <Save className="w-3 h-3 mr-1.5" />
                      Save
                    </Button>
                    <Button onClick={() => setIsEditing(false)} size="sm" variant="outline" className="text-xs">
                      <X className="w-3 h-3 mr-1.5" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="border border-gray-200/80 rounded-2xl p-5 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="w-4 h-4 text-blue" />
                    <h3 className="text-sm font-semibold text-gray-900">Billing Summary</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="billingModel" className="text-xs font-medium text-gray-900">Billing Mode</Label>
                      <Input
                        id="billingModel"
                        value={billingData.billingModel}
                        onChange={(e) => setBillingData({ ...billingData, billingModel: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="invoiceCurrency" className="text-xs font-medium text-gray-900">Currency</Label>
                      <select
                        id="invoiceCurrency"
                        value={billingData.invoiceCurrency}
                        onChange={(e) => setBillingData({ ...billingData, invoiceCurrency: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs w-full rounded-md border border-gray-200 bg-white px-3"
                      >
                        <option value="USD">USD</option>
                        <option value="SAR">SAR</option>
                        <option value="AED">AED</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {billingHistory.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">No billing history</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-gray-200/80">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-3 text-xs font-semibold text-gray-700">Date</th>
                        <th className="text-left py-3 px-3 text-xs font-semibold text-gray-700">Description</th>
                        <th className="text-left py-3 px-3 text-xs font-semibold text-gray-700">Invoice</th>
                        <th className="text-right py-3 px-3 text-xs font-semibold text-gray-700">Amount</th>
                        <th className="text-center py-3 px-3 text-xs font-semibold text-gray-700">Status</th>
                        <th className="text-center py-3 px-3 text-xs font-semibold text-gray-700">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {billingHistory.map((bill) => (
                        <tr key={bill.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-3 text-xs text-gray-900">{bill.date}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{bill.description}</td>
                          <td className="py-3 px-3 text-xs font-mono text-gray-500">{bill.invoice}</td>
                          <td className="py-3 px-3 text-xs font-semibold text-gray-900 text-right">{bill.amount}</td>
                          <td className="py-3 px-3 text-center">
                            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                              bill.status === "Paid" 
                                ? "bg-green-100 text-green-700" 
                                : "bg-yellow-100 text-yellow-700"
                            }`}>
                              {bill.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center">
                            <Button variant="ghost" size="sm" className="text-xs h-7">
                              <Eye className="w-3 h-3 mr-1" />
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfilePageContent />
    </ProtectedRoute>
  );
}
