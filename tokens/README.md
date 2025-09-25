# Design Tokens

Design tokens define the visual design language of Storyloomr through structured data.

## File Structure

```text
tokens/
├── tokens.json                      # Base design tokens
├── tokens.light.json                # Light theme overrides
├── tokens.dark.json                 # Dark theme overrides
├── style-dictionary.config.js       # Build configuration
├── build/                          # Generated outputs (do not edit)
│   ├── css/
│   │   ├── variables.css           # CSS custom properties
│   │   └── tokens.json             # Web format tokens
│   ├── ios/
│   │   └── colors.swift            # iOS color definitions
│   └── android/
│       └── colors.xml              # Android color resources
└── formats/                         # Custom output formats
    ├── ios-colors.js
    └── android-colors.js
```

## Token Categories

-   **Colors**: Brand palette, semantic colors, theme variants
-   **Spacing**: Margin, padding, and layout spacing values
-   **Typography**: Font sizes, weights, line heights
-   **Border Radius**: Corner radius values
-   **Shadows**: Box shadow and elevation styles
-   **Breakpoints**: Responsive design breakpoints

## Building Tokens

Install dependencies:

```bash
npm install
```

Build all platform outputs:

```bash
npm run build:tokens
```

Watch for changes during development:

```bash
npm run build:tokens:watch
```

## Using Generated Tokens

### CSS (Web)

```css
@import url("./tokens/build/css/variables.css");

.component {
	background-color: var(--color-primary-500);
	padding: var(--spacing-md);
	border-radius: var(--radius-md);
}
```

### iOS (Swift)

```swift
import UIKit

view.backgroundColor = Colors.primary500
```

### Android (XML)

```xml
<color name="primary_500">@color/storyloomr_primary_500</color>
```

## Token Structure

Tokens follow a hierarchical naming convention:

```
[category]-[property]-[variant]-[state]
```

Examples:

-   `color-primary-500` (base primary color)
-   `color-primary-500-hover` (hover state)
-   `spacing-md` (medium spacing)
-   `font-size-lg` (large font size)
