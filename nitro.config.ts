//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  errorHandler: "~/error",
  compatibilityDate: "2025-02-16",
  experimental: {
    asyncContext: true,
  },
  runtimeConfig: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN, // `dev_token` is the default value
  },
  $meta: { name: "Fandy Nitro" },
});
