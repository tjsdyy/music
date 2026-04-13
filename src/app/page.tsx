import Link from "next/link";

const creations = [
  { title: "Own Damn Hero", meta: "pop, airy synth stabs", ver: "V5", duration: "3:09" },
  { title: "Backseat Polaroids", meta: "folk, modern country-pop", ver: "V5", duration: "3:19" },
  { title: "Jill Is Calling", meta: "rap, warm melodic hip hop", ver: "V5", duration: "3:23" },
];

const solutions = [
  { role: "For YouTubers", challenge: "版权风险高，BGM 难复用。", solution: "一键生成可商用原创配乐，避免版权纠纷。" },
  { role: "For Podcasters", challenge: "片头片尾制作成本高。", solution: "按栏目风格快速生成统一音频品牌资产。" },
  { role: "For Advertisers", challenge: "广告配乐授权复杂且昂贵。", solution: "生成可 A/B 测试的多版本广告音乐。" },
];

const plans = [
  { name: "Free", price: "$0", sub: "6 Credits / First Signin", featured: false },
  { name: "Basic", price: "$8.33/mo", sub: "$100/year billed yearly", featured: true },
  { name: "Standard", price: "$20.99/mo", sub: "$251.92/year billed yearly", featured: false },
  { name: "Professional", price: "$49.99/mo", sub: "$599.88/year billed yearly", featured: false },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-12">
      <section className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <div className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-aurora/80">Transform text to song with AI</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">Best AI Music & Song Generator</h1>
          <p className="mt-4 max-w-xl text-white/70">Turn any text to song or lyrics to music in seconds, not days.</p>
          <div className="mt-5 flex gap-3">
            <Link href="/pricing" className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black">
              Get Started
            </Link>
            <Link href="/inspiration" className="rounded-xl border border-white/25 px-5 py-2 text-sm">
              Latest Creations
            </Link>
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

      <section className="glass rounded-3xl p-8">
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
        <h2 className="font-display text-3xl">Latest Creations</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {creations.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs text-white/60">{item.ver} · {item.duration}</p>
              <h3 className="mt-2 font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {["Universal Access", "Instant Creation", "100% Royalty-Free"].map((item) => (
          <article key={item} className="glass rounded-2xl p-5">
            <h3 className="font-display text-xl">{item}</h3>
            <p className="mt-2 text-sm text-white/70">Studio-quality output with no music background required.</p>
          </article>
        ))}
      </section>

      <section className="glass rounded-3xl p-8">
        <h2 className="font-display text-3xl">Pricing Plans</h2>
        <div className="mt-3 inline-flex rounded-full border border-white/20 p-1 text-sm">
          <button className="rounded-full bg-white px-3 py-1 text-black">Monthly</button>
          <button className="rounded-full px-3 py-1 text-white/70">Yearly 30% OFF</button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.name} className={`rounded-2xl border p-4 ${plan.featured ? "border-aurora bg-white/10" : "border-white/15 bg-white/5"}`}>
              {plan.featured ? <p className="text-xs text-candy">Most Popular</p> : null}
              <h3 className="mt-2 font-display text-xl">{plan.name}</h3>
              <p className="mt-2 text-2xl font-bold">{plan.price}</p>
              <p className="mt-1 text-xs text-white/60">{plan.sub}</p>
              <button className="mt-4 w-full rounded-xl border border-white/20 px-3 py-2 text-sm">Choose Plan</button>
            </article>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-8">
        <h2 className="font-display text-3xl">Real-World Solutions</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {solutions.map((item) => (
            <article key={item.role} className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <h3 className="font-display text-xl">{item.role}</h3>
              <p className="mt-2 text-sm text-white/70">Challenge: {item.challenge}</p>
              <p className="mt-1 text-sm text-white/80">Solution: {item.solution}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-8">
        <h2 className="font-display text-3xl">FAQ</h2>
        <div className="mt-4 space-y-3">
          {["What is AI Song Generator?", "Can I use songs commercially?", "How long does generation take?", "Can I create instrumentals only?"].map((q) => (
            <details key={q} className="rounded-xl border border-white/15 bg-white/5 p-4">
              <summary className="cursor-pointer text-sm font-medium">{q}</summary>
              <p className="mt-2 text-sm text-white/70">Yes. This section is a high-fidelity FAQ placeholder for Phase 1 replication.</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
