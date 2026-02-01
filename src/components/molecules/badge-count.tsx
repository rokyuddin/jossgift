
export function BadgeCount({ children, count }: { children: React.ReactNode, count: number }) {
    return (
        <div className="inline-block relative">
            {/* Main badge container */}
            <div className="flex justify-center items-center aria-expanded:bg-muted hover:bg-muted dark:hover:bg-muted/50 rounded-full size-9 aria-expanded:text-foreground hover:text-foreground transition-colors cursor-pointer">
                {children}
            </div>

            {/* Notification counter badge */}
            <div className="-top-1 -right-1 absolute flex justify-center items-center bg-primary border-2 border-border rounded-full w-5 h-5 font-semibold text-primary-foreground text-xs">
                {count}
            </div>
        </div>
    )
}
