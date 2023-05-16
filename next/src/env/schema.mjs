// @ts-check
import { z } from "zod";

const requiredForProduction = () =>
  process.env.NODE_ENV === "production"
    ? z.string().min(1).trim()
    : z.string().min(1).trim().optional();

function stringToBoolean() {
  return z.preprocess((str) => str === "true", z.boolean());
}

function stringToNumber() {
  return z.preprocess((str) => Number(str), z.number());
}

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET: requiredForProduction(),
  NEXTAUTH_URL: z.preprocess(
    // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth.js automatically uses the VERCEL_URL if present.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    process.env.VERCEL ? z.string() : z.string().url()
  ),
  OPENAI_API_KEY: z.string(),
  GOOGLE_CLIENT_ID: z.string().min(1).trim().optional(),
  GOOGLE_CLIENT_SECRET: z.string().min(1).trim().optional(),
  GITHUB_CLIENT_ID: z.string().min(1).trim().optional(),
  GITHUB_CLIENT_SECRET: z.string().min(1).trim().optional(),
  DISCORD_CLIENT_ID: z.string().min(1).trim().optional(),
  DISCORD_CLIENT_SECRET: z.string().min(1).trim().optional(),

  PLATFORM_URL: z.string().url().optional(),
  OPENAI_API_BASE: z.string().url().optional(),
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js
 * middleware, so you have to do it manually here.
 * @type {{ [k in keyof z.input<typeof serverSchema>]: string | undefined }}
 */
export const serverEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,

  PLATFORM_URL: process.env.PLATFORM_URL,
  OPENAI_API_BASE: process.env.OPENAI_API_BASE,
};

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  NEXT_PUBLIC_VERCEL_ENV: z.enum(["production", "preview", "development"]),
  NEXT_PUBLIC_WEB_SEARCH_ENABLED: stringToBoolean(),
  NEXT_PUBLIC_FORCE_AUTH: stringToBoolean(),
  NEXT_PUBLIC_FF_MOCK_MODE_ENABLED: stringToBoolean(),
  NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
  NEXT_PUBLIC_BACKEND_URL: z.string().url()
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.input<typeof clientSchema>]: string | undefined }}
 */
export const clientEnv = {
  NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV ?? "development",
  NEXT_PUBLIC_WEB_SEARCH_ENABLED: process.env.NEXT_PUBLIC_WEB_SEARCH_ENABLED,
  NEXT_PUBLIC_FORCE_AUTH: process.env.NEXT_PUBLIC_FORCE_AUTH,
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000",
  NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  NEXT_PUBLIC_FF_MOCK_MODE_ENABLED: process.env.NEXT_PUBLIC_FF_MOCK_MODE_ENABLED
};
