"use client";

import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
    name: string;
    text: string;
    occasion: string;
    rating?: number;
    className?: string;
}

export function ReviewCard({ name, text, occasion, rating = 5, className }: ReviewCardProps) {
    return (
        <div className={cn(
            "relative flex flex-col bg-card shadow-sm p-8 border border-border rounded-3xl h-full overflow-hidden",
            className
        )}>
            {/* Quote Icon Background */}
            <Quote className="top-6 right-6 absolute w-24 h-24 text-primary/5 -rotate-12 pointer-events-none" />

            {/* Stars */}
            <div className="flex gap-1 mb-6 text-orange-400">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
            </div>

            <p className="z-10 relative flex-grow mb-8 text-foreground/80 text-lg italic leading-relaxed">
                "{text}"
            </p>

            <div className="mt-auto pt-4 border-border/50 border-t">
                <div className="font-semibold text-foreground text-lg">{name}</div>
                <div className="font-medium text-primary text-sm uppercase tracking-wider">{occasion}</div>
            </div>
        </div>
    );
}
