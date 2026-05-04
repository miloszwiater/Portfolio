"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "O mnie" },
  { href: "#projects", label: "Projekty" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
            scrolled ? "glass-strong h-12" : "h-14"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 font-mono text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-accent to-accent2 shadow-[0_0_10px_2px_rgba(125,211,252,0.6)]" />
            <span className="font-bold">mw</span>
            <span className="text-muted">.dev</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-slate-300 hover:text-white transition rounded-md hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/MiloszWiater_CV.pdf"
              download
              className="ml-2 rounded-md bg-accent px-4 py-1.5 text-sm font-semibold text-bg hover:bg-white transition"
            >
              CV
            </a>
          </div>

          <button
            className="md:hidden text-slate-300"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-slate-300 hover:text-white transition rounded-md hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/MiloszWiater_CV.pdf"
              download
              className="mt-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg text-center"
            >
              Pobierz CV
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
