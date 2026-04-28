"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { 
      title: "DevOps Infrastructure", 
      desc: "Cloud infrastructure automation and CI/CD pipeline setup at WithAspireNetexis.", 
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      tags: ["DOCKER", "KUBERNETES", "AWS"] 
    },
    { 
      title: "E-Commerce Platform", 
      desc: "A full-stack e-commerce solution with user authentication and payment integration.", 
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      tags: ["REACT", "NODE.JS", "STRIPE"] 
    },
    { 
      title: "Mobile App Design", 
      desc: "User-friendly mobile application with modern UI/UX and prototyping.", 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
      tags: ["UI/UX", "FIGMA", "PROTOTYPING"] 
    },
    { 
      title: "Task Management App", 
      desc: "Collaborative app with real-time updates, team features, and progress tracking.", 
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop",
      tags: ["JAVASCRIPT", "SOCKET.IO", "SQL"] 
    },
    { 
      title: "Creative Design", 
      desc: "Brand identity, visual design, and illustration for startups.", 
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
      tags: ["BRANDING", "ILLUSTRATION", "PHOTOSHOP"] 
    },
    { 
      title: "Weather Dashboard", 
      desc: "Responsive app with location forecasts, interactive maps, and analytics.", 
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
      tags: ["JAVASCRIPT", "API", "CHART.JS", "CSS3"] 
    },
    { 
      title: "Web Application Development", 
      desc: "Modern web apps with React and Node.js for scalable solutions.", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      tags: ["REACT", "NODE.JS", "HTML5"] 
    },
    { 
      title: "SMS Marketing Engine", 
      desc: "High-throughput messaging system for massive campaigns.", 
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
      tags: ["TWILIO", "NODE.JS", "REDIS"] 
    },
    { 
      title: "Cafe Ordering App", 
      desc: "Seamless food & beverage ordering experience.", 
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
      tags: ["REACT NATIVE", "FIREBASE"] 
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { stiffness: 100 } }
  };

  return (
    <section id="work" className="min-h-screen bg-[#0a0a0a] py-32 px-8 md:px-12 lg:px-24 relative z-20 border-t border-red-500/10 overflow-hidden">
      {/* Background Matrix/Grid Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444405_1px,transparent_1px),linear-gradient(to_bottom,#ef444405_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-4xl md:text-6xl font-bold mb-16 text-white tracking-tighter"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Work</span>
        </motion.h3>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              className={`group relative rounded-[2rem] overflow-hidden cursor-pointer h-[400px] bg-[#121212] shadow-xl hover:shadow-[0_20px_40px_rgba(239,68,68,0.2)] transition-all duration-500 ${i === 0 ? 'xl:col-span-2' : ''}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top Right Hover Icons (Optional, styling matching the vibe) */}
              <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-red-500 hover:border-red-500 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </div>
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{p.title}</h4>
                <p className="text-gray-300 text-sm mb-6 line-clamp-2">{p.desc}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase rounded-full border border-white/20 bg-white/5 backdrop-blur-md group-hover:border-red-500/50 group-hover:text-red-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
