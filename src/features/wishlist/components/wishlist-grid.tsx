"use client";

import { motion } from "motion/react";
import { WishlistItem } from "./wishlist-item";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/atoms/select";
import { Button } from "@/components/atoms/button";
import { ArrowUpDown, Grid2X2, LayoutList, Heart, Trash2 } from "lucide-react";
import { StaggerItem, StaggerItemChild } from "@/components/molecules/stagger-item";

interface WishlistGridProps {
    items: any[];
    onRemove: (id: string) => void;
}

export function WishlistGrid({ items, onRemove }: WishlistGridProps) {
    const [sortBy, setSortBy] = useState("latest");

    const handleMoveToCart = (id: string) => {
        console.log("Moving to cart:", id);
    };

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "price-low") return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        if (sortBy === "price-high") return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
        return 0; // Default latest
    });

    if (items.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col justify-center items-center py-20 text-center"
            >
                <div className="flex justify-center items-center bg-primary/5 backdrop-blur-sm mb-6 rounded-full ring-1 ring-primary/10 size-24">
                    <Heart className="size-12 text-primary/20" />
                </div>
                <h2 className="mb-2 font-bold text-3xl">Your wishlist is empty</h2>
                <p className="mb-10 max-w-sm text-muted-foreground text-balance">
                    Your favorite treats are waiting for you. Explore our collection and add them here to keep track!
                </p>
                <Button size="lg" className="shadow-primary/20 shadow-xl px-10 rounded-2xl h-14 font-medium text-lg" asChild>
                    <a href="/products">Start Discovering</a>
                </Button>
            </motion.div>
        );
    }

    return (
        <div className="space-y-10">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-6">
                <div className="inline-flex items-center gap-1 bg-card/30 backdrop-blur-sm p-1.5 border border-white/5 rounded-2xl">
                    <Button variant="secondary" size="sm" className="shadow-sm px-4 rounded-xl h-9">
                        <Grid2X2 className="mr-2 size-4" />
                        Grid
                    </Button>
                    <Button variant="ghost" size="sm" className="px-4 rounded-xl h-9 text-muted-foreground hover:text-foreground transition-colors">
                        <LayoutList className="mr-2 size-4" />
                        List
                    </Button>
                </div>

                <div className="flex justify-between sm:justify-end items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 font-medium text-muted-foreground text-sm">
                        <ArrowUpDown className="size-4" />
                        <span>Sort by:</span>
                    </div>
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="bg-card/50 hover:bg-card backdrop-blur-sm border-white/10 rounded-xl ring-offset-background w-[200px] h-11 transition-all">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent className="bg-card/95 backdrop-blur-xl border-white/10 rounded-xl">
                            <SelectItem value="latest">Recently Added</SelectItem>
                            <SelectItem value="price-low">Price: Low to High</SelectItem>
                            <SelectItem value="price-high">Price: High to Low</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <StaggerItem className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sortedItems.map((item) => (
                    <StaggerItemChild key={item.id}>
                        <WishlistItem
                            {...item}
                            onRemove={onRemove}
                            onMoveToCart={handleMoveToCart}
                        />
                    </StaggerItemChild>
                ))}
            </StaggerItem>
        </div>
    );
}
