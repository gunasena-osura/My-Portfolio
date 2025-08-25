import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * Bilingual Skills Page (modern)
 * - TailwindCSS + Framer Motion
 * - Language toggle (EN / 日本語 / Both)
 * - Summary section + grouped skill matrix with visual bars
 * - Certifications section
 */

const LANGS = [
  { key: "both", label: "EN + 日本語" },
  { key: "en", label: "English" },
  { key: "jp", label: "日本語" },
];

const summaries = {
  en: [
    "Full‑stack experience with C# .NET (MVC, WPF, Windows apps).",
    "Enterprise system development using Java (Spring Boot, React, TypeScript, Vue.js) and LabVantage feature enhancements with Apache POI.",
    "Python development for scripts and web apps (Django, FastAPI, Pydantic, STK).",
    "Web applications with PHP (Laravel).",
    "Design, development, and testing across Web and Windows applications.",
    "Database design/operations with MS SQL Server and PostgreSQL.",
    "Able to contribute across multiple languages and frameworks.",
  ],
  jp: [
    "C# .NET（MVC、WPF、Windows アプリ）によるフルスタック開発経験。",
    "Java（Spring Boot、React、TypeScript、Vue.js）および Apache POI を用いた LabVantage 機能拡張など、業務システム開発経験。",
    "Python（Django、FastAPI、Pydantic、STK）によるスクリプト・Web アプリ開発経験。",
    "PHP（Laravel）による Web アプリケーション開発経験。",
    "Web／Windows アプリの設計・開発・テスト経験。",
    "MS SQL Server・PostgreSQL などのデータベース設計・運用経験。",
    "複数言語・フレームワークを横断してプロジェクト対応が可能。",
  ],
};

const skills = [
  {
    group_en: "Operating Systems",
    group_jp: "OS",
    items: [
      { name: "Windows", years: "10+", level: 100 },
      { name: "Linux (CentOS)", years: "5+", level: 85 },
    ],
  },
  {
    group_en: "Languages",
    group_jp: "言語",
    items: [
      { name: "JavaScript", years: "5+", level: 85 },
      { name: "Python", years: "5+", level: 85 },
      { name: "C# .NET", years: "<2", level: 60 },
      { name: "Java", years: "<1", level: 45 },
      { name: "HTML/CSS", years: "5+", level: 85 },
      { name: "C++", years: "<1", level: 45 },
      { name: "PHP", years: "<1", level: 45 },
      { name: "MatLab", years: "<1", level: 40 },
    ],
  },
  {
    group_en: "Frameworks / Libraries",
    group_jp: "フレームワーク / ライブラリ",
    items: [
      { name: "Django", years: "3+", level: 80 },
      { name: "FastAPI", years: "<1", level: 55 },
      { name: "Laravel", years: "<1", level: 55 },
      { name: "Spring Boot", years: "<1", level: 55 },
      { name: "React.js", years: "<1", level: 55 },
      { name: "Vue.js", years: "<1", level: 55 },
      { name: "WPF", years: "<2", level: 60 },
      { name: "Razor / MVC", years: "<2", level: 60 },
      { name: "Pydantic", years: "<1", level: 55 },
      { name: "STK (API)", years: "<1", level: 50 },
      { name: "Apache POI", years: "<1", level: 55 },
      { name: "LabVantage (LIMS)", years: "ongoing", level: 65 },
    ],
  },
  {
    group_en: "Databases",
    group_jp: "データベース",
    items: [
      { name: "MySQL", years: "3+", level: 75 },
      { name: "PostgreSQL", years: "<1", level: 55 },
      { name: "MS SQL Server", years: "3+", level: 75 },
    ],
  },
  {
    group_en: "Tools / Platforms",
    group_jp: "ツール / プラットフォーム",
    items: [
      { name: "GitLab", years: "5+", level: 85 },
      { name: "AWS", years: "<1", level: 55 },
      { name: "Docker", years: "<1", level: 55 },
      { name: "VS Code / Eclipse", years: "5+", level: 85 },
    ],
  },
];

