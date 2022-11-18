import Cors from "cors";
import nextConnect from "next-connect";
import multer from "multer";
import path from "path";
import file from "../../../lib/file";
import fs from "fs";
import querys from "../../../lib/database";
import checkLogin from "../../../lib/checkLogin";
// import checkOldImage from "../../../lib/checkOldImage";
import { uploadImage, destroyImage } from "../../../lib/cloudinary";

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
        "SELECT `blogs`.`_id`,`blogs`.`title`,`blogs`.`description`,`blogs`.`date`,`blogs`.`image`,`blogs`.`status`,`kategori`.`kategori` FROM blogs JOIN kategori ON `blogs`.`kategori_id` = `kategori`.`_id` ORDER BY `blogs`.`_id` DESC LIMIT ?;",
        [req.query.limit]
      );
      if (result.length >= 0) {
        return res.status(200).json({ blogs: result });
      }
    }
    const result = await querys(
      "SELECT `blogs`.`_id`,`blogs`.`title`,`blogs`.`description`,`blogs`.`date`,`blogs`.`image`,`blogs`.`status`,`kategori`.`kategori` FROM blogs JOIN kategori ON `blogs`.`kategori_id` = `kategori`.`_id`"
    );
    if (result.length >= 0) {
      return res.status(200).json({ blogs: result });
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
    console.log(req.body);
    const {
      title,
      metaDescription,
      metaKeyword,
      description,
      date,
      content,
      category_id,
    } = req.body;

    const dest = path.join(__dirname, `../../../../${req.file.path}`);
    const { status } = await file.checkFile(dest);
    if (status == 200) {
      const { public_id, secure_url } = await uploadImage(dest);
      if (public_id) {
        const result = await querys(
          "INSERT INTO `blogs`(`title`, `metaKeyword`, `metaDescription`, `description`, `date`, `publicId`, `image`, `content`, `status`,`kategori_id`) VALUES (?,?,?,?,?,?,?,?,?,?)",
          [
            title,
            metaKeyword,
            metaDescription,
            description,
            date,
            public_id,
            secure_url,
            content,
            "0",
            category_id,
          ]
        );
        if (result.affectedRows >= 1) {
          fs.unlinkSync(req.file.path);
          return res.status(200).json({ status: 200, message: "success" });
        }
      } else {
        return res
          .status(500)
          .json({ status: 500, message: "Upload Image Error" });
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

    const {
      _id,
      title,
      metaDescription,
      metaKeyword,
      description,
      date,
      content,
      category_id,
    } = req.body;

    if (req.file) {
      const dest = path.join(__dirname, `../../../../${req.file.path}`);
      const { status } = await file.checkFile(dest);

      if (status == 200) {
        const { public_id, secure_url } = await uploadImage(dest);
        if (public_id) {
          const result = await querys(
            "UPDATE `blogs` SET `_id`=?,`title`=?,`metaKeyword`=?,`metaDescription`=?,`description`=?,`date`=?, `publicId`=?,`image`=?,`content`=?,`status`=?,`kategori_id` = ? WHERE `_id` = ?",
            [
              _id,
              title,
              metaKeyword,
              metaDescription,
              description,
              date,
              public_id,
              secure_url,
              content,
              "0",
              category_id,
              _id,
            ]
          );

          if (result.affectedRows >= 1) {
            fs.unlinkSync(req.file.path);
            return res.status(200).json({ status: 200, message: "success" });
          }
        } else {
          return res
            .status(500)
            .json({ status: 500, message: "Upload Image Error" });
        }
      }
    } else {
      const result = await querys(
        "UPDATE `blogs` SET `_id`=?,`title`=?,`metaKeyword`=?,`metaDescription`=?,`description`=?,`date`=?,`content`=?,`status`=?,`kategori_id` = ? WHERE `_id` = ?",
        [
          _id,
          title,
          metaKeyword,
          metaDescription,
          description,
          date,
          content,
          "0",
          category_id,
          _id,
        ]
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
    const publicId = await querys(
      "SELECT `publicId` FROM `blogs` WHERE `_id` = ?",
      [_id]
    );

    const { result } = await destroyImage(publicId[0].publicId);

    if (result == "ok") {
      await querys("DELETE FROM `blogs` WHERE `_id` = ? ", [_id]);
      return res.status(200).json({ status: 200, message: "success" });
    } else {
      return res.status(400).json({ status: 400, message: "Data Not Found" });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: "server error" });
  }
});
export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
