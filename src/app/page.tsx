import Link from "next/link";

const tools = [
  { name: "Script Pilot", tag: "文案", desc: "输入产品信息，自动输出投放文案与脚本。" },
  { name: "VisionSpark", tag: "图像", desc: "将文字想法变成风格统一的视觉素材。" },
  { name: "ClipForge", tag: "视频", desc: "自动生成口播短视频结构和分镜建议。" },
  { name: "Prompt Lab", tag: "效率", desc: "收藏并组合提示词，形成团队提示资产。" },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 shadow-glow md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(88,228,255,0.28),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(255,110,201,0.24),transparent_40%)]" />
        <div className="relative space-y-6">
          <p className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">AI 工具站 / 创意工作流平台</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            为创作者打造的
            <span className="bg-gradient-to-r from-aurora via-nebula to-candy bg-clip-text text-transparent"> 全链路 AI 工具站</span>
          </h1>
          <p className="max-w-2xl text-white/70">
            从灵感采集、内容生成到支付订阅，NovaForge AI 一次性帮你搭好增长工作台。视觉风格参考音乐创意站，突出潮流与沉浸感。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/pricing" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black">
              立即开通 Pro
            </Link>
            <Link href="/inspiration" className="rounded-xl border border-white/25 px-5 py-2.5 text-sm text-white/90">
              浏览灵感
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <article key={tool.name} className="glass rounded-2xl p-5">
            <p className="mb-2 text-xs uppercase tracking-widest text-aurora/90">{tool.tag}</p>
            <h2 className="font-display text-xl font-semibold">{tool.name}</h2>
            <p className="mt-2 text-sm text-white/70">{tool.desc}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
