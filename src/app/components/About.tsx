"use client";
import { motion } from "framer-motion";
import { Cpu, Rocket, Code, Terminal } from "lucide-react";

export default function About() {
  const skills = ["React", "Next.js", "Node.js", "C++", "TypeScript", "UI/UX"];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center text-white px-6 sm:px-12 py-20"
    >
      {/* Holographic Grid Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Card */}
      <motion.div
        className="max-w-4xl w-full bg-black/40 border border-green-500/60 rounded-2xl p-8 sm:p-12 shadow-[0_0_30px_#00ff00] backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-green-400 mb-6 text-center">
          🛰 Pilot Profile / Mission Briefing
        </h2>

        {/* Bio */}
        <p className="text-white/80 font-mono text-sm sm:text-base leading-relaxed mb-8">
          Greetings, Commander. I’m <span className="text-green-400">Lokesh Verma</span>, 
          a fullstack developer navigating the realms of{" "}
          <span className="text-green-400">web technologies, 3D design,</span> 
          and interactive user experiences. My mission is to craft futuristic, 
          high-performance applications with a keen eye for design and detail.
        </p>

        {/* Skills Overview */}
        <div className="mb-10">
          <h3 className="text-lg font-mono text-green-400 flex items-center gap-2 mb-3">
            <Cpu className="w-5 h-5" /> Systems Installed
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <motion.span
                key={idx}
                className="px-4 py-2 bg-green-500/10 border border-green-400/60 rounded-lg text-green-300 font-mono text-sm shadow-[0_0_12px_#00ff00]"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,255,0,0.2)" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Current Mission */}
        <div>
          <h3 className="text-lg font-mono text-green-400 flex items-center gap-2 mb-3">
            <Rocket className="w-5 h-5" /> Current Mission
          </h3>
          <div className="bg-green-500/10 border border-green-400/60 rounded-lg p-4 font-mono text-sm text-white/90 shadow-[0_0_12px_#00ff00]">
            <p>
              <span className="text-green-400">Mission Code:</span> Building a{" "}
              <span className="text-green-400">Process Scheduling Visualizer</span> with 
              cutting-edge UI/UX,{" "}
              <span className="text-green-400">Next.js</span>, and modern design systems.  
            </p>
            <p className="mt-2">
              <span className="text-green-400">Objective:</span> To optimize algorithms, 
              deliver interactive visual outputs, and elevate user experience with 
              futuristic aesthetics.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
