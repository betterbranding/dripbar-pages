# DRIP Direct Hawaii — Campaign Workflows v2.1

## Overview

**3 Smart Groups × 5 Waves × 2 Channels = 30 Touches over 6 Weeks**

| Group | Description | Discount | Timezone Logic |
|---|---|---|---|
| 🏝️ **Locals** | Hawai'i residents | None | HST native |
| ✈️ **Visitors** | Mainland US tourists | None | Send early HST (≤ 2 PM) so it lands before 8 PM EST |
| 🏨 **Four Seasons** | FS Hualalai employees | **20% off** — code `FSEmp20%off` | HST native |

---

## Master Schedule

| Wave | Week | Category | Monday (SMS) | Thursday (Email) |
|---|---|---|---|---|
| 1 | Week 1 | **Weight Management** | Jun 9 | Jun 12 |
| 2 | Week 2 | **Anti-Aging** | Jun 16 | Jun 19 |
| 3 | Week 3 | **Sexual Health** | Jun 23 | Jun 26 |
| 4 | Week 4 | **Hormone Optimization** | Jun 30 | Jul 3 |
| 5 | Week 5 | **Appetite Suppressant** | Jul 7 | Jul 10 |
| 6 | Week 6 | **Wrap-Up (All Categories)** | Jul 14 | Jul 17 |

### Daily Send Order (HST — Hawai'i Standard Time)

**Mondays — SMS Day:**
| Time (HST) | Group | Why |
|---|---|---|
| 9:30 AM | ✈️ Visitors | = 3:30 PM EST — catches afternoon break |
| 12:00 PM | 🏨 Four Seasons | Lunch break window |
| 2:30 PM | 🏝️ Locals | Mid-afternoon — past the morning rush |

**Thursdays — Email Day:**
| Time (HST) | Group | Why |
|---|---|---|
| 11:00 AM | ✈️ Visitors | = 5:00 PM EST — end-of-workday inbox scan |
| 4:00 PM | 🏨 Four Seasons | Post-shift wind-down |
| 5:30 PM | 🏝️ Locals | Evening inbox time |

> ⚠️ **All sends between 9:00 AM – 8:00 PM HST.** Visitor sends capped at 2:00 PM HST to respect mainland evening hours.

---

## Wave 1 — Weight Management (Week 1)

**Psychology:** Transformation & control. Reframe from willpower failure → biological solution.

**Category Link:** `https://thedripbarkona.com/weight-management`

### SMS — Monday, Jun 9

**🏝️ Locals (2:30 PM HST):**
> Hi {{contact.first_name}}, it's Kevin. Quick update — we're looking for a new owner for The DRIPBaR Kona, but I wasn't about to leave you hanging.
>
> So we built something new. Drip Direct Hawaii — wellness prescribed by real doctors and shipped straight to your door. No appointments. No waiting rooms.
>
> First up: we've got physician-guided weight management that actually works with your biology, not against it. Thought of you.
>
> Check it out when you get a sec: https://thedripbarkona.com/weight-management
>
> — Kevin

**✈️ Visitors (9:30 AM HST):**
> Hey {{contact.first_name}}, it's Kevin from Kona. I know it's been a minute — things are changing at The DRIPBaR, but I wanted you to hear this from me.
>
> We launched Drip Direct Hawaii. Same commitment to your wellness, now shipped anywhere in the US. Discreet. Doctor-prescribed. No clinic visits needed.
>
> We're starting with weight management — real medical solutions, not another fad. Thought you'd want to know.
>
> Take a look: https://thedripbarkona.com/weight-management
>
> — Kevin

**🏨 Four Seasons (12:00 PM HST):**
> Hi {{contact.first_name}}, it's Kevin. You might've heard The DRIPBaR is transitioning — but I've got something better for you.
>
> Drip Direct Hawaii. Wellness delivered to your door, discreetly. Doctor-prescribed, no time off needed.
>
> We're kicking off with weight management that works with your body's own signals. And because you're FS 'ohana — 20% off everything. Code: FSEmp20%off
>
> Here you go: https://thedripbarkona.com/weight-management
>
> — Kevin

### Email — Thursday, Jun 12
📧 **Branded HTML templates** (dark neon glass morphism, hero images, gradient CTAs):
- Locals: `wave1-weight-management-locals.html`
- Visitors: `wave1-weight-management-visitors.html`
- Four Seasons: `wave1-weight-management-four-seasons.html`

---

## Wave 2 — Anti-Aging (Week 2)

**Psychology:** Vitality & youth. Sun damage → cellular reversal. Aspirational but grounded in science.

**Category Link:** `https://thedripbarkona.com/anti-aging`

### SMS — Monday, Jun 16

