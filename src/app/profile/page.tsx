"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
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
  ChevronDown,
  LifeBuoy,
  MessageSquare,
  Users,
  FileText,
  Upload,
  Download,
  Check,
  ExternalLink,
  Clock,
  AlertCircle,
  Pencil,
  FileCheck,
  Link2
} from "lucide-react";

function ProfilePageContent() {
  type InvoiceItem = {
    id: number;
    date: string;
    description: string;
    amount: string;
    status: "Paid" | "Unpaid" | "Due";
    invoice: string;
    dueDate: string;
  };

  type PurchaseItem = {
    id: number;
    name: string;
    planName: string;
    planType: "basic" | "build";
    description: string;
    price: string;
    status: string;
    plan: string;
    modules: string;
    seats: string;
    billingCycle: string;
    contractTerm: string;
    startDate: string;
    renewalDate: string;
    renewalInDays: number;
    onboardingOwner: string;
    implementationWindow: string;
    deploymentModel: string;
    environmentCount: string;
    dataResidency: string;
    integrationReadiness: string;
    supportTier: string;
    sla: string;
    tenantUrl: string;
    included?: {
      coreProducts: string[];
      integrations: string[];
      advanced: string[];
      digital: string[];
    };
    coreProducts?: string[];
  };

  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get("tab");
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<"profile" | "account" | "purchases" | "billing" | "support">("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [showRenewModal, setShowRenewModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedPurchase, setSelectedPurchase] = useState<PurchaseItem | null>(null);
  const [detailsTab, setDetailsTab] = useState<"overview" | "usage">("overview");
  
  useEffect(() => {
    if (tabParam && ["profile", "account", "purchases", "billing", "support"].includes(tabParam)) {
      setActiveTab(tabParam as "profile" | "account" | "purchases" | "billing" | "support");
    }
  }, [tabParam]);
  
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "+971 50 123 4567",
    company: user?.company || "DCF Holdings",
    role: user?.role || "admin",
    memberSince: "January 2026"
  });

  const [accountData, setAccountData] = useState({
    companyLegalName: "DCF Holdings LLC",
    brandDisplayName: "DCF Insurance Suite",
    shortCode: "DCF",
    industryType: "INSURANCE",
    website: "www.dcfinsurance.com",
    subdomain: "dcf-insurance",
    colorTheme: "ocean",
    primaryColor: "#0EA5E9",
    secondaryColor: "#0B3B80",
    accentColor: "#38BDF8",
    buttonStyle: "rounded",
    cardRadius: "medium",
    tableDensity: "normal",
    primaryLogo: "logo-primary.svg",
    secondaryLogo: "logo-secondary.svg",
    favicon: "favicon.svg",
    loginBanner: "login-banner.jpg",
    brandGuidelines: "brand-guidelines.pdf",
    emailHeaderLogo: "email-header.svg",
    invoiceLogo: "invoice-logo.svg",
    footerText: "Trusted digital insurance platform.",
    legalCompanyName: "DCF Holdings LLC",
    countryOfRegistration: "United Arab Emirates",
    companyType: "Insurance",
    commercialRegistrationNumber: "CR-102938",
    crExpiryDate: "Dec 31, 2028",
    unifiedNationalId: "7001234567",
    vatRegistrationNumber: "AE-TRN-000123",
    vatCertificate: "vat-certificate.pdf",
    zakatRegistrationNumber: "ZAKAT-1122",
    bankName: "Emirates NBD",
    iban: "AE070331234567890123456",
    licensedAuthority: "CHI",
    licenseNumber: "LIC-98321",
    licenseExpiryDate: "Jan 15, 2028",
    licenseDocument: "license-certificate.pdf",
    scopeOfLicense: "Health, Motor, Life",
    nphiesPayerId: "NPH-88482",
    nphiesRegistered: "Yes",
    nphiesEnvironment: "Production",
    integrationReadiness: "API",
    dataResidencyRequired: "UAE",
    iso27001Available: "Yes",
    pdplComplianceAccepted: "Yes",
    securityContactEmail: "security@dcfinsurance.com",
    dpoName: "Amina Rahman",
    authorizedPersonName: "Omar Aziz",
    authorizedDesignation: "Compliance Director",
    authorizedNationalId: "784-1987-0000000-1",
    authorizedEmail: "omar.aziz@dcfinsurance.com",
    authorizedMobile: "+971 50 555 0101",
    authorizationLetter: "authorization-letter.pdf",
    confirmInfoAccurate: "Yes",
    authorizeVerification: "Yes",
    addressLine1: "Level 12, Tower A",
    addressLine2: "DIFC Gate Avenue",
    city: "Dubai",
    region: "Dubai",
    postalCode: "00000",
    country: "United Arab Emirates"
  });

  const [billingData, setBillingData] = useState({
    billingModel: "subscription",
    billingCycle: "annual",
    subscriptionFee: "$5,988",
    discountPercent: "15",
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

  // Contracts data
  const [contracts, setContracts] = useState([
    {
      id: "CNT-2026-001",
      type: "MSA",
      name: "Master Service Agreement",
      status: "Active",
      startDate: "Jan 15, 2026",
      endDate: "Jan 14, 2028",
      signedBy: "Omar Aziz",
      signedDate: "Jan 10, 2026",
      documentUrl: "msa-contract-2026.pdf"
    },
    {
      id: "CNT-2026-002",
      type: "DPA",
      name: "Data Processing Agreement",
      status: "Active",
      startDate: "Jan 15, 2026",
      endDate: "Jan 14, 2028",
      signedBy: "Amina Rahman",
      signedDate: "Jan 10, 2026",
      documentUrl: "dpa-contract-2026.pdf"
    },
    {
      id: "CNT-2026-003",
      type: "SLA",
      name: "Service Level Agreement",
      status: "Active",
      startDate: "Jan 15, 2026",
      endDate: "Jan 14, 2028",
      signedBy: "Omar Aziz",
      signedDate: "Jan 12, 2026",
      documentUrl: "sla-agreement-2026.pdf"
    },
    {
      id: "CNT-2026-004",
      type: "NDA",
      name: "Non-Disclosure Agreement",
      status: "Active",
      startDate: "Jan 15, 2026",
      endDate: "Jan 14, 2029",
      signedBy: "Omar Aziz",
      signedDate: "Jan 08, 2026",
      documentUrl: "nda-agreement-2026.pdf"
    }
  ]);

  // Account section navigation
  const [accountSection, setAccountSection] = useState<"contracts" | "branding" | "legal" | "security" | "address">("contracts");
  
  // Inline edit state
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState<string>("");

  const handleInlineEdit = (field: string, currentValue: string) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const handleInlineSave = (field: string, setter: React.Dispatch<React.SetStateAction<typeof accountData>>) => {
    setter((prev) => ({ ...prev, [field]: tempValue }));
    setEditingField(null);
    setTempValue("");
  };

  const handleInlineCancel = () => {
    setEditingField(null);
    setTempValue("");
  };

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

  // Mock data for subscriptions
  const purchases: PurchaseItem[] = [
    {
      id: 1,
      name: "DCF Insurance Basic",
      planName: "Insurance Basic",
      planType: "basic",
      description: "Essential insurance management platform",
      price: "$499/month",
      status: "Active",
      plan: "Basic",
      modules: "Policy, Claims",
      seats: "50",
      billingCycle: "Annual",
      contractTerm: "12 months",
      startDate: "Jan 15, 2026",
      renewalDate: "Feb 28, 2026",
      renewalInDays: 16,
      onboardingOwner: "Customer Success",
      implementationWindow: "4 weeks",
      deploymentModel: "SaaS",
      environmentCount: "2",
      dataResidency: "UAE",
      integrationReadiness: "API",
      supportTier: "Priority",
      sla: "99.9%",
      tenantUrl: "dcf-insurance.pmisoft.cloud",
      included: {
        coreProducts: ["Policy Administration", "Billing Center", "Pricing Center"],
        integrations: ["SAMA Compliance", "Najm Integration", "CCHI Integration"],
        advanced: ["Rules Engine", "Fraud Alerts", "Audit Trails"],
        digital: ["Member Portal", "Broker Portal", "Mobile App"]
      }
    },
    {
      id: 2,
      name: "Insurance Build",
      planName: "Insurance Build",
      planType: "build",
      description: "Core modules selected for your enterprise stack",
      price: "$1,850/month",
      status: "Active",
      plan: "Build",
      modules: "Policy, Claims, Billing, Payments",
      seats: "120",
      billingCycle: "Monthly",
      contractTerm: "Month-to-month",
      startDate: "Jan 20, 2026",
      renewalDate: "Dec 20, 2027",
      renewalInDays: 680,
      onboardingOwner: "Enterprise Success",
      implementationWindow: "8 weeks",
      deploymentModel: "SaaS",
      environmentCount: "1",
      dataResidency: "UAE",
      integrationReadiness: "API",
      supportTier: "Standard",
      sla: "99.5%",
      tenantUrl: "build-dcf.pmisoft.cloud",
      coreProducts: [
        "Policy Administration",
        "Claims Management",
        "Billing Center",
        "Payments"
      ]
    },
    // Analytics add-on removed per subscription rules.
  ];

  const [supportTickets, setSupportTickets] = useState([
    {
      id: "TCK-2041",
      subject: "Branding update for login page",
      category: "Branding",
      status: "Open",
      priority: "High",
      createdAt: "Feb 02, 2026"
    },
    {
      id: "TCK-2033",
      subject: "Enable NPHIES production connectivity",
      category: "Compliance",
      status: "Pending",
      priority: "Medium",
      createdAt: "Jan 28, 2026"
    },
    {
      id: "TCK-1994",
      subject: "Invoice currency update",
      category: "Billing",
      status: "Closed",
      priority: "Low",
      createdAt: "Jan 08, 2026"
    }
  ]);

  const [ticketFilter, setTicketFilter] = useState<"all" | "Open" | "Pending" | "Closed">("all");
  const [newTicket, setNewTicket] = useState({
    subject: "",
    category: "General",
    priority: "Medium",
    description: ""
  });
  const [invoiceFilter, setInvoiceFilter] = useState<"all" | "Paid" | "Unpaid" | "Due">("all");
  const [showPayModal, setShowPayModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceItem | null>(null);

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `TCK-${Math.floor(1000 + Math.random() * 9000)}`;
    setSupportTickets([
      {
        id: ticketId,
        subject: newTicket.subject.trim() || "New support request",
        category: newTicket.category,
        status: "Open",
        priority: newTicket.priority,
        createdAt: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric"
        })
      },
      ...supportTickets
    ]);
    setNewTicket({
      subject: "",
      category: "General",
      priority: "Medium",
      description: ""
    });
  };

  // Mock invoice history
  const invoiceHistory: InvoiceItem[] = [
    {
      id: 1,
      date: "Feb 10, 2026",
      description: "Insurance Build - Monthly Subscription",
      amount: "$1,850.00",
      status: "Due",
      invoice: "INV-2026-0210",
      dueDate: "Feb 15, 2026"
    },
    {
      id: 2,
      date: "Feb 01, 2026",
      description: "Analytics Module - Monthly Subscription",
      amount: "$199.00",
      status: "Unpaid",
      invoice: "INV-2026-0201",
      dueDate: "Feb 08, 2026"
    },
    {
      id: 3,
      date: "Jan 20, 2026",
      description: "Analytics Module - Monthly Subscription",
      amount: "$199.00",
      status: "Paid",
      invoice: "INV-2026-0120",
      dueDate: "Jan 27, 2026"
    },
    {
      id: 4,
      date: "Jan 15, 2026",
      description: "DCF Insurance Basic - Annual Subscription",
      amount: "$5,988.00",
      status: "Paid",
      invoice: "INV-2026-0115",
      dueDate: "Jan 22, 2026"
    }
  ];

  const handleSaveProfile = () => {
    // Save profile logic here
    setIsEditing(false);
  };

  const [teamUsers, setTeamUsers] = useState([
    {
      id: "USR-002",
      name: "Delegate 1",
      email: "delegate1@dcfinsurance.com",
      title: "Finance Delegate",
      phone: "+971 50 555 0101",
      role: "delegate",
      lastActive: "Yesterday"
    },
    {
      id: "USR-003",
      name: "Team User 1",
      email: "teamuser1@dcfinsurance.com",
      title: "Billing Operations",
      phone: "+971 50 555 0102",
      role: "delegate",
      lastActive: "Today"
    }
  ]);

  const [showAddUser, setShowAddUser] = useState(false);
  const [newTeamUser, setNewTeamUser] = useState({
    name: "",
    email: "",
    title: "",
    phone: "",
    role: "delegate",
    lastActive: "Just now"
  });
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editingDraft, setEditingDraft] = useState({
    name: "",
    email: "",
    title: "",
    phone: "",
    role: "delegate"
  });

  const handleAddTeamUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTeamUser.name.trim() || !newTeamUser.email.trim()) return;
    const nextId = `USR-${Math.floor(100 + Math.random() * 900)}`;
    setTeamUsers([
      {
        id: nextId,
        name: newTeamUser.name.trim(),
        email: newTeamUser.email.trim(),
        title: newTeamUser.title.trim() || "Team Member",
        phone: newTeamUser.phone.trim() || "-",
        role: newTeamUser.role,
        lastActive: newTeamUser.lastActive || "Just now"
      },
      ...teamUsers
    ]);
    setNewTeamUser({
      name: "",
      email: "",
      title: "",
      phone: "",
      role: "delegate",
      lastActive: "Just now"
    });
    setShowAddUser(false);
  };

  const handleStartEditUser = (member: typeof teamUsers[number]) => {
    setEditingUserId(member.id);
    setEditingDraft({
      name: member.name,
      email: member.email,
      title: member.title,
      phone: member.phone,
      role: member.role
    });
  };

  const handleSaveEditUser = (userId: string) => {
    setTeamUsers(teamUsers.map((member) => (
      member.id === userId
        ? {
            ...member,
            name: editingDraft.name.trim() || member.name,
            email: editingDraft.email.trim() || member.email,
            title: editingDraft.title.trim() || member.title,
            phone: editingDraft.phone.trim() || member.phone,
            role: editingDraft.role
          }
        : member
    )));
    setEditingUserId(null);
  };

  const handleCancelEditUser = () => {
    setEditingUserId(null);
  };

  const handleRemoveTeamUser = (userId: string) => {
    setTeamUsers(teamUsers.filter((member) => member.id !== userId));
  };

  const filteredTickets = ticketFilter === "all"
    ? supportTickets
    : supportTickets.filter((ticket) => ticket.status === ticketFilter);

  const ticketCounts = {
    all: supportTickets.length,
    Open: supportTickets.filter((ticket) => ticket.status === "Open").length,
    Pending: supportTickets.filter((ticket) => ticket.status === "Pending").length,
    Closed: supportTickets.filter((ticket) => ticket.status === "Closed").length
  };

  const filteredInvoices = invoiceFilter === "all"
    ? invoiceHistory
    : invoiceHistory.filter((invoice) => invoice.status === invoiceFilter);

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
              className="text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700 text-xs"
            >
              <LogOut className="w-3 h-3 mr-1.5" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl mb-6 overflow-hidden border border-white/60">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-3 text-xs font-semibold rounded-2xl transition-all ${
                activeTab === "profile"
                  ? "bg-blue text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <User className="w-4 h-4 inline mr-1.5" />
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
              Subscription ({purchases.length})
            </button>
            <button
              onClick={() => setActiveTab("support")}
              className={`px-4 py-3 text-xs font-semibold rounded-2xl transition-all ${
                activeTab === "support"
                  ? "bg-blue text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <LifeBuoy className="w-4 h-4 inline mr-1.5" />
              Support
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
              Billing
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
                  <Button onClick={() => setIsEditing(true)} size="sm" className="bg-blue text-white hover:bg-blue-dark text-xs">
                    <Edit2 className="w-3 h-3 mr-1.5" />
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProfile} size="sm" className="bg-blue text-white hover:bg-blue-dark text-xs">
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

                    <div className="space-y-1.5">
                      <Label htmlFor="role" className="text-xs font-medium text-gray-900">User Role</Label>
                      <select
                        id="role"
                        value={profileData.role}
                        onChange={(e) => setProfileData({ ...profileData, role: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs w-full rounded-md border border-gray-200 bg-white px-3"
                      >
                        <option value="admin">Admin</option>
                        <option value="delegate">Delegate</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200/80 rounded-2xl p-5 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue" />
                      <h3 className="text-sm font-semibold text-gray-900">Team Users</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">{teamUsers.length} users</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-blue bg-blue text-white hover:bg-blue-dark hover:text-white"
                        onClick={() => setShowAddUser(!showAddUser)}
                      >
                        Add User
                      </Button>
                    </div>
                  </div>
                  <AnimatePresence>
                    {showAddUser && (
                      <motion.form
                        onSubmit={handleAddTeamUser}
                        className="mb-4 rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 shadow-sm"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                          <div className="space-y-1.5">
                            <Label htmlFor="newUserName" className="text-xs font-medium text-gray-900">Name</Label>
                            <Input
                              id="newUserName"
                              value={newTeamUser.name}
                              onChange={(e) => setNewTeamUser({ ...newTeamUser, name: e.target.value })}
                              className="h-9 text-xs"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="newUserEmail" className="text-xs font-medium text-gray-900">Email</Label>
                            <Input
                              id="newUserEmail"
                              value={newTeamUser.email}
                              onChange={(e) => setNewTeamUser({ ...newTeamUser, email: e.target.value })}
                              className="h-9 text-xs"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="newUserTitle" className="text-xs font-medium text-gray-900">Title</Label>
                            <Input
                              id="newUserTitle"
                              value={newTeamUser.title}
                              onChange={(e) => setNewTeamUser({ ...newTeamUser, title: e.target.value })}
                              className="h-9 text-xs"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="newUserPhone" className="text-xs font-medium text-gray-900">Phone</Label>
                            <Input
                              id="newUserPhone"
                              value={newTeamUser.phone}
                              onChange={(e) => setNewTeamUser({ ...newTeamUser, phone: e.target.value })}
                              className="h-9 text-xs"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="newUserRole" className="text-xs font-medium text-gray-900">Role</Label>
                            <select
                              id="newUserRole"
                              value={newTeamUser.role}
                              onChange={(e) => setNewTeamUser({ ...newTeamUser, role: e.target.value })}
                              className="h-9 text-xs w-full rounded-md border border-gray-200 bg-white px-3"
                            >
                              <option value="admin">Admin</option>
                              <option value="delegate">Delegate</option>
                            </select>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="text-xs border-gray-300"
                            onClick={() => setShowAddUser(false)}
                          >
                            Cancel
                          </Button>
                          <Button type="submit" size="sm" className="bg-blue text-white hover:bg-blue-dark text-xs">
                            Save User
                          </Button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                  <div className="overflow-x-auto rounded-xl border border-gray-200/80 shadow-sm">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700">User</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700">Role</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700">Last Active</th>
                          <th className="text-right py-3 px-4 text-xs font-semibold text-gray-700">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamUsers.map((member, index) => (
                          <motion.tr
                            key={member.id}
                            className="border-b border-gray-100 transition-colors hover:bg-gray-50"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <td className="py-3 px-4">
                              {editingUserId === member.id ? (
                                <div className="space-y-2">
                                  <Input
                                    value={editingDraft.name}
                                    onChange={(e) => setEditingDraft({ ...editingDraft, name: e.target.value })}
                                    className="h-8 text-xs"
                                  />
                                  <Input
                                    value={editingDraft.email}
                                    onChange={(e) => setEditingDraft({ ...editingDraft, email: e.target.value })}
                                    className="h-8 text-xs"
                                  />
                                  <Input
                                    value={editingDraft.title}
                                    onChange={(e) => setEditingDraft({ ...editingDraft, title: e.target.value })}
                                    className="h-8 text-xs"
                                  />
                                </div>
                              ) : (
                                <>
                                  <div className="text-xs font-semibold text-gray-900">{member.name}</div>
                                  <div className="text-xs text-gray-500">{member.email}</div>
                                  <div className="text-[11px] text-gray-400">{member.title}</div>
                                </>
                              )}
                            </td>
                            <td className="py-3 px-4">
                              {editingUserId === member.id ? (
                                <select
                                  value={editingDraft.role}
                                  onChange={(e) => setEditingDraft({ ...editingDraft, role: e.target.value })}
                                  className="h-8 text-[11px] w-full rounded-md border border-gray-200 bg-white px-2"
                                >
                                  <option value="admin">Admin</option>
                                  <option value="delegate">Delegate</option>
                                </select>
                              ) : (
                                <span className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[11px] text-gray-600">
                                  {member.role === "admin" ? "Admin" : "Delegate"}
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-xs text-gray-600">{member.lastActive}</td>
                            <td className="py-3 px-4 text-right">
                              {editingUserId === member.id ? (
                                <div className="flex justify-end gap-2">
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="text-xs border-gray-300"
                                    onClick={handleCancelEditUser}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="text-xs border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                                    onClick={() => handleRemoveTeamUser(member.id)}
                                  >
                                    Delete
                                  </Button>
                                  <Button
                                    type="button"
                                    size="sm"
                                    className="bg-blue text-white hover:bg-blue-dark text-xs"
                                    onClick={() => handleSaveEditUser(member.id)}
                                  >
                                    Save
                                  </Button>
                                </div>
                              ) : (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 w-8 p-0 border-blue text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                                  onClick={() => handleStartEditUser(member)}
                                  aria-label="Edit user"
                                >
                                  <Edit2 className="w-4 h-4" />
                                </Button>
                              )}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
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
                  <Button onClick={() => setIsEditing(true)} size="sm" className="bg-blue text-white hover:bg-blue-dark text-xs">
                    <Edit2 className="w-3 h-3 mr-1.5" />
                    Edit Account
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProfile} size="sm" className="bg-blue text-white hover:bg-blue-dark text-xs">
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
                      <Label htmlFor="companyLegalName" className="text-xs font-medium text-gray-900">Company Legal Name</Label>
                      <Input
                        id="companyLegalName"
                        value={accountData.companyLegalName}
                        onChange={(e) => setAccountData({ ...accountData, companyLegalName: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

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

                    <div className="space-y-1.5">
                      <Label htmlFor="primaryColor" className="text-xs font-medium text-gray-900">Primary Color</Label>
                      <Input
                        id="primaryColor"
                        value={accountData.primaryColor}
                        onChange={(e) => setAccountData({ ...accountData, primaryColor: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="secondaryColor" className="text-xs font-medium text-gray-900">Secondary Color</Label>
                      <Input
                        id="secondaryColor"
                        value={accountData.secondaryColor}
                        onChange={(e) => setAccountData({ ...accountData, secondaryColor: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="accentColor" className="text-xs font-medium text-gray-900">Accent Color</Label>
                      <Input
                        id="accentColor"
                        value={accountData.accentColor}
                        onChange={(e) => setAccountData({ ...accountData, accentColor: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="buttonStyle" className="text-xs font-medium text-gray-900">Button Style</Label>
                      <Input
                        id="buttonStyle"
                        value={accountData.buttonStyle}
                        onChange={(e) => setAccountData({ ...accountData, buttonStyle: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="cardRadius" className="text-xs font-medium text-gray-900">Card Radius</Label>
                      <Input
                        id="cardRadius"
                        value={accountData.cardRadius}
                        onChange={(e) => setAccountData({ ...accountData, cardRadius: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="tableDensity" className="text-xs font-medium text-gray-900">Table Density</Label>
                      <Input
                        id="tableDensity"
                        value={accountData.tableDensity}
                        onChange={(e) => setAccountData({ ...accountData, tableDensity: e.target.value })}
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
                      <Label htmlFor="secondaryLogo" className="text-xs font-medium text-gray-900">Secondary Logo</Label>
                      <Input
                        id="secondaryLogo"
                        value={accountData.secondaryLogo}
                        onChange={(e) => setAccountData({ ...accountData, secondaryLogo: e.target.value })}
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
                      <Label htmlFor="loginBanner" className="text-xs font-medium text-gray-900">Login Banner</Label>
                      <Input
                        id="loginBanner"
                        value={accountData.loginBanner}
                        onChange={(e) => setAccountData({ ...accountData, loginBanner: e.target.value })}
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

                    <div className="space-y-1.5">
                      <Label htmlFor="brandGuidelines" className="text-xs font-medium text-gray-900">Brand Guidelines</Label>
                      <Input
                        id="brandGuidelines"
                        value={accountData.brandGuidelines}
                        onChange={(e) => setAccountData({ ...accountData, brandGuidelines: e.target.value })}
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
                      <Label htmlFor="crExpiryDate" className="text-xs font-medium text-gray-900">CR Expiry Date</Label>
                      <Input
                        id="crExpiryDate"
                        value={accountData.crExpiryDate}
                        onChange={(e) => setAccountData({ ...accountData, crExpiryDate: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="unifiedNationalId" className="text-xs font-medium text-gray-900">Unified National ID</Label>
                      <Input
                        id="unifiedNationalId"
                        value={accountData.unifiedNationalId}
                        onChange={(e) => setAccountData({ ...accountData, unifiedNationalId: e.target.value })}
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
                      <Label htmlFor="vatCertificate" className="text-xs font-medium text-gray-900">VAT Certificate</Label>
                      <Input
                        id="vatCertificate"
                        value={accountData.vatCertificate}
                        onChange={(e) => setAccountData({ ...accountData, vatCertificate: e.target.value })}
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
                      <Label htmlFor="bankName" className="text-xs font-medium text-gray-900">Bank Name</Label>
                      <Input
                        id="bankName"
                        value={accountData.bankName}
                        onChange={(e) => setAccountData({ ...accountData, bankName: e.target.value })}
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
                      <Label htmlFor="licensedAuthority" className="text-xs font-medium text-gray-900">Licensed Authority</Label>
                      <Input
                        id="licensedAuthority"
                        value={accountData.licensedAuthority}
                        onChange={(e) => setAccountData({ ...accountData, licensedAuthority: e.target.value })}
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
                      <Label htmlFor="scopeOfLicense" className="text-xs font-medium text-gray-900">Scope of License</Label>
                      <Input
                        id="scopeOfLicense"
                        value={accountData.scopeOfLicense}
                        onChange={(e) => setAccountData({ ...accountData, scopeOfLicense: e.target.value })}
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
                      <Label htmlFor="integrationReadiness" className="text-xs font-medium text-gray-900">Integration Readiness</Label>
                      <Input
                        id="integrationReadiness"
                        value={accountData.integrationReadiness}
                        onChange={(e) => setAccountData({ ...accountData, integrationReadiness: e.target.value })}
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

                    <div className="space-y-1.5">
                      <Label htmlFor="pdplComplianceAccepted" className="text-xs font-medium text-gray-900">PDPL Compliance Accepted</Label>
                      <Input
                        id="pdplComplianceAccepted"
                        value={accountData.pdplComplianceAccepted}
                        onChange={(e) => setAccountData({ ...accountData, pdplComplianceAccepted: e.target.value })}
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

                    <div className="space-y-1.5">
                      <Label htmlFor="confirmInfoAccurate" className="text-xs font-medium text-gray-900">Confirm Info Accurate</Label>
                      <Input
                        id="confirmInfoAccurate"
                        value={accountData.confirmInfoAccurate}
                        onChange={(e) => setAccountData({ ...accountData, confirmInfoAccurate: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="authorizeVerification" className="text-xs font-medium text-gray-900">Authorize Verification</Label>
                      <Input
                        id="authorizeVerification"
                        value={accountData.authorizeVerification}
                        onChange={(e) => setAccountData({ ...accountData, authorizeVerification: e.target.value })}
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
                    <MapPin className="w-4 h-4 text-blue" />
                    Company Address
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="addressLine1" className="text-xs font-medium text-gray-900">Address Line 1</Label>
                      <Input
                        id="addressLine1"
                        value={accountData.addressLine1}
                        onChange={(e) => setAccountData({ ...accountData, addressLine1: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="addressLine2" className="text-xs font-medium text-gray-900">Address Line 2</Label>
                      <Input
                        id="addressLine2"
                        value={accountData.addressLine2}
                        onChange={(e) => setAccountData({ ...accountData, addressLine2: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="city" className="text-xs font-medium text-gray-900">City</Label>
                      <Input
                        id="city"
                        value={accountData.city}
                        onChange={(e) => setAccountData({ ...accountData, city: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="region" className="text-xs font-medium text-gray-900">State / Region</Label>
                      <Input
                        id="region"
                        value={accountData.region}
                        onChange={(e) => setAccountData({ ...accountData, region: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="postalCode" className="text-xs font-medium text-gray-900">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={accountData.postalCode}
                        onChange={(e) => setAccountData({ ...accountData, postalCode: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="country" className="text-xs font-medium text-gray-900">Country</Label>
                      <Input
                        id="country"
                        value={accountData.country}
                        onChange={(e) => setAccountData({ ...accountData, country: e.target.value })}
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
              <h2 className="text-lg font-bold text-gray-900 mb-5">Subscriptions</h2>
              {purchases.length === 0 ? (
                <div className="text-center py-8">
                  <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">No active subscriptions</p>
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
                                <div className="flex items-center gap-2 mb-0.5">
                                  <h3 className="text-sm font-semibold text-gray-900">{purchase.planName || purchase.name}</h3>
                                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                                    purchase.status === "Active" 
                                      ? "bg-green-100 text-green-700" 
                                      : "bg-gray-100 text-gray-700"
                                  }`}>
                                    {purchase.status}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-600 mb-1.5">{purchase.description}</p>
                                <div className="flex flex-wrap gap-2 text-[11px] text-gray-500">
                                  <span className="rounded-full border border-gray-200 px-2 py-0.5">Plan: {purchase.plan}</span>
                                </div>
                              </div>
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
                              <div>
                                <span className="text-gray-500 block mb-0.5">Renewal In</span>
                                <span className="font-medium text-gray-900">{purchase.renewalInDays} days</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs"
                            onClick={() => {
                              setSelectedPurchase(purchase);
                              setShowDetailsModal(true);
                            }}
                          >
                            Details
                          </Button>
                          {purchase.renewalInDays <= 90 && (
                            <Button
                              size="sm"
                              className="text-xs bg-blue text-white hover:bg-blue-dark"
                              onClick={() => {
                                setSelectedPurchase(purchase);
                                setShowRenewModal(true);
                              }}
                            >
                              Renew
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs"
                            onClick={() => {
                              const upgradePlan = purchase.planType === "build" ? "now" : "basic";
                              router.push(`/upgrade?plan=${upgradePlan}`);
                            }}
                          >
                            Upgrade
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <AnimatePresence>
                {showRenewModal && selectedPurchase && (
                  <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 12, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-semibold text-gray-900">Renew subscription</h3>
                          <p className="text-xs text-gray-500 mt-1">Confirm renewal for this subscription.</p>
                        </div>
                        <button
                          className="text-gray-400 hover:text-gray-600"
                          onClick={() => setShowRenewModal(false)}
                          aria-label="Close"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Subscription</span>
                          <span className="font-semibold text-gray-900">{selectedPurchase.planName}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-gray-500">Current renewal</span>
                          <span className="text-gray-700">{selectedPurchase.renewalDate}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-gray-500">Renewal term</span>
                          <span className="text-gray-700">12 months</span>
                        </div>
                      </div>
                      <div className="mt-5 flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => setShowRenewModal(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          size="sm"
                          className="text-xs bg-blue text-white hover:bg-blue-dark"
                          onClick={() => setShowRenewModal(false)}
                        >
                          Confirm Renewal
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {showDetailsModal && selectedPurchase && (
                  <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-full max-w-5xl max-h-[85vh] rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden"
                      initial={{ y: 18, opacity: 0, scale: 0.98 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: 12, opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div className="bg-gradient-to-br from-white via-white to-blue-50/60 p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-semibold text-gray-900">Subscription details</h3>
                          <p className="text-xs text-gray-500 mt-1">{selectedPurchase.planName}</p>
                        </div>
                        <button
                          className="text-gray-400 hover:text-gray-600"
                          onClick={() => setShowDetailsModal(false)}
                          aria-label="Close"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-5 rounded-2xl border border-gray-200 bg-white/90 px-2 py-2 shadow-sm">
                        <div className="flex items-center gap-2 px-3 relative">
                          <span
                            className={`absolute left-3 h-8 w-36 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 transition-transform duration-300 ${
                              detailsTab === "overview" ? "translate-x-0" : "translate-x-36"
                            }`}
                          />
                          {[
                            { id: "overview", label: "Overview" },
                            { id: "usage", label: "Usage & Analytics" }
                          ].map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setDetailsTab(tab.id as "overview" | "usage")}
                              className={`relative z-10 w-36 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-all ${
                                detailsTab === tab.id
                                  ? "text-blue-700"
                                  : "text-gray-600 hover:text-gray-900"
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>
                        <div className="mt-3 border-t border-gray-200 px-3 py-4 h-[520px] overflow-y-auto">
                          <div className="relative h-full">
                            <AnimatePresence mode="wait">
                              {detailsTab === "overview" && (
                                <motion.div
                                  key="overview"
                                  className="absolute inset-0"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.18 }}
                                >
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                                  <div>
                                    <span className="text-gray-500 block mb-0.5">Billing Cycle</span>
                                    <span className="font-medium text-gray-900">{selectedPurchase.billingCycle}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 block mb-0.5">Renewal Date</span>
                                    <span className="font-medium text-gray-900">{selectedPurchase.renewalDate}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 block mb-0.5">Seats</span>
                                    <span className="font-medium text-gray-900">{selectedPurchase.seats}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 block mb-0.5">Deployment Model</span>
                                    <span className="font-medium text-gray-900">{selectedPurchase.deploymentModel}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 block mb-0.5">Tenant URL</span>
                                    <span className="font-medium text-gray-900">{selectedPurchase.tenantUrl}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 block mb-0.5">Support Tier</span>
                                    <span className="font-medium text-gray-900">{selectedPurchase.supportTier}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 block mb-0.5">Contract Term</span>
                                    <span className="font-medium text-gray-900">{selectedPurchase.contractTerm}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 block mb-0.5">Implementation Window</span>
                                    <span className="font-medium text-gray-900">{selectedPurchase.implementationWindow}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500 block mb-0.5">SLA</span>
                                    <span className="font-medium text-gray-900">{selectedPurchase.sla}</span>
                                  </div>
                                </div>
                                <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-xs">
                                  <div className="text-[11px] font-semibold text-gray-700 mb-3">Products included</div>
                                  {selectedPurchase.planType === "basic" && selectedPurchase.included && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {[
                                        { label: "Core Products", items: selectedPurchase.included.coreProducts },
                                        { label: "Integrations", items: selectedPurchase.included.integrations },
                                        { label: "Advanced", items: selectedPurchase.included.advanced },
                                        { label: "Digital", items: selectedPurchase.included.digital }
                                      ].map((group) => (
                                        <div key={group.label} className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                                          <div className="text-[11px] font-semibold text-gray-700 mb-2">{group.label}</div>
                                          <ul className="space-y-1 text-[11px] text-gray-600">
                                            {group.items.map((item: string) => (
                                              <li key={item} className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                {item}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  {selectedPurchase.planType === "build" && selectedPurchase.coreProducts && (
                                    <div>
                                      <div className="text-[11px] font-semibold text-blue-700 mb-2">Custom core products</div>
                                      <div className="flex flex-wrap gap-2">
                                        {selectedPurchase.coreProducts.map((product: string) => (
                                          <span key={product} className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] text-blue-700 border border-blue-100">
                                            {product}
                                          </span>
                                        ))}
                                      </div>
                                      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                                          <div className="text-[11px] font-semibold text-gray-700 mb-2">Integrations</div>
                                          <ul className="space-y-1 text-[11px] text-gray-600">
                                            {["SAMA Compliance", "Najm Integration", "CCHI Integration"].map((item) => (
                                              <li key={item} className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                {item}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        <div className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                                          <div className="text-[11px] font-semibold text-gray-700 mb-2">Digital</div>
                                          <ul className="space-y-1 text-[11px] text-gray-600">
                                            {["Member Portal", "Broker Portal", "Mobile App"].map((item) => (
                                              <li key={item} className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                {item}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <div className="mt-5 flex justify-end gap-2">
                                  {selectedPurchase.renewalInDays <= 90 && (
                                    <Button
                                      size="sm"
                                      className="text-xs bg-blue text-white hover:bg-blue-dark"
                                      onClick={() => {
                                        setShowDetailsModal(false);
                                        setShowRenewModal(true);
                                      }}
                                    >
                                      Renew
                                    </Button>
                                  )}
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs"
                                    onClick={() => {
                                      const upgradePlan = selectedPurchase.planType === "build" ? "now" : "basic";
                                      setShowDetailsModal(false);
                                      router.push(`/upgrade?plan=${upgradePlan}`);
                                    }}
                                  >
                                    Upgrade
                                  </Button>
                                </div>
                                </motion.div>
                              )}
                              {detailsTab === "usage" && (
                                <motion.div
                                  key="usage"
                                  className="absolute inset-0"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.18 }}
                                >
                                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-blue-50/60 px-4 py-3 text-xs">
                                  <div className="flex items-center justify-between mb-3">
                                    <div className="text-[11px] font-semibold text-gray-700">Usage trend (last 6 months)</div>
                                    <div className="text-[11px] text-gray-500">Active users</div>
                                  </div>
                                  <div className="h-28">
                                    <svg viewBox="0 0 320 120" className="w-full h-full">
                                      <defs>
                                        <linearGradient id="usageLine" x1="0" y1="0" x2="1" y2="0">
                                          <stop offset="0%" stopColor="#2563EB" />
                                          <stop offset="100%" stopColor="#60A5FA" />
                                        </linearGradient>
                                        <linearGradient id="usageFill" x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.6" />
                                          <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
                                        </linearGradient>
                                      </defs>
                                      {[20, 60, 100, 140, 180, 220, 260, 300].map((x) => (
                                        <line key={x} x1={x} y1="12" x2={x} y2="110" stroke="#E5E7EB" strokeDasharray="3 4" />
                                      ))}
                                      <line x1="20" y1="110" x2="300" y2="110" stroke="#E5E7EB" />
                                      <motion.path
                                        d="M20 88 C45 70 70 68 95 74 C120 80 145 60 170 52 C195 44 220 50 245 40 C270 30 290 32 300 30"
                                        fill="none"
                                        stroke="url(#usageLine)"
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                      />
                                      <motion.path
                                        d="M20 88 C45 70 70 68 95 74 C120 80 145 60 170 52 C195 44 220 50 245 40 C270 30 290 32 300 30 L300 110 L20 110 Z"
                                        fill="url(#usageFill)"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                      />
                                      {[[20, 88], [95, 74], [170, 52], [245, 40], [300, 30]].map(([x, y]) => (
                                        <circle key={`${x}-${y}`} cx={x} cy={y} r={3.5} fill="#2563EB" />
                                      ))}
                                    </svg>
                                  </div>
                                  <div className="mt-2 grid grid-cols-6 text-[10px] text-gray-500">
                                    {["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map((label) => (
                                      <div key={label} className="text-center">{label}</div>
                                    ))}
                                  </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                                    <div className="text-[11px] text-gray-500">Monthly active users</div>
                                    <div className="text-sm font-semibold text-gray-900">3,240</div>
                                    <div className="text-[11px] text-emerald-600">+12% MoM</div>
                                  </div>
                                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                                    <div className="text-[11px] text-gray-500">Claims processed</div>
                                    <div className="text-sm font-semibold text-gray-900">18,450</div>
                                    <div className="text-[11px] text-emerald-600">+8% MoM</div>
                                  </div>
                                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                                    <div className="text-[11px] text-gray-500">API calls</div>
                                    <div className="text-sm font-semibold text-gray-900">2.3M</div>
                                    <div className="text-[11px] text-amber-600">-3% MoM</div>
                                  </div>
                                </div>
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                                    <div className="text-[11px] font-semibold text-gray-700 mb-2">Usage breakdown</div>
                                    <div className="space-y-1 text-[11px] text-gray-600">
                                      <div className="flex items-center justify-between">
                                        <span>Policy administration</span>
                                        <span className="font-semibold text-gray-700">42%</span>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span>Claims management</span>
                                        <span className="font-semibold text-gray-700">31%</span>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span>Billing & payments</span>
                                        <span className="font-semibold text-gray-700">19%</span>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span>Digital portals</span>
                                        <span className="font-semibold text-gray-700">8%</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                                    <div className="text-[11px] font-semibold text-gray-700 mb-2">Performance</div>
                                    <div className="space-y-1 text-[11px] text-gray-600">
                                      <div className="flex items-center justify-between">
                                        <span>Avg response time</span>
                                        <span className="font-semibold text-gray-700">240ms</span>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span>Uptime</span>
                                        <span className="font-semibold text-gray-700">99.93%</span>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span>Automation rate</span>
                                        <span className="font-semibold text-gray-700">76%</span>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span>Escalations</span>
                                        <span className="font-semibold text-gray-700">1.4%</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => setShowDetailsModal(false)}
                        >
                          Close
                        </Button>
                      </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Support Tab */}
          {activeTab === "support" && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-900">Support Tickets</h2>
                <div className="text-xs text-gray-500">{ticketCounts.all} total tickets</div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {([
                      { label: "All", value: "all" },
                      { label: `Open (${ticketCounts.Open})`, value: "Open" },
                      { label: `Pending (${ticketCounts.Pending})`, value: "Pending" },
                      { label: `Closed (${ticketCounts.Closed})`, value: "Closed" }
                    ] as const).map((filter) => (
                      <button
                        key={filter.value}
                        onClick={() => setTicketFilter(filter.value)}
                        className={`rounded-full border px-3 py-1 text-xs font-semibold transition-all ${
                          ticketFilter === filter.value
                            ? "border-blue-600 bg-blue-50 text-blue-700"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>

                  {filteredTickets.length === 0 ? (
                    <div className="text-center py-10 text-sm text-gray-500">
                      <LifeBuoy className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                      No tickets found for this filter.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {filteredTickets.map((ticket) => (
                        <div key={ticket.id} className="border border-gray-200/80 rounded-2xl p-4 bg-white">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="text-xs text-gray-500 mb-1">{ticket.id}</div>
                              <div className="text-sm font-semibold text-gray-900 mb-1">{ticket.subject}</div>
                              <div className="flex flex-wrap gap-2 text-[11px] text-gray-500">
                                <span className="rounded-full border border-gray-200 px-2 py-0.5">{ticket.category}</span>
                                <span className="rounded-full border border-gray-200 px-2 py-0.5">Priority: {ticket.priority}</span>
                                <span className="rounded-full border border-gray-200 px-2 py-0.5">Created: {ticket.createdAt}</span>
                              </div>
                            </div>
                            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                              ticket.status === "Open"
                                ? "bg-emerald-100 text-emerald-700"
                                : ticket.status === "Pending"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-gray-100 text-gray-600"
                            }`}>
                              {ticket.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border border-gray-200/80 rounded-2xl p-5 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="w-4 h-4 text-blue" />
                    <h3 className="text-sm font-semibold text-gray-900">Open a new ticket</h3>
                  </div>
                  <form onSubmit={handleCreateTicket} className="space-y-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="ticketSubject" className="text-xs font-medium text-gray-900">Subject</Label>
                      <Input
                        id="ticketSubject"
                        value={newTicket.subject}
                        onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                        className="h-9 text-xs"
                        placeholder="Describe your request"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="ticketCategory" className="text-xs font-medium text-gray-900">Category</Label>
                      <select
                        id="ticketCategory"
                        value={newTicket.category}
                        onChange={(e) => setNewTicket({ ...newTicket, category: e.target.value })}
                        className="h-9 text-xs w-full rounded-md border border-gray-200 bg-white px-3"
                      >
                        <option value="General">General</option>
                        <option value="Branding">Branding</option>
                        <option value="Compliance">Compliance</option>
                        <option value="Billing">Billing</option>
                        <option value="Technical">Technical</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="ticketPriority" className="text-xs font-medium text-gray-900">Priority</Label>
                      <select
                        id="ticketPriority"
                        value={newTicket.priority}
                        onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value })}
                        className="h-9 text-xs w-full rounded-md border border-gray-200 bg-white px-3"
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="ticketDescription" className="text-xs font-medium text-gray-900">Description</Label>
                      <textarea
                        id="ticketDescription"
                        value={newTicket.description}
                        onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                        className="min-h-[100px] w-full rounded-md border border-gray-200 px-3 py-2 text-xs"
                        placeholder="Add any details or steps..."
                      />
                    </div>
                    <Button type="submit" size="sm" className="w-full bg-blue text-white hover:bg-blue-dark text-xs">
                      Submit Ticket
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === "billing" && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-900">Billing</h2>
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} size="sm" className="bg-blue text-white hover:bg-blue-dark text-xs">
                    <Edit2 className="w-3 h-3 mr-1.5" />
                    Edit Billing
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProfile} size="sm" className="bg-blue text-white hover:bg-blue-dark text-xs">
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
                <div className="border border-gray-200/80 rounded-2xl p-5 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Settings className="w-4 h-4 text-blue" />
                    <h3 className="text-sm font-semibold text-gray-900">Billing Preferences</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="billingCycle" className="text-xs font-medium text-gray-900">Billing Cycle</Label>
                      <Input
                        id="billingCycle"
                        value={billingData.billingCycle}
                        onChange={(e) => setBillingData({ ...billingData, billingCycle: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="autoRenewal" className="text-xs font-medium text-gray-900">Auto Renewal</Label>
                      <Input
                        id="autoRenewal"
                        value={billingData.autoRenewal}
                        onChange={(e) => setBillingData({ ...billingData, autoRenewal: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="paymentMethod" className="text-xs font-medium text-gray-900">Payment Method</Label>
                      <Input
                        id="paymentMethod"
                        value={billingData.paymentMethod}
                        onChange={(e) => setBillingData({ ...billingData, paymentMethod: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="netTerms" className="text-xs font-medium text-gray-900">Net Terms</Label>
                      <Input
                        id="netTerms"
                        value={billingData.netTerms}
                        onChange={(e) => setBillingData({ ...billingData, netTerms: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="invoiceFrequency" className="text-xs font-medium text-gray-900">Invoice Frequency</Label>
                      <Input
                        id="invoiceFrequency"
                        value={billingData.invoiceFrequency}
                        onChange={(e) => setBillingData({ ...billingData, invoiceFrequency: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="billingEmail" className="text-xs font-medium text-gray-900">Billing Email</Label>
                      <Input
                        id="billingEmail"
                        value={billingData.billingEmail}
                        onChange={(e) => setBillingData({ ...billingData, billingEmail: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="billingContactName" className="text-xs font-medium text-gray-900">Billing Contact</Label>
                      <Input
                        id="billingContactName"
                        value={billingData.billingContactName}
                        onChange={(e) => setBillingData({ ...billingData, billingContactName: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="purchaseOrderNumber" className="text-xs font-medium text-gray-900">Purchase Order #</Label>
                      <Input
                        id="purchaseOrderNumber"
                        value={billingData.purchaseOrderNumber}
                        onChange={(e) => setBillingData({ ...billingData, purchaseOrderNumber: e.target.value })}
                        disabled={!isEditing}
                        className="h-9 text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="text-sm font-semibold text-gray-900">Invoice History</h3>
                <div className="flex flex-wrap gap-2">
                  {([
                    { label: "All", value: "all" },
                    { label: "Paid", value: "Paid" },
                    { label: "Unpaid", value: "Unpaid" },
                    { label: "Due", value: "Due" }
                  ] as const).map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setInvoiceFilter(filter.value)}
                      className={`rounded-full border px-3 py-1 text-xs font-semibold transition-all ${
                        invoiceFilter === filter.value
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
              {filteredInvoices.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">No invoice history</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-gray-200/80">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-3 text-xs font-semibold text-gray-700">Date</th>
                        <th className="text-left py-3 px-3 text-xs font-semibold text-gray-700">Description</th>
                        <th className="text-left py-3 px-3 text-xs font-semibold text-gray-700">Invoice</th>
                        <th className="text-left py-3 px-3 text-xs font-semibold text-gray-700">Due Date</th>
                        <th className="text-right py-3 px-3 text-xs font-semibold text-gray-700">Amount</th>
                        <th className="text-center py-3 px-3 text-xs font-semibold text-gray-700">Status</th>
                        <th className="text-center py-3 px-3 text-xs font-semibold text-gray-700">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInvoices.map((bill) => (
                        <tr key={bill.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-3 text-xs text-gray-900">{bill.date}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{bill.description}</td>
                          <td className="py-3 px-3 text-xs font-mono text-gray-500">{bill.invoice}</td>
                          <td className="py-3 px-3 text-xs text-gray-600">{bill.dueDate}</td>
                          <td className="py-3 px-3 text-xs font-semibold text-gray-900 text-right">{bill.amount}</td>
                          <td className="py-3 px-3 text-center">
                            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                              bill.status === "Paid"
                                ? "bg-green-100 text-green-700"
                                : bill.status === "Due"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-rose-100 text-rose-700"
                            }`}>
                              {bill.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center">
                            {bill.status === "Paid" ? (
                              <div className="flex items-center justify-center gap-2">
                                <Button variant="ghost" size="sm" className="text-xs h-7">
                                  <Eye className="w-3 h-3 mr-1" />
                                  View
                                </Button>
                                <Button variant="outline" size="sm" className="text-xs h-7">
                                  Download
                                </Button>
                              </div>
                            ) : (
                              <Button
                                size="sm"
                                className="text-xs h-7 bg-blue text-white hover:bg-blue-dark"
                                onClick={() => {
                                  setSelectedInvoice(bill);
                                  setShowPayModal(true);
                                }}
                              >
                                Pay
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <AnimatePresence>
                {showPayModal && selectedInvoice && (
                  <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 12, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-semibold text-gray-900">Confirm payment</h3>
                          <p className="text-xs text-gray-500 mt-1">You are about to pay this invoice.</p>
                        </div>
                        <button
                          className="text-gray-400 hover:text-gray-600"
                          onClick={() => setShowPayModal(false)}
                          aria-label="Close"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Invoice</span>
                          <span className="font-mono text-gray-700">{selectedInvoice.invoice}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-gray-500">Amount</span>
                          <span className="font-semibold text-gray-900">{selectedInvoice.amount}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-gray-500">Due date</span>
                          <span className="text-gray-700">{selectedInvoice.dueDate}</span>
                        </div>
                      </div>
                      <div className="mt-5 flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => setShowPayModal(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          size="sm"
                          className="text-xs bg-blue text-white hover:bg-blue-dark"
                          onClick={() => setShowPayModal(false)}
                        >
                          Confirm & Pay
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
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
