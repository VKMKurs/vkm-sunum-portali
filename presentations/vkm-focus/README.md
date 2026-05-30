# Handoff: VKM "Benim Koçum" — Öğrenci Başarı Takip Platformu

## Overview

VKM "Benim Koçum" is a coaching-led student success platform for Vaditepe Kurs Merkezi. It tracks four parallel data streams per student — plan adherence, exam performance, monthly morale, and biweekly reading comprehension — and uses AI to synthesize a coach-approved monthly report for the parent.

This handoff package contains an HTML deck (16 slides, 1920×1080) that serves as the **product specification through visual storytelling**. Each slide describes one feature of the platform and shows the intended UI for that feature as a high-fidelity mockup.

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, SwiftUI, native, etc.) using its established patterns and libraries. If no codebase exists yet, choose the most appropriate framework for a multi-user web application with role-based panels (Coach, Student, Parent) — recommended stack: React + TypeScript + Tailwind CSS + a component library like shadcn/ui, with a backend supporting auth, file upload (PDF), and AI calls.

The slide deck is a *spec*, not the *product*. The product is three role-specific web/mobile panels (Coach / Student / Parent) plus an AI worker that synthesizes monthly reports.

## Fidelity

**High-fidelity (hifi).** Colors, typography, spacing, and component compositions are final. UI mockups embedded in the slides should be recreated pixel-faithfully using the target codebase's component primitives.

## Product Architecture (read this first)

Three roles. Three panels. One AI worker. Coach is the decision-maker; AI is the analyst; student is the data source; parent is the observer.

### Roles
1. **Coach (Koç)** — primary user. Plans, runs weekly meetings, approves all AI output, signs monthly reports.
2. **Student (Öğrenci)** — fills weekly check-ins, monthly morale survey, biweekly reading test, takes exams.
3. **Parent (Veli)** — read-only observer. Sees the same data the coach sees, cannot edit anything.

### Data streams (4)
1. **Plan adherence** — weekly, A/B/C/D scenario, % score
2. **Exam results** — net scores + topic × success table parsed from PDF report cards
3. **Morale** — monthly 7-dimension survey (motivation, energy, stress, confidence, focus, goal-clarity, support)
4. **Reading comprehension** — biweekly graded passage, 4 multiple-choice + 2 open-ended, AI-rubric scored out of 100

