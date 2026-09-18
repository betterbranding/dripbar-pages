# GHL deployment kit: The DRIPBaR Burleson (19 pages)

For each GHL page (slug must match):
1. Body: add a Custom HTML/JS element, paste `loader-v5/<slug>.html`. Save, publish.
2. Page Settings > Tracking Code > Header: paste `headers/<slug>.html` (metas + JSON-LD only). Save, publish.

Slugs: home, detox, energy-focus, high-dose-vitamin-c, hydration-recovery, immunity-viral, nad, ozone-therapy, peptide-therapy, quickshots, skin-brightening-beauty, weight-loss-support, wellness-therapies, help-me-choose, booking, book-a-consultation, contact, thank-you, privacy-policy

Home page in GHL should be the site root (/). Its loader fetches burleson/site/home/index.html.
Cache bust after edits: bump `?v=` in the loader for that page.

Google Tag Manager (GTM-52FCS8CX) is baked into every page HTML (head snippet + body noscript). Do not add it to GHL tracking code: the loader replaces the document, so GHL-level tags would not fire reliably.
