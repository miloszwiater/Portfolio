# Portfolio — Miłosz Wiater

Portfolio Full-Stack Developera w Next.js 15 + React 19 + Tailwind 4.

## Quick start

```powershell
cd portfolio
npm install
npm run dev
```

Otwórz http://localhost:3000

## Co podmienić przed deployem

1. **GitHub** — w plikach `Hero.tsx`, `Contact.tsx`, `Nav.tsx` zamień `https://github.com/` na link do swojego profilu.
2. **CV PDF** — wrzuć `MiloszWiater_CV_2026.pdf` do folderu `public/` (link `/MiloszWiater_CV_2026.pdf` w Nav i Hero).
3. **Domena** — w `src/components/Nav.tsx` możesz zmienić logo `mw.dev` na własne.
4. **OG metadata** — `src/app/layout.tsx` (title, description).

## Deploy na Vercel (5 minut, darmowe)

1. Wrzuć folder `portfolio/` na nowe repo GitHub:
   ```powershell
   cd portfolio
   git init
   git add .
   git commit -m "init portfolio"
   git remote add origin https://github.com/TWOJ_LOGIN/portfolio.git
   git push -u origin main
   ```
2. Wejdź na https://vercel.com → **New Project** → wybierz repo `portfolio` → **Deploy**.
3. Vercel automatycznie wykryje Next.js. Po ~1 minucie masz URL `https://portfolio-xxx.vercel.app`.
4. (opcjonalnie) Kup domenę (np. `miloszwiater.dev` na OVH, ~50 zł/rok), w Vercelu **Settings → Domains** podepnij ją.

## Struktura

- `src/app/page.tsx` — strona główna (Hero + Projekty + Skille + Kontakt)
- `src/app/projects/[slug]/page.tsx` — szczegóły projektu (statycznie generowane)
- `src/data/projects.ts` — lista 9 projektów
- `src/data/skills.ts` — grupy umiejętności
- `src/components/` — Nav, Hero, ProjectsGrid, Skills, Contact

## Stack portfolio

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3.4
- Framer Motion
- lucide-react (ikony)
