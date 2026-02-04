"use client";

import { AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { InView } from '../atoms/in-view';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
}

export function SectionHeading({
    title,
    subtitle,
    align = 'center',
    className,
    titleClassName,
    subtitleClassName,
}: SectionHeadingProps) {
    return (
        <InView stagger
            className={cn(
                'space-y-4 mb-12 md:mb-16',
                align === 'center' ? 'text-center mx-auto' : 'text-left',
                className
            )}
        >
            <InView.Item as='h2'
                className={cn("font-semibold text-foreground text-3xl md:text-4xl lg:text-5xl tracking-tight", titleClassName)}
            >
                {title}
            </InView.Item>
            <AnimatePresence>
                {subtitle && (
                    <InView.Item as='p' className={cn("mx-auto max-w-2xl text-muted-foreground text-lg md:text-xl", subtitleClassName)}>
                        {subtitle}
                    </InView.Item>)}
            </AnimatePresence>
        </InView>
    );
}
