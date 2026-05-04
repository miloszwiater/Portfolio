"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Smartphone, Database, Lock, Rocket, Bot, TestTube } from "lucide-react";

const stats = [
  { label: "lat doświadczenia komercyjnego", value: "1.5+" },
  { label: "projektów wdrożonych", value: "9+" },
  { label: "ekosystemy backendowe", value: "3" },
  { label: "linijek kodu na koncie", value: "100k+" },
];

const skills = [
  { icon: Layers, title: "Architektura", desc: "Modular monolith, CQRS, multi-tenancy, Domain Events, monorepo." },
  { icon: Code2, title: "Frontend", desc: "Next.js, React 19, Tailwind, shadcn/ui — od MVP po SaaS B2B." },
  { icon: Rocket, title: "Backend", desc: "REST API w 3 ekosystemach: Node.js, .NET 9, PHP/Laravel/Symfony." },
  { icon: Database, title: "Bazy danych", desc: "PostgreSQL, Prisma/EF Core/Doctrine, Meilisearch, Redis." },
  { icon: Smartphone, title: "Cross-platform", desc: "Jeden kod: web + iOS + Android + desktop (RN/Capacitor/Tauri)." },
  { icon: Lock, title: "Security", desc: "Keycloak, NextAuth, OWASP Top 10, RBAC, multi-tenancy." },
  { icon: TestTube, title: "Testy", desc: "Playwright (E2E), Vitest, Jest, PHPUnit." },
  { icon: Bot, title: "AI workflow", desc: "Copilot, Cursor, Claude Code, MCP, prompt engineering." },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 sm:px-6 py-20 sm:py-32">
      {/* heading */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-10 mb-14 sm:mb-20">
        <div>
          <p className="font-mono text-sm text-accent mb-3">// 01 — about</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            Pełen <span className="gradient-text">stack</span>.
            <br />
            Realne wdrożenia.
          </h2>
        </div>
        <div className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 pt-2">
          <p>
            Komfortowo poruszam się w pełnym cyklu wytwarzania oprogramowania: od projektowania bazy danych i API,
            przez UI, po konteneryzację, CI/CD i wdrożenie produkcyjne. Lubię łączyć światy — front i back, web i
            mobile, monolit i kolejki, klasyczny PHP i nowoczesny .NET.
          </p>
          <p>
            Szybko przyswajam nowe technologie i efektywnie wykorzystuję narzędzia AI (GitHub Copilot, Cursor,
            Claude Code, MCP) do przyspieszania pracy bez tracenia kontroli nad kodem.
          </p>
        </div>
      </div>

      {/* stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14 sm:mb-20">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass rounded-2xl p-5 text-center"
          >
            <div className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</div>
            <div className="mt-2 text-xs text-slate-400">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass glow-hover rounded-2xl p-6"
          >
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 border border-accent/20 mb-4">
              <s.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-semibold text-slate-100 mb-1">{s.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
