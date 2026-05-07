# SKILL

`work-tab-bookmark-board` の開発・検証手順です。

## 実装責務

- `src/product-profile.mjs`: 製品名、必須項目、警告項目、公開先などの設定
- `src/core.mjs`: 入力正規化、バッチ評価、集計
- `src/validators.mjs`: 必須項目、警告、ドメイン固有リスクの判定
- `src/report.mjs`: Markdown / JSON レポート生成
- `src/review-model.mjs`: QCDS や手動レビュー向けの判定補助
- `src/cli.mjs`: ローカル実行入口
- `tools/qcds-evaluate.mjs`: 厳格 QCDS metrics 生成
- `tools/package-docs.mjs`: `dist/work-tab-bookmark-board-docs.zip` 生成

## 標準検証

```powershell
npm test
npm start
```

## 代表シナリオ

`samples/representative-suite.json` は次を必ず含める。

- `happy-path`: 正常入力
- `missing-required`: 必須項目不足
- `warning`: warning のみ
- `mixed-batch`: 正常、error、warning の混在

## QCDS運用

- `npm test` は unit test、代表シナリオ、docs ZIP 生成、QCDS metrics 生成、文字化け検査までを一括で実行する。
- `docs/qcds-strict-metrics.json` は機械可読 evidence として扱う。
- `docs/qcds-regression-baseline.json` と代表シナリオの結果がズレた場合は、仕様変更として docs と tests を同時に更新する。
- 文字化け、改行差分、ZIP再生成で揺れる値は固定評価値にしない。
