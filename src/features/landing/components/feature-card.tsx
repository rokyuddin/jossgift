"use client";

import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={cn(
                'flex flex-col items-center bg-card shadow-sm hover:shadow-md p-8 border border-border rounded-2xl text-center transition-all duration-300',
                className
            )}
        >
            <div className="bg-accent/10 mb-6 p-4 rounded-2xl">
                <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 font-semibold text-foreground text-xl">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
