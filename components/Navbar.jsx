"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import siteData from "@/data/siteData";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-16 py-4 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="MDR Tech" width={40} height={40} />
        <span className="font-heading font-bold text-lg">{siteData.brand}</span>
      </div>

      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="flex gap-4 text-navy text-lg">
        <a href={siteData.socials.github} target="_blank"><FaGithub /></a>
        <a href={siteData.socials.linkedin} target="_blank"><FaLinkedin /></a>
        <a href={`mailto:${siteData.socials.email}`}><FaEnvelope /></a>
      </div>
    </nav>
  );
}