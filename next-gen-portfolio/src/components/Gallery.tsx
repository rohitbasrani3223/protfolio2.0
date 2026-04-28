"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Paintbrush, Monitor, Smartphone, Box, Code, Gamepad2, Image as ImageIcon, BarChart } from "lucide-react";

export default function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const items = [
    { title: "Digital Artwork", desc: "Abstract digital painting", icon: Paintbrush, color: "from-red-500 to-orange-500" },
    { title: "Website Design", desc: "Modern web interface", icon: Monitor, color: "from-orange-500 to-red-500" },
    { title: "Mobile App", desc: "iOS/Android design", icon: Smartphone, color: "from-red-600 to-rose-500" },
    { title: "3D Modeling", desc: "3D character design", icon: Box, color: "from-red-400 to-orange-400" },
    { title: "Code Art", desc: "Creative coding project", icon: Code, color: "from-orange-600 to-red-600" },
    { title: "Game UI", desc: "Mobile game interface", icon: Gamepad2, color: "from-red-500 to-rose-600" },
    { title: "Photo Manipulation", desc: "Creative photo editing", icon: ImageIcon, color: "from-orange-500 to-red-400" },
    { title: "Dashboard Design", desc: "Analytics dashboard", icon: BarChart, color: "from-red-500 to-orange-600" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { stiffness: 100 } }
  };

  return (
    <section id="gallery" ref={ref} className="py-32 px-8 md:px-24 bg-[#050505] relative z-20 border-t border-red-500/10 overflow-hidden">
      {/* Background Matrix/Grid Vibe with Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ef444405_1px,transparent_1px),linear-gradient(to_bottom,#ef444405_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tighter">Dark <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Gallery</span></h3>
          <p className="text-gray-400 text-lg uppercase tracking-widest text-sm font-bold">A collection of my creative work and digital art</p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariant}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, zIndex: 10 }}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-[#0a0a0a] hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-colors duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <item.icon className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 group-hover:text-orange-400 transition-all duration-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                <h4 className="text-xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{item.title}</h4>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
