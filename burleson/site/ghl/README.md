# GHL deployment kit: The DRIPBaR Burleson (19 pages)

For each GHL page (slug must match):
1. Body: add a Custom HTML/JS element, paste `loader-v5/<slug>.html`. Save, publish.
2. Page Settings > Tracking Code > Header: paste `headers/<slug>.html` (metas + JSON-LD only). Save, publish.

Slugs: home, detox, energy-focus, high-dose-vitamin-c, hydration-recovery, immunity-viral, nad, ozone-therapy, peptide-therapy, quickshots, skin-brightening-beauty, weight-loss-support, wellness-therapies, help-me-choose, booking, book-a-consultation, contact, thank-you, privacy-policy

Home page in GHL should be the site root (/). Its loader fetches burleson/site/home/index.html.
Cache bust after edits: bump `?v=` in the loader for that page.

Google Tag Manager (GTM-52FCS8CX) is baked into every page HTML (head snippet + body noscript). Do not add it to GHL tracking code: the loader replaces the document, so GHL-level tags would not fire reliably.

## Loader v6 (current) and Google Tag Manager

**Use `loader-v6/` for every page.** v5 (`loader-v5/`, kept for reference) used `document.write`, which
replaced the whole document at runtime. That hid GTM from the page source, broke Tag Assistant preview
mode, and would have dropped any listeners GTM attached. v6 fetches the same GitHub page, waits for the
GHL shell to finish parsing, then swaps head and body content in place. The window, `dataLayer`, and any
GTM loaded natively by GHL all survive, and the swap pushes a `dripbar_page_ready` event with the final
`page_title` and `page_path`.

**GTM lives at the top of each page's body Custom Code element, not in the page HTML and not in the
site Head tracking code.** Paste `element-v6/{slug}.html` (GTM snippet + v6 loader) into the element. GHL
injects Head tracking code client-side at hydration, which races the swap and double-fired on some loads,
so the Head slot must stay empty. `tracking-code/body.html` (the noscript iframe) may go in the site Body
slot. Container: GTM-52FCS8CX.

Install steps per page are unchanged (one Custom HTML/JS element, paste the loader, save). Header blocks in
`headers/` are unchanged.
