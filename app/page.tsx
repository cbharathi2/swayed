"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import { Clock, Instagram, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";

const processSteps = [
  {
    tag: "Step 01",
    title: "Harvest and Sorting",
    desc: "Ripe coffee cherries are handpicked, then carefully sorted to keep only the sweetest, most aromatic beans."
  },
  {
    tag: "Step 02",
    title: "Wash and Dry",
    desc: "The beans are washed clean and slow-dried to lock in a balanced, smooth flavor."
  },
  {
    tag: "Step 03",
    title: "Roast to Aroma",
    desc: "We roast in small batches to bring out notes of cocoa, caramel, and toasted nuts."
  },
  {
    tag: "Step 04",
    title: "Grind to Powder",
    desc: "A precise grind size creates a powder that brews rich, bold, and consistent every time."
  },
];

const quoteText =
  "Coffee is the quiet ritual that turns sleepy mornings into focused moments and small breaks into warm memories.";
const quoteWords = quoteText.split(" ");

function QuoteSection({ sectionRef }: { sectionRef: RefObject<HTMLDivElement> }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.2"],
  });
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setActiveWord(quoteWords.length - 1);
    }
  }, [prefersReducedMotion]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (prefersReducedMotion) return;
    const nextIndex = Math.min(
      quoteWords.length - 1,
      Math.max(0, Math.floor(latest * quoteWords.length))
    );
    setActiveWord((prev) => (prev === nextIndex ? prev : nextIndex));
  });

  return (
    <section ref={sectionRef} className="px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", bounce: 0.3, duration: 1 }}
        className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-6">Coffee Quote</p>
            <div className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-[family-name:var(--font-playfair)]">
              {quoteWords.map((word, idx) => (
                <span
                  key={`${word}-${idx}`}
                  className={`transition-colors duration-300 ${
                    idx <= activeWord ? "text-amber-200" : "text-stone-500"
                  }`}
                >
                  {word}{" "}
                </span>
              ))}
            </div>
            <p className="text-stone-400 mt-6 text-sm">
              Scroll to highlight each word. Scroll up to soften them back.
            </p>
          </div>
          <div className="relative w-full h-72 md:h-96 rounded-[2rem] overflow-hidden border border-white/10">
            <Image
              src="/coffee.png"
              alt="Coffee beans and powder"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-amber-500/10" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  const quoteSectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: quoteProgress } = useScroll({
    target: quoteSectionRef,
    offset: ["end 0.9", "end 0.1"],
  });

  const videoOpacity = useTransform(quoteProgress, [0, 0.7, 1], [1, 1, 0.3]);
  const imageOpacity = useTransform(quoteProgress, [0.2, 0.9], [0, 1]);

  return (
    <div className="relative font-sans text-stone-900 selection:bg-amber-700 selection:text-white">
      <BackgroundVideo
        parallax={false}
        className="z-[-2]"
        style={{ opacity: videoOpacity }}
      />
      <motion.div
        className="fixed inset-0 z-[-1] w-full h-full overflow-hidden"
        style={{ opacity: imageOpacity }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/chai.png"
            alt="Chai background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-amber-500/10" />
        </div>
      </motion.div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6 drop-shadow-lg">
            Freshly Brewed Coffee &amp; <br className="hidden md:block" /> Homemade Pastries
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
            Start your day with a delicious breakfast at swayedovercoffee, where you can enjoy freshly
            brewed coffee alongside our homemade pastries and a warm cup of milk chai.
          </p>
        </motion.div>
      </section>

      {/* Main Content wrapper */}
      <div className="relative z-10 overflow-hidden pt-24 pb-24 space-y-28">
        {/* Process Cards */}
        <section className="px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">Coffee Powder Process</p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white">
              From Bean to Powder
            </h2>
            <p className="text-stone-300 mt-4 max-w-2xl mx-auto">
              Scroll down to watch each step fly in and reveal the craft behind our signature brews.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 120, x: idx % 2 === 0 ? -40 : 40, rotate: idx % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 70, damping: 16, delay: idx * 0.1 }}
                className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl hover:border-amber-500/40 transition-colors"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-amber-400">{step.tag}</p>
                <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-white mt-4">
                  {step.title}
                </h3>
                <p className="text-stone-300 mt-4 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", bounce: 0.3, duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6">
                A cafe built on slow mornings and bold aromas
              </h2>
              <p className="text-stone-300 leading-relaxed text-lg">
                At swayedovercoffee, every cup is a craft. We source beans that speak of their origin,
                roast them to amplify their character, and grind to a powder that brews with depth. Our
                pastries are made fresh daily so each bite feels like home.
              </p>
              <p className="text-stone-400 leading-relaxed text-base mt-5">
                Whether you are stopping by for a quick espresso or lingering over chai with friends,
                we want the experience to feel unhurried, warm, and memorable.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/10 text-stone-200 text-sm">Small-batch roasts</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-stone-200 text-sm">Homemade pastries</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-stone-200 text-sm">Chai favorites</span>
              </div>
            </div>
            <div className="relative w-full h-72 md:h-96 rounded-[2rem] overflow-hidden border border-white/10">
              <Image
                src="/pastries.png"
                alt="Homemade pastries"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-amber-500/10" />
            </div>
          </motion.div>
        </section>

        {/* Quote Section */}
        <QuoteSection sectionRef={quoteSectionRef} />

        {/* Signature Sip Quote */}
        <section className="relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ type: "spring", bounce: 0.3, duration: 1 }}
            className="relative w-full min-h-[22rem] md:min-h-[26rem] flex items-center"
          >
            <Image
              src="/coffee.png"
              alt="Signature coffee background"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
            <div className="relative z-10 w-full px-6 md:px-16 py-14">
              <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-4">Signature Quote</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] font-bold text-white leading-tight">
                  One sip, and you'll feel it. At Swayed Over Coffee, every cup tells a story.
                </h2>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Updates Section */}
        <section className="relative w-full">
          <div className="relative w-full py-16 md:py-24">
            <div className="absolute inset-0 animate-gradient opacity-80" />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative z-10 max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
                <div className="relative w-full h-72 md:h-96 rounded-[2rem] overflow-hidden border border-white/10">
                  <Image
                    src="/coffee.png"
                    alt="Fresh brews"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-amber-500/10" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-4">Stay Updated</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6">
                    Fresh brews, cafe updates, Straight to your inbox.
                  </h2>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="sr-only" htmlFor="full-name">Full name</label>
                      <input
                        id="full-name"
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="email-address">Email address</label>
                      <input
                        id="email-address"
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors"
                    >
                      Join the list
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative w-full">
          <div className="relative w-full py-16 md:py-24">
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-amber-900/40" />
            <div className="relative z-10 max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-4">SWAYED OVER COFFEE</p>
                  <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] font-bold text-white mb-4">
                    SWAYED OVER COFFEE
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-semibold text-amber-200 mb-6">Come Grab a Cup!</h3>
                  <p className="text-stone-200 leading-relaxed text-lg">
                    Have a comment or a question about our freshly brewed coffee or homemade pastries?
                    Ready to place your order for delivery or pickup? Use the form above or give us a call,
                    and we can get your order ready for you. Whether you're in the mood for a delicious
                    pastry or a warm milk chai, send us a message, and we will get back to you as soon as
                    possible.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-white/80 text-sm uppercase tracking-[0.2em]">
                    <Link href="/menu" className="hover:text-amber-300 transition-colors">
                      Menu
                    </Link>
                    <Link href="/about" className="hover:text-amber-300 transition-colors">
                      About
                    </Link>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://youtube.com/@swayedovercoffee"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      <Youtube className="w-4 h-4 text-amber-300" />
                      swayedovercoffee
                    </a>
                    <a
                      href="https://instagram.com/swayedovercoffee"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-amber-300" />
                      swayedovercoffee
                    </a>
                    <a
                      href="https://wa.me/9003019030"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-amber-300" />
                      swayedovercoffee
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-amber-500">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Address</h4>
                      <p className="text-stone-300">
                        swayedovercoffee
                        <br />
                        113, PH Road, Purasaiwakkam, Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-amber-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Phone / Email</h4>
                      <p className="text-stone-300">9003019030 / swayedovercoffee@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-amber-500">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Hours</h4>
                      <p className="text-stone-300">Open today</p>
                      <p className="text-stone-400">09:00 am - 05:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md py-8 text-center text-stone-500 border-t border-white/10 mt-12">
        <p>Copyright (c) 2026 swayedovercoffee - All Rights Reserved.</p>
      </footer>
    </div>
  );
}
