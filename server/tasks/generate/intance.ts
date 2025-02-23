export default defineTask({
  meta: {
    name: "generate:intance",
    description: "Run logger",
  },
  async run() {
    const response = await $fetch("/intance");
    console.log(response);
    return { result: "New intance generated" };
  },
});
