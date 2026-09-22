"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import siteData from "@/data/siteData";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "d002521f-f536-40fe-8997-07614615329c");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
      setStatus("Message sent successfully! ");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-offwhite">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
          {siteData.contact.heading}
        </h2>
        <p className="text-gray-600">{siteData.contact.text}</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 rounded-lg border border-gray-200 focus:outline-cyan"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-4 rounded-lg border border-gray-200 focus:outline-cyan"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="p-4 rounded-lg border border-gray-200 focus:outline-cyan"
        />
        <button
          type="submit"
          className="bg-orange text-white py-4 rounded-lg font-medium hover:opacity-90"
        >
          Send Message
        </button>
        {status && <p className="text-center text-sm text-gray-600">{status}</p>}
      </form>

      <div className="flex justify-center gap-6 mt-10 text-2xl text-navy">
        <a href={siteData.socials.github} target="_blank"><FaGithub /></a>
        <a href={siteData.socials.linkedin} target="_blank"><FaLinkedin /></a>
        <a href={`mailto:${siteData.socials.email}`}><FaEnvelope /></a>
      </div>
    </section>
  );
}