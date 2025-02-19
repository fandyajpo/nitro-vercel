import { cachedGithubProfile } from "~/utils/github";
import { getRouterParam } from "#imports";

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");

  if (!name)
    return {
      message: "Please provide some name on github!",
    };

  const data = await cachedGithubProfile(event, name);
  return data;
});
