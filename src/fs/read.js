import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import { readFile } from "fs/promises";
const errMsg = "FS Operation Failed";
const file = __dirname + "/files/fileToRead.txt";
const read = async () => {
  try {
    const res = await readFile(file, { encoding: "utf-8" });
    console.log(res);
  } catch (err) {
    throw new Error(errMsg);
  }
};

await read();
