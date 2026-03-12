"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import BackgroundVideo from "../components/BackgroundVideo";
import Navbar from "../components/Navbar";

const menuCategories = [
  {
    title: "Milk Chai's",
    description: "Indulge in a variety of milk chai delights, pure bliss in every sip.",
    image: "/chai.png",
    items: [
      { name: "Classic Dum Chai", price: "20", desc: "Signature milk tea, a perfect harmony of premium tea leaves and silky milk." },
      { name: "Ginger Tea", price: "25", desc: "Indian ginger milk tea, a comforting blend of robust spices." },
      { name: "Spice Masala Chai", price: "30", desc: "A symphony of rich spices and robust tea." },
      { name: "Elaichi Chai", price: "30", desc: "Aromatic cardamom meets a bold milk chai." },
      { name: "Bombay Cutting Chai", price: "30", desc: "A bold and flavorful blend capturing Mumbai's essence." },
      { name: "Gulkand Chai", price: "30", desc: "Sweet elegance of rose-infused gulkand." },
      { name: "Saffroni Swayed Chai", price: "30", desc: "The opulence of saffron meets a perfect blend of tea." },
      { name: "Kattan Chai", price: "12", desc: "Comforting warmth of a traditional brew." },
      { name: "Lemon Chia Chai", price: "15", desc: "Zesty twist of tangy lemon and chia seeds." },
    ],
  },
  {
    title: "Coffee",
    description: "Freshly brewed coffee crafted to perfection.",
    image: "/coffee.png",
    items: [
      { name: "Filter Coffee", price: "35", desc: "Traditional filter coffee, a rich, aromatic brew capturing Chennai's essence." },
      { name: "Black Coffee", price: "40", desc: "Pure, robust flavor for a bold and invigorating experience." },
      { name: "Chukku Kaapi With Milk", price: "45", desc: "Unique blend of freshly brewed coffee and warming spices." },
      { name: "Chocolate Coffee", price: "50", desc: "Freshly brewed coffee meets decadent chocolate." },
    ],
  },
  {
    title: "Cold Drinks",
    description: "Refreshing cold beverages to cool you down.",
    image: "/cold_drinks.png",
    items: [
      { name: "Cold Badam Milk", price: "65", desc: "Chilled, creamy blend of almond goodness." },
      { name: "Cold Rose Milk", price: "50", desc: "Refreshing blend of creamy milk and fragrant rose essence." },
      { name: "Cold Coffee", price: "90", desc: "Smooth, chilled brew perfectly blended." },
      { name: "Cold Milo", price: "100", desc: "Signature cold Milo drink, topped with extra Milo." },
    ],
  },
  {
    title: "Hot Drinks",
    description: "Cozy up with our soothing hot beverages.",
    image: "/hot_drinks.png",
    items: [
      { name: "Poondu Milk Hot", price: "80", desc: "Unique blend of creamy milk and savory garlic for a healthy twist." },
      { name: "Hot Chocolate", price: "75", desc: "Rich and creamy blend of velvety chocolate and warm milk." },
      { name: "Hot Milo", price: "95", desc: "Warm and comforting chocolaty delight." },
      { name: "Hot Milk", price: "40", desc: "Simple yet comforting cup of warm, creamy milk." },
    ],
  },
  {
    title: "Homemade Pastries & Snacks",
    description: "Delicious treats to pair with your favorite drink.",
    image: "/pastries.png",
    items: [
      { name: "Bun Butter Jam", price: "50", desc: "Generously spread with creamy butter and sweet jam." },
      { name: "Bun Nutella", price: "65", desc: "Generously spread with creamy Nutella and rich butter." },
      { name: "Malai Bun", price: "50", desc: "Soft, fluffy bun filled with rich, smooth malai." },
      { name: "Veg Puff", price: "35", desc: "Flaky pastry filled with a savory blend of fresh vegetables." },
      { name: "Paneer Puff", price: "40", desc: "Flaky pastry filled with flavorful, spiced paneer." },
      { name: "Samosa (4)", price: "30", desc: "Crispy pastry stuffed with spiced, savory potatoes." },
      { name: "Veg Momo (6)", price: "65", desc: "Tender, steamed dumplings filled with fresh vegetables." },
      { name: "Corn Cheese Momo (6)", price: "75", desc: "Steamed dumplings packed with sweet corn and melted cheese." },
      { name: "Paneer Momo (6)", price: "80", desc: "Steamed dumplings filled with spiced, creamy paneer." },
      { name: "Classic Maggi", price: "55", desc: "Comforting bowl of instant noodles with rich, savory seasoning." },
      { name: "Chilli Cheese Maggi", price: "65", desc: "Fiery twist on classic noodles topped with melted cheese." },
      { name: "Osmania Biscuits (6)", price: "30", desc: "Perfect blend of crispiness and subtle sweetness." },
      { name: "Peanut / Chocolate / Fruit Biscuits (6)", price: "30", desc: "Crunchy delights packed with flavor." },
      { name: "Tea Cake", price: "25", desc: "Soft buttery tea cake, a moist and tender treat." },
    ],
  },
];

const scribblePath =
  "M 50 30 C 18 120, 82 90, 62 170 S 20 260, 42 320 S 80 410, 56 500 S 24 600, 46 690 S 82 780, 58 870 S 26 960, 48 1040 S 78 1120, 52 1200";

