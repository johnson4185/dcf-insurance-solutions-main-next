"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface PurchaseState {
  product: string;
  selectedModules: string[];
  totalPrice: number;
  branding: {
    companyName: string;
    logo?: File;
    colorTheme: string;
    subdomain: string;
  };
  compliance: {
    legalName: string;
    country: string;
    companyType: string;
    vatNumber: string;
    licensedAuthority: string;
    licenseNumber: string;
    authorizedSignatory: string;
    designation: string;
    confirmed: boolean;
  };
  billing: {
    frequency: "monthly" | "annual";
    model: "subscription" | "per-member" | "transaction" | "hybrid";
  };
  payment: {
    cardNumber: string;
    cardholderName: string;
    expiryDate: string;
    cvc: string;
  };
}

interface PurchaseContextType {
  state: PurchaseState;
  updateState: (updates: Partial<PurchaseState>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const PurchaseContext = createContext<PurchaseContextType | undefined>(undefined);

export function PurchaseProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [state, setState] = useState<PurchaseState>({
    product: "",
    selectedModules: [],
    totalPrice: 0,
    branding: {
      companyName: "",
      colorTheme: "ocean-blue",
      subdomain: "",
    },
    compliance: {
      legalName: "",
      country: "Saudi Arabia",
      companyType: "Insurance",
      vatNumber: "",
      licensedAuthority: "SAMA",
      licenseNumber: "",
      authorizedSignatory: "",
      designation: "",
      confirmed: false,
    },
    billing: {
      frequency: "monthly",
      model: "subscription",
    },
    payment: {
      cardNumber: "",
      cardholderName: "",
      expiryDate: "",
      cvc: "",
    },
  });

  const updateState = (updates: Partial<PurchaseState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const goToNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <PurchaseContext.Provider
      value={{
        state,
        updateState,
        currentStep,
        setCurrentStep,
        goToNextStep,
        goToPreviousStep,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}

export function usePurchase() {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error("usePurchase must be used within PurchaseProvider");
  }
  return context;
}
