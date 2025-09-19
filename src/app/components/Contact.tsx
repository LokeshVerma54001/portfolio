"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-black/80 border-t border-green-500/40 text-green-400">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl font-bold tracking-widest text-green-400 drop-shadow-[0_0_8px_#22c55e]">
            COMMUNICATIONS ONLINE
          </h2>
          <p className="text-sm mt-2 text-green-400/80 max-w-md">
            Open to collaboration, recruitment, and exciting missions.  
            If you’re looking for a dedicated developer to join your crew, let’s connect.  
          </p>
        </motion.div>

        {/* Right - Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-6 mt-6 md:mt-0"
        >
          <a
            href="mailto:youremail@example.com"
            className="flex items-center gap-2 px-4 py-2 border border-green-500/40 rounded-lg hover:bg-green-500/10 transition drop-shadow-[0_0_6px_#22c55e]"
          >
            <Mail className="w-5 h-5 text-green-400" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-green-500/40 rounded-lg hover:bg-green-500/10 transition drop-shadow-[0_0_6px_#22c55e]"
          >
            <Github className="w-5 h-5 text-green-400" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-green-500/40 rounded-lg hover:bg-green-500/10 transition drop-shadow-[0_0_6px_#22c55e]"
          >
            <Linkedin className="w-5 h-5 text-green-400" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-green-500/20 py-4 text-center text-xs text-green-400/70">
        © {new Date().getFullYear()} Lokesh Verma — All Rights Reserved
      </div>
    </footer>
  );
}
