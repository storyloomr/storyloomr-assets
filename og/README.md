# Open Graph & Social Media Images

Social media card images and Open Graph assets for web sharing.

## File Structure

```text
og/
├── og-image.png                     # Primary Open Graph image (1200×630)
├── twitter-card.png                 # Twitter card image (1200×600)
├── social-banner.png                # General social banner (1200×630)
└── variants/
    ├── og-reader.png                # Reader app specific
    ├── og-editor.png                # Editor app specific
    └── og-admin.png                 # Admin app specific
```

## Platform Specifications

### Open Graph (Facebook, LinkedIn)

- **Size**: 1200×630px
- **Format**: PNG or JPG
- **File size**: Under 1MB
- **Aspect ratio**: 1.91:1

### Twitter Cards

- **Size**: 1200×600px
- **Format**: PNG, JPG, or WebP
- **File size**: Under 5MB
- **Aspect ratio**: 2:1

### General Social

- **Size**: 1200×630px (most compatible)
- **Text**: Readable at small sizes
- **Branding**: Include Storyloomr logo

## Content Guidelines

- **Text overlay**: Use high contrast, legible fonts
- **Logo placement**: Include brand mark prominently
- **Visual hierarchy**: Title, subtitle, branding
- **Color scheme**: Match brand palette
- **Safe area**: Keep important content within center 80%

## Usage in HTML

```html
<!-- Open Graph -->
<meta
 property="og:image"
 content="https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/og/og-image.png"
/>
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta
 name="twitter:image"
 content="https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/og/twitter-card.png"
/>
```
