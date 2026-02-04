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
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className={cn(
            "group relative flex flex-col p-6 h-full",
            "bg-card/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1",
            "backdrop-blur-sm border border-border/50",
            "rounded-2xl shadow-sm hover:shadow-md",
            className
        )}>
            {/* Header: User Info & Rating */}
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center bg-primary/10 rounded-full w-10 h-10 font-semibold text-primary text-sm">
                        {initials}
                    </div>
                    <div>
                        <div className="font-semibold text-foreground text-lg leading-tight">{name}</div>
                        <div className="text-muted-foreground text-sm">{occasion}</div>
                    </div>
                </div>
                {/* Stars */}
                <div className="flex gap-0.5 text-orange-400">
                    {[...Array(rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative grow">
                <Quote className="-top-1 -left-1 absolute w-6 h-6 text-primary/10 scale-x-[-1] transform" />
                <p className="pl-6 text-foreground/90 leading-relaxed">
                    {text}
                </p>
            </div>

        </div>
    );
}
