"use client";

import { motion, AnimatePresence } from "motion/react";
import { CartItem } from "./cart-item";
import { useState } from "react";

interface Item {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    details?: Record<string, string>;
    stockStatus?: string;
    shippingTime?: string;
}

const INITIAL_ITEMS: Item[] = [
    {
        id: "1",
        name: "Dark Chocolate Truffle Box",
        price: 1295.0,
        quantity: 1,
        image: "/images/chocolate-1.jpg", // Placeholder paths
        details: { Finish: "Hand-crafted", Origin: "Belgium" },
        stockStatus: "In Stock - Fast Delivery",
        shippingTime: "Ships in 1-2 days",
    },
    {
        id: "2",
        name: "Assorted Pralines Collection",
        price: 450.0,
        quantity: 1,
        image: "/images/chocolate-2.jpg",
        details: { Box: "Luxury Velvet", Size: "24 Pieces" },
        shippingTime: "Made to Order - 3-4 days",
    },
];

interface CartListProps {
    onSubtotalChange?: (subtotal: number) => void;
}

export function CartList({ onSubtotalChange }: CartListProps) {
    const [items, setItems] = useState<Item[]>(INITIAL_ITEMS);

    const calculateSubtotal = (updatedItems: Item[]) => {
        const subtotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        onSubtotalChange?.(subtotal);
        return subtotal;
    };

    const updateQuantity = (id: string, newQuantity: number) => {
        const updated = items.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setItems(updated);
        calculateSubtotal(updated);
    };

    const removeItem = (id: string) => {
        const updated = items.filter((item) => item.id !== id);
        setItems(updated);
        calculateSubtotal(updated);
    };

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
