const ideas = [
  { title: "Lo-fi Rain Persona", prompt: "生成一套午夜城市雨景 Lo-fi 频道视觉与文案风格。", model: "GPT-Image + Sora" },
  { title: "电音节日历策划", prompt: "根据 2026 季节生成全年电子音乐主题活动海报概念。", model: "GPT-4.1 + Flux" },
  { title: "品牌角色宇宙", prompt: "构建品牌虚拟角色设定，产出 10 张场景图 + 5 支短视频脚本。", model: "Kling + Claude" },
];

export default function InspirationPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14">
      <h1 className="font-display text-4xl font-bold">灵感广场</h1>
      <p className="mt-3 max-w-2xl text-white/70">沉浸式浏览热门创意任务，复制提示词后可直接在你的工具工作流里执行。</p>
      <div className="mt-8 space-y-4">
        {ideas.map((item) => (
          <article key={item.title} className="glass rounded-2xl p-6">
            <h2 className="font-display text-2xl">{item.title}</h2>
            <p className="mt-2 text-white/80">{item.prompt}</p>
            <p className="mt-3 text-sm text-aurora">推荐模型：{item.model}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