**🏝️ Locals (2:30 PM HST):**
> Hey {{contact.first_name}}, Kevin again. Living in paradise comes with a price — the sun doesn't exactly go easy on us.
>
> We just opened up our anti-aging line. Prescription-strength, doctor-guided — the kind of stuff you can't get at Longs. Works at the cellular level.
>
> Worth a look: https://thedripbarkona.com/anti-aging
>
> — Kevin

**✈️ Visitors (9:30 AM HST):**
> {{contact.first_name}} — Kevin here. That vacation glow is real, but let's be honest — it fades fast once you're home.
>
> We've got prescription anti-aging that doesn't. Doctor-prescribed, shipped to your door on the mainland. No appointments.
>
> Take a peek: https://thedripbarkona.com/anti-aging
>
> — Kevin

**🏨 Four Seasons (12:00 PM HST):**
> {{contact.first_name}} — you spend your days making everything beautiful for everyone else. This one's just for you.
>
> Prescription anti-aging. Real results, not resort spa promises. Your 20% FS 'ohana discount applies. Code: FSEmp20%off
>
> Check it out: https://thedripbarkona.com/anti-aging
>
> — Kevin

### Email — Thursday, Jun 19
📧 **Branded HTML templates:**
- Locals: `wave2-anti-aging-locals.html`
- Visitors: `wave2-anti-aging-visitors.html`
- Four Seasons: `wave2-anti-aging-four-seasons.html`

---

## Wave 3 — Sexual Health (Week 3)

**Psychology:** Confidence & intimacy. Private, discreet, no-judgment tone. Empowerment, not embarrassment.

**Category Link:** `https://thedripbarkona.com/sexual-health`

### SMS — Monday, Jun 23

**🏝️ Locals (2:30 PM HST):**
> {{contact.first_name}} — not gonna make this weird. Just want you to know we have a sexual health line now. Doctor-prescribed, ships in plain packaging, completely private.
>
> No waiting room. No awkward conversations. Just results.
>
> If it's relevant to you: https://thedripbarkona.com/sexual-health
>
> — Kevin

**✈️ Visitors (9:30 AM HST):**
> {{contact.first_name}} — Kevin here. This one's simple and I'll keep it short. We have a private sexual health line. Physician-prescribed, ships discreetly anywhere in the US.
>
> No clinic. No judgment. Just between you and your doctor.
>
> If it's something you've been thinking about: https://thedripbarkona.com/sexual-health
>
> — Kevin

**🏨 Four Seasons (12:00 PM HST):**
> {{contact.first_name}} — just a heads up, we also carry a sexual health line. Private, discreet, doctor-prescribed. Ships in plain packaging.
>
> Your 20% 'ohana discount works here too. Code: FSEmp20%off
>
> Totally private: https://thedripbarkona.com/sexual-health
>
> — Kevin

### Email — Thursday, Jun 26
📧 **Branded HTML templates:**
- Locals: `wave3-sexual-health-locals.html`
- Visitors: `wave3-sexual-health-visitors.html`
- Four Seasons: `wave3-sexual-health-four-seasons.html`

---

## Wave 4 — Hormone Optimization (Week 4)

**Psychology:** Balance & clarity. Reframe fatigue from personal failure → hormonal imbalance.

**Category Link:** `https://thedripbarkona.com/hormone-optimization`

### SMS — Monday, Jun 30

**🏝️ Locals (2:30 PM HST):**
> {{contact.first_name}} — real talk. If you've been dragging lately, foggy, low energy, not feeling like yourself — it might not be stress. It might be hormones.
>
> We have a full hormone optimization line now. Doctor-guided, shipped to your door. No guesswork.
>
> Might be worth 2 minutes: https://thedripbarkona.com/hormone-optimization
>
> — Kevin

**✈️ Visitors (9:30 AM HST):**
> {{contact.first_name}} — remember how different you felt in Hawai'i? More energy, clearer head, actually sleeping well?
>
> That might not have been the vacation. That might've been your body telling you something. We have hormone optimization — prescribed by real doctors, shipped to you on the mainland.
>
> Worth exploring: https://thedripbarkona.com/hormone-optimization
>
> — Kevin

**🏨 Four Seasons (12:00 PM HST):**
> {{contact.first_name}} — the pace you keep at the resort would burn anybody out. But what if it's not burnout? What if it's biology?
>
> Hormone optimization. Doctor-prescribed, shipped to you. Your 20% 'ohana discount applies. Code: FSEmp20%off
>
> Take a look: https://thedripbarkona.com/hormone-optimization
>
> — Kevin

### Email — Thursday, Jul 3
📧 **Branded HTML templates:**
- Locals: `wave4-hormone-optimization-locals.html`
- Visitors: `wave4-hormone-optimization-visitors.html`
- Four Seasons: `wave4-hormone-optimization-four-seasons.html`

---

## Wave 5 — Appetite Suppressant (Week 5)

**Psychology:** Freedom & willpower. Reframe from discipline problem → brain chemistry solution.

