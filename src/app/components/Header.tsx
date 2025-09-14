"use client";
import { motion } from "framer-motion";

export default function Header() {
  const menuItems = ["About", "Experience", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-black/80 border-b border-green-500/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Title */}
        <motion.h1
          className="text-green-400 font-mono text-xl tracking-widest drop-shadow-[0_0_8px_#00ff00]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🚀 CodeShip UI
        </motion.h1>

        {/* Menu Items */}
        <nav className="flex gap-8 font-mono text-green-400">
          {menuItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-lg tracking-wider drop-shadow-[0_0_6px_#00ff00]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              {item}

              {/* Glowing underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#00ff00]" />
            </motion.a>
          ))}
        </nav>
      </div>

      {/* Subtle grid background overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </header>
  );
}
