import fs from "fs-extra";
import { resolve } from "path";

export const loadEvents = (name: string) => {
  const path = resolve(__dirname, `../events/${name}.json`);
  return fs.readJSON(path);
};
