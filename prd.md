# PRD：TryMusic 首页完全复刻（文档先行版）

## 0. 目标与原则
- 目标：基于 `Next.js + Tailwind` 对 `https://trymusic.ai/` 进行首页**高保真复刻**（结构、文案层级、交互节奏、视觉密度）。
- 原则：先复刻再优化，先静态还原再接真实功能。
- 约束：当前阶段仅产出 PRD 与执行规范，不扩展新业务模块。

参考站点：[`trymusic.ai`](https://trymusic.ai/)

---

## 1. 复刻范围定义

### 1.1 In Scope（必须 1:1）
- 首页整页区块顺序与信息架构。
- 顶部导航、Hero 输入区、最新作品、特性说明、价格区、FAQ、底部 CTA 与 Footer。
- 价格区「Monthly / Yearly（含折扣标识）」切换形式与卡片布局。
- FAQ 列表式问答结构。
- 主要 CTA 分布位置与命名风格（如 Get Started / Try / Generate）。

### 1.2 Out of Scope（本阶段不做）
- 实际音频生成能力（模型推理）。
- 登录注册与用户中心。
- 社区真实动态流、音频播放真实进度。
- 多语言 SEO 页面批量生成。

### 1.3 可替换项（允许差异）
- 品牌名可保留现有项目名（NovaForge AI）或切换为临时品牌。
- 素材图、头像、示例音频可用占位资源，但字段结构必须一致。

---

## 2. 信息架构（首页区块顺序）

1. Header（Logo + 导航 + CTA）
2. Hero（主标题 + 副文案 + 生成器输入面板）
3. Music Generation History（历史列表入口/占位）
4. How to Create（3 步说明）
5. Latest Creations（社区最新作品卡片）
6. Why Choose（4 大卖点）
7. Complete Toolkit（能力总览）
8. All-in-One（3 个价值段落）
9. Real-World Solutions（行业场景解决方案）
10. Testimonials（用户评价）
11. Pricing Plans（价格方案 + 月/年切换）
12. FAQ（常见问题）
13. Bottom CTA（最终转化）
14. Footer（产品、资源、政策、联系方式）

---

## 3. 区块级详细需求（字段级）

## 3.1 Header
- 左：品牌 Logo + 品牌名。
- 中：锚点导航（How it works / Features / Pricing / FAQ）。
- 右：主 CTA（Get Started）。
- 滚动后 sticky，背景半透明 + blur。

## 3.2 Hero（核心复刻区）
- 文案层级：
  - 上方小标签（如 Transform text to song）
  - H1 主标题（Best AI Music & Song Generator）
  - 副文案（秒级生成、版权友好）
- 右侧生成器面板字段：
  - 模型版本切换（V1）
  - 模式切换（Text to song / lyrics to music）
  - 输入框（最大 500 字符计数）
  - 开关项（Instrumental、Public）
  - 主按钮（Generate Music）
  - 消耗提示（Requires X credits）

## 3.3 3-Step Process
- Step 1：输入描述/歌词。
- Step 2：点击生成。
- Step 3：试听与下载。
- 三卡片横排（移动端纵排）。

## 3.4 Latest Creations
- 至少 3-6 条作品卡。
- 每条包含：标题、风格描述、版本、时长、作者归属。
- 卡片支持 hover 提升（阴影/描边增强）。

## 3.5 Why Choose（4 卖点）
- Universal Access
- Instant Creation
- 100% Royalty-Free
- Studio Quality
- 每个卖点有图标 + 标题 + 一句话说明。

## 3.6 Complete Toolkit / All-in-One
- 分成多个段落式功能卡：
  - Text to Song
  - Refine & Perfect
  - Extend Seamlessly
  - Reimagine Classics
  - Transform Your Audio
  - Vocal Isolation
- 下方补 2-3 个价值段落，强调速度、质量、可商用。

## 3.7 Real-World Solutions
- 行业维度卡片（YouTubers / Podcasters / Filmmakers / Advertisers 等）。
- 每卡包含：
  - Challenge（痛点）
  - Solution（2 条解决方案）
  - CTA（Try Text to Song Now）

## 3.8 Testimonials
- 6-8 条用户评价。
- 字段：头像首字母、姓名、身份、评价内容。
- 网格布局，移动端单列。

## 3.9 Pricing
- 顶部：Monthly / Yearly 切换，Yearly 显示折扣文案（如 30% OFF）。
- 套餐：Free / Basic / Standard / Professional（4 档）。
- 每卡字段：
  - 套餐名
  - 月价、年价说明
  - 节省金额标签（Save $xx）
  - 权益列表（credits、模型版本、时长、授权）
  - CTA 按钮
- 默认高亮“Most Popular”卡。

## 3.10 FAQ
- 8-10 条问题。
- 手风琴展开/收起。
- 支持键盘可访问性（Enter/Space 打开）。

## 3.11 Footer
- 品牌简介。
- Product / Free Tools / Resources / About 分栏。
- 联系方式邮箱。
- 法务链接（Privacy、Terms、Refund）。

---

## 4. 交互与状态规范

## 4.1 通用交互
- 按钮：默认 / hover / active / disabled 四态。
- 卡片：hover 提升（位移 + 阴影 + 边框亮度）。
- 输入框：focus ring 明确，错误态红色提示。

## 4.2 表单状态（Hero）
- Idle：可输入。
- Loading：按钮显示 loading 文案，禁止重复提交。
- Success：跳转结果页或显示生成成功提示。
- Error：行内错误信息（配色与文案统一）。

## 4.3 Pricing 切换
- 切换 Monthly/Yearly 时，价格数字平滑变更。
- 年付时展示折扣徽章并刷新各卡年费文案。

## 4.4 FAQ
- 单开模式（同一时刻仅展开一个问题）。

---

## 5. 视觉还原标准（高保真）
- 页面宽度：内容容器 `max-w-6xl`（允许按视觉微调）。
- 圆角体系：按钮 `rounded-xl`，卡片 `rounded-2xl/3xl`。
- 阴影体系：常规卡片阴影 + 高亮卡片发光阴影。
- 背景：深色基底 + 渐变光斑 + 细颗粒/网格质感。
- 字体层级：
  - Hero H1（超大粗体）
  - Section Title（中大标题）
  - Body（14-16）
  - Meta（12）
- 间距体系：区块纵向节奏统一（建议 64/80/96 分层）。

---

## 6. 技术实现约束
- 技术栈：Next.js App Router + TypeScript + Tailwind。
- 组件化拆分：
  - `sections/*`：每个区块独立组件
  - `components/ui/*`：按钮、卡片、标签、accordion
- 数据驱动：文案与卡片数据集中在 `content/home.ts`。
- SSR/SEO：首页静态渲染，补齐 metadata。

---

## 7. 验收标准（Definition of Done）
- [ ] 区块顺序与参考站一致。
- [ ] Hero 生成器字段与交互结构一致。
- [ ] Pricing 为 4 档并具备月/年切换。
- [ ] FAQ 手风琴可交互。
- [ ] 移动端（375 宽）与桌面端（1440 宽）布局正常。
- [ ] Lighthouse Performance >= 85（首页目标值）。
- [ ] `npm run build` 无错误。

---

## 8. 开发阶段计划（先复刻后功能）

### Phase 1（静态高保真复刻）
- 只做页面与样式，所有数据本地 mock。
- 完成全部区块与响应式适配。

### Phase 2（交互接入）
- 接 Hero 表单真实提交。
- 接 Pricing 按钮与 Stripe Checkout。
- FAQ、切换、状态完整联动。

### Phase 3（真实业务）
- 历史列表接后端。
- 用户系统、订阅状态、积分系统。
- 埋点、A/B、增长实验。

---

## 9. 风险与规避
- 风险：复刻过程出现“结构像但质感不像”。
  - 规避：先做视觉基准稿（间距/字体/阴影 token），再批量套用。
- 风险：信息过多导致首屏性能下降。
  - 规避：图片懒加载、分段渲染、压缩资源。
- 风险：支付链路只通前向不通 webhook。
  - 规避：Stripe CLI 联调 + 事件回放测试。
