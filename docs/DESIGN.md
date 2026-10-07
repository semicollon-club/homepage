---
version: alpha
name: Semicolon OS 96 (Dell 1996 한국어 적응판)
description: An inspired interpretation of Dell.com's 1996 design language — a catalog-era enterprise web design built around a literal black page frame, vivid flat color-block "ribbon cards" tinted in sage, salmon, periwinkle, sky, peach and lime, chunky Helvetica-Black display titles, Times Roman body copy, and an entire visual vocabulary of pre-Photoshop hand-cut GIF stickers (NEW! bursts, award seals, beveled product photos).

colors:
  primary: "#e51c29"  # 원본 #e91d2a — 흰 글자 대비 AA(4.5:1)에 맞춰 조정
  on-primary: "#ffffff"
  canvas: "#ffffff"
  surface: "#ffffff"
  ink: "#000000"
  frame-ink: "#000000"
  yellow-sticker: "#fcc20f"
  purple-stripe: "#6a26a4"
  link: "#0000ee"

  # Ribbon-card tint family (one per product line)
  tint-olive: "#8e8a25"
  tint-sage: "#b3bd95"
  tint-salmon: "#d77a7a"
  tint-peach: "#e6915d"
  tint-lime: "#c0d4a7"
  tint-sky: "#9ab6c8"
  tint-steel: "#a5b8c0"
  tint-periwinkle: "#8c9ae0"

typography:
  display:
    fontFamily: Arial Black, Black Han Sans
    fontSize: 36px
    fontWeight: 900
    lineHeight: 1.0
    letterSpacing: 0
  heading-1:
    fontFamily: Arial Black, Black Han Sans
    fontSize: 24px
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: 0
  heading-2:
    fontFamily: Helvetica, Noto Sans KR
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading-3:
    fontFamily: Helvetica, Noto Sans KR
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  body:
    fontFamily: Times New Roman, Noto Serif KR
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-sm:
    fontFamily: Times New Roman, Noto Serif KR
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  caption:
    fontFamily: Times New Roman, Noto Serif KR
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  button:
    fontFamily: Helvetica, Noto Sans KR
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0
  link:
    fontFamily: Times New Roman, Noto Serif KR
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  ui-label:
    fontFamily: Helvetica, Noto Sans KR
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0

rounded:
  none: 0px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  s: 6px
  sm: 8px
  m: 10px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
  section-sm: 32px
  section: 40px
  section-lg: 48px

components:
  # ─── Brand-native components ───
  page-frame:
    backgroundColor: "{colors.frame-ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: 8px

  top-banner:
    backgroundColor: "{colors.frame-ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  section-eyebrow-olive:
    backgroundColor: "{colors.tint-olive}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: 24px 16px

  section-eyebrow-salmon:
    backgroundColor: "{colors.tint-salmon}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: 24px 16px

  ribbon-card-title:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.heading-3}"
    rounded: "{rounded.none}"
    padding: 6px 12px

  ribbon-card-body-sage:
    backgroundColor: "{colors.tint-sage}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-salmon:
    backgroundColor: "{colors.tint-salmon}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-peach:
    backgroundColor: "{colors.tint-peach}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-lime:
    backgroundColor: "{colors.tint-lime}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-sky:
    backgroundColor: "{colors.tint-sky}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-steel:
    backgroundColor: "{colors.tint-steel}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  ribbon-card-body-periwinkle:
    backgroundColor: "{colors.tint-periwinkle}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 16px

  cta-block-red:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 16px

  phone-callout:
    backgroundColor: "{colors.frame-ink}"
    textColor: "{colors.primary}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.none}"
    padding: 4px 8px

  buy-a-dell-sticker:
    backgroundColor: "{colors.yellow-sticker}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 4px 8px

  new-burst-sticker:
    backgroundColor: "{colors.yellow-sticker}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 4px 8px

  cert-seal:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    size: 64px

  icon-label-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.none}"
    padding: 8px

  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 4px 6px

  button-primary:
    backgroundColor: "{colors.frame-ink}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 6px 16px

  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 6px 16px

  button-text-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.link}"
    typography: "{typography.link}"
    rounded: "{rounded.none}"

  footer-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    typography: "{typography.body-sm}"
    padding: 16px

  # ─── Examples (illustrative, kit-mirror) — injected by derive-examples-block.mjs ───

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with the base white surface."
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.frame-ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    item-divider: "{colors.frame-ink}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.surface}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.s} {spacing.md}"
    rowBorder: "{colors.frame-ink}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"

