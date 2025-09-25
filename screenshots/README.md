# Screenshots

Application screenshots and demo images for marketing and documentation.

## File Structure

```text
screenshots/
├── fe-reader/                       # Reader frontend screenshots
│   ├── desktop-home.png
│   ├── desktop-reading.png
│   └── mobile-reading.png
├── fe-editor/                       # Editor frontend screenshots
│   ├── desktop-editor.png
│   ├── desktop-preview.png
│   └── mobile-editor.png
├── fe-admin/                        # Admin frontend screenshots
│   ├── desktop-dashboard.png
│   └── desktop-analytics.png
├── mobile/
│   ├── ios/                         # iOS app screenshots
│   └── android/                     # Android app screenshots
└── before-after/                    # Comparison screenshots
    ├── workflow-before.png
    └── workflow-after.png
```

## Naming Convention

Format: `[platform]-[feature/screen]-[size].png`

Examples:

- `desktop-editor-1920x1080.png`
- `mobile-reading-375x812.png`
- `tablet-dashboard-768x1024.png`

## Screenshot Standards

### Desktop Screenshots

- **Resolution**: 1920×1080 minimum
- **Browser**: Use clean browser chrome (Chrome recommended)
- **Content**: Use realistic, professional sample content
- **UI**: Show complete interface with navigation

### Mobile Screenshots

- **iOS**: 375×812 (iPhone 12), 414×896 (iPhone 11)
- **Android**: 393×851 (Pixel 5), 360×640 (general)
- **Orientation**: Portrait primary, landscape when relevant
- **Status bar**: Hide or use clean status bar

### Quality Guidelines

- **Compression**: Optimize PNG files for web use
- **Text clarity**: Ensure all text is readable
- **Consistent styling**: Match current app design
- **Data privacy**: Use placeholder content, no real user data

## App Store Requirements

### iOS App Store

- **Sizes**: 1290×2796, 1179×2556, 886×1920, 1024×1366
- **Format**: PNG or JPEG
- **Count**: 3-10 screenshots per device type

### Google Play Store

- **Sizes**: 1080×1920 (portrait), 1920×1080 (landscape)
- **Format**: PNG or JPEG
- **Count**: 2-8 screenshots

## Usage in Documentation

Reference screenshots using GitHub raw URLs:

```markdown
![Editor Interface](https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/screenshots/fe-editor/desktop-editor.png)
```
