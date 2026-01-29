"use client";

import { Checkbox } from "@/components/atoms/checkbox";
import { Label } from "@/components/atoms/label";
import { Slider } from "@/components/atoms/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/atoms/accordion";
import { Separator } from "@/components/atoms/separator";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = [
    { name: "All Products", count: 42 },
    { name: "Milk Chocolates", count: 18 },
    { name: "Dark Chocolates", count: 12 },
    { name: "Gift Boxes", count: 8 },
    { name: "Assorted", count: 4 },
];

const materials = ["Artisan Handmade", "Velvet Box", "Premium Cardboard", "Tin Box"];
const colors = ["#FDFBF7", "#27272A", "#71717A", "#7C2D12", "#3F3F46"];

export function FilterSidebar({ className }: { className?: string }) {
    const [priceRange, setPriceRange] = useState([0, 500]);

    return (
        <aside className={cn("space-y-8 pr-6 h-full", className)}>
            <div className="space-y-4">
                <h3 className="font-semibold text-lg">Categories</h3>
                <nav className="flex flex-col space-y-2">
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            className="group flex justify-between items-center py-1 text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                            <span className="transition-transform group-hover:translate-x-1 duration-300">
                                {category.name}
                            </span>
                            <span className="text-muted-foreground/50 text-xs">{category.count}</span>
                        </button>
                    ))}
                </nav>
            </div>

            <Separator />

            <Accordion type="multiple" defaultValue={["material", "colors", "price"]}>
                <AccordionItem value="material" className="border-none">
                    <AccordionTrigger className="py-4 font-semibold text-lg hover:no-underline">
                        Material
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-6">
                        <div className="space-y-3">
                            {materials.map((material) => (
                                <div key={material} className="flex items-center space-x-3">
                                    <Checkbox id={material} />
                                    <Label
                                        htmlFor={material}
                                        className="peer-disabled:opacity-70 font-normal text-muted-foreground text-sm leading-none peer-disabled:cursor-not-allowed"
                                    >
                                        {material}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="colors" className="border-none">
                    <AccordionTrigger className="py-4 font-semibold text-lg hover:no-underline">
                        Colors
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-6">
                        <div className="flex flex-wrap gap-2">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    className="border border-border rounded-full ring-2 ring-transparent hover:ring-primary/50 ring-offset-background size-6 transition-all"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <Separator />

                <AccordionItem value="price" className="border-none">
                    <AccordionTrigger className="py-4 font-semibold text-lg hover:no-underline">
                        Price Range
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-6">
                        <div className="space-y-6 px-1">
                            <Slider
                                defaultValue={[0, 500]}
                                max={500}
                                step={1}
                                value={priceRange}
                                onValueChange={setPriceRange}
                                className="my-6"
                            />
                            <div className="flex justify-between items-center gap-4">
                                <div className="space-y-1">
                                    <Label className="text-muted-foreground text-xs">Min</Label>
                                    <div className="flex items-center bg-card px-3 py-1 border border-border rounded-xl ring-offset-background w-full h-10 text-sm">
                                        $<span className="ml-1">{priceRange[0]}</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-muted-foreground text-xs">Max</Label>
                                    <div className="flex items-center bg-card px-3 py-1 border border-border rounded-xl ring-offset-background w-full h-10 text-sm">
                                        $<span className="ml-1">{priceRange[1]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </aside>
    );
}
