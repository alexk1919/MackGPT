---
sidebar_position: 2
---

# 🌎 Translations

AgentGPT has translations across a variety of languages thanks to the help of many contributors such as @Cs4K1Sr4C.
languages. We're always looking to improve our translations however, if you notice something is off or missing, please
feel free to make the necessary updates or submit a ticket on GitHub!

## Translating the Frontend

We use i18next to handle our frontend translations. How it works is we have a folder for each language
in [next/public/locales](https://github.com/reworkd/AgentGPT/tree/main/next/public/locales).

```bash title="next/public/locales"
> en
> fr
> hu
...
> zh
```

For each component within the app, we namespace their translations. For example, our ChatWindow uses the `chat` name
space and its translations will be found in the `chat.json` under each folder. Translations are key value pairs where
the key represents the
desired text and the value represents the translation for a given langauge.

An example from the `chat` namespace:

- English:  `"EMBARKING_ON_NEW_GOAL": "Embarking on a new goal:"`
- Spanish:`"EMBARKING_ON_NEW_GOAL": "Embarcándose en un nuevo objetivo:"`

#### Adding a new langauge

To add a new language, go into our i18 config and add a new locale

```bash title="next/next-i18next.config.js"
i18n: {
  defaultLocale: "en",
  locales:
  [
    "en",
    "hu",
    ...,
    "sk",
    "hr",
    "tr",
    // Insert new language code here
  ],
  ...
```

Then head over to our languages definition and add a section to the available languages list

```tsx title="next/src/utils/languages.ts"
export const availableLanguages: Language[] = [
  ENGLISH,
  { code: "fr", name: "Français", flag: "🇫🇷" },
  // ...
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  // Insert new language here
];
```

After this, you must create a new folder with your langauge code
in [next/public/locales](https://github.com/reworkd/AgentGPT/tree/main/next/public/locales) and add translations for all
namespaces of our app. Note these values may not hot reload, so you must manually restart your next server.

## Translating the Backend

The backend translations are handled via the model itself.
We simply prompt it to provide the answer in the user selected langauge.
This means that whenever a new frontend language is added, the language is immediately supported on the backend!
This does however mean that we don't currently have much room to actually edit the translations provided by the model.

## Translating the Readme

We have a few README translations that live in [main/docs](https://github.com/reworkd/AgentGPT/tree/main/docs) such
as `README.zh-HANS.md`. If you'd like to translate the README to your language, make a similar file.

After doing this, add a link badge to our main english README alongside the other badges. Example:

<a href="https://github.com/reworkd/AgentGPT/blob/master/README.md"><img src="https://img.shields.io/badge/lang-English-blue.svg" alt="English"/></a>

## Translating our Documentation

This documentation is very experimental. Because of this, we have no plans to support translation just yet 😢

