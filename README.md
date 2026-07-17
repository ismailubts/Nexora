<!-- markdownlint-disable MD030 -->

<p align="center">
<img src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_white.svg#gh-light-mode-only">
<img src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_dark.svg#gh-dark-mode-only">
</p>

<div align="center">

[![Release Notes](https://img.shields.io/github/release/ismailubts/Nexora)](https://github.com/ismailubts/Nexora/releases)

English | [繁體中文](./i18n/README-TW.md) | [简体中文](./i18n/README-ZH.md) | [日本語](./i18n/README-JA.md) | [한국어](./i18n/README-KR.md)

</div>

<h3>Build AI Agents, Visually</h3>
<a href="https://github.com/ismailubts/Nexora">
<img width="100%" src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_agentflow.gif?raw=true"></a>

## 📚 Table of Contents

-   [⚡ Quick Start](#-quick-start)
-   [🐳 Docker](#-docker)
-   [🛠 Setup](#-setup)
-   [🌱 Env Variables](#-env-variables)
-   [📄 License](#-license)

## ⚡ Quick Start

Download and Install [NodeJS](https://nodejs.org/en/download) >= 20.0.0

1. Install Nexora
    ```bash
    npm install -g nexora
    ```
2. Start Nexora

    ```bash
    npx nexora start
    ```

3. Open [http://localhost:3000](http://localhost:3000)

## 🐳 Docker

### Docker Compose

1. Clone the Nexora project
2. Go to `docker` folder at the root of the project
3. Copy `.env.example` file, paste it into the same location, and rename to `.env` file
4. `docker compose up -d`
5. Open [http://localhost:3000](http://localhost:3000)
6. You can bring the containers down by `docker compose stop`

### Docker Image

1. Build the image locally:

    ```bash
    docker build --no-cache -t nexora .
    ```

2. Run image:

    ```bash
    docker run -d --name nexora -p 3000:3000 nexora
    ```

3. Stop image:

    ```bash
    docker stop nexora
    ```

## 🛠 Setup

Nexora has multiple modules in a single mono repository.

-   `server`: Node backend to serve API logics
-   `ui`: React frontend
-   `components`: Third-party nodes integrations
-   `api-documentation`: Auto-generated swagger-ui API docs from express

### Prerequisite

-   Install [PNPM](https://pnpm.io/installation)
    ```bash
    npm i -g pnpm
    ```

### Setup

1.  Clone the repository:

    ```bash
    git clone https://github.com/ismailubts/Nexora.git
    ```

2.  Go into repository folder:

    ```bash
    cd Nexora
    ```

3.  Install all dependencies of all modules:

    ```bash
    pnpm install
    ```

4.  Build all the code:

    ```bash
    pnpm build
    ```

    <details>
    <summary>Exit code 134 (JavaScript heap out of memory)</summary>  
    If you get this error when running the above `build` script, try increasing the Node.js heap size and run the script again:

    ```bash
    # macOS / Linux / Git Bash
    export NODE_OPTIONS="--max-old-space-size=4096"

    # Windows PowerShell
    $env:NODE_OPTIONS="--max-old-space-size=4096"

    # Windows CMD
    set NODE_OPTIONS=--max-old-space-size=4096
    ```

    Then run:

    ```bash
    pnpm build
    ```

    </details>

5.  Start the app:

    ```bash
    pnpm start
    ```

    You can now access the app on [http://localhost:3000](http://localhost:3000)

6.  For development build:

    -   Create `.env` file and specify the `VITE_PORT` (refer to `.env.example`) in `packages/ui`
    -   Create `.env` file and specify the `PORT` (refer to `.env.example`) in `packages/server`
    -   Run:

        ```bash
        pnpm dev
        ```

    Any code changes will reload the app automatically on [http://localhost:8080](http://localhost:8080)

## 🌱 Env Variables

Nexora supports different environment variables to configure your instance. You can specify the following variables in the `.env` file inside `packages/server` folder. See `packages/server/.env.example` for available options.

## 📄 License

Copyright (c) Abdul Ismail. All rights reserved.

Unauthorized copying, modification, distribution, or use of this software, in whole or in part, is prohibited without prior written permission from Abdul Ismail.

See [LICENSE.md](LICENSE.md) for details.

Repository: [https://github.com/ismailubts/Nexora](https://github.com/ismailubts/Nexora)
