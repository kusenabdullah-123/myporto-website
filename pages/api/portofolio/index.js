import nextConnect from "next-connect";
import multer from "multer";
import path from "path";
import file from "../../../lib/file";
import fs from "fs";
import querys from "../../../lib/database";
import checkLogin from "../../../lib/checkLogin";
import checkOldImage from "../../../lib/checkOldImage";
import Cors from "cors";
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res, next) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(Cors());
apiRoute.use(upload.single("image"));

apiRoute.get(async (req, res) => {
  try {
    if (req.query.limit) {
      const result = await querys(
        "SELECT `_id`, `title`, `description`, `metaKeyword`, `metaDescription`, `status`, `image` FROM `portofolio` ORDER BY `_id` DESC LIMIT ?",
        [req.query.limit]
      );
      if (result.length >= 0) {
        return res.status(200).json({ portofolio: result });
      }
    }
    const result = await querys(
      "SELECT `_id`, `title`, `description`, `metaKeyword`, `metaDescription`, `status`, `image` FROM `portofolio`"
    );
    if (result.length >= 0) {
      return res.status(200).json({ portofolio: result });
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

apiRoute.post(async (req, res) => {
  try {
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
    const { title, metaDesc, metaKeyword, description } = req.body;
    const { filename } = req.file;

    const dest = path.join(__dirname, `../../../../${req.file.path}`);
    const { status } = await file.checkFile(dest);
    if (status == 200) {
      const result = await querys(
        "insert into portofolio (`title`,`description`,`metaKeyword`,`metaDescription`,`status`,`image`) VALUES (?,?,?,?,?,?)",
        [title, description, metaKeyword, metaDesc, "0", filename]
      );
      if (result.affectedRows >= 1) {
        return res.status(200).json({ status: 200, message: "success" });
      }
    }
  } catch (error) {
    if (error == 401) {
      return res.status(401).json({ status: 401, message: "Unauthorized" });
    }
    fs.unlinkSync(req.file.path);
    return res.status(415).json(error);
  }
});

apiRoute.put(async (req, res) => {
  try {
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

    const { _id, title, metaDesc, metaKeyword, description } = req.body;

    if (req.file) {
      const { filename } = req.file;

      const dest = path.join(__dirname, `../../../../${req.file.path}`);
      const { status } = await file.checkFile(dest);

      if (status == 200) {
        checkOldImage(_id, "portofolio");
        const result = await querys(
          "UPDATE `portofolio` SET `_id`=?,`title`=?,`description`=?,`metaKeyword`=?,`metaDescription`=?,`status`=?,`image`= ? WHERE `_id` = ?",
          [_id, title, description, metaKeyword, metaDesc, "0", filename, _id]
        );

        if (result.affectedRows >= 1) {
          return res.status(200).json({ status: 200, message: "success" });
        }
      }
    } else {
      const result = await querys(
        "UPDATE `portofolio` SET `_id`=?,`title`=?,`description`=?,`metaKeyword`=?,`metaDescription`=?,`status`=? WHERE `_id` = ?",
        [_id, title, description, metaKeyword, metaDesc, "0", _id]
      );
      if (result.affectedRows >= 1) {
        return res.status(200).json({ status: 200, message: "success" });
      }
    }
  } catch (error) {
    if (error == 401) {
      return res.status(401).json({ status: 401, message: "Unauthorized" });
    }
    fs.unlinkSync(req.file.path);
    return res.status(415).json(error);
  }
});

apiRoute.delete(async (req, res) => {
  try {
    const { _id } = req.body;

    const oldImage = await querys(
      "SELECT `image` FROM `portofolio` WHERE `_id` = ?",
      [_id]
    );
    const results = await querys("DELETE FROM `portofolio` WHERE `_id` = ? ", [
      _id,
    ]);

    if (results.affectedRows >= 1) {
      fs.unlinkSync(
        path.join(__dirname, `../../../../public/uploads/${oldImage[0].image}`)
      );
      return res.status(200).json({ status: 200, message: "success" });
    } else {
      return res.status(400).json({ status: 400, message: "Data Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "server error" });
  }
});
export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
