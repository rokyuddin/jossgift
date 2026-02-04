"use client";

import Image from 'next/image';
import { Button, buttonVariants } from '@/components/atoms/button';
import { Badge } from '@/components/atoms/badge';
import { Card, CardContent, CardFooter } from '@/components/atoms/card';
import { ArrowUpRight, Eye, Heart, Minus, Plus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/use-cart-store';
import { useWishlistStore } from '@/store/use-wishlist-store';
import { cn } from '@/lib/utils';
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogClose,
    MorphingDialogImage,
    MorphingDialogTitle,
    MorphingDialogSubtitle,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from '@/components/atoms/morphing-dialog';

interface ProductCardProps {
    name: string;
    tagline: string;
    price: string;
    image?: string;
    badge?: string;
}

export function ProductCard({
    name,
    tagline,
    price,
    image,
    badge,
}: ProductCardProps) {
    const { items, addItem, updateQuantity, removeItem } = useCartStore();
    const cartItem = items.find((item) => item.id === name);
    const { items: wishlistItems, toggleItem } = useWishlistStore();
    const isInWishlistStore = wishlistItems.some((item) => item.id === name);

    const handleAddToCart = () => {
        const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
        addItem({
            id: name, // Using name as ID for now since we don't have real IDs
            name,
            price: isNaN(numericPrice) ? 0 : numericPrice,
            quantity: 1,
            image: image || '',
            details: { tagline }, // Storing tagline as detail
        });
    };

    const handleToggleWishlist = () => {
        toggleItem({
            id: name,
            name,
            price,
            image: image || '',
            category: 'General', // Default category
            inStock: true, // Defaulting to true as card doesn't have this info
            tagline,
        });
    };

    const handleIncrease = () => {
        if (cartItem) {
            updateQuantity(name, cartItem.quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (cartItem) {
            if (cartItem.quantity > 1) {
                updateQuantity(name, cartItem.quantity - 1);
            } else {
                removeItem(name);
            }
        }
    };

    return (
        <>
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
                    <div className="top-3 right-3 absolute flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-300 ease-out">
                        <Button
                            variant="secondary"
                            size="icon"
                            onClick={handleToggleWishlist}
                        >
                            <Heart
                                className={cn({
                                    'fill-red-500 text-red-500': isInWishlistStore,
                                })}
                            />
                        </Button>

                        <MorphingDialog
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 24,
                            }}
                        >
                            <MorphingDialogTrigger
                                className={buttonVariants({ variant: 'secondary', size: 'icon' })}
                            >
                                <Eye className="size-5" />
                            </MorphingDialogTrigger>
                            <MorphingDialogContainer>
                                <MorphingDialogContent
                                    style={{ borderRadius: '24px' }}
                                    className="relative flex flex-col bg-background border w-full sm:w-[500px] h-[500px] overflow-hidden pointer-events-auto"
                                >
                                    <MorphingDialogImage
                                        src={image || ''}
                                        alt={name}
                                        className="w-full h-1/2 object-cover"
                                    />
                                    <div className="flex flex-col flex-1 justify-between p-6">
                                        <div>
                                            <MorphingDialogTitle className="font-bold text-foreground text-2xl">
                                                {name}
                                            </MorphingDialogTitle>
                                            <MorphingDialogSubtitle className="mt-1 text-muted-foreground">
                                                {tagline}
                                            </MorphingDialogSubtitle>
                                            <MorphingDialogDescription className="mt-4 text-foreground text-sm">
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-bold text-primary text-xl">{price}</span>
                                                    </div>
                                                </div>
                                            </MorphingDialogDescription>
                                        </div>
                                        <Button className="w-full" onClick={handleAddToCart}>
                                            <ShoppingBag className="mr-2 size-4" />
                                            Add to Cart
                                        </Button>
                                    </div>
                                    <MorphingDialogClose className="text-zinc-500" />
                                </MorphingDialogContent>
                            </MorphingDialogContainer>
                        </MorphingDialog>
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
                    {cartItem ? (
                        <div className="flex items-center gap-3 bg-secondary/50 p-1 rounded-xl h-10">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-8 h-8"
                                onClick={handleDecrease}
                            >
                                <Minus className="size-4" />
                            </Button>
                            <span className="w-4 font-semibold text-sm text-center">
                                {cartItem.quantity}
                            </span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-8 h-8"
                                onClick={handleIncrease}
                            >
                                <Plus className="size-4" />
                            </Button>
                        </div>
                    ) : (
                        <Button className='flex-1' onClick={handleAddToCart}>
                            <ShoppingBag />
                            Add to Cart
                        </Button>
                    )}
                </CardFooter>
            </Card >

        </>
    );
}

