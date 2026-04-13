# NovaForge AI (Next.js + Tailwind + Stripe)

一个带完整基础功能的 AI 工具站模板，包含：

- 首页（品牌首屏 + 工具模块）
- 灵感页（创意任务列表）
- 价格页（套餐展示 + 订阅按钮）
- Stripe 支付（Checkout Session API + 成功/取消回跳）

## 1) 安装依赖

```bash
npm install
```

## 2) 配置环境变量

复制 `.env.example` 为 `.env.local` 并填写 Stripe 配置：

```bash
cp .env.example .env.local
```

## 3) 运行项目

```bash
npm run dev
```

打开 `http://localhost:3000`

## 4) Stripe 配置说明

在 Stripe Dashboard 创建产品和价格后，把 price id 写入：

- `STRIPE_PRICE_STARTER_MONTHLY`
- `STRIPE_PRICE_PRO_MONTHLY`
- `STRIPE_PRICE_PRO_YEARLY`

支付回跳地址使用：

- Success: `/success`
- Cancel: `/cancel`
