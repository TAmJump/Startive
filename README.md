# Startive
想いを、動きに。未来へ、広がる。 — Launch. Support. Expand.

掲載した瞬間に、応援購入・法人協賛・導入予約・代理店募集・SNS拡散まで同時に広げるローンチ支援プラットフォーム。

## 構成
- `index.html` — トップ
- `projects.html` — プロジェクト一覧（?type=corp/adopt/agent でフィルタ）
- `project.html` — プロジェクト詳細（4ボタン：応援購入/法人協賛/導入予約/代理店）
- `start.html` — 掲載する（4募集タイプ／起案者・実行責任者モデル）
- `business.html` — 法人・自治体・海外企業向け
- `pricing.html` — 料金・手数料
- `guide.html` — はじめてガイド
- `press.html` — お知らせ・プレス・取材・Launch Insight
- `legal.html` — 会社概要・規約・ガイドライン・特商法
- `assets/` — style.css / app.js（ヘッダー・ドロワー・フッター注入）/ projects-data.js

静的サイト。決済・認証・拡散センターの実装は後続（Cloudflare Workers + D1 + Square 想定）。
