"use client";

import { Section } from '@/components/molecules/section';
import { SectionHeading } from '@/components/molecules/section-heading';
import { OccasionCard } from './occasion-card';
import { Container } from '@/components/molecules/container';
import { InView } from '@/components/atoms/in-view';

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
        <Section className="md:pb-6 overflow-hidden">
            <Container>
                <SectionHeading
                    title="Shop by Occasion"
                    subtitle="Find the perfect chocolate story for every moment in life."
                />

                {/* Categories Container */}
                <InView
                    stagger
                    staggerDelay={0.08}
                    delayChildren={0.1}
                    className="flex gap-6 md:gap-8 md:grid md:grid-cols-4 lg:grid-cols-8 -mx-4 md:mx-0 px-4 md:px-0 pb-4 md:pb-0 md:overflow-visible overflow-x-auto snap-mandatory snap-x scrollbar-hide"
                >
                    {occasions.map((occasion, index) => (
                        <InView.Item
                            key={index}
                            direction="up"
                            className="snap-start shrink-0"
                        >
                            <OccasionCard
                                title={occasion.title}
                                image={occasion.image}
                            />
                        </InView.Item>
                    ))}
                </InView>
            </Container>
        </Section>
    );
}
