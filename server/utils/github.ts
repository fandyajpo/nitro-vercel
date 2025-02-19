import type { H3Event } from "h3";
import { useRuntimeConfig } from "#imports";

export const cachedGithubProfile = defineCachedFunction(
  async (event: H3Event, name: string) => {
    const GITHUB_TOKEN = useRuntimeConfig(event).GITHUB_TOKEN;
    return await $fetch(`https://api.github.com/users/${name}`, {
      headers: {
        Authorization: "Bearer " + GITHUB_TOKEN,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  },
  {
    maxAge: 60 * 60,
    name: "githubProfile",
    getKey: (event: H3Event, name: string) => name,
  }
);
