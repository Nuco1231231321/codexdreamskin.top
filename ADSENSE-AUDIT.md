# Google AdSense 上线前完整审计：codexdreamskin.top

审计日期：2026-07-17  
审计类型：申请前审计  
站点类型：静态工具/教程站、精选目录、一次性数字服务  
审计范围：代码仓库、Next.js 静态产物、本地 Cloudflare Pages 模拟、公开路由、支付与隐私流程

## 结论

**AdSense 决策：Not ready（网站可以无广告上线，但现在不应提交 AdSense 审核）。**

从第一性原理看，AdSense 审核的核心不是“页面够不够漂亮”，而是 Google 能否确认三件事：站点由申请人控制、主要内容有原创价值、站内素材拥有清晰合法的使用依据。当前技术基础、导航、内容深度、隐私页面和用户体验已达到较好的申请前状态；剩余问题主要不是代码问题，而是无法由代码伪造的账户与素材权利证据。

### Blocker / 申请前必须解决

1. `ADS-PUB-02`：53 个 Codex Pet 预览、5 张 X 帖子截图以及站内镜像 ZIP 的完整再分发权利尚无可核验记录。站点已经提供作者署名、来源链接、权利说明和下架渠道，但这些不能替代许可证或明确授权。申请前应逐项记录许可证/授权，或替换为站点自有、明确许可的素材。
2. `ADS-ELIG-01`、`ADS-ELIG-02`：需要站点所有者确认已满 18 岁，并确认不会为同一发布者重复创建 AdSense 账户。
3. `ADS-SITE-01`：尚未核验 AdSense 后台中的站点添加、所有权验证和审核状态。

### High / 广告开始投放前必须解决

1. `ADS-PRIV-04`：目前的同意横幅适合 GA4 分析同意，但不是 Google 认证 CMP。若向 EEA、英国或瑞士用户投放个性化广告，必须在 AdSense 的 Privacy & messaging 中启用 Google 认证 CMP，或使用另一家 Google 认证且接入 IAB TCF 的 CMP。
2. `ADS-TXT-02`：获得真实 Publisher ID 后发布正确的 `ads.txt`。当前不得编造 `pub-...` ID，也不应放置虚假 seller 行。
3. `ADS-PROG-04`：需要在申请前查看 GA4/Search Console 的真实流量来源，排除点击交换、自动流量、垃圾推广或激励流量。

### 已完成的站点优化

- 免费安装、还原、安全说明、53 个 Pet、筛选、教程和 starter ZIP 均无需注册或付费。
- 付费服务与免费开源内容的边界已明确，价格和交付范围与 Creem 产品一致。
- About、Contact、Privacy、Terms、Refund Policy 均已完成并全站可达。
- GA4 在用户同意前不加载；拒绝后仍可完整使用网站；Cookie settings 可重新打开选择。
- Order success/cancel 页面设置为 `noindex, nofollow`，不会污染搜索索引。
- 公开页面均为 GET 可访问的静态 HTML；robots.txt 允许抓取并声明 sitemap。
- 首页和 Codex Pets 页面具有原创教程、操作流程、安全边界和实用工具，不是单纯图片聚合页。
- 未放置广告代码、广告占位框或诱导点击文案。

## 官方政策刷新

2026-07-17 已重新打开并核对以下 Google 官方页面；若后续政策变化，以实时官方文档为准：

