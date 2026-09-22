"use client";
import { motion } from "framer-motion";
import siteData from "@/data/siteData";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-offwhite">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
        What I Do
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {siteData.services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-t-4 border-cyan"
          >
            <h3 className="font-heading text-xl font-semibold text-navy mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}