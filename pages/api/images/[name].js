import path from "path";
import fs from "fs";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const dest = path.join(__dirname, "../../../../../public/uploads/");
    const { name } = req.query;
    const image = fs.readFileSync(`${dest}${name}`);
    res.setHeader("Content-Type", "image/webp");
    return res.send(image);
  }
}
