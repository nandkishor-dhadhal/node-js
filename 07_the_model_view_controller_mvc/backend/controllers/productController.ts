import { Request, Response } from "express";
import { products } from "../data/products";

export const listProduct = (req: Request, res: Response) => {
  res.status(200).json(products);
  console.log(products);
};

export const productDetails = (req: Request, res: Response) => {
  const { id } = req.params;
  const product = products.find((item) => item.id === Number(id));
  if (product) {
    res.status(200).json(product);
  } else {
    return res.status(404).json({ message: "Product not found." });
  }
};
