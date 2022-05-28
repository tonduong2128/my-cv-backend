import express from "express";
import route from "./route/route.mjs";
import db from "./db/db.mjs";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
const port = 3000;

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

try {
  db.connect();
} catch (error) {
  app.use("", (req, res) => {
    res.json({ message: 0 });
  });
}

app.use(cors()); //

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
