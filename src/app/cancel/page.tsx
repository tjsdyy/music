import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-candy">支付已取消</h1>
      <p className="mt-4 text-white/70">你可以稍后继续选择方案，不会扣费。</p>
      <Link href="/pricing" className="mt-6 rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white">
        回到价格页
      </Link>
    </div>
  );
}
