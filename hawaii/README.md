# DRIP Direct Hawaii — Online Store

A modern dark-theme telehealth pharmacy storefront for DripDirect Hawaii, built with vanilla HTML/CSS/JS.

## Design

- **Theme**: Dark glass morphism with electric blue (`#00d4ff`) and lime green (`#00ff88`) accents
- **Inspired by**: [Ways2Well](https://ways2well.com/membership-bloodwork) — tempered glass aesthetic, smooth CSS animations
- **Typography**: Space Grotesk (display) + Inter (body) via Google Fonts
- **Features**: Particle canvas, scroll-reveal animations, glassmorphism cards, responsive category navigation, product modal, cart system

## Structure

```
dripdirect-store/
├── index.html          # Main storefront
├── css/
│   └── styles.css      # All styles (glass morphism, animations, responsive)
├── js/
│   └── app.js          # Products, cart, particles, modals, scroll effects
├── data/
│   └── products.json   # Structured product data (37 products, 7 categories)
├── assets/             # Product images (placeholder)
└── README.md
```

## Products (37 total)

| Category | Count | Price Range |
|----------|-------|-------------|
| Weight Management | 7 | $135 – $345 |
| Hormone Balance & Optimization | 3 | $90 – $220 |
| Appetite Suppressant | 5 | $145 – $225 |
| Anti-Aging | 10 | $95 – $495 |
| Sexual Health | 7 | $125 – $175 |
| Hair Loss | 2 | $145 – $175 |
| Acne | 3 | $125 – $165 |

## Development

No build tools needed — just open `index.html` in a browser or serve with:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Integration

This storefront connects to:
- **GoHighLevel (GHL)** — CRM, contacts, pipeline management
- **VS Digital Health (VSDH)** — Telehealth API for patient qualification, orders, and pharmacy fulfillment

## License

Proprietary — DripDirect Hawaii / Better Branding
