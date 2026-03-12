"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md text-white border-b border-white/10"
    >
      <Link
        href="/"
        className="text-2xl font-bold font-[family-name:var(--font-playfair)] tracking-wider flex items-center gap-2"
      >
        <Coffee className="w-6 h-6 text-amber-500" />
        Swayed Over Coffee
      </Link>
      <div className="hidden md:flex items-center gap-8 font-medium">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive ? "text-amber-400" : "text-white/80 hover:text-amber-400"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
