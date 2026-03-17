"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundVideo from "../components/BackgroundVideo";

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

const storyMilestones = [
  {
    step: "01",
    title: "The Beginning",
    desc: "In 2010, Swayed Over Coffee was founded by Shagul Nizamudeen. With a passion for great coffee and delicious food, they built a welcoming gathering spot that quickly became a favorite."
  },
  {
    step: "02",
    title: "Expansion and Growth",
    desc: "Over the years, we expanded with a full kitchen, talented chefs and baristas, and an evolving menu sourced from trusted local farmers and suppliers."
  },
  {
    step: "03",
    title: "Our Philosophy",
    desc: "We serve high-quality food and drinks in a warm environment, using local and sustainable ingredients whenever possible to keep every cup and plate meaningful."
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden font-sans text-stone-900 selection:bg-amber-700 selection:text-white">
      <BackgroundVideo />

      <section className="relative pt-36 pb-20 px-6">
        <div className="pointer-events-none absolute -top-28 -left-20 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-black/55 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-white/5" />
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

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Established 2010",
                "Locally Sourced",
                "Chef + Barista Crafted",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-stone-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-full h-80 md:h-[26rem] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
          >
            <Image
              src="/chai.png"
              alt="Milk chai"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-amber-500/20" />
            <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-white/15 bg-black/45 backdrop-blur-lg p-4">
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-amber-300">Signature Pour</p>
              <p className="text-white text-lg font-semibold">Milk Chai, Balanced and Smooth</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white">
                From one counter to a community favorite
              </h2>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-0 bottom-0 hidden md:block w-px bg-gradient-to-b from-amber-500/0 via-amber-400/70 to-amber-500/0" />

              <div className="space-y-6">
                {storyMilestones.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: idx * 0.08 }}
                    className="relative md:pl-14"
                  >
                    <span className="hidden md:flex absolute left-0 top-8 h-8 w-8 items-center justify-center rounded-full border border-amber-300/60 bg-amber-500/20 text-[0.65rem] tracking-widest text-amber-100">
                      {item.step}
                    </span>

                    <div className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl p-7 md:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-amber-400/40">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] font-bold text-white">
                          {item.title}
                        </h3>
                        <span className="md:hidden inline-flex items-center rounded-full border border-amber-300/50 bg-amber-500/20 px-3 py-1 text-[0.6rem] tracking-[0.22em] text-amber-100">
                          {item.step}
                        </span>
                      </div>
                      <p className="text-stone-200/95 leading-relaxed md:text-lg">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

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
                className="group relative overflow-hidden bg-black/45 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-[0_18px_55px_rgba(0,0,0,0.3)] hover:border-amber-500/40 transition-colors"
              >
                <div className="pointer-events-none absolute -top-20 -right-14 h-36 w-36 rounded-full bg-amber-500/15 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
                <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-stone-200 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
