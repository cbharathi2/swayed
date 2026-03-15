"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import BackgroundVideo from "./components/BackgroundVideo";
import { Clock, Instagram, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";

const processSteps = [
  {
    tag: "From Farm to Flavor",
    title: "Handpicked Coffee Cherries",
    desc: "Our journey begins on sunlit farms where ripe coffee cherries are carefully handpicked at the peak of sweetness. Only the finest cherries are selected—because every unforgettable cup starts with exceptional beans."
  },
  {
    tag: "Purity in Every Bean",
    title: "Washed & Sun-Dried",
    desc: "Freshly harvested beans are gently washed in pure water and slowly sun-dried. This natural process preserves the bean’s true character, creating a smooth, balanced flavor that carries the story of its origin."
  },
  {
    tag: "The Art of Roasting",
    title: "Small-Batch Roasted",
    desc: "In our roastery, every batch is roasted with precision and passion. The heat awakens rich notes of cocoa, caramel, and toasted nuts—aromas that promise warmth in every sip."
  },
  {
    tag: "Brew-Ready Perfection",
    title: "Freshly Ground",
    desc: "Moments before brewing, our beans are ground to the perfect texture. The result is a velvety powder that releases bold flavor, deep aroma, and the comforting soul of a truly perfect coffee."
  },
];

const quoteText =
  "Coffee is the quiet ritual that turns sleepy mornings into focused moments and small breaks into warm memories.";
const quoteWords = quoteText.split(" ");

const cardPositions = [
  "ml-0 mr-auto md:ml-0 md:mr-auto",           // 1st card: left most
  "ml-auto mr-0 md:ml-auto md:mr-0",           // 2nd card: right most
  "ml-[6%] mr-auto md:ml-[12%] md:mr-auto",    // 3rd card: left center
  "ml-auto mr-[6%] md:ml-auto md:mr-[12%]",    // 4th card: right center
];

function ProcessStickyCard({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.92", "end 0.08"],
  });

  const y = useTransform(scrollYProgress, [0, 0.25, 0.78, 1], [180, 0, -120, -240]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.84, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.82, 1], [0.9, 1, 1, 0.94]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [index % 2 === 0 ? -6 : 5, index % 2 === 0 ? -2 : 2, index % 2 === 0 ? 1 : -1, index % 2 === 0 ? 5 : -4]
  );

  return (
    <div ref={cardRef} className="relative h-[72vh] min-h-[430px]">
      <motion.article
        style={{ y, opacity, scale, rotate }}
        className={`sticky top-20 w-[92%] sm:w-[88%] md:w-full max-w-xl rounded-[1.75rem] border border-amber-700/45 bg-[#1c0d05]/88 backdrop-blur-md p-8 md:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.65)] ${cardPositions[index]}`}
      >
        <div className="pointer-events-none absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 rotate-[-2deg] rounded-md border border-amber-700/30 bg-amber-950/50 shadow-sm" />
        <div className="pointer-events-none absolute right-8 top-9 h-16 w-16 rounded-full border-2 border-amber-500/25" />
        <div className="pointer-events-none absolute right-10 top-11 h-12 w-12 rounded-full border border-amber-500/15" />
        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(180,100,20,0.18)_0%,rgba(0,0,0,0)_40%)]" />

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.32em] text-amber-400/90">{step.tag}</p>
          <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-amber-100 md:text-4xl">
            {step.title}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-stone-300/90 md:text-lg">{step.desc}</p>
          <p className="mt-8 text-[11px] uppercase tracking-[0.34em] text-stone-500/80">Step {index + 1} / {processSteps.length}</p>
        </div>
      </motion.article>
    </div>
  );
}

function QuoteSection({ sectionRef }: { sectionRef: RefObject<HTMLDivElement | null> }) {
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
  const signatureSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: signatureProgress } = useScroll({
    target: signatureSectionRef,
    offset: ["start 1", "start 0.45"],
  });
  const videoOpacity = useTransform(signatureProgress, [0, 1], [1, 0.15]);
  const imageOpacity = useTransform(signatureProgress, [0, 1], [0, 1]);

  return (
    <div className="relative font-sans text-stone-900 selection:bg-amber-700 selection:text-white">
      <BackgroundVideo
        parallax={false}
        className="z-[-3]"
        overlayClassName="bg-black/15"
        style={{ opacity: videoOpacity }}
      />
      <motion.div className="fixed inset-0 z-[-2] w-full h-full overflow-hidden" style={{ opacity: imageOpacity }}>
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
      <div className="pointer-events-none fixed inset-0 z-[-1] bg-black/20" />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6 drop-shadow-lg">
            Breakfast Cafe &amp; <br className="hidden md:block" /> Freshly Brewed
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
            Start your day with freshly brewed coffee, homemade pastries, and a warm cup of milk chai at swayedovercoffee.
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
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            {processSteps.map((step, idx) => (
              <ProcessStickyCard key={step.title} step={step} index={idx} />
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
        <section ref={signatureSectionRef} className="relative w-full px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ type: "spring", bounce: 0.3, duration: 1 }}
            className="max-w-2xl py-14"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] font-bold text-white leading-tight">
              One sip, and you'll feel it. At Swayed Over Coffee, every cup tells a story.
            </h2>
          </motion.div>
        </section>

        {/* Updates Section */}
        <section className="relative w-full">
          <div className="relative w-full py-16 md:py-24">
            {/* <div className="absolute inset-0 animate-gradient opacity-80" />
            <div className="absolute inset-0 bg-black/55" /> */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
                <div className="relative w-full h-72 md:h-96 rounded-[2rem] overflow-hidden border border-white/10">
                  <Image
                    src="/hot_drinks.png"
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
            {/* <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-amber-900/40" /> */}
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
                      href="https://wa.me/9884630841"
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
                      <p className="text-stone-300">9884630841 / swayedovercoffee@gmail.com</p>
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
    </div>
  );
}
