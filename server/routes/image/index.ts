import { createCanvas } from "@napi-rs/canvas";

export default defineEventHandler({
  handler: (event) => {
    const width = 400;
    const height = 200;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#fff";
    ctx.font = "20px Arial";
    ctx.fillText(`Fandy Dummy Image`, 50, 100);

    setHeader(event, "Content-Type", "image/png");

    return send(event, canvas.toBuffer("image/png"));
  },
});
