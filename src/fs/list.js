import * as url from "url";
import { access, readdir } from "fs/promises";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const errMsg = "FS Operation Failed";
const folder = __dirname + "/files";
const result = [];
const list = async () => {
  try {
    await access(folder);
    const files = await readdir(folder);
    Promise.all(
      files.map((i) => {
        result.push(i);
      })
    );
    console.log("Files:\n", result);
  } catch (err) {
    throw new Error(errMsg);
  }
};

await list();
