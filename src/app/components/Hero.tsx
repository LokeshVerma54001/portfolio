"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import SpaceshipHUD from "./SpaceshipHUD";
import StatusHUD from "./StatusHUD";

// ✅ define once, outside the component
const phrases = [
  "A FullStack Developer",
  "A Freelancer",
  "3D/2D Artist/Illustrator",
  "A UI/UX Explorer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];

    if (typing) {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(
          () => setText(currentPhrase.slice(0, text.length + 1)),
          100
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(currentPhrase.slice(0, text.length - 1)),
          50
        );
      } else {
        setTyping(true);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typing, phraseIndex]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,0,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,0,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 5%, rgba(0,0,0,0.3) 50%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 5%, rgba(0,0,0,0.3) 50%)",
        }}
      />

      {/* === Left HUD (Spaceship) === */}
      <div className="absolute left-20 top-110 -translate-y-1/2 hidden lg:block">
        <SpaceshipHUD />
      </div>

      {/* === Right HUD (Status) === */}
      <div className="absolute right-20 top-140 -translate-y-1/2 hidden lg:block">
        <StatusHUD />
      </div>

      {/* === Main Content === */}
      <div className="max-w-3xl w-full px-8 sm:px-20 flex flex-col sm:flex-row items-center gap-2">
        {/* Text Section */}
        <div className="flex-1 space-y-4 sm:space-y-6">
          <motion.p
            className="text-green-400 font-mono tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I am
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-6xl font-bold text-white font-mono tracking-tight drop-shadow-[0_0_12px_#00ff00]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Lokesh Verma
          </motion.h1>

          {/* Typing Effect */}
          <motion.p
            className="text-lg sm:text-2xl text-white/80 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {text}
            <span className="border-r-2 border-green-400 ml-1 animate-pulse"></span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <Github />
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <Linkedin />
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <Twitter />
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <Youtube />
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-green-400 shadow-[0_0_20px_#00ff00]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={"/cat.jpg"}
            alt="Profile"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-400 text-2xl animate-bounce font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        ↓
      </motion.div>
    </section>
  );
}
