// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import querys from "../../lib/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { key } = req.query;
    const { username, password } = req.body;
    const saltRounds = 5;
    if (key == "KusenaDev") {
      try {
        const pass = await bcrypt.hash(password, saltRounds);

        const { affectedRows } = await querys(
          "INSERT INTO `admin`(`nama`, `username`, `password`) VALUES (?,?,?)",
          ["KusenaDev", username, pass]
        );

        if (affectedRows > 0) {
          res.status(200).json({ status: 200, message: "user admin inserted" });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
