"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function StatusHUD() {
  const stats = [
    { name: "Energy", level: 80 },
    { name: "Shields", level: 60 },
    { name: "Weapons", level: 50 },
    { name: "Engines", level: 70 },
  ];

  const barAnimations = stats.map(() => useAnimation());

  // Animate bars to fluctuate slightly
  useEffect(() => {
    barAnimations.forEach((controls, idx) => {
      const base = stats[idx].level;
      const range = 15;
      const animateBar = () => {
        controls.start({
          width: `${base + (Math.random() * range - range / 2)}%`,
          transition: { duration: 1, ease: "easeInOut" },
        }).then(animateBar);
      };
      animateBar();
    });
  }, [barAnimations, stats]);

  return (
    <div className="fixed bottom-16 right-10 z-50 pointer-events-none w-64 space-y-4 text-green-400 font-mono">
      <h2 className="text-sm font-bold text-green-300 tracking-widest text-center">SHIP STATUS</h2>

      {/* Bars */}
      <div className="space-y-3">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-xs mb-1">
              <span>{stat.name}</span>
              <span>{Math.floor(stat.level)}%</span>
            </div>
            <div className="w-full h-2 bg-green-900 rounded-full overflow-hidden relative">
              <motion.div
                className="h-2 bg-green-400 rounded-full absolute top-0 left-0"
                animate={barAnimations[idx]}
              />
              {/* Glow overlay */}
              <motion.div
                className="h-2 absolute top-0 left-0 w-full bg-green-400 opacity-20 rounded-full"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ repeat: Infinity, duration: 1.2 + idx * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Blinking system indicators */}
      <div className="flex justify-around mt-4">
        {["CPU", "O2", "Nav", "Comms"].map((sys, idx) => (
          <motion.div
            key={idx}
            className="w-3 h-3 rounded-full border border-green-400"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1 + idx * 0.3 }}
          />
        ))}
      </div>

      {/* Floating particle effects */}
      {Array.from({ length: 5 }).map((_, idx) => (
        <motion.div
          key={idx}
          className="absolute w-1 h-1 bg-green-400 rounded-full"
          initial={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
          animate={{
            top: [`${Math.random() * 80}%`, `${Math.random() * 80}%`],
            left: [`${Math.random() * 80}%`, `${Math.random() * 80}%`],
            opacity: [0.1, 0.4, 0.1],
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
