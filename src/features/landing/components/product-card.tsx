"use client";

import Image from 'next/image';
import { Button, buttonVariants } from '@/components/atoms/button';
import { Badge } from '@/components/atoms/badge';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Card, CardContent, CardFooter } from '@/components/atoms/card';
import { ArrowRight, ArrowUpRight, BookOpenText, Eye, Heart, PlusIcon, ShoppingBag, ShoppingBasket } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
    name: string;
    tagline: string;
    price: string;
    image?: string;
    badge?: string;
    className?: string;
    isWishlist?: boolean;
}

export function ProductCard({
    name,
    tagline,
    price,
    image,
    badge,
    className,
    isWishlist,
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
                    >
                        {badge}
                    </Badge>
                )}

                {/* Quick Add Overlay (Desktop) */}
                       <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
          <Button
            variant="secondary"
            size="icon"
            className="backdrop-blur-xl bg-white/90 hover:bg-white shadow-lg"
          >
            <Heart
              className={`size-5 transition-colors ${
                isWishlist ? 'fill-red-500 text-red-500' : 'text-gray-700'
              }`}
            />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="backdrop-blur-xl bg-white/90 hover:bg-white shadow-lg"
          >
            <Eye className="size-5 text-gray-700" />
          </Button>
        </div>
            </div>

            <CardContent className='pt-0 h-16'>
                <div className='flex justify-between items-center'>

                    <h3 className="font-semibold text-foreground group-hover:text-primary text-lg line-clamp-1 leading-tight transition-colors">
                        {name}
                    </h3>
                    <Link href={`/products/${name}`}>
                    <Button variant="outline" size={'icon-lg'} className='rounded-full'>
                        <ArrowUpRight />
                    </Button>
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
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}