**Category Link:** `https://thedripbarkona.com/appetite-suppressant`

### SMS — Monday, Jul 7

**🏝️ Locals (2:30 PM HST):**
> {{contact.first_name}} — last one from me for a while, promise. This one's about appetite.
>
> If you've ever felt like your hunger has a mind of its own — it kind of does. We have prescription options that actually quiet the noise. Not willpower. Not a diet. Medicine.
>
> Here if you're curious: https://thedripbarkona.com/appetite-suppressant
>
> — Kevin

**✈️ Visitors (9:30 AM HST):**
> {{contact.first_name}} — one more from me. You know that reset feeling after a trip? We can make one part of it stick.
>
> Prescription appetite management. Doctor-guided, ships to your door. Not a supplement, not a shake — actual medicine.
>
> If it sounds right: https://thedripbarkona.com/appetite-suppressant
>
> — Kevin

**🏨 Four Seasons (12:00 PM HST):**
> {{contact.first_name}} — last category I wanted to share. Between long shifts, weird meal times, and stress — your appetite takes a hit.
>
> We've got prescription appetite management that works with your body, not against it. 20% off for 'ohana. Code: FSEmp20%off
>
> Worth a look: https://thedripbarkona.com/appetite-suppressant
>
> — Kevin

### Email — Thursday, Jul 10
📧 **Branded HTML templates:**
- Locals: `wave5-appetite-suppressant-locals.html`
- Visitors: `wave5-appetite-suppressant-visitors.html`
- Four Seasons: `wave5-appetite-suppressant-four-seasons.html`

---

## Wave 6 — Wrap-Up (Week 6)

**Psychology:** Urgency + recap. "You've seen what's possible — now choose your path."

### SMS — Monday, Jul 14

**🏝️ Locals (2:30 PM HST):**
> {{contact.first_name}} — that's everything from me. I just wanted to make sure you knew what we built. Weight management, anti-aging, hormones, sexual health, appetite — all doctor-prescribed, all shipped to your door.
>
> If anything resonated, I'm here. Text back or call (808) 941-3012. No pressure, ever.
>
> Mahalo — Kevin

**✈️ Visitors (9:30 AM HST):**
> {{contact.first_name}} — just wanted to circle back one last time. Whatever wellness you need — weight, aging, hormones, energy — Drip Direct Hawaii ships it to your door, wherever you are.
>
> All doctor-prescribed. All discreet. Browse when you're ready: https://thedripbarkona.com
>
> Mahalo for being part of our 'ohana — Kevin

**🏨 Four Seasons (12:00 PM HST):**
> {{contact.first_name}} — last note from me. Your 20% 'ohana discount doesn't expire. Whenever you're ready, it's there.
>
> Weight, hormones, anti-aging, sexual health, appetite — all prescribed & shipped. Code: FSEmp20%off
>
> Browse anytime: https://thedripbarkona.com
>
> A hui hou — Kevin

### Email — Thursday, Jul 17
📧 **Final wrap-up email** — to be built as a multi-category showcase template featuring all 5 categories with individual CTAs.

---

## Email Template Files

All 15 branded HTML email templates are in `/dripdirect-store/emails/`:

| Wave | Locals | Visitors | Four Seasons |
|---|---|---|---|
| 1 — Weight | `wave1-weight-management-locals.html` | `wave1-weight-management-visitors.html` | `wave1-weight-management-four-seasons.html` |
| 2 — Anti-Aging | `wave2-anti-aging-locals.html` | `wave2-anti-aging-visitors.html` | `wave2-anti-aging-four-seasons.html` |
| 3 — Sexual Health | `wave3-sexual-health-locals.html` | `wave3-sexual-health-visitors.html` | `wave3-sexual-health-four-seasons.html` |
| 4 — Hormones | `wave4-hormone-optimization-locals.html` | `wave4-hormone-optimization-visitors.html` | `wave4-hormone-optimization-four-seasons.html` |
| 5 — Appetite | `wave5-appetite-suppressant-locals.html` | `wave5-appetite-suppressant-visitors.html` | `wave5-appetite-suppressant-four-seasons.html` |

Each email features:
- Dark neon glass morphism design (matches store + landing pages)
- DripDirect Hawaii logo header
- Category hero image
- Electric blue → lime green gradient CTA button
- Four Seasons emails include the 20% discount badge
- GHL merge fields: `{{contact.first_name}}`, `{{unsubscribe_link}}`
- Mobile responsive (stacks cleanly on phone)

---

## Notes

- **Wave 6 wrap-up email** will be a multi-category showcase — to be built after Waves 1–5 are approved
- All SMS signed as Kevin for personal touch
- Category page URLs assume GHL pages are created at the listed slugs
- Four Seasons code `FSEmp20%off` appears in both SMS and email for that group
- All times are HST; visitor sends are capped to respect mainland timezone boundaries
