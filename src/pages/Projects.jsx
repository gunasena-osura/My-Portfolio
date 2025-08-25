import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "./projects.1";

/**
 * Bilingual Projects Page
 * - TailwindCSS + Framer Motion
 * - Language modes: "both" | "jp" | "en"
 * - Beautiful timeline layout with animated, glassy cards
 *
 * Usage: add a route to this page (e.g., /projects) and import this component.
 */

const LANGS = [
  { key: "both", label: "EN + 日本語" },
  { key: "en", label: "English" },
  { key: "jp", label: "日本語" },
];

function Badge({ children }) {
  return (
    <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide">
      {children}
    </span>
  );
}

function SectionTitle({ both, en, jp, lang }) {
  const text = lang === "en" ? en : lang === "jp" ? jp : both;
  return (
    <h2 className="text-xl font-semibold text-white/90">{text}</h2>
  );
}

function ProjectCard({ p, lang }) {
  const title = lang === "en" ? p.title_en : lang === "jp" ? p.title_jp : `${p.title_en} / ${p.title_jp}`;
  const summary = lang === "en" ? p.summary_en : lang === "jp" ? p.summary_jp : `${p.summary_en} / ${p.summary_jp}`;
  const responsibilities = lang === "en" ? p.responsibilities_en : lang === "jp" ? p.responsibilities_jp : undefined;
  const deliverables = lang === "en" ? p.deliverables_en : lang === "jp" ? p.deliverables_jp : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg"
    >
      {/* Gradient accent */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-purple-500/20 blur-3xl" />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <Badge>{p.period}</Badge>
      </div>
      {p.company && (
        <p className="mt-1 text-sm text-white/70">{p.company}</p>
      )}

      <p className="mt-4 text-white/90 leading-relaxed">{summary}</p>

      {/* responsibilities & deliverables (only when single-language mode to save space) */}
      {(responsibilities?.length || deliverables?.length) && (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {responsibilities?.length ? (
            <div>
              <SectionTitle both="Responsibilities / 担当" en="Responsibilities" jp="担当" lang={lang} />
              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/90">
                {responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {deliverables?.length ? (
            <div>
              <SectionTitle both="Deliverables / 成果物" en="Deliverables" jp="成果物" lang={lang} />
              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/90">
                {deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}

      {/* meta */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {p.stack.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
        {p.team && <Badge>{p.team}</Badge>}
        {p.locale_note && <Badge>{p.locale_note}</Badge>}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [lang, setLang] = useState("both");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return projects;
    return projects.filter((p) => {
      const blob = [
        p.title_en,
        p.title_jp,
        p.summary_en,
        p.summary_jp,
        p.company ?? "",
        p.period,
        ...p.stack,
      ]
        .join(" ")
        .toLowerCase();
      return blob.includes(query);
    });
  }, [q]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
        >
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Projects / プロジェクト
            </h1>
            <p className="mt-2 max-w-2xl text-white/70">
              A curated selection of full‑stack, data, and systems projects across web, desktop, and scientific domains.
              / Web・デスクトップ・科学分野でのフルスタック／データ／システム開発の実績です。
            </p>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            {LANGS.map((l) => (
              <button
                key={l.key}
                onClick={() => setLang(l.key)}
                className={`rounded-full px-3 py-1 text-sm transition ${
                  lang === l.key ? "bg-white text-gray-900" : "text-white/80 hover:bg-white/10"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Search & tech filter */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={
              lang === "jp"
                ? "キーワードや技術で検索（例：Django, React, Python）"
                : lang === "en"
                ? "Search by keyword or tech (e.g., Django, React, Python)"
                : "Search / 検索 (e.g., Django, React, Python)"
            }
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/30"
          />
        </div>

        {/* Timeline */}
        <div className="relative grid gap-6">
          {/* vertical line */}
          <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-white/20 to-transparent md:block" />

          {filtered.map((p, idx) => (
            <div key={p.id} className="relative md:pl-10">
              {/* dot */}
              <div className="absolute -left-[7px] top-3 hidden h-3 w-3 rounded-full bg-white md:block" />
              <ProjectCard p={p} lang={lang} />
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="text-white/70">{lang === "jp" ? "結果が見つかりません。" : lang === "en" ? "No results found." : "No results / 該当なし"}</p>
          )}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-center text-xs text-white/50">
          Built with React, TailwindCSS, and Framer Motion.
        </p>
      </div>
    </div>
  );
}
