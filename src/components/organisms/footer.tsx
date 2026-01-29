"use client";

import Link from 'next/link';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Separator } from '@/components/atoms/separator';
import { StaggerItem, StaggerItemChild } from '../molecules/stagger-item';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Shop',
            links: [
                { label: 'All Products', href: '/products' },
                { label: 'Best Sellers', href: '#' },
                { label: 'Sets & Kits', href: '#' }
            ]
        },
        {
            title: 'Company',
            links: [
                { label: 'Our Story', href: '#' },
                { label: 'Ingredients', href: '#' },
                { label: 'Sustainability', href: '#' }
            ]
        },
        {
            title: 'Support',
            links: [
                { label: 'Shipping', href: '#' },
                { label: 'Returns', href: '/refund-policy' },
                { label: 'FAQ', href: '#' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
                { label: 'Cookie Policy', href: '/cookie-policy' }
            ]
        }
    ];

    return (
        <footer className="px-4 md:px-8 pt-8 pb-12 w-full">
            <div
                className="bg-card mx-auto p-8 md:p-16 border border-border/50 rounded-4xl max-w-7xl overflow-hidden"
            >
                <div className="gap-12 lg:gap-8 grid grid-cols-1 lg:grid-cols-12">
                    {/* Newsletter Section */}
                    <div className="space-y-8 lg:col-span-6">
                        <StaggerItem className="space-y-4">
                            <StaggerItemChild as='h2' direction='left' className="-ml-0.5 font-bold text-foreground text-2xl tracking-tight">
                                JossGift
                            </StaggerItemChild>
                            <StaggerItemChild as='p' direction='left' className="max-w-md text-muted-foreground/80 leading-relaxed">
                                Join the inner circle for exclusive access to new formulations, expert skin advice, and community events.
                            </StaggerItemChild>
                        </StaggerItem>

                        <StaggerItem className="space-y-4">
                            <StaggerItemChild as='div' direction='left' className="flex sm:flex-row flex-col gap-3 max-w-md">
                                <Input
                                    placeholder="Enter your email"
                                    className="bg-background/50 border-border/50 rounded-xl focus-visible:ring-primary/20 h-12"
                                />
                                <Button className="bg-foreground hover:bg-foreground/90 px-8 rounded-xl h-12 font-medium text-background active:scale-95 transition-all">
                                    Join
                                </Button>
                            </StaggerItemChild>
                            <StaggerItemChild as='p' direction='left' className="text-muted-foreground/60 text-sm italic">
                                10% off your first order.
                            </StaggerItemChild>
                        </StaggerItem>
                    </div>

                    {/* Navigation Links */}
                    <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 lg:col-span-6">
                        {footerSections.map((section) => (
                            <StaggerItem key={section.title} className="space-y-6">
                                <StaggerItemChild direction='left' as='h4' className="font-semibold text-foreground/40 text-sm uppercase tracking-wider">
                                    {section.title}
                                </StaggerItemChild>
                                <StaggerItemChild direction='left' as='ul' className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </StaggerItemChild>
                            </StaggerItem>
                        ))}
                    </div>
                </div>

                <StaggerItem className="space-y-8 mt-24">
                    <StaggerItemChild direction='left'>
                        <Separator className="bg-border/30" />
                    </StaggerItemChild>

                    <StaggerItemChild direction='left' as='div' className="flex md:flex-row flex-col justify-between items-center gap-8">
                        <p className="text-muted-foreground/50 text-sm">
                            © {currentYear} JossGift. All rights reserved.
                        </p>

                        <div className="flex items-center gap-3">
                            {[
                                { Icon: Twitter, href: '#' },
                                { Icon: Instagram, href: '#' },
                                { Icon: Youtube, href: '#' }
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="flex justify-center items-center hover:bg-muted/30 border border-border/50 rounded-full w-10 h-10 text-muted-foreground hover:text-foreground transition-all duration-200"
                                >
                                    <social.Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </StaggerItemChild>
                </StaggerItem>
            </div>
        </footer>
    );
}

