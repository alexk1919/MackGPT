<p align="center">
  <img src="https://mackgpt.com/banner.png"/>
</p>
<p align="center">
  <em>🤖 Create, customize, and launch autonomous AI Agents in your browser. 🤖 </em>
</p>
<p align="center">
    <img alt="Node version" src="https://img.shields.io/static/v1?label=node&message=%20%3E=16.0.0&logo=node.js&color=2334D058" />
      <a href="https://github.com/alexk1919/MackGPT/blob/main/README.md"><img src="https://img.shields.io/badge/lang-English-blue.svg" alt="English"></a>
</p>

<p align="center">
<a href="https://mackgpt.com">🔗 Short link</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://docs.reworkd.ai/">📚 Docs</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://docs.reworkd.ai/contributing">🤝 Contribute</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://twitter.com/MackGPT_com">🐦 Twitter</a>
</p>

---

<h2 align="center">
💝 Support the Advancement of MackGPT!! 💝
</h2>

<p align="center">
Boost the development of MackGPT, an open-source project pushing AI autonomy forward! Your support helps cover operational costs, such as in-house API and infrastructure expenses, which are growing daily. Your sponsorship drives progress by facilitating resource scaling, feature improvement, and continuous innovation in this groundbreaking project! 🚀
</p>

<p align="center">
By sponsoring this open-source project, you can showcase your avatar/logo below while contributing to the progress of autonomous AI!🗣️
</p>

<p align="center">
<a href="https://github.com/sponsors/alexk1919" target="_blank">👉 Click here</a> to support the project
</p>


---

MackGPT allows you to create, customize, and deploy Autonomous AI agents in your browser.
Name your own custom AI and have it embark on any goal imaginable.
It will attempt to reach the goal by thinking of tasks to do, executing them, and learning from the results 🚀.



## 🎉 Roadmap

This platform is currently in beta, we are currently working on:

- Long term memory via a vector DB 🧠
- Web browsing capabilities via LangChain 🌐
- Interaction with websites and people 👨‍👩‍👦
- Writing capabilities via a document API 📄
- Saving agent runs 💾
- Users and authentication 🔐
- Stripe integration for a lower limit paid version (So we can stop worrying about infra costs) 💵

More Coming soon...

## 🚀 Tech Stack

- ✅ **Bootstrapping**: [create-t3-app](https://create.t3.gg).
- ✅ **Framework**: [Nextjs 13 + Typescript](https://nextjs.org/).
- ✅ **Auth**: [Next-Auth.js](https://next-auth.js.org)
- ✅ **ORM**: [Prisma](https://prisma.io).
- ✅ **Database**: [Planetscale](https://planetscale.com/).
- ✅ **Styling**: [TailwindCSS + HeadlessUI](https://tailwindcss.com).
- ✅ **Typescript Schema Validation**: [Zod](https://github.com/colinhacks/zod).
- ✅ **End-to-end typesafe API**: [tRPC](https://trpc.io/).

## 👨‍🚀 Getting Started

### 🐳 Docker Setup

The easiest way to run MackGPT locally is by using docker.
A convenient setup script is provided to help you get started.

```bash
./setup.sh --docker
```

### Docker-compose

Using `docker-compose` deploy

```bash
./setup.sh --docker-compose
```

### 👷 Local Development Setup

If you wish to develop MackGPT locally, the easiest way is to
use the provided setup script.

```bash
./setup.sh --local
```

### 🛠️ Manual Setup

> 🚧 You will need [Nodejs +18 (LTS recommended)](https://nodejs.org/en/) installed.

1. Fork this project:

- [Click here](https://github.com/alexk1919/MackGPT/fork).

2. Clone the repository:

```bash
git clone git@github.com:YOU_USER/MackGPT.git
```

3. Install dependencies:

```bash
cd MackGPT
npm install
```

4. Create a **.env** file with the following content:

> 🚧 The environment variables must match the following [schema](https://github.com/alexk1919/MackGPT/blob/main/src/env/schema.mjs).

```bash
# Deployment Environment:
NODE_ENV=development

# Next Auth config:
# Generate a secret with `openssl rand -base64 32`
NEXTAUTH_SECRET=changeme
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=file:./db.sqlite
# Your open api key
OPENAI_API_KEY=changeme
```

5. Modify prisma schema to use sqlite:

```bash
./prisma/useSqlite.sh
```

**Note:** This only needs to be done if you wish to use sqlite.

6. Ready 🥳, now run:

```bash
# Create database migrations
npx prisma db push
npm run dev
```

### 🚀 GitHub Codespaces

Set up MackGPT in the cloud immediately by using [GitHub Codespaces](https://github.com/features/codespaces).

1. From the GitHub repo, click the green "Code" button and select "Codespaces".
2. Create a new Codespace or select a previous one you've already created.
3. Codespaces opens in a separate tab in your browser.
4. In terminal, run `bash ./setup.sh --local`
5. When prompted in terminal, add your OpenAI API key.
6. Click "Open in browser" when the build process completes.

- To shut MackGPT down, enter Ctrl+C in Terminal.
- To restart MackGPT, run `npm run dev` in Terminal.

Run the project 🥳

```
npm run dev
```

### :heart: Credits

This project is based on AgentGPT <a href="https://github.com/reworkd/AgentGPT">GitHub Repo</a>.
Our work is derived from or inspired by their efforts under the GPL 3.0 license.
We greatly appreciate their efforts and the valuable work they have shared with the community.
Thank you to everyone involved in creating, maintaining, and contributing to this open-source project.

