import Link from "next/link";
import BackgroundVideo from "../components/BackgroundVideo";

const whyChooseUs = [
  {
    title: "Proven Store Format",
    description:
      "A tested cafe format with strong repeat business, efficient operations, and neighborhood loyalty.",
  },
  {
    title: "Strong Brand Pull",
    description:
      "Swayed Over Coffee combines quality brews, comfort food, and a warm ambience that customers trust.",
  },
  {
    title: "Launch-to-Scale Support",
    description:
      "From site planning to opening week campaigns, our team helps you build momentum from day one.",
  },
];

const franchiseBenefits = [
  "Attractive ROI potential with a high-frequency product category",
  "Comprehensive training for founders and staff",
  "Marketing toolkit for online and local promotion",
  "Vendor and sourcing guidance for reliable quality",
  "Standardized SOPs for easier daily management",
  "Fast and practical setup workflow",
];

const supportItems = [
  "Pre-opening setup support including layout guidance and launch checklist",
  "Barista and operations training with practical SOP handbooks",
  "Branding and local-area marketing support for first 90 days",
  "Ongoing business reviews, menu optimization, and seasonal campaigns",
];

const partnerTraits = [
  "Entrepreneurs looking to build a scalable food and beverage business",
  "Investors seeking a trusted, lifestyle-oriented brand",
  "Hands-on operators passionate about customer experience",
  "Preferred qualities: execution focus, local market knowledge, and growth mindset",
];

const processSteps = [
  {
    step: "1",
    title: "Submit Enquiry",
    detail: "Share your contact details and preferred city.",
  },
  {
    step: "2",
    title: "Initial Discussion",
    detail: "Our team discusses business fit, investment comfort, and timelines.",
  },
  {
    step: "3",
    title: "Location Evaluation",
    detail: "Shortlist and assess site potential with our guidance.",
  },
  {
    step: "4",
    title: "Commercial Alignment",
    detail: "Finalize franchise terms, fees, and rollout plan.",
  },
  {
    step: "5",
    title: "Training and Setup",
    detail: "Complete team training, procurement, and pre-launch readiness.",
  },
  {
    step: "6",
    title: "Launch",
    detail: "Open your cafe with launch marketing and operational support.",
  },
];

const testimonials = [
  {
    quote:
      "The launch support gave us confidence from day one. We reached operational stability much faster than expected.",
    author: "Franchise Partner, Chennai",
  },
  {
    quote:
      "The systems are practical and easy to follow. The brand already had strong recall in our catchment.",
    author: "Franchise Partner, Coimbatore",
  },
];

const faqs = [
  {
    question: "How much investment is required?",
    answer:
      "Estimated investment typically starts around INR 18 lakhs and can go up to INR 40 lakhs depending on city, store size, and interiors.",
  },
  {
    question: "Do I need prior cafe experience?",
    answer:
      "Prior experience is helpful but not mandatory. We provide structured training and playbooks for operations and service.",
  },
  {
    question: "What support do I receive after launch?",
    answer:
      "You receive ongoing operations guidance, marketing support, quality checks, and periodic business reviews.",
  },
  {
    question: "How long does setup usually take?",
    answer:
      "Depending on location readiness, the setup timeline is usually between 8 and 14 weeks.",
  },
];

