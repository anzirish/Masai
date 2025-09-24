import { readFileData, appendFileData } from "./fileOperations.js";

(async () => {
  console.log("Initial file content:");
  await readFileData();

  await appendFileData("This is Appended data");

  console.log("Updated file content:");
  await readFileData();
})();