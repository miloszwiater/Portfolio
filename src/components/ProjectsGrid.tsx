"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const accentColors = [
  "from-sky-400/30 to-cyan-500/10",
  "from-purple-400/30 to-fuchsia-500/10",
  "from-pink-400/30 to-rose-500/10",
  "from-emerald-400/30 to-teal-500/10",
  "from-amber-400/30 to-orange-500/10",
  "from-blue-400/30 to-indigo-500/10",
  "from-violet-400/30 to-purple-500/10",
  "from-red-400/30 to-pink-500/10",
  "from-cyan-400/30 to-blue-500/10",
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16">
        <p className="font-mono text-sm text-accent mb-3">// 02 — projekty</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          9 projektów. <span className="gradient-text">3 ekosystemy.</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-base md:text-lg">
          Wszystkie projekty zrealizowane komercyjnie — od architektury i bazy
          danych po deploy produkcyjny. Klikaj kafelki, żeby zobaczyć szczegóły.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
          >
            <Link
              href={`/projects/${p.slug}`}
              className="group relative block h-full overflow-hidden rounded-2xl glass glow-hover shine p-6"
            >
              {/* decorative gradient */}
              <div
                className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${accentColors[i % accentColors.length]} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="font-mono text-[11px] text-accent/80 px-2 py-0.5 rounded-md border border-accent/20">
                    {String(i + 1).padStart(2, "0")} · {p.year}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>

                <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition leading-tight">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500">{p.kind}</p>

                <p className="mt-5 text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {p.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
