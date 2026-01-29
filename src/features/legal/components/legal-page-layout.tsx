"use client";

import { StaggerItem, StaggerItemChild } from "@/components/molecules/stagger-item";
import { Separator } from "@/components/atoms/separator";

interface LegalPageLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
    return (
        <div className="px-4 md:px-8 py-20">
            <div className="mx-auto max-w-4xl">
                <StaggerItem className="space-y-8">
                    <div className="space-y-4">
                        <StaggerItemChild as="h1" className="font-bold text-foreground text-4xl md:text-5xl tracking-tight">
                            {title}
                        </StaggerItemChild>
                        <StaggerItemChild as="p" className="text-muted-foreground">
                            Last Updated: {lastUpdated}
                        </StaggerItemChild>
                    </div>

                    <StaggerItemChild>
                        <Separator className="bg-border/50" />
                    </StaggerItemChild>

                    <div className="space-y-12 py-8 max-w-none">
                        {children}
                    </div>
                </StaggerItem>
            </div>
        </div>
    );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <StaggerItemChild className="space-y-4">
            <h2 className="font-semibold text-foreground text-2xl tracking-tight">{title}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
                {children}
            </div>
        </StaggerItemChild>
    );
}
