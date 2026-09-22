"use client";
import { motion } from "framer-motion";
import siteData from "@/data/siteData";

export default function PricingCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 md:px-16 bg-navy text-white text-center"
    >
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
        {siteData.pricingCTA.heading}
      </h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-8">{siteData.pricingCTA.text}</p>
      <a
        href="#contact"
        className="px-8 py-3 bg-orange rounded-full font-medium hover:opacity-90 inline-block"
      >
        {siteData.pricingCTA.button}
      </a>
    </motion.section>
  );
}