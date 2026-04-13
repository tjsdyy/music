export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-white/60 md:flex-row">
        <p>© {new Date().getFullYear()} NovaForge AI. All rights reserved.</p>
        <p>Built with Next.js + Tailwind + Stripe</p>
      </div>
    </footer>
  );
}
