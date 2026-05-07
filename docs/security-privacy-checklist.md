# Security Privacy Checklist

- [x] 入力サンプルに秘密情報を含めない。
- [x] report に token、password、private key を出力しない。
- [x] 外部サービスへ自動送信しない。
- [x] Chrome拡張 Side Panel + storage API の権限は最小化する方針を明記した。
- [x] 手動テスト時に実データを使う場合、公開可能なサンプルだけを使う。
- [x] GitHub Release または Chrome Web Store へ出す前に artifact 内の秘密情報を確認する。
