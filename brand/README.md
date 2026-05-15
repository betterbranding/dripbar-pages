# DRIPBaR TX Brand Database

Structured brand data for all 10 DRIPBaR Texas locations, organized into 4 brand voice groups.

## Structure

```
brand/
├── README.md              # This file
├── index.json             # Master index of all locations and groups
├── schema.json            # JSON Schema for location files
├── global-rules.json      # Content rules, frameworks, banned words
└── locations/
    ├── keller.json
    ├── burleson.json
    ├── colleyville.json
    ├── flower-mound.json
    ├── alamo-heights.json
    ├── austin.json
    ├── dominion-creek.json
    ├── fossil-creek.json
    ├── huebner-oaks.json
    └── new-braunfels.json
```

## Access URLs

### GitHub Pages (recommended)
```
https://betterbranding.github.io/dripbar-pages/brand/index.json
https://betterbranding.github.io/dripbar-pages/brand/global-rules.json
https://betterbranding.github.io/dripbar-pages/brand/locations/keller.json
```

### Raw GitHub
```
https://raw.githubusercontent.com/betterbranding/dripbar-pages/main/brand/index.json
https://raw.githubusercontent.com/betterbranding/dripbar-pages/main/brand/locations/keller.json
```

## Brand Voice Groups

| Group | Locations | Medical Director |
|-------|-----------|-----------------|
| `keller` | Keller | Dr. Aminidhan D. Thakkar |
| `burleson` | Burleson | Dr. Aminidhan D. Thakkar |
| `cvfm` | Colleyville, Flower Mound | Dr. Angela Straface MD |
| `satx` | Alamo Heights, Austin, Dominion Creek, Fossil Creek, Huebner Oaks, New Braunfels | Dr. Aminidhan D. Thakkar |

## Location Index

| ID | Name | City | Subdomain |
|----|------|------|-----------|
| `keller` | The DRIPBaR Keller | Keller | keller.thedripbar.com |
| `burleson` | The DRIPBaR Burleson | Burleson | burleson.thedripbar.com |
| `colleyville` | The DRIPBaR Colleyville | Colleyville | colleyville.thedripbar.com |
| `flower-mound` | The DRIPBaR Flower Mound | Flower Mound | flower-mound-highlands-ranch.thedripbar.com |
| `alamo-heights` | The DRIPBaR Alamo Heights | Alamo Heights | alamo-heights.thedripbar.com |
| `austin` | The DRIPBaR Austin | Austin | austin-the-domain.thedripbar.com |
| `dominion-creek` | The DRIPBaR Dominion Creek | San Antonio | san-antonio-dominion-creek.thedripbar.com |
| `fossil-creek` | The DRIPBaR Fossil Creek | San Antonio | san-antonio-fossil-creek.thedripbar.com |
| `huebner-oaks` | The DRIPBaR Huebner Oaks | San Antonio | the-strand-at-huebner-oaks.thedripbar.com |
| `new-braunfels` | The DRIPBaR New Braunfels | New Braunfels | new-braunfels.thedripbar.com |

## What Each File Contains

### Location JSON
- Brand identity (name, city, subdomain, booking URL)
- Medical director info and attribution text
- Brand voice (tagline, tone, audience, pillars, writing style notes)
- Approved hashtags
- Visual identity (colors, logos, photography style)
- Social media accounts (Instagram, Facebook, GBP, Threads with GHL IDs)
- GHL integration details (group name, location ID, user ID)
- Content restrictions (e.g., CV/FM: no esthetics services)
- Email recipients for approvals
- Full sitemap with all service URLs organized by category

### global-rules.json
- Writing style rules (should/avoid lists)
- Banned words list
- CAFE framework (content structure)
- EEAT framework (trust signals)
- Meta compliance rules (no medical claims)
- Channel-specific rules (IG/FB, GBP, Pinterest, X, TikTok, Email)
- Posting cadence per channel
- Publishing defaults (status, time, GHL config)

## Usage

Fetch a location's brand data:
```javascript
const res = await fetch('https://betterbranding.github.io/dripbar-pages/brand/locations/keller.json');
const brand = await res.json();
console.log(brand.brand_voice.tone); // ["Professional", "Approachable", ...]
console.log(brand.sitemap.iv_therapy); // { "High Dose Vitamin C": "https://...", ... }
```

Fetch global content rules:
```javascript
const rules = await fetch('https://betterbranding.github.io/dripbar-pages/brand/global-rules.json');
const data = await rules.json();
console.log(data.content_rules.banned_words); // ["Elevate", "Delve", ...]
```
