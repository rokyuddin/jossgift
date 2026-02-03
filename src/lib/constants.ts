import { Facebook, Instagram, Youtube } from "lucide-react";

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Shop' },
    { href: '/#occasions', label: 'Occasions' },
    { href: '/#corporate', label: 'Corporate' },
    { href: '/contact', label: 'Contact' },
];

const FOOTER_LINKS = [
    {
        title: 'Shop',
        links: [
            { label: 'All Products', href: '/products' },
            { label: 'Best Sellers', href: '#best-sellers' },
            { label: 'Corporate', href: '/corporate' },
            { label: 'Occasions', href: '/occasions' },
        ]
    },
    {
        title: 'Company',
        links: [
            { label: 'Our Story', href: '/about' },
            { label: 'Ingredients', href: '#' },
            { label: 'Sustainability', href: '#' }
        ]
    },
    {
        title: 'Support',
        links: [
            { label: 'Contact', href: '/contact' },
            { label: 'Shipping', href: '/shipping' },
            { label: 'Returns', href: '/returns' },
            { label: 'FAQ', href: '/faq' }
        ]
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms-of-service' },
            { label: 'Refund Policy', href: '/refund-policy' },
            { label: 'Cookie Policy', href: '/cookie-policy' }
        ]
    }
];


const SOCIAL_LINKS = [
    { Icon: Facebook, href: 'https://www.facebook.com/jossgifts' },
    { Icon: Instagram, href: 'https://www.instagram.com/jossgifts' },
    { Icon: Youtube, href: 'https://www.youtube.com/@jossgifts' }
];

export {
    NAV_LINKS,
    FOOTER_LINKS,
    SOCIAL_LINKS
}