"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-24 bg-[#0a0a0a] relative z-20 border-t border-red-500/10 overflow-hidden">
      {/* Background Matrix/Grid Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444405_1px,transparent_1px),linear-gradient(to_bottom,#ef444405_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tighter">Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Connect</span></h3>
          <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
            I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="flex flex-col gap-8">
            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all">@</div>
              <span className="text-gray-300 text-lg font-medium tracking-wide group-hover:text-red-400 transition-colors">rohitbasrani32@gmail.com</span>
            </motion.div>
            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full border border-orange-500/20 bg-orange-500/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all">#</div>
              <span className="text-gray-300 text-lg font-medium tracking-wide group-hover:text-orange-400 transition-colors">+91 7089628236</span>
            </motion.div>
            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all">📍</div>
              <span className="text-gray-300 text-lg font-medium tracking-wide group-hover:text-red-400 transition-colors">Sagar, Madhya Pradesh, India</span>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.02, rotateY: -2, rotateX: 2 }}
          className="p-8 md:p-12 rounded-3xl border border-white/5 hover:border-red-500/30 bg-[#121212] shadow-[0_0_0_rgba(239,68,68,0)] hover:shadow-[0_0_40px_rgba(239,68,68,0.1)] transition-all duration-300"
        >
          <form className="flex flex-col gap-6">
            <input type="text" placeholder="Your Name" className="w-full bg-[#050505] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-500/50 focus:shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all placeholder:text-gray-600" />
            <input type="email" placeholder="Your Email" className="w-full bg-[#050505] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-500/50 focus:shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all placeholder:text-gray-600" />
            <textarea placeholder="Your Message" rows={4} className="w-full bg-[#050505] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-500/50 focus:shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all resize-none placeholder:text-gray-600" />
            <button type="button" className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold tracking-wide uppercase text-sm rounded-xl px-6 py-5 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all mt-2">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
