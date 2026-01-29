"use client";

import { motion } from 'motion/react';
import { Button } from '@/components/atoms/button';
import { Section } from '@/components/molecules/section';
import { Container } from '@/components/molecules/container';

export function FinalCTA() {
    return (
        <Section className="py-20 md:py-24">
            <Container>
                <div className="relative bg-primary shadow-2xl p-12 md:p-24 rounded-[40px] md:rounded-[60px] overflow-hidden text-primary-foreground text-center">
                    {/* Background Accents */}
                    <div className="top-0 right-0 absolute bg-white/5 blur-3xl rounded-full w-[400px] h-[400px] -translate-y-1/2 translate-x-1/2" />
                    <div className="bottom-0 left-0 absolute bg-black/10 blur-3xl rounded-full w-[300px] h-[300px] -translate-x-1/2 translate-y-1/2" />

                    <div className="z-10 relative space-y-8 md:space-y-10 mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                                Make Someone Feel <br /> Special Today
                            </h2>
                            <p className="opacity-90 font-medium text-xl md:text-3xl italic">
                                "A small box. A big emotion."
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Button
                                size="lg"
                                className="bg-white hover:bg-white/90 shadow-xl px-12 md:px-16 py-8 md:py-10 rounded-full font-bold text-primary text-xl md:text-2xl hover:scale-105 transition-transform"
                            >
                                Shop Gifts Now
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
