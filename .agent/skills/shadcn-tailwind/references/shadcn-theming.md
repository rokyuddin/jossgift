# shadcn/ui Theming & Customization

Theme configuration, CSS variables, dark mode, and component customization.

## Dark Mode Setup

### Next.js App Router

**1. Install next-themes:**
```bash
npm install next-themes
```

**2. Create theme provider:**
```tsx
// components/organisms/theme-provider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

**3. Wrap app:**
```tsx
// app/layout.tsx
import { ThemeProvider } from "@/components/organisms/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**4. Theme toggle component:**
```tsx
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/atoms/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

### Vite / Other Frameworks

Use similar approach with next-themes or implement custom solution:

```javascript
// Store preference
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
}

// Initialize on load
if (localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
}
```

## CSS Variable System

shadcn/ui uses CSS variables for theming. Variables defined in `globals.css`:

```css
@layer base {
:root {
  /* Warm cream background for luxury feel */
  --background: oklch(0.98 0.01 60);
  --foreground: oklch(0.25 0.02 40);

  /* Card with subtle warmth */
  --card: oklch(0.99 0.005 60);
  --card-foreground: oklch(0.25 0.02 40);

  --popover: oklch(0.99 0.005 60);
  --popover-foreground: oklch(0.25 0.02 40);

  /* Rich chocolate brown primary */
  --primary: oklch(0.35 0.06 40);
  --primary-foreground: oklch(0.98 0.01 60);

  /* Soft beige secondary */
  --secondary: oklch(0.92 0.015 60);
  --secondary-foreground: oklch(0.30 0.02 40);

  /* Muted warm tones */
  --muted: oklch(0.94 0.01 55);
  --muted-foreground: oklch(0.50 0.02 45);

  /* Gold accent */
  --accent: oklch(0.75 0.12 80);
  --accent-foreground: oklch(0.25 0.02 40);

  --destructive: oklch(0.577 0.245 27.325);

  /* Subtle borders */
  --border: oklch(0.88 0.01 55);
  --input: oklch(0.88 0.01 55);
  --ring: oklch(0.75 0.12 80);

  /* Chocolate-gold chart palette */
  --chart-1: oklch(0.75 0.12 80);
  --chart-2: oklch(0.65 0.10 70);
  --chart-3: oklch(0.55 0.08 60);
  --chart-4: oklch(0.45 0.06 50);
  --chart-5: oklch(0.35 0.06 40);

  --radius: 0.75rem;

  --sidebar: oklch(0.97 0.01 60);
  --sidebar-foreground: oklch(0.25 0.02 40);
  --sidebar-primary: oklch(0.35 0.06 40);
  --sidebar-primary-foreground: oklch(0.98 0.01 60);
  --sidebar-accent: oklch(0.92 0.015 60);
  --sidebar-accent-foreground: oklch(0.30 0.02 40);
  --sidebar-border: oklch(0.88 0.01 55);
  --sidebar-ring: oklch(0.75 0.12 80);
}

.dark {
  /* Deep chocolate background */
  --background: oklch(0.18 0.02 40);
  --foreground: oklch(0.95 0.01 60);

  /* Slightly lighter card */
  --card: oklch(0.22 0.02 40);
  --card-foreground: oklch(0.95 0.01 60);

  --popover: oklch(0.22 0.02 40);
  --popover-foreground: oklch(0.95 0.01 60);

  /* Bright gold primary for dark mode */
  --primary: oklch(0.78 0.14 85);
  --primary-foreground: oklch(0.20 0.02 40);

  /* Warm secondary */
  --secondary: oklch(0.30 0.03 45);
  --secondary-foreground: oklch(0.95 0.01 60);

  --muted: oklch(0.28 0.02 42);
  --muted-foreground: oklch(0.65 0.02 55);

  /* Gold accent */
  --accent: oklch(0.75 0.12 80);
  --accent-foreground: oklch(0.95 0.01 60);

  --destructive: oklch(0.704 0.191 22.216);

  --border: oklch(0.35 0.02 42);
  --input: oklch(0.35 0.02 42);
  --ring: oklch(0.75 0.12 80);

  /* Dark mode chart palette */
  --chart-1: oklch(0.78 0.14 85);
  --chart-2: oklch(0.68 0.12 75);
  --chart-3: oklch(0.58 0.10 65);
  --chart-4: oklch(0.48 0.08 55);
  --chart-5: oklch(0.38 0.06 45);

  --sidebar: oklch(0.22 0.02 40);
  --sidebar-foreground: oklch(0.95 0.01 60);
  --sidebar-primary: oklch(0.78 0.14 85);
  --sidebar-primary-foreground: oklch(0.20 0.02 40);
  --sidebar-accent: oklch(0.30 0.03 45);
  --sidebar-accent-foreground: oklch(0.95 0.01 60);
  --sidebar-border: oklch(0.35 0.02 42);
  --sidebar-ring: oklch(0.75 0.12 80);
}
}
```

### Color Format

Values use OKLCH format without `oklch()` wrapper for better opacity control:
```css
--primary: 222.2 47.4% 11.2%;  /* H S L */
```

Usage in Tailwind:
```css
background: oklch(var(--primary));
background: oklch(var(--primary) / 0.5);  /* 50% opacity */
```

## Component Customization

Components live in your codebase - modify directly.

### Customize Variants

```tsx
// components/atoms/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background",
        // Add custom variant
        gradient: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        // Add custom size
        xl: "h-14 rounded-md px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

Usage:
```tsx
<Button variant="gradient" size="xl">Custom Button</Button>
```

### Customize Styles

Modify base styles in component:

```tsx
// components/atoms/card.tsx
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-lg",  // Modified
      className
    )}
    {...props}
  />
))
```

### Override with className

Pass additional classes to override:

```tsx
<Card className="border-2 border-purple-500 shadow-2xl hover:scale-105 transition-transform">
  Custom styled card
</Card>
```

## Base Color Presets

shadcn/ui provides base color presets during `init`:

- **Slate**: Cool gray tones
- **Gray**: Neutral gray
- **Zinc**: Warm gray
- **Neutral**: Balanced gray
- **Stone**: Earthy gray

Select during setup or change later by updating CSS variables.

## Style Variants

Two component styles available:

- **Default**: Softer, more rounded
- **New York**: Sharp, more contrast

Select during `init` or in `components.json`:

```json
{
  "style": "new-york",
  "tailwind": {
    "cssVariables": true
  }
}
```

## Radius Customization

Control border radius globally:

```css
:root {
  --radius: 0.5rem;  /* Default */
  --radius: 0rem;    /* Sharp corners */
  --radius: 1rem;    /* Rounded */
}
```

Components use radius variable:
```tsx
className="rounded-lg"  /* Uses var(--radius) */
```

## Best Practices

1. **Use CSS Variables**: Enables runtime theme switching
2. **Consistent Foreground Colors**: Pair each color with appropriate foreground
3. **Test Both Themes**: Verify components in light and dark modes
4. **Semantic Naming**: Use `destructive` not `red`, `muted` not `gray`
5. **Accessibility**: Maintain sufficient color contrast (WCAG AA minimum)
6. **Component Overrides**: Use `className` prop for one-off customization
7. **Extract Patterns**: Create custom variants for repeated customizations
