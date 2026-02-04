import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  phoneNumber: string;
  step: "phone" | "otp" | "details";
  setPhoneNumber: (phone: string) => void;
  setStep: (step: "phone" | "otp" | "details") => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      phoneNumber: "",
      step: "phone",
      setPhoneNumber: (phone) => set({ phoneNumber: phone }),
      setStep: (step) => set({ step }),
      reset: () => set({ phoneNumber: "", step: "phone" }),
    }),
    {
      name: "jossgift-auth-storage",
    }
  )
);
