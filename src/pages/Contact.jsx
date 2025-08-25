import React from "react";
import { motion } from "framer-motion";

/**
 * Contact Page (Bilingual + Modern)
 * - Place your photo at: public/images/profile.jpg (or update src below)
 * - EN / 日本語 mixed headings
 * - Glass cards, mail/phone/LinkedIn links, map link
 */

const PROFILE_IMG = "/images/profile.jpg"; // <-- put your photo here

export default function ContactPage() {
  const cards = [
    {
      label_en: "Phone",
      label_jp: "電話",
      value: "070-9233-6813",
      href: "tel:07092336813",
    },
    {
      label_en: "Email",
      label_jp: "メール",
      value: "gunasena.osura@gmail.com",
      href: "mailto:gunasena.osura@gmail.com",
    },
    {
      label_en: "LinkedIn",
      label_jp: "リンクトイン",
      value: "linkedin.com/in/osura-gunasena",
      href: "https://www.linkedin.com/in/osura-gunasena?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BX0YLMK6SqeKsN7gfO94GQ%3D%3D",
      external: true,
    },
    {
      label_en: "Address",
      label_jp: "住所",
      value: "〒302-0034 茨城県取手市戸頭4-13-6 ２０８号",
      href: "https://maps.google.com/?q=〒302-0034 茨城県取手市戸頭4-13-6 ２０８号",
      external: true,
    },
    {
      label_en: "Nationality",
      label_jp: "国籍",
      value: "Sri Lanka / スリランカ",
    },
    {
      label_en: "Name",
      label_jp: "氏名",
      value: "Osura Mindula Gunasena / グナセーナ オスラ ミンヅラ",
    },
    {
      label_en: "Birthdate (Age)",
      label_jp: "生年月日（年齢）",
      value: "1994-03-10 (31)",
    },
  ];

  const summaryJP = `私は電気・電子工学を専攻し、2018年にスリランカ情報技術大学を卒業後、ソフトウェアエンジニアとして5年以上の経験を積んできました。C# .NET（MVC、WPF、Windowsアプリケーション）、Java（Spring Boot、React、TypeScript、Vue.js、LabVantage機能拡張、Apache POI）、Python（Django、FastAPI、Pydantic、STK）、および Laravel（PHP）を用いたフルスタック開発に従事。Webアプリケーションおよび業務システムの設計・開発・テストの経験が豊富で、MS SQL Server や PostgreSQL も扱えます。さらに、JLPT N2 および TOEIC 約 895 点の語学力により、日英双方で円滑なコミュニケーションが可能です。`;

  const summaryEN = `I majored in Electrical & Electronic Engineering and graduated from the Sri Lanka Institute of Information Technology in 2018. I have 5+ years as a software engineer, working across full‑stack development with C# .NET (MVC, WPF, Windows apps), Java (Spring Boot, React, TypeScript, Vue.js, LabVantage feature enhancements with Apache POI), Python (Django, FastAPI, Pydantic, STK), and PHP (Laravel). I have strong experience designing, developing, and testing web and enterprise systems, and I work with databases like MS SQL Server and PostgreSQL. With JLPT N2 and ~895 TOEIC, I communicate smoothly in both Japanese and English.`;

  const certs = [
    { en: "JLPT N2", jp: "日本語能力試験 N2", date: "2024/12" },
    { en: "TOEIC ~895", jp: "TOEIC 約895点", date: "2025/04" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        >
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Contact / 連絡先</h1>
            <p className="mt-2 max-w-2xl text-white/70">Let’s connect — プロジェクトやお仕事のご相談はお気軽に。</p>
          </div>
        </motion.div>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl md:grid-cols-[260px,1fr]"
        >
          <div className="flex items-start justify-center">
            <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              <img src={PROFILE_IMG} alt="Osura portrait" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Osura Mindula Gunasena / グナセーナ オスラ ミンヅラ</h2>
            <p className="text-white/90 leading-relaxed">{summaryEN}</p>
            <p className="text-white/80 leading-relaxed">{summaryJP}</p>

            {/* Certifications */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Certifications / 資格</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {certs.map((c) => (
                  <span key={c.en} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm">
                    <span>{c.en} / {c.jp}</span>
                    <span className="text-white/60">{c.date}</span>
                  </span>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <motion.a
              key={c.label_en}
              href={c.href || undefined}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{c.label_en} / {c.label_jp}</h3>
              </div>
              <p className="mt-2 text-white/90">{c.value}</p>
              {c.href && (
                <span className="mt-3 inline-block text-sm text-blue-300/90 hover:underline">
                  {c.external ? "Open in Browser / ブラウザで開く" : "Open / 開く"}
                </span>
              )}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:gunasena.osura@gmail.com"
            className="rounded-full bg-white px-5 py-2 font-medium text-gray-900 shadow hover:opacity-90"
          >
            Email Me / メールする
          </a>
          <a
            href="tel:07092336813"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 font-medium text-white hover:bg-white/10"
          >
            Call Me / 電話する
          </a>
          <a
            href="https://www.linkedin.com/in/osura-gunasena?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BX0YLMK6SqeKsN7gfO94GQ%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-blue-400 bg-blue-500/20 px-5 py-2 font-medium text-blue-200 hover:bg-blue-500/30"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-12 text-center text-xs text-white/50">Built with React, TailwindCSS, and Framer Motion.</p>
      </div>
    </div>
  );
}
