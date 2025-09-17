import { Request, Response } from "express";
import { products } from "../data/products";

export const addProductInCart = (req: Request, res: Response) => {
  const { id } = req.params;
  const cartProduct = products.find((item) => item.id === Number(id));

  if (cartProduct) {
    cartProduct.isInCart = true;
    res.status(201).json({ message: "Product added to cart successfully." });
  } else {
    res.status(404).json({ message: "Product not found." });
  }
};

export const removeProductInCart = (req: Request, res: Response) => {
  const { id } = req.params;
  const cartProduct = products.find((item) => item.id === Number(id));

  if (cartProduct) {
    cartProduct.isInCart = false;
    res
      .status(201)
      .json({ message: "Product removed from cart successfully." });
  } else {
    res.status(404).json({ message: "Product not found." });
  }
};

export const listProductInCart = (req: Request, res: Response) => {
  const cartItems = products.filter((item) => {
    return item.isInCart === true;
  });
  res.status(200).json(cartItems);
};
