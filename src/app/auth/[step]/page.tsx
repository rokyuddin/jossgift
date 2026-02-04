"use client";

import { useParams, useRouter } from 'next/navigation';
import { SignInForm } from '@/features/auth/components/sign-in-form';
import { SignUpForm } from '@/features/auth/components/sign-up-form';
import { ForgotPasswordForm } from '@/features/auth/components/forgot-password-form';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/atoms/card';

export default function AuthPage() {
    const params = useParams();
    const step = params?.step as string;
    const router = useRouter();

    const renderForm = () => {
        switch (step) {
            case 'sign-in':
                return <SignInForm />;
            case 'sign-up':
                return <SignUpForm />;
            case 'forgot-password':
                return <ForgotPasswordForm />;
            default:
                if (step) {
                    router.push('/auth/sign-in');
                }
                return null;
        }
    };

    const getTitle = () => {
        switch (step) {
            case 'sign-in': return 'Welcome Back';
            case 'sign-up': return 'Create Account';
            case 'forgot-password': return 'Reset Password';
            default: return 'Authentication';
        }
    };

    const getDescription = () => {
        switch (step) {
            case 'sign-in': return 'Please enter your details to sign in.';
            case 'sign-up': return 'Join JossGift and start gifting today.';
            case 'forgot-password': return 'Enter your phone to receive a reset code.';
            default: return '';
        }
    };

    // Prevent rendering if step is not recognized yet
    if (!step) return null;

    return (
        <div className="flex justify-center items-center bg-background p-4 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-[450px]"
            >
                <Card className="border-none bg-card/50 shadow-2xl backdrop-blur-sm rounded-3xl overflow-hidden">
                    <CardHeader className="space-y-1 text-center">
                        <CardTitle className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                            {getTitle()}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground/80">
                            {getDescription()}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {renderForm()}
                            </motion.div>
                        </AnimatePresence>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}