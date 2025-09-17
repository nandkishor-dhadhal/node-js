import { Request, Response } from "express";
import { products } from "../data/products";

export const addProduct = (req: Request, res: Response) => {
  const { name, image, description } = req.body;
  const isInCart = false;
  const id = Date.now();
  products.push({ name, image, description, isInCart, id });

  res.status(201).json({ message: "Product added successfully.", id });
};

export const getEditProductValue = (req: Request, res: Response) => {
  const { id } = req.params;
  const getValueForEdit = products.find((item) => item.id === Number(id));
  if (getValueForEdit) {
    return res.status(200).json(getValueForEdit);
  } else {
    return res.status(404).json({ message: "Product not found." });
  }
};

export const editProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, image, description } = req.body;

  const changeProduct = products.find((item) => item.id === Number(id));
  if (changeProduct) {
    changeProduct.name = name;
    changeProduct.image = image;
    changeProduct.description = description;
    return res.status(200).json({ message: "Product updated successfully." });
  } else {
    return res.status(404).json({ message: "Product not found." });
  }
};

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id === Number(id));

  if (index !== -1) {
    products.splice(index, 1);
    return res.status(200).json({ message: "Product deleted successfully." });
  } else {
    return res.status(404).json({ message: "Product not found." });
  }
};
