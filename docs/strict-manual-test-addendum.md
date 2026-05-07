# Strict Manual Test Addendum

Codex は自動テストのみ実施し、手動テストは未実施です。

## 追加で確認すること

1. `Chrome Web Store` の公開画面または配布準備画面で、説明文、スクリーンショット、配布物の対応が分かること。
2. `Chrome拡張 Side Panel + storage API` の主画面で、error と warning の違いが迷わず分かること。
3. 実データを投入する場合、秘密情報や権利不明データが report や ZIP に含まれないこと。
4. docs ZIP を展開し、README、導入手順、ユーザーガイド、手動テスト手順、QCDS metrics が含まれること。

## 手動テスト未実施項目

- 実ホストアプリ上での UI 操作確認。
- Chrome Web Store の審査画面または掲載画面での最終確認。
- 実ユーザーによる操作時間、理解度、文言の自然さの確認。
