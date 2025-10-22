import path from "path";

export const getFileInfo = (filePath) => {
  return {
    fileName: path.basename(filePath),
    extension: path.extname(filePath),
    directory: path.dirname(filePath),
  };
};