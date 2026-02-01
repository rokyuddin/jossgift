"use client";

import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { ShieldCheck, RefreshCw, CreditCard } from "lucide-react";
import { motion } from "motion/react";

export function OrderSummary() {
    const subtotal = 100;
    const shippingEstimate = 10;
    const taxEstimate = 5;
    const total = subtotal + shippingEstimate + taxEstimate;

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="top-4 sticky bg-card shadow-sm p-6 border border-border rounded-3xl"
            >
                <h2 className="mb-6 font-semibold text-xl">Order Summary</h2>

                <div className="flex gap-2 mb-8">
                    <Input
                        placeholder="Promo code"
                        className="flex-1 bg-muted/50 border-none rounded-xl focus-visible:ring-primary/20 h-11"
                    />
                    <Button variant="secondary" className="px-6 rounded-xl h-11">
                        Apply
                    </Button>
                </div>

                <div className="space-y-4 mb-8 font-medium">
                    <div className="flex justify-between items-center text-muted-foreground">
                        <span>Subtotal</span>
                        <span className="font-mono text-foreground">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-muted-foreground">
                        <span>Shipping Estimate</span>
                        <span className="font-mono text-foreground">${shippingEstimate.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-border border-b text-muted-foreground">
                        <span>Tax Estimate</span>
                        <span className="font-mono text-foreground">${taxEstimate.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 font-bold text-lg">
                        <div className="flex flex-col">
                            <span>Total</span>
                            <span className="font-normal text-[10px] text-muted-foreground uppercase tracking-wider">USD</span>
                        </div>
                        <span className="font-mono text-primary text-2xl">${total.toFixed(2)}</span>
                    </div>
                </div>

                <Button className="shadow-lg shadow-primary/20 rounded-2xl w-full h-14 font-semibold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Proceed to Checkout
                </Button>

                <div className="flex justify-center items-center gap-4 opacity-60 mt-6">
                    <CreditCard className="size-5" />
                    <div className="bg-border w-px h-4" />
                    <span className="font-bold text-[10px] uppercase tracking-widest">VISA • MC • AMEX • PAY</span>
                </div>
            </motion.div>

            <div className="space-y-4">
                <div className="flex gap-4 bg-secondary/20 p-4 border border-border/50 rounded-2xl">
                    <div className="bg-background shadow-sm p-2 rounded-xl h-fit">
                        <ShieldCheck className="size-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground/80 text-sm uppercase tracking-wider">Secure Checkout</h4>
                        <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                            We use industry-standard encryption to ensure your personal information stays safe and secure.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 bg-secondary/20 p-4 border border-border/50 rounded-2xl">
                    <div className="bg-background shadow-sm p-2 rounded-xl h-fit">
                        <RefreshCw className="size-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground/80 text-sm uppercase tracking-wider">Easy Returns</h4>
                        <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                            If you're not completely satisfied, you can return your items within 30 days for a full refund.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
