"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { NAV_LINKS } from '@/lib/constants';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'top-0 right-0 left-0 z-50 fixed px-4 md:px-8 transition-all duration-500 ease-out',
                isScrolled ? 'py-3 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' : 'py-6 bg-transparent'
            )}
        >
            <div className="flex justify-between items-center mx-auto max-w-7xl">
                {/* Logo */}
                <Link href="/" className="group z-50 relative flex items-center gap-4">
                    <div className="flex justify-center items-center bg-primary shadow-sm rounded-xl w-10 h-10 font-bold text-primary-foreground text-lg group-hover:scale-105 transition-transform">
                        J
                    </div>
                    <span className={cn(
                        'font-bold text-2xl tracking-tight transition-colors',
                        isScrolled ? 'text-foreground' : 'text-primary-foreground'
                    )}>
                        JossGift
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                'font-medium hover:text-accent text-sm transition-colors',
                                isScrolled ? 'text-foreground/80' : 'text-primary-foreground/80 hover:text-primary-foreground'
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <Link href="/wishlist">
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                'rounded-full',
                                isScrolled ? 'text-foreground' : 'text-primary-foreground hover:bg-primary-foreground/10'
                            )}
                        >
                            <Heart className="w-5 h-5" />
                        </Button>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                            'rounded-full',
                            isScrolled ? 'text-foreground' : 'text-primary-foreground hover:bg-primary-foreground/10'
                        )}
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </Button>
                    <Button
                        className={cn(
                            'hidden md:flex shadow-lg px-6 rounded-xl h-10',
                            !isScrolled && 'bg-accent text-accent-foreground hover:bg-accent/90 border-none'
                        )}
                    >
                        Shop Gifts
                    </Button>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={cn(
                            'md:hidden z-50 relative p-2',
                            (isScrolled || mobileMenuOpen) ? 'text-foreground' : 'text-primary-foreground'
                        )}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={cn(
                    'md:hidden absolute inset-0 flex flex-col justify-center items-center gap-8 bg-background p-8 pt-24 h-screen text-center transition-all duration-500 ease-out',
                    !mobileMenuOpen && 'pointer-events-none'
                )}
            >
                {['Home', 'Shop', 'Occasions', 'Corporate', 'Contact'].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-semibold text-foreground hover:text-primary text-2xl transition-colors"
                    >
                        {item}
                    </Link>
                ))}
                <Button className="mt-8 rounded-2xl w-full h-14 text-xl">
                    Shop Gifts
                </Button>
            </motion.div>
        </nav>
    );
}
