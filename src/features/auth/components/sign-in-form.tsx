"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import {
  Field,
  FieldLabel,
  FieldError,
} from "@/components/atoms/field";
import { signIn } from "next-auth/react";
import { signInSchema, type SignInFormData } from "../lib/validation";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export function SignInForm() {
  const [globalError, setGlobalError] = React.useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const redirect = searchParams.get("redirect");

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
    defaultValues: {
      phone_number: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    setGlobalError(null);
    try {
      const result = await signIn("credentials", {
        phone_number: data.phone_number,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setGlobalError(result.error);
        toast.error(result.error);
        return;
      }

      toast.success("Signed in successfully!");
      router.push(redirect || "/");
      router.refresh();
    } catch (error) {
      setGlobalError("An unexpected error occurred");
      console.error(error);
    }
  };

  return (
    <motion.form 
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05 } }
      }}
      onSubmit={form.handleSubmit(onSubmit)} 
      className="space-y-6"
    >
      {globalError && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 bg-destructive/10 p-4 rounded-2xl text-destructive text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
          <p className="font-medium">{globalError}</p>
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <Controller
          control={form.control}
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
                disabled={form.formState.isSubmitting}
                className="h-12 rounded-xl"
                maxLength={11}
              />
              <FieldError errors={fieldState.error ? [fieldState.error] : []} />
            </Field>
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Controller
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex justify-between items-center mb-1">
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Link
                  href="/auth/forgot-password"
                  className="font-medium text-primary text-xs hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id={field.name}
                type="password"
                placeholder="••••••••"
                {...field}
                disabled={form.formState.isSubmitting}
                className="h-12 rounded-xl"
              />
              <FieldError errors={fieldState.error ? [fieldState.error] : []} />
            </Field>
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          type="submit"
          size="lg"
          className="rounded-xl w-full h-12 text-base font-semibold shadow-lg shadow-primary/10 transition-all hover:scale-[1.01] active:scale-[0.98]"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
      </motion.div>

      <motion.div variants={itemVariants} className="text-sm text-center">
        <span className="text-muted-foreground">
          Don&apos;t have an account?{" "}
        </span>
        <Link
          href="/auth/sign-up"
          className="font-bold text-primary hover:underline"
        >
          Create One
        </Link>
      </motion.div>
    </motion.form>
  );
}