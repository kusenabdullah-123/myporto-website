// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import querys from "../../lib/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validate from "../../lib/validate";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { username, password } = req.body;
    const resultCheckLogin = validate.validateLogin({ username, password });
    if (Array.isArray(resultCheckLogin)) {
      return res.status(400).json({ status: 400, message: resultCheckLogin });
    }
    const result = await querys(
      "SELECT admin.username,admin.password FROM admin "
    );
    if (result[0].username == username) {
      const checkPass = await bcrypt.compare(password, result[0].password);

      if (checkPass) {
        const privateKey = process.env.PRIVATEKEY;
        try {
          const token = jwt.sign(
            { nama: "kusenadev", login: true },
            privateKey
          );
          return res.status(200).json({ status: 200, token, login: true });
        } catch (error) {
          console.log(error);
        }
      } else {
        return res.status(401).json({ status: 401, message: "Failed Login" });
      }
    } else {
      return res.status(401).json({ status: 401, message: "Failed Login" });
    }
  }
}
