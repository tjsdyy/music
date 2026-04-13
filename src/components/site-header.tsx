import Link from "next/link";

const links = [
  { href: "/", label: "首页" },
  { href: "/inspiration", label: "灵感" },
  { href: "/pricing", label: "价格" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          NovaForge<span className="text-aurora">AI</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-white/80">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link
            href="/pricing"
            className="rounded-full border border-white/20 px-4 py-1.5 text-white transition hover:border-aurora/60 hover:text-aurora"
          >
            开始订阅
          </Link>
        </nav>
      </div>
    </header>
  );
}
