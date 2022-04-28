import db from "../db/db.mjs"
import mysql_real_escape_string from "../util/mysql_real_escape_string.mjs";
export default {
  show: async (req, res) => {
    var data;
    req.query.id = mysql_real_escape_string(req.query.id);
    if (req.query.id) {
      data = await db.execute(`SELECT * FROM tbl_information WHERE id= ${req.query.id} LIMIT 1`);
    } else {
      data = await db.execute("SELECT * FROM tbl_information ");
    }
    res.json(data);
  },
  create: async (req, res) => {
    const data = req.body;
    const query = `INSERT INTO tbl_information (name, img, title, description) VALUES ('${data.name}', '${data.img}', '${data.title}', '${data.description}');`;
    try {
      await db.execute(query);
      res.json({ message: 1 });
    } catch (error) {
      res.json({ message: 0 });
    }
  },
  update: async (req, res) => {
    const data = req.body;
    const id = req.query.id;
    const query = `UPDATE tbl_information SET name = '${data.name}', img = '${data.img}' , title = '${data.title}' , description = '${data.description}' WHERE id =${id};`;
    try {
      await db.execute(query);
      res.json({ message: 1 });
    } catch (error) {
      res.json({ message: 0 });
    }
  },
  delete: async (req, res) => {
    const id = req.query.id;
    const query = `DELETE FROM tbl_information WHERE id =${id};`;
    try {
      await db.execute(query);
      res.json({ message: 1 });
    } catch (error) {
      res.json({ message: 0 });
    }
  }
}
