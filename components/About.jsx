"use client";
import { motion } from "framer-motion";
import siteData from "@/data/siteData";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="py-24 px-6 md:px-16 bg-white"
    >
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
        {siteData.about.title}
      </h2>
      <p className="text-gray-600 max-w-2xl mb-10">{siteData.about.description}</p>

      <div className="flex flex-wrap gap-8">
        {siteData.about.stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl font-bold text-cyan-600">{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
            <p className="mt-10 text-gray-700 font-medium">
        Have a project in mind?{" "}
        <a href="#contact" className="text-orange hover:underline">
          Let's talk about it →
        </a>
      </p>
    </motion.section>
  );
}