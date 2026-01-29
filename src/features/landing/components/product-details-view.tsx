"use client";

import { Container } from "@/components/molecules/container";
import { ProductGallery } from "./product-gallery";
import { ProductInfo } from "./product-info";
import { ProductTabs } from "./product-tabs";
import { BestSellers } from "./best-sellers";
import { Section } from "@/components/molecules/section";
import { SectionHeading } from "@/components/molecules/section-heading";
import { motion } from "motion/react";

const productData = {
    name: "Midnight Elegance Signature Box",
    price: "৳2,450",
    badge: "Best Seller",
    images: [
        "/images/best-seller.png",
        "/images/birthday.png",
        "/images/anniversary.png",
    ],
    shortDescription: "A curated collection of artisanal dark chocolates, handcrafted with the finest Belgian cocoa and infused with exotic spices from the heart of Dhaka.",
    longDescription: "Indulge in the ultimate chocolate experience with our Midnight Elegance Signature Box. Each piece is a masterpiece, crafted by our master chocolatiers using traditional techniques and modern innovations. From the first snap to the lingeing finish, this collection is designed to take you on a sensory journey. Perfect for gifting or personal indulgence.",
    specifications: [
        { label: "Weight", value: "450g" },
        { label: "Pieces", value: "24 Artisanal Chocolates" },
        { label: "Shelf Life", value: "3 Months" },
        { label: "Origin", value: "Belgian Chocolate, Handcrafted in BD" },
    ],
    shipping: "We offer express delivery across Dhaka within 24 hours. For other districts, delivery takes 2-3 business days. All boxes are temperature-controlled during transit to ensure they arrive in perfect condition."
};

export function ProductDetailsView() {
    return (
        <div className="pt-24 lg:pt-32">
            <Section className="pb-16 md:pb-24">
                <Container>
                    <div className="gap-12 lg:gap-20 grid grid-cols-1 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <ProductGallery images={productData.images} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <ProductInfo
                                name={productData.name}
                                price={productData.price}
                                badge={productData.badge}
                                description={productData.shortDescription}
                            />
                        </motion.div>
                    </div>

                    <ProductTabs
                        description={productData.longDescription}
                        specifications={productData.specifications}
                        shipping={productData.shipping}
                    />
                </Container>
            </Section>

            {/* Related Products */}
            <div className="bg-muted/30">
                <BestSellers />
            </div>
        </div>
    );
}
