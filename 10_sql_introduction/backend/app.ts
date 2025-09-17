import bodyParser from "body-parser";
import express from "express";

import cors from "cors";
import { pool as db } from "./util/database";

const app = express();

app.use(cors());

db.execute("SELECT * FROM products")
  .then((result: any[]) => {
  })
  .catch((err : any) => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


