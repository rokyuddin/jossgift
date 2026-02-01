"use client";

import { Progress } from "@/components/atoms/progress";
import { Truck } from "lucide-react";
import { motion } from "motion/react";


export function ShippingProgress() {
    const FREE_SHIPPING_THRESHOLD = 2000.0;
    const subtotal = 100;
    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const percentage = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card shadow-sm mb-8 p-4 border border-border rounded-2xl"
        >
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-full">
                    <Truck className="size-5 text-primary" />
                </div>
                <p className="font-medium text-sm">
                    {remaining > 0 ? (
                        <>
                            You're <span className="font-mono font-bold text-primary">${remaining.toFixed(2)}</span> away from free shipping
                        </>
                    ) : (
                        <span className="font-bold text-green-600">Congrats! You've unlocked free shipping!</span>
                    )}
                </p>
                <span className="ml-auto font-mono text-muted-foreground text-xs">{Math.round(percentage)}%</span>
            </div>
            <Progress value={percentage} className="h-2" />
        </motion.div>
    );
}
