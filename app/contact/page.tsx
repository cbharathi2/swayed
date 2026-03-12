"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import BackgroundVideo from "../components/BackgroundVideo";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="relative font-sans text-stone-900 selection:bg-amber-700 selection:text-white">
      <BackgroundVideo />
      <Navbar />

      <section className="relative pt-36 pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/60 backdrop-blur-2xl text-stone-100 p-10 md:p-14 border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row gap-12"
        >
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-6 text-white">
              Come grab a cup
            </h1>
            <p className="text-stone-300 mb-8 max-w-md text-lg">
              Have a comment or a question? Ready to place your order for delivery or pickup? Send us a
              message and we will get back to you soon.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-amber-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-white">Visit Us</h2>
                  <p className="text-stone-400">113, PH Road, Purasaiwakkam, Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-amber-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-white">Call or WhatsApp</h2>
                  <p className="text-stone-400">9003019030</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-amber-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-white">Email Us</h2>
                  <p className="text-stone-400">swayedovercoffee@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-amber-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-white">Hours</h2>
                  <p className="text-stone-400">09:00 am - 05:00 pm (Open today)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-1">Email / Phone</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Your contact details"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="What is on your mind?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      <footer className="bg-black/80 backdrop-blur-md py-8 text-center text-stone-500 border-t border-white/10">
        <p>Copyright (c) 2026 swayedovercoffee - All Rights Reserved.</p>
      </footer>
    </div>
  );
}
