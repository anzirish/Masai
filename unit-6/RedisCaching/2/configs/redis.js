import Redis from "ioredis";

export const redisClient = new Redis({
  host: process.env.REDIS_HOST_URI,
  port: process.env.REDIS_PORT,
});

redisClient.on("connect", () => console.log("ioredis is connected!!!"));
redisClient.on("error", (err) => console.log("ioredis error", err));
