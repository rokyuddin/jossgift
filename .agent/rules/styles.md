---
trigger: always_on
---

---

# Style UI Rules

**(shadcn/ui + Tailwind v4 + Custom Theme)**

---

## 1. Core Philosophy

Antigravity UI must feel:

* **Premium, calm, intentional**
* **Emotion-first, not utility-first**
* **Consistent across light & dark**
* **Motion-supported, never noisy**

> ❌ Avoid “Tailwind soup”
> ✅ Compose components, then enhance with utilities

---

## 2. Design Tokens Are the Source of Truth

### ✅ DO

* Always use **theme variables** (`bg-background`, `text-foreground`, `bg-card`)
* Trust the OKLCH palette for contrast & harmony
* Let shadcn components inherit styles naturally

### ❌ DON’T

* Hardcode colors (`bg-white`, `text-black`, `#fff`)
* Use arbitrary colors unless absolutely required
* Override CSS variables inside components

**Correct**

```tsx
<div className="bg-card text-card-foreground border border-border" />
```

**Wrong**

```tsx
<div className="bg-white text-black border-gray-200" />
```

---

## 3. shadcn/ui Usage Rules

### 3.1 Component First, Utility Second

* Use shadcn components as **base building blocks**
* Extend via `className`, not rewrites
* Never fork a component unless design truly diverges

```tsx
<Button className="h-12 px-6 rounded-xl">
  Continue
</Button>
```

---

### 3.2 Variants Over Conditionals

* Use `variant` + `size` instead of condition-heavy Tailwind
* If a new visual style appears more than twice → **add a variant**

```tsx
<Button variant="secondary" size="lg" />
```

---

### 3.3 Radius Discipline

Your theme defines a **luxury radius scale**.

| Usage           | Radius        |
| --------------- | ------------- |
| Buttons         | `rounded-xl`  |
| Cards           | `rounded-2xl` |
| Modals          | `rounded-3xl` |
| Hero containers | `rounded-4xl` |

❌ No `rounded-sm` in Antigravity.

---

## 4. Tailwind v4 Rules

### 4.1 Utility Scope Rule

Use Tailwind utilities for:

* Spacing
* Layout
* Typography alignment
* Responsive behavior

Avoid using utilities for:

* Colors
* Shadows (unless defined)
* Borders outside the system

---

### 4.2 Spacing System (Strict)

Use **multiples of 4** only.

✅ Allowed:

```
p-4, p-6, p-8
gap-4, gap-6
space-y-6
```

❌ Avoid:

```
p-3, p-5, gap-7
```

Luxury UI breathes.

---

### 4.3 Typography Rules

* Headings must always use **visual hierarchy**
* Never rely on default browser sizes

Example:

```tsx
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
```

Body text:

```tsx
<p className="text-muted-foreground leading-relaxed">
```

---

## 5. Light & Dark Mode Discipline

### ✅ Rules

* Design **dark mode first**, light mode second
* No mode-specific hacks unless required
* Contrast must feel soft, not harsh

### ❌ Anti-pattern

```tsx
dark:bg-black dark:text-white
```

### ✅ Correct

```tsx
bg-background text-foreground
```

Your theme already handles it.

---

## 6. Motion Rules (motion.dev)

Motion is **emotional glue**, not decoration.

### Use motion for:

* Page entry
* Card hover
* Section reveal
* CTA emphasis

### Never use motion for:

* Continuous loops
* Fast bouncing
* Attention stealing

Example rule:

* Duration: `0.3s – 0.6s`
* Ease: `ease-out`
* Distance: `≤ 12px`

---

## 7. Forms & Inputs Rules

* Always use shadcn `Input`, `Textarea`, `Select`
* Inputs must feel **soft & touch-friendly**

Minimum rules:

```tsx
className="h-12 rounded-xl"
```

Error states:

* Use `destructive`
* Never use bright red borders everywhere

---

## 8. Shadows & Elevation

Antigravity uses **depth sparingly**.

| Element | Shadow            |
| ------- | ----------------- |
| Cards   | soft, subtle      |
| Modals  | medium            |
| Buttons | none / hover only |

❌ Avoid heavy shadows
❌ Avoid neumorphism

---

## 9. Accessibility (Non-Negotiable)

* All buttons must be reachable via keyboard
* Focus ring must remain visible
* Color contrast must pass WCAG AA

Your `outline-ring/50` rule is correct — don’t remove it.

---

## 10. Anti-Patterns (Strictly Forbidden)

* Mixing MUI / Chakra styles
* Inline styles for layout
* Random Tailwind colors
* Inconsistent radius
* Over-animated UI
* Copy-pasting Tailwind blocks without abstraction

---

## 11. Mental Model to Follow

> **Design tokens → shadcn component → Tailwind refinement → Motion polish**

If you skip a step, the UI will feel cheap.

---