import path from "path";
import express, { Request, Response, NextFunction } from "express";

import { products } from "./admin";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(products);
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});

export default router;
