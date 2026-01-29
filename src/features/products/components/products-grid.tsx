"use client";

import { ProductCard } from "@/features/landing/components/product-card";
import { motion } from "motion/react";

const products = [
    {
        name: "Classic Milk Selection",
        tagline: "Extra smooth artisan milk chocolates with hazelnut praline",
        price: "$45.00",
        image: "https://images.unsplash.com/photo-1549007994-cb92ad714a64?q=80&w=800&auto=format&fit=crop",
        badge: "Bestseller"
    },
    {
        name: "Dark Midnight Box",
        tagline: "70% cocoa single-origin dark chocolate assortments",
        price: "$52.00",
        image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=800&auto=format&fit=crop",
        badge: "New"
    },
    {
        name: "Velvet Truffle Collection",
        tagline: "Silk-texture truffles with exotic ganache fillings",
        price: "$68.00",
        image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Gold Foil Artisan Tin",
        tagline: "Hand-painted pralines in a limited edition golden tin",
        price: "$85.00",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800&auto=format&fit=crop",
        badge: "Premium"
    },
    {
        name: "Caramel Dream Box",
        tagline: "Salted caramel and butterscotch filled delights",
        price: "$38.00",
        image: "https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Ruby Pistachio Delight",
        tagline: "Natural ruby chocolate paired with Persian pistachios",
        price: "$55.00",
        image: "https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?q=80&w=800&auto=format&fit=crop",
        badge: "Limited"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
} as const;

const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
} as const;

export function ProductsGrid() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
            {products.map((product) => (
                <motion.div key={product.name} variants={item}>
                    <ProductCard {...product} />
                </motion.div>
            ))}
        </motion.div>
    );
}
