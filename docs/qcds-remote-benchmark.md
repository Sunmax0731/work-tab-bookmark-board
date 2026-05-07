# QCDS Remote Benchmark

## 探索した成熟例

- `D:\AI\ProjectManagement\release-output-check-flow`: 代表シナリオ、metrics JSON、docs ZIP、traceability を含む厳格QCDS運用例。
- `D:\AI\WindowsApp\git-release-publish-assistant`: Git、release、publish を対象にした同型の厳格QCDS運用例。
- `Sunmax0731/movie-telop-transcriber`: 代表データ、actual run、metrics JSON、release evidence を持つ成熟例として採用。
- `Sunmax0731/codex-remote-android`: hardening plan、release precheck、security evidence、Issue traceability を持つ成熟例として採用。

## 今回の適用

- 代表シナリオを4種類以上持つ。
- `docs/qcds-strict-metrics.json` を機械可読 evidence にする。
- `docs/qcds-regression-baseline.json` と現行結果を比較できる。
- `docs/traceability-matrix.md` で要件、実装、テスト、docs、release evidence を結ぶ。
- `docs/security-privacy-checklist.md` で秘密情報、外部通信、ログ、権限を確認する。
