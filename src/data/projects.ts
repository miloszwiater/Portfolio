export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  highlights: string[];
  stack: { label: string; items: string[] }[];
  tags: string[];
  year?: string;
};

export const projects: Project[] = [
  {
    slug: "saas-b2b",
    name: "Platforma SaaS B2B do zarządzania firmą",
    kind: "Modular monolith · multi-tenant SaaS · web + PWA + mobile + desktop",
    summary:
      "Platforma do zarządzania organizacją: moduły Identity, TimeTracking, Leave, Tasks, Workflow, Dashboard, Notifications, Documents. Multi-tenancy przez tenant_id + EF Core global query filters, RBAC + data scope per rola.",
    highlights: [
      "Modular monolith z izolowanymi warstwami Domain/Application/Infrastructure/API per moduł",
      "Frontend SPA + Capacitor (iOS/Android) + Tauri (desktop) z jednego źródła",
      "Real-time przez SignalR, background jobs przez Hangfire, logi do Seq",
      "Keycloak (OIDC, JWT) + RBAC + multi-tenancy na poziomie ORM",
    ],
    stack: [
      { label: "Backend", items: [".NET 9", "ASP.NET Core", "C#", "EF Core 9", "Dapper", "MediatR (CQRS)", "Hangfire", "SignalR", "Serilog → Seq"] },
      { label: "Frontend", items: ["React 19", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "TanStack Query", "Zustand", "i18next", "oidc-client-ts"] },
      { label: "Mobile/Desktop", items: ["Capacitor 8", "PWA", "Tauri (Rust)"] },
      { label: "Auth/Storage", items: ["Keycloak 24+ (OIDC, JWT, RBAC)", "MinIO (S3)"] },
      { label: "DB/Infra", items: ["PostgreSQL 16", "Docker", "docker-compose", "Nginx", "GitHub Actions", "Render"] },
    ],
    tags: ["SaaS", ".NET", "React", "Mobile", "Desktop"],
    year: "2025",
  },
  {
    slug: "marketplace",
    name: "Marketplace e-commerce (10k–100k produktów)",
    kind: "Monorepo · web + API + admin + mobile · skalowalna architektura",
    summary:
      "Marketplace z osobnymi aplikacjami konsumencką, mobilną i administracyjną. Full-text search w Meilisearch, kolejki BullMQ/Redis, eksport do Excela, import ofert z XML.",
    highlights: [
      "Monorepo (pnpm workspaces) z 4 aplikacjami w jednym repo",
      "Wyszukiwarka pełnotekstowa Meilisearch dla 10k–100k SKU",
      "Kolejki zadań w BullMQ/Redis (rate limiting, retry, scheduling)",
      "Mobile w React Native / Expo (iOS + Android)",
    ],
    stack: [
      { label: "Web/Admin", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "Zustand", "React Hook Form + Zod", "Playwright"] },
      { label: "API", items: ["Node.js", "Express 5", "TypeScript", "Prisma", "PostgreSQL", "Meilisearch", "Redis + BullMQ", "JWT", "Helmet"] },
      { label: "Mobile", items: ["React Native 0.81", "Expo 54", "Expo Router", "NativeWind", "Reanimated"] },
      { label: "Infra", items: ["pnpm workspaces", "Docker", "docker-compose", "Render", "GitHub Actions", "Jest + Playwright"] },
    ],
    tags: ["E-commerce", "Marketplace", "Node.js", "React Native", "Monorepo"],
    year: "2025",
  },
  {
    slug: "crm",
    name: "System CRM",
    kind: "Aplikacja webowa SaaS",
    summary:
      "CRM z zarządzaniem klientami i procesami sprzedaży. WebSocket dla aktualizacji w czasie rzeczywistym, generowanie dokumentów PDF, testy jednostkowe Vitest.",
    highlights: [
      "Next.js App Router (Next 16) + Prisma 7 + Neon serverless PostgreSQL",
      "Real-time przez ws (WebSocket) — natychmiastowe aktualizacje listy",
      "Generowanie PDF (PDFKit) dla ofert, faktur, raportów",
      "Pełne pokrycie testami Vitest (unit + integration + coverage)",
    ],
    stack: [
      { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "shadcn/ui", "Base UI", "Radix UI", "React Hook Form + Zod"] },
      { label: "Backend / DB", items: ["Next.js API routes", "Prisma 7", "PostgreSQL (Neon serverless)", "ws (WebSocket)"] },
      { label: "Auth / PDF", items: ["NextAuth", "bcryptjs", "Vercel Blob", "PDFKit"] },
    ],
    tags: ["CRM", "SaaS", "Next.js", "Real-time"],
    year: "2025",
  },
  {
    slug: "shop-ai-3d",
    name: "Sklep internetowy z AI i 3D",
    kind: "E-commerce z asystentem AI i prezentacją produktów 3D",
    summary:
      "Sklep z chat-asystentem AI doradzającym przy zakupach oraz prezentacją produktów w przeglądarce w 3D (Three.js / R3F). Płatności Stripe, wielojęzyczność.",
    highlights: [
      "Asystent AI (OpenAI + AI SDK) z dostępem do katalogu produktów",
      "Konfigurator produktu 3D w przeglądarce (Three.js + drei)",
      "Stripe Checkout + webhooki + statusy zamówień",
      "i18n (next-intl) — wiele języków, fallbacki, formaty walut/dat",
    ],
    stack: [
      { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Three.js", "React Three Fiber + drei", "Framer Motion", "next-intl"] },
      { label: "Backend / DB", items: ["Next.js API routes", "Prisma 6", "PostgreSQL"] },
      { label: "Płatności / AI / Auth", items: ["Stripe", "OpenAI + AI SDK", "@ai-sdk/react", "NextAuth v5", "bcryptjs"] },
      { label: "Storage / Inne", items: ["Vercel Blob", "Nodemailer", "JSZip"] },
    ],
    tags: ["E-commerce", "AI", "3D", "Stripe", "Next.js"],
    year: "2025",
  },
  {
    slug: "rental",
    name: "Platforma wynajmu",
    kind: "Aplikacja webowa typu booking — frontend SPA + REST API",
    summary:
      "Platforma do zarządzania rezerwacjami i wynajmem: kalendarz dostępności, cykliczne zadania (przypomnienia, statusy), wykresy KPI dla operatora.",
    highlights: [
      "Frontend SPA w React 19 + Vite (rolldown-vite)",
      "REST API w Express 5 + node-cron (zadania cykliczne)",
      "Mailing transakcyjny przez Resend / Nodemailer",
      "Helmet + express-rate-limit + walidacja Zod na wejściu",
    ],
    stack: [
      { label: "Frontend", items: ["React 19", "Vite (rolldown-vite)", "TypeScript", "Tailwind 4", "React Router 7", "React Hook Form + Zod", "Recharts", "Framer Motion"] },
      { label: "Backend", items: ["Node.js", "Express 5", "TypeScript", "PostgreSQL (pg)", "Helmet", "express-rate-limit", "node-cron", "Resend", "Nodemailer"] },
    ],
    tags: ["Booking", "React", "Node.js", "REST API"],
    year: "2025",
  },
  {
    slug: "school-management",
    name: "System zarządzania szkołą sportową",
    kind: "Pełnoprawna aplikacja webowa (Laravel) — rejestracje, harmonogram, płatności",
    summary:
      "System zarządzania klubem/szkołą sportową: rejestracja uczestników, harmonogram zajęć, ewidencja obecności, płatności, komunikacja z rodzicami, panel administracyjny.",
    highlights: [
      "Laravel (Eloquent ORM, Artisan, Composer) + Blade templates",
      "Pełna konteneryzacja Docker + skrypty deployowe",
      "Migracje schematu, seed, PHPUnit",
      "Tailwind 4 + Vite jako pipeline assetów",
    ],
    stack: [
      { label: "Backend", items: ["PHP 8.2", "Laravel (Artisan, Eloquent ORM)", "Composer"] },
      { label: "Frontend", items: ["Vite", "Tailwind CSS 4", "axios", "Blade templates"] },
      { label: "DB", items: ["MySQL 8", "SQLite (dev)", "migracje Laravel"] },
      { label: "Infra / Testy", items: ["Docker", "docker-compose", "deploy-scripts", "PHPUnit"] },
    ],
    tags: ["Laravel", "PHP", "Management", "Docker"],
    year: "2024",
  },
  {
    slug: "school-shop",
    name: "Sklep internetowy dla szkoły sportowej",
    kind: "SPA + osobny panel administracyjny + serwer aplikacyjny",
    summary:
      "Sklep dedykowany pod produkty klubu/szkoły z osobnym buildem panelu administracyjnego (vite.admin.config.ts). Bogaty stack UI: shadcn/ui + Radix + Tailwind 4.",
    highlights: [
      "Dwa osobne buildy z jednego repo (sklep + admin)",
      "TanStack Query + React Hook Form + Zod jako podstawa data layer",
      "Wykresy KPI w Recharts/D3, animacje Framer Motion",
      "Integracja z GitHub API (Octokit) — operacyjne narzędzia",
    ],
    stack: [
      { label: "Frontend", items: ["React 19", "TypeScript", "Vite", "GitHub Spark"] },
      { label: "UI", items: ["shadcn/ui", "Radix UI", "Phosphor / Heroicons / Lucide", "Tailwind 4", "tw-animate-css"] },
      { label: "Stan / wizualizacje", items: ["TanStack Query", "React Hook Form + Zod", "Recharts", "D3", "Three.js", "Framer Motion", "Embla Carousel"] },
      { label: "Inne", items: ["Octokit (GitHub API)", "uuid", "date-fns"] },
    ],
    tags: ["E-commerce", "React", "UI", "Admin Panel"],
    year: "2024",
  },
  {
    slug: "moto-cms",
    name: "Aplikacja motoryzacyjna (CMS + sklep)",
    kind: "Klasyczny stack PHP — Symfony 2/3 + Silex + Twig + Doctrine",
    summary:
      "Pełna aplikacja CMS + sklep w klasycznym stacku PHP: Symfony 2/3 + Silex + Doctrine + Twig. Mailing (SwiftMailer), generowanie PDF (dompdf, knp-snappy), QR codes, Memcache.",
    highlights: [
      "Pełna konteneryzacja: aplikacja + admin + phpMyAdmin",
      "Doctrine ORM + DBAL, migracje, fixtures",
      "Generowanie PDF (dompdf + knp-snappy) i QR kodów",
      "Deployer + docker-entrypoint dla produkcji",
    ],
    stack: [
      { label: "Backend", items: ["PHP", "Symfony 2/3", "Silex", "Doctrine DBAL + ORM", "Pimple (DI)", "Monolog"] },
      { label: "Frontend", items: ["Twig 2", "SCSS / CSS", "jQuery", "HTML"] },
      { label: "Mailing / PDF / QR", items: ["SwiftMailer", "dompdf", "knp-snappy", "gigablah/silex-qrcode"] },
      { label: "Cache / Infra", items: ["Memcache", "MySQL", "Deployer", "Docker", "docker-compose", "phpMyAdmin"] },
    ],
    tags: ["PHP", "Symfony", "CMS", "E-commerce"],
    year: "2023",
  },
  {
    slug: "landing",
    name: "Landing page produktowy",
    kind: "Statyczna strona promocyjna z formularzem kontaktowym",
    summary:
      "Lekka landing page promująca produkt: animacje Framer Motion, interaktywny globus 3D (cobe), formularz kontaktowy z mailingiem (Nodemailer + SMTP).",
    highlights: [
      "Next.js 16 + React 19 + Tailwind 4",
      "Interaktywny globus 3D (cobe)",
      "Command palette (cmdk) jako szybka nawigacja",
      "Deploy Vercel z natychmiastowymi previewami",
    ],
    stack: [
      { label: "Stack", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"] },
      { label: "UI / efekty", items: ["Framer Motion", "Lucide React", "cobe (3D globus)", "cmdk", "tailwind-merge", "clsx"] },
      { label: "Backend / mailing", items: ["Nodemailer (SMTP)", "Vercel deploy"] },
    ],
    tags: ["Landing page", "Next.js", "Marketing"],
    year: "2024",
  },
];
