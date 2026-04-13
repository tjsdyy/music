import Link from "next/link";

const creations = [
  { title: "Own Damn Hero", meta: "pop, high-gloss pop banger, airy synth stabs", ver: "V5", duration: "3:09" },
  { title: "Backseat Polaroids", meta: "folk, modern country-pop, steady strum", ver: "V5", duration: "3:19" },
  { title: "banna", meta: "rajasthani type, rock", ver: "V5", duration: "4:00" },
  { title: "Jill Is Calling", meta: "rap, warm melodic hip hop, swung drums", ver: "V5", duration: "3:23" },
];

const valueProps = [
  "Universal Access",
  "Instant Creation",
  "100% Royalty-Free",
  "Studio Quality",
];

const toolkit = [
  "Text to Song",
  "Refine & Perfect",
  "Extend Seamlessly",
  "Reimagine Classics",
  "Transform Your Audio",
  "Vocal Isolation",
];

const useCases = [
  "For YouTubers",
  "For Podcasters",
  "For Filmmakers",
  "For Advertisers",
  "For Music Composers",
  "For Brands",
];

const testimonials = [
  { name: "Alex Thompson", role: "Video Content Creator" },
  { name: "Sarah Johnson", role: "Aspiring Songwriter" },
  { name: "Maria Rodriguez", role: "Language Teacher" },
  { name: "Emily Parker", role: "Social Media Influencer" },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10">
      <section className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <div className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-aurora/80">Transform text to song with AI</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">Best AI Music & Song Generator</h1>
          <p className="mt-4 max-w-xl text-white/70">Turn any text to song or lyrics to music in seconds, not days.</p>
          <div className="mt-5 flex gap-3">
            <Link href="/pricing" className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black">Create Music</Link>
            <span className="rounded-xl border border-white/25 px-5 py-2 text-sm">V1</span>
          </div>
        </div>
        <div className="glass rounded-3xl p-6">
          <p className="text-sm text-white/70">Create Music · Requires 5 credits</p>
          <textarea className="mt-4 h-36 w-full rounded-xl border border-white/15 bg-white/5 p-3 text-sm outline-none" placeholder="Text to song / lyrics to music (0/500)" />
          <div className="mt-3 flex gap-2 text-xs">
            <span className="rounded-full border border-white/20 px-2 py-1">Instrumental Mode</span>
            <span className="rounded-full border border-white/20 px-2 py-1">Public</span>
          </div>
          <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-aurora via-nebula to-candy px-4 py-2 text-sm font-semibold text-slate-950">Generate Music</button>
        </div>
      </section>

      <section className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl">Music Generation History</h2>
          <button className="rounded-lg border border-white/20 px-3 py-1 text-xs">Manage</button>
        </div>
        <p className="mt-3 text-sm text-white/60">Loading...</p>
      </section>

      <section className="glass rounded-3xl p-8">
        <p className="text-sm text-white/70">Simple 3-Step Process</p>
        <h2 className="font-display text-3xl">How to Create Music with 3 Steps</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {["Enter your lyrics", "Generate your music", "Listen & download"].map((step, index) => (
            <article key={step} className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-aurora">{index + 1}</p>
              <p className="mt-2 font-medium">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-8">
        <p className="text-sm text-white/70">Fresh From Our Community</p>
        <h2 className="font-display text-3xl">Latest Creations</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {creations.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs text-white/60">{item.ver} · {item.duration}</p>
              <h3 className="mt-2 font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.meta}</p>
              <p className="mt-2 text-xs text-white/50">— Trymusic AI</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {valueProps.map((item) => (
          <article key={item} className="glass rounded-2xl p-5">
            <h3 className="font-display text-xl">{item}</h3>
            <p className="mt-2 text-sm text-white/70">Turn lyrics to music with studio-quality results and commercial-safe ownership.</p>
          </article>
        ))}
      </section>

      <section className="glass rounded-3xl p-8">
        <p className="text-sm text-white/70">Complete Toolkit</p>
        <h2 className="font-display text-3xl">Your Complete AI Song Generator Suite</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {toolkit.map((item) => (
            <article key={item} className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <h3 className="font-display text-lg">{item}</h3>
              <p className="mt-2 text-sm text-white/70">A professional lyrics-to-music tool designed for creators at all levels.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-8">
        <p className="text-sm text-white/70">TryMusic.AI - All in One</p>
        <h2 className="font-display text-3xl">The All-in-One AI Song Generator</h2>
        <div className="mt-5 space-y-4 text-sm text-white/75">
          <p>Turn any idea into music from text, lyrics, or image prompts.</p>
          <p>Get studio-quality results in seconds with no mixing complexity.</p>
          <p>100% royalty-free tracks with full ownership for commercial usage.</p>
        </div>
      </section>

      <section className="glass rounded-3xl p-8">
        <h2 className="font-display text-3xl">Real-World Solutions</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {useCases.map((item) => (
            <article key={item} className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <h3 className="font-display text-xl">{item}</h3>
              <p className="mt-2 text-sm text-white/70">Challenge: licensing music is expensive and time-consuming.</p>
              <p className="mt-1 text-sm text-white/80">Solution: generate unlimited custom tracks in minutes and use them commercially.</p>
              <button className="mt-3 rounded-lg border border-white/25 px-3 py-1 text-xs">Try Text to Song Now</button>
            </article>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-8">
        <p className="text-sm text-white/70">Creator Stories</p>
        <h2 className="font-display text-3xl">What Users Say About our AI Song Generator</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm text-white/80">
                "This AI Song Generator transformed my workflow. I can turn text to song with no formal music training."
              </p>
              <p className="mt-3 text-sm font-medium">{item.name}</p>
              <p className="text-xs text-white/60">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-8">
        <h2 className="font-display text-3xl">Try Music AI Pricing Plans</h2>
        <p className="mt-2 text-sm text-white/70">Pick your plan to get started · Monthly / Yearly 30% OFF</p>
        <div className="mt-4 flex gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-xs text-black">Monthly</span>
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs">Yearly 30% OFF</span>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            { name: "Free", price: "$0", save: "", c1: "6 Credits / First Signin", c2: "Up to 2 songs" },
            { name: "Basic", price: "$8.33/month", save: "Save $80", c1: "4,800 Credits / year", c2: "Up to 1,920 songs" },
            { name: "Standard", price: "$20.99/month", save: "Save $108", c1: "15,000 Credits / year", c2: "Up to 6,000 songs" },
            { name: "Professional", price: "$49.99/month", save: "Save $240", c1: "50,000 Credits / year", c2: "Up to 20,000 songs" },
          ].map((plan, idx) => (
            <article key={plan.name} className={`rounded-2xl border p-4 ${idx === 1 ? "border-aurora bg-white/10" : "border-white/15 bg-white/5"}`}>
              {idx === 1 ? <p className="text-xs text-candy">Most Popular</p> : null}
              {plan.save ? <p className="text-xs text-aurora">{plan.save}</p> : null}
              <h3 className="mt-2 font-display text-xl">{plan.name}</h3>
              <p className="mt-2 text-2xl font-bold">{plan.price}</p>
              <ul className="mt-3 space-y-1 text-xs text-white/70">
                <li>{plan.c1}</li>
                <li>{plan.c2}</li>
                <li>V1-V5 models</li>
                <li>Commercial license</li>
              </ul>
              <Link href="/pricing" className="mt-4 block rounded-xl border border-white/20 px-3 py-2 text-center text-sm">Choose Plan</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-8">
        <h2 className="font-display text-3xl">FAQ</h2>
        <div className="mt-4 space-y-3">
          {[
            "What is AI Song Generator?",
            "Can AI Song Generator generate lyrics as well?",
            "How can I get instrumentals without vocals?",
            "Do I need musical knowledge to use this AI Song Generator?",
            "Can I use the generated music commercially?",
            "Can I create music in different languages?",
            "Is the AI Song Generator free?",
            "How long does it take to generate a song?",
          ].map((q) => (
            <details key={q} className="rounded-xl border border-white/15 bg-white/5 p-4">
              <summary className="cursor-pointer text-sm font-medium">{q}</summary>
              <p className="mt-2 text-sm text-white/70">Yes, this cloned FAQ block mirrors TryMusic content density for 1:1 structure alignment.</p>
            </details>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-8 text-center">
        <h2 className="font-display text-3xl">Ready to Turn Lyrics to Music?</h2>
        <p className="mt-3 text-sm text-white/70">Join millions of creators and start creating professional music now.</p>
        <button className="mt-5 rounded-xl bg-white px-6 py-2 text-sm font-semibold text-black">Get Started with our AI Song Generator</button>
      </section>
    </div>
  );
}
