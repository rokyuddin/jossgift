"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/atoms/button';
import { Container } from '@/components/molecules/container';
import { Section } from '@/components/molecules/section';
import { StaggerItem, StaggerItemChild } from '@/components/molecules/stagger-item';

export function Hero() {
    return (
        <Section className="relative flex justify-center items-center h-[90vh] min-h-[600px] overflow-hidden">
            {/* Immersive Background */}
            <div className="z-0 absolute inset-0">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/images/hero-chocolate.png"
                        alt="Premium Chocolate Artistry"
                        fill
                        priority
                        className="object-cover"
                    />
                    {/* Premium Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-primary via-background/60 to-foreground/20" />
                </motion.div>
            </div>

            <Container className='z-10 relative text-foreground text-center'>
                <StaggerItem
                    className="space-y-6 md:space-y-8"
                >
                    {/* Badge / Slogan */}
                    <StaggerItemChild as='span' className="inline-block bg-primary/10 backdrop-blur-sm px-4 py-1.5 border border-primary/20 rounded-full font-medium text-primary text-sm uppercase tracking-widest">
                        The Art of Gifting
                    </StaggerItemChild>

                    {/* Main Heading */}
                    <StaggerItemChild as='h1' className="mx-auto max-w-4xl font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                        Not Just a Gift Box <br />
                        <span className="text-primary italic">It's a Story with Chocolate</span>
                    </StaggerItemChild>

                    {/* Subheading */}
                    <StaggerItemChild as='p' className="mx-auto max-w-2xl text-white/90 text-lg md:text-xl leading-relaxed">
                        Premium chocolate collections crafted to express emotions, celebrate moments, and surprise hearts across Bangladesh.
                    </StaggerItemChild>

                    {/* CTAs */}
                    <StaggerItemChild as='div' className="flex sm:flex-row flex-col justify-center items-center gap-4 pt-4">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 px-8 py-7 rounded-full w-full sm:w-auto font-semibold text-lg transition-all"
                        >
                            Shop Gifts
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white/5 hover:bg-white/10 backdrop-blur-md px-8 py-7 border-white/20 rounded-full w-full sm:w-auto text-white hover:text-white text-lg transition-all"
                        >
                            Explore Occasions
                        </Button>
                    </StaggerItemChild>
                </StaggerItem>
            </Container>
        </Section >
    );
}
