---
version: alpha
name: Accio Scaffold
description: A neutral starter design system that Canvas replaces for new visual builds.
colors:
  primary: "#1F2937"
  surface: "#FFFFFF"
  surface-muted: "#F3F4F6"
  on-surface: "#111827"
  on-primary: "#FFFFFF"
typography:
  headline-lg:
    fontFamily: "system-ui, sans-serif"
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  body-md:
    fontFamily: "system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  label-md:
    fontFamily: "system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  md: 0.5rem
  full: 9999px
spacing:
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 2rem
  xl: 4rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 0.75rem
    height: 2.75rem
  surface-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 1rem
---

# Accio Scaffold Design System

## Overview

This neutral scaffold exists only as a valid Google-format starting point. For a new or materially changed visual build, canvas-designer replaces it with a project-specific visual identity before UI implementation.

## Colors

Use neutral surfaces and dark text for clear hierarchy. Reserve the primary color for the most important actions.

## Typography

Use the system font stack with a compact three-level hierarchy for headings, body copy, and labels.

## Layout

Use a mobile-first fluid layout, a consistent spacing rhythm, safe viewport padding, and a readable maximum content width on larger screens.

## Elevation & Depth

Express hierarchy with tonal surface changes and borders. Use shadows only when a project-specific design explicitly requires them.

## Shapes

Use restrained corner rounding for controls and containers. Reserve full rounding for circular controls and pills.

## Components

Primary buttons use strong contrast and a minimum 44px height. Cards use the surface token, readable text, and consistent internal spacing.

## Do's and Don'ts

- Do maintain at least 4.5:1 contrast for normal text.
- Do keep interactive touch targets at least 44x44 CSS pixels.
- Do replace this scaffold design for new visual work.
- Don't invent a second design system in implementation CSS.
