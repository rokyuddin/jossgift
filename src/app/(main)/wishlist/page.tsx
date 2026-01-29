"use client";

import React, { useState } from 'react'
import { WishlistHeader } from "@/features/wishlist/components/wishlist-header";
import { WishlistGrid } from "@/features/wishlist/components/wishlist-grid";
import { Container } from "@/components/molecules/container";

const MOCK_WISHLIST = [
    {
        id: "1",
        name: "Dark Gold Truffle",
        price: "$24.00",
        image: "/images/hero-chocolate.png",
        category: "Truffles",
        inStock: true,
    },
    {
        id: "2",
        name: "Hazelnut Milk Bar",
        price: "$12.50",
        image: "/images/best-seller.png",
        category: "Bars",
        inStock: true,
    },
    {
        id: "3",
        name: "Anniversary Collection",
        price: "$45.00",
        image: "/images/anniversary.png",
        category: "Gift Boxes",
        inStock: false,
    },
    {
        id: "4",
        name: "Birthday Bliss Box",
        price: "$38.00",
        image: "/images/birthday.png",
        category: "Gift Boxes",
        inStock: true,
    },
];

export default function WishlistPage() {
    const [items, setItems] = useState(MOCK_WISHLIST);

    const handleRemove = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="relative bg-background pt-24 md:pt-32 pb-20 md:pb-32 min-h-screen overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="top-0 left-1/4 -z-10 absolute bg-primary/5 blur-[120px] rounded-full w-[500px] h-[500px]" />
            <div className="right-1/4 bottom-0 -z-10 absolute bg-secondary/5 blur-[120px] rounded-full w-[500px] h-[500px]" />

            <Container>
                <WishlistHeader itemCount={items.length} />
                <WishlistGrid items={items} onRemove={handleRemove} />
            </Container>
        </div>
    )
}