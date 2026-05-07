# テスト計画

## 自動テスト

```powershell
npm test
```

## 対象

- core 判定
- 必須項目検証
- warning 判定
- 代表シナリオ全件
- QCDS metrics 生成
- docs ZIP 生成
- 文字化け検査

## 合格条件

- `node --test` が成功する。
- `docs/qcds-strict-metrics.json` が生成される。
- `dist/work-tab-bookmark-board-docs.zip` が生成される。
- 典型的な文字化け断片が検査対象ファイルに含まれない。
