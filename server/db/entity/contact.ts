import * as mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true, lowercase: true },
    phone: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    methods: {
      speak() {
        console.log(`${this.email}!`);
      },
    },
  }
);

export type Contact = mongoose.InferSchemaType<typeof schema>;
export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", schema);
