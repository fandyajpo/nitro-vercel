export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  return send(event, config.NITRO_ENV);
});
