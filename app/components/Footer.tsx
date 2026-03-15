"use client";

import Link from "next/link";
import {
  Coffee,
  Instagram,
  Youtube,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/swayedovercoffee",
    color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@swayedovercoffee",
    color: "hover:bg-red-600",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/9003019030",
    color: "hover:bg-green-600",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Footer() {
  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Ambient top glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.4fr] gap-12 mb-14">
          {/* Brand block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 rounded-full bg-amber-600 flex items-center justify-center shadow-lg shadow-amber-700/40 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-white group-hover:text-amber-200 transition-colors duration-300">
                Swayed Over Coffee
              </span>
            </Link>

            <p className="text-stone-400 leading-relaxed max-w-sm text-sm">
              Freshly brewed coffee and homemade pastries, crafted with love in the heart of Chennai.
              Every cup is a quiet ritual. Every visit, a warm memory.
            </p>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ Icon, label, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-stone-300 hover:text-white transition-all duration-300 hover:scale-110 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Badge row */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Small-batch roasts", "Homemade pastries", "Chai favorites"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-white/10 text-stone-500 text-xs tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            <h4 className="text-white font-semibold mb-6 text-xs uppercase tracking-[0.2em]">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    <span className="w-0 h-px bg-amber-400 group-hover:w-5 transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Order CTA */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-amber-800/30 hover:shadow-amber-600/40 hover:scale-[1.04] group"
              >
                Order Now
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            <h4 className="text-white font-semibold mb-6 text-xs uppercase tracking-[0.2em]">
              Find Us
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-600/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div>
                  <p className="text-stone-300 font-medium">Address</p>
                  <p className="text-stone-500 mt-0.5 leading-relaxed">
                    113, PH Road, Purasaiwakkam,<br />
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-600/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div>
                  <p className="text-stone-300 font-medium">Phone</p>
                  <a
                    href="tel:9884630841"
                    className="text-stone-500 mt-0.5 hover:text-amber-300 transition-colors duration-200"
                  >
                    +91 98846 30841
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-600/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div>
                  <p className="text-stone-300 font-medium">Email</p>
                  <a
                    href="mailto:swayedovercoffee@gmail.com"
                    className="text-stone-500 mt-0.5 hover:text-amber-300 transition-colors duration-200 break-all"
                  >
                    swayedovercoffee@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-600/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div>
                  <p className="text-stone-300 font-medium">Hours</p>
                  <p className="text-stone-500 mt-0.5">Mon – Sun</p>
                  <p className="text-amber-400/80 text-xs mt-0.5 font-medium tracking-wide">
                    09:00 am – 05:00 pm
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider with decorative dot */}
        <div className="relative flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-600/60" />
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <p>© 2026 Swayed Over Coffee. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with{" "}
            <Heart className="w-3 h-3 text-amber-500 fill-amber-500 inline" />{" "}
            in Chennai
          </p>
        </div>
      </div>
    </footer>
  );
}
