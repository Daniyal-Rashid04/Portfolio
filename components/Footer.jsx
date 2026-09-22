import siteData from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-16 bg-navy text-gray-300 text-center text-sm">
      <p>© {new Date().getFullYear()} {siteData.brand} — {siteData.tagline}. All rights reserved.</p>
    </footer>
  );
}