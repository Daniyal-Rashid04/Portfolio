"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import siteData from "@/data/siteData";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const roles = siteData.hero.rotatingRoles;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-32 md:pt-24 gap-10">
      <div className="max-w-xl">
        <p className="text-gray-500 mb-2">{siteData.hero.greeting}</p>

        <AnimatePresence mode="wait">
          <motion.h1
            key={roles[index]}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl md:text-6xl font-bold text-navy"
          >
            {roles[index]}
          </motion.h1>
        </AnimatePresence>

        <h2 className="text-xl md:text-2xl font-semibold text-darkblue mt-4">
          {siteData.hero.heading}
        </h2>

        <p className="text-gray-600 mt-4">{siteData.hero.subtext}</p>

        <p className="mt-4 font-medium text-cyan-600">{siteData.hero.hook}</p>

        <div className="mt-8 flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-orange text-white rounded-full font-medium hover:opacity-90">
            View Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-navy rounded-full font-medium hover:bg-navy hover:text-white transition">
            Let's Talk
          </a>
        </div>

        <p className="mt-10 text-xs tracking-widest text-gray-400">
          ↓ {siteData.hero.scrollText}
        </p>
      </div>

      <motion.div
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={400}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
      </motion.div>
    </section>
  );
}