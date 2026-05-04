"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Mail, MapPin, FileText, ArrowRight, Sparkles } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "TypeScript · .NET · PHP",
  "Web · Mobile · Desktop",
  "SaaS B2B · E-commerce · CRM",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 sm:pb-16">
      {/* floating orbs */}
      <div className="absolute top-32 left-4 sm:left-10 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-accent/20 blur-3xl orb pointer-events-none" />
      <div
        className="absolute bottom-32 right-4 sm:right-10 h-56 w-56 sm:h-80 sm:w-80 rounded-full bg-accent2/20 blur-3xl orb pointer-events-none"
        style={{ animationDelay: "-7s" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-mono text-slate-300 mb-6 sm:mb-8 max-w-full"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent shrink-0" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="truncate">Open to work · dostępny od zaraz · UoP / B2B</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.02] sm:leading-[0.95]"
        >
          Cześć, jestem
          <br />
          <span className="gradient-text">Miłosz Wiater.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 sm:mt-8 font-mono text-base sm:text-xl md:text-3xl text-slate-200 min-h-[2.5rem] sm:h-10 break-words"
        >
          <span className="text-accent">{"> "}</span>
          {text}
          <span className="caret" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed"
        >
          Projektuję i wdrażam aplikacje webowe, mobilne i desktopowe — od landing pages,
          przez sklepy e-commerce i marketplace&apos;y, po platformy SaaS klasy
          B2B. Pracuję w trzech ekosystemach jednocześnie:{" "}
          <span className="text-slate-200">TypeScript / Node.js</span>,{" "}
          <span className="text-slate-200">.NET 9 / C#</span> oraz{" "}
          <span className="text-slate-200">PHP / Laravel</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 sm:mt-10 flex flex-wrap gap-2.5 sm:gap-3"
        >
          <a
            href="#projects"
            className="group shine inline-flex items-center gap-2 rounded-full bg-accent px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-bg shadow-[0_8px_30px_-8px_rgba(125,211,252,0.7)] hover:bg-white hover:shadow-[0_8px_40px_-6px_rgba(125,211,252,0.9)] transition-all"
          >
            Zobacz projekty
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/MiloszWiater_CV_2026.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-slate-100 hover:bg-white/10 hover:border-white/25 transition-all"
          >
            <FileText className="h-4 w-4" />
            Pobierz CV
          </a>
          <a
            href="https://github.com/miloszwiater"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-slate-100 hover:bg-white/10 hover:border-white/25 transition-all"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 font-mono"
        >
          <a href="mailto:milosz.wiater@op.pl" className="flex items-center gap-2 hover:text-accent transition break-all">
            <Mail className="h-4 w-4 shrink-0" /> milosz.wiater@op.pl
          </a>
          <span className="hidden sm:inline text-slate-700">·</span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" /> Rzeszów, PL
          </span>
          <span className="hidden sm:inline text-slate-700">·</span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            available
          </span>
        </motion.div>
      </div>
    </section>
  );
}
