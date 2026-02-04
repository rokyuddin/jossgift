"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/atoms/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/atoms/input-otp";
import { Checkbox } from "@/components/atoms/checkbox";
import { authAPI } from "../lib/api";
import {
  sendOTPSchema,
  verifyOTPSchema,
  signUpSchema,
  type SendOTPFormData,
  type VerifyOTPFormData,
  type SignUpFormData,
} from "../lib/validation";
import { cn } from "@/lib/utils";
import { getOTPCountdown, formatCountdown } from "../lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion, AnimatePresence } from "motion/react";
import { useAuthStore } from "../store/use-auth-store";

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
};

const staggerVariants = {
  visible: { transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export function SignUpForm() {
  const { phoneNumber, setPhoneNumber, step, setStep, reset } = useAuthStore();
  const [otpExpiresAt, setOtpExpiresAt] = React.useState<Date | null>(null);
  const [isResending, setIsResending] = React.useState(false);
  const [countdown, setCountdown] = React.useState({
    minutes: 4,
    seconds: 0,
    isExpired: false,
  });
  const [globalError, setGlobalError] = React.useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  // Forms
  const phoneForm = useForm<SendOTPFormData>({
    resolver: zodResolver(sendOTPSchema),
    defaultValues: { phone_number: phoneNumber },
  });

  const otpForm = useForm<VerifyOTPFormData>({
    resolver: zodResolver(verifyOTPSchema),
    defaultValues: { phone_number: phoneNumber, code: "" },
  });

  const detailsForm = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      phone_number: phoneNumber,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      terms_accepted: false,
    },
  });

  // Sync phone number to forms
  React.useEffect(() => {
    phoneForm.setValue("phone_number", phoneNumber);
    otpForm.setValue("phone_number", phoneNumber);
    detailsForm.setValue("phone_number", phoneNumber);
  }, [phoneNumber, phoneForm, otpForm, detailsForm]);

  // Countdown timer for OTP
  React.useEffect(() => {
    if (!otpExpiresAt || step !== "otp") return;

    const interval = setInterval(() => {
      const { minutes, seconds, isExpired } = getOTPCountdown(otpExpiresAt);
      setCountdown({ minutes, seconds, isExpired });

      if (isExpired) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [otpExpiresAt, step]);

  // Step 1: Send OTP
  const handleSendOTP = async (data: SendOTPFormData) => {
    try {
      const result = await authAPI.sendOTP(data);

      if (result.error) {
        toast.error(result.error.message || "Failed to send OTP");
        return;
      }

      if (result?.data) {
        const expiresInMinutes = new Date(
          Date.now() + result.data.data.expires_in_minutes * 60 * 1000,
        );
        setPhoneNumber(data.phone_number);
        setOtpExpiresAt(expiresInMinutes);
        setStep("otp");
        toast.success("Verification code sent");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Something went wrong");
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOTP = async (data: VerifyOTPFormData) => {
    const result = await authAPI.verifyOTP(data);

    if (result.error) {
      toast.error(result.error.message || "Invalid code");
      return;
    }

    if (result?.data) {
      if (result.data.data.user_exists) {
        toast.error(
          "An account already exists with this number. Please sign in.",
        );
        router.push("/auth/sign-in");
        return;
      }
      setStep("details");
    }
  };

  // Step 3: Register
  const handleRegister = async (data: SignUpFormData) => {
    setGlobalError(null);
    try {
      // In a real app, we would call an API here. 
      // If using NextAuth, it might look like this:
      const result = await signIn("credentials", {
        ...data,
        is_signup: true,
        redirect: false,
      });
      // Mocking successful registration for now
      toast.success("Account created successfully!");
      reset(); // Clear store state
      router.push(redirect || "/");
    } catch (error) {
      setGlobalError("An unexpected error occurred");
      console.error("Error signing up:", error);
    }
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    const result = await authAPI.sendOTP({
      phone_number: phoneNumber,
    });
    if (result?.data) {
      const expiresInMinutes = new Date(
        Date.now() + result.data.data.expires_in_minutes * 60 * 1000,
      );
      setOtpExpiresAt(expiresInMinutes);
      toast.success("Code resent");
    }
    setIsResending(false);
  };

  return (
    <div className="space-y-6">
      {globalError && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex items-center gap-2 bg-destructive/10 p-4 rounded-2xl text-destructive text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
          <p className="font-medium">{globalError}</p>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {step === "phone" && (
          <motion.form
            key="phone-step"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onSubmit={phoneForm.handleSubmit(handleSendOTP)}
            className="space-y-6"
          >
            <Controller
              control={phoneForm.control}
              name="phone_number"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
                  <Input
                    id={field.name}
                    type="tel"
                    placeholder="016XXXXXXXX"
                    {...field}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value.startsWith("+88")) {
                        value = value.replace("+88", "");
                      }
                      field.onChange(value);
                    }}
                    autoFocus
                    disabled={phoneForm.formState.isSubmitting}
                    className="h-12 text-lg rounded-xl"
                    maxLength={11}
                  />
                  <FieldError errors={fieldState.error ? [fieldState.error] : []} />
                </Field>
              )}
            />
            <Button
              type="submit"
              className="rounded-xl w-full h-12 text-base font-semibold transition-all hover:scale-[1.01] active:scale-[0.98]"
              disabled={phoneForm.formState.isSubmitting}
            >
              {phoneForm.formState.isSubmitting ? "Sending..." : "Send Verification Code"}
            </Button>
            <p className="text-muted-foreground text-sm text-center">
              Already have an account?{" "}
              <Link href="/auth/sign-in" className="font-semibold text-primary hover:underline">
                Sign In
              </Link>
            </p>
          </motion.form>
        )}

        {step === "otp" && (
          <motion.form
            key="otp-step"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onSubmit={otpForm.handleSubmit(handleVerifyOTP)}
            className="space-y-8"
          >
            <div className="space-y-2 text-center">
              <p className="text-muted-foreground text-sm">
                Verification code sent to
              </p>
              <p className="text-xl font-bold tracking-tight">{phoneNumber}</p>
              <Button
                type="button"
                variant="link"
                size="sm"
                onClick={() => setStep("phone")}
                className="font-medium text-primary text-xs"
              >
                Change number
              </Button>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Controller
                control={otpForm.control}
                name="code"
                render={({ field, fieldState }) => (
                  <Field data-invalid={!!fieldState.error} className="items-center">
                    <InputOTP
                      maxLength={4}
                      value={field.value}
                      onChange={field.onChange}
                      autoFocus
                      disabled={otpForm.formState.isSubmitting}
                    >
                      <InputOTPGroup className="*:data-[slot=input-otp-slot]:w-22 *:data-[slot=input-otp-slot]:h-14 *:data-[slot=input-otp-slot]:text-xl gap-2">
                        <InputOTPSlot index={0}  />
                        <InputOTPSlot index={1}  />
                      </InputOTPGroup>
                      <InputOTPSeparator className="text-muted-foreground/50" />
                      <InputOTPGroup className="*:data-[slot=input-otp-slot]:w-22 *:data-[slot=input-otp-slot]:h-14 *:data-[slot=input-otp-slot]:text-xl gap-2">
                        <InputOTPSlot index={2}  />
                        <InputOTPSlot index={3}  />
                      </InputOTPGroup>
                    </InputOTP>
                    <FieldError errors={fieldState.error ? [{ message: fieldState.error?.message }] : []} />
                  </Field>
                )}
              />

              <div className="flex justify-between items-center w-full text-sm">
                <span className={cn(
                  "font-medium tabular-nums",
                  countdown.isExpired ? "text-destructive" : "text-muted-foreground"
                )}>
                  {countdown.isExpired ? "Code expired" : `Expires in ${formatCountdown(countdown.minutes, countdown.seconds)}`}
                </span>

                <Button
                  type="button"
                  variant="link"
                  size="sm"
                  onClick={handleResendOTP}
                  disabled={(!countdown.isExpired && countdown.minutes > 0) || isResending}
                  className="font-semibold text-primary p-0 h-auto"
                >
                  {isResending ? "Resending..." : "Resend"}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="rounded-xl w-full h-12 text-base font-semibold"
              disabled={otpForm.formState.isSubmitting || otpForm.watch("code").length !== 4}
            >
              {otpForm.formState.isSubmitting ? "Verifying..." : "Verify & Continue"}
            </Button>
          </motion.form>
        )}

        {step === "details" && (
          <motion.form
            key="details-step"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onSubmit={detailsForm.handleSubmit(handleRegister)}
            className="space-y-4"
          >
            <motion.div variants={staggerVariants} initial="hidden" animate="visible" className="space-y-4">
              <div className="gap-4 grid grid-cols-2">
                <motion.div variants={itemVariants}>
                  <Controller
                    control={detailsForm.control}
                    name="first_name"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={!!fieldState.error}>
                        <FieldLabel>First Name</FieldLabel>
                        <Input {...field} placeholder="John" className="rounded-xl h-11" />
                        <FieldError errors={fieldState.error ? [{ message: fieldState.error?.message }] : []} />
                      </Field>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Controller
                    control={detailsForm.control}
                    name="last_name"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={!!fieldState.error}>
                        <FieldLabel>Last Name</FieldLabel>
                        <Input {...field} placeholder="Doe" className="rounded-xl h-11" />
                        <FieldError errors={fieldState.error ? [{ message: fieldState.error?.message }] : []} />
                      </Field>
                    )}
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <Controller
                  control={detailsForm.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={!!fieldState.error}>
                      <FieldLabel>Email (Optional)</FieldLabel>
                      <Input type="email" {...field} placeholder="john@example.com" className="rounded-xl h-11" />
                      <FieldError errors={fieldState.error ? [{ message: fieldState.error?.message }] : []} />
                    </Field>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Controller
                  control={detailsForm.control}
                  name="password"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={!!fieldState.error}>
                      <FieldLabel>Create Password</FieldLabel>
                      <Input type="password" {...field} placeholder="••••••••" className="rounded-xl h-11" />
                      <FieldError errors={fieldState.error ? [{ message: fieldState.error?.message }] : []} />
                    </Field>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Controller
                  control={detailsForm.control}
                  name="password_confirm"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={!!fieldState.error}>
                      <FieldLabel>Confirm Password</FieldLabel>
                      <Input type="password" {...field} placeholder="••••••••" className="rounded-xl h-11" />
                      <FieldError errors={fieldState.error ? [{ message: fieldState.error?.message }] : []} />
                    </Field>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2 pt-2">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="terms"
                    checked={!!detailsForm.watch("terms_accepted")}
                    onCheckedChange={(checked: boolean) =>
                      detailsForm.setValue("terms_accepted", checked === true)
                    }
                    className="rounded-md w-5 h-5"
                  />
                  <label htmlFor="terms" className="text-muted-foreground text-sm leading-tight cursor-pointer">
                    I agree to the <Link href="/terms" className="font-semibold text-primary hover:underline">Terms of Service</Link> & <Link href="/privacy" className="font-semibold text-primary hover:underline">Privacy Policy</Link>
                  </label>
                </div>
                {detailsForm.formState.errors.terms_accepted && (
                  <p className="text-destructive text-xs font-medium">
                    {detailsForm.formState.errors.terms_accepted.message}
                  </p>
                )}
              </motion.div>
            </motion.div>

            <Button
              type="submit"
              className="mt-6 rounded-xl w-full h-12 text-base font-semibold shadow-lg shadow-primary/20"
              disabled={detailsForm.formState.isSubmitting}
            >
              {detailsForm.formState.isSubmitting ? "Creating Account..." : "Complete Setup"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}