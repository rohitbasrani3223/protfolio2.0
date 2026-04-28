"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="py-32 bg-[#121212] relative z-20 overflow-hidden">
      
      {/* Vibe Marquee Banner */}
      <motion.div style={{ y, opacity }} className="absolute top-20 left-0 w-[110%] -rotate-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-3xl py-4 overflow-hidden z-0 flex items-center shadow-[0_0_30px_rgba(239,68,68,0.3)]">
         <motion.div 
            animate={{ x: [0, -1035] }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            className="whitespace-nowrap flex gap-12"
         >
            <span>VIBE CODER ⚡ 3D ENTHUSIAST ⚡ DEVOPS ENGINEER ⚡ CREATIVE DEVELOPER ⚡ VIBE CODER ⚡ 3D ENTHUSIAST ⚡ DEVOPS ENGINEER ⚡ CREATIVE DEVELOPER ⚡</span>
            <span>VIBE CODER ⚡ 3D ENTHUSIAST ⚡ DEVOPS ENGINEER ⚡ CREATIVE DEVELOPER ⚡ VIBE CODER ⚡ 3D ENTHUSIAST ⚡ DEVOPS ENGINEER ⚡ CREATIVE DEVELOPER ⚡</span>
         </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tighter">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Me</span></h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I'm currently working as a <span className="text-red-400 font-bold uppercase tracking-wide">Junior DevOps Engineer</span> at <span className="text-white font-medium">WithAspireNetexis Pvt Ltd</span>, focusing on automating deployment processes, managing cloud infrastructure, and ensuring system reliability.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            My programming foundation was built through comprehensive Python training at SK Python Classes, founded by Rajneesh Pachouri, where I mastered Python fundamentals and advanced concepts.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.1 }}>
              <h4 className="text-4xl font-bold text-white mb-2 group"><span className="text-red-500">10</span>+</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Projects</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h4 className="text-4xl font-bold text-white mb-2"><span className="text-orange-500">2</span>+</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Years Exp.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h4 className="text-4xl font-bold text-white mb-2"><span className="text-red-500">100</span>%</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Commitment</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          whileHover={{ rotateY: 10, rotateX: -10, scale: 1.05 }}
          className="relative aspect-square rounded-3xl overflow-hidden border border-red-500/20 bg-[#0a0a0a] flex items-center justify-center p-8 shadow-[0_0_50px_rgba(239,68,68,0.1)] perspective-1000"
        >
           <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-orange-500/10" />
           <div className="text-center relative z-10 w-full">
              <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-bold mb-8 uppercase tracking-widest">Core Tech Stack</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-300">
                <span className="px-5 py-3 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]">Python</span>
                <span className="px-5 py-3 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]">Docker</span>
                <span className="px-5 py-3 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.2)]">AWS</span>
                <span className="px-5 py-3 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]">React</span>
                <span className="px-5 py-3 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]">Kubernetes</span>
                <span className="px-5 py-3 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.2)]">Node.js</span>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
