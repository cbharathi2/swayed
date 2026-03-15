"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-3"
            : "bg-gradient-to-b from-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full ring-2 ring-amber-500/70 shadow-lg shadow-black/30 transition-all duration-300 group-hover:scale-110 group-hover:ring-amber-400">
              <Image
                src="/logo.jpeg"
                alt="Swayed Over Coffee logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl font-bold font-[family-name:var(--font-playfair)] tracking-wide text-white group-hover:text-amber-200 transition-colors duration-300">
              Swayed Over Coffee
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg group transition-colors duration-200 ${
                    isActive ? "text-amber-400" : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-amber-400 transition-all duration-300 ${
                      isActive ? "w-4/5 opacity-100" : "w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-amber-800/30 hover:shadow-amber-500/40 hover:scale-[1.04] active:scale-95"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex min-w-0 flex-1 items-center gap-3 pr-4"
              >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-amber-500/70 shadow-lg shadow-black/30">
                  <Image
                    src="/logo.jpeg"
                    alt="Swayed Over Coffee logo"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <span className="truncate text-base font-bold leading-tight tracking-[0.08em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] sm:text-lg font-[family-name:var(--font-playfair)]">
                  Swayed Over Coffee
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-white/10 text-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
              {[{ href: "/", label: "Home" }, ...navLinks].map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.08, type: "spring", stiffness: 120, damping: 20 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-4xl font-[family-name:var(--font-playfair)] font-bold transition-colors duration-200 ${
                        isActive ? "text-amber-400" : "text-white hover:text-amber-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
                >
                  Order Now
                </Link>
              </motion.div>
            </nav>

            {/* Bottom hint */}
            <p className="text-center text-stone-500 text-xs pb-8 tracking-widest uppercase">
              Open today · 09:00 am – 05:00 pm
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
