# Traceability Matrix

| 要件 | 実装 | テスト | ドキュメント | Release evidence |
| --- | --- | --- | --- | --- |
| 必須項目検証 | `src/validators.mjs` | `tests/core.test.mjs` | `docs/specification.md` | `docs/qcds-strict-metrics.json` |
| 代表シナリオ | `src/core.mjs` | `tests/representative-suite.test.mjs` | `docs/test-plan.md` | `docs/qcds-regression-baseline.json` |
| レポート生成 | `src/report.mjs` | `npm start` | `docs/user-guide.md` | `dist/run/report.md` |
| docs ZIP | `tools/package-docs.mjs` | `npm test` | `docs/release-checklist.md` | `dist/work-tab-bookmark-board-docs.zip` |
| QCDS評価 | `tools/qcds-evaluate.mjs` | `npm test` | `docs/qcds-evaluation.md` | `docs/qcds-strict-metrics.json` |
