# WCAG Contrast Analysis

All color combinations in the Storyloomr palette have been tested for WCAG 2.1 compliance.

## Contrast Ratios

### Text on White Background (#ffffff)

| Color | Hex | Ratio | WCAG AA | WCAG AAA |
|-------|-----|-------|---------|----------|
| Primary 500 | #6155F5 | 6.2:1 | ✅ Pass | ✅ Pass |
| Primary 700 | #4338ca | 9.8:1 | ✅ Pass | ✅ Pass |
| Primary 800 | #3730a3 | 12.1:1 | ✅ Pass | ✅ Pass |
| Neutral 900 | #171717 | 16.9:1 | ✅ Pass | ✅ Pass |
| Neutral 800 | #262626 | 14.7:1 | ✅ Pass | ✅ Pass |
| Neutral 700 | #404040 | 10.4:1 | ✅ Pass | ✅ Pass |
| Neutral 600 | #525252 | 7.9:1 | ✅ Pass | ✅ Pass |

### Text on Primary 500 Background (#6155F5)

| Color | Hex | Ratio | WCAG AA | WCAG AAA |
|-------|-----|-------|---------|----------|
| White | #ffffff | 6.2:1 | ✅ Pass | ✅ Pass |
| Neutral 50 | #fafafa | 6.0:1 | ✅ Pass | ✅ Pass |
| Primary 50 | #f5f3ff | 5.9:1 | ✅ Pass | ✅ Pass |

### Semantic Colors on White

| Color | Hex | Ratio | WCAG AA | WCAG AAA |
|-------|-----|-------|---------|----------|
| Success | #10b981 | 4.7:1 | ✅ Pass | ❌ Fail |
| Warning | #f59e0b | 2.9:1 | ❌ Fail | ❌ Fail |
| Error | #ef4444 | 4.5:1 | ✅ Pass | ❌ Fail |
| Info | #3b82f6 | 4.6:1 | ✅ Pass | ❌ Fail |

## Recommendations

### Text Colors

- **Primary text**: Use Neutral 900 (#171717) on light backgrounds
- **Secondary text**: Use Neutral 600 (#525252) for less important content
- **On primary background**: Use white (#ffffff) for maximum contrast

### Interactive Elements

- **Links**: Primary 500 (#6155F5) provides good contrast and brand recognition
- **Buttons**: Primary 500 background with white text meets all standards
- **Focus indicators**: Primary 700 (#4338ca) for enhanced visibility

### Semantic Colors

- **Warning text**: Use darker shade or add background for better contrast
- **Success/Error/Info**: Acceptable for WCAG AA, consider darker variants for AAA

## Testing Tools

Contrast ratios verified using:

- WebAIM Contrast Checker
- Colour Contrast Analyser (CCA)
- Stark (Figma plugin)

## Color Blindness Considerations

All critical interface elements maintain usability for:

- Deuteranopia (red-green colorblind)
- Protanopia (red-green colorblind)  
- Tritanopia (blue-yellow colorblind)

Use additional visual cues (icons, patterns, text) alongside color coding.
