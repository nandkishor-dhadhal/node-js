import path from "path";
import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";

export const router = express.Router();

export const products: { title: string }[] = [];

router.get(
  "/add-product",
  (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
  }
);

router.post(
  "/add-product",
  (req: Request, res: Response, next: NextFunction) => {
    products.push({ title: req.body.title });
    res.redirect("/");
  }
);

