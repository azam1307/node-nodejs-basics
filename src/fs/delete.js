import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import { access, unlink } from "fs/promises";
const file = __dirname + "/files/fileToRemove.txt";
const errMsg = "FS operation failed";
const remove = async () => {
  try {
    await access(file);

    await unlink(file);
    console.log("Success");
  } catch (err) {
    throw new Error(errMsg);
  }
};

await remove();
