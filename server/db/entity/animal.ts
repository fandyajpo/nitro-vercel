import * as mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sound: { type: String, required: true },
  },
  {
    methods: {
      speak() {
        console.log(`${this.sound}!`);
      },
    },
  }
);

export type Animal = mongoose.InferSchemaType<typeof schema>;
export const Animal =
  mongoose.models.Animal || mongoose.model("Animal", schema);
