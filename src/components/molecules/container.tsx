import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function Container({
    children,
    className,
    ...props
}: ContainerProps) {

    return (
        <div
            className={cn(
                'mx-auto px-4 md:px-6 container',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
