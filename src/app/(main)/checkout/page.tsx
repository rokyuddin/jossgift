"use client";

import React, { useState } from "react";
import { CartList } from "@/features/checkout/components/cart-list";
import { OrderSummary } from "@/features/checkout/components/order-summary";
import { ShippingProgress } from "@/features/checkout/components/shipping-progress";
import { GiftOptions } from "@/features/checkout/components/gift-options";
import { ProductCard } from "@/features/landing";
import { motion } from "motion/react";
import { Section } from "@/components/molecules/section";
import { Container } from "@/components/molecules/container";
import { SectionHeading } from "@/components/molecules/section-heading";

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

export default function CheckoutPage() {
    const [subtotal, setSubtotal] = useState(1745.0);
    const FREE_SHIPPING_THRESHOLD = 2000.0;

    // Mock values
    const shippingEstimate = 45.0;
    const taxEstimate = 0.0;

    return (
        <Section>
            <Container>
                <SectionHeading
                title="Shopping Cart"
                subtitle="(2 items)"
                align="left"
                className="md:mb-8 mb-6"
                subtitleClassName="mx-0"
                />

                <div className="items-start gap-12 grid grid-cols-1 lg:grid-cols-12">
                    {/* Main Content Area */}
                    <div className="space-y-8 lg:col-span-8">
                        <ShippingProgress
                            subtotal={subtotal}
                            freeShippingThreshold={FREE_SHIPPING_THRESHOLD}
                        />

                        <section className="bg-card/50 p-2 md:p-6 border border-border/40 rounded-4xl">
                            <CartList onSubtotalChange={setSubtotal} />
                        </section>

                        <GiftOptions />
                    </div>

                    {/* Sidebar / Order Summary */}
                    <aside className="lg:col-span-4">
                        <OrderSummary
                            subtotal={subtotal}
                            shippingEstimate={shippingEstimate}
                            taxEstimate={taxEstimate}
                        />
                    </aside>
                </div>

                {/* Recommendations Section */}
                <section className="mt-24 pt-16 border-border border-t">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="mb-2 font-bold text-3xl tracking-tight">You might also like</h2>
                        <p className="text-muted-foreground">Handpicked selections just for you</p>
                    </motion.div>

                    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {RECOMMENDATIONS.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ProductCard {...product} />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </Container>
        </Section>
    );
}