const certs = [
  {
    name_en: "JLPT N2",
    name_jp: "日本語能力試験 N2",
    date_en: "Dec 2024",
    date_jp: "2024年12月",
  },
  {
    name_en: "TOEIC 865",
    name_jp: "TOEIC 865点",
    date_en: "Apr 2025",
    date_jp: "2025年4月",
  },
];

function Header({ lang, setLang }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
    >
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          {lang === "en" ? "Skills" : lang === "jp" ? "スキル" : "Skills / スキル"}
        </h1>
        <p className="mt-2 max-w-3xl text-white/70">
          {lang === "en"
            ? "A modern overview of my technical strengths across platforms and stacks."
            : lang === "jp"
            ? "プラットフォームやスタックを横断した技術力のモダンな概要です。"
            : "A modern overview of my technical strengths / 技術力のモダンな概要"}
        </p>
      </div>

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
  );
}

function Summary({ lang }) {
  const lines = lang === "en" ? summaries.en : lang === "jp" ? summaries.jp : summaries.en.map((en, i) => `${en} / ${summaries.jp[i]}`);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg"
    >
      <h2 className="text-xl font-semibold">
        {lang === "en" ? "Highlights" : lang === "jp" ? "ハイライト" : "Highlights / ハイライト"}
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-white/90">
        {lines.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function LevelBar({ level }) {
  return (
    <div className="mt-2 h-2 w-full rounded-full bg-white/10">
      <div
        className="h-2 rounded-full bg-white/70"
        style={{ width: `${level}%` }}
      />
    </div>
  );
}

function SkillGroup({ group_en, group_jp, items, lang }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {lang === "en" ? group_en : lang === "jp" ? group_jp : `${group_en} / ${group_jp}`}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((it) => (
          <div key={it.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">{it.name}</span>
              <span className="text-xs text-white/70">{it.years} yrs</span>
            </div>
            <LevelBar level={it.level} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Certifications({ lang }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg"
    >
      <h3 className="text-lg font-semibold">
        {lang === "en" ? "Certifications" : lang === "jp" ? "資格" : "Certifications / 資格"}
      </h3>
      <ul className="mt-3 space-y-2">
        {certs.map((c) => (
          <li key={c.name_en} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <span>
              {lang === "en" ? c.name_en : lang === "jp" ? c.name_jp : `${c.name_en} / ${c.name_jp}`}
            </span>
            <span className="text-sm text-white/70">
              {lang === "en" ? c.date_en : lang === "jp" ? c.date_jp : `${c.date_en} / ${c.date_jp}`}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function SkillsPage() {
  const [lang, setLang] = useState("both");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return skills;
    return skills.map((g) => ({
      ...g,
      items: g.items.filter((it) => `${it.name} ${g.group_en} ${g.group_jp}`.toLowerCase().includes(query)),
    })).filter((g) => g.items.length > 0);
  }, [q]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Header lang={lang} setLang={setLang} />

        {/* Search */}
        <div className="mb-8">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={
              lang === "jp"
                ? "スキル名で検索（例：Django, React, SQL）"
                : lang === "en"
                ? "Search skills (e.g., Django, React, SQL)"
                : "Search / 検索（例：Django, React, SQL）"
            }
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/30"
          />
        </div>

        {/* Highlights */}
        <Summary lang={lang} />

        {/* Skill Groups */}
        <div className="mt-8 grid grid-cols-1 gap-6">
          {filtered.map((g) => (
            <SkillGroup key={g.group_en} {...g} lang={lang} />
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-8">
          <Certifications lang={lang} />
        </div>

        <p className="mt-12 text-center text-xs text-white/50">Built with React, TailwindCSS, and Framer Motion.</p>
      </div>
    </div>
  );
}
