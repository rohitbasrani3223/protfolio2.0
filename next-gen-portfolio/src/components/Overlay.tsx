"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: 0% scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2: 30% scroll
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], [100, -100]);

  // Section 3: 60% scroll
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.8], [100, -100]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1: Center */}
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Rohit Bassrani. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 text-3xl md:text-5xl mt-4 block">DevOps Engineer & Creative Dev.</span>
          </h1>
        </motion.div>

        {/* Section 2: Left */}
        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 flex items-center justify-start px-8 md:px-24">
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl drop-shadow-2xl">
            I build scalable <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">infrastructure & experiences.</span>
          </h2>
        </motion.div>

        {/* Section 3: Right */}
        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-0 flex items-center justify-end px-8 md:px-24 text-right">
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-white max-w-3xl drop-shadow-2xl">
            Passionate about <br/>
            <span className="italic font-light text-gray-300">automation & design.</span>
          </h2>
        </motion.div>
        
      </div>
    </div>
  );
}
