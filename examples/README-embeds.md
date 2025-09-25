# Asset Embedding Examples

Copy-ready Markdown snippets for embedding Storyloomr assets in documentation, websites, and repositories.

## Logo Embeds

### Header Logo (Recommended)

```markdown
![Storyloomr](https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/logo/storyloomr-logo-hz-light.svg)
```

### Pinned Version (Production Use)

```markdown
![Storyloomr](https://raw.githubusercontent.com/storyloomr/storyloomr-assets/assets-v1.0.0/logo/storyloomr-logo-hz-light.svg)
```

### Dark Mode Friendly

```markdown
<!-- Light theme -->
<img src="https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/logo/storyloomr-logo-hz-light.svg" alt="Storyloomr" style="display: block;">

<!-- Dark theme -->
<img src="https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/logo/storyloomr-logo-hz-dark.svg" alt="Storyloomr" style="display: none;">

<script>
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector('img[alt="Storyloomr"]:first-of-type').style.display = 'none';
  document.querySelector('img[alt="Storyloomr"]:last-of-type').style.display = 'block';
}
</script>
```

## Open Graph Meta Tags

### Basic Open Graph

```html
<meta property="og:title" content="Your Page Title" />
<meta property="og:description" content="Your page description" />
<meta
	property="og:image"
	content="https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/og/og-image.png"
/>
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://your-site.com" />
<meta property="og:type" content="website" />
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@storyloomr" />
<meta name="twitter:title" content="Your Page Title" />
<meta name="twitter:description" content="Your page description" />
<meta
	name="twitter:image"
	content="https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/og/twitter-card.png"
/>
```

## App Icons

### Favicon Links

```html
<link
	rel="icon"
	href="https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/icons/favicon.ico"
/>
<link
	rel="icon"
	type="image/png"
	sizes="32x32"
	href="https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/icons/icon-32.png"
/>
<link
	rel="icon"
	type="image/png"
	sizes="16x16"
	href="https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/icons/icon-16.png"
/>
```

### PWA Manifest Icons

```json
{
	"icons": [
		{
			"src": "https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/icons/icon-192.png",
			"sizes": "192x192",
			"type": "image/png"
		},
		{
			"src": "https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/icons/maskable-icon-512.png",
			"sizes": "512x512",
			"type": "image/png",
			"purpose": "maskable"
		}
	]
}
```

## Screenshots

### Documentation Screenshots

```markdown
![Storyloomr Editor](https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/screenshots/fe-editor/desktop-editor.png)
_The Storyloomr writing interface with distraction-free editing_

![Mobile Reading Experience](https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/screenshots/fe-reader/mobile-reading.png)
_Stories are optimized for reading on any device_
```

### Responsive Images

```html
<picture>
	<source
		media="(max-width: 768px)"
		srcset="
			https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/screenshots/fe-editor/mobile-editor.png
		"
	/>
	<img
		src="https://raw.githubusercontent.com/storyloomr/storyloomr-assets/main/screenshots/fe-editor/desktop-editor.png"
		alt="Storyloomr Editor Interface"
	/>
</picture>
```

## README Badges

### Status Badge

```markdown
[![Storyloomr](https://img.shields.io/badge/Built%20for-Storyloomr-6155F5?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NSIgdmlld0JveD0iMCAwIDE0NCAxNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHk9IjAuNSIgd2lkdGg9IjE0NCIgaGVpZ2h0PSIxNDQiIHJ4PSI4IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)](https://storyloomr.com)
```

## Best Practices

-   **Always include alt text** for accessibility
-   **Pin to release tags** for production use
-   **Test responsive behavior** on different screen sizes
-   **Verify HTTPS URLs** to avoid mixed content warnings
-   **Cache considerations**: GitHub raw URLs are cached, updates may take time to propagate
