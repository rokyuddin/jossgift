"use client";

import { Section } from '@/components/molecules/section';
import { SectionHeading } from '@/components/molecules/section-heading';
import { Container } from '@/components/molecules/container';
import { Button } from '@/components/atoms/button';
import { InView } from '@/components/atoms/in-view';
import Link from 'next/link';
import { ProductCard } from '@/features/products';

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

                <InView
                    stagger
                    className="gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {featuredProducts.map((product, index) => (
                        <InView.Item
                            key={index}
                        >
                            <ProductCard {...product} />
                        </InView.Item>
                    ))}
                </InView>

                <InView direction="up" className="flex justify-center mt-12 md:mt-16">
                    <Button asChild variant="outline" size="lg" className="px-8 rounded-full">
                        <Link href="/products">
                            View All Collections
                        </Link>
                    </Button>
                </InView>
            </Container>
        </Section>
    );
}
