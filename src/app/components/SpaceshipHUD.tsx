"use client";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useEffect, useMemo } from "react";

export default function SpaceshipHUD() {
  // ✅ Memoized indicators
  const indicators = useMemo(
    () => [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "UI/UX", level: 70 },
    ],
    []
  );

  // ✅ One useAnimation hook per indicator (top-level, not in a loop)
  const reactAnim = useAnimation();
  const nextAnim = useAnimation();
  const tsAnim = useAnimation();
  const uiuxAnim = useAnimation();

  const barAnimations: AnimationControls[] = [reactAnim, nextAnim, tsAnim, uiuxAnim];

  // Animate bars
  useEffect(() => {
    barAnimations.forEach((controls, idx) => {
      const base = indicators[idx].level;
      const range = 10;

      const animateBar = () => {
        controls
          .start({
            width: `${base + (Math.random() * range - range / 2)}%`,
            transition: { duration: 1, ease: "easeInOut" },
          })
          .then(animateBar);
      };

      animateBar();
    });
  }, [barAnimations, indicators]);

  return (
    <div className=" xl:flex flex-col z-50 pointer-events-none w-80 space-y-3 text-green-400 font-mono hidden">
      {/* Heading */}
      <h1 className="text-center">Detecting Problems In Codebase...</h1>

      {/* Radar */}
      <div className="relative w-40 h-40 mx-auto">
        {[0.25, 0.5, 0.75, 1].map((scale, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-green-400 rounded-full"
            style={{ transform: `scale(${scale})` }}
          />
        ))}

        {/* Sweep line */}
        <motion.div
          className="absolute w-[2px] h-20 bg-green-400 top-1/2 left-1/2 origin-top rounded"
          style={{ transform: "translate(-50%, -100%)" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />

        {/* Center dot */}
        <div className="absolute w-2 h-2 bg-green-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Radar pulses */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-green-400 rounded-full top-1/2 left-1/2"
            style={{ width: "0px", height: "0px", transform: "translate(-50%, -50%)" }}
            animate={{
              width: ["0px", "180px"],
              height: ["0px", "180px"],
              opacity: [0.6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}

        {/* Random radar blips */}
        {Array.from({ length: 2 }).map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              top: [`${30 + Math.random() * 40}%`],
              left: [`${30 + Math.random() * 40}%`],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Blinking Indicators */}
      <div className="flex justify-around">
        {indicators.map((ind, idx) => (
          <motion.div
            key={ind.name}
            className="w-3 h-3 rounded-full bg-green-400"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1 + idx * 0.3 }}
          />
        ))}
      </div>

      {/* Oscillating Skill Bars */}
      <div className="space-y-2">
        {indicators.map((ind, idx) => (
          <div key={ind.name}>
            <div className="flex justify-between text-xs mb-1">
              <span>{ind.name}</span>
            </div>
            <div className="w-full h-2 bg-green-900 rounded-full overflow-hidden relative">
              <motion.div
                className="h-2 bg-green-400 rounded-full absolute top-0 left-0"
                animate={barAnimations[idx]}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
