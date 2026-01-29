"use client";

import { motion } from 'motion/react';
import { Section } from '@/components/molecules/section';
import { SectionHeading } from '@/components/molecules/section-heading';
import { ProductCard } from './product-card';
import { Container } from '@/components/molecules/container';
import { Button } from '@/components/atoms/button';
import { StaggerItem, StaggerItemChild } from '@/components/molecules/stagger-item';

const featuredProducts = [
    {
        name: 'Midnight Elegance',
        tagline: 'Deep cocoa intensity for those who appreciate the finer, darker things in life.',
        price: '৳1,250',
        image: '/images/best-seller.png',
        badge: 'Customer Favorite',
    },
    {
        name: 'Golden Moments',
        tagline: 'A sprinkle of luxury in every bite with real gold flakes and hazelnut praline.',
        price: '৳1,850',
        image: "/images/birthday.png",
        badge: 'Best Seller',
    },
    {
        name: 'Sweet Harmony',
        tagline: 'The perfect balance of milk and dark, creating a symphony of flavors.',
        price: '৳950',
        image: "/images/anniversary.png",
    },
    {
        name: 'Royal Velvet',
        tagline: 'Smooth, creamy, and undeniably regal. A texture that melts effortlessly.',
        price: '৳2,450',
        image: "/images/best-seller.png",
        badge: 'Limited Edition',
    },
    {
        name: 'Midnight Elegance',
        tagline: 'Deep cocoa intensity for those who appreciate the finer, darker things in life.',
        price: '৳1,250',
        image: '/images/best-seller.png',
        badge: 'Customer Favorite',
    },
    {
        name: 'Golden Moments',
        tagline: 'A sprinkle of luxury in every bite with real gold flakes and hazelnut praline.',
        price: '৳1,850',
        image: "/images/birthday.png",
        badge: 'Best Seller',
    },
    {
        name: 'Sweet Harmony',
        tagline: 'The perfect balance of milk and dark, creating a symphony of flavors.',
        price: '৳950',
        image: "/images/anniversary.png",
    },
    {
        name: 'Royal Velvet',
        tagline: 'Smooth, creamy, and undeniably regal. A texture that melts effortlessly.',
        price: '৳2,450',
        image: "/images/best-seller.png",
        badge: 'Limited Edition',
    },
];

export function BestSellers() {
    return (
        <Section variant="default" className="py-20 md:py-28">
            <Container>
                <SectionHeading
                    title="Our Most Loved Gifts"
                    subtitle="Handpicked collections that have touched thousands of hearts across Bangladesh."
                    className="mb-12 md:mb-16"
                />

                <StaggerItem
                    className="gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {featuredProducts.map((product, index) => (
                        <StaggerItemChild
                            key={index}
                        >
                            <ProductCard {...product} />
                        </StaggerItemChild>
                    ))}
                </StaggerItem>

                <StaggerItemChild className="flex justify-center mt-12 md:mt-16">
                    <Button variant="outline" size="lg" className="px-8 rounded-full">
                        View All Collections
                    </Button>
                </StaggerItemChild>
            </Container>
        </Section>
    );
}
