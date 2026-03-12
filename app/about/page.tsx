"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundVideo from "../components/BackgroundVideo";
import Navbar from "../components/Navbar";

const highlights = [
  {
    title: "Small-Batch Roasts",
    desc: "We roast in smaller batches to keep flavor profiles clean, bright, and consistent."
  },
  {
    title: "Chai-First Culture",
    desc: "Milk chai is our heartbeat. Every blend is tested for balance and smooth spice."
  },
  {
    title: "Pastries Made Daily",
    desc: "Fresh bakes every morning so the aroma hits the door before the coffee does."
  },
];

export default function AboutPage() {
  return (
    <div className="relative font-sans text-stone-900 selection:bg-amber-700 selection:text-white">
      <BackgroundVideo />
      <Navbar />

      <section className="relative pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">About Us</p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6">
              We brew for the quiet moments
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed">
              Swayed Over Coffee started as a small counter for people who love slow mornings. We
              wanted to serve coffee and chai that feel honest, grounded, and made with care.
            </p>
            <p className="text-stone-400 text-base leading-relaxed mt-5">
              From sourcing beans to whisking milk, everything we do is focused on flavor, warmth, and
              the feeling of being welcomed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-full h-80 md:h-[26rem] rounded-[2rem] overflow-hidden border border-white/10"
          >
            <Image
              src="/chai.png"
              alt="Milk chai"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-amber-500/10" />
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">What Drives Us</p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white">
              Crafted with care, served with warmth
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 80, damping: 18, delay: idx * 0.1 }}
                className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl hover:border-amber-500/40 transition-colors"
              >
                <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-stone-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black/80 backdrop-blur-md py-8 text-center text-stone-500 border-t border-white/10">
        <p>Copyright (c) 2026 swayedovercoffee - All Rights Reserved.</p>
      </footer>
    </div>
  );
}
