"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { MenuCategory } from "./types";

type MenuCategorySectionProps = {
  category: MenuCategory;
  sectionId: string;
};

export default function MenuCategorySection({ category, sectionId }: MenuCategorySectionProps) {
  return (
    <section id={sectionId} className="mb-24 scroll-mt-36">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 70 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ type: "spring", stiffness: 65, damping: 20 }}
        className="flex flex-col md:flex-row items-center gap-10 mb-12 bg-black/45 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/25 via-transparent to-amber-950/10 pointer-events-none" />

        <motion.div
          initial={{ scale: 0.8, rotate: -8 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 1.3 }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.2)] flex-shrink-0 z-10"
        >
          <Image src={category.image} alt={category.title} fill sizes="(max-width: 768px) 192px, 256px" className="object-cover" />
        </motion.div>

        <div className="text-center md:text-left z-10">
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-600 mb-4 drop-shadow-md">
            {category.title}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto md:mx-0 mb-5 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
          <p className="text-stone-300 font-light text-lg md:text-xl max-w-xl leading-relaxed">{category.description}</p>
          <p className="text-amber-200/85 text-sm mt-4 uppercase tracking-[0.2em]">{category.items.length} items</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {category.items.map((item, itemIdx) => (
          <motion.article
            key={`${item.name}-${itemIdx}`}
            initial={{ opacity: 0, y: 90, scale: 0.94 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 18,
                delay: (itemIdx % 3) * 0.1,
              },
            }}
            viewport={{ once: false, margin: "-80px" }}
            whileHover={{ y: -8, scale: 1.015 }}
            className="bg-black/50 backdrop-blur-lg p-7 rounded-[2rem] shadow-xl border border-white/10 hover:border-amber-500/50 hover:bg-black/70 transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 rounded-bl-[100px] pointer-events-none transition-colors group-hover:bg-amber-600/15" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-5 gap-4 border-b border-white/10 pb-4">
                <h3 className="text-2xl font-bold text-white leading-tight font-[family-name:var(--font-playfair)] group-hover:text-amber-300 transition-colors pr-4">
                  {item.name}
                </h3>
                {item.price !== null && (
                  <span className="text-2xl font-bold text-amber-400 tracking-wider whitespace-nowrap">INR {item.price}</span>
                )}
              </div>
              <p className="text-stone-300/85 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
