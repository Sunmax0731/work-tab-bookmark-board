# 責務マップ

| 領域 | ファイル | 責務 |
| --- | --- | --- |
| product profile | `src/product-profile.mjs` | 製品固有設定 |
| core | `src/core.mjs` | 入力正規化、バッチ評価 |
| validators | `src/validators.mjs` | 必須項目、warning、リスク判定 |
| report | `src/report.mjs` | Markdown / JSON 出力 |
| review | `src/review-model.mjs` | 評価補助 |
| CLI | `src/cli.mjs` | ローカル実行 |
| QCDS | `tools/qcds-evaluate.mjs` | metrics 生成 |
| docs package | `tools/package-docs.mjs` | docs ZIP 生成 |
