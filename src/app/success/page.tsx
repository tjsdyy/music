import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-aurora">支付成功</h1>
      <p className="mt-4 text-white/70">你的订阅已生效，欢迎进入 NovaForge AI 的专业创作模式。</p>
      <Link href="/" className="mt-6 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black">
        返回首页
      </Link>
    </div>
  );
}
