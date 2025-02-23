export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig();
  console.log("Nitro plugin", config);
});
