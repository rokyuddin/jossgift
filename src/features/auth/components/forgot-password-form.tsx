"use client";

import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import Link from 'next/link';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import {
    Field,
    FieldLabel,
    FieldError,
    FieldContent,
} from '@/components/atoms/field';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
} from '@/components/atoms/input-otp';
import { authAPI } from '../lib/api';
import {
    forgotPasswordSchema,
    resetPasswordSchema,
    type ForgotPasswordFormData,
    type ResetPasswordFormData
} from '../lib/validation';
import { cn } from '@/lib/utils';
import { getOTPCountdown, formatCountdown } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

type ForgotPasswordStep = 'phone' | 'reset';

const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
};

export function ForgotPasswordForm() {
    const [step, setStep] = React.useState<ForgotPasswordStep>('phone');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [otpExpiresAt, setOtpExpiresAt] = React.useState<Date | null>(null);
    const [isResending, setIsResending] = React.useState(false);
    const [countdown, setCountdown] = React.useState({ minutes: 4, seconds: 0, isExpired: false });

    // Forms
    const phoneForm = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: { phone_number: '' },
    });

    const resetForm = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            phone_number: '',
            code: '',
            password: '',
            password_confirm: '',
        },
    });

    // Countdown timer for OTP
    React.useEffect(() => {
        if (!otpExpiresAt || step !== "reset") return;

        const interval = setInterval(() => {
            const { minutes, seconds, isExpired } = getOTPCountdown(otpExpiresAt);
            setCountdown({ minutes, seconds, isExpired });

            if (isExpired) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [otpExpiresAt, step]);

    // Step 1: Send Forgot Password OTP
    const handleSendOTP = async (data: ForgotPasswordFormData) => {
        const result = await authAPI.forgotPassword(data);

        if (result.error) {
            toast.error(result.error.message || 'Failed to send OTP');
            return;
        }

        if (result?.data) {
            const expiresInMinutes = new Date(
                Date.now() + result.data.data.expires_in_minutes * 60 * 1000,
            );
            setPhoneNumber(data.phone_number);
            setOtpExpiresAt(expiresInMinutes);
            setStep('reset');
            resetForm.setValue('phone_number', data.phone_number);
            toast.success('Reset code sent');
        }
    };

    // Step 2: Reset Password
    const handleResetPassword = async (data: ResetPasswordFormData) => {
        const result = await authAPI.resetPassword(data);

        if (result.error) {
            toast.error(result.error.message || 'Reset failed');
            return;
        }

        if (result.data) {
            toast.success('Password updated successfully!');
            window.location.href = '/auth/sign-in';
        }
    };

    const handleResendOTP = async () => {
        setIsResending(true);
        const result = await authAPI.forgotPassword({ phone_number: phoneNumber });
        if (result.error) {
            toast.error(result.error.message || 'Failed to send OTP');
        } else if (result?.data) {
            const expiresInMinutes = new Date(
                Date.now() + result.data.data.expires_in_minutes * 60 * 1000,
            );
            setOtpExpiresAt(expiresInMinutes);
            toast.success('Code resent');
        }
        setIsResending(false);
    };

    return (
        <div className="space-y-6">
            <AnimatePresence mode="wait">
                {step === 'phone' && (
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
                                        disabled={phoneForm.formState.isSubmitting}
                                        className="h-12 rounded-xl"
                                        maxLength={11}
                                        autoFocus
                                    />
                                    <FieldError errors={fieldState.error ? [fieldState.error] : []} />
                                </Field>
                            )}
                        />

                        <Button 
                            type="submit" 
                            className="rounded-xl w-full h-12 text-base font-semibold transition-all hover:scale-[1.01]" 
                            disabled={phoneForm.formState.isSubmitting}
                        >
                            {phoneForm.formState.isSubmitting ? 'Sending...' : 'Send Reset Code'}
                        </Button>
                        <div className="text-center">
                            <Link href="/auth/sign-in" className="font-medium text-primary text-sm hover:underline">
                                Back to Sign In
                            </Link>
                        </div>
                    </motion.form>
                )}

                {step === 'reset' && (
                    <motion.form 
                        key="reset-step"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onSubmit={resetForm.handleSubmit(handleResetPassword)} 
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <div className="space-y-2 text-center">
                                <p className="text-muted-foreground text-sm">Resetting password for</p>
                                <p className="text-lg font-bold">{phoneNumber}</p>
                            </div>

                            <Controller
                                control={resetForm.control}
                                name="code"
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={!!fieldState.error} className="items-center">
                                        <InputOTP
                                            maxLength={4}
                                            value={field.value}
                                            onChange={field.onChange}
                                            disabled={resetForm.formState.isSubmitting}
                                            autoFocus
                                        >
                                            <InputOTPGroup className="gap-2">
                                                <InputOTPSlot index={0} className="rounded-xl w-12 h-14" />
                                                <InputOTPSlot index={1} className="rounded-xl w-12 h-14" />
                                                <InputOTPSlot index={2} className="rounded-xl w-12 h-14" />
                                                <InputOTPSlot index={3} className="rounded-xl w-12 h-14" />
                                            </InputOTPGroup>
                                        </InputOTP>
                                        <FieldError errors={fieldState.error ? [{ message: fieldState.error?.message }] : []} />
                                    </Field>
                                )}
                            />

                            <div className="flex justify-between items-center px-1 text-sm">
                                <span className={cn(
                                    'font-medium tabular-nums',
                                    countdown.isExpired ? 'text-destructive' : 'text-muted-foreground'
                                )}>
                                    {countdown.isExpired ? 'Code expired' : `Expires in ${formatCountdown(countdown.minutes, countdown.seconds)}`}
                                </span>

                                <Button
                                    type="button"
                                    variant="link"
                                    size="sm"
                                    onClick={handleResendOTP}
                                    disabled={(!countdown.isExpired && countdown.minutes > 0) || isResending}
                                    className="p-0 h-auto font-semibold text-primary"
                                >
                                    {isResending ? 'Sending...' : 'Resend Code'}
                                </Button>
                            </div>
                        </div>

                        <Controller
                            control={resetForm.control}
                            name="password"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={!!fieldState.error}>
                                    <FieldLabel>New Password</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            {...field}
                                            className="rounded-xl h-11"
                                        />
                                        <FieldError errors={fieldState.error ? [{ message: fieldState.error?.message }] : []} />
                                    </FieldContent>
                                </Field>
                            )}
                        />

                        <Controller
                            control={resetForm.control}
                            name="password_confirm"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={!!fieldState.error}>
                                    <FieldLabel>Confirm New Password</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            {...field}
                                            className="rounded-xl h-11"
                                        />
                                        <FieldError errors={fieldState.error ? [{ message: fieldState.error?.message }] : []} />
                                    </FieldContent>
                                </Field>
                            )}
                        />

                        <Button 
                            type="submit" 
                            className="rounded-xl w-full h-12 text-base font-semibold shadow-lg shadow-primary/10" 
                            disabled={resetForm.formState.isSubmitting}
                        >
                            {resetForm.formState.isSubmitting ? 'Resetting...' : 'Update Password'}
                        </Button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}