"use client";

import { motion } from "framer-motion";

export default function MenuHero() {
  return (
    <section className="relative pt-32 pb-14 px-6 text-center z-20">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        className="max-w-4xl mx-auto bg-black/55 backdrop-blur-xl border border-amber-100/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
      >
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-amber-300/90 mb-5">Swayed Menu</p>
        <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] font-bold text-white mb-5 leading-tight">
          Crafted for Every Sip
        </h1>
        <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto">
          Explore hand-brewed drinks, warm favorites, and comfort snacks. Prices listed in INR.
        </p>
      </motion.div>
    </section>
  );
}
