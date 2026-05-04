import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.name} · Miłosz Wiater`, description: p.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <Nav />
      <main className="relative mx-auto max-w-4xl px-6 pt-32 pb-24">
        {/* decorative orbs */}
        <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl orb pointer-events-none" />
        <div
          className="absolute top-40 right-0 h-72 w-72 rounded-full bg-accent2/15 blur-3xl orb pointer-events-none"
          style={{ animationDelay: "-6s" }}
        />

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition mb-10 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          wszystkie projekty
        </Link>

        <div className="relative">
          <p className="font-mono text-xs text-accent mb-4 tracking-wider">
            PROJEKT · {p.year}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
            {p.name}
          </h1>
          <p className="mt-4 text-slate-400 text-base md:text-lg">{p.kind}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full glass px-3 py-1 text-xs text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-12 text-lg md:text-xl text-slate-200 leading-relaxed">
            {p.summary}
          </p>

          <section className="mt-16">
            <h2 className="text-xs font-mono uppercase tracking-wider text-accent mb-6">
              // najważniejsze elementy
            </h2>
            <ul className="space-y-3">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="glass rounded-xl p-4 flex gap-4 text-slate-200"
                >
                  <span className="text-accent text-lg leading-none mt-0.5">▸</span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16">
            <h2 className="text-xs font-mono uppercase tracking-wider text-accent mb-6">
              // stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {p.stack.map((s) => (
                <div key={s.label} className="glass rounded-xl p-5">
                  <div className="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">
                    {s.label}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-md bg-white/5 border border-white/10 px-2 py-1 text-xs text-slate-200"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-20 glass-strong rounded-2xl p-8 text-center">
            <p className="text-slate-300 mb-5">
              Spodobał Ci się projekt? Zobacz pozostałe lub napisz do mnie.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-slate-200 hover:bg-white/5 transition"
              >
                <ArrowLeft className="h-4 w-4" /> Pozostałe projekty
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg hover:bg-white transition"
              >
                Skontaktuj się <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
