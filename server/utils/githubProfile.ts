export const cachedGithubProfile = defineCachedFunction(
  async (name: string) => {
    const response = await fetch(`https://api.github.com/users/${name}`, {
      headers: {
        Authorization: "Bearer " + useRuntimeConfig(useEvent()).GITHUB_TOKEN,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const result = await response.json();
    return result;
  },
  {
    maxAge: 60 * 60,
    name: "githubProfile",
    getKey: (name: string) => name,
  }
);
