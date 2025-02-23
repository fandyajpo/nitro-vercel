export default defineTask({
  meta: {
    name: "run:log",
    description: "Run logger",
  },
  run({ payload, context }) {
    console.log("Run Logger");
    return { result: "Success" };
  },
});
