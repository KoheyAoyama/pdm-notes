# ローカルで編集

HTMLとCSSを直接編集する静的ページです。ビルドやパッケージのインストールは不要です。

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

> このフォルダのAGENTS.mdを読んで、ページを修正してください。ビルドは追加せず、HTMLとCSSを直接編集してください。まずローカルで表示を確認し、公開を指示するまではpushしないでください。

参考：[Codexをエディタで使う](https://learn.chatgpt.com/docs/codex/ide)
