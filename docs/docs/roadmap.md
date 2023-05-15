---
sidebar_position: 3
---

# 🚀 Roadmap

AgentGPT is currently in beta and we have a lot of features planned. Here's a glimpse of whats in the works!

## Finished features ✔

- 🔐 **Users and authentication**
- 💾 **Saving and sharing agent runs**
  - If you are signed in, after your agent run has finished you have the ability to save it to our database.
- 🌐 **Dynamic translations for multiple languages**
  - AgentGPT is used worldwide, and we want to ensure everyone has a seamless experience on the platform. If we are
    missing the translation for your language, we'd love your help in getting it implemented!
- 🤖 **AI Model customization**
  - Now users have the ability to use their own OpenAI API key to customize everything from the model, temperature,
    loops, and more! This also all runs directly within the user's browser!

## Features in development ⏳

:::tip
AgentGPT developers are actively working on the following. Expect these to take anywhere from a few days to 2 weeks.
:::

- 🌐 **Web browsing capabilities**
  - We have a basic version implemented that performs and summarizes a Google search via the SERP api.
  - Note we've had to disable this due to costs, we will have it back up and running permanently within the week.
  - This does not currently visit the websites themselves and parse websites but we are working on this.
- ✈ **Backend migration to Python**
  - This is a bigger undertaking but something we feel must be done. It will allow us to migrate off of edge functions
    and use all the tools available for language models in the Python ecosystem.
- 🧠 **Long term memory via a vector DB**
  - Providing Agents with more memory will allow them to perform tasks with a lot more context. This will also stop
    Agents from trying to perform the same or similar tasks multiple times.
- 🤖 **Agent steer-ability**
  - Users should be able to guide the Agent through a goal. This involves adding or removing tasks and providing
    additional context for the agent
- 📚 **Documentation overhaul**
  - This is the page you're viewing right now! It will continually be updated as the project evolves to allow any new
    user / contributer to get familiar with AgentGPT as quickly as possible.

## Planned features 🕰️

:::tip
If any of these features stand out to you, or you'd like to suggest more features, please do so in
the [AgentGPT discord](https://discord.gg/jdSBAnmdnY)!
:::

- 👨‍👩‍👦 **Interaction with websites and people**
- 📄 **Writing capabilities via a document API**
  - This would involve the ability
- 💵 **Stripe integration for a lower limit paid version**
  - (Will help us stop worrying about infra costs)
- 🤖 **Cross agent communication**

## Notes

We are constantly updating our roadmap and adding new features so stay tuned for more updates and have a look at our
GitHub.
We are however a small team and would love community support in helping develop AgentGPT. If you're interested, please
head over to our [contributing page](/contributing).
