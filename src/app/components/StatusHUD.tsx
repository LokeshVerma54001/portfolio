"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StatusHUD() {
  // Store generated particle positions
  const [particles, setParticles] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    // Generate random positions only once on the client
    const generated = Array.from({ length: 5 }).map(() => ({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
    }));
    setParticles(generated);
  }, []);

  const systems = [
    { name: "Shields", level: 85 },
    { name: "Engines", level: 70 },
    { name: "Weapons", level: 65 },
    { name: "Comms", level: 90 },
  ];

  return (
    <div className="fixed bottom-16 right-10 z-50 pointer-events-none w-64 space-y-4 text-green-400 font-mono">
      <h2 className="text-sm font-bold text-green-300 tracking-widest text-center">
        SHIP STATUS
      </h2>

      {/* System Status Bars */}
      <div className="space-y-2">
        {systems.map((sys, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-xs mb-1">
              <span>{sys.name}</span>
              <span>{sys.level}%</span>
            </div>
            <div className="w-full h-2 bg-green-900 rounded-full overflow-hidden relative">
              <motion.div
                className="h-2 bg-green-400 rounded-full absolute top-0 left-0"
                initial={{ width: `${sys.level}%` }}
                animate={{
                  width: [
                    `${sys.level - 5}%`,
                    `${sys.level + 5}%`,
                    `${sys.level - 5}%`,
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Blinking Warning Lights */}
      <div className="flex justify-center gap-3 mt-3">
        {["⚠", "▲", "✦"].map((icon, idx) => (
          <motion.span
            key={idx}
            className="text-green-400"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 1.5 + idx * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      {/* Floating particle effects (hydration-safe) */}
      {particles.map((pos, idx) => (
        <motion.div
          key={idx}
          className="absolute w-1 h-1 bg-green-400 rounded-full"
          initial={{ top: pos.top, left: pos.left }}
          animate={{
            top: [`${Math.random() * 80}%`, `${Math.random() * 80}%`],
            left: [`${Math.random() * 80}%`, `${Math.random() * 80}%`],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
