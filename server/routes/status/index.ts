export default defineEventHandler((event) => {
  return send(event, process.env.NITRO_ENV);
});
