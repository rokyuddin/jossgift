"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { StaggerItemChild } from '@/components/molecules/stagger-item';

interface OccasionCardProps {
    title: string;
    image?: string;
    className?: string;
}

export function OccasionCard({ title, image, className }: OccasionCardProps) {
    return (
        <StaggerItemChild
            className={cn(
                'group flex flex-col items-center gap-3 cursor-pointer select-none',
                className
            )}
        >
            <div className="relative bg-muted shadow-xs transition-all duration-300 group-hover:shadow-md border border-border/50 group-hover:border-primary/20 rounded-2xl md:rounded-3xl w-24 h-24 md:w-32 md:h-32 overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 96px, 128px"
                    />
                ) : (
                    <div className="flex justify-center items-center bg-linear-to-br from-primary/5 to-accent/5 w-full h-full">
                        <span className="opacity-40 font-medium text-[10px] text-foreground uppercase tracking-widest">Soon</span>
                    </div>
                )}
                
                {/* Subtle Glass Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
            </div>

            <div className="text-center">
                <h3 className="group-hover:text-primary font-medium text-foreground text-sm md:text-base tracking-tight transition-colors duration-200">
                    {title}
                </h3>
            </div>
        </StaggerItemChild>
    );
}
