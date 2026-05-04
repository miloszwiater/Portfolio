"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, MapPin, ArrowUpRight, Check, Briefcase, Clock, Globe } from "lucide-react";

const offers = [
  { icon: Briefcase, label: "Forma", value: "UoP · B2B · zlecenie" },
  { icon: Clock, label: "Dostępność", value: "Od zaraz" },
  { icon: Globe, label: "Tryb pracy", value: "Zdalnie · hybrydowo · stacjonarnie" },
  { icon: MapPin, label: "Lokalizacja", value: "Rzeszów + cała Polska zdalnie" },
];

const checks = [
  "Pełen cykl wytwarzania — od architektury po deploy",
  "3 ekosystemy backendowe (Node / .NET / PHP)",
  "Web + mobile + desktop ze wspólnego kodu",
  "Komercyjne wdrożenia, nie tutoriale",
  "Dobra znajomość AI tooling (Copilot, Cursor, Claude)",
  "Szybki onboarding — uczę się na bieżąco",
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16"
      >
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-accent/30 blur-3xl orb pointer-events-none" />
        <div
          className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent2/30 blur-3xl orb pointer-events-none"
          style={{ animationDelay: "-5s" }}
        />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-slate-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work · dostępny od zaraz
          </div>
          <p className="font-mono text-sm text-accent mb-3">// 04 — kontakt</p>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
            Skontaktuj <span className="gradient-text">się ze mną</span>.
          </h2>
          <p className="mt-6 text-slate-300 max-w-2xl text-base md:text-lg">
            Jestem otwarty na każdą formę współpracy — umowę o pracę, B2B lub zlecenie.
            Pracuję zdalnie, hybrydowo oraz stacjonarnie w Rzeszowie. Najszybciej odpowiem na maila lub telefon.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {offers.map((o) => (
              <div key={o.label} className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
                  <o.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{o.label}</div>
                  <div className="text-slate-100 font-medium">{o.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
              // kompetencje kluczowe
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {checks.map((c) => (
                <div key={c} className="flex items-start gap-3 text-slate-300">
                  <Check className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="mt-12 font-mono text-xs uppercase tracking-wider text-accent mb-4">
            // jak się skontaktować
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="mailto:milosz.wiater@op.pl"
              className="group glass glow-hover flex items-center justify-between gap-4 rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 border border-accent/20">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">email</div>
                  <div className="text-slate-100 font-medium">milosz.wiater@op.pl</div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </a>

            <a
              href="tel:+48514486429"
              className="group glass glow-hover flex items-center justify-between gap-4 rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent2/20 to-accent3/20 border border-accent2/20">
                  <Phone className="h-5 w-5 text-accent2" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">telefon</div>
                  <div className="text-slate-100 font-medium">514 486 429</div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-accent2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </a>

            <a
              href="https://github.com/miloszwiater"
              target="_blank"
              rel="noreferrer"
              className="group glass glow-hover flex items-center justify-between gap-4 rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700/40 to-slate-900/40 border border-slate-600/30">
                  <Github className="h-5 w-5 text-slate-100" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">github</div>
                  <div className="text-slate-100 font-medium">@miloszwiater</div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-slate-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </a>

            <a
              href="/MiloszWiater_CV_2026.pdf"
              className="group glass glow-hover flex items-center justify-between gap-4 rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent3/20 to-accent/20 border border-accent3/20">
                  <Briefcase className="h-5 w-5 text-accent3" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">CV</div>
                  <div className="text-slate-100 font-medium">Pobierz PDF</div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-accent3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </a>
          </div>
        </div>
      </motion.div>

      <p className="mt-12 text-center text-xs text-slate-500 font-mono">
        © {new Date().getFullYear()} Miłosz Wiater · zbudowane w Next.js + Tailwind + Framer Motion
      </p>
    </section>
  );
}
