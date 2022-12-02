import { access, constants, writeFile } from "node:fs";
const file = "fresh.txt";
const create = async () => {
  access(file, constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    } else {
      writeFile(file, "I am fresh and young", (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
};

await create();