export default function GrowWithUsPage() {
  return (
    <div className="relative overflow-hidden font-sans text-stone-100 selection:bg-amber-700 selection:text-white">
      <BackgroundVideo />

      <section className="relative px-6 pb-20 pt-36">
        <div className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-32 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-black/55 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-400">Franchise Opportunities</p>
          <h1 className="max-w-3xl font-[family-name:var(--font-playfair)] text-4xl font-bold text-white md:text-6xl">
            Own a Swayed Over Coffee Franchise
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
            Grow with a cafe brand built on quality, consistency, and customer love. Partner with us to launch a modern coffee destination in your city.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#franchise-form"
              className="rounded-full bg-amber-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-500"
            >
              Apply for Franchise
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-stone-200 transition-colors hover:border-amber-400/60 hover:text-white"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24">
        <section className="rounded-[2rem] border border-white/10 bg-black/45 p-8 backdrop-blur-xl md:p-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">About the Brand</h2>
          <p className="mt-4 leading-relaxed text-stone-200">
            Swayed Over Coffee started as a neighborhood cafe that prioritized fresh brewing, warm hospitality, and a memorable dine-in experience. Our mission is simple: serve consistently great beverages and food while creating a space people return to every day.
          </p>
          <p className="mt-4 leading-relaxed text-stone-300">
            We have built strong local trust through quality-focused sourcing, curated menus, and service standards that scale. What makes us unique is our balanced blend of artisanal quality and operational simplicity.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {whyChooseUs.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.3)]"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-stone-300">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-black/45 p-8 backdrop-blur-xl md:p-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">Franchise Benefits</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {franchiseBenefits.map((benefit) => (
              <p
                key={benefit}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-stone-200"
              >
                {benefit}
              </p>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-[1.5rem] border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
            <h3 className="text-xs uppercase tracking-[0.25em] text-amber-300">Investment Range</h3>
            <p className="mt-3 text-lg font-semibold text-white">INR 18 Lakhs to INR 40 Lakhs</p>
          </article>
          <article className="rounded-[1.5rem] border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
            <h3 className="text-xs uppercase tracking-[0.25em] text-amber-300">Space Requirement</h3>
            <p className="mt-3 text-lg font-semibold text-white">Approx. 400 to 1200 sq. ft.</p>
          </article>
          <article className="rounded-[1.5rem] border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
            <h3 className="text-xs uppercase tracking-[0.25em] text-amber-300">Franchise Fees</h3>
            <p className="mt-3 text-lg font-semibold text-white">Contact us for details</p>
          </article>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-black/45 p-8 backdrop-blur-xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white">Support and Training</h2>
            <div className="mt-5 space-y-3">
              {supportItems.map((item) => (
                <p key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-stone-200">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-black/45 p-8 backdrop-blur-xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white">Ideal Franchise Partner</h2>
            <div className="mt-5 space-y-3">
              {partnerTraits.map((trait) => (
                <p key={trait} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-stone-200">
                  {trait}
                </p>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-black/45 p-8 backdrop-blur-xl md:p-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">Franchise Process</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Step {step.step}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-stone-300">{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-black/45 p-8 backdrop-blur-xl md:p-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">Success Stories</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote
                key={item.author}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6"
              >
                <p className="text-lg leading-relaxed text-stone-200">\"{item.quote}\"</p>
                <footer className="mt-4 text-sm uppercase tracking-[0.16em] text-amber-300">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-black/45 p-8 backdrop-blur-xl md:p-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-3 text-stone-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="franchise-form"
          className="rounded-[2rem] border border-amber-500/30 bg-gradient-to-br from-amber-900/30 to-black/55 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Start Your Franchise Journey</p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">
            Share your details and our franchise team will connect with you.
          </h2>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="text-sm text-stone-200">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition-colors focus:border-amber-500"
              />
            </label>

            <label className="text-sm text-stone-200">
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition-colors focus:border-amber-500"
              />
            </label>

            <label className="text-sm text-stone-200">
              Email
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition-colors focus:border-amber-500"
              />
            </label>

            <label className="text-sm text-stone-200">
              Location
              <input
                type="text"
                name="location"
                placeholder="Preferred city or area"
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition-colors focus:border-amber-500"
              />
            </label>

            <label className="text-sm text-stone-200 md:col-span-2">
              Investment Range
              <select
                name="investmentRange"
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition-colors focus:border-amber-500"
              >
                <option value="" disabled>
                  Select your range
                </option>
                <option value="18-25">INR 18L - 25L</option>
                <option value="25-32">INR 25L - 32L</option>
                <option value="32-40">INR 32L - 40L</option>
                <option value="40+">INR 40L+</option>
              </select>
            </label>

            <button
              type="submit"
              className="md:col-span-2 mt-2 rounded-xl bg-amber-600 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-amber-500"
            >
              Start Your Franchise Journey
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
