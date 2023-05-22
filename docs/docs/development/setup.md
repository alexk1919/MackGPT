---
sidebar_position: 1
---

# 🛠️ Setup

The following document will help you set up a local installation of AgentGPT.

## Stack

- 💅 Frontend: NextJS + Typescript
- 🐍 Backend: FastAPI + Python
- 📚 DB: MySQL through docker with the option of running SQLite locally

## ENV

Before you can get started, you need to ensure your ENV is correctly configured. To do this, copy over
the [.env.example](https://github.com/reworkd/AgentGPT/blob/main/.env.example) file into the `./next/` directory, rename
it to `.env` and update values as necessary. Some things to note:

- You will need to update the `OPENAI_API_KEY` with your own value. See the [FAQ](/faq) for details
- The DB ENV values are taken from definitions in `./docker-compose.yml`
- To enable web search, set `NEXT_PUBLIC_WEB_SEARCH_ENABLED=true` and use [your own SERP api key](https://serper.dev/)
  for `SERP_API_KEY`.

## Using Docker

The docker build is very straightforward and should work out of the box.
Ensure you have docker installed by visiting [their website](https://www.docker.com/). After this, run the following
command:

```bash
docker-compose up --build
```

This will spin up a container for the frontend, backend, and database.

## Developing outside of docker

Outside of docker, you'll need to just configure your ENV. Additionally, you can use `setup.sh` to walkthrough ENV
configuration and also update your Prisma configuration to point to a local SQLite
instance.

After this, you can run the following to set up your Next.js project. We will add additional instructions for the Python
backend when enabled.

```bash
// Frontend
cd ./next
npm install
npm run dev
```

## Running the site

After you have locally built AgentGPT, you can travel to http://localhost:3000/ in your web browser.

## Issues / Additional help

If you're still having trouble, you can follow a legacy guide from
@CybrCo: [How to install AgentGPT locally](https://snapdragon-writer-867.notion.site/How-to-Install-AgentGPT-Locally-9b96b2314c9b491397976249fd121023)

If you still face problems, please submit an [issue on GitHub](https://github.com/reworkd/AgentGPT/issues) or reach out
to the team on [discord](https://discord.gg/jdSBAnmdnY).
