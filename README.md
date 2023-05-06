## Git ローカルへのコピー

#### Github からコピーもとをローカルにコピー

git clone https://github.com/samuelkraft/notion-blog-nextjs {ローカルフォルダ名}

#### ほかのファイルを Install

(node_modules をインストールする）
npm install

#### 実行

npm run dev

## ソース調整

#### index は text でなく、Index に変更

key={index}へ変更

Warning の回避
「https://www.notion.so/${databaseId}」 で Waning が出る模様、URL へのリンクがサーバー側とクライアント側で異なる可能性があるとかとのこと
コメントアウトで回避

## Git へのアップ

#### 1 現在のリモート URL を確認する

git remote -v

#### 2 新しいリモート URL に変更する

git remote set-url origin {new url}

#### 3 変更したリモート URL を確認する

git remote -v

#### ４ Git へのアップ

（.gitignore に.env あることは確認後）
git branch -M main
git push -u origin main

## Vercel への Deploy

Vercel の設定・通常通り

#### yarn.lock ファイルを削除します。

プロジェクトのルートディレクトリで yarn install を再実行します。

## 記録

#### 2023.5.6

Arrow 関数が使えない　 → 通常の関数なら使える・・・変なエラーが出る模様

#### 2023.5.7

Tailwindcss 導入。
React だと、特段変更する場所はないのかな。
手順通りインストール後
app.js にむすびつく css に追記するだけ。
[出来る限り短く説明する React + Tailwind CSS 入門（忙しい人向け）](https://zenn.dev/rgbkids/articles/7bd919464283d0)の Ract の手順が役に立った。

This is a [Next.js](https://nextjs.org/) blog using [Notions Public API](https://developers.notion.com).

**Demo:** [https://notion-blog-nextjs-coral.vercel.app](https://notion-blog-nextjs-coral.vercel.app)

**How-it-works/Documentation:** [https://samuelkraft.com/blog/building-a-notion-blog-with-public-api](https://samuelkraft.com/blog/building-a-notion-blog-with-public-api)

## Getting Started

First, follow Notions [getting started guide](https://developers.notion.com/docs/getting-started) to get a `NOTION_TOKEN` and a `NOTION_DATABASE_ID`, then add them to a file called `.env.local`.

As a reference here's the Notion table I am using: https://www.notion.so/5b53abc87b284beab0c169c9fb695b4d?v=e4ed5b1a8f2e4e12b6d1ef68fa66e518

```
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

Install dependencies

```bash
npm install
# or
yarn
```

Start the server with

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
