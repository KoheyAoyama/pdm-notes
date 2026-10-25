# 原稿から公開

普段はChatGPTで会話し、その内容をGoogle Docsの原稿へ更新します。Codexは原稿の最新版を読み、静的HTMLへ反映します。ビルドやパッケージのインストールは不要です。

## 流れ

1. スマホなどのChatGPTで、考えを整理してGoogle Docsへ追記・修正する
2. PCのCodexに「Google Docsの最新版をページへ反映して」と頼む
3. ローカルで表示を確認し、公開を指示してmainへpushする

原稿の扱いは `SOURCE.md` に記録しています。初回だけ、原稿URLを手元の `SOURCE.local.md` に保存してください。このファイルはGit管理外です。原稿の更新だけではPagesの表示は変わりません。

初回は、手元のCodexがGoogle Docsを読める接続を使います。接続がなければGoogle Docsの原稿をWord等で渡せます。原稿を一般公開したり、サイトに認証情報を埋め込んだりする必要はありません。

## 準備

Macのターミナルで実行します。GitHubのSSH接続が設定済みなら、そのまま取得できます。

```sh
git clone git@github.com:KoheyAoyama/pdm-notes.git
cd pdm-notes
open index.html
```

このフォルダをCursorやVS Codeで開き、Codexに編集を頼みます。

## ファイル

| ファイル | 内容 |
| --- | --- |
| `index.html` | 本文、ページタイトル、画像の配置 |
| `style.css` | 文字サイズ、余白、色、スマホ表示 |
| `main.js` | 目次の現在位置と開閉 |
| `images/` | 挿入した画像 |
| `AGENTS.md` | Codexへ引き継ぐ編集ルール |
| `SOURCE.md` | Google Docsの原稿の場所と扱い |

編集後はブラウザを更新します。追加の変換やビルドはありません。Google Fontsの読み込みにはインターネット接続が必要です。

localhostで確認したい場合は、次のコマンドでも表示できます。

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

ブラウザで `http://localhost:8000` を開きます。終了は `Ctrl+C` です。

## 公開

ローカルで表示を確認した後、変更したファイルをcommitしてpushします。

```sh
git add index.html style.css main.js images
git diff --cached
git commit -m "Update page"
git push origin main
```

GitHub Pagesは`main`ブランチのルートを公開する設定です。pushすると自動で公開処理が始まります。

## Codexへの依頼

> AGENTS.mdとSOURCE.mdを読み、Google Docsの原稿の最新版をページに反映してください。個人エピソードなどの公開対象外の内容は除き、既存のデザイン・画像・参考リンクを保って差分を反映してください。ビルドは追加せず、まずローカルで確認できる状態まで進め、公開の指示まではpushしないでください。

参考：[Codexをエディタで使う](https://learn.chatgpt.com/docs/codex/ide)
