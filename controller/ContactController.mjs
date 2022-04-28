import db from "../db/db.mjs"
import mysql_real_escape_string from "../util/mysql_real_escape_string.mjs";
export default {
    show: async (req, res) => {
        var data;
        req.query.id = mysql_real_escape_string(req.query.id);
        if (req.query.id) {
            data = await db.execute(`SELECT * FROM tbl_contact WHERE idInformation= ${req.query.id}`);
        } else {
            data = await db.execute("SELECT * FROM tbl_contact ");
        }
        res.json(data);
    },
    create: async (req, res) => {
        const data = req.body;
        
        data.name = mysql_real_escape_string(data.name);
        data.img = mysql_real_escape_string(data.img);
        data.title = mysql_real_escape_string(data.title);
        data.description = mysql_real_escape_string(data.description);

        const query = `INSERT INTO tbl_contact (name, img, title, description) VALUES ('${data.name}', '${data.img}', '${data.title}', '${data.description}');`;
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

        id = mysql_real_escape_string(id);
        data.name = mysql_real_escape_string(data.name);
        data.img = mysql_real_escape_string(data.img);
        data.title = mysql_real_escape_string(data.title);
        data.description = mysql_real_escape_string(data.description);

        const query = `UPDATE tbl_contact SET name = '${data.name}', img = '${data.img}' , title = '${data.title}' , description = '${data.description}' WHERE id =${id};`;
        try {
            await db.execute(query);
            res.json({ message: 1 });
        } catch (error) {
            res.json({ message: 0 });
        }
    },
    delete: async (req, res) => {
        const id = req.query.id;

        id = mysql_real_escape_string(id);
        const query = `DELETE FROM tbl_contact WHERE id =${id};`;
        try {
            await db.execute(query);
            res.json({ message: 1 });
        } catch (error) {
            res.json({ message: 0 });
        }
    }
}
