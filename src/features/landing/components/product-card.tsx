"use client";

import Image from 'next/image';
import { Button, buttonVariants } from '@/components/atoms/button';
import { Badge } from '@/components/atoms/badge';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Card, CardContent, CardFooter } from '@/components/atoms/card';
import { ArrowRight, BookOpenText, Heart, PlusIcon, ShoppingBag, ShoppingBasket } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
    name: string;
    tagline: string;
    price: string;
    image?: string;
    badge?: string;
    className?: string;
}

export function ProductCard({
    name,
    tagline,
    price,
    image,
    badge,
    className,
}: ProductCardProps) {
    return (
        <Card className='pt-4'>
            <div className="group relative bg-muted mx-4 rounded-2xl aspect-square overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                ) : (
                    <div className="absolute inset-0 flex justify-center items-center bg-secondary/30" />
                )}

                {badge && (
                    <Badge
                        className='top-2 left-2 absolute'
                        variant="secondary"
                    >
                        {badge}
                    </Badge>
                )}

                {/* Quick Add Overlay (Desktop) */}
                <div className="top-2 right-2 absolute inset-y-0 flex flex-col gap-2 bg-linear-to-r from-background to-background/50 p-2 border border-border rounded-2xl h-max transition-transform translate-x-full group-hover:translate-x-0 duration-300 ease-out">
                    <Button size={'icon'}>
                        <Heart className="size-5" />
                    </Button>
                    <Button size={'icon'}>
                        <ShoppingBasket className="size-5" />
                    </Button>
                    <Button size={'icon'}>
                        <BookOpenText className="size-5" />
                    </Button>
                </div>
            </div>

            <CardContent className='pt-0'>
                <div className='flex justify-between items-center'>

                    <h3 className="font-semibold text-foreground group-hover:text-primary text-lg line-clamp-1 leading-tight transition-colors">
                        {name}
                    </h3>
                    <Link href={`/products/${name}`} className={cn(buttonVariants({ size: 'icon', variant: 'outline', className: 'rounded-full' }))}>
                        <ArrowRight />
                    </Link>
                </div>
                <p className="mt-1 text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                    {tagline}
                </p>

            </CardContent>
            <CardFooter className='justify-between items-end gap-6'>
                <div className='flex flex-col'>
                    <span className="text-muted-foreground text-sm">Price</span>
                    <span className="font-semibold text-primary text-lg whitespace-nowrap">
                        {price}
                    </span>
                </div>
                <Button className='flex-1'>
                    <ShoppingBag />
                    Buy Now
                </Button>
            </CardFooter>
        </Card>
    );
}