export default function MenuPage() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: menuRef,
    offset: ["start 0.15", "end 0.9"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const beanOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div className="relative font-sans text-stone-900 selection:bg-amber-700 selection:text-white">
      <BackgroundVideo />
      <Navbar />

      <div ref={menuRef} className="relative">
        <div className="pointer-events-none absolute inset-0 z-10">
          <motion.svg
            viewBox="0 0 100 1200"
            preserveAspectRatio="none"
            className="absolute left-0 top-0 h-full w-full"
          >
            <motion.path
              d={scribblePath}
              stroke="rgba(245, 158, 11, 0.9)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength }}
            />
          </motion.svg>

          <motion.div className="coffee-bean bean-delay-1" style={{ top: "10%", left: "12%", opacity: beanOpacity }}>
            <span className="coffee-bean__seam" />
          </motion.div>
          <motion.div className="coffee-bean bean-delay-2" style={{ top: "18%", left: "56%", opacity: beanOpacity }}>
            <span className="coffee-bean__seam" />
          </motion.div>
          <motion.div className="coffee-bean bean-delay-3" style={{ top: "28%", left: "32%", opacity: beanOpacity }}>
            <span className="coffee-bean__seam" />
          </motion.div>
          <motion.div className="coffee-bean bean-delay-4" style={{ top: "38%", left: "70%", opacity: beanOpacity }}>
            <span className="coffee-bean__seam" />
          </motion.div>
          <motion.div className="coffee-bean bean-delay-5" style={{ top: "48%", left: "20%", opacity: beanOpacity }}>
            <span className="coffee-bean__seam" />
          </motion.div>
          <motion.div className="coffee-bean" style={{ top: "58%", left: "60%", opacity: beanOpacity, animationDelay: "0.6s" }}>
            <span className="coffee-bean__seam" />
          </motion.div>
          <motion.div className="coffee-bean" style={{ top: "66%", left: "40%", opacity: beanOpacity, animationDelay: "1.1s" }}>
            <span className="coffee-bean__seam" />
          </motion.div>
          <motion.div className="coffee-bean" style={{ top: "74%", left: "76%", opacity: beanOpacity, animationDelay: "1.7s" }}>
            <span className="coffee-bean__seam" />
          </motion.div>
          <motion.div className="coffee-bean" style={{ top: "82%", left: "28%", opacity: beanOpacity, animationDelay: "2.4s" }}>
            <span className="coffee-bean__seam" />
          </motion.div>
          <motion.div className="coffee-bean" style={{ top: "90%", left: "62%", opacity: beanOpacity, animationDelay: "3s" }}>
            <span className="coffee-bean__seam" />
          </motion.div>
          <motion.div className="coffee-bean" style={{ top: "96%", left: "44%", opacity: beanOpacity, animationDelay: "3.6s" }}>
            <span className="coffee-bean__seam" />
          </motion.div>
        </div>

        <section className="relative pt-36 pb-20 px-6 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-black/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">Menu</p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] font-bold text-white mb-4">
              Crafted for Every Sip
            </h1>
            <p className="text-stone-300 text-lg">
              Explore our menu with smooth animated cards. Prices listed in INR.
            </p>
          </motion.div>
        </section>

        <section className="relative px-6 pb-28 z-20">
          <div className="max-w-7xl mx-auto">
            {menuCategories.map((category) => (
              <div key={category.title} className="mb-24">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 80 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ type: "spring", stiffness: 60, damping: 20 }}
                  className="flex flex-col md:flex-row items-center gap-10 mb-12 bg-black/40 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent pointer-events-none"></div>

                  <motion.div
                    initial={{ scale: 0.8, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.6, duration: 1.5 }}
                    className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.2)] flex-shrink-0 z-10"
                  >
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 192px, 256px"
                      className="object-cover"
                    />
                  </motion.div>

                  <div className="text-center md:text-left z-10">
                    <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-4 drop-shadow-md">
                      {category.title}
                    </h2>
                    <div className="w-16 h-1 bg-amber-500 mx-auto md:mx-0 mb-6 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                    <p className="text-stone-300 font-light text-xl max-w-xl leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={`${item.name}-${itemIdx}`}
                      initial={{ opacity: 0, y: 120, scale: 0.9 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                          delay: (itemIdx % 3) * 0.1,
                        },
                      }}
                      viewport={{ once: false, margin: "-50px" }}
                      whileHover={{ y: -12, scale: 1.02 }}
                      className="bg-black/50 backdrop-blur-lg p-8 rounded-[2rem] shadow-xl border border-white/10 hover:border-amber-500/50 hover:bg-black/70 transition-all flex flex-col justify-between group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 rounded-bl-[100px] pointer-events-none transition-colors group-hover:bg-amber-600/10"></div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6 gap-4 border-b border-white/10 pb-4">
                          <h3 className="text-2xl font-bold text-white leading-tight font-[family-name:var(--font-playfair)] group-hover:text-amber-400 transition-colors pr-4">
                            {item.name}
                          </h3>
                          <span className="text-2xl font-bold text-amber-500 tracking-wider whitespace-nowrap">
                            INR {item.price}
                          </span>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-black/80 backdrop-blur-md py-8 text-center text-stone-500 border-t border-white/10">
        <p>Copyright (c) 2026 swayedovercoffee - All Rights Reserved.</p>
      </footer>
    </div>
  );
}
