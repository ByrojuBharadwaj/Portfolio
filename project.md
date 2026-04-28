

---

## Color Palette

| Variable | Hex | Usage |
|---|---|---|
| `--themeColor1` | `#F8F6F6` | Page background (off-white) |
| `--themeColor2` | `#F5D061` | Golden yellow — accents, cards, contact bg |
| `--themeColor3` | `#2A363B` | Dark teal/charcoal — primary text, dark backgrounds |
| `--themeColor4` | `#CF4647` | Red — highlights, buttons, skills, active states |

---

## Fonts

- **Montserrat** — headings and body
- **Source Code Pro** — monospace/code
- **Quicksand** — secondary text

---

## Section Breakdown

| Page Section | Component | Text Style & Color | Background Color | Animations |
|---|---|---|---|---|
| **Scroll Bar (top)** | 5px fixed bar at very top | — | `#2A363B` (dark) | Bouncy spring easing as you scroll (`cubic-bezier(.85,.58,0,1.46)`) |
| **Header / Navbar** | Fixed bar: circular logo + "CV" button + hamburger icon | Nav labels: `#2A363B` · Button: `#CF4647` border+text | Blurred glass (`backdrop-filter: blur(3px)`) | Hamburger opens a radial circle menu — expands from `scale(0)→scale(1)` with a 30° rotation bounce. The hamburger icon itself rotates 10 full turns on click. |
| **Hamburger Menu** | Concentric circles with curved nav labels (Home, My Self, Experience, etc.) | Uppercase curved text in `#2A363B` | `#2A363B` (dark) with red circle rings | Labels are individually rotated with CSS `transform: rotate()` to sit along a circular arc. Circles expand/fade in with `1s cubic-bezier` bounce. |
| **Side — Left** | Fixed social icons (GitHub, YouTube, Instagram, Twitter, LinkedIn) + vertical line | Icons stroke `#2A363B`, hover `#CF4647` | Transparent | Hover color transition |
| **Side — Right** | Vertical email text + line | `#2A363B`, letter-spacing 2px, vertical writing mode | Transparent | Hover color `→ #CF4647` |
| **Hero / Home** | Name (large) + subtitle + description paragraph + "Contact me!" button | Name: `#2A363B`, `clamp(40px–80px)`, weight 700 · Subtitle: `#CF4647`, `clamp(20px–40px)`, weight 600 · Body: `#2A363B` | `#F8F6F6` (off-white) | **Gooey blobs**: 3 yellow (`#F5D061`) circles that float and merge with a liquid effect using SVG `feGaussianBlur + feColorMatrix` filter. They follow the mouse cursor in real-time. |
| **Buttons** | "Contact me", "CV", "View Details", "View All" | `#CF4647` border+text, hover: text turns `#F5D061` | Transparent → fills `#CF4647` on hover | Hover triggers a diagonal fill wipe from bottom-left using `::after` pseudo-element + `transform: translate(-100%) rotate(10deg) → translate(0)` + `scale(1.05)` |
| **About / My Self** | Paragraphs + skill list (2 columns) + profile photo | Paragraphs: `#2A363B`, 16px, line-height 24px · Skills: `#CF4647`, 12px with `▹` prefix in `#2A363B` | `#F8F6F6` | **AOS scroll animations**: container `fade-down-left`, section title `zoom-in-right`, each paragraph/skill `zoom-in-left`, photo `zoom-in-right`. Background decoration: Kubernetes SVG icon at 20% opacity. |
| **Profile Photo** | Image with hover border+filter overlay | — | Photo background | Hover removes color filter, reveals full photo — transition `0.3s cubic-bezier` |
| **Experience** | Tabbed layout: company tabs on left, job details on right | Tab labels: `#2A363B`, selected: `#CF4647` · Title: 22px weight 600 · Duration: 13px · Body: 14px — all `#2A363B` · `▹` bullet in `#CF4647` | `#F8F6F6` | AOS `fade-down-left` container, `zoom-in-left/right` text. Active tab has a **sliding red indicator bar** on the left (`transition: all 0.5s cubic-bezier`). |
| **Projects** | Alternating left/right: screenshot (in Mac browser frame) + text card | "Featured Project" label: `#CF4647` 13px · Title: `#2A363B` `clamp(24–28px)` weight 600 · Description box text: `#CF4647` · Tech tags: `#2A363B` 13px | Description card: `#F5D061` (yellow). Mac browser frame: `#F5D061` taskbar with red/amber/green dots. | AOS `fade-down-right/left` on text sides, `zoom-in-right/left` on inner elements. Yellow box-shadow glow on images. "View Details" hover: fills red, lifts `translateY(-2px)`. |
| **Certifications** | 3-column card grid with logo + title + platform + date + external link icon | Title: bold · Platform: subdued · Date: small — all dark | Cards: white with `#2A363B` top background stripe behind them | AOS `zoom-out-left` / `zoom-out-right` alternating per card |
| **Contact** | Centered yellow box: label + big title + paragraph + "Say Hello" button | Label: `#CF4647` · Title: `#2A363B` `clamp(35–50px)` weight 700 · Body: `#2A363B` | `#F5D061` (yellow) | Button hover wipe animation (same as all other buttons) |
| **Cursor Lines** | Two thin lines that follow cursor position (right + bottom edge of cursor) | — | `#2A363B` | Real-time cursor tracking via JavaScript, `pointer-events: none` overlay |

