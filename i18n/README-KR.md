<!-- markdownlint-disable MD030 -->

<p align="center">
<img src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_white.svg#gh-light-mode-only">
<img src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_dark.svg#gh-dark-mode-only">
</p>

<div align="center">

[![Release Notes](https://img.shields.io/github/release/ismailubts/Nexora)](https://github.com/ismailubts/Nexora/releases)

[English](../README.md) | [繁體中文](./README-TW.md) | [简体中文](./README-ZH.md) | [日本語](./README-JA.md) | 한국어

</div>

<h3>AI 에이전트를 시각적으로 구축</h3>
<a href="https://github.com/ismailubts/Nexora">
<img width="100%" src="https://github.com/ismailubts/Nexora/blob/main/images/Nexora_agentflow.gif?raw=true"></a>

## ⚡ 빠른 시작

[NodeJS](https://nodejs.org/en/download) >= 20.0.0 다운로드 및 설치

1. Nexora 설치
    ```bash
    npm install -g nexora
    ```
2. Nexora 실행

    ```bash
    npx nexora start
    ```

3. [http://localhost:3000](http://localhost:3000) 열기

## 🐳 Docker

### Docker Compose

1. 프로젝트 루트의 `docker` 폴더로 이동
2. `.env.example` 파일을 복사하여 같은 위치에 붙여넣고 `.env`로 이름 변경
3. `docker compose up -d` 실행
4. [http://localhost:3000](http://localhost:3000) 열기
5. `docker compose stop`으로 컨테이너 중지

### Docker 이미지

1. 로컬에서 이미지 빌드:
    ```bash
    docker build --no-cache -t nexora .
    ```
2. 이미지 실행:

    ```bash
    docker run -d --name nexora -p 3000:3000 nexora
    ```

3. 이미지 중지:
    ```bash
    docker stop nexora
    ```

## 🛠 설정

Nexora는 단일 mono 저장소에 여러 모듈이 있습니다.

-   `server`: API 로직을 제공하는 Node 백엔드
-   `ui`: React 프론트엔드
-   `components`: 서드파티 노드 통합
-   `api-documentation`: express에서 자동 생성되는 swagger-ui API 문서

### 사전 요구 사항

-   [PNPM](https://pnpm.io/installation) 설치
    ```bash
    npm i -g pnpm
    ```

### 설정

1. 저장소 클론

    ```bash
    git clone https://github.com/ismailubts/Nexora.git
    ```

2. 저장소 폴더로 이동

    ```bash
    cd Nexora
    ```

3. 모든 모듈의 종속성 설치:

    ```bash
    pnpm install
    ```

4. 모든 코드 빌드:

    ```bash
    pnpm build
    ```

5. 앱 시작:

    ```bash
    pnpm start
    ```

    이제 [http://localhost:3000](http://localhost:3000)에서 앱에 액세스할 수 있습니다

6. 개발 빌드:

    - `packages/ui`에 `.env` 파일을 만들고 `VITE_PORT` 지정 (`.env.example` 참조)
    - `packages/server`에 `.env` 파일을 만들고 `PORT` 지정 (`.env.example` 참조)
    - 실행

        ```bash
        pnpm dev
        ```

    코드 변경 사항은 [http://localhost:8080](http://localhost:8080)에서 자동으로 앱을 다시 로드합니다

## 🌱 환경 변수

Nexora는 인스턴스 구성을 위한 다양한 환경 변수를 지원합니다. `packages/server` 폴더 내 `.env` 파일에서 변수를 지정할 수 있습니다. `packages/server/.env.example`을 참조하세요.

## 📄 라이선스

Copyright (c) Abdul Ismail. All rights reserved.

Abdul Ismail의 사전 서면 허가 없이 본 소프트웨어의 전부 또는 일부를 복사, 수정, 배포 또는 사용하는 것은 금지됩니다.

자세한 내용은 [LICENSE.md](../LICENSE.md)를 참조하세요.

저장소: [https://github.com/ismailubts/Nexora](https://github.com/ismailubts/Nexora)