### Twelve features (one per slide, 03–14)
1. Onboarding profile (Acar Baltaş work-style scale + goal inventory)
2. Weekly study program (7-day grid, template/clone/print)
3. Weekly meeting ritual (adherence rate + A/B/C/D scenario)
4. Exam PDF parsing + topic analysis
5. Monthly morale barometer (7 dimensions)
6. Reading comprehension test (Anlama Pusulası, biweekly)
7. Annual rhythm view (visualizes cadence of all streams)
8. Student timeline (chronological feed of all events)
9. AI holistic synthesis (4 streams → 1 monthly report)
10. Monthly visual report to parent (coach-approved PDF)
11. Coach dashboard "Bugün İlgilen" (today's action queue)
12. Parent panel (read-only)

## Design Tokens

### Colors

```
/* Brand */
--vkm-red:    #e31e1b   /* primary CTA, alerts, brand */
--vkm-coral:  #ee7673   /* secondary, soft accents */
--vkm-powder: #cfb4b5   /* tertiary, decorative */

/* Surfaces (dark theme — slide deck) */
--vkm-ink:    #0d1117   /* page background */
--vkm-ink-2:  #1e262e   /* card surface dark */
--vkm-card:   #161c26   /* elevated card on dark */

/* Surfaces (light theme — parent-facing report PDF) */
--vkm-bg:     #f6f7fb   /* page background light */
--vkm-white:  #ffffff   /* card surface light */

/* Status / data-stream */
--vkm-teal:   #00bcd4   /* reading, info */
--vkm-yellow: #ffca28   /* morale, caution */
--vkm-emerald:#10b981   /* success, positive trend */
--vkm-purple: #a855f7   /* exam alerts */

/* Text */
--text-primary:   rgba(255,255,255,1.0)
--text-secondary: rgba(255,255,255,0.70)
--text-muted:     rgba(255,255,255,0.55)
--text-faint:     rgba(255,255,255,0.45)
--border-subtle:  rgba(255,255,255,0.10)
```

The deck uses a dark techy theme. The **parent-facing monthly report PDF is light-themed** (white card on light background) — this is intentional, because parents print or read the report on phone.

### Typography

```
/* Display & headings */
--font-display: 'Nunito', 'Inter', sans-serif;
font-weight: 800–900 for hero titles
letter-spacing: -0.025em (tighter for hero: -0.04em)

/* Body */
--font-sans: 'Inter', 'Nunito', sans-serif;
font-weight: 400/500/600/700

/* Mono — used for tags, chips, timestamps, kbd-style labels */
--font-mono: 'JetBrains Mono', monospace;
```

Type scale (in slide-deck units, 1920×1080):
- Hero: 140–180px / weight 900 / line-height 0.95
- H1 (slide title): 76–112px / weight 900
- H2 (section): 40–56px / weight 800
- Body large: 24–32px / line-height 1.4–1.5
- Body: 18–22px / line-height 1.5
- Caption / mono chip: 14–16px / mono / uppercase 0.18em tracking
- Numeric stat: 64–96px / display / weight 900

For a real web app, scale these down to standard web sizes (e.g., hero 56–72px, H1 32–40px, body 16px).

### Spacing

8px base. Cards use 24–32px padding. Slide gutters are 64–128px (translate to 24–48px in normal web app).

### Border radius

```
--radius-sm: 8px    (chips, mono tags)
--radius-md: 12–16px (buttons, small cards)
--radius-lg: 20–24px (large cards)
--radius-xl: 28px    (hero panels, mockup frames)
--radius-full: 9999px (pills, dots)
```

### Shadows & glow

```
/* Card elevation */
shadow-card: 0 4px 24px rgba(0,0,0,0.3);

/* Red glow (CTAs, key elements) */
shadow-glow-red: 0 0 40px rgba(227,30,27,0.4), 0 0 80px rgba(227,30,27,0.2);
```

## Screens / Views

The deck is the spec; below is the screen-by-screen breakdown the developer needs to build. **Slide numbers in [brackets]** point to the corresponding mockup in `01_sunum_tanitim.html`.

### Coach Panel

#### CP-01 · Coach Dashboard / "Bugün İlgilen" [slide 13]
- **Purpose**: First view when coach logs in. Shows today's action queue across all assigned students.
- **Layout**: Sidebar (coach identity + nav) + main area with widget stack:
  1. **"Bugün İlgilen" widget** (top) — 5 alert categories:
     - 🔴 Moral Alarmı (morale alert) — students with critical/warning morale scores
     - 📄 İşlenmemiş PDF (unprocessed PDF) — uploaded but not parsed report cards
     - 📋 Anketi Doldurmayanlar (survey overdue) — students who haven't filled this month's morale survey
     - 📘 Okuma Bekliyor (reading test pending) — students who haven't taken biweekly Anlama Pusulası
     - 📉 Net Düşüşü (net drop) — students whose exam net dropped 3+ since last
  2. **Stats strip** — total students / D-tier / A-tier / current week number
  3. **Bugün görüşülecek (today's meetings)** — list of students scheduled for weekly meeting today, with last adherence % and scenario

#### CP-02 · Student List / Cohort View
- Filter by class (sınıf), track (SAY/EA/SÖZ for high school, LGS), scenario, alert state.
- Each student row: avatar, name, class, last meeting scenario, last morale trend arrow, last exam delta.

#### CP-03 · Student Detail (8 tabs) [referenced in slide 02]
- Tabs: **Profil / Program / Görüşme / Deneme / Moral / Okuma / Zaman Akışı / Rapor**

##### CP-03-A · Profil tab [slide 03]
- Acar Baltaş çalışma ölçeği results — 5-axis radar (DÜZEN, SÜRE, DİKKAT, ORTAM, ENGEL), each scored 0–10.
- Hedef envanteri — 3-tier goal list: 3 ay / 6 ay / 12 ay.
- Editable by coach; student fills initial intake.

##### CP-03-B · Program tab [slide 04]
- 7-column grid (PZT–PAZ). Each cell holds 0–N tasks. Task = {ders, konu, kaynak, sayfa aralığı, soru sayısı}.
- Status per task: yapılacak / yapıldı (✓) / kısmen / yapılmadı (✗) / aktif (▶).
- Buttons: "Şablondan yükle" (load from template), "Geçen haftayı klonla" (clone last week), "A4 yazdır" (print).
- Footer: weekly total questions + estimated hours.

##### CP-03-C · Görüşme tab [slide 05]
- Form fields per program item: yapıldı / kısmen / yapılmadı + free-text note.
- **Adherence score** — large circular progress (0–100%).
- **Senaryo card** — automatic A/B/C/D classification based on score bands:
  - A · İYİ · 70%+
  - C · ORTA · 50–70% (yes — naming is intentional, see slide 05)
  - B · DÜŞÜK · 30–50%
  - D · KRİTİK · <30%
- **Pinned notes** (📌 sabitli not) — multi-meeting persistent reminders ("Sınav kaygısı yüksek").

##### CP-03-D · Deneme tab [slide 06]
- PDF upload (drag-drop). Parser supports 4 formats (Eyotek, school exam, generic TYT/AYT/LGS).
- After parse: subject net summary (4-up grid), topic analysis table sorted by weakness.
- Each weak topic row: ders / konu / başarı oranı / "Bu Haftaki Programa Ekle" button.
- For LGS: P1/P2/P3 priority tags.

##### CP-03-E · Moral tab [slide 07]
- 7-axis radar: MOTİVASYON, ENERJİ, STRES, ÖZGÜVEN, ODAK, HEDEF, DESTEK (0–10 each).
- Note: STRES is inverted in display (high stress = bad).
- Trend line below radar — last 12 monthly readings.
- Alert banner if any axis crosses critical threshold.
- "Acil Nabız" button — coach-triggered ad-hoc mid-month survey.

##### CP-03-F · Okuma tab (Anlama Pusulası) [slide 08]
- Biweekly tests, scored 0–100 (40 multiple-choice + 60 open-ended via AI rubric).
- 5 sub-dimensions: anlama, yorumlama, dikkat, ifade, hız/verim.
- First 2 weeks require coach approval of AI scoring (calibration period).

##### CP-03-G · Zaman Akışı tab [slide 10]
- Chronological feed of all events (görüşme / deneme / moral / okuma / yazılı / koç notu).
- Each event = colored dot + card with summary.
- Filter chips by event type.

##### CP-03-H · Rapor tab [slide 12]
- Monthly report draft view. AI generates a draft from 4 streams → coach edits → coach approves & signs → emits PDF to parent.
- 3-step status: AI üretti → Koç düzenliyor → Koç onayladı.

### Student Panel

#### SP-01 · Today / Bu Hafta
- Today's tasks from this week's program, in chronological order.
- Tap to mark yapıldı / kısmen / yapılmadı.
- Quick-add note per task (optional).

#### SP-02 · Anketler
- Monthly morale survey form — 7 sliders (1–10) + open-ended "bu ay nasıl gidiyor?" textarea.
- Biweekly Anlama Pusulası test — passage view + 4 MC + 2 open answer fields. Timer visible.

#### SP-03 · Geçmişim
- Read-only view of own history (denemeler, moral skorları, okuma puanları).

### Parent Panel [slide 14]

#### PP-01 · Çocuğumun Durumu
- 4 summary cards: Son Görüşme (scenario + adherence), Moral (current month score + trend), Okuma (latest score + delta), Son Deneme (net + delta).
- Mini program preview (7-day strip, color-coded by subject) + "yazdır" button.
- Public coach note panel (koç notu · veliye açık) — coach explicitly marks notes as parent-visible.
- Read-only badge: "düzenleme yok".

#### PP-02 · Aylık Raporlar
- List of all signed monthly reports. Each row: month, overall score, coach signature, download PDF.

### Reports & PDFs

#### R-01 · Monthly Visual Report (Parent-facing PDF) [slide 12]
- Single-page A4 portrait.
- Header: red-to-ink gradient band with student name + class + month + overall score (0–100 large).
- Trend pill: "İYİ · ▲ 7" or similar.
- 4-column bar chart: UYUM / DENEME / MORAL / OKUMA.
- Coach commentary box (bordered left with red 4px stripe).
- Footer: coach signature + "pdf_indir" download link.

#### R-02 · Weekly Program Print (A4)
- 7-column landscape grid. Black-on-white. No gradients. Optimized for cheap home printer.

## Interactions & Behavior

### Approval flow (CRITICAL)
**Nothing AI-generated reaches the parent without coach approval.** This is a load-bearing product principle.

```
AI synthesizes 4 streams → AI drafts monthly commentary
→ Coach opens draft, edits text, adjusts emphasis
→ Coach clicks "Onayla & İmzala"
→ PDF generates, parent receives notification
```

### Adherence scenario assignment
On weekly meeting form save, recompute:
```
score = (yapıldı_count + 0.5 * kısmen_count) / total_count
if score >= 0.70: scenario = 'A'
elif score >= 0.50: scenario = 'C'
elif score >= 0.30: scenario = 'B'
else:               scenario = 'D'
```

### Morale alert thresholds
Per axis (0–10):
- Green (iyi): ≥ 7
- Yellow (dikkat): 4–7
- Red (kritik): < 4
- Stres axis is inverted: green ≤ 3, yellow 3–7, red > 7
Trigger "Bugün İlgilen" alert if 2+ axes red OR overall delta ≤ -1.0 vs last month.

### Cadence
- Weekly meeting: every week (48/year)
- Anlama Pusulası: every 2 weeks (24/year)
- Morale Barometer: monthly (12/year)
- Monthly Report: monthly (12/year)
- Profile (Acar Baltaş): once at intake, refreshed annually

### Animations
The deck uses heavy decorative animation (pulse rings, scan lines, data-flow dashes). **In the actual product, dial these way down.** Suggested:
- Card hover: 150ms ease-out subtle elevation
- Status change: 250ms spring color transition
- AI thinking indicator: subtle pulse on AI-generated content
- No scan lines, no glow halos in production UI.

### Loading states
- PDF parse: progress bar + "X.Xs" timestamp shown after completion (slide 06 shows "2.3s").
- AI synthesis: stepper showing 4 streams ingested → drafting → ready.

### Empty states
- Coach dashboard with no alerts: empty-state illustration + "Bugün her şey yolunda. ☕"
- Student timeline: "Henüz olay yok — ilk görüşmeniz [tarih]'da."

## State Management

### Core entities
```
User { id, role: 'coach'|'student'|'parent', name, email }
Student { id, name, class, track, coach_id, parent_ids[], profile_id, created_at }
Profile { student_id, work_style: { düzen, süre, dikkat, ortam, engel } /* 0-10 */, goals: [{ horizon, text }] }
Program { id, student_id, week_start, items: [{ day, ders, konu, kaynak, page_range, q_count, status }] }
Meeting { id, program_id, items: [{ item_id, status, note }], adherence: 0..1, scenario, pinned_notes[], created_at }
Exam { id, student_id, type: 'TYT'|'AYT'|'LGS', file_path, parsed: { subjects: [{ name, net }], topics: [{ ders, konu, correct, total }] }, date }
Morale { id, student_id, month, scores: { motivasyon, enerji, stres, özgüven, odak, hedef, destek }, free_text, created_at }
Reading { id, student_id, test_id, mc_score, open_score, total, dimensions: { anlama, yorumlama, dikkat, ifade, hız }, created_at }
MonthlyReport { id, student_id, month, ai_draft, coach_text, status: 'draft'|'editing'|'approved', signed_by, signed_at, pdf_url }
CoachNote { id, student_id, body, parent_visible: bool, created_at }
```

### State machines
- MonthlyReport: `draft → editing → approved` (irreversible after approval)
- Meeting: implicit — created on save, not edited (immutable record)

## Assets

The deck uses **only inline SVG and CSS-drawn UI** — no image files. All "mockups" inside slides are recreated as nested HTML/SVG. When implementing, you will likely want to replace the SVG-drawn radar charts with a real chart library (recharts, visx, chart.js) — geometry is documented above.

### Iconography
The deck uses Lucide-style stroke icons (stroke-width 2.2, stroke-linecap round). Use **lucide-react** in implementation.

### Logo
"VKM" wordmark = red circle (#e31e1b) with white "VKM" Nunito 800 letters. Drawn inline as SVG in deck — replace with real brand asset.

## Files in this bundle

- `README.md` — this file
- `01_sunum_tanitim.html` — 16-slide product spec deck (1920×1080). Open in browser. Each slide labeled with `data-screen-label`.
- `deck-stage.js` — host web component for the deck (handles scaling, keyboard nav, slide counter). Not needed for implementation.

## Localization

All copy is in **Turkish**. The product is for a Turkish-speaking market. Keep Turkish strings; only translate if a multilingual mode is added later.

## Recommended implementation order

1. Auth + role routing (3 panels).
2. Student profile + Acar Baltaş intake form.
3. Weekly program editor (Coach-only) + read-only views (Student/Parent).
4. Weekly meeting form + adherence calculation + scenario assignment.
5. PDF upload + parse pipeline (start with Eyotek format).
6. Morale survey + radar visualization.
7. Anlama Pusulası test runner + AI rubric scoring.
8. Coach dashboard "Bugün İlgilen" widget (depends on all above).
9. AI monthly synthesis worker (cron, 1st of month).
10. Monthly report editor + PDF generation + email-to-parent.

## Questions to resolve with product owner

- AI provider for synthesis & rubric scoring (Anthropic Claude recommended, given the deck calls it "AI" without naming a model).
- PDF parser implementation — server-side (pdf.js + heuristics per format) vs. third-party.
- Notification channels for coach alerts (in-app only, or email + WhatsApp?).
- Whether parent panel should be web-only or also mobile-app.
- Data retention policy for student records (graduation → archive vs. delete).
