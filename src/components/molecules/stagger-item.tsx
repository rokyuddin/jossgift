"use client";

import { motion, Variants, HTMLMotionProps } from "motion/react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export function StaggerItem({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}



type Direction = "up" | "down" | "left" | "right";
type ElementTag = keyof React.JSX.IntrinsicElements;

const getOffset = (direction?: Direction) => {
    switch (direction) {
        case "up":
            return { y: 12 };
        case "down":
            return { y: -12 };
        case "left":
            return { x: 12 };
        case "right":
            return { x: -12 };
        default:
            return {};
    }
};

type StaggerItemChildProps<T extends ElementTag = "div"> = {
    as?: T;
    direction?: Direction;
    className?: string;
    children: React.ReactNode;
} & HTMLMotionProps<any>;

export function StaggerItemChild<T extends ElementTag = "div">({
    as,
    direction = "up",
    className,
    children,
    ...props
}: StaggerItemChildProps<T>) {
    const MotionComponent = motion.create((as as any) ?? "div");

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...getOffset(direction),
        },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.45,
                ease: "easeOut",
            },
        },
    };

    return (
        <MotionComponent
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}