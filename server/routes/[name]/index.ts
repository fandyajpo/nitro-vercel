import { cachedGithubProfile } from "~/utils/github";
import { getRouterParam } from "#imports";

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");
  const data = await cachedGithubProfile(event, name);
  return data;
});
