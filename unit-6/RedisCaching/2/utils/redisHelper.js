import { redisClient } from "../configs/redis.js";

export const setBooksToRedis = async (id, books) => {
  return await redisClient.set(`books:${id}`, JSON.stringify(books));
};

export const getBooksFromRedis = async (id) => {
  const books = await redisClient.get(`books:${id}`);
  return JSON.parse(books);
};

export const invalidateRedisCache = async (id) => {
  await redisClient.del(`books:${id}`);
};

export const insertInBulk = async (id, data) => {
  return await redisClient.set(`books:bulk:${id}`, JSON.stringify(data));
};

export const getBulkData = async (id) => {
  const books = await redisClient.get(`books:bulk:${id}`);
  await redisClient.del(`books:bulk:${id}`) // must
  return JSON.parse(books);
};
