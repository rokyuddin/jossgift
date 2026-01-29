"use client";

import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { Section } from '@/components/molecules/section';
import { SectionHeading } from '@/components/molecules/section-heading';
import { cn } from '@/lib/utils';
import { Container } from '@/components/molecules/container';

const socialImages = [1, 2, 3, 4, 5, 6, 7, 8];

export function SocialGallery() {
    return (
        <Section variant="muted" className="py-24 overflow-hidden">
            <Container>
                <SectionHeading
                    title="Inside Our Gifting World"
                    subtitle="Follow us @JossGift for daily moments of sweetness and gift inspiration."
                    className="mb-12"
                />
            </Container>

            {/* Faster Infinite Marquee */}
            <div className="relative flex w-full overflow-hidden mask-gradient-x">
                <motion.div
                    className="flex gap-4 md:gap-6 min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...socialImages, ...socialImages, ...socialImages].map((i, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative flex-shrink-0 bg-secondary/30 rounded-2xl overflow-hidden cursor-pointer",
                                "w-[200px] h-[200px] md:w-[280px] md:h-[280px]"
                            )}
                        >
                            <div className="absolute inset-0 flex justify-center items-center">
                                <Instagram className="opacity-10 w-12 h-12 text-primary" />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 bg-primary/80 opacity-0 group-hover:opacity-100 p-4 text-white text-center transition-opacity duration-300">
                                <Instagram className="w-8 h-8" />
                                <span className="font-medium text-sm">View on Instagram</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="flex items-center gap-2 hover:bg-primary px-8 border-2 rounded-full hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
                    Follow @JossGift
                </Button>
            </div>
        </Section>
    );
}
