"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/atoms/tabs";
import { motion } from "motion/react";

interface ProductTabsProps {
    description: string;
    specifications: { label: string; value: string }[];
    shipping: string;
}

export function ProductTabs({ description, specifications, shipping }: ProductTabsProps) {
    return (
        <div className="mt-12 md:mt-16">
            <Tabs defaultValue="description" className="w-full">
                <TabsList className="justify-start gap-8 bg-transparent p-0 border-border border-b rounded-none w-full h-auto">
                    <TabsTrigger
                        value="description"
                        className="data-[state=active]:bg-transparent px-0 pb-4 border-transparent data-[state=active]:border-primary border-b-2 rounded-none font-semibold text-base transition-all"
                    >
                        Description
                    </TabsTrigger>
                    <TabsTrigger
                        value="specifications"
                        className="data-[state=active]:bg-transparent px-0 pb-4 border-transparent data-[state=active]:border-primary border-b-2 rounded-none font-semibold text-base transition-all"
                    >
                        Specifications
                    </TabsTrigger>
                    <TabsTrigger
                        value="shipping"
                        className="data-[state=active]:bg-transparent px-0 pb-4 border-transparent data-[state=active]:border-primary border-b-2 rounded-none font-semibold text-base transition-all"
                    >
                        Shipping
                    </TabsTrigger>
                </TabsList>
                <div className="py-8">
                    <TabsContent value="description" className="mt-0 outline-none">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-3xl text-muted-foreground text-lg leading-relaxed"
                        >
                            {description}
                        </motion.div>
                    </TabsContent>
                    <TabsContent value="specifications" className="mt-0 outline-none">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-2xl"
                        >
                            <dl className="border-border border-y divide-y divide-border">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="flex justify-between py-4">
                                        <dt className="font-medium text-foreground">{spec.label}</dt>
                                        <dd className="text-muted-foreground">{spec.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </motion.div>
                    </TabsContent>
                    <TabsContent value="shipping" className="mt-0 outline-none">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-3xl text-muted-foreground text-lg leading-relaxed"
                        >
                            {shipping}
                        </motion.div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}
