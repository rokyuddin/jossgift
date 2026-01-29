"use client";

import { motion } from 'motion/react';
import { Section } from '@/components/molecules/section';
import { SectionHeading } from '@/components/molecules/section-heading';
import { OccasionCard } from './occasion-card';
import { Container } from '@/components/molecules/container';

const occasions = [
    { title: 'Birthday', image: '/images/birthday.png' },
    { title: 'Anniversary', image: '/images/anniversary.png' },
    { title: 'Proposal', image: "/images/best-seller.png" },
    { title: 'Eid Special', image: "/images/birthday.png" },
    { title: 'Friendship', image: "/images/best-seller.png" },
    { title: 'Corporate', image: "/images/best-seller.png" },
];

export function ShopByOccasion() {
    return (
        <Section className="overflow-hidden">
            <Container>
                <SectionHeading
                    title="Shop by Occasion"
                    subtitle="Find the perfect chocolate story for every moment in life."
                />

                {/* Grid Container with Mobile Snap Scroll */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="gap-4 md:gap-6 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-2 lg:grid-cols-3 -mx-4 md:mx-0 px-4 md:px-0 pb-8 md:pb-0 md:overflow-visible overflow-x-auto snap-mandatory snap-x scrollbar-hide"
                >
                    {occasions.map((occasion, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                            }}
                            className="w-[85vw] md:w-auto min-w-[280px] snap-center"
                        >
                            <OccasionCard
                                title={occasion.title}
                                image={occasion.image}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
