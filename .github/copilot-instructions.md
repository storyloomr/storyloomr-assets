# Storyloomr Assets Repository - AI Coding Instructions

## Repository Purpose

This is the canonical brand assets repository for Storyloomr, serving as the single source of truth for all visual design elements, brand media, and design tokens used across the Storyloomr ecosystem.

## Repository Architecture

### Asset Organization

-   **`/logo/`** - Primary brand logos and wordmarks (SVG source + PNG exports)
-   **`/icons/`** - App icons, favicons, PWA icons (includes legacy `/icons/brand/`)
-   **`/og/`** - Open Graph and social media images (1200×630 standard)
-   **`/screenshots/`** - Application screenshots organized by product (fe-reader, fe-editor, fe-admin)
-   **`/palette/`** - Color definitions with WCAG compliance documentation
-   **`/typography/`** - Font specifications, scales, and licensing information
-   **`/tokens/`** - Design tokens with Style Dictionary build system
-   **`/guidelines/`** - Brand usage guidelines and visual examples
-   **`/press/`** - Press kit materials and media resources
-   **`/examples/`** - Copy-ready embedding examples for other repositories

## Design Token System

### Build Process

Uses Style Dictionary to transform design tokens from JSON to platform-specific formats:

```bash
npm run build:tokens  # Generates CSS, iOS Swift, Android XML
```

### Token Structure

-   **Base tokens**: `tokens/tokens.json` (colors, spacing, typography, shadows)
-   **Theme variants**: `tokens.light.json`, `tokens.dark.json`
-   **Generated outputs**: `tokens/build/` (git-ignored, build artifacts)

### Primary Brand Color

`#6155F5` - Purple, used consistently across all brand assets

## Asset Referencing Pattern

### GitHub Raw URLs

Assets are consumed via GitHub's raw content URLs:

-   **Latest**: `https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/[path]`
-   **Pinned**: `https://raw.githubusercontent.com/storyloomr/storyloomr-assets/assets-v1.0.0/[path]`

### Critical Integration Points

-   Logo embeds in documentation and web properties
-   Open Graph images for social sharing
-   Design tokens consumed by frontend applications
-   App icons for PWA and mobile applications

## File Naming Conventions

-   **Logos**: `storyloomr-logo-[variant]-[theme].svg`
-   **Icons**: `icon-[size].png` or `[purpose]-icon-[size].png`
-   **Social**: `[platform]-[type].png`
-   **Screenshots**: `[app]-[platform]-[size].png`

## Asset Quality Standards

-   **SVG first**: Vector graphics as source of truth
-   **WCAG compliance**: All color combinations tested for accessibility
-   **Responsive ready**: Assets work at multiple sizes (16px minimum for logos)
-   **Optimized**: Compressed for web delivery while maintaining quality

## Development Workflow

1. **Assets creation**: Design in SVG, export PNGs as needed
2. **Token updates**: Modify JSON, run build process
3. **Documentation**: Update READMEs, examples, and guidelines
4. **Release process**: Tag versions, update CHANGELOG.md
5. **Integration**: Other repos reference via raw URLs

## Legacy Migration

Existing assets in `/icons/brand/` are being migrated to the new structure. During transition:

-   Maintain backward compatibility for existing integrations
-   Document deprecated paths in CHANGELOG.md
-   Provide migration guides for consuming applications

## Contribution Guidelines

-   **Brand assets**: Require design team review
-   **Design tokens**: Require engineering lead approval
-   **Breaking changes**: Need architecture team review
-   **Quality checks**: Verify accessibility, optimize file sizes, test at scale

## Key Dependencies

-   **Style Dictionary**: Design token build system
-   **GitHub raw URLs**: Asset delivery mechanism
-   **Semantic versioning**: Release tagging (`assets-v1.0.0`)

This repository enables consistent brand presentation across all Storyloomr touchpoints while providing a scalable system for design token management and asset distribution.
