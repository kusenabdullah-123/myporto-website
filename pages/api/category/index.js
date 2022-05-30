import querys from "../../../lib/database";
import checkLogin from "../../../lib/checkLogin";
export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      const result = await querys("SELECT `_id`, `kategori` FROM `kategori`");
      if (result.length >= 0) {
        return res.status(200).json({ kategori: result });
      }
    } catch (error) {
      return res.status(500).json({ message: "server error" });
    }
  } else if (req.method == "POST") {
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
    const { category } = req.body;
    const result = await querys(
      "INSERT INTO `kategori`(`kategori`) VALUES (?)",
      [category]
    );
    if (result.affectedRows >= 1) {
      return res.status(200).json({ status: 200, message: "success" });
    }
  } else if (req.method == "PUT") {
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
    const { _id, category } = req.body;
    console.log(req.body);
    const result = await querys(
      "UPDATE `kategori` SET `_id`=?,`kategori`=? WHERE  `kategori`.`_id` = ?",
      [_id, category, _id]
    );
    console.log(result);
    if (result.affectedRows >= 1) {
      return res.status(200).json({ status: 200, message: "success" });
    }
  } else if (req.method == "DELETE") {
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
    const { _id } = req.body;
    const result = await querys("DELETE FROM `kategori` WHERE _id = ?", [_id]);
    if (result.affectedRows >= 1) {
      return res.status(200).json({ status: 200, message: "success" });
    }
  }
}
