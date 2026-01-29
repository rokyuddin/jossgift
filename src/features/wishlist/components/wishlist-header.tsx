"use client";

import { motion } from "motion/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/atoms/breadcrumb";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/atoms/button";

interface WishlistHeaderProps {
    itemCount: number;
}

export function WishlistHeader({ itemCount }: WishlistHeaderProps) {
    return (
        <div className="space-y-6 mb-12">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Wishlist</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex md:flex-row flex-col md:justify-between md:items-end gap-6">
                <div className="space-y-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-bold text-4xl md:text-5xl tracking-tight"
                    >
                        My Wishlist
                        {itemCount > 0 && (
                            <span className="ml-4 font-normal text-muted-foreground/60 text-2xl">
                                ({itemCount})
                            </span>
                        )}
                    </motion.h1>
                    <p className="text-muted-foreground">
                        A curated collection of your most-desired chocolate treats.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Button size="lg" className="shadow-primary/20 shadow-xl rounded-xl">
                        <ShoppingBag className="mr-2 size-5" />
                        Add All to Cart
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