---

## All Animations Summary

| # | Animation | Trigger | Technique |
|---|---|---|---|
| 1 | **Gooey blobs** | Mouse move | 3 yellow circles tracked by JS + SVG `feGaussianBlur + feColorMatrix` filter creates liquid merging |
| 2 | **Radial hamburger menu** | Click | Concentric circles `scale(0)→scale(1)` + `rotate(30deg)` bounce; nav labels curved via individual `rotate()` transforms |
| 3 | **Button fill wipe** | Hover | `::after` pseudo-element slides in diagonally, `scale(1.05)` on button |
| 4 | **AOS scroll reveals** | Scroll into view | `zoom-in`, `fade-down`, `zoom-out` variants via AOS library |
| 5 | **Sliding tab indicator** | Click tab | Red bar `translateY()` transition `0.5s cubic-bezier(0.645, 0.045, 0.355, 1)` |
| 7 | **Scroll progress bar** | Scroll | Top bar width increases as page scrolls, bouncy easing |
| 8 | **Profile photo hover** | Hover | Grayscale filter removed + border overlay revealed, `0.3s cubic-bezier` |
| 9 | **Cursor lines** | Mouse move | Two fixed-position thin lines updated in real-time via JS |
---

## Color Changes Made

### Gooey Blobs
| Element | Changed To |
|---|---|
| `.b1` | `#3b9fad` |
| `.b2` | `#83c3cc` (also resized −30%) |
| `.b3` | `#3b9fad` |

### Buttons (`.mk-button` and `.mk-button-md` — CV button)
| State | Property | Changed To |
|---|---|---|
| At rest | border + text color | `#5c5b5b` |
| Hover | fill color | `#5c5b5b` |
| Hover | text color | `#ffffff` |

### Hamburger Icon (global)
| State | Changed To |
|---|---|
| At rest | `#5c5b5b` |
| Clicked / open | `#ffffff` |

### Home Section Only — `[data-section="0"]`
| Element | Changed To |
|---|---|
| Logo background (`.mk-logo-bg`) | `#E5AA70` |
| Hamburger circles at rest | `#7a5133` |
| Hamburger circles when open | `#7d593f` |
| Hamburger text | `#ffffff` |

### Typography
| Element | Changed To |
|---|---|
| `.mk-outer-heading2` | `#7a5133` |

### Mobile Social Icons
| State | Changed To |
|---|---|
| Hover stroke | `#83c3cc` |

