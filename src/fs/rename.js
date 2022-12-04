import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import * as fs from 'fs/promises'
const errMsg = "FS Operation Failed";
const filePath = __dirname + "/files/wrongFilename.txt";
const newFile = __dirname + "/files/properFilename.md";
const rename = async () => {
  try {
    await fs.access(filePath);
    await fs.rename(filePath, newFile);
    console.log(`Success`);
  } catch (err) {
    throw new Error(errMsg);
  }
};

await rename();
