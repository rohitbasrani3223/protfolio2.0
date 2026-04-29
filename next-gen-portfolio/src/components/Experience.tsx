"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  desc: string;
  bullets: string[];
  side: "left" | "right";
  active?: boolean;
  type: "work" | "edu";
};

const entries: TimelineEntry[] = [
  {
    period: "2026 – PRESENT",
    title: "Junior DevOps Engineer",
    org: "WithAspireNetexis Pvt Ltd",
    desc: "Working on DevOps infrastructure, automating deployment processes, managing cloud platforms, and contributing to scalable application development with cross-functional teams.",
    bullets: [
      "Cloud infrastructure automation",
      "CI/CD pipeline development",
      "Container orchestration with Docker & Kubernetes",
      "AWS services management",
    ],
    side: "left",
    active: true,
    type: "work",
  },
  {
    period: "2024 – 2026",
    title: "Junior Developer",
    org: "WithAspireNetexis Pvt Ltd",
    desc: "Started my professional journey focusing on full-stack development, learning industry best practices, and contributing to various web development projects.",
    bullets: [
      "Frontend development with modern frameworks",
      "Responsive web design",
      "REST API integration",
      "Collaborative team workflows",
    ],
    side: "right",
    type: "work",
  },
  {
    period: "2024 – 2025",
    title: "Python Programming Mastery",
    org: "SK Python Classes",
    desc: "Comprehensive Python programming training covering fundamentals to advanced concepts including OOP, data structures, web development, and real-world project implementations.",
    bullets: [
      "Python fundamentals & advanced OOP",
      "Data structures & algorithms",
      "Web development with Flask/Django",
      "Real-world project implementations",
    ],
    side: "left",
    type: "edu",
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 px-4 md:px-8 bg-[#0a0a0a] relative z-20 border-t border-red-500/10 overflow-hidden"
    >
      {/* Subtle red grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444405_1px,transparent_1px),linear-gradient(to_bottom,#ef444405_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Journey
            </span>
          </h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mt-4">
            Experience &amp; Education
          </p>
        </motion.div>

        {/* Centre spine + cards */}
        <div className="relative">
          {/* Vertical spine line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-red-500/10 -translate-x-1/2 hidden md:block" />

          {/* Animated fill line */}
          <motion.div
            style={{ height: lineScaleY }}
            className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-red-500 via-orange-500 to-red-400 -translate-x-1/2 origin-top hidden md:block"
          />

          <div className="flex flex-col gap-20">
            {entries.map((entry, i) => {
              const isLeft = entry.side === "left";
              return (
                <div key={i} className="relative flex items-center justify-center">
                  {/* Spine dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className={`absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center w-6 h-6 rounded-full border-2 ${
                      entry.active
                        ? "border-red-500 bg-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.8)]"
                        : "border-orange-500/60 bg-[#0a0a0a]"
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        entry.active ? "bg-red-500" : "bg-orange-500/50"
                      }`}
                    />
                  </motion.div>

                  {/* Card grid: left / spacer / right */}
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] w-full gap-0">
                    {/* Left slot */}
                    <div className={isLeft ? "flex justify-end pr-10" : "hidden md:block"}>
                      {isLeft && <Card entry={entry} direction="left" />}
                    </div>

                    {/* Centre spacer */}
                    <div />

                    {/* Right slot */}
                    <div className={!isLeft ? "flex justify-start pl-10" : "hidden md:block"}>
                      {!isLeft && <Card entry={entry} direction="right" />}
                    </div>

                    {/* Mobile: always show */}
                    <div className="md:hidden col-span-1">
                      <Card entry={entry} direction="left" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  entry,
  direction,
}: {
  entry: TimelineEntry;
  direction: "left" | "right";
}) {
  const initX = direction === "left" ? -60 : 60;
  return (
    <motion.div
      initial={{ opacity: 0, x: initX, rotateY: direction === "left" ? 15 : -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
      whileHover={{
        scale: 1.03,
        rotateY: direction === "left" ? -4 : 4,
        rotateX: -2,
        boxShadow: "0 0 40px rgba(239,68,68,0.25)",
      }}
      style={{ perspective: 800 }}
      className={`relative max-w-md w-full rounded-2xl border p-7 cursor-pointer
        ${
          entry.active
            ? "border-red-500/40 bg-gradient-to-br from-[#1a0a0a] to-[#0f0f0f]"
            : "border-white/5 bg-[#111111]"
        }
        shadow-[0_0_0px_rgba(239,68,68,0)] hover:border-red-500/50 transition-colors duration-300`}
    >
      {/* Glow accent */}
      {entry.active && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
      )}

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 uppercase leading-tight">
          {entry.title}
        </h3>
        <span
          className={`shrink-0 px-3 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase text-white shadow-lg ${
            entry.active
              ? "bg-gradient-to-br from-red-500 to-orange-500 shadow-red-500/30"
              : "bg-gradient-to-br from-orange-600 to-red-600 shadow-orange-500/20"
          }`}
        >
          {entry.period}
        </span>
      </div>

      {/* Org */}
      <p className="text-xs font-black tracking-widest uppercase text-orange-400/80 mb-4">
        {entry.org}
      </p>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{entry.desc}</p>

      {/* Bullets */}
      <ul className="flex flex-col gap-2">
        {entry.bullets.map((b, bi) => (
          <li key={bi} className="flex items-start gap-3 text-sm text-gray-300">
            <span className="mt-0.5 text-red-500 text-xs">▶</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Bottom glow line */}
      <div
        className={`absolute bottom-0 left-6 right-6 h-[1px] rounded-full bg-gradient-to-r ${
          entry.type === "work"
            ? "from-transparent via-red-500/40 to-transparent"
            : "from-transparent via-orange-500/40 to-transparent"
        }`}
      />
    </motion.div>
  );
}
