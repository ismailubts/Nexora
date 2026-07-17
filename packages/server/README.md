<!-- markdownlint-disable MD030 -->

# Nexora

English | [中文](./README-ZH.md)

<h3>Build AI Agents, Visually</h3>

![Nexora](https://github.com/ismailubts/Nexora/blob/main/images/Nexora_agentflow.gif?raw=true)

## ⚡Quick Start

1. Install Nexora
    ```bash
    npm install -g Nexora
    ```
2. Start Nexora

    ```bash
    npx Nexora start
    ```

3. Open [http://localhost:3000](http://localhost:3000)

## 🌱 Env Variables

Nexora support different environment variables to configure your instance. You can specify the following variables in the `.env` file inside `packages/server` folder. See `packages/server/.env.example` for available options.

You can also specify the env variables when using `npx`. For example:

```
npx Nexora start --PORT=3000 --DEBUG=true
```

## 📖 Tests

We use [Cypress](https://github.com/cypress-io) for our e2e testing. If you want to run the test suite in dev mode please follow this guide:

```sh
cd Nexora/packages/server
pnpm install
./node_modules/.bin/cypress install
pnpm build
#Only for writing new tests on local dev -> pnpm run cypress:open
pnpm run e2e
```

## 📄 License

Copyright (c) Abdul Ismail. All rights reserved.

Unauthorized copying, modification, distribution, or use of this software, in whole or in part, is prohibited without prior written permission from Abdul Ismail.

See [LICENSE.md](../../LICENSE.md) for details.

Repository: [https://github.com/ismailubts/Nexora](https://github.com/ismailubts/Nexora)