---


## Semicolon 적용 규칙 (한국어 적응판)

이 문서는 Dell 1996 디자인 분석 원문을 바탕으로 세미콜론 홈페이지에 맞게 고친 값이 반영되어 있습니다. 아래 원문(Overview 이하)과 다를 때는 **이 절이 우선**합니다. 코드의 토큰은 `src/index.css` 에 있습니다.

- **레드**: 원본 `#e91d2a` 는 흰 글자 대비가 4.49:1 로 AA(4.5:1)에 못 미쳐 `#e51c29` 로 조정했습니다 (흰 글자 4.64:1, 검정 위 4.53:1).
- **한글 폰트**: 원문의 시스템 폰트에는 한글이 없어 같은 역할의 웹폰트를 뒤에 둡니다 — 제목 `Arial Black → 블랙한산스`, UI `Helvetica → 노토 산스 KR Bold`, 본문 `Times New Roman → 노토 세리프 KR`. 원문의 "웹폰트 없음" 원칙의 유일한 예외입니다.
- **글자 크기**: 한글 가독성 때문에 본문 14→16px, body-sm 12→14px, caption 11→12px, 버튼·라벨 12→13px 로 키웠습니다.
- **링크**: 1996 파랑 `#0000ee` 는 흰 면 위에서만 씁니다. 틴트 8색 중 5색 위에서는 대비가 모자라므로 틴트 면 안의 링크는 검정 밑줄입니다.
- **포커스**: 원문처럼 호버 상태는 두지 않지만, 키보드 포커스는 2px 점선 외곽선으로 반드시 보입니다.
- **브랜드 요소 번역**: 전화번호 콜아웃 → 상태바의 "1기 상시 모집" / BUY a DELL·NEW! 스티커 → "1기 모집!" 같은 노란 배지 / 제품 사진 → 픽셀 아이콘 / PC Magazine 수상 마크 → 쓰지 않음 (사실이 아닌 배지는 만들지 않습니다).
- **틴트**: "제품군마다 한 색" 규칙을 "앱마다 한 색"으로 씁니다 (`src/data/apps.ts`).

| 앱 | 주소 | 틴트 |
|---|---|---|
| 홈 | `/` | olive |
| 소개 | `/about` | salmon |
| 활동 | `/activities` | sage |
| 일정 | `/schedule` | sky |
| 조직도 | `/organization` | steel |
| 지원 안내 | `/recruit` | peach |
| 로그인 | `/login` | lime |
| 오류(404) | 그 외 | periwinkle |

## OS 셸 (Semicolon OS 96)

"1996년에 Dell 이 휴대폰 OS 를 만들었다면." 사이트 전체가 하나의 기기 화면처럼 동작합니다. 구현은 `src/layouts/Layout.tsx` 와 `src/components/` 의 셸 부품입니다.

| Dell 1996 요소 | OS 에서의 역할 | 구현 |
|---|---|---|
| page-frame | 기기 테두리 (8 / 4 / 2px) | `Layout.css` `.os` |
| top-banner | 상태바 — 시계, 레드 콜아웃, 신호·배터리 | `StatusBar.tsx` |
| (원문에 없음) | 내려오는 패널 — 시계, 바로가기 타일, 알림 | `Shade.tsx`, `usePullDown.ts` |
| 아이콘 링크 격자 | 홈 화면 앱 아이콘 | `App.tsx` |
| ribbon-card | 알림 카드, 앱 본문 | `RibbonCard.tsx` |
| icon-label-nav | 독 (홈·소개·조직도·지원 안내) | `Dock.tsx` |
| (원문에 없음) | 앱 창 — 검정 제목줄 + 본문 | `AppWindow.tsx` |

