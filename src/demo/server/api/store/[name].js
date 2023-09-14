import fs from 'node:fs/promises';
import path from 'node:path';

export default defineEventHandler(
  (event) => {
    const name = getRouterParam(event, 'name');
    return fs.readFile(path.resolve(`server/api/store/sources/${name}.txt`));
  },
);
