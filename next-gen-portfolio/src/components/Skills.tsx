"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const categories = [
    { title: "Frontend Development", skills: [{name: "HTML5", level: 95}, {name: "CSS3", level: 90}, {name: "JavaScript", level: 85}, {name: "React", level: 80}] },
    { title: "Backend & DevOps", skills: [{name: "Node.js", level: 75}, {name: "Python", level: 90}, {name: "Docker", level: 85}, {name: "Kubernetes", level: 70}, {name: "AWS", level: 80}, {name: "CI/CD", level: 85}] },
    { title: "Tools & Design", skills: [{name: "MongoDB", level: 80}, {name: "SQL", level: 85}, {name: "Git", level: 90}, {name: "Figma", level: 75}, {name: "Photoshop", level: 70}, {name: "UI/UX Design", level: 80}] }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { stiffness: 100 } }
  };

  return (
    <section id="skills" ref={ref} className="py-32 px-8 md:px-24 bg-[#050505] relative z-20 border-t border-red-500/10 overflow-hidden">
      {/* Background Matrix/Grid Vibe with Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ef44440a_1px,transparent_1px),linear-gradient(to_bottom,#ef44440a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h3 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-4xl md:text-6xl font-bold mb-16 text-white tracking-tighter text-center"
        >
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Ecosystem</span>
        </motion.h3>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              variants={item}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, zIndex: 10 }}
              className="p-8 rounded-3xl border border-white/5 bg-[#0f0f0f] flex flex-col hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-8 border-b border-red-500/10 pb-4 uppercase tracking-widest">{cat.title}</h4>
              <div className="flex flex-col gap-6">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="flex flex-col gap-2">
                    <span className="text-gray-300 font-bold tracking-wider text-xs uppercase">{skill.name}</span>
                    <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full relative overflow-hidden"
                      >
                         <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
