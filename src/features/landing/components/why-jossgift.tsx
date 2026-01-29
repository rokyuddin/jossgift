"use client";

import { motion } from 'motion/react';
import { Heart, Award, MessageSquare, Truck, Building2, Gift, LucideIcon } from 'lucide-react';
import { Section } from '@/components/molecules/section';
import { SectionHeading } from '@/components/molecules/section-heading';
import { Container } from '@/components/molecules/container';

const features = [
    {
        icon: Heart,
        title: 'Emotion-Driven',
        description: 'We capture your feelings and wrap them in elegance.',
    },
    {
        icon: Award,
        title: 'Premium Quality',
        description: 'Finest Belgian couverture chocolate, zero compromise.',
    },
    {
        icon: MessageSquare,
        title: 'Personalized Cards',
        description: 'Your words, printed on high-quality textured cardstock.',
    },
    {
        icon: Truck,
        title: 'Reliable Delivery',
        description: 'Cold-chain delivery to ensure freshness nationwide.',
    },
    {
        icon: Building2,
        title: 'Corporate Gifting',
        description: 'Impress clients with branded, bespoke gift solutions.',
    },
    {
        icon: Gift,
        title: 'Curated Sets',
        description: 'Example sets designed for every specific occasion.',
    }
];

export function WhyJossGift() {
    return (
        <Section className="relative bg-muted/30 py-24 overflow-hidden">
            {/* Background Blob */}
            <div className="top-1/2 left-1/2 absolute bg-primary/5 blur-3xl rounded-full w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <Container className="z-10 relative">
                <SectionHeading
                    title="Why JossGift"
                    subtitle="Crafting experiences that transcend traditional gifting in Bangladesh."
                    className="mb-16"
                />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}


function FeatureCard({
    feature,
    index
}: {
    feature: {
        icon: LucideIcon;
        title: string;
        description: string;
    };
    index: number;
}) {
    return (
        <motion.div
            key={feature.title}
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="group top-0 sticky flex flex-col items-start bg-background hover:bg-card p-8 border border-transparent hover:border-border rounded-3xl transition-colors duration-300"
        >
            <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 mb-6 rounded-2xl w-14 h-14 text-primary transition-colors duration-300">
                <feature.icon size={26} strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 font-semibold text-xl">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {feature.description}
            </p>
        </motion.div>
    )
}