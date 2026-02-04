"use client";

import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselIndicator,
    CarouselItem,
    CarouselNavigation,
} from '@/components/atoms/carousel';
import { Container } from '@/components/molecules/container';
import { Section } from '@/components/molecules/section';

const HERO_IMAGES = [
    '/hero/1.webp',
    '/hero/2.webp',
    '/hero/3.webp'
];

export function Hero() {
    return (
        <Section className="relative flex justify-center items-center p-0 overflow-hidden">
            <Container className='relative'>
                <Carousel autoplay loop autoplayDelay={5000} className="w-full">
                    <CarouselContent>
                        {HERO_IMAGES.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="relative w-full h-[40svh]">
                                    <Image
                                        src={src}
                                        alt={`Hero image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Buttons - positioned above the image */}
                    <CarouselNavigation
                        className="top-1/2 left-0 absolute inset-0 flex justify-between items-center px-4 w-full -translate-y-1/2 pointer-events-none"
                        classNameButton="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white/40 text-white border-none rounded-full"
                    />

                    {/* Indicators */}
                    <CarouselIndicator className="bottom-8" />
                </Carousel>

                {/* Content Overlay (Commented out as per original) */}
                {/* <div className="z-10 absolute inset-0 flex justify-center items-center pointer-events-none">
                    <StaggerItem
                        className="flex flex-col items-center space-y-8 text-center pointer-events-auto"
                        viewport={{ once: true }}
                    >
                        ... content ...
                    </StaggerItem>
                </div> */}
            </Container>
        </Section>
    );
}
