# Dra. Fernanda Mescolin Design System

A sophisticated, atemporal design system for premium vascular medicine and wellness protocols. Designed to communicate elegance, exclusivity, science-based medicine, and humanized care across all brand touchpoints.

## Brand Essence

**Four core concepts:** Silence. Light. Matéria. Elegância.

The visual identity reflects Dra. Fernanda's positioning as a boutique medical practice offering science-based, personalized treatments. The brand competes with international premium wellness and medicine brands like Aesop, Bulgari Spa, Clinique La Prairie, and Lanserhof—not typical aesthetic clinics.

### Positioning
- Medicine based on science
- Highly personalized care
- Applied technology
- Humanized attention
- Sophistication
- Exclusivity
- Trust

## Visual Foundations

### Color Palette

The identity document (`uploads/IDENTIDADE VISUAL.pdf`) defines exactly six colors. Nothing outside this set is brand color.

| Token | Hex | Role |
| --- | --- | --- |
| `--color-white` | #FFFFFF | Default page surface |
| `--color-sand` | #DFCFB5 | Warm band, alternate surface |
| `--color-taupe` | #9E937D | Borders, secondary text, acolhimento |
| `--color-burgundy` | #824329 | Vinho — exclusivity |
| `--color-navy` | #2C3B5A | Azul institucional — medicine, authority |
| `--color-black` | #000000 | Primary text |

**Lockup colors** — the delivered artwork uses two colors that are not in the six-color list but are part of the marks and must be matched when reproducing them:

- `--color-rose` **#D0A898** — the FM diamond in the master signature
- `--color-gray-brand` **#888890** — the "FERNANDA Mescolin" wordmark
- `--color-burgundy-mark` **#932A33** — the vinho ink used in the four Essence lockups
- `--color-navy` **#2C3B5A** — the azul used in the Essence lockups

