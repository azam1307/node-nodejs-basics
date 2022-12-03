import * as url from "url";
import { access, copyFile, mkdir, readdir } from "fs/promises";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const srcFolder = __dirname + "/files";
const copyFolder = __dirname + "/files_copy";
const errMsg = "FS Operation Failed";
const copy = async () => {
  try {
    await access(copyFolder);
    throw new Error(errMsg);
  } catch (err) {
    try {
      if (err.message === errMsg) {
        throw new Error(err);
      }
      const srcFiles = await readdir(srcFolder);
      await mkdir(copyFolder);
      await Promise.all(
        srcFiles.map((file) => {
          copyFile(`${srcFolder}/${file}`, `${copyFolder}/${file}`);
        })
      );
      console.log(`Success`);
    } catch (err) {
      throw new Error(errMsg);
    }
  }
};

await copy();
