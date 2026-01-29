"use client";

import { motion } from 'motion/react';
import { Section } from '@/components/molecules/section';
import { SectionHeading } from '@/components/molecules/section-heading';
import { Container } from '@/components/molecules/container';

const steps = [
    {
        number: '01',
        title: 'Choose a Gift',
        description: 'Browse our curated collection of premium chocolate boxes for any occasion.',
    },
    {
        number: '02',
        title: 'Add a Message',
        description: 'Personalize your gift with a heartfelt message on our designer cards.',
    },
    {
        number: '03',
        title: 'We Deliver',
        description: 'We handle the surprise, delivering your gift with care across the nation.',
    },
];

export function HowItWorks() {
    return (
        <Section className="py-24 md:py-32">
            <Container>
                <SectionHeading
                    title="Making Surprises Simple"
                    subtitle="Three easy steps to deliver big emotions using the language of chocolate."
                    className="mb-16 md:mb-24"
                />

                <div className="relative gap-12 md:gap-8 grid grid-cols-1 md:grid-cols-3">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block top-[120px] right-[16%] left-[16%] -z-10 absolute bg-border h-0.5">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="bg-primary h-full origin-left"
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative flex flex-col items-center px-4 text-center"
                        >
                            {/* Number Watermark */}
                            <div className="top-0 left-1/2 z-0 absolute font-bold text-[120px] text-muted/30 leading-none -translate-x-1/2 -translate-y-12 select-none">
                                {step.number}
                            </div>

                            {/* Icon Circle */}
                            <div className="z-10 relative flex justify-center items-center bg-background shadow-sm mb-6 border-4 border-muted group-hover:border-primary rounded-full w-24 h-24 transition-colors duration-500">
                                <span className="font-bold text-primary text-3xl">{step.number}</span>
                            </div>

                            <div className="z-10 relative space-y-3">
                                <h3 className="font-semibold text-foreground text-2xl">{step.title}</h3>
                                <p className="mx-auto max-w-xs text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
