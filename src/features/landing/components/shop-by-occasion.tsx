"use client";

import { motion } from 'motion/react';
import { Section } from '@/components/molecules/section';
import { SectionHeading } from '@/components/molecules/section-heading';
import { OccasionCard } from './occasion-card';
import { Container } from '@/components/molecules/container';
import { StaggerItem, StaggerItemChild } from '@/components/molecules/stagger-item';

const occasions = [
    { title: 'Birthday', image: '/images/birthday.png' },
    { title: 'Anniversary', image: '/images/anniversary.png' },
    { title: 'Proposal', image: "/images/best-seller.png" },
    { title: 'Valentine’s', image: "/images/birthday.png" },
    { title: 'Eid Special', image: "/images/birthday.png" },
    { title: 'Wedding', image: "/images/best-seller.png" },
    { title: 'Friendship', image: "/images/best-seller.png" },
    { title: 'Corporate', image: "/images/best-seller.png" },
];

export function ShopByOccasion() {
    return (
        <Section className="overflow-hidden md:pb-6">
            <Container>
                <SectionHeading
                    title="Shop by Occasion"
                    subtitle="Find the perfect chocolate story for every moment in life."
                />

                {/* Categories Container */}
                <StaggerItem
                    className="flex md:grid md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 -mx-4 md:mx-0 px-4 md:px-0 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory pb-4 md:pb-0"
                >
                    {occasions.map((occasion, index) => (
                        <StaggerItemChild
                            key={index}
                            className="snap-start shrink-0"
                        >
                            <OccasionCard
                                title={occasion.title}
                                image={occasion.image}
                            />
                        </StaggerItemChild>
                    ))}
                </StaggerItem>
            </Container>
        </Section>
    );
}
