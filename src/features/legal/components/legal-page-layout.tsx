"use client";

import { InView } from '@/components/atoms/in-view';
import { Separator } from "@/components/atoms/separator";
import { Section } from '@/components/molecules/section';

interface LegalPageLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
    return (
        <Section className='py-20 md:py-32'>
            <div className="mx-auto max-w-4xl">
                <InView stagger className="space-y-8">
                    <div className="space-y-4">
                        <InView.Item as="h1" className="font-bold text-foreground text-4xl md:text-5xl tracking-tight">
                            {title}
                        </InView.Item>
                        <InView.Item as="p" className="text-muted-foreground">
                            Last Updated: {lastUpdated}
                        </InView.Item>
                    </div>

                    <InView.Item>
                        <Separator className="bg-border/50" />
                    </InView.Item>

                    <div className="space-y-12 py-8 max-w-none">
                        {children}
                    </div>
                </InView>
            </div>
        </Section>
    );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <InView.Item className="space-y-4">
            <h2 className="font-semibold text-foreground text-2xl tracking-tight">{title}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
                {children}
            </div>
        </InView.Item>
    );
}
