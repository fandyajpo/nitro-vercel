import { cachedGithubProfile } from "~/utils/githubProfile";

export default defineEventHandler({
  handler: async (event) => {
    const name = getRouterParam(event, "name");

    if (!name)
      return {
        message: "Please provide some name on github!",
      };

    const data = await cachedGithubProfile(name);
    return data;
  },
});
