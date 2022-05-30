import querys from "../../../lib/database";
import checkLogin from "../../../lib/checkLogin";
import initMiddleware from "../../../lib/init-middleware";
import Cors from "cors";
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors()
);
export default async function handler(req, res) {
  await cors(req, res);
  if (req.method == "GET") {
    const { id } = req.query;
    const result = await querys("select * from portofolio where `_id` = ?", [
      id,
    ]);

    return res.status(200).json({ data: result });
  }
  if (req.method == "PATCH") {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.split(" ")[1];
      const isLogin = await checkLogin(token);
      if (isLogin.login !== true) {
        return res.status(401).json({ status: 401, message: "Unauthorized" });
      }
    } else {
      return res.status(401).json({ status: 401, message: "Unauthorized" });
    }
    const { id } = req.query;
    const { status } = req.body;
    const result = await querys(
      "UPDATE `portofolio` SET `status`= ? WHERE `_id`= ?",
      [status, id]
    );
    return res.status(200).json({ status: 200, message: "Success Updated" });
  }
}
