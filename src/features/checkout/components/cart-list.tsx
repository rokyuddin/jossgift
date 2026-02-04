"use client";

import { motion, AnimatePresence } from "motion/react";
import { CartItem } from "./cart-item";
import { useEffect } from "react"; // Removed useState
import { useCartStore } from "@/store/use-cart-store";

interface CartListProps {
    onSubtotalChange?: (subtotal: number) => void;
}

export function CartList({ onSubtotalChange }: CartListProps) {
    const { items, updateQuantity, removeItem } = useCartStore();

    useEffect(() => {
        const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        onSubtotalChange?.(subtotal);
    }, [items, onSubtotalChange]);

    return (
        <div className="flex flex-col">
            <div className="hidden gap-4 grid md:grid grid-cols-[1fr_auto_auto] mb-4 pb-4 border-border border-b font-bold text-muted-foreground text-xs uppercase tracking-wider">
                <span>Product</span>
                <span className="w-32 text-center">Quantity</span>
                <span className="w-32 text-right">Total</span>
            </div>

            <AnimatePresence initial={false}>
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <CartItem
                            {...item}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeItem}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>

            {items.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-secondary/10 mt-4 py-12 border-2 border-border border-dashed rounded-3xl text-muted-foreground text-center"
                >
                    <p className="text-lg">Your cart is empty</p>
                    <p className="mt-1 text-sm">Discover our exclusive chocolate collections</p>
                </motion.div>
            )}
        </div>
    );
}
