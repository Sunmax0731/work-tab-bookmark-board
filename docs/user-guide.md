# ユーザーガイド

## 基本フロー

1. work board の一覧を JSON で用意する。
2. `npm start` で検証する。
3. `dist/run/report.md` で error と warning を確認する。
4. error を修正し、warning はリリース前の手動確認として扱う。

## 判断基準

- `passed`: 公開前チェックに進める。
- `warning`: 公開前に人間が確認する。
- `failed`: 必須項目を修正して再実行する。
