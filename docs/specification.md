# 仕様

## 入力

`samples/sample-input.json` または同等の JSON を入力する。各 item は `id`、`title`、`source`、`tabs`、`project`、`owner`、`acceptance` を必須項目とする。

## 出力

- `dist/run/report.json`: 機械可読な検証結果
- `dist/run/report.md`: 人が確認する検証結果
- `docs/qcds-strict-metrics.json`: QCDS評価根拠
- `dist/work-tab-bookmark-board-docs.zip`: ドキュメント一式

## 判定

- 必須項目不足が1件以上ある場合は `failed`
- 必須項目不足がなく warning が1件以上ある場合は `warning`
- error と warning が0件の場合は `passed`

## プラットフォーム仕様

Chrome拡張 Side Panel + storage API を前提とする。MVP後も core 判定はプラットフォーム非依存に保ち、UI、CLI、配布面を差し替えられるようにする。
