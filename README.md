# React + TypeScript + react-router-dom SPA サンプル

このプロジェクトは、Vite を使用して作成された、React, TypeScript, および react-router-dom を使ったシンプルなシングルページアプリケーション（SPA）のサンプルです。

## 概要

このサンプルは、以下の基本的な機能を含んでいます。

*   React と TypeScript によるコンポーネントベースのUI構築
*   `react-router-dom` を使用したクライアントサイドのルーティング
*   ホームページ、アバウトページ、ユーザーページの3つの異なるページへのナビゲーション

## 最新版のNode.jsのインストール
https://zenn.dev/khsmty/articles/installing_the_latest_nodejs_on_ubuntu_and_debian

## 技術スタック

*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Vite](https://vitejs.dev/)
*   [react-router-dom](https://reactrouter.com/)

## ディレクトリ構造

```
/
├── public/
└── src/
    ├── components/      # 各ページのコンポーネント
    │   ├── About.tsx
    │   ├── Home.tsx
    │   └── Users.tsx
    ├── App.tsx          # メインのアプリケーションコンポーネントとルーティング設定
    ├── main.tsx         # アプリケーションのエントリーポイント
    └── index.css        # グローバルなスタイルシート
```

## 起動方法

1.  **依存関係のインストール**

    プロジェクトのルートディレクトリで、以下のコマンドを実行して必要なパッケージをインストールします。

    ```bash
    npm install
    ```

2.  **開発サーバーの起動**

    以下のコマンドを実行して、開発サーバーを起動します。

    ```bash
    npm run dev -- --port 3001
    ```

    サーバーが起動すると、ブラウザで `http://localhost:3001` にアクセスしてアプリケーションを確認できます。
