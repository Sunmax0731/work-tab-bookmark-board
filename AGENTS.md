# AGENTS

このリポジトリは `work-tab-bookmark-board` の正式開発リポジトリです。

## 作業開始時の確認順序

1. `README.md`
2. `docs/requirements.md`
3. `docs/specification.md`
4. `docs/design.md`
5. `docs/test-plan.md`
6. `docs/qcds-strict-metrics.json`

## Source Idea Pack

- created_idea: `D:\AI\ChromeExtension\created_idea_001_work-tab-bookmark-board`
- idea ZIP: `D:\AI\ChromeExtension\created_idea_001_work-tab-bookmark-board\idea_001_work-tab-bookmark-board.zip`
- PICKUP rank: 38
- Domain: ChromeExtension

## Branch Rules

- 作業ブランチは `codex/<task-summary>` 形式を1本だけ使う。
- 工程ごとに `main` へ merge し、`origin/main` へ push する。
- 作業完了時は `main...origin/main` がクリーンで、作業ブランチが残っていない状態にする。

## Remote QCDS Benchmark Rules

- QCDS は Quality、Cost、Delivery、Satisfaction と定義する。
- 10段階評価は `S+ / S- / A+ / A- / B+ / B- / C+ / C- / D+ / D-` を使う。
- A- 未満の観点がある場合は、改善を同じブランチ内で実施してから merge する。
- ファイル存在だけでは S 評価にしない。代表シナリオ、自動テスト、metrics JSON、回帰 baseline、traceability、security/privacy、release evidence、docs ZIP をそろえる。
- 基準例は `D:\AI\ProjectManagement\release-output-check-flow`、`D:\AI\WindowsApp\git-release-publish-assistant`、`movie-telop-transcriber`、`codex-remote-android` の運用を参照する。

## Lessons

- created_idea の ZIP は正式 docs へ丸写しせず、本文を読み直して正常な日本語で再構成する。
- Markdown、JSON、HTML、JS、C#、JSX は UTF-8 で保存し、典型的な文字化け断片を残さない。
- docs ZIP のバイト数は再生成で揺れるため、QCDS metrics では存在、対象ファイル、最小サイズだけを判定する。
- 手動テストは Codex が未実施であることを明記し、ユーザーが実施できる入力ファイル、起動手順、期待結果を必ず残す。