### Section Theme Colors (scroll-adaptive k-array)
| Section | layer1 | layer2 | layer3 | layer4 |
|---|---|---|---|---|
| `#my-self` | `#EFC39C` | `#E49B5A` | `#8A4C16` | `#EEEEEE` |
| `#experience` | `#EFC39C` | `#E49B5A` | `#EEEEEE` | `#8A4C16` |
| `#my-work` | `#EFC39C` | `#E49B5A` | `#8A4C16` | `#EEEEEE` |

---

# Claude Prompt — Generate Portfolio Source Code

> Use this prompt in a **new Claude conversation** (claude.ai or Claude Code) to generate a fully structured, runnable portfolio project from scratch.

---

## Prompt

```
I want to build a personal portfolio website. Generate a complete, well-structured
project using Next.js (or React + Vite). The output should include all source files
organized in a proper folder structure — not a single HTML file.

---

## Sections

- Home       — hero with name, tagline, and animated gooey blobs
- My Self    — about me paragraphs
- Experience — work history with tabbed layout
- My Work    — project cards with screenshots
- Certifications
- Contact

---

## Design Requirements

### Color Theme
| Role        | Hex       |
|-------------|-----------|
| Primary bg  | #EFC39C   |
| Accent      | #E49B5A   |
| Dark        | #8A4C16   |
| Neutral     | #EEEEEE   |
| Home header | #E5AA70   |

### Typography
- Headings   : Montserrat
- Body       : Quicksand
- Monospace  : Source Code Pro

### Features
- Scroll-adaptive theme colors that change per section
- Hamburger radial/concentric circle navigation menu
- Gooey animated blobs on the hero section (SVG filter effect)
- AOS (Animate on Scroll) for all section entrance animations
- Fixed social icon sidebar (GitHub, LinkedIn, Instagram, Twitter, YouTube)
- Fixed vertical email on the right side
- Custom cursor lines that follow the mouse
- Scroll progress bar at the top
- Fully responsive — mobile and desktop

---

## Folder Structure Expected

src/
├── components/
│   ├── Header.jsx
│   ├── HamburgerMenu.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── SideElements.jsx
│   └── CursorLines.jsx
├── pages/
│   └── index.jsx
├── styles/
│   └── globals.css
└── public/
    └── assets/

---

## Deliverable

Give me all source files with full code so I can run:

  npm install
  npm run dev

immediately. Do not give me a single compiled HTML file.
```

---

## Tips

- If Claude gives you a single file, reply: **"Split this into separate component files as listed in the folder structure above."**
- If it gives minified/compiled output, reply: **"Give me the raw source code, not the compiled output."**
- Ask for one section at a time if the response gets cut off.

---

## How to Build in Stages with Any LLM

> Design each component step by step first, then add real content at the very end.

### Opening message — set the contract upfront

```
We're building a portfolio website in stages. Do NOT add my real content yet —
use placeholder text everywhere (Lorem Ipsum, [YOUR NAME], [PROJECT TITLE], etc.).
We'll fill in real content at the very end. Each message I send will ask for one
component only. Wait for my approval before moving to the next one.
```

---

### Stage-by-stage example prompts

**Stage 1 — Navbar**
```
Stage 1: Build only the navbar. Fixed position, glass blur background, a circular
logo placeholder on the left, a 'Resume' button on the right. Use this palette:
background #2A363B text, #CF4647 accent, #F8F6F6 page bg. No other sections yet.
```

**Stage 2 — Hero**
```
Stage 2: Add the hero section below the navbar. Large name heading, subtitle in red,
short bio paragraph, a 'Contact me' button. Add the gooey blob animation (3 yellow
floating circles with SVG goo filter that follow the mouse). Nothing else.
```

**Stage 3 — About**
```
Stage 3: Add the About section. Two columns — text + skills list on the left, profile
photo placeholder on the right. AOS scroll animations on each paragraph.
```

**...continue one section per message until all sections are done.**

---

### Final stage — fill in real content

```
Now replace all placeholder text with my real content. Here it is:

Name: [your name]
Field: [your field]
Bio: [your bio]
Skills: [your skills]
Projects: [your projects]
...
```

---

### One rule to always include

```
After each stage, serve it with a local server so I can preview it in the browser
before we continue.
```
