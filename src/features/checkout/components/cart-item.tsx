"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface CartItemProps {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    details?: Record<string, string>;
    stockStatus?: string;
    shippingTime?: string;
    onUpdateQuantity: (id: string, newQuantity: number) => void;
    onRemove: (id: string) => void;
}

export function CartItem({
    id,
    name,
    price,
    quantity,
    image,
    details,
    stockStatus,
    shippingTime,
    onUpdateQuantity,
    onRemove,
}: CartItemProps) {
    return (
        <div className="group flex gap-6 py-8 border-border last:border-0 border-b">
            <div className="relative bg-secondary/30 rounded-2xl size-24 md:size-32 overflow-hidden shrink-0">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h3 className="font-semibold text-foreground text-lg md:text-xl line-clamp-1">
                            {name}
                        </h3>
                        {details && Object.entries(details).map(([key, value]) => (
                            <p key={key} className="mt-0.5 text-muted-foreground text-sm">
                                {key}: {value}
                            </p>
                        ))}
                    </div>
                    <p className="font-mono font-bold text-primary text-lg">
                        ${(price * quantity).toFixed(2)}
                    </p>
                </div>

                <div className="space-y-1 mt-2">
                    {stockStatus && (
                        <p className="flex items-center gap-1 text-green-600 text-xs">
                            <span className="bg-green-600 rounded-full size-1.5 animate-pulse" />
                            {stockStatus}
                        </p>
                    )}
                    {shippingTime && (
                        <p className="flex items-center gap-1 text-muted-foreground text-xs">
                            <span className="bg-muted-foreground/30 rounded-full size-1.5" />
                            {shippingTime}
                        </p>
                    )}
                </div>

                <div className="flex justify-between items-center mt-auto pt-4">
                    <div className="flex items-center gap-1 bg-muted p-1 border border-border rounded-xl">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-lg size-8"
                            onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
                            disabled={quantity <= 1}
                        >
                            <Minus className="size-4" />
                        </Button>
                        <span className="w-10 font-mono font-medium text-center">
                            {quantity}
                        </span>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-lg size-8"
                            onClick={() => onUpdateQuantity(id, quantity + 1)}
                        >
                            <Plus className="size-4" />
                        </Button>
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                        onClick={() => onRemove(id)}
                    >
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    );
}
