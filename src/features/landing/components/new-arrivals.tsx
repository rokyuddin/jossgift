"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/molecules/container";
import { Section } from "@/components/molecules/section";
import { InView } from '@/components/atoms/in-view';
import { cn } from "@/lib/utils";

const NEW_ARRIVALS = [
    {
        title: "Lighting Series",
        description: "Illuminate your sanctuary with our hand-blown glass collection.",
        label: "COLLECTION 01",
        image: "/images/lighting-series.png",
        className: "col-span-1 md:col-span-2 row-span-2",
    },
    {
        title: "Ceramics",
        image: "/images/ceramics.png",
        className: "col-span-1 row-span-1",
    },
    {
        title: "Seating",
        image: "/images/best-seller.png", // Fallback to best-seller for now
        className: "col-span-1 row-span-1",
    },
];

export function NewArrivals() {
    return (
        <Section id="new-arrivals">
            <Container>
                <InView stagger className="space-y-8">
                    <InView.Item direction="up" className="flex justify-between items-end">
                        <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
                            New Arrivals
                        </h2>
                        <Link
                            href="/shop"
                            className="group flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                            Browse All
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </InView.Item>

                    <div className="gap-6 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 h-[600px] md:h-[700px]">
                        {NEW_ARRIVALS.map((item, index) => (
                            <InView.Item
                                key={item.title}
                                direction="up"
                                className={cn(
                                    "group relative bg-muted rounded-2xl overflow-hidden",
                                    item.className
                                )}
                            >
                                <Link href="/shop" className="block w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                                    <div className="bottom-0 left-0 absolute p-6 md:p-8 text-white">
                                        {item.label && (
                                            <span className="block opacity-80 mb-2 font-bold text-xs uppercase tracking-widest">
                                                {item.label}
                                            </span>
                                        )}
                                        <h3 className={cn(
                                            "font-semibold tracking-tight",
                                            item.label ? "text-2xl md:text-3xl mb-2" : "text-xl md:text-2xl"
                                        )}>
                                            {item.title}
                                        </h3>
                                        {item.description && (
                                            <p className="max-w-[80%] text-white/80 text-sm md:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            </InView.Item>
                        ))}
                    </div>
                </InView>
            </Container>
        </Section>
    );
}
