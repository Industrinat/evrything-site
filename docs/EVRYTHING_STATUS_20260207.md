# 🚚 EVRYTHING AB — WEBBPLATS STATUSRAPPORT

## Datum: 2026-02-07
## Kund: Marcus Lindström, Evrything AB
## Projekt: evrything.se — Ny företagswebbplats

---

## 📂 PROJEKTÖVERSIKT

| Vad | Detalj |
|-----|--------|
| **Projekt** | Next.js 16.1.6 webbplats |
| **Lokalt** | `~/projects/evrything-site` |
| **Dev-server** | `http://192.168.68.112:3000` |
| **Server** | OVH 162.19.252.99, PM2-namn: `evrything`, port 3003 |
| **Domän** | evrything.se (ej konfigurerad ännu) |
| **Bilder** | 33 st i `public/images/` |
| **Design** | Ljus design, blå accenter, orange accent (#f59e0b) |

---

## ✅ KLART

### Startsida (`/`)
- Ken Burns hero-slider med 5 bilder (IMG_0075, IMG_1038, IMG_0404, IMG_3758, IMG_2946)
- Gradient overlay (lightened: from-black/40 via-black/20 to-transparent)
- Tjänster-sektion med 6 tjänster
- Städer-sektion (Göteborg, Stockholm, Malmö, etc.)
- Kundrecensioner
- Footer med Flowen-branding

### Navbar (`components/Navbar.tsx`)
- Transparent-to-white on scroll (startsida)
- Alltid vit bakgrund på undersidor
- Dynamisk logga: orange (v8) på transparent, svart (dark) på vit
- **Dropdown-meny** under Tjänster med alla 6 tjänstelänkar
- Länkar: Startsida, Tjänster (dropdown), Om oss, Miljö, Kontakt

### Om oss (`/om-oss`)
- Marcus AI-genererad portrait (marcus-portrait.png)
- Företagshistoria och värderingar
- Bildgrid

### Kontakt (`/kontakt`) ✅ FUNGERANDE FORMULÄR
- Prisförfrågan med fält: Namn, Företag, Telefon, E-post, Transporttyp (dropdown), Från, Till, Meddelande
- **API-route** (`/api/contact/route.ts`) skickar mail via Microsoft Graph
- Mottagare: booking@evrything.se + CC: daniel.olsson@industrinat.se
- Avsändare: info@flowen.eu (Graph)
- Spam-skydd: honeypot, tidskontroll (3 sek), rate limiting (5/timme), suspicious content filter, user-agent check
- Formaterat mail med emojis (📋 NY PRISFÖRFRÅGAN)
- **Testat och fungerar** — Marcus fick testmeddelandet (20 pingviner till Nordpolen 😄)
- `.env.local` med Graph-credentials (TENANT_ID, CLIENT_ID, CLIENT_SECRET)

### Miljö (`/miljo`)
- Grön-themed hållbarhetssida
- Vision: Smart ruttplanering, Samlastning, Moderna fordon
- Initiativ: CO₂, Hållbara partnerskap, Miljöcertifiering, Cirkulär logistik
- Citat från Marcus med portrait
- Bilder: IMG_0099, IMG_2946, IMG_1524

### Tjänstesidor (6 st) — v2 med SEO
Delade komponent: `components/ServicePage.tsx`

Varje sida har: Hero, **SEO-text (3 stycken)**, Features (unik rubrik per sida), Details (numrerade steg), Gallery (4 bilder), CTA, Footer.

| Sida | URL | Hero-bild | Icon |
|------|-----|-----------|------|
| Transport & Distribution | `/tjanster/transport-distribution` | IMG_1038 | Truck |
| Inrikes & Utrikesfrakt | `/tjanster/inrikes-utrikesfrakt` | IMG_0404 | Globe |
| Lager & Magasinering | `/tjanster/lager-magasinering` | IMG_2874 | Warehouse |
| Expressbud & Ontime | `/tjanster/expressbud` | IMG_0576 | Zap |
| Bärhjälp & Inbärningar | `/tjanster/barhjalp` | IMG_1225 | HandMetal |
| Transportförmedling | `/tjanster/transportformedling` | IMG_3795 | Package |

**v2-förbättringar:**
- Unika rubriker per tjänst (inte "Vad ingår?" överallt)
- SEO-texter med lokala nyckelord (Göteborg, Sverige, Norden)
- `seoTitle` och `seoText[]` props i ServicePage
- `featuresTitle` och `detailsTitle` props för unika rubriker

### Logotyper
- `evrything-logo-v8.png` — Orange text, transparent bakgrund (navbar på hero)
- `evrything-logo-dark.png` — Svart text (navbar på vit bakgrund)
- Navbar växlar automatiskt mellan dessa beroende på scroll/sida

---

## 🔧 TEKNISK SETUP

### Filer
```
evrything-site/
├── app/
│   ├── page.tsx                    # Startsida (Ken Burns hero)
│   ├── om-oss/page.tsx            # Om oss
│   ├── kontakt/page.tsx           # Kontakt (v2, fungerande formulär)
│   ├── miljo/page.tsx             # Miljö
│   ├── api/contact/route.ts       # Graph mail API
│   └── tjanster/
│       ├── transport-distribution/page.tsx
│       ├── inrikes-utrikesfrakt/page.tsx
│       ├── lager-magasinering/page.tsx
│       ├── expressbud/page.tsx
│       ├── barhjalp/page.tsx
│       └── transportformedling/page.tsx
├── components/
│   ├── Navbar.tsx                  # Med dropdown-meny
│   ├── HeroKenBurns.tsx           # Ken Burns slider
│   └── ServicePage.tsx            # Delad tjänstekomponent (v2)
├── public/images/                  # 33 bilder + logotyper
├── .env.local                      # Graph credentials
└── globals.css                     # Med kb keyframes
```

### CSS-variabler (globals.css)
```css
--blue-50 till --blue-900   # Blå palette
--accent: #f59e0b           # Orange accent
```

### Graph Mail Config (.env.local)
```
TENANT_ID=be17d48d-...
CLIENT_ID=9c1894b5-...
CLIENT_SECRET=YAL8Q~...
```

---

## ❌ KVAR ATT GÖRA

### Prioritet 1 — Före lansering
- [ ] **Blogg/Nyheter** — CMS-kopplad via Flowen (SOME-modulen)
- [ ] **SEO metadata** — title, description, og:image per sida
- [ ] **Mobilanpassning** — testa och finjustera responsive
- [ ] **Deploy till evrything.se** — DNS, nginx, SSL

### Prioritet 2 — Efter lansering
- [ ] **Marcus e-post** — Flytta från One.com till Office 365 (marcus@evrything.se)
- [ ] **Google Reviews** — API-integration för recensioner
- [ ] **Social media-länkar** — LinkedIn, Facebook, Instagram
- [ ] **Chatbot** — Flowen-integration (Mistral/RAG)
- [ ] **Flowen CRM lead** — Kontaktformulär skapar lead i Flowen

### Prioritet 3 — Framtida
- [ ] **Google Analytics / Tag Manager**
- [ ] **Sitemap.xml + robots.txt**
- [ ] **Strukturerad data** (Schema.org för LocalBusiness)
- [ ] **Hastighetsoptimering** (bildkomprimering, lazy loading)

---

## 📝 DAGBOKSNOTERING 2026-02-07

### Vad gjordes
1. Fixade logga-transparens (v2-v8 iterationer, slutligen Canva)
2. Skapade miljö-landningssida
3. Byggde 6 tjänstesidor med delad ServicePage-komponent
4. Implementerade dropdown-navigation i Navbar
5. Uppgraderade tjänstesidor till v2 (SEO-text, unika rubriker)
6. Byggde fungerande kontaktformulär med Microsoft Graph mail
7. Testat och verifierat — mail levereras till booking@evrything.se

### Incident: Flowen .next-krasch
- Försökte kolla Flowens blogg-API för Evrything-bloggen
- Körde `next build` på servern (FÖRBJUDET) — OOM-krasch
- Syncade lokal `.next` — saknade features (logo, login, RAG)
- **Lösning:** Återställde från `.next.backup-20260207_104617`
- **Lärdom:** ALDRIG bygga på servern, ALDRIG synca `.next` utan verifiering
- Regel tillagd i Claudes minne (#10)

### Nästa session
1. Ladda upp metodik-dagbok FÖRST
2. Synca ALL Flowen-källkod från server till lokal
3. Bygg lokalt och deploya MD-dekrypteringsfix enligt metodiken
4. Fortsätt med Evrything-bloggen via Flowen SOME

---

*Rapport genererad: 2026-02-07*
*Webbplats av: Flowen (flowen.eu)*
