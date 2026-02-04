"use client";

import Image from "next/image";
import { Trash2, ArrowUpRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { Card, CardContent, CardFooter } from "@/components/atoms/card";
import { Badge } from "@/components/atoms/badge";
import Link from "next/link";

interface WishlistItemProps {
    id: string;
    name: string;
    price: string;
    image: string;
    category: string;
    inStock: boolean;
    onRemove: (id: string) => void;
    onMoveToCart: (id: string) => void;
}

export function WishlistItem({
    id,
    name,
    price,
    image,
    category,
    inStock,
    onRemove,
    onMoveToCart,
}: WishlistItemProps) {

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

                {!inStock && (
                    <div className="z-20 absolute inset-0 flex justify-center items-center bg-background/60 backdrop-blur-[2px]">
                        <Badge variant="destructive" className="px-3 py-1 text-xs uppercase tracking-wider">
                            Out of Stock
                        </Badge>
                    </div>
                )}

                {/* Quick Add Overlay (Desktop) */}
                <div className="top-3 right-3 absolute opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-300 ease-out">
                    <Button
                        variant="secondary"
                        size="icon"
                        className="bg-background/80 hover:bg-destructive backdrop-blur-md rounded-full size-8 hover:text-background transition-colors cursor-pointer"
                        onClick={() => onRemove(id)}
                    >
                        <Trash2 className="size-5" />
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
                    {category}
                </p>

            </CardContent>
            <CardFooter className='justify-between items-end gap-6'>
                <div className='flex flex-col'>
                    <span className="text-muted-foreground text-sm">Price</span>
                    <span className="font-semibold text-primary text-lg whitespace-nowrap">
                        {price}
                    </span>
                </div>

                <Button className='flex-1' onClick={() => onMoveToCart(id)}>
                    <ShoppingBag />
                    Move to Cart
                </Button>
            </CardFooter>
        </Card >
    )
}
