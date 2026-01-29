"use client";

import Image from "next/image";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/atoms/button";
import { Card, CardContent } from "@/components/atoms/card";
import { Badge } from "@/components/atoms/badge";

interface WishlistItemProps {
    id: string;
    name: string;
    price: string;
    image: string;
    category: string;
    inStock: boolean;
    onRemove: (id: string) => void;
    onMoveToCart: (id: string) => void;
}

export function WishlistItem({
    id,
    name,
    price,
    image,
    category,
    inStock,
    onRemove,
    onMoveToCart,
}: WishlistItemProps) {
    return (
        <Card className="group bg-card/50 hover:shadow-2xl hover:shadow-primary/5 backdrop-blur-sm border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
            <CardContent className="p-0">
                <div className="relative bg-muted aspect-square overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="top-3 right-3 z-10 absolute">
                        <Button
                            variant="secondary"
                            size="icon"
                            className="bg-background/80 hover:bg-destructive backdrop-blur-md rounded-full size-8 hover:text-destructive-foreground transition-colors"
                            onClick={() => onRemove(id)}
                        >
                            <Trash2 className="size-4" />
                        </Button>
                    </div>
                    {!inStock && (
                        <div className="z-20 absolute inset-0 flex justify-center items-center bg-background/60 backdrop-blur-[2px]">
                            <Badge variant="destructive" className="px-3 py-1 text-xs uppercase tracking-wider">
                                Out of Stock
                            </Badge>
                        </div>
                    )}
                </div>

                <div className="flex flex-col p-5">
                    <div className="flex justify-between items-center mb-1 font-medium text-muted-foreground text-xs uppercase tracking-wider">
                        <span>{category}</span>
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary text-lg line-clamp-1 transition-colors">
                        {name}
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-primary text-xl">{price}</span>
                    </div>
                    <Button
                        className="group/btn rounded-xl w-full"
                        disabled={!inStock}
                        onClick={() => onMoveToCart(id)}
                    >
                        <ShoppingCart className="mr-2 size-4 transition-transform group-hover/btn:-translate-y-px" />
                        Move to Cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
