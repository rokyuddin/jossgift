"use client"

import { StaggerItem, StaggerItemChild } from "@/components/molecules/stagger-item";
import { ProductCard } from "@/features/landing";

const RECOMMENDATIONS = [
    {
        name: "Classic Milk Chocolate",
        tagline: "Smooth, creamy and irresistibly sweet.",
        price: "$25.00",
        image: "/images/chocolate-recommend-1.jpg",
        badge: "Bestseller",
    },
    {
        name: "Sea Salt Dark Ganache",
        tagline: "Bold dark chocolate with a hint of artisan salt.",
        price: "$32.00",
        image: "/images/chocolate-recommend-2.jpg",
    },
    {
        name: "Caramel Pecan Cluster",
        tagline: "Crunchy pecans meeting gooey gold caramel.",
        price: "$28.00",
        image: "/images/chocolate-recommend-3.jpg",
        badge: "New",
    },
    {
        name: "Raspberry Rose Hearts",
        tagline: "Delicate floral notes with tart berry center.",
        price: "$35.00",
        image: "/images/chocolate-recommend-4.jpg",
    },
];

export function RecommendationProducts() {
    return (
        <StaggerItem className="mt-24 pt-16 border-border border-t">
            <StaggerItemChild
                className="mb-10"
            >
                <h2 className="mb-2 font-bold text-3xl tracking-tight">You might also like</h2>
                <p className="text-muted-foreground">Handpicked selections just for you</p>
            </StaggerItemChild>

            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {RECOMMENDATIONS.map((product, index) => (
                    <StaggerItemChild
                        key={product.name}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ProductCard {...product} />
                    </StaggerItemChild>
                ))}
            </div>
        </StaggerItem>
    )
}
