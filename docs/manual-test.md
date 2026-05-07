# 手動テスト

Codex では手動テストを未実施です。以下をユーザー側で実施してください。

## 準備

- 作業ディレクトリ: `D:\AI\ChromeExtension\work-tab-bookmark-board`
- 必要ファイル: `samples/sample-input.json`、`samples/representative-suite.json`
- Node.js: `node --version` が実行できること

## 起動手順

```powershell
cd D:\AI\ChromeExtension\work-tab-bookmark-board
npm test
npm start
```

## 実施手順

1. `dist/run/report.md` を開く。
2. 正常ケースが `passed` であることを確認する。
3. `samples/representative-suite.json` の `missing-required` を参考に必須項目を空にして `npm start` を再実行する。
4. report が `failed` になり、不足項目が表示されることを確認する。
5. Chrome拡張 Side Panel + storage API の UI または配布面を開き、検証結果をユーザーが次アクションに移せる粒度で確認する。

## 期待結果

- 正常入力は error 0、warning 0。
- 必須項目不足は error として表示される。
- warning ケースは作業を止めず、手動確認が必要な項目として表示される。
- docs ZIP が `dist/work-tab-bookmark-board-docs.zip` に存在する。
