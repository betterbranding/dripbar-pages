# The DRIPBaR Burleson booking widget: embed kit

Standalone copy of the /booking widget, hosted at:
https://betterbranding.github.io/dripbar-pages/burleson/site/embed/booking/

## Option A (recommended): auto-height embed
Paste where the widget should appear. The helper injects an iframe, sizes it to the
content (no inner scrollbar), scrolls the page to the widget as guests move through
the steps, and passes the host page URL into the appointment's source field.

```html
<div class="dripbar-booking"></div>
<script src="https://betterbranding.github.io/dripbar-pages/burleson/site/embed/booking/embed.js" async></script>
```

Deep-link to a goal or service with data attributes (or ?service= / ?goal= on the host URL):
```html
<div class="dripbar-booking" data-service="nad"></div>
<div class="dripbar-booking" data-goal="immunity"></div>
```

## Option B: plain iframe (for builders that strip scripts)
Fixed starting height; the frame scrolls internally if content is taller.
```html
<iframe src="https://betterbranding.github.io/dripbar-pages/burleson/site/embed/booking/" title="Book an appointment at The DRIPBaR Burleson" style="width:100%;border:0;min-height:1200px;display:block" loading="lazy"></iframe>
```

## Notes
- The widget books directly into the The DRIPBaR Burleson GHL calendars, same code as /booking.
- The embed page is `noindex`; the canonical booking page stays /booking on the location domain.
- Rebuild after any widget edit: `python3 scripts/build-embed-widget.py burleson`
- Test page: https://betterbranding.github.io/dripbar-pages/burleson/site/embed/booking/demo.html
