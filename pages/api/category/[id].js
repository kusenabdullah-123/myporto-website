import querys from "../../../lib/database";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const { id } = req.query;
    if (id) {
      const result = await querys(
        "SELECT `_id`, `kategori` FROM `kategori` where _id = ?",
        [id]
      );
      if (result.length >= 0) {
        return res.status(200).json({ kategori: result });
      }
    }
  }
}
