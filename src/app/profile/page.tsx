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
  ShoppingCart,
  Heart,
  Package,
  Settings,
  LogOut,
  Edit2,
  Save,
  X,
  Trash2,
  Eye
} from "lucide-react";

function ProfilePageContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<"profile" | "purchases" | "wishlist" | "cart" | "billing">("profile");
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    if (tabParam && ["profile", "purchases", "wishlist", "cart", "billing"].includes(tabParam)) {
      setActiveTab(tabParam as "profile" | "purchases" | "wishlist" | "cart" | "billing");
    }
  }, [tabParam]);
  
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "+971 50 123 4567",
    company: user?.company || "",
    role: user?.role || "",
    address: "Dubai, UAE",
    memberSince: "January 2026"
  });

  // Mock data for purchased products
  const purchases = [
    {
      id: 1,
      name: "DCF Insurance Basic",
      description: "Essential insurance management platform",
      purchaseDate: "Jan 15, 2026",
      price: "$499/month",
      status: "Active",
      term: "Annual",
      nextBilling: "Jan 15, 2027",
      image: "/images/products/basic.svg"
    },
    {
      id: 2,
      name: "Analytics Module",
      description: "Advanced reporting and analytics",
      purchaseDate: "Jan 20, 2026",
      price: "$199/month",
      status: "Active",
      term: "Monthly",
      nextBilling: "Feb 20, 2026",
      image: "/images/products/analytics.svg"
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

  // Mock data for wishlist
  const [wishlist, setWishlist] = useState([
    {
      id: 3,
      name: "DCF Insurance Enterprise",
      description: "Complete enterprise solution",
      price: "$1,999/month",
      image: "/images/products/enterprise.svg"
    },
    {
      id: 4,
      name: "Claims Processing Module",
      description: "Automated claims management",
      price: "$299/month",
      image: "/images/products/claims.svg"
    }
  ]);

  // Mock data for cart
  const [cart, setCart] = useState([
    {
      id: 5,
      name: "Policy Management Module",
      description: "Comprehensive policy administration",
      price: "$349/month",
      quantity: 1,
      image: "/images/products/policy.svg"
    }
  ]);

  const handleSaveProfile = () => {
    // Save profile logic here
    setIsEditing(false);
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const calculateCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue to-blue-dark rounded-xl flex items-center justify-center text-white">
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
        <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex-1 px-4 py-3 text-xs font-medium transition-colors ${
                activeTab === "profile"
                  ? "bg-blue text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Settings className="w-4 h-4 inline mr-1.5" />
              Profile
            </button>
            <button
              onClick={() => setActiveTab("purchases")}
              className={`flex-1 px-4 py-3 text-xs font-medium transition-colors ${
                activeTab === "purchases"
                  ? "bg-blue text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Package className="w-4 h-4 inline mr-1.5" />
              Active Products ({purchases.length})
            </button>
            <button
              onClick={() => setActiveTab("billing")}
              className={`flex-1 px-4 py-3 text-xs font-medium transition-colors ${
                activeTab === "billing"
                  ? "bg-blue text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Calendar className="w-4 h-4 inline mr-1.5" />
              Billing History
            </button>
            <button
              onClick={() => setActiveTab("wishlist")}
              className={`flex-1 px-4 py-3 text-xs font-medium transition-colors ${
                activeTab === "wishlist"
                  ? "bg-blue text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Heart className="w-4 h-4 inline mr-1.5" />
              Wishlist ({wishlist.length})
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`flex-1 px-4 py-3 text-xs font-medium transition-colors ${
                activeTab === "cart"
                  ? "bg-blue text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <ShoppingCart className="w-4 h-4 inline mr-1.5" />
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
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
                  <Label htmlFor="role" className="text-xs font-medium text-gray-900">Role</Label>
                  <Input
                    id="role"
                    value={profileData.role}
                    onChange={(e) => setProfileData({ ...profileData, role: e.target.value })}
                    disabled={!isEditing}
                    className="h-9 text-xs"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <Label htmlFor="address" className="text-xs font-medium text-gray-900">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                    <Input
                      id="address"
                      value={profileData.address}
                      onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                      disabled={!isEditing}
                      className="pl-8 h-9 text-xs"
                    />
                  </div>
                </div>
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
                    <div key={purchase.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue/10 to-blue-dark/10 rounded-lg flex items-center justify-center">
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
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                              <div>
                                <span className="text-gray-500 block mb-0.5">Price</span>
                                <span className="font-semibold text-blue">{purchase.price}</span>
                              </div>
                              <div>
                                <span className="text-gray-500 block mb-0.5">Term</span>
                                <span className="font-medium text-gray-900">{purchase.term}</span>
                              </div>
                              <div>
                                <span className="text-gray-500 block mb-0.5">Start Date</span>
                                <span className="font-medium text-gray-900">{purchase.purchaseDate}</span>
                              </div>
                              <div>
                                <span className="text-gray-500 block mb-0.5">Next Billing</span>
                                <span className="font-medium text-gray-900">{purchase.nextBilling}</span>
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
              <h2 className="text-lg font-bold text-gray-900 mb-5">Billing History</h2>
              {billingHistory.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">No billing history</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
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

          {/* Wishlist Tab */}
          {activeTab === "wishlist" && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-5">My Wishlist</h2>
              {wishlist.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">Your wishlist is empty</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wishlist.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex gap-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue/10 to-blue-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Heart className="w-7 h-7 text-blue" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{item.name}</h3>
                          <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                          <p className="text-sm font-bold text-blue mb-2">{item.price}</p>
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 bg-blue hover:bg-blue-dark text-xs h-8">
                              <ShoppingCart className="w-3 h-3 mr-1" />
                              Add to Cart
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => removeFromWishlist(item.id)}
                              className="text-red-600 border-red-300 hover:bg-red-50 h-8 px-2"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Cart Tab */}
          {activeTab === "cart" && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-5">Shopping Cart</h2>
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div>
                  <div className="space-y-3 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue/10 to-blue-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <ShoppingCart className="w-7 h-7 text-blue" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{item.name}</h3>
                            <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                            <div className="flex items-center gap-3">
                              <p className="text-sm font-bold text-blue">{item.price}</p>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                  className="w-7 h-7 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-xs"
                                >
                                  -
                                </button>
                                <span className="w-10 text-center text-xs font-medium">{item.quantity}</span>
                                <button
                                  onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                  className="w-7 h-7 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-xs"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 border-red-300 hover:bg-red-50 h-8 px-2"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cart Summary */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gray-900">Subtotal</span>
                        <span className="text-lg font-bold text-gray-900">${calculateCartTotal()}/month</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-4">Monthly subscription billing. Cancel anytime.</p>
                      <Button className="w-full h-10 bg-blue hover:bg-blue-dark text-white text-sm">
                        Proceed to Checkout
                      </Button>
                    </div>
                  </div>
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
