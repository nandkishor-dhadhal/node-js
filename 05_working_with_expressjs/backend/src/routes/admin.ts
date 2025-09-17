import express from "express";
import { products } from "../data/products";

export const router = express.Router();

router.post("/add-product", (req, res) => {
  const { name, image, description } = req.body;
  products.push({ name, image, description });
  res.status(201).json({ message: "Product added successfully." });
});
export { products };
