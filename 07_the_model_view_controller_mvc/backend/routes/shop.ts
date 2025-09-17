import express from "express";
import { listProduct, productDetails } from "../controllers/productController";

export const router = express.Router();

router.get("/products", listProduct);

router.post("/products/:id", productDetails);
