"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import siteData from "@/data/siteData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-white">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
        Some Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {siteData.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="p-8 rounded-xl bg-offwhite shadow-sm hover:shadow-lg transition"
          >
            <h3 className="font-heading text-2xl font-bold text-navy mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-cyan/10 text-cyan-700 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy font-medium hover:text-orange"
              >
                <FaGithub /> GitHub
              </a>

              {project.linkedin && (
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy font-medium hover:text-orange"
                >
                  <FaLinkedin /> LinkedIn Post
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}