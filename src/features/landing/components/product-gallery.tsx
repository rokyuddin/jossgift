"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            <div className="relative bg-muted rounded-4xl aspect-square overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={images[activeImage]}
                            alt="Product Image"
                            fill
                            priority
                            className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex gap-4 pb-2 overflow-x-auto scrollbar-hide">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={cn(
                            "relative border-2 rounded-2xl w-20 md:w-24 aspect-square overflow-hidden active:scale-95 transition-all duration-300 transform",
                            activeImage === index
                                ? "border-primary ring-2 ring-primary/20"
                                : "border-transparent grayscale hover:grayscale-0"
                        )}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
