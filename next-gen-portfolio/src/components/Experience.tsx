"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { stiffness: 100 } }
  };

  return (
    <section id="experience" ref={ref} className="py-32 px-8 md:px-24 bg-[#0a0a0a] relative z-20 border-t border-red-500/10 overflow-hidden">
      {/* Background Matrix/Grid Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444405_1px,transparent_1px),linear-gradient(to_bottom,#ef444405_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tighter"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Experience</span>
            </motion.h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-100px" }}
              className="flex flex-col gap-12 border-l border-red-500/20 pl-8 ml-4 relative"
            >
              {/* Scrollytelling animated line */}
              <motion.div style={{ height: lineScale }} className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-red-500 to-orange-500 origin-top" />

              <motion.div variants={item} whileHover={{ x: 10 }} className="relative cursor-pointer group">
                <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[38px] top-2 shadow-[0_0_15px_rgba(239,68,68,1)] group-hover:scale-150 transition-all duration-300" />
                <span className="text-xs text-red-400 font-bold tracking-widest uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">2025 - Present</span>
                <h4 className="text-2xl font-bold text-white mt-4 group-hover:text-red-400 transition-colors">Junior DevOps Engineer</h4>
                <p className="text-gray-300 font-medium mb-4">WithAspireNetexis Pvt Ltd</p>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  Working on DevOps infrastructure, automating deployment processes, managing cloud platforms, and contributing to scalable application development with cross-functional teams.
                </p>
              </motion.div>
              <motion.div variants={item} whileHover={{ x: 10 }} className="relative cursor-pointer group">
                <div className="absolute w-3 h-3 bg-orange-500/50 rounded-full -left-[38px] top-2 group-hover:bg-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,1)] group-hover:scale-150 transition-all duration-300" />
                <span className="text-xs text-orange-400/70 font-bold tracking-widest uppercase bg-orange-500/5 px-3 py-1 rounded-full border border-orange-500/10 group-hover:border-orange-500/30 group-hover:text-orange-400 transition-colors">2024 - 2025</span>
                <h4 className="text-2xl font-bold text-white mt-4 group-hover:text-orange-400 transition-colors">Junior Developer</h4>
                <p className="text-gray-300 font-medium mb-4">WithAspireNetexis Pvt Ltd</p>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  Started my professional journey focusing on full-stack development, learning industry best practices, and contributing to various web development projects.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Education Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tighter"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Education</span>
            </motion.h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-100px" }}
              className="flex flex-col gap-12 border-l border-red-500/20 pl-8 ml-4 relative"
            >
              {/* Scrollytelling animated line */}
              <motion.div style={{ height: lineScale }} className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-orange-500 to-red-500 origin-top" />

              <motion.div variants={item} whileHover={{ x: 10 }} className="relative cursor-pointer group">
                <div className="absolute w-3 h-3 bg-red-500/50 rounded-full -left-[38px] top-2 group-hover:bg-red-500 group-hover:shadow-[0_0_15px_rgba(239,68,68,1)] group-hover:scale-150 transition-all duration-300" />
                <span className="text-xs text-red-400/70 font-bold tracking-widest uppercase bg-red-500/5 px-3 py-1 rounded-full border border-red-500/10 group-hover:border-red-500/30 group-hover:text-red-400 transition-colors">2024 - 2025</span>
                <h4 className="text-2xl font-bold text-white mt-4 group-hover:text-red-400 transition-colors">Python Programming Mastery</h4>
                <p className="text-gray-300 font-medium mb-4">SK Python Classes</p>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  Comprehensive Python programming training covering fundamentals to advanced concepts including OOP, data structures, web development, and real-world project implementations.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
