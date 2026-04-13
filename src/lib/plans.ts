import type { Plan } from "@/types/pricing";

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    description: "先体验工具能力与灵感工作流",
    monthlyPrice: 0,
    features: ["每日 20 积分", "基础工具访问", "社区模板灵感库"],
    cta: "免费开始",
  },
  {
    id: "starter",
    name: "Starter",
    description: "适合个人创作者的高频使用方案",
    monthlyPrice: 9.9,
    features: ["每月 2000 积分", "高级模型调用", "一键复用热门提示词"],
    cta: "升级 Starter",
  },
  {
    id: "pro",
    name: "Pro",
    description: "团队级 AI 生产与投放工作台",
    monthlyPrice: 29.9,
    yearlyPrice: 249,
    features: ["每月 10000 积分", "团队空间与审批流", "优先客服与 SLA 支持"],
    cta: "升级 Pro",
    featured: true,
  },
];
