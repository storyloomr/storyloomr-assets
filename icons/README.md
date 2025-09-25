# Icons

App icons, favicons, and UI glyphs for various platforms and contexts.

## File Structure

```text
icons/
├── favicon.ico                      # Browser favicon
├── app-icon-512.png                 # High-res app icon
├── maskable-icon-512.png            # PWA maskable icon
├── brand/                           # Existing brand assets (legacy)
│   ├── dark/
│   ├── light/
│   └── storyloomr-github-org.png
└── sizes/                          # Multiple size exports
    ├── icon-16.png
    ├── icon-32.png
    ├── icon-64.png
    ├── icon-128.png
    ├── icon-256.png
    └── icon-512.png
```

## Icon Types

### App Icons

- **favicon.ico**: Browser tab icon (16×16, 32×32, 64×64 embedded)
- **app-icon-512.png**: Primary application icon (512×512)
- **maskable-icon-512.png**: PWA safe area icon for various shapes

### Size Variants

- Generated from SVG source at standard sizes: 16, 32, 64, 128, 256, 512px
- Use appropriate size for context (16px for UI, 512px for app stores)

### Legacy Brand Assets

- Existing assets in `brand/` directory
- Will be migrated to new structure in future releases

## Platform Requirements

- **iOS**: 180×180 (iPhone), 167×167 (iPad)
- **Android**: 192×192 (standard), 512×512 (Play Store)
- **PWA**: 192×192, 512×512, plus maskable variants
- **Desktop**: 16×16, 32×32, 64×64, 128×128, 256×256

## Quality Standards

- **Crisp edges**: Ensure pixel-perfect rendering at small sizes
- **Consistent style**: Match brand visual language
- **Scalability**: Test legibility at 16px minimum
