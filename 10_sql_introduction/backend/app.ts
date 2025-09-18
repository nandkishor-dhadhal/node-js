import bodyParser from "body-parser";
import express from "express";

import cors from "cors";

import { router as adminRoutes } from "./routes/admin";
import { router as shopRoutes } from "./routes/shop";
import { router as cartRoutes } from "./routes/cart";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(adminRoutes);
app.use(shopRoutes);
app.use(cartRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
