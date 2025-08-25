import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const BG = process.env.PUBLIC_URL + "/images/home-bg.jpg"; // ✅ correct path

  const cards = [
    {
      title: "Projects / プロジェクト",
      description: "Latest work across web, data, and systems. / Web・データ・システムの最新実績。",
      link: "/projects",
    },
    {
      title: "Skills / スキル",
      description: "Tech stack & strengths. / 技術スタックと得意分野。",
      link: "/skills",
    },
    {
      title: "Contact / 連絡先",
      description: "Get in touch. / お気軽にご連絡ください。",
      link: "/contact",
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={BG}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

      {/* Page content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-3"
        >
          Hello, I&apos;m Osura / こんにちは、オスラです
        </motion.h1>

        <p className="text-lg text-gray-200 mb-8">
          Full-Stack Developer — Python, Java, React, C# / フルスタック開発者
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              onClick={() => navigate(c.link)}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:border-white/30 transition"
            >
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-gray-300">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
