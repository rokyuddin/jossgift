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
                'group relative bg-muted shadow-sm hover:shadow-md rounded-2xl aspect-4/5 overflow-hidden transition-shadow cursor-pointer',
                className
            )}
        >
            {image ? (
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
            ) : (
                <div className="absolute inset-0 flex justify-center items-center bg-linear-to-br from-primary/20 to-accent/20">
                    <span className="opacity-40 font-medium text-foreground">Coming Soon</span>
                </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />

            {/* Content */}
            <div className="right-0 bottom-0 left-0 absolute p-6">
                <h3 className="font-semibold text-primary-foreground text-xl tracking-tight">{title}</h3>
            </div>
        </StaggerItemChild>
    );
}
