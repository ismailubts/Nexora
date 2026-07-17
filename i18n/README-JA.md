<!-- markdownlint-disable MD030 -->

<p align="center">
<img src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_white.svg#gh-light-mode-only">
<img src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_dark.svg#gh-dark-mode-only">
</p>

<div align="center">

[![Release Notes](https://img.shields.io/github/release/ismailubts/Nexora)](https://github.com/ismailubts/Nexora/releases)

[English](../README.md) | 繁體中文 | [简体中文](./README-ZH.md) | [日本語](./README-JA.md) | [한국어](./README-KR.md)

</div>

<h3>AIエージェントをビジュアルに構築</h3>
<a href="https://github.com/ismailubts/Nexora">
<img width="100%" src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_agentflow.gif?raw=true"></a>

## ⚡ クイックスタート

[NodeJS](https://nodejs.org/en/download) >= 20.0.0 をダウンロードしてインストール

1. Nexora のインストール
    ```bash
    npm install -g nexora
    ```
2. Nexora の実行

    ```bash
    npx nexora start
    ```

3. [http://localhost:3000](http://localhost:3000) を開く

## 🐳 Docker

### Docker Compose

1. プロジェクトのルートにある `docker` フォルダに移動する
2. `.env.example` ファイルをコピーして同じ場所に貼り付け、名前を `.env` に変更する
3. `docker compose up -d`
4. [http://localhost:3000](http://localhost:3000) を開く
5. コンテナを停止するには、`docker compose stop` を使用します

### Docker Image

1. ローカルにイメージを構築する:
    ```bash
    docker build --no-cache -t nexora .
    ```
2. image を実行:

    ```bash
    docker run -d --name nexora -p 3000:3000 nexora
    ```

3. image を停止:
    ```bash
    docker stop nexora
    ```

## 🛠 セットアップ

Nexora には、単一の mono リポジトリに複数のモジュールがあります。

-   `server`: API ロジックを提供する Node バックエンド
-   `ui`: React フロントエンド
-   `components`: サードパーティノードとの統合
-   `api-documentation`: express から自動生成される swagger-ui API ドキュメント

### 必須条件

-   [PNPM](https://pnpm.io/installation) をインストール
    ```bash
    npm i -g pnpm
    ```

### セットアップ

1. リポジトリをクローン

    ```bash
    git clone https://github.com/ismailubts/Nexora.git
    ```

2. リポジトリフォルダに移動

    ```bash
    cd Nexora
    ```

3. すべてのモジュールの依存関係をインストール:

    ```bash
    pnpm install
    ```

4. すべてのコードをビルド:

    ```bash
    pnpm build
    ```

5. アプリを起動:

    ```bash
    pnpm start
    ```

    [http://localhost:3000](http://localhost:3000) でアプリにアクセスできるようになりました

6. 開発用ビルド:

    - `.env` ファイルを作成し、`packages/ui` に `VITE_PORT` を指定する（`.env.example` を参照）
    - `.env` ファイルを作成し、`packages/server` に `PORT` を指定する（`.env.example` を参照）
    - 実行

        ```bash
        pnpm dev
        ```

    コードの変更は [http://localhost:8080](http://localhost:8080) に自動的にアプリをリロードします

## 🌱 環境変数

Nexora は、インスタンスを設定するためのさまざまな環境変数をサポートしています。`packages/server` フォルダ内の `.env` ファイルで変数を指定できます。`packages/server/.env.example` を参照してください。

## 📄 ライセンス

Copyright (c) Abdul Ismail. All rights reserved.

本ソフトウェアの全部または一部を、Abdul Ismail の事前の書面による許可なく、複製、改変、配布、または使用することは禁止されています。

詳細は [LICENSE.md](../LICENSE.md) を参照してください。

リポジトリ: [https://github.com/ismailubts/Nexora](https://github.com/ismailubts/Nexora)
