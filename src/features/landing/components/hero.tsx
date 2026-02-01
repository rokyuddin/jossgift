"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/atoms/button';
import { Container } from '@/components/molecules/container';
import { Section } from '@/components/molecules/section';
import { StaggerItem, StaggerItemChild } from '@/components/molecules/stagger-item';
import { cn } from '@/lib/utils';
import { ArrowRight, Gift, Sparkles } from 'lucide-react';

const HERO_IMAGES = [
    '/hero/1.webp',
    '/hero/2.webp',
    '/hero/3.webp'
];

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Section className="relative flex justify-center items-center overflow-hidden">
            {/* Background Carousel */}

            {/* Content */}
            <Container className='z-10 relative text-center'>
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-[40svh]"
                    >
                        <Image
                            src={HERO_IMAGES[currentImageIndex]}
                            alt={`Hero image ${currentImageIndex + 1}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                {/* <StaggerItem
                    className="flex flex-col items-center space-y-8"
                    viewport={{ once: true }}
                >
                    <StaggerItemChild>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md mb-2 px-4 py-1.5 border border-white/20 rounded-full font-medium text-primary-foreground/90 text-sm uppercase tracking-widest">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            <span>The Art of Gifting</span>
                        </div>
                    </StaggerItemChild>

                    <StaggerItemChild>
                        <h1 className="mx-auto max-w-5xl font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-balance leading-[1.1] sm:leading-[1.1] tracking-tight">
                            Not Just a Gift Box, <br />
                            <span className="text-primary italic">It's a Story.</span>
                        </h1>
                    </StaggerItemChild>

                    <StaggerItemChild>
                        <p className="mx-auto max-w-2xl text-white/80 text-lg md:text-xl text-balance leading-relaxed">
                            Premium chocolate collections crafted to express emotions, celebrate moments, and surprise hearts across Bangladesh.
                        </p>
                    </StaggerItemChild>

                    <StaggerItemChild>
                        <div className="flex sm:flex-row flex-col items-center gap-4 pt-4 w-full sm:w-auto">
                            <Button
                                size="xl"
                                className="group bg-primary hover:bg-primary/90 rounded-full w-full sm:w-auto font-semibold text-lg transition-all"
                            >
                                Shop Collections
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button
                                variant="outline"
                                size="xl"
                                className="bg-white/5 hover:bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 rounded-full w-full sm:w-auto text-white hover:text-white text-lg transition-all"
                            >
                                <Gift className="mr-2 w-4 h-4" />
                                Explore Occasions
                            </Button>
                        </div>
                    </StaggerItemChild>
                </StaggerItem> */}
            </Container>

            {/* Carousel Indicators */}
            <div className="bottom-8 z-20 absolute flex gap-3">
                {HERO_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={cn(
                            "backdrop-blur-sm rounded-full h-1.5 transition-all duration-300",
                            index === currentImageIndex
                                ? "w-8 bg-primary  shadow-lg"
                                : "w-1.5 bg-primary"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </Section>
    );
}
