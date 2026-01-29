import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'muted' | 'card';
}

export function Section({
    children,
    className,
    variant = 'default',
    ...props
}: SectionProps) {
    const variants = {
        default: 'bg-background',
        muted: 'bg-muted/30',
        card: 'bg-card',
    };

    return (
        <section
            className={cn(
                'relative py-16 md:py-24 overflow-hidden',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
