# work-tab-bookmark-board

作業タブ・ブックマークボード は、タブ群、参考ページ、管理画面を作業単位で保存復元する。入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 何を解決するか

調査や開発中のタブが増え、再開時に文脈を復元しにくい。

## 差別化

タブ、用途メモ、プロジェクト名を1カードで保存する。

## 公開先

- Chrome Web Store

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- Chrome拡張 Side Panel + storage API の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/work-tab-bookmark-board-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\ChromeExtension\created_idea_001_work-tab-bookmark-board`
- idea ZIP: `D:\AI\ChromeExtension\created_idea_001_work-tab-bookmark-board\idea_001_work-tab-bookmark-board.zip`
- PICKUP rank: 38
- Domain: ChromeExtension
