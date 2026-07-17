<!-- markdownlint-disable MD030 -->

<p align="center">
<img src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_white.svg#gh-light-mode-only">
<img src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_dark.svg#gh-dark-mode-only">
</p>

<div align="center">

[![Release Notes](https://img.shields.io/github/release/ismailubts/Nexora)](https://github.com/ismailubts/Nexora/releases)

[English](../README.md) | [繁體中文](./README-TW.md) | 简体中文 | [日本語](./README-JA.md) | [한국어](./README-KR.md)

</div>

<h3>可视化构建 AI/LLM 流程</h3>
<a href="https://github.com/ismailubts/Nexora">
<img width="100%" src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_agentflow.gif?raw=true"></a>

## ⚡ 快速入门

下载并安装 [NodeJS](https://nodejs.org/en/download) >= 20.0.0

1. 安装 Nexora
    ```bash
    npm install -g nexora
    ```
2. 启动 Nexora

    ```bash
    npx nexora start
    ```

3. 打开 [http://localhost:3000](http://localhost:3000)

## 🐳 Docker

### Docker Compose

1. 进入项目根目录下的 `docker` 文件夹
2. 复制 `.env.example` 文件，粘贴到同一位置并重命名为 `.env`
3. 运行 `docker compose up -d`
4. 打开 [http://localhost:3000](http://localhost:3000)
5. 可以通过 `docker compose stop` 停止容器

### Docker 镜像

1. 本地构建镜像：
    ```bash
    docker build --no-cache -t nexora .
    ```
2. 运行镜像：

    ```bash
    docker run -d --name nexora -p 3000:3000 nexora
    ```

3. 停止镜像：
    ```bash
    docker stop nexora
    ```

## 🛠 设置

Nexora 在一个单一的代码库中有多个模块。

-   `server`：用于提供 API 逻辑的 Node 后端
-   `ui`：React 前端
-   `components`：第三方节点集成
-   `api-documentation`：从 express 自动生成的 swagger-ui API 文档

### 先决条件

-   安装 [PNPM](https://pnpm.io/installation)
    ```bash
    npm i -g pnpm
    ```

### 设置步骤

1. 克隆仓库

    ```bash
    git clone https://github.com/ismailubts/Nexora.git
    ```

2. 进入仓库文件夹

    ```bash
    cd Nexora
    ```

3. 安装所有模块的依赖：

    ```bash
    pnpm install
    ```

4. 构建所有代码：

    ```bash
    pnpm build
    ```

5. 启动应用：

    ```bash
    pnpm start
    ```

    现在可以在 [http://localhost:3000](http://localhost:3000) 访问应用

6. 用于开发构建：

    - 在 `packages/ui` 中创建 `.env` 文件并指定 `VITE_PORT`（参考 `.env.example`）
    - 在 `packages/server` 中创建 `.env` 文件并指定 `PORT`（参考 `.env.example`）
    - 运行

        ```bash
        pnpm dev
        ```

    任何代码更改都会自动重新加载应用程序，访问 [http://localhost:8080](http://localhost:8080)

## 🌱 环境变量

Nexora 支持不同的环境变量来配置您的实例。您可以在 `packages/server` 文件夹中的 `.env` 文件中指定变量。请参阅 `packages/server/.env.example` 了解可用选项。

## 📄 许可证

Copyright (c) Abdul Ismail. All rights reserved.

未经授权，禁止以任何形式复制、修改、分发或使用本软件的全部或部分内容。

详情请参阅 [LICENSE.md](../LICENSE.md)。

仓库：[https://github.com/ismailubts/Nexora](https://github.com/ismailubts/Nexora)
