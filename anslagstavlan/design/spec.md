# Anslagstavlan – Direction 1a "Korkväggen"

Student notice board for Tetiko. Swedish UI. Two surfaces: lunchroom TV (1920×1080, view-only) and student desktop (browse/post). See 1a-tv.png and 1a-desktop.png.

## Concept
Paper notes pinned to a board. Warm, playful, Tetiko colors but louder than the staff intranet.

## Content rules
- Categories: Låna & byta (favours/borrow/swap), Grupparbete (project partners), Köp, sälj & skänk (sub-tags: Säljes, Köpes, Skänkes)
- Posts go live immediately; every post has an "Anmäl" (report) action
- Poster can choose to be anonymous ("Anonym")
- TV is awareness only — no QR/action; footer tells students to post via Intranätet → Anslagstavlan

## Tokens
- Text dark #3a3833, muted #5c5a54 / #7a776f
- Board bg TV #e6e9df, desktop #eef1e9; note paper #fffdf7; borders #dfe3d8, dashed dividers #d6d9cf
- Brand green #78b542 (Låna & byta, primary button)
- Grupparbete oklch(0.74 0.12 245) (blue); Köp & sälj oklch(0.78 0.13 65) (orange)
- Fonts: Fraunces 600–700 (headings, note titles), Inter (UI/body)

## TV (1920×1080)
- Padding 64/80. Header: "Anslagstavlan" Fraunces 80/700 + subtitle 32px; live clock 80/700 + weekday/date right
- Grid 1.3fr / 1fr, gap 72
- Left: featured note, rotate(-1.2deg), shadow, padding 72; colored "tape" category label at top (rotated 2deg); title Fraunces 84; body 38; footer who/time 30 with dashed top border. Rotates every 7s; pill progress dots below
- Right: "Senast upplagt" label + 5 small notes (category chip, time, title 32/600), alternating slight rotations ±0.4–0.9deg
- Footer: green dot + "Lägg upp eget inlägg från datorn: Intranätet → Anslagstavlan"

## Desktop (1440×900)
- Top bar 76px paper bg: logo (Fraunces 28), search field, "+ Nytt inlägg" green button
- H1 "Vad behöver du idag?" Fraunces 40 + filter chips right (Alla / categories; active = dark fill)
- 3-column grid of note cards (radius 6, soft shadow, tiny rotation): category chip + time, title Fraunces 21, body 14, footer: poster name, "Anmäl" text button, "Svara" dark button

## Not yet designed
Post detail page, create-post form (incl. anonymous toggle). Open questions: anonymous posts on TV?, post expiry, private replies vs public thread, "Löst" state.
