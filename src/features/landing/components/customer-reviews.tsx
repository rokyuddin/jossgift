"use client";

import { Section } from '@/components/molecules/section';
import { SectionHeading } from '@/components/molecules/section-heading';
import { ReviewCard } from './review-card';
import { Container } from '@/components/molecules/container';
import { InfiniteSlider } from '@/components/atoms/infinite-slider';

const reviews = [
    {
        name: 'Anika Rahman',
        text: 'I sent the Midnight Elegance box to my sister for her birthday. She was so surprised! The packaging was absolutely premium.',
        occasion: 'Birthday Gift',
    },
    {
        name: 'Tanvir Ahmed',
        text: 'Best corporate gifts we have ever used. Our clients were truly impressed by the quality of the chocolate and the presentation.',
        occasion: 'Corporate Event',
    },
    {
        name: 'Sara Karim',
        text: 'The anniversary box was a hit! It really is a story with chocolate. Every detail was perfect.',
        occasion: 'Anniversary',
    },
    {
        name: 'Raisul Islam',
        text: 'Ordered from abroad for my parents in Dhaka. The delivery was smooth and the message card was so beautiful.',
        occasion: 'Parents Anniversary',
    },
    {
        name: 'Farhana Yeasmin',
        text: 'Finally a premium chocolate brand in BD that matches international standards. Loved the packaging!',
        occasion: 'Just Because',
    },
    {
        name: 'Ishraq Hossain',
        text: 'The distinct cocoa depth in the dark chocolate collection is unmatched. A true connoisseur\'s choice.',
        occasion: 'Personal Treat',
    },
];

export function CustomerReviews() {
    return (
        <Section variant="muted" className="relative py-24 overflow-hidden">
            {/* Ambient Background */}
            <div className="top-1/2 left-1/2 -z-10 absolute bg-primary/5 blur-[120px] rounded-full w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <Container className='relative'>
                <SectionHeading
                    title="Hearts Touched by JossGift"
                    subtitle="Stories of love, gratitude, and celebration shared by our wonderful community."
                    className="mb-12 md:mb-16"
                />

                <div className="relative h-[600px] mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-3 h-full">
                        {/* Column 1 - Upwards */}
                        <div className="h-full overflow-hidden">
                            <InfiniteSlider direction='vertical' speed={40} gap={24}>
                                {reviews.map((review, index) => (
                                    <ReviewCard key={`col1-${index}`} {...review} className="w-full" />
                                ))}
                            </InfiniteSlider>
                        </div>

                        {/* Column 2 - Downwards (Hidden on mobile) */}
                        <div className="hidden md:block h-full overflow-hidden">
                            <InfiniteSlider direction='vertical' reverse speed={55} gap={24}>
                                {[...reviews].reverse().map((review, index) => (
                                    <ReviewCard key={`col2-${index}`} {...review} className="w-full" />
                                ))}
                            </InfiniteSlider>
                        </div>
                        <div className="hidden md:block h-full overflow-hidden">
                            <InfiniteSlider direction='vertical' speed={40} gap={24}>
                                {[...reviews].reverse().map((review, index) => (
                                    <ReviewCard key={`col2-${index}`} {...review} className="w-full" />
                                ))}
                            </InfiniteSlider>
                        </div>
                    </div>
                </div>
            </Container >
        </Section >
    );
}
