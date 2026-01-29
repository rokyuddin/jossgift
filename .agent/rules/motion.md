---
trigger: always_on
---

# Motion Guidelines

**Scope:** shadcn/ui + Tailwind v4 + motion.dev
**Reference:** Motion for React documentation → [https://motion.dev/docs/react](https://motion.dev/docs/react)
**Philosophy:** Motion should feel *inevitable*, not decorative. Every animation must communicate intent, hierarchy, or feedback.

> Motion is part of the brand language. If removed, the UI should still work. If added incorrectly, it will cheapen the experience.

---

## 1. Global Motion Principles

### 1.1 Purpose-Driven Motion

Use motion only to:

* Guide attention
* Explain hierarchy
* Provide feedback
* Add emotional softness

Never use motion to:

* Entertain
* Distract
* Fill empty space

---

### 1.2 Timing & Easing (Strict)

| Property | Rule                                           |
| -------- | ---------------------------------------------- |
| Duration | 0.3s – 0.6s                                    |
| Easing   | `ease-out` (default), `ease-in-out` for modals |
| Distance | Max 8–12px                                     |
| Scale    | Max 0.98 → 1                                   |
| Opacity  | 0 → 1 only                                     |

❌ No bounce, spring, elastic, or overshoot

---

### 1.3 Motion Hierarchy

1. Page-level motion (lowest frequency)
2. Section-level reveal
3. Component interaction
4. Micro-feedback (hover, focus)

Never animate everything at once.

---

## 2. Page-Level Motion

### Usage

* Page entry
* Route transitions

### Rules

* Single fade + slight translateY
* Only on initial mount
* Never re-trigger on scroll

### Example Intent

"The page gently arrives, it does not appear abruptly."

---

## 3. Section Reveal Motion

### Usage

* Hero sections
* Feature blocks
* Content groups

### Rules

* Trigger once when entering viewport
* Stagger children (60–100ms)
* No horizontal movement

### Allowed Properties

* Opacity: 0 → 1
* TranslateY: 8px → 0

---

## 4. Button Motion

### Hover

* Subtle lift or opacity change
* Optional soft glow using theme ring color

### Tap / Press

* Scale down to 0.97
* Immediate response (<150ms)

### Disabled

* No animation

### Forbidden

* Bounce
* Color flashing

---

## 5. Card Motion

### Hover (Desktop Only)

* Slight translateY (-4px)
* Soft shadow increase
* Optional image zoom (1.02 max)

### Tap (Mobile)

* Scale 0.98

### Notes

* Cards must feel *solid*, not floaty

---

## 6. Image Motion

### Usage

* Product images
* Gallery items

### Rules

* Only zoom or fade
* Never rotate
* Never loop

### Example

* Image zooms slightly on hover
* Caption fades in

---

## 7. Modal & Drawer Motion

### Entry

* Fade + scale (0.96 → 1)
* Backdrop fade separately

### Exit

* Reverse of entry

### Rules

* Modal motion must feel heavier than cards
* Backdrop animation slower than content

---

## 8. Form & Input Motion

### Focus

* Ring fade-in
* Border color transition

### Error

* Single subtle shake OR color change (not both)

### Success

* Gentle color confirmation

❌ No continuous animation on inputs

---

## 9. Feedback & Status Motion

### Loading

* Skeletons preferred over spinners
* Pulse opacity only

### Success

* Fade-in confirmation

### Error

* Immediate, clear, minimal

---

## 10. Motion Consistency Rules

* Same interaction = same animation everywhere
* Do not invent new motion styles per page
* If unsure, remove motion

---

## 11. Motion Anti-Patterns (Strictly Forbidden)

* Infinite loops
* Auto-playing animations
* Large translate distances
* Multiple animations on one element
* Inconsistent easing
* Animating layout-critical elements

---

## 12. Motion Review Checklist

Before merging any UI:

* Does motion clarify intent?
* Is it subtle enough?
* Does it respect brand tone?
* Does it feel calm in dark mode?

If any answer is "no" → remove or simplify.

---