"use client";

import { useState } from "react";
import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { motion } from "motion/react";

interface ProductInfoProps {
    name: string;
    price: string;
    badge?: string;
    description: string;
}

export function ProductInfo({ name, price, badge, description }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex flex-col gap-6">
            <div className="space-y-4">
                {badge && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Badge variant="secondary" className="px-3 py-1 text-sm">
                            {badge}
                        </Badge>
                    </motion.div>
                )}

                <motion.h1
                    className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {name}
                </motion.h1>

                <motion.div
                    className="flex items-baseline gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="font-bold text-primary text-2xl md:text-3xl">{price}</span>
                </motion.div>

                <motion.p
                    className="max-w-xl text-muted-foreground text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {description}
                </motion.p>
            </div>

            <motion.div
                className="space-y-6 pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="flex items-center gap-6">
                    <div className="flex items-center border border-border rounded-xl overflow-hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-none w-12 h-12"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                            <Minus className="size-4" />
                        </Button>
                        <span className="flex justify-center items-center w-12 font-medium text-lg">
                            {quantity}
                        </span>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-none w-12 h-12"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            <Plus className="size-4" />
                        </Button>
                    </div>
                    <Button variant="outline" size="icon" className="rounded-xl w-12 h-12">
                        <Heart className="size-5" />
                    </Button>
                </div>

                <div className="flex sm:flex-row flex-col gap-4">
                    <Button size="lg" className="flex-1 rounded-xl h-14 font-semibold text-lg">
                        Add to Cart
                    </Button>
                    <Button variant="secondary" size="lg" className="flex-1 rounded-xl h-14 font-semibold text-lg">
                        Buy Now
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
