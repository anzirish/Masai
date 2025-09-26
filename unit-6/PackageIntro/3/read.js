import { promises as fs } from "fs";

export const dataHandler = async () => {
  try {
    const data = await fs.readFile("data.txt", "utf-8");
    return data;
  } catch (error) {
    console.log(error);
    return "";
  }
};