- [Make sure your site's pages are ready for AdSense](https://support.google.com/adsense/answer/7299563?hl=en)
- [Eligibility requirements for AdSense](https://support.google.com/adsense/answer/9724?hl=en)
- [Owning the site you want to use to participate in AdSense](https://support.google.com/adsense/answer/91205?hl=en)
- [Fix AdSense crawler issues](https://support.google.com/adsense/answer/2381908?hl=en)
- [AdSense Program policies](https://support.google.com/adsense/answer/48182?hl=en)
- [Google Publisher Policies](https://support.google.com/adsense/answer/10502938?hl=en)
- [Google Publisher Restrictions](https://support.google.com/adsense/answer/10437795?hl=en)
- [Google consent management requirements](https://support.google.com/adsense/answer/13554116?hl=en)

## 逐项完整检查表

| ID | Status | Evidence | Next action |
| --- | --- | --- | --- |
| ADS-ELIG-01 | Unknown | 仓库和站点无法证明 AdSense 账户持有人的年龄。 | 申请人确认已满 18 岁；未满 18 岁则使用父母或监护人账户。 |
| ADS-ELIG-02 | Unknown | 无 AdSense 账户后台证据，无法判断同一发布者是否已有账户。 | 先检查现有 AdSense 账户；同一发布者不要重复注册。 |
| ADS-ELIG-03 | Unknown | C-H 大部分通过，但 `ADS-PUB-02` 的素材权利证据仍不完整。 | 完成素材许可证/授权台账后重新判定。 |
| ADS-ELIG-04 | N/A | 这是独立域名上的 Next.js/Cloudflare Pages 网站，不是 Blogger、YouTube 或托管合作方产品。 | 无。 |
| ADS-OWN-01 | Pass | 站点源代码、Next.js `<head>`、Cloudflare Pages 和域名配置均可控制；Google 验证 meta 已成功写入布局。 | 申请时按 AdSense 提供的方法放置实际验证代码。 |
| ADS-OWN-02 | Pass | 已能修改域名 DNS、Cloudflare Pages、GitHub 仓库和生产站点。 | 保留域名及部署账户控制权。 |
| ADS-OWN-03 | Pass | Next.js 静态页面和客户端组件可正常渲染；Lighthouse Best Practices 为 100。 | 上线后继续监控脚本错误。 |
| ADS-SITE-01 | Unknown | 未进入 AdSense site list 核验 `Ready` 状态。 | 添加 `codexdreamskin.top`，完成所有权验证并等待 Google 审核。 |
| ADS-SITE-02 | Pass | 代码可在根布局放置验证 meta 或广告代码；Cloudflare 也可托管 ads.txt。 | 只使用 AdSense 后台提供的真实验证值。 |
| ADS-TXT-01 | N/A | 当前没有 `ads.txt`，也没有已确认的 Publisher ID。 | 获得真实 Publisher ID 后再检查 Google seller 行。 |
| ADS-TXT-02 | Unknown | `ads.txt` 推荐但依赖真实 Publisher ID；当前不能安全生成。 | 获得 ID 后发布 `google.com, pub-真实ID, DIRECT, f08c47fec0942fa0`，并从后台再次核对。 |
| ADS-CONTENT-01 | Pass | 首页包含完整安装、还原、原理、安全、故障排除和校验信息；Pets 页含 53 项筛选、安装器和 V1 制作教程。 | 保持内容随上游兼容性变化更新。 |
| ADS-CONTENT-02 | Pass | 社区素材不是页面唯一价值；页面增加了原创筛选、命令生成、安装说明、安全分析、格式教程和来源上下文。 | 不得把页面退化成只有图片或外链的聚合页。 |
| ADS-CONTENT-03 | Pass | 首页完整文本约 1,348 词，Pets 页约 1,238 词；核心页面不仅是导航或空列表。 | 新增目录页时保持独立说明和实用功能。 |
| ADS-CONTENT-04 | Pass | 无 lorem ipsum、空白模板、Coming soon 或仅广告页面；所有公开路由均有完整内容。 | 发布后定期检查 404、空状态和失效下载。 |
| ADS-CONTENT-05 | N/A | 当前没有广告、联盟模块或赞助展示。 | 将来只在内容页测试低密度广告，避免首屏广告压过主内容。 |
| ADS-CONTENT-06 | Pass | 主内容为 AdSense 支持的英语；中文只作为自然搜索词或宠物名称出现。 | 不要生成只有关键词、没有完整语义的混合语言页面。 |
| ADS-CONTENT-07 | N/A | 当前没有公开评论或用户直接发布功能；付费图片上传为私有且不会自动进入画廊。 | 启用公开投稿前建立审核、举报和下架流程。 |
| ADS-CONTENT-08 | Pass | 每个主页面有清晰主题；标题、H1 和正文自然使用关键词，没有批量门页或机械重复。 | Search Console 出现蚕食时再调整关键词映射。 |
| ADS-UX-01 | Pass | 桌面和 390px 移动端导航、页脚、筛选、Tabs、按钮均已测试；无横向溢出。 | 上线后用真实移动设备复查关键流程。 |
| ADS-UX-02 | Pass | 首页解释站点用途并链接安装、Pets、服务、About、Contact 和政策页；Pets 页从选择到命令形成完整路径。 | 保持重要页面在首页三次点击内。 |
| ADS-UX-03 | Pass | 下载按钮、Codex 深链和 CLI 命令均有明确标签；没有假播放按钮、假系统提示或不存在的内容链接。 | 任何新 CTA 必须描述真实结果。 |
| ADS-UX-04 | Pass | 页面不会自动下载、跳转或打开弹窗；下载、剪贴板和 checkout 都需要用户操作。 | 不增加强制弹窗、popunder 或自动重定向。 |
| ADS-UX-05 | Pass | About、Contact、Privacy、Terms、Refund Policy 均为真实内容并从页脚可达。 | 保持政策日期与支付流程同步。 |
| ADS-UX-06 | Pass | 没有广告占位框或模仿广告的布局；主要 CTA 与内容导航区分清楚。 | 投放广告时使用清晰 `Ad`/`Sponsored` 标签。 |
| ADS-CRAWL-01 | Pass | 本地 Cloudflare Pages 模拟中所有公开路由、robots、sitemap、两个 ZIP 均返回 200。 | 部署后用生产域名重复验证。 |
| ADS-CRAWL-02 | Pass | robots.txt 对 `*` 允许 `/`，没有登录墙；公开内容为静态 HTML。 | 不要在 WAF 中阻止 Mediapartners-Google 或 Googlebot。 |
| ADS-CRAWL-03 | Pass | 首页、Pets、About 和政策页均通过 GET 直接访问；POST 仅用于 noindex 的支付确认和私有 brief。 | 不在含广告的页面依赖 POST 状态。 |
| ADS-CRAWL-04 | Pass | 公开路由不依赖 cookie/session 重定向；Next.js 静态导出直接返回页面。 | 生产验证时检查 HTTP/HTTPS 和 www 只保留一个规范版本。 |
| ADS-CRAWL-05 | Pass | 公开 URL 简短、稳定、全小写并使用连字符；用户/会话参数只存在于 noindex 订单返回页。 | 不把 checkout 参数加入 sitemap 或内部导航。 |
| ADS-CRAWL-06 | Pass | 域名已在 Cloudflare 管理并使用 HTTPS；静态资源由 Cloudflare Pages 提供。 | 部署后检查 TLS、DNS 与 5xx。 |
| ADS-CRAWL-07 | Pass | sitemap 暴露全部 8 个可索引公共路由；首页和页脚提供内部链接。 | 新增高质量页面时同步 sitemap。 |
| ADS-PROG-01 | Unknown | 当前没有广告，无法通过代码证明未来不会自点或制造无效展示。 | 站点所有者书面确认不自点、不让团队测试真实广告、不使用自动刷新。 |
| ADS-PROG-02 | Pass | 全站没有“点击广告支持我们”、奖励点击、箭头指向广告等文案。 | 广告上线后继续保持中性标签。 |
| ADS-PROG-03 | N/A | 当前没有广告位。 | 广告必须与按钮、下载、Pets 卡片和导航保持明显间距。 |
| ADS-PROG-04 | Unknown | 无 GA4/Search Console 流量来源导出，无法核验流量获取方式。 | 申请前检查 referral、paid、direct 和异常国家/设备流量。 |
| ADS-PROG-05 | N/A | 当前没有 AdSense 代码或包装器。 | 未来使用 Google 提供的原始代码，不修改点击或刷新行为。 |
| ADS-PROG-06 | N/A | 当前没有 Google 广告；订单、邮件、私有上传和非内容页均无广告。 | 建立路由排除：`/order/*`、Contact、Privacy、Terms、Refund、checkout 流程不放广告。 |
| ADS-PROG-07 | N/A | 网站是普通浏览器页面，不是 WebView 应用。 | 无。 |
| ADS-PUB-01 | Pass | 站点提供桌面外观安装和教程，没有非法活动、非法商品或绕过付费服务。 | 保持下载和教程只用于用户自己的设备。 |
| ADS-PUB-02 | Unknown | 53 个社区预览、5 张 X 截图和镜像 ZIP 的逐项许可证/再分发授权未在仓库中记录；部分名称涉及第三方角色。 | 申请前建立素材权利台账；无授权项目替换为自有/许可素材或移除。 |
| ADS-PUB-03 | Pass | 未发现仇恨、歧视、骚扰、威胁、自残、恐怖主义或暴力赞美内容。 | 投稿开放后增加自动与人工审核。 |
| ADS-PUB-04 | Pass | 没有虐待动物或濒危物种交易内容；“Pets”指桌面角色。 | 无。 |
| ADS-PUB-05 | Pass | About、Footer 和 Terms 明确说明独立站点、非 OpenAI 官方或背书；付费服务边界清楚。 | 不使用官方合作、认证或保证兼容等未经证明的表述。 |
| ADS-PUB-06 | Pass | checkout 由 Creem 托管；站点不索取卡号、密码、API key 或 Codex 对话。 | 保持私有上传最小化并继续使用 HTTPS。 |
| ADS-PUB-07 | Pass | 本地 CDP 仅用于用户自己的 Codex 外观，页面包含安全边界和恢复说明；未提供入侵、跟踪或破解他人系统的功能。 | 不扩展为绕过安全控制或未授权访问教程。 |
| ADS-PUB-08 | Pass | 没有色情交易、成人家庭内容或儿童性剥削内容。 | UGC 上线后设为硬阻断类别。 |
| ADS-PUB-09 | Unknown | 站点身份和商品信息准确，但 AdSense 发布者身份、站点映射和 ads.txt 尚未在账户中配置。 | 获得账户后核对域名、Publisher ID、付款资料和 ads.txt 完全一致。 |
| ADS-PUB-10 | N/A | 当前没有广告。 | 广告不得覆盖页面、下载按钮、筛选器、导航或 Cookie 控件。 |
| ADS-PUB-11 | N/A | 当前没有广告；所有可索引页面均有发布者内容。 | 不在订单结果、空搜索、政策页或低价值页面放广告。 |
| ADS-PUB-12 | N/A | 当前没有广告或视频广告。 | 不创建离屏、背景或与用户注意力无关的广告位。 |
| ADS-PUB-13 | N/A | 站点不涉及选举、健康、气候或公共政策声明。 | 如以后发布此类内容，单独进行事实与来源审核。 |
| ADS-PUB-14 | N/A | 没有政治/社会议题的操纵媒体。 | 无。 |
| ADS-PUB-15 | Pass | 未发现任何儿童危险、诱骗、性化未成年人或 CSAM 内容。 | 对未来投稿保持零容忍和立即删除。 |
| ADS-PUB-16 | N/A | 站点不报道或利用突发危机、战争或灾难。 | 无。 |
| ADS-REST-01 | Pass | 未发现性内容、性商品、性保健品或性建议。 | 无。 |
| ADS-REST-02 | Pass | 未发现血腥、震惊、暴力或突出脏话内容。 | 审核新增图片。 |
| ADS-REST-03 | Pass | 未发现武器、枪械或爆炸物销售与制作说明。 | 无。 |
| ADS-REST-04 | Pass | 未发现烟草、娱乐性毒品或吸毒/制毒说明。 | 无。 |
| ADS-REST-05 | Pass | 未发现酒类销售或不负责任饮酒推广。 | 无。 |
| ADS-REST-06 | Pass | 未发现赌博、博彩或付费机会游戏。 | 无。 |
| ADS-REST-07 | Pass | 未发现处方药、在线药房、未批准药品或下架应用销售。 | 无。 |
| ADS-REST-08 | N/A | 当前没有视频广告或粘性广告实现。 | 广告上线后重新检查遮挡、自动播放、关闭控件和响应式位置。 |
| ADS-PRIV-01 | Pass | `/privacy` 说明 Cloudflare、Supabase、Creem、GA4、未来 Google 广告、cookies、IP 和标识符。 | 广告配置变化时同步更新。 |
| ADS-PRIV-02 | Pass | 隐私政策明确披露 Google 等第三方可能放置/读取 cookies，使用 web beacon、IP 和其他标识符。 | 保持 disclosure 与真实广告模式一致。 |
| ADS-PRIV-03 | Pass | GA4 仅发送普通页面/设备参与信息；站点未把 checkout email、图片名或订单参数写入分析事件。 | 广告和分析事件中继续禁止 PII。 |
| ADS-PRIV-04 | Fail | 自建横幅只管理 GA4 analytics consent，不是 Google 认证 CMP；站点面向全球用户。 | 在广告投放前启用 AdSense Privacy & messaging 的认证 CMP，或接入另一认证 TCF CMP。 |
| ADS-PRIV-05 | N/A | 站点不请求 GPS、浏览器 precise location 或设备定位权限。 | 若未来增加定位，先做单独 opt-in 和政策更新。 |
| ADS-PRIV-06 | N/A | 站点面向开发者和桌面自定义用户，不是儿童导向产品。 | 不创建儿童行为广告受众。 |
| ADS-PRIV-07 | Pass | 代码没有设置、修改、拦截或删除 Google 域 cookies。 | 不代理或重写 Google cookie。 |
| ADS-PRIV-08 | N/A | 当前没有 Google 广告个性化、再营销名单或敏感类别受众。 | 将来不得基于上传图片、订单、隐私请求或敏感信息创建广告受众。 |
| ADS-PRIV-09 | N/A | 站点不提供住房、就业或信贷广告，也没有相关定向。 | 无。 |
| ADS-PRIV-10 | N/A | 当前不使用个性化广告。 | 启用个性化广告前完成 CMP、数据权利和广告选择披露。 |

## 广告位实施边界

在 Blocker 解决并通过 AdSense 审核前，不添加广告代码。审核通过后，首期只考虑：

- 首页教程内容中段：最多 1 个响应式内容内广告。
- `/codex-pets`：教程段落之间最多 1 个广告，不放在 Pet 卡片网格、搜索筛选、安装按钮或 CLI 命令附近。

明确排除：

- `/custom-skin`
- `/order/*`
- `/contact`
- `/privacy`
- `/terms`
- `/refund-policy`
- 空搜索结果、下载确认、支付返回和私有上传状态

## 完整性证明

- 技能参考中的 Requirement IDs：`73`
- 本报告逐项行数：`73`
- 重复 IDs：`none`
- 缺失 IDs：`none`

