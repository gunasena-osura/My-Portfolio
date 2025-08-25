import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * Bilingual Projects Page (plain JSX)
 * - TailwindCSS + Framer Motion
 * - Language modes: "both" | "jp" | "en"
 * - Timeline layout with animated, glassy cards
 */

const LANGS = [
  { key: "both", label: "EN + 日本語" },
  { key: "en", label: "English" },
  { key: "jp", label: "日本語" },
];

const projects = [
  {
    id: "labvantage-lims",
    period: "May 2025 – Present",
    company: "Mitsubishi Electric Software Corporation",
    title_en: "LabVantage (LIMS) Feature Enhancements & Maintenance",
    title_jp: "LabVantage（LIMS）機能拡張・保守",
    summary_en:
      "Enhancing and maintaining LabVantage LIMS: implemented new features and improved existing ones in Java; built Excel report output with Apache POI; executed functional testing, bug fixes, and code reviews to improve stability and usability.",
    summary_jp:
      "LabVantage LIMS の機能拡張・保守に従事。Java による新規機能追加と既存機能改善、Apache POI を用いた Excel 帳票出力機能を実装。機能テストやバグ修正、コードレビューを実施し、安定性と操作性の向上に貢献。",
    responsibilities_en: [
      "Add and modify LabVantage features using Java",
      "Develop Excel report output with Apache POI",
      "Functional testing on LabVantage and bug fixing",
      "Code reviews and quality improvements",
    ],
    responsibilities_jp: [
      "Java による LabVantage 機能の追加・修正",
      "Apache POI を利用した Excel 帳票出力機能の開発",
      "LabVantage 上での機能テスト・バグ修正",
      "コードレビュー・品質改善対応",
    ],
    deliverables_en: [
      "Customized LabVantage modules incl. Excel exports",
      "Extended and stabilized LIMS features",
    ],
    deliverables_jp: [
      "Excel 出力対応を含むカスタマイズ済み LabVantage モジュール",
      "機能拡張および安定化された LIMS システム",
    ],
    stack: ["Java", "Apache POI", "LabVantage LIMS"],
    team: "10 members",
    locale_note: "業務言語：日本語",
  },
  {
    id: "rep-mgmt-2024",
    period: "Oct 2024 – Apr 2025",
    company: "Mitsubishi Electric Software Corporation",
    title_en: "Report Management Web System (Full‑stack)",
    title_jp: "レポート管理 Web システム（フルスタック）",
    summary_en:
      "Built a report management system: Spring Boot backend with optimized SQL and a React (TypeScript) frontend. Designed and implemented report features, fixed bugs, and performed code reviews.",
    summary_jp:
      "Spring Boot を用いたサーバーサイド開発（SQL 最適化含む）と、React（TypeScript）によるフロントエンド実装。レポート管理機能の設計・実装、不具合修正、コードレビューを担当。",
    responsibilities_en: [
      "Backend development & testing with Java (Spring Boot)",
      "SQL query creation & tuning",
      "Frontend development with React (TypeScript)",
      "Report management feature design & implementation",
      "Bug fixes & code reviews",
    ],
    responsibilities_jp: [
      "Java（Spring Boot）によるバックエンド開発・テスト",
      "SQL クエリの作成・チューニング",
      "React（TypeScript）を用いたフロントエンド開発",
      "レポート管理機能の設計・実装",
      "不具合修正・コードレビュー対応",
    ],
    deliverables_en: [
      "Implemented backend & frontend for the system",
      "SQL‑based data management and search",
      "Improved reporting workflow and usability",
    ],
    deliverables_jp: [
      "システムのバックエンド・フロントエンドを実装",
      "SQL ベースのデータ管理・検索機能",
      "報告書作成・管理の効率化とユーザビリティ向上",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Eclipse",
    ],
    team: "4 members",
    locale_note: "業務言語：日本語",
  },
  {
    id: "env-visual-2024",
    period: "Mar 2024 – Sep 2024",
    company: "Mitsubishi Electric Software Corporation",
    title_en:
      "Environmental Impact Visualization System (GHG for crops)",
    title_jp: "環境負荷可視化システム（作物の温室効果ガス算出）",
    summary_en:
      "Designed algorithms to calculate GHG emissions for tea, rice, fruit, and vegetables; migrated Excel‑based calculations to a robust web system.",
    summary_jp:
      "茶・米・果物・野菜などの温室効果ガス排出量算出アルゴリズムを設計・実装し、従来の Excel 計算を効率的な Web システムへ移行。",
    responsibilities_en: [
      "Python algorithm design & implementation",
      "FastAPI backend (API endpoints)",
      "ER model design & data integrity",
      "Testing with pytest; bug fixes & maintenance",
      "Team collaboration and continuous improvement",
    ],
    responsibilities_jp: [
      "Python による排出量算出アルゴリズムの設計・実装",
      "FastAPI を用いた API 開発",
      "ER モデル設計・修正、データ整合性の確保",
      "pytest によるテスト実装、バグ修正・保守",
      "チーム連携による進捗共有・改善提案",
    ],
    deliverables_en: [
      "Python‑based calculation algorithms",
      "FastAPI endpoints",
      "Improved ER model",
      "Automated tests with pytest",
    ],
    deliverables_jp: [
      "Python ベースの算出アルゴリズム",
      "FastAPI による API エンドポイント",
      "改良された ER モデル",
      "pytest を用いたテストコード",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Vue.js",
      "Pydantic",
      "Pytest",
      "VS Code",
      "A5:SQL Mk-2",
    ],
    team: "6 members",
    locale_note: "業務言語：日本語",
  },
  {
    id: "dna-2023",
    period: "Dec 2023 – Feb 2024",
    company: "Mitsubishi Electric Software Corporation",
    title_en: "DNA Experiment & Analysis Management System",
    title_jp: "DNA 実験・解析マネジメントシステム",
    summary_en:
      "Built core views with CRUD using Django; created test cases with Selenium and implemented tables with django‑datatables‑view.",
    summary_jp:
      "Django による CRUD 画面を作成し、Selenium でテストを作成。django‑datatables‑view を用いたテーブル画面を実装。",
    responsibilities_en: [
      "Development based on HLD/LLD",
      "CRUD views with Django",
      "UI tables with django‑datatables‑view",
      "Selenium end‑to‑end test cases",
    ],
    responsibilities_jp: [
      "基本設計書・詳細設計書に基づく開発",
      "Django による CRUD 画面作成",
      "django‑datatables‑view を用いた UI 作成",
      "Selenium によるテストケース作成",
    ],
    stack: [
      "Python",
      "Django",
      "Selenium",
      "JavaScript",
      "jQuery",
      "HTML",
      "Docker",
    ],
    team: "7 members",
    locale_note: "業務言語：日本語",
  },
  {
    id: "jaxa-2023",
    period: "Jun 2023 – Nov 2023",
    company: "Mitsubishi Electric Software Corporation (JAXA委託)",
    title_en:
      "Satellite Orbit Control Data Management Web App (JAXA)",
    title_jp: "衛星軌道制御データの管理 Web アプリ（JAXA 案件）",
    summary_en:
      "Developed a Django‑based web app to manage orbit control data; implemented server CRUD and jQuery‑based client UI using Bootstrap and DataTables.",
    summary_jp:
      "Django を用いて軌道制御データを管理する Web アプリを構築。サーバー側 CRUD と jQuery による UI（Bootstrap / DataTables）を実装。",
    responsibilities_en: [
      "Server: CRUD with Django models",
      "Client: jQuery UI for data operations",
      "HTML/Bootstrap mockups & templates",
      "PostgreSQL table design & SQL implementation",
    ],
    responsibilities_jp: [
      "サーバーサイド：Django によるデータ作成・登録・削除・編集",
      "クライアントサイド：jQuery による UI 開発（データ操作画面）",
      "HTML / Bootstrap / JS DataTables によるモック・テンプレート作成",
      "PostgreSQL でのテーブル設計および SQL 実装",
    ],
    stack: [
      "Python",
      "Django",
      "PostgreSQL",
      "jQuery",
      "Bootstrap",
      "JavaScript",
      "Docker",
      "VS Code",
    ],
    team: "5 members",
    locale_note: "業務言語：日本語",
  },
  {
    id: "sat-binary-2022",
    period: "May 2022 – May 2023",
    company: "Mitsubishi Electric Software Corporation",
    title_en:
      "Satellite Orbit Measurement: Binary Generation & Job Control",
    title_jp: "衛星軌道計測：バイナリ生成・ジョブ制御",
    summary_en:
      "Authored Python scripts to download data and generate complex binary files for an orbit measurement system; scripted job/command control.",
    summary_jp:
      "Web からデータを取得し、軌道計測システム向けの複雑なバイナリファイルを生成。ジョブ・コマンド制御用の Python スクリプトを作成。",
    stack: [
      "Python",
      "STK Python API",
      "Pydantic",
      "Windows",
      "Linux",
    ],
    team: "15 members",
    locale_note: "業務言語：日本語",
  },
  {
    id: "wpf-ai-2021",
    period: "Oct 2021 – Apr 2022",
    company: "Prostyle Technology (Sri Lanka)",
    title_en:
      "WPF Surveillance Alert System with AI (Fall detection, etc.)",
    title_jp: "WPF 監視カメラ警告システム（AI 連携・転倒検知など）",
    summary_en:
      "Developed a WPF desktop app integrating an AI module to detect human motion and abnormal behaviors; real‑time alerts to PC/mobile; multi‑camera, multiview, and playback.",
    summary_jp:
      "AI モジュールと連携した WPF デスクトップアプリを開発。人の動作や異常行動を検知し、PC/モバイルにリアルタイム通知。複数カメラ・マルチビュー・過去映像確認に対応。",
    responsibilities_en: [
      "UI mockups & prototypes (Moqups)",
      "Single‑camera section development",
      "HLD/LLD, test docs, SRS authoring",
      "Log simulator for testing",
    ],
    responsibilities_jp: [
      "UI モックアップ・プロトタイプ作成（Moqups）",
      "シングルカメラセクションの開発",
      "基本設計・詳細設計・テスト文書・SRS の作成",
      "テスト用ログシミュレータの作成",
    ],
    deliverables_en: [
      "WPF desktop app (real‑time alerts, multi‑camera)",
      "AI‑based motion detection integration",
      "Test log simulator",
    ],
    deliverables_jp: [
      "WPF デスクトップアプリ（リアルタイム警告・マルチカメラ）",
      "AI 連携による動作検知機能",
      "テスト用ログシミュレータ",
    ],
    stack: [
      "C#",
      "WPF",
      "Python",
      "C++",
      "HTML5",
      "JavaScript",
      "XAML",
      "LINQ",
    ],
    team: "5 members",
    locale_note: "設計〜詳細設計は日本語（日本の顧客向け）",
  },
  {
    id: "dotnet-mvc-2020",
    period: "Jun 2020 – Sep 2021",
    company: "Prostyle Technology (Sri Lanka)",
    title_en: ".NET MVC Admin Systems (Web Application)",
    title_jp: ".NET MVC 管理システム（Web アプリ）",
    summary_en:
      "Developed admin systems on .NET MVC with HTML5/CSS/Bootstrap UI; leveraged LINQ and MS SQL Server for efficient data access and improved UX.",
    summary_jp:
      ".NET MVC を基盤に管理システムを設計・実装。HTML5/CSS/Bootstrap による UI、LINQ と MS SQL Server による効率的なデータ操作を実施。",
    stack: [
      "C# .NET (MVC)",
      "HTML5",
      "CSS",
      "Bootstrap",
      "LINQ",
      "MS SQL Server",
      "Ajax",
      "Razor",
      "jQuery",
    ],
    team: "5 members",
    locale_note: "設計〜詳細設計は日本語（日本の顧客向け）",
  },
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
  return <h2 className="text-xl font-semibold text-white/90">{text}</h2>;
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
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-purple-500/20 blur-3xl" />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <Badge>{p.period}</Badge>
      </div>
      {p.company && <p className="mt-1 text-sm text-white/70">{p.company}</p>}

      <p className="mt-4 text-white/90 leading-relaxed">{summary}</p>

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

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {p.stack?.map((s) => (
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
        ...(p.stack || []),
      ]
        .join(" ")
        .toLowerCase();
      return blob.includes(query);
    });
  }, [q]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
        >
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Projects / プロジェクト</h1>
            <p className="mt-2 max-w-2xl text-white/70">
              A curated selection of full‑stack, data, and systems projects across web, desktop, and scientific domains.
              / Web・デスクトップ・科学分野でのフルスタック／データ／システム開発の実績です。
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

        <div className="relative grid gap-6">
          <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-white/20 to-transparent md:block" />
          {filtered.map((p) => (
            <div key={p.id} className="relative md:pl-10">
              <div className="absolute -left-[7px] top-3 hidden h-3 w-3 rounded-full bg-white md:block" />
              <ProjectCard p={p} lang={lang} />
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-white/70">{lang === "jp" ? "結果が見つかりません。" : lang === "en" ? "No results found." : "No results / 該当なし"}</p>
          )}
        </div>

        <p className="mt-12 text-center text-xs text-white/50">Built with React, TailwindCSS, and Framer Motion.</p>
      </div>
    </div>
  );
}
