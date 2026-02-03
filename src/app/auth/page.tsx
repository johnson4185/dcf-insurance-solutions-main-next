"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Building, Eye, EyeOff, AlertCircle, Shield, Check, ArrowRight, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

function AuthPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signIn, signUp, isAuthenticated } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const redirectTo = searchParams.get("redirect") || "/";

  useEffect(() => {
    if (isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, router, redirectTo]);

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    role: "",
    agreeToTerms: false,
  });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await signIn(signInData.email, signInData.password);
      router.push(redirectTo);
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (signUpData.password !== signUpData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!signUpData.agreeToTerms) {
      setError("Please agree to the Terms & Privacy Policy");
      return;
    }

    setIsLoading(true);

    try {
      await signUp(signUpData);
      router.push(redirectTo);
    } catch (err) {
      setError("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"></div>
        
        {/* Decorative lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10">
        {/* Close Button - Inside the box */}
        <button
          onClick={() => router.push('/')}
          className="absolute top-4 right-4 z-50 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 group"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors" />
        </button>
        <div className="flex flex-col lg:flex-row min-h-[650px]">
          <AnimatePresence mode="wait">
            {!isSignUp ? (
              <>
                {/* Left Panel - Info (Sign In Mode) */}
                <motion.div
                  key="info-left"
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="lg:w-1/2 bg-gradient-to-br from-blue via-blue-dark to-gray-900 p-8 lg:p-10 flex flex-col justify-center text-white relative overflow-hidden min-h-[650px]"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                  
                  {/* Abstract Lines */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="100" x2="400" y2="400" stroke="white" strokeWidth="2" />
                      <line x1="100" y1="0" x2="500" y2="500" stroke="white" strokeWidth="1.5" />
                      <circle cx="80" cy="80" r="40" fill="none" stroke="white" strokeWidth="1" />
                      <circle cx="450" cy="450" r="60" fill="none" stroke="white" strokeWidth="1" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20">
                          <Shield className="w-6 h-6" />
                        </div>
                        <div>
                          <h1 className="text-lg font-bold">DCF Insurance</h1>
                          <p className="text-xs text-blue-100">Digital Solutions Platform</p>
                        </div>
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                        Transform Your Insurance Operations
                      </h2>
                      <p className="text-gray-200 text-sm mb-6">
                        Built for the GCC market with enterprise-grade security and scalability.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        "Comprehensive policy management",
                        "Real-time claims processing",
                        "Advanced analytics & reporting",
                        "Seamless third-party integrations"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2.5 group">
                          <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:bg-white/25 transition-colors">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-gray-100 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                      <p className="text-xs text-gray-100">
                        <strong className="text-white text-sm">Trusted by 500+</strong> insurance companies across the GCC region
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right Panel - Sign In Form */}
                <motion.div
                  key="signin-form"
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="lg:w-1/2 p-8 lg:p-10 flex items-center justify-center relative bg-white min-h-[650px]"
                >
                  {/* Subtle decorative lines */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>

                  <div className="w-full max-w-md relative z-10">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-1.5">Sign In</h2>
                      <p className="text-gray-600 text-sm">Access your insurance platform</p>
                    </div>

                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-800">{error}</p>
                      </div>
                    )}

                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-gray-900 text-sm">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="work@company.com"
                            className="pl-9 h-10 text-sm border-gray-300 focus:border-blue focus:ring-blue"
                            value={signInData.email}
                            onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="password" className="text-gray-900 text-sm">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-9 pr-10 h-10 text-sm border-gray-300 focus:border-blue focus:ring-blue"
                            value={signInData.password}
                            onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="remember"
                            checked={signInData.rememberMe}
                            onCheckedChange={(checked) =>
                              setSignInData({ ...signInData, rememberMe: checked as boolean })
                            }
                          />
                          <Label htmlFor="remember" className="text-sm font-normal cursor-pointer text-gray-700">
                            Remember me
                          </Label>
                        </div>
                        <button type="button" className="text-sm text-blue hover:text-blue-dark font-medium">
                          Forgot password?
                        </button>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-10 text-sm bg-blue hover:bg-blue-dark text-white shadow-lg shadow-blue/30 transition-all" 
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                        {!isLoading && <ArrowRight className="w-4 h-4 ml-1.5" />}
                      </Button>

                      <div className="relative my-5">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-white px-2.5 text-gray-500 font-medium">Or continue with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Button type="button" variant="outline" className="h-9 text-sm border-gray-300 hover:bg-gray-50 hover:border-blue transition-colors">
                          <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Google
                        </Button>
                        <Button type="button" variant="outline" className="h-9 text-sm border-gray-300 hover:bg-gray-50 hover:border-blue transition-colors">
                          <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.5 0h-15C7.67 0 7 .67 7 1.5v7.55c.7-.15 1.44-.23 2.2-.23 1.06 0 2.09.18 3.05.52V3h10.5c.28 0 .5.22.5.5v17c0 .28-.22.5-.5.5h-9.3c-.4.58-.87 1.11-1.4 1.57.15.02.3.03.45.03h11c.83 0 1.5-.67 1.5-1.5v-20c0-.83-.67-1.5-1.5-1.5z"/>
                          </svg>
                          Microsoft
                        </Button>
                      </div>
                    </form>

                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-600">
                        Don't have an account?{" "}
                        <button
                          onClick={() => setIsSignUp(true)}
                          className="text-blue font-semibold hover:text-blue-dark"
                        >
                          Create account
                        </button>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                {/* Left Panel - Create Account Form */}
                <motion.div
                  key="signup-form"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="lg:w-1/2 p-8 lg:p-10 flex items-center justify-center bg-white relative overflow-hidden min-h-[650px]"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-10 right-10 w-24 h-24 opacity-5">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="w-full max-w-md relative z-10">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-1.5">Create Account</h2>
                      <p className="text-gray-600 text-sm">Start your free trial today</p>
                    </div>

                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-800">{error}</p>
                      </div>
                    )}

                    <form onSubmit={handleSignUp} className="space-y-3.5 max-h-[480px] overflow-y-auto pr-2">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <Label htmlFor="firstName" className="text-gray-900 text-sm">First Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="firstName"
                              placeholder="John"
                              className="pl-9 h-9 text-sm focus:border-blue focus:ring-blue"
                              value={signUpData.firstName}
                              onChange={(e) => setSignUpData({ ...signUpData, firstName: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="lastName" className="text-gray-900 text-sm">Last Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="lastName"
                              placeholder="Doe"
                              className="pl-9 h-9 text-sm focus:border-blue focus:ring-blue"
                              value={signUpData.lastName}
                              onChange={(e) => setSignUpData({ ...signUpData, lastName: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="signup-email" className="text-gray-900 text-sm">Work Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="you@company.com"
                            className="pl-9 h-9 text-sm focus:border-blue focus:ring-blue"
                            value={signUpData.email}
                            onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="signup-password" className="text-gray-900 text-sm">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Min. 8 characters"
                            className="pl-9 pr-10 h-9 text-sm focus:border-blue focus:ring-blue"
                            value={signUpData.password}
                            onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                            required
                            minLength={8}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="confirmPassword" className="text-gray-900 text-sm">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Re-enter password"
                            className="pl-9 pr-10 h-9 text-sm focus:border-blue focus:ring-blue"
                            value={signUpData.confirmPassword}
                            onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="company" className="text-gray-900 text-sm">Company</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="company"
                            placeholder="Your Company"
                            className="pl-9 h-9 text-sm focus:border-blue focus:ring-blue"
                            value={signUpData.company}
                            onChange={(e) => setSignUpData({ ...signUpData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="role" className="text-gray-900 text-sm">Your Role</Label>
                        <select
                          id="role"
                          className="w-full h-9 px-3 text-sm border border-gray-300 rounded-md bg-white focus:border-blue focus:ring-blue"
                          value={signUpData.role}
                          onChange={(e) => setSignUpData({ ...signUpData, role: e.target.value })}
                        >
                          <option value="">Select your role</option>
                          <option value="executive">Executive</option>
                          <option value="operations">Operations Manager</option>
                          <option value="underwriter">Underwriter</option>
                          <option value="claims">Claims Manager</option>
                          <option value="agent">Agent/Broker</option>
                          <option value="it">IT/Technical</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="flex items-start gap-2.5 pt-1">
                        <Checkbox
                          id="agreeToTerms"
                          checked={signUpData.agreeToTerms}
                          onCheckedChange={(checked) =>
                            setSignUpData({ ...signUpData, agreeToTerms: checked as boolean })
                          }
                          className="mt-0.5"
                        />
                        <Label htmlFor="agreeToTerms" className="text-xs font-normal cursor-pointer leading-relaxed text-gray-700">
                          I agree to the{" "}
                          <a href="/terms" className="text-blue hover:text-blue-dark font-medium">
                            Terms & Privacy Policy
                          </a>
                        </Label>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-10 text-sm bg-blue hover:bg-blue-dark text-white shadow-lg shadow-blue/30 transition-all" 
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating account..." : "Create Account"}
                      </Button>
                    </form>

                    <div className="mt-5 text-center">
                      <p className="text-xs text-gray-600">
                        Already have an account?{" "}
                        <button
                          onClick={() => setIsSignUp(false)}
                          className="text-blue font-semibold hover:text-blue-dark"
                        >
                          Sign in
                        </button>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right Panel - Info (Sign Up Mode) - Same as Sign In Info */}
                <motion.div
                  key="info-right"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="lg:w-1/2 bg-gradient-to-br from-blue via-blue-dark to-gray-900 p-8 lg:p-10 flex flex-col justify-center text-white relative overflow-hidden min-h-[650px]"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                  
                  {/* Abstract Lines */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="100" x2="400" y2="400" stroke="white" strokeWidth="2" />
                      <line x1="100" y1="0" x2="500" y2="500" stroke="white" strokeWidth="1.5" />
                      <circle cx="80" cy="80" r="40" fill="none" stroke="white" strokeWidth="1" />
                      <circle cx="450" cy="450" r="60" fill="none" stroke="white" strokeWidth="1" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20">
                          <Shield className="w-6 h-6" />
                        </div>
                        <div>
                          <h1 className="text-lg font-bold">DCF Insurance</h1>
                          <p className="text-xs text-blue-100">Digital Solutions Platform</p>
                        </div>
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                        Transform Your Insurance Operations
                      </h2>
                      <p className="text-gray-200 text-sm mb-6">
                        Built for the GCC market with enterprise-grade security and scalability.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        "Comprehensive policy management",
                        "Real-time claims processing",
                        "Advanced analytics & reporting",
                        "Seamless third-party integrations"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2.5 group">
                          <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:bg-white/25 transition-colors">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-gray-100 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                      <p className="text-xs text-gray-100">
                        <strong className="text-white text-sm">Trusted by 500+</strong> insurance companies across the GCC region
                      </p>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue"></div>
      </div>
    }>
      <AuthPageContent />
    </Suspense>
  );
}
