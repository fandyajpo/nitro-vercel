//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  errorHandler: "~/error",
  compatibilityDate: "2025-02-16",
  experimental: {
    tasks: true,
    asyncContext: true,
  },
  runtimeConfig: {
    NITRO_ENV:
      process.env.NITRO_ENV === "development"
        ? process.env.NITRO_ENV
        : "production",
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    JOSE_SECRET: process.env.JOSE_SECRET,
    VERCEL_BYPASS_TOKEN: process.env.VERCEL_BYPASS_TOKEN,
  },
  vercel: { config: { bypassToken: process.env.VERCEL_BYPASS_TOKEN } },
});
