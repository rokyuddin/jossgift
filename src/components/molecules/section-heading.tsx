"use client";

import { AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { StaggerItem, StaggerItemChild } from './stagger-item';

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
        <StaggerItem
            className={cn(
                'space-y-4 mb-12 md:mb-16',
                align === 'center' ? 'text-center mx-auto' : 'text-left',
                className
            )}
        >
            <StaggerItemChild as='h2'
                className={cn("font-semibold text-foreground text-3xl md:text-4xl lg:text-5xl tracking-tight", titleClassName)}
            >
                {title}
            </StaggerItemChild>
            <AnimatePresence>
                {subtitle && (
                    <StaggerItemChild as='p' className={cn("mx-auto max-w-2xl text-muted-foreground text-lg md:text-xl", subtitleClassName)}>
                        {subtitle}
                    </StaggerItemChild>)}
            </AnimatePresence>
        </StaggerItem>
    );
}
