'use client';
import { useRef, useMemo } from 'react';
import {
  motion,
  useInView,
  Variant,
  Transition,
  UseInViewOptions,
  HTMLMotionProps,
  Variants
} from 'motion/react';

// ============================================================================
// TYPES
// ============================================================================

type Direction = 'up' | 'down' | 'left' | 'right';

export type InViewProps = {
  children: React.ReactNode;
  /** Custom animation variants (overrides preset) */
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  /** Custom transition timing */
  transition?: Transition;
  /** Intersection observer options */
  viewOptions?: UseInViewOptions;
  /** HTML element to render as */
  as?: React.ElementType;
  /** Only animate once */
  once?: boolean;
  /** Animation direction preset */
  direction?: Direction;
  /** Enable stagger for children (requires children to be motion components with variants) */
  stagger?: boolean;
  /** Stagger delay between children in seconds */
  staggerDelay?: number;
  /** Initial delay before animation starts */
  delayChildren?: number;
} & Omit<HTMLMotionProps<any>, 'variants' | 'transition'>;

// ============================================================================
// MOTION PRESETS (Following Motion Guidelines)
// ============================================================================

/**
 * Get offset based on direction
 * Vertical: max 8px (within 8-12px range)
 * Horizontal: max 12px (within acceptable range)
 */
const getOffset = (direction: Direction = 'up') => {
  switch (direction) {
    case 'up':
      return { y: 8 };
    case 'down':
      return { y: -8 };
    case 'left':
      return { x: 12 };
    case 'right':
      return { x: -12 };
    default:
      return { y: 8 };
  }
};

/**
 * Default variants following motion guidelines:
 * - Duration: 0.3s - 0.6s (using 0.4s)
 * - Easing: ease-out
 * - Distance: max 8-12px
 * - Opacity: 0 → 1 only
 */
const createDefaultVariants = (direction: Direction = 'up'): Variants => ({
  hidden: {
    opacity: 0,
    ...getOffset(direction)
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0
  },
});

/**
 * Default transition following motion guidelines
 */
const defaultTransition: Transition = {
  duration: 0.4,
  ease: 'easeOut',
};

/**
 * Stagger container variants
 * Stagger: 60-100ms (using 80ms for smooth reveals)
 */
const createStaggerVariants = (
  staggerDelay: number = 0.08,
  delayChildren: number = 0.1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    },
  },
});

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * InView - Universal animation component for scroll-triggered reveals
 * 
 * @example
 * // Simple fade-up reveal
 * <InView>
 *   <div>Content</div>
 * </InView>
 * 
 * @example
 * // Stagger children animation
 * <InView stagger staggerDelay={0.1}>
 *   <InView.Item><Card /></InView.Item>
 *   <InView.Item><Card /></InView.Item>
 * </InView>
 * 
 * @example
 * // Custom direction
 * <InView direction="left">
 *   <div>Slides from left</div>
 * </InView>
 */
export function InView({
  children,
  variants,
  transition,
  viewOptions,
  as = 'div',
  once = true,
  direction = 'up',
  stagger = false,
  staggerDelay = 0.08,
  delayChildren = 0.1,
  ...props
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: viewOptions?.margin ?? '-50px',
    amount: viewOptions?.amount ?? 0.2
  });

  const MotionComponent = useMemo(() => {
    if (typeof as === 'string' && as in motion) {
      return motion[as as keyof typeof motion] as typeof motion.div;
    }
    return motion.create(as as any);
  }, [as]);

  // Determine which variants to use
  const finalVariants = variants
    ? variants
    : stagger
      ? createStaggerVariants(staggerDelay, delayChildren)
      : createDefaultVariants(direction);

  // Determine transition
  const finalTransition = transition || (stagger ? undefined : defaultTransition);

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={finalVariants}
      transition={finalTransition}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

// ============================================================================
// CHILD COMPONENT (for stagger patterns)
// ============================================================================

type InViewItemProps = {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
  as?: React.ElementType;
} & HTMLMotionProps<any>;

/**
 * InView.Item - Child component for stagger animations
 * Must be used inside InView with stagger={true}
 */
InView.Item = function InViewItem({
  children,
  direction = 'up',
  className,
  as = 'div',
  ...props
}: InViewItemProps) {
  const MotionComponent = useMemo(() => {
    if (typeof as === 'string' && as in motion) {
      return motion[as as keyof typeof motion] as typeof motion.div;
    }
    return motion.create(as as any);
  }, [as]);

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getOffset(direction),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <MotionComponent
      variants={itemVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
