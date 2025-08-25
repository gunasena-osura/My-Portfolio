import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Projects / プロジェクト",
      description:
        "Latest work across web, data, and systems. / Web・データ・システムの最新実績。",
      link: "/projects",
      emoji: "💼",
    },
    {
      title: "Skills / スキル",
      description: "Tech stack & strengths. / 技術スタックと得意分野。",
      link: "/skills",
      emoji: "🛠️",
    },
    {
      title: "Contact / 連絡先",
      description: "Get in touch. / お気軽にご連絡ください。",
      link: "/contact",
      emoji: "📬",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white">
      {/* Animated background blobs (no images) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-3rem] right-[-3rem] h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-cyan-400/10 blur-2xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold tracking-tight md:text-6xl"
        >
          Hello, I&apos;m Osura
          <span className="block text-white/80 text-2xl md:text-3xl mt-2">
            こんにちは、オスラです
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 max-w-3xl text-lg text-white/80"
        >
          Full-Stack Developer — Python, Java, React, C# /
          <span className="text-white/70"> フルスタック開発者</span>
        </motion.p>

        {/* CTA buttons (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => navigate("/projects")}
            className="rounded-full bg-white px-5 py-2 font-medium text-gray-900 shadow hover:opacity-90"
          >
            View Projects / プロジェクトを見る
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 font-medium text-white hover:bg-white/10"
          >
            Contact / 連絡先
          </button>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
        >
          {cards.map((c) => (
            <motion.button
              key={c.title}
              onClick={() => navigate(c.link)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg backdrop-blur-md transition hover:border-white/20"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{c.emoji}</span>
                <h3 className="text-xl font-bold leading-tight group-hover:opacity-100">
                  {c.title}
                </h3>
              </div>
              <p className="mt-3 text-white/80">{c.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-blue-200/90">
                <span>Open / 開く</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Footer note */}
        <p className="mt-14 text-xs text-white/50">
          Built with React, TailwindCSS, and Framer Motion.
        </p>
      </div>
    </div>
  );
}
