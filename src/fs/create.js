import * as fs from "fs/promises";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const filesrc = __dirname + "/files/fresh.txt";
const create = async () => {
  try {
    await fs.access(filesrc, fs.constants.W_OK);
    throw new Error("FS Operation Failed");
  } catch (err) {
    if (err.message === "FS Operation Failed") {
      throw new Error(err);
    }

    await fs.writeFile(filesrc, "I am young and fresh man", (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

await create();
