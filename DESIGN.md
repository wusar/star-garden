# 官网设计与来源

核验日期：2026-10-25。页面面向 V56 Windows 下载试玩，不承诺浏览器内游玩、正式版日期或未实现的功能。

## 参考

- [Start Bootstrap Landing Page](https://github.com/StartBootstrap/startbootstrap-landing-page)：官方原仓库说明为响应式介绍模板，MIT。借鉴首屏入口、图区与功能介绍的清晰层次。没有复制其代码或素材。
- [Cruip Simple Light](https://github.com/cruip/tailwind-landing-page-template)：官方原仓库说明为 React/Next.js/Tailwind 介绍页模板。此次 API 未返回许可证标识，因此仅参考布局；没有复制其代码或素材，没有引入运行依赖。
- [Wildfrost 官网](https://www.wildfrostgame.com/)：官网成功读取，参考以游戏画面与明确行动入口为主的独立游戏展示方式。不使用其图像、字体、标识或文案。
- [GitHub Pages 官方资料](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)：本项目使用 main 根目录发布与 `.nojekyll`，不需要构建依赖。

## 最终取舍

奶油纸色、深绿文字、少量暖金与鼠尾草绿。实机截图放在首屏纸片构图中；完整实机截图单独展示，避免把概念画面冒充游戏截图。流程示意明确标注为示意，不当作实际游戏画面。

采用系统字体，无远程字体请求。保留键盘焦点、跳过导航、原生 dialog 与 Escape 关闭、reduced-motion 样式，以及移动端布局。

## 图片

- `assets/gameplay.png`：已验证 V56 Windows 包的实机截图，来源 `builds/distribution-v56/gameplay-v56.png`。
- `assets/camp.png`：工程内 `godot/assets/scenes/workshop-event-ai-v1.png`，工坊事件插画。页面作为旅途插画展示，不称为实机截图。
- `assets/lumi.png`：工程内 `assets/portraits/lumi-doubao-style-v1.png`，露米插画。
- `assets/star.svg`：本次为游戏官网绘制的简单四角星图标。

插画使用状态随试玩包中的 `licenses/ASSET_STATUS.txt` 披露；未宣称全部素材已经完成商业或再分发许可核验。
