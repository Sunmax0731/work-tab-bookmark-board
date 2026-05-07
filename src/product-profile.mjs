export const productProfile = {
  "repository": "work-tab-bookmark-board",
  "title": "作業タブ・ブックマークボード",
  "domain": "ChromeExtension",
  "hostApp": null,
  "rank": 38,
  "ideaNo": 1,
  "overview": "タブ群、参考ページ、管理画面を作業単位で保存復元する。入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "調査や開発中のタブが増え、再開時に文脈を復元しにくい。",
  "differentiation": "タブ、用途メモ、プロジェクト名を1カードで保存する。",
  "publish": "Chrome Web Store",
  "surface": "Chrome拡張 Side Panel + storage API",
  "entity": "work board",
  "requiredFields": [
    "id",
    "title",
    "source",
    "tabs",
    "project",
    "owner",
    "acceptance"
  ],
  "warningField": "restorePolicy",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
