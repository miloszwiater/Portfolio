"use client";

import { motion } from "framer-motion";

const techRows = [
  // row 1 — frontend & languages
  [
    "TypeScript", "JavaScript", "React 19", "Next.js 16", "Tailwind 4", "shadcn/ui",
    "Radix UI", "Vite", "Zustand", "TanStack Query", "React Hook Form", "Zod",
    "Framer Motion", "Three.js", "R3F", "Recharts", "D3",
  ],
  // row 2 — backend
  [
    ".NET 9", "C#", "ASP.NET Core", "EF Core", "Dapper", "MediatR", "CQRS",
    "Node.js", "Express 5", "PHP 8.2", "Laravel", "Symfony", "Silex", "Doctrine",
    "REST API", "GraphQL", "WebSocket",
  ],
  // row 3 — DB / mobile / DevOps
  [
    "PostgreSQL", "Neon", "MySQL", "SQLite", "Prisma", "Meilisearch", "Redis",
    "BullMQ", "Hangfire", "React Native", "Expo", "Capacitor", "Tauri", "PWA",
    "Docker", "GitHub Actions", "Vercel", "Render", "Keycloak", "OIDC",
    "Stripe", "OpenAI", "MCP", "Copilot", "Cursor", "Claude Code",
  ],
];

export default function TechMarquee() {
  return (
    <section id="stack" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-12">
        <p className="font-mono text-sm text-accent mb-3">// 03 — tech stack</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Cały <span className="gradient-text">arsenał</span>.
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-base md:text-lg">
          Dobieram technologię pod problem, nie pod modę. Komfortowo wchodzę
          zarówno w nowoczesny .NET 9, jak i klasyczny Symfony 2/3.
        </p>
      </div>

      {/* gradient masks */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-bg to-transparent" />

        <div className="space-y-4">
          {techRows.map((row, i) => (
            <div key={i} className="flex overflow-hidden">
              <motion.div
                className={`marquee gap-3 ${i === 1 ? "marquee-reverse" : ""}`}
                style={{
                  animationDuration: i === 0 ? "50s" : i === 1 ? "70s" : "60s",
                }}
              >
                {[...row, ...row].map((t, idx) => (
                  <span
                    key={`${t}-${idx}`}
                    className="shrink-0 rounded-full glass px-5 py-2 text-sm font-medium text-slate-200 hover:text-white hover:border-accent/40 transition"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
