import { promises as fs } from "fs";

export const readFileData = async () => {
  try {
    const data = await fs.readFile("data.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const appendFileData = async (newData) => {
  console.log("Appending data.....");

  try {
    await fs.appendFile("data.txt", `\n${newData}`, "utf-8");
  } catch (error) {
    console.log(error);
  }
};
