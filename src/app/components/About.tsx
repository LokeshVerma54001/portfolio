"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-black/90 border-y border-green-500/30 py-16 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-mono font-bold text-green-400 tracking-widest drop-shadow-[0_0_10px_#00ff00]"
        >
          ABOUT ME
        </motion.h2>

        {/* Divider */}
        <div className="w-32 h-[2px] bg-green-500/50 mx-auto mt-4 shadow-[0_0_8px_#00ff00]" />

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 bg-gradient-to-br from-black/70 to-green-950/20 border border-green-500/30 rounded-xl shadow-lg shadow-green-500/20 p-8 md:p-10 relative overflow-hidden"
        >
          {/* Subtle scan lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.08)_1px,transparent_1px)] bg-[length:100%_28px] animate-pulse pointer-events-none" />

          {/* Bio */}
          <p className="relative text-green-300 font-mono text-lg leading-relaxed z-10">
            I’m <span className="text-green-400 font-bold">Lokesh Verma</span>, a{" "}
            <span className="text-green-400">Full-Stack Developer</span> with a
            passion for building clean, scalable, and user-friendly applications.  
            My expertise includes{" "}
            <span className="text-green-400">React</span>,{" "}
            <span className="text-green-400">Next.js</span>,{" "}
            <span className="text-green-400">Node.js</span>,{" "}
            <span className="text-green-400">C++</span>, and modern UI/UX design.  
            I enjoy combining strong technical foundations with creative design
            to deliver engaging digital experiences.
          </p>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-8 bg-black/60 border border-green-500/40 rounded-lg p-4 shadow-inner shadow-green-500/20"
          >
            <h3 className="text-green-400 font-mono font-bold text-lg tracking-wider">
              CURRENT FOCUS
            </h3>
            <p className="text-green-300 font-mono text-sm mt-2">
              Enhancing my expertise in full-stack development, exploring
              advanced frontend design patterns, and building performant,
              production-ready web applications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
