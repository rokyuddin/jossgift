"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { NAV_LINKS } from '@/lib/constants';
import { Container } from '../molecules/container';
import { usePathname } from 'next/navigation';
import { useCartStore } from '@/store/use-cart-store';
import { useWishlistStore } from '@/store/use-wishlist-store';
import { BadgeCount } from '../molecules/badge-count';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const cartItems = useCartStore(state => state.items)
    const wishlistItems = useWishlistStore(state => state.items)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActivePath = useCallback((path: string) => pathname === path, [pathname])

    return (
        <nav
            className={cn(
                'top-0 z-50 fixed inset-x-0 px-4 md:px-8 transition-all duration-500 ease-out',
                isScrolled ? 'py-3 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' : 'py-6 bg-background'
            )}
        >
            <Container className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/" onNavigate={(e) => {
                    if (pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }} className="group z-50 relative flex items-center gap-4">
                    <div className="flex justify-center items-center bg-primary shadow-sm rounded-xl w-10 h-10 font-bold text-primary-foreground text-lg group-hover:scale-105 transition-transform">
                        J
                    </div>
                    <span className={cn(
                        'font-bold text-2xl tracking-tight transition-colors',
                        isScrolled ? 'text-foreground' : 'text-primary'
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
                            onNavigate={(e) => {
                                if (pathname === item.href) {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                            className={cn(
                                'font-medium hover:text-accent text-sm transition-colors',
                                isScrolled ? 'text-foreground/80' : 'text-primary'
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <Link href="/wishlist">
                        <BadgeCount count={wishlistItems.length}>
                            <Heart className="size-5" />
                        </BadgeCount>
                    </Link>
                    <Link href={"/checkout"}>
                        <BadgeCount count={cartItems.length}>
                            <ShoppingBag className="size-5" />
                        </BadgeCount>
                    </Link>
                    <Button
                        size={'lg'}
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
            </Container>

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
                {NAV_LINKS.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                            if (pathname === item.href) {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                            setMobileMenuOpen(false);
                        }}
                        className="font-semibold text-foreground hover:text-primary text-2xl transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
                <Button className="mt-8 rounded-2xl w-full h-14 text-xl">
                    Shop Gifts
                </Button>
            </motion.div>
        </nav>
    );
}
