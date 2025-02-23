import { connect } from "mongoose";

export const cachedMongoConnection = defineCachedFunction(
  async (name: string) => {
    return await connect("");
  },
  {
    name: "mongoConnection",
    getKey: (name: string) => "name",
  }
);