**Warm neutral steps** (`--color-sand-50 → --color-ink-700`) are derived from areia and taupe and carry all surfaces and text greys. Pure white IS the default page background; areia-50 (#FBF8F4) and areia-100 (#F4EEE6) mark alternating bands.

### Typography

**Display/Editorial (Serif):** **Tan Vivre Libre**, weight 400 only — headlines, protocol names, ledes, pull quotes. Tight leading (1.08–1.1 at display sizes), slight negative tracking (−0.01em). Represents sophistication, time, authority, exclusivity.

⚠️ **The Tan Vivre Libre binary has not been supplied.** `--font-serif-display` points at the correct family name and falls back to a system serif until the `.woff2`/`.otf` is uploaded. No substitute family has been baked in — please send the licensed file.

**Body/Functional (Sans):** **Poppins**, weight 300 (light) as the default, loaded from Google Fonts. Body 16/1.9, support 14/1.8. Uppercase micro-type (10–12px) with wide tracking (.16–.24em) for eyebrows, nav and badges. Represents clarity, readability, technology, functionality.

Typography hierarchy is intentional: never use serif excessively or transform pages into magazine editorials.

### Shape Language

**Imagery is never a plain rectangle.** The arch is the brand's signature form — a half-round top on a flat base, the shape of a doorway, a vault, a body. It reads as feminine, architectural and calm, and it is what separates this system from a square-card aesthetic.

| Token | Form | Use |
| --- | --- | --- |
| `--radius-arch` | half-round top, flat base | Portraits, protocol imagery, hero — vertical crops (3/4, 4/5) |
| `--radius-arch-soft` | gentle shoulder | Wider crops that would look distorted under a full arch |
| `--radius-petal` | three round corners, one square | Accent crops in editorial pairs — gives asymmetry without noise |
| `--radius-lozenge` | arched top and bottom | Full-bleed bands; the band floats rather than cuts |
| `--radius-soft` / `--radius-soft-lg` | 20px / 32px | Colored bands, footer top, quiet panels |
| `--radius-pill` | fully round | Buttons and badges only |

Rules:
- Vertical crops by default. A wide horizontal crop should be a lozenge band, not a card.
- Never combine two different arch radii in the same row.
- Never put a border around an arch — the shape is the edge.
- Colored sections (areia band, navy footer) carry `--radius-soft-lg` so no hard rectangle ever spans the page.

### Elevation & Line

- **Shadows are effectively absent.** `--shadow-whisper` (0 2px 24px rgba(158,147,125,.07)) is the strongest thing in normal use, and it is warm-tinted taupe, never grey or black. Depth comes from spacing and from the imagery.
- **Hairlines are 1px in `--color-sand-200` / `--color-sand-300`**, never taupe-500 or darker. A visible border is a mistake.
- Cards have **no** border, **no** fill and **no** shadow. If it reads as a container, it is wrong.

### Motion

- Everything eases on `cubic-bezier(.22,1,.36,1)`.
- Links and hovers: 800ms opacity to .5. Image scale on hover: 1600ms to 1.03 — slow enough to be felt, not seen.
- Accordion opens over 700ms via `grid-template-rows`.
- No bounce, no spring, no entrance animation on load.

### Photography Direction

- **Lighting:** Lateral, warm light. Natural, never artificial.
- **Composition:** Vast negative space. Minimal information. Neutral backgrounds.
- **Subject:** Calm expressions. Never exaggerated smiles or commercial poses.
- **Architecture:** Elegant, minimalist settings. Few elements.
- **Model presentation:** Accessible, secure, extremely elegant. The doctor must appear acessível yet authoritative.

### Atmosphere References

Visual inspiration drawn from:
- Natural wood
- Linen
- Travertino/stone
- Warm tones
- Natural light
- Soft shadows
- Minimalist architecture
- Organic textures
- Rounded forms
- Spacious, breathing layouts

## Design Principles

### What to Embrace
- Calm, quiet design
- Breathing room and white space
- Subtle refinement
- Light, minimal interactions
- Editorial-scale photography
- Large, purposeful spacing
- Grid-based, aligned layouts
- Soft animations (fade, minimal scale)
- Discrete components

### What to Avoid
❌ Gradients
❌ Glassmorphism
❌ Neon or saturated colors
❌ Chaotic icons
❌ Exaggerated effects
❌ Heavy cards or borders
❌ Oversized buttons
❌ Excessive shadows
❌ Cramped layouts
❌ Futuristic/tech aesthetic
❌ Hospital appearance
❌ Spa/wellness clichés

## Component Philosophy

All components are **extremely refined:**
- Buttons are discrete
- Inputs are elegant, minimal
- Cards are light, barely visible
- Accordions are minimalist
- Badges are small, understated
- Icons are linear, refined
- Hover states are sophisticated
- Animations are sparse, fluid

## Protocols

Each protocol has its own identity while maintaining family coherence:

- **LipEssence** — Lip and perioral treatments
- **DermaEssence** — Dermatological procedures
- **SculptEssence** — Sculptural/contouring treatments
- **Essence Concept** — General concept/framework

All pages use consistent structure and component library, but may explore subtle visual differentiation through imagery and accent colors.

## Layout & Grid

- **Editorial grid** with substantial white space
- **Large lateral margins** (48px minimum on desktop)
- **Excellent vertical alignment** and rhythm
- **Pages must breathe** — never cramped
- **Full-bleed imagery** when photography is central
- **Minimal text over images** — never pollute the hero

## Microinteractions

- Animations are **slow, graceful**
- Primarily **fade** and minimal **scale** transforms
- **Subtle parallax** only when appropriate
- Nothing must feel **chamativo** or attention-seeking
- Users experience **fluidity**, not perceived animation

## Content Fundamentals

### Tone & Voice
- Professional yet warm
- Knowledgeable without condescension
- Exclusive without pretension
- Science-forward, never fear-based
- Personalization is central (you/your language)
- Brevity valued over elaboration

### Copy Patterns
- Headlines are elegant, restrained
- Body copy is clear and informative
- No marketing hype or superlatives
- Emphasis on precision and personalization
- Testimonials/social proof are understated

## UI Components

Foundation components are organized by concern:

- **Navigation** — Headers, footers, menus
- **Forms** — Inputs, selects, checkboxes, radios
- **Buttons** — Primary, secondary, tertiary, ghost
- **Feedback** — Badges, tags, alerts
- **Layout** — Cards, sections, containers

## Files & Organization

```
assets/
  logos/
    fernanda-mescolin-full-color.png   # master signature, rose + gray
    fernanda-mescolin-white.png        # reversed, for rose/navy/photo backgrounds
    fernanda-mescolin-rose-white.png   # rose diamond + white wordmark
    fm-monogram-white.png              # FM diamond alone, reversed
    lipessence-color.png / -white.png
    sculptessence-color.png / -white.png
    dermaessence-color.png / -white.png
    essence-concept-color.png / -white.png
  photography/
    portrait-warm-linen.png            # Dra. Fernanda, linen, warm side light
    portrait-studio-suit.png           # Dra. Fernanda, studio, sand backdrop
    skin-shoulder.png                  # editorial skin detail, warm
    skin-legs-light.png                # editorial body detail, hard warm light
    clinic-office.png                  # consultório, wood + travertino
    texture-linen.png                  # linen texture, full-bleed band
    procedure-detail.png               # device in use, neutral

tokens/
  colors.css  typography.css  spacing.css  shadows.css  borders.css

components/
  buttons/      Button
  forms/        Input
  feedback/     Badge
  layout/       Card
  disclosure/   Accordion

guidelines/
  colors-primary.html  colors-brand-lockup.html  colors-neutral.html
  typography-display.html  typography-body.html  typography-micro.html  typography-pairing.html
  brand-marks.html  brand-protocol-marks.html  brand-photography.html
  spacing-scale.html  shadows-system.html

ui_kits/
  website/index.html                   # Home
  protocols/lipessence.html
  protocols/sculptessence.html
  protocols/dermaessence.html
  protocols/essence-concept.html

styles.css  readme.md  SKILL.md  thumbnail.html
```

## Iconography

No icon set was supplied with the brand materials. The marks and lockups are the only vector assets delivered.

- **Current approach:** the interface uses almost no icons by design. Disclosure uses a typographic `+` / `–`; navigation and actions are text; the `Card` and `Badge` components take a protocol lockup image rather than a glyph.
- **When an icon is unavoidable** (phone, location, Instagram in a footer), use **Lucide** from CDN at `stroke-width="1"`, 20px, `currentColor` — the thinnest available line weight, which matches the hairline vocabulary. **This is a substitution, flagged for review.**
- No emoji. No unicode dingbats. No filled or duotone icons.
- Bullets are hairline rules or the serif numeral (`01`, `02`) rather than dots.

## References

### Source Materials
- Local folder: `Assets, imagens e logos Dra Fernanda/`
- Current website: https://www.fernandamescolin.com.br/
- Brand guidelines PDFs: IDENTIDADE VISUAL.pdf, LOGO PROTOCOLOS.pdf

### Inspiration Brands
- Aesop (minimalist, sensory)
- Bulgari Spa (luxury, refinement)
- Clinique La Prairie (medical premium)
- SHA Wellness Clinic (holistic medicine)
- Lanserhof (exclusive, science-based)
- Augustinus Bader (elegant simplicity)

## Next Steps

1. **Components** — Build button, input, card, badge, accordion primitives
2. **Website UI kit** — Homepage, protocol pages, about, contact
3. **Protocol pages** — LipEssence, DermaEssence, SculptEssence, Essence Concept
4. **Guidelines cards** — Color, type, spacing, shadows specimen sheets
5. **Validation** — check_design_system to verify compiler output