- **패널**: 상태바 클릭·Enter / 상태바 끌어내리기 / 화면 맨 위에서 휠을 위로 / 터치로 맨 위에서 당기기로 엽니다. 위로 밀기, 패널 위에서 휠 아래로, Esc, 손잡이·상태바, 타일 선택으로 닫습니다. 움직임은 `steps(6)` 320ms.
- **앱 창**: 누른 아이콘 자리에서 `steps(5)` 320ms 로 커지고, 닫을 때 반대로 줄어듭니다. 주소로 바로 들어오면 애니메이션 없이 열린 상태로 시작합니다.
- `prefers-reduced-motion` 이면 패널·앱 창 모두 애니메이션 없이 바로 바뀝니다.
- 문서(body)는 스크롤하지 않습니다. 홈 화면과 앱 창 본문이 각자 스크롤되고, 지금 보이는 쪽은 `src/lib/scroll.ts` 로 찾습니다.
- 모든 이동은 실제 주소가 있는 링크입니다 (새 탭·공유·뒤로가기 가능). 제스처는 보조 수단이고, 버튼·링크만으로 모든 기능을 쓸 수 있어야 합니다.
- 데스크톱은 화면 전체가 OS 이고 본문은 760px 가운데 정렬입니다.


## Overview

Dell's December 1996 home page is a perfectly preserved fossil of catalog-era enterprise web design — the moment when a Fortune-100 brand decided the web was *important enough* to invest in, but two years before CSS would be widely adopted and three years before "design system" was a phrase anyone used. Every visual choice on the page is a downstream consequence of that constraint: layout via HTML tables, type via the browser's built-in font stack (Arial Black / Helvetica / Times Roman), color via 8-bit-safe flat fills, and decoration via hand-cut GIF "stickers" (the NEW! burst, the round PC Magazine Readers' Choice seal, the beveled "BUY a DELL" yellow tab). The page is bordered — literally bordered, in a 1-cell-wide black HTML table — and inside that frame, every product line gets a "ribbon card": a white title bar with a sharp black underline, a tinted body block in one of eight catalog colors (sage, salmon, peach, lime, sky, steel, periwinkle, olive), and a beveled product photograph notched into the right edge of the card.

The brand voice carries through in two anchors: a vivid Dell-red CTA panel on the left of the homepage (cream-yellow Times Roman copy on a `{colors.primary}` fill, set inside the black frame) and a screaming red phone number — `1-800-213-DELL` — pinned to the top-right of every page, because in 1996 the website was a brochure that ended with a phone call. The footer is a row of four hand-drawn icon-labels (FIND / HOME / ONLINE STORE / SERVICE & SUPPORT) linked by a thin green horizontal rule, and a single classic-Mosaic-blue underlined "Copyright" link sitting above the legal small print in Times Roman.

**Key Characteristics:**
- Literal page frame: every page sits inside a `{colors.frame-ink}` (black) outer border ~8 px thick — the design treats the browser window as a printed picture frame
- Flat color-block "ribbon cards" tint each product family with a dedicated catalog color (`{colors.tint-sage}` Latitude, `{colors.tint-salmon}` OptiPlex GX, `{colors.tint-periwinkle}` PowerEdge, `{colors.tint-sky}` Dellware, etc.) — no gradients, no shadows, no opacity
- Chunky display typography in `{typography.display}` (Arial Black 36 / weight 900) for section title blocks; `{typography.heading-2}` (Helvetica Bold 16) for product row titles; `{typography.body}` Times Roman 14 for everything else
- Hand-cut GIF "stickers" overlay the layout: yellow "BUY a DELL" tab in the top right, angled "NEW!" bursts on new product rows, round red PC Magazine Readers' Choice seals
- `{colors.primary}` (Dell red) reserved for two things only: the homepage CTA panel and the top-right phone number — never decorative
- Footer icon-nav with classic-blue (`{colors.link}` #0000ee) anchor underlines — the unmistakable Netscape 3.x link colour

## Colors

### Brand & Accent
- **Dell Red** (`{colors.primary}` — #e91d2a): The brand's signature red. Reserved for the homepage CTA panel ("At Dell.com, we'll help you find the right system…"), the top-right phone number, and the PC Magazine Readers' Choice seal ring. Never used as a card body fill.
- **Dell Yellow** (`{colors.yellow-sticker}` — #fcc20f): Sticker yellow — the "BUY a DELL" tab in the top banner, and the angled "NEW!" bursts overlapping new product rows.
- **Dell Purple** (`{colors.purple-stripe}` — #6a26a4): The accent stripe behind the lowercase ".com" / "DELL" wordmark text — appears inside the "BUY a DELL" sticker chrome only.

### Surface
- **Frame Ink** (`{colors.frame-ink}` — #000000): Pure black. The page frame, the top banner background, button fills, and all 1 px ribbon-card hairlines.
- **Canvas** (`{colors.canvas}` — #ffffff): True white inside the frame. The page surface, the ribbon-card title-bar fill, and the icon-label nav backdrop.

### Text
- **Ink** (`{colors.ink}` — #000000): Body text, headings, link copy before visit. Pure black; no warm-near-black softening in 1996.
- **Link** (`{colors.link}` — #0000ee): Classic Mosaic / Netscape 3.x default link blue. Underlined inline anchors ("Copyright", "(Terms of Use)", inline "from Dell's award-winning service and support teams").

### Ribbon-Card Tint Family
Eight catalog colors, one per product line — these are the page's chromatic personality:
- **Olive** (`{colors.tint-olive}` — #8e8a25): "DIMENSION DESKTOPS" eyebrow block
- **Sage** (`{colors.tint-sage}` — #b3bd95): Latitude Notebooks ribbon body
- **Salmon** (`{colors.tint-salmon}` — #d77a7a): "OPTIPLEX DESKTOP SYSTEMS" eyebrow + GX Series body
- **Peach** (`{colors.tint-peach}` — #e6915d): Dimension card body + OptiPlex Gs body
- **Lime** (`{colors.tint-lime}` — #c0d4a7): OptiPlex G Series body
- **Sky** (`{colors.tint-sky}` — #9ab6c8): Dellware ribbon body
- **Steel** (`{colors.tint-steel}` — #a5b8c0): Dimension XPS Pro ribbon body
- **Periwinkle** (`{colors.tint-periwinkle}` — #8c9ae0): PowerEdge ribbon body

The tints are saturated but not vivid — they sit just below true neutral chroma, the signature of GIF-era web-safe-palette quantization.

## Typography

### Font Family

Three system-stack families, no webfonts (webfonts didn't exist yet):

- **Arial Black** (fallback: Helvetica, system-ui sans) — display headings only. The chunky stenciled section eyebrows ("DIMENSION DESKTOPS", "OPTIPLEX DESKTOP SYSTEMS") are Arial Black at weight 900, set in all-caps with normal tracking.
- **Helvetica** (fallback: Arial, system-ui sans) — product-row titles, button labels, the top banner's "BUILD YOUR OWN COMPUTER. ONLINE." headline. Always bold (700), always all-caps.
- **Times New Roman** (fallback: Times, serif) — body copy. Every paragraph, every caption, every inline anchor sits in default-rendered Times Roman. The serifs date the design instantly — body text on the modern web is almost never serif.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display}` | 36px | 900 | 1.0 | Section eyebrow titles ("DIMENSION DESKTOPS", "OPTIPLEX DESKTOP SYSTEMS") |
| `{typography.heading-1}` | 24px | 900 | 1.05 | Sub-page hero headlines |
| `{typography.heading-2}` | 16px | 700 | 1.2 | Top banner copy, product-line H1 ("Reliable PC's for High-Performance Computing.") |
| `{typography.heading-3}` | 14px | 700 | 1.2 | Ribbon-card title bar ("OPTIPLEX GX PRO", "DIMENSION XPS") |
| `{typography.body}` | 14px | 400 | 1.4 | Default paragraph copy, ribbon-card body, CTA-panel copy |
| `{typography.body-sm}` | 12px | 400 | 1.4 | "This site is best viewed with browser versions 3.0 and higher." |
| `{typography.caption}` | 11px | 400 | 1.35 | Footer copyright text |
| `{typography.button}` | 12px | 700 | 1.0 | Button labels, "NEW!" sticker, BUY-a-DELL sticker |
| `{typography.ui-label}` | 12px | 700 | 1.0 | Icon-label nav uppercase labels ("FIND", "HOME", "ONLINE STORE", "SERVICE & SUPPORT") |

### Principles
- Sans for UI, serif for body — the inverse of the modern convention, and a dead giveaway of mid-90s typography.
- Display weights are extreme (900 / Black) and never softer. The "Dimension" / "OptiPlex" eyebrow blocks lean on the heaviest weight the font ships.
- No letter-spacing tracking adjustments — pixel-fonts in 1996 didn't reward it. Everything is set at the browser's default kern.
- Line-height is tight on display (1.0) and conventional on body (1.4) — a holdover from print-magazine catalog layout.

### Note on Font Substitutes
All three families are operating-system defaults on every consumer OS shipped in 1996 (Windows 95: Arial / Times New Roman; Mac OS 7.5+: Helvetica / Times). The brand had no fallback strategy because no fallback was needed — the fonts were always present. Modern reproductions can stay on this exact stack (Arial Black / Helvetica / Times New Roman) for authenticity.

## Layout

### Spacing System

- **Base unit**: 4 px (with 2 / 6 / 10 intermediates). 1996 page layout was driven by HTML table cell padding (`cellpadding="4"` / `cellspacing="0"`) rather than a designed scale.
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.s}` 6px · `{spacing.sm}` 8px · `{spacing.m}` 10px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 20px · `{spacing.xxl}` 24px · `{spacing.section-sm}` 32px · `{spacing.section}` 40px · `{spacing.section-lg}` 48px.
- **Card interior padding**: `{spacing.md}` 12 px vertical / `{spacing.lg}` 16 px horizontal on ribbon-card bodies.
- **Section vertical rhythm**: `{spacing.section}` 40 px between product-ribbon stacks; `{spacing.section-sm}` 32 px between the eyebrow color block and its first ribbon-card.

### Grid & Container
- Fixed-width table layout pinned around 760 px wide — the de facto 1996 standard targeting 800×600 monitors with a small scrollbar gutter.
- Two-column outer structure: left rail (~28 %) carries the homepage icon-link grid + CTA red panel; right column (~72 %) carries the product ribbon stack.
- No grid system in the modern sense — every section is its own `<table>` declaration with hard-coded column widths.

### Whitespace Philosophy
Tight by modern standards. Catalog density wins over editorial breath — every pixel inside the black frame is doing work (illustration, color block, headline, body). The compensating decompression happens *inside* each ribbon card: white title bar + tinted body block + product photo notch creates internal breathing room without enlarging the overall page.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Period default | 800 × 600 | Fixed 760 px layout, designed for the era's standard monitor |
| Modern desktop | 1280+ px | Layout sits centered with generous side gutters — emulates "magazine spread in the middle of the screen" |
| Tablet | 768 px | Black frame compresses to 4 px; ribbon-cards stack at full width inside |
| Mobile | < 480 px | Black frame to 2 px; two-column structure collapses to single column; left rail icon grid stacks above the right-column product stack |

#### Touch Targets
1996 had no notion of touch — the original designs assume mouse-only. Modern reproductions need to widen the icon-label nav targets to 44 × 44 px minimum at mobile (the 1996 icons sat at ~24 × 24 with 8 px label below, well under modern guidelines).

#### Collapsing Strategy
- At ≤ 768 px, the homepage's left-rail icon-link grid (Online Store / Service / Why Dell? / Government / Worldwide / Order Status / Company Info / U.S. Careers) collapses from a 2 × 4 grid to a single-column stack
- Ribbon-card right-edge product photo notch becomes a top-aligned full-width image at mobile
- The top banner's tagline ("BUILD YOUR OWN COMPUTER. ONLINE.") shrinks one type tier; the phone number wraps below the BUY-a-DELL sticker
- Footer icon-label nav stays 4-up at all widths — the icons are small enough to survive

#### Image Behavior
Product photos are bitmap GIFs with hand-applied bevel shadows — they were authored at fixed pixel widths (typically 80–120 px wide). The right-edge notch effect was achieved by table-cell negative spacing. Modern reproductions should keep the bevel shadow effect (it's signature) but use SVG drop-shadow or CSS `filter: drop-shadow(2px 2px 0 #000)` to recreate it crisply at high-DPI.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flush | No shadow, no border | Body text, copyright row, footer band background |
| 1 — Hairline | `1px solid {colors.frame-ink}` | Ribbon-card outer edge, table-cell dividers |
| 2 — Frame | `8px solid {colors.frame-ink}` | The page-frame border around the entire viewport |
| 3 — Bevel | Hard-edge 1 px highlight + 1 px shadow on GIF stickers and product photos | "BUY a DELL" yellow sticker, NEW! bursts, award seals, product photographs |

There are **no soft shadows** in the 1996 design — every depth cue is either a hard 1 px border or a hand-painted bevel inside a GIF. Modern reproductions that need to feel period-accurate must resist the urge to add Material-style elevation or atmospheric drop shadows.

### Decorative Depth
Bevels and frames carry the entire depth vocabulary:
- The **page frame** is the strongest depth cue — it tells the viewer "this is a contained document, not a continuous canvas."
- **Bevels on stickers** (BUY a DELL, NEW!, PC Magazine Readers' Choice) push them forward off the page surface as if pinned on with thumbtacks.
- **Product photographs** carry their own hand-painted bevel + drop-shadow, baked into the GIF itself.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Universal default — buttons, cards, inputs, banners, page frame, ribbon-card bodies, eyebrow blocks |
| `{rounded.full}` | 9999px | Circular award seals (PC Magazine Readers' Choice), the round "h" sticker on the HOME icon |

The 1996 design has effectively **two** radius modes: square (everything) and round (decorative seal stickers). No 4 / 8 / 12 px subtle radius tier — that vocabulary belongs to the post-Bootstrap web.

### Photography Geometry
Product photos are rectangular GIFs with their own internal beveled "monitor" framing — they sit at native pixel dimensions, never scaled. Aspect ratios cluster around 4:3 (the era's standard CRT shape). Avatars don't exist on this site — staff photography was reserved for "About Dell" pages not captured in these snapshots.

## Components

> **No hover states documented.** Per the global no-hover policy, every component below documents Default state only.

### Frame & Banner

**`page-frame`** — the literal black border around the entire viewport.
- Background `{colors.frame-ink}`, padding `{spacing.sm}` 8 px on every side, no radius.
- The page sits *inside* this border. Treat it as a non-negotiable container chrome; collapsing it on mobile is acceptable (to ~4 px), but removing it entirely loses the brand.

**`top-banner`** — pure-black strip running across the top with white "BUILD YOUR OWN COMPUTER. ONLINE." headline + sub-tagline, the yellow "BUY a DELL" sticker pinned at right, and the red "1-800-213-DELL" phone number.
- Background `{colors.frame-ink}`, text `{colors.canvas}`, type `{typography.heading-2}`, padding 12 px vertical / 16 px horizontal, no radius.

### Section Eyebrow Blocks

**`section-eyebrow-olive`** — large tinted color block holding the chunky stenciled section title ("DIMENSION DESKTOPS"). Used at the top of the Dimension product page.
- Background `{colors.tint-olive}`, text `{colors.ink}`, type `{typography.display}` (Arial Black 36 / 900), padding 24 × 16, no radius.

**`section-eyebrow-salmon`** — same chrome with the OptiPlex line's salmon-pink fill ("OPTIPLEX DESKTOP SYSTEMS").
- Background `{colors.tint-salmon}`, otherwise identical to the olive variant.

### Ribbon Cards

The brand's signature component. Each product-row "card" is a stack of three pieces:
1. **`ribbon-card-title`** — white horizontal title bar with the product variant name in Helvetica Bold all-caps (e.g. "OPTIPLEX GX PRO", "DIMENSION XPS", "POWEREDGE SERVERS"). 1 px bottom border in `{colors.frame-ink}`.
   - Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.heading-3}`, padding 6 × 12, no radius.
2. **`ribbon-card-body-<tint>`** — color-block body in one of eight tints, holding the short marketing pitch in `{typography.body}` (Times Roman 14). Padding 12 × 16. The product photograph notches into the right edge with a transparent GIF cutout.
3. **Photo notch** — the GIF sits in the rightmost ~25 % of the row, hanging slightly above and below the body bar like a card pinned to a corkboard.

Each tint variant is its own component entry. Pick the one that matches the product family:

- **`ribbon-card-body-sage`** — `{colors.tint-sage}` fill, used for Latitude Notebooks rows
- **`ribbon-card-body-salmon`** — `{colors.tint-salmon}` fill, used for OptiPlex GX Series rows
- **`ribbon-card-body-peach`** — `{colors.tint-peach}` fill, used for Dimension rows and OptiPlex Gs
- **`ribbon-card-body-lime`** — `{colors.tint-lime}` fill, used for OptiPlex G Series rows
- **`ribbon-card-body-sky`** — `{colors.tint-sky}` fill, used for Dellware rows
- **`ribbon-card-body-steel`** — `{colors.tint-steel}` fill, used for Dimension XPS Pro rows
- **`ribbon-card-body-periwinkle`** — `{colors.tint-periwinkle}` fill, used for PowerEdge Server rows

All seven share identical chrome: 1 px solid `{colors.frame-ink}` border, `{spacing.md}` × `{spacing.lg}` (12 × 16) padding, `{rounded.none}` (sharp corners), `{typography.body}` Times Roman 14 inside. Only the fill color changes per product family.

### Call-to-Action

**`cta-block-red`** — the homepage's vivid Dell-red panel ("At Dell.com, we'll help you find the right system, configure it, price it, and order it…").
- Background `{colors.primary}`, text `{colors.on-primary}` (white), 1 px solid frame-ink border, type `{typography.body}` (Times Roman 14), padding 16 px, no radius.
- One per page maximum. The brand's most aggressive attention-grab — never use it for anything except a top-tier sales message.

**`phone-callout`** — top-right phone number ("1-800-213-DELL") rendered as red on the black banner.
- Background `{colors.frame-ink}`, text `{colors.primary}`, type `{typography.heading-2}` Helvetica Bold 16, padding 4 × 8, no radius. Pinned to the right of the top banner on every page.

### Stickers (GIF-style overlays)

**`buy-a-dell-sticker`** — yellow rectangular sticker with "BUY a DELL" in Helvetica Bold, the "a" set in a small purple stripe, the "DELL" wordmark in black. Pinned to the top-right of every page.
- Background `{colors.yellow-sticker}`, text `{colors.ink}`, 1 px black border, type `{typography.button}`, padding 4 × 8, no radius.

**`new-burst-sticker`** — angled yellow burst with "NEW!" in Helvetica Bold black, overlapping the right side of new product ribbon-cards. Slight rotation (~15°) gives it the pinned-on-with-tape feel.
- Background `{colors.yellow-sticker}`, text `{colors.ink}`, type `{typography.button}`, padding 4 × 8, no radius (rotation applied separately).

**`cert-seal`** — round red award seal: center reads "PC MAGAZINE", ringed by "SERVICE · RELIABILITY · READERS' CHOICE", with an inner white field and red bordered ring. Sits on the right rail of product pages.
- Background `{colors.primary}`, text `{colors.canvas}`, type `{typography.button}`, rounded `{rounded.full}`, 64 px size.

### Navigation

**`icon-label-nav`** — bottom-of-page navigation row: four hand-drawn icons (eyeglasses-FIND / house-HOME / yellow-sticker-ONLINE STORE / wrench-SERVICE & SUPPORT) connected by a thin green horizontal rule, each with an uppercase Helvetica label beneath.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.ui-label}`, padding 8 px around each icon-label pair, no radius.
- The connecting green rule is part of the GIF imagery, not a CSS border.

### Inputs & Buttons

**`text-input`** — bordered HTML input. White fill, 1 px solid black border, Times Roman 14 inside.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid frame-ink, type `{typography.body}`, padding 4 × 6, no radius.
- Used on the Search and "Configure & Buy" forms (not visible in these three captures but consistent with the era's HTML 3.2 form widgets).

**`button-primary`** — black filled button with white Helvetica Bold uppercase label.
- Background `{colors.frame-ink}`, text `{colors.on-primary}`, 1 px solid frame-ink, type `{typography.button}`, padding 6 × 16, no radius.

**`button-secondary`** — white filled outlined button. Same chrome with inverted colours.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid frame-ink, type `{typography.button}`, padding 6 × 16, no radius.

**`button-text-link`** — bare underlined anchor in classic-Mosaic blue.
- Text `{colors.link}` #0000ee, type `{typography.link}` Times Roman 14, underline on default. No padding, no radius.

### Footer

**`footer-band`** — the bottom of every page: icon-label nav row, classic-blue Copyright link, "(Terms of Use)" parenthetical, browser-compatibility small print, and the Microsoft BackOffice / Internet Explorer logo banners.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px top border in frame-ink, type `{typography.body-sm}`, padding 16 px.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces (`scripts/derive-examples-block.mjs`). Each `ex-*` entry references brand-native primitives so downstream consumers (`/preview-design`, `/generate-kit`) re-skin the same 10 surfaces consistently. `TO_FILL` markers indicate missing primitives — resolve in the LLM judgment pass.

**`ex-pricing-tier`** — Default Pricing tier card. Re-uses feature-card chrome with the base white surface.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** — What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** — Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** — Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — same chrome as feature-card with elevated shadow.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — Empty-state illustration frame.
- Properties: `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast notification surface — feature-card shape + medium shadow.
- Properties: `backgroundColor`, `rounded`, `padding`, `typography`


## Do's and Don'ts

### Do
- Keep the literal `{components.page-frame}` black border on every page — this is the brand's single most identifiable container chrome.
- Reserve `{colors.primary}` (Dell red) for the `{components.cta-block-red}` panel and the `{components.phone-callout}` only. Every other use dilutes the urgency signal.
- Use the eight ribbon-card tint colors (`{colors.tint-olive}` / sage / salmon / peach / lime / sky / steel / periwinkle) as a *family* — pick one per product line and stay with it across the line's marketing surfaces.
- Set every display headline in `{typography.display}` (Arial Black 36 / weight 900). The brand's typographic register depends on extreme weight against flat color.
- Keep body copy in `{typography.body}` Times Roman 14 — substituting a modern sans loses the catalog feel entirely.
- Render every CTA / button at `{rounded.none}` (0 px). Modern soft-radius buttons betray the era.
- Use hand-painted bevels / hard-edge GIF shadows on stickers and product photos. Never substitute a soft CSS shadow.

### Don't
- Don't introduce a chromatic accent outside the eight catalog tints + Dell red + Dell yellow + classic link blue. The palette is closed by design.
- Don't soften any corner. `{rounded.none}` is the universal modifier; only award seals get `{rounded.full}`.
- Don't replace Times Roman body with Arial / Helvetica / Inter / a webfont — the serif body is the era's signature.
- Don't add soft drop-shadows or atmospheric gradients. The brand has hard borders and flat fills; everything else reads as anachronism.
- Don't crop or "tuck" product photos with `border-radius` or `clip-path`. The notch into the ribbon-card right edge is the framing — the photo itself stays a hard rectangle.
- Don't pair two `{components.cta-block-red}` panels on the same page. The red fill is meant to be the singular attention pole.
- Don't strip the `{components.phone-callout}` from the top banner. In 1996 the website existed to drive phone-call orders; the phone number IS the navigation.
