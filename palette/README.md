# Color Palette

Storyloomr color definitions, accessibility guidelines, and contrast documentation.

## Files

- `palette.json` - Complete color palette in multiple formats
- `contrast.md` - WCAG contrast ratios and accessibility notes
- `swatches.png` - Visual color swatches for reference

## Color System

### Primary Brand Colors

- **Primary Purple**: `#6155F5` - Main brand color
- **Primary Dark**: `#4338ca` - Darker variant for contrast
- **Primary Light**: `#a78bfa` - Lighter variant for backgrounds

### Neutral Palette

- **Gray 50-900**: Complete neutral scale for text and backgrounds
- **White**: `#ffffff` - Pure white for backgrounds
- **Black**: `#000000` - Pure black for text (use sparingly)

### Semantic Colors

- **Success**: `#10b981` - Success states, confirmations
- **Warning**: `#f59e0b` - Warnings, cautions
- **Error**: `#ef4444` - Errors, destructive actions
- **Info**: `#3b82f6` - Information, links

## Accessibility Requirements

All color combinations must meet WCAG AA standards:

- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3:1 contrast ratio
- **UI elements**: Minimum 3:1 contrast ratio

See `contrast.md` for detailed testing results and approved combinations.

## Usage Guidelines

- Use primary colors sparingly for emphasis and calls-to-action
- Rely on neutral grays for most text and interface elements
- Reserve semantic colors for their specific meanings
- Test color combinations for accessibility before implementation
- Consider color blindness when designing interfaces
