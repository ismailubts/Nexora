<!-- markdownlint-disable MD030 -->

<p align="center">
<img src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_white.svg#gh-light-mode-only">
<img src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_dark.svg#gh-dark-mode-only">
</p>

<div align="center">

[![Release Notes](https://img.shields.io/github/release/ismailubts/Nexora)](https://github.com/ismailubts/Nexora/releases)

[English](../README.md) | 繁體中文 | [简体中文](./README-ZH.md) | [日本語](./README-JA.md) | [한국어](./README-KR.md)

</div>

<h3>視覺化構建 AI 智能體</h3>
<a href="https://github.com/ismailubts/Nexora">
<img width="100%" src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_agentflow.gif?raw=true"></a>

## ⚡ 快速入門

下載並安裝 [NodeJS](https://nodejs.org/en/download) >= 20.0.0

1. 安裝 Nexora
    ```bash
    npm install -g nexora
    ```
2. 啟動 Nexora

    ```bash
    npx nexora start
    ```

3. 打開 [http://localhost:3000](http://localhost:3000)

## 🐳 Docker

### Docker Compose

1. 進入專案根目錄下的 `docker` 資料夾
2. 複製 `.env.example` 檔案，貼到同一位置並重新命名為 `.env`
3. 執行 `docker compose up -d`
4. 打開 [http://localhost:3000](http://localhost:3000)
5. 可以透過 `docker compose stop` 停止容器

### Docker 映像

1. 本地建置映像：
    ```bash
    docker build --no-cache -t nexora .
    ```
2. 執行映像：

    ```bash
    docker run -d --name nexora -p 3000:3000 nexora
    ```

3. 停止映像：
    ```bash
    docker stop nexora
    ```

## 🛠 設定

Nexora 在單一 mono 儲存庫中包含多個模組。

-   `server`：提供 API 邏輯的 Node 後端
-   `ui`：React 前端
-   `components`：第三方節點整合
-   `api-documentation`：從 express 自動產生的 swagger-ui API 文件

### 先決條件

-   安裝 [PNPM](https://pnpm.io/installation)
    ```bash
    npm i -g pnpm
    ```

### 設定步驟

1. 複製儲存庫

    ```bash
    git clone https://github.com/ismailubts/Nexora.git
    ```

2. 進入儲存庫資料夾

    ```bash
    cd Nexora
    ```

3. 安裝所有模組的相依性：

    ```bash
    pnpm install
    ```

4. 建置所有程式碼：

    ```bash
    pnpm build
    ```

5. 啟動應用程式：

    ```bash
    pnpm start
    ```

    現在可以在 [http://localhost:3000](http://localhost:3000) 存取應用程式

6. 開發建置：

    - 在 `packages/ui` 中建立 `.env` 檔案並指定 `VITE_PORT`（參考 `.env.example`）
    - 在 `packages/server` 中建立 `.env` 檔案並指定 `PORT`（參考 `.env.example`）
    - 執行

        ```bash
        pnpm dev
        ```

    任何程式碼變更都會自動重新載入應用程式，存取 [http://localhost:8080](http://localhost:8080)

## 🌱 環境變數

Nexora 支援不同的環境變數來配置您的實例。您可以在 `packages/server` 資料夾中的 `.env` 檔案中指定變數。請參閱 `packages/server/.env.example` 了解可用選項。

## 📄 授權

Copyright (c) Abdul Ismail. All rights reserved.

未經授權，禁止以任何形式複製、修改、分發或使用本軟體的全部或部分內容。

詳情請參閱 [LICENSE.md](../LICENSE.md)。

儲存庫：[https://github.com/ismailubts/Nexora](https://github.com/ismailubts/Nexora)
