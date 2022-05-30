import fs from "fs";
import path from "path";
import querys from "./database";
const checkOldImage = async (_id, table) => {
  const oldImage = await querys(`SELECT image FROM ${table} WHERE _id = ?`, [
    _id,
  ]);
  const destFile = path.join(
    __dirname,
    `../../../../public/uploads/${oldImage[0].image}`
  );
  const isFile = fs.existsSync(destFile);

  if (isFile) {
    fs.unlinkSync(destFile);
  }
};
export default checkOldImage;
