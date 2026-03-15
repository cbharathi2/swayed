"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BackgroundVideo from "../components/BackgroundVideo";
import MenuHero from "../components/menu/MenuHero";
import MenuQuickNav from "../components/menu/MenuQuickNav";
import MenuCategorySection from "../components/menu/MenuCategorySection";
import CoffeeBeansOverlay from "../components/menu/CoffeeBeansOverlay";
import type { MenuCategory } from "../components/menu/types";

const menuCategories: MenuCategory[] = [
  {
    title: "Milk Chai's",
    description: "Indulge in a variety of milk chai delights, pure bliss in every sip.",
    image: "/chai.png",
    items: [
      { name: "Classic Dum Chai", price: 20, desc: "Premium tea leaves and silky milk — unparalleled satisfaction in every sip." },
      { name: "Ginger Tea", price: null, desc: "Robust Indian spices and creamy milk delivering pure bliss in every warm cup." },
      { name: "Spice Masala Chai", price: null, desc: "A symphony of rich spices and robust tea creating an invigorating sensation." },
      { name: "Elaichi Chai", price: null, desc: "Fragrant cardamom and robust milk chai enchanting your senses with every sip." },
      { name: "Bombay Cutting Chai", price: null, desc: "Bold and flavorful — captures the vibrant spirit of Mumbai." },
      { name: "Gulkand Chai", price: null, desc: "Floral rose-infused gulkand meets the richness of milk chai for pure indulgence." },
      { name: "Saffroni Swayed Chai", price: null, desc: "Aromatic saffron meets a perfect blend of tea for opulent, royal indulgence." },
    ],
  },
  {
    title: "Black Tea / Chai",
    description: "Bold, pure black teas brewed to perfection — no milk, just raw flavour.",
    image: "/kattan chai.png",
    items: [
      { name: "Kattan Chai", price: null, desc: "A dark, intense brew enjoyed without milk — bold and pure." },
      { name: "Lemon Chia Chai", price: null, desc: "Zesty tangy lemon with chia seeds in a revitalizing, refreshing brew." },
      { name: "Lemon Ginger Chai", price: null, desc: "Vibrant lemon and spicy ginger — energizing and aromatic in every sip." },
    ],
  },
  {
    title: "Coffee",
    description: "Freshly brewed coffee crafted to perfection.",
    image: "/coffee.png",
    items: [
      { name: "Filter Coffee", price: null, desc: "Traditional Chennai Filter Coffee — rich, aromatic, authentic." },
      { name: "Black Coffee", price: null, desc: "Pure, robust flavour crafted to perfection for a bold experience." },
      { name: "Chukku Kaapi with Milk", price: null, desc: "Freshly brewed coffee and warming spices for a comforting revitalising sip." },
      { name: "Chocolate Coffee", price: null, desc: "Rich coffee meets decadent chocolate for a creamy, delightful treat." },
    ],
  },
  {
    title: "Cold Drinks",
    description: "Refreshing cold beverages to cool you down.",
    image: "/cold_drinks.png",
    items: [
      { name: "Cold Badam Milk", price: null, desc: "Chilled, creamy almond goodness with subtle sweetness — perfect cool-down." },
      { name: "Cold Rose Milk", price: null, desc: "Refreshing creamy milk and fragrant rose essence for a floral delight." },
      { name: "Cold Coffee", price: null, desc: "Smooth, chilled brew perfectly blended for a refreshing experience." },
    ],
  },
  {
    title: "Hot Drinks",
    description: "Cozy up with our soothing hot beverages.",
    image: "/hot_drinks.png",
    items: [
      { name: "Poondu Milk Hot", price: null, desc: "Creamy milk and savory garlic for a soothing, healthy and unique warm drink." },
      { name: "Hot Chocolate", price: null, desc: "Velvety chocolate and warm milk — the ultimate cozy treat." },
      { name: "Hot Milo", price: null, desc: "Warm, malty Milo for a comforting and familiar hot beverage." },
    ],
  },
  {
    title: "Buns & Pastries",
    description: "Freshly made buns and pastries to complement your drink.",
    image: "/nutella buns.png",
    items: [
      { name: "Bun Butter Jam", price: null, desc: "Generously spread with creamy butter and sweet, luscious jam — timeless comfort." },
      { name: "Bun Nutella", price: null, desc: "Soft bun with creamy Nutella and rich butter — heavenly indulgence." },
      { name: "Malai Bun", price: null, desc: "Soft, fluffy bun filled with rich, smooth malai for a divine treat." },
    ],
  },
  {
    title: "Savoury Snacks",
    description: "Crispy, flavourful snacks made to satisfy your cravings.",
    image: "/pastries.png",
    items: [
      { name: "Samosa (4 pcs)", price: null, desc: "Crispy pastry stuffed with spiced, savory potatoes — a beloved classic." },
      { name: "Veg Puff", price: null, desc: "Flaky pastry filled with a savory blend of fresh vegetables and aromatic spices." },
      { name: "Channa Puff", price: null, desc: "Flaky pastry filled with flavorful, spiced channa — satisfying and savory." },
    ],
  },
  {
    title: "Maggi",
    description: "Comforting noodles made your way — a classic favourite.",
    image: "/classic maggi.png",
    items: [
      { name: "Classic Maggi", price: null, desc: "Comforting instant noodles with rich, savory seasoning for a quick satisfying meal." },
      { name: "Chilli Cheese Maggi", price: null, desc: "Fiery noodles topped with melted cheese — bold, spicy comfort food." },
    ],
  },
  {
    title: "Biscuits & Rusks",
    description: "Crunchy biscuits and rusks, the perfect pairing for chai or coffee.",
    image: "/Fine rusk.JPG",
    items: [
      { name: "Butter Cookies (6 nos)", price: null, desc: "Famous crispy-sweet biscuits — the perfect chai companion." },
      { name: "Chocolate Biscuits (6 nos)", price: null, desc: "Crispy chocolate biscuits — rich chocolatey flavour in every bite." },
      { name: "Walnut Cake (6 nos)", price: null, desc: "Golden, light and airy rusk — the ideal companion for chai or coffee." },
      { name: "Tea Cake", price: null, desc: "Moist, tender cake with rich buttery flavour — perfect with chai." },
    ],
  },
];

const scribblePath =
  "M 50 30 C 18 120, 82 90, 62 170 S 20 260, 42 320 S 80 410, 56 500 S 24 600, 46 690 S 82 780, 58 870 S 26 960, 48 1040 S 78 1120, 52 1200";

const createCategoryId = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function MenuPage() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: menuRef,
    offset: ["start 0.15", "end 0.9"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const beanOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const categoryNav = menuCategories.map((category) => ({
    title: category.title,
    href: `#${createCategoryId(category.title)}`,
  }));

  return (
    <div className="relative min-h-screen font-sans text-stone-900 selection:bg-amber-700 selection:text-white">
      <BackgroundVideo />

      <div ref={menuRef} className="relative">
        <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
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
        </div>

        <CoffeeBeansOverlay beanOpacity={beanOpacity} />
        <MenuHero />
        <MenuQuickNav items={categoryNav} />

        <section className="relative px-6 pb-28 z-20">
          <div className="max-w-7xl mx-auto">
            {menuCategories.map((category) => (
              <MenuCategorySection
                key={category.title}
                category={category}
                sectionId={createCategoryId(category.title)}
              />
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
