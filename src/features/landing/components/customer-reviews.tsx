"use client";

import { motion } from 'motion/react';
import { Section } from '@/components/molecules/section';
import { SectionHeading } from '@/components/molecules/section-heading';
import { ReviewCard } from './review-card';
import { Container } from '@/components/molecules/container';

const reviews = [
    {
        name: 'Anika Rahman',
        text: 'I sent the Midnight Elegance box to my sister for her birthday. She was so surprised! The packaging was absolutely premium.',
        occasion: 'Birthday Gift',
    },
    {
        name: 'Tanvir Ahmed',
        text: 'Best corporate gifts we have ever used. Our clients were truly impressed by the quality of the chocolate and the presentation.',
        occasion: 'Corporate Event',
    },
    {
        name: 'Sara Karim',
        text: 'The anniversary box was a hit! It really is a story with chocolate. Every detail was perfect.',
        occasion: 'Anniversary',
    },
    {
        name: 'Raisul Islam',
        text: 'Ordered from abroad for my parents in Dhaka. The delivery was smooth and the message card was so beautiful.',
        occasion: 'Parents Anniversary',
    },
    {
        name: 'Farhana Yeasmin',
        text: 'Finally a premium chocolate brand in BD that matches international standards. Loved the packaging!',
        occasion: 'Just Because',
    },
];

export function CustomerReviews() {
    return (
        <Section variant="muted" className="py-24">
            <Container>
                <SectionHeading
                    title="Hearts Touched by JossGift"
                    subtitle="Stories of love, gratitude, and celebration shared by our wonderful community."
                    className="mb-12 md:mb-16"
                />

                {/* Horizontal Scroll Carousel for all screens */}
                <div
                    className="flex gap-6 -mx-4 md:mx-0 px-4 md:px-0 pb-8 overflow-x-auto snap-mandatory snap-x scrollbar-hide"
                >
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex-shrink-0 min-w-[300px] md:min-w-[400px] snap-center"
                        >
                            <ReviewCard {...review} className="h-full" />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
