# Storyloomr Assets

The canonical repository for Storyloomr brand assets, design tokens, and visual resources. This is the single source of truth for all brand media used across Storyloomr projects.

## Repository Structure

```text
├── logo/                # Primary brand logos and wordmarks
├── icons/               # App icons, favicons, and UI glyphs
├── og/                  # Open Graph and social media images
├── screenshots/         # Application screenshots and demos
├── palette/             # Color definitions and contrast guides
├── typography/          # Type scales, weights, and specifications
├── tokens/              # Design tokens and build system
├── guidelines/          # Brand usage guidelines and examples
├── press/               # Press kit and media resources
└── examples/            # Copy-ready embedding examples
```

## Using Assets from Other Repositories

### Raw GitHub URLs

Reference assets directly using GitHub's raw content URLs:

```markdown
<!-- Latest version (main branch) -->

![Storyloomr Logo](https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/logo/storyloomr-logo-hz-dark.svg)

<!-- Pinned version (recommended for production) -->

![Storyloomr Logo](https://raw.githubusercontent.com/storyloomr/storyloomr-assets/assets-v1.0.0/logo/storyloomr-logo-hz-dark.svg)
```

### Version Pinning Strategy

- **Development/docs**: Use `main` branch for latest assets
- **Production**: Pin to specific release tags (`assets-v1.0.0`)
- **Critical integrations**: Pin to exact commit SHA

## Quick Reference

### Logo Variants

- `logo/storyloomr-logo-primary.svg` - Main logo (SVG source)
- `logo/storyloomr-logo-hz-dark.svg` - Horizontal on dark backgrounds
- `logo/storyloomr-logo-hz-light.svg` - Horizontal on light backgrounds
- `logo/storyloomr-wordmark.svg` - Text-only version

### App Icons

- `icons/favicon.ico` - Browser favicon
- `icons/app-icon-512.png` - High-res app icon
- `icons/maskable-icon-512.png` - PWA maskable icon

### Social Media

- `og/og-image.png` - Open Graph image (1200×630)
- `og/twitter-card.png` - Twitter card image (1200×600)

## Design Tokens

Build design tokens for your platform:

```bash
npm run build:tokens
```

Generated outputs:

- `tokens/build/css/variables.css` - CSS custom properties
- `tokens/build/ios/colors.swift` - iOS color definitions
- `tokens/build/android/colors.xml` - Android color resources

## File Naming Conventions

- **Logos**: `storyloomr-logo-[variant]-[theme].svg`
- **Icons**: `icon-[size].png` or `[purpose]-icon-[size].png`
- **Social**: `[platform]-[type].png` (e.g., `og-image.png`)
- **Screenshots**: `[app]-[platform]-[variant].png`

## Accessibility Guidelines

- **Alt text**: Keep concise and descriptive, avoid "image of..."
- **Contrast**: All color pairs meet WCAG AA standards (see `palette/contrast.md`)
- **Scalability**: SVG logos maintain legibility at 16px minimum

## Contributing

### Adding New Assets

1. **Follow naming conventions** listed above
2. **Provide multiple formats**: SVG source + optimized PNGs
3. **Test scalability**: Ensure 16px minimum readability
4. **Update CHANGELOG.md** with additions
5. **Verify accessibility** using `palette/contrast.md` guidelines

### Asset Quality Standards

- **SVG optimization**: Remove unnecessary elements, minimize file size
- **PNG compression**: Use lossless compression for logos, near-lossless for screenshots
- **Consistent dimensions**: Follow established sizing patterns per category

### Release Process

1. Update `CHANGELOG.md` with changes
2. Run `npm run build:tokens` to regenerate token outputs
3. Test asset embeds using examples in `/examples/`
4. Create release tag: `git tag assets-v1.0.0`
5. Push tag: `git push origin assets-v1.0.0`

## Governance

### Reviewers

- Brand assets require review from design team
- Design tokens require review from engineering leads
- Press materials require marketing approval

### Approvers

- Major version changes require product owner approval
- Breaking changes to token structure require architecture review

## Support

For questions about asset usage or contributions, please:

1. Check `/examples/README-embeds.md` for common use cases
2. Review `/guidelines/brand-guidelines.md` for usage rules
3. Open an issue for new asset requests or modifications

---

**Version**: assets-v0.1.0  
**Last Updated**: September 2025
