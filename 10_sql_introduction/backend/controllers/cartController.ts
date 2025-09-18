import { Request, Response } from "express";
import { pool as db } from "../util/database";

export const addProductInCart = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = "UPDATE products SET isInCart = ? WHERE id = ?";
  const values = [1, id];
  try {
    const [result] = await db.query(query, values);

    if ((result as any).affectedRows === 0) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res
      .status(200)
      .json({ message: "Product added to cart successfully." });
  } catch (error) {
    console.log("Error updating product:", error);
    return res.status(500).json({ message: "Error updating product." });
  }
};

export const removeProductInCart = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = "UPDATE products SET isInCart = ? WHERE id = ?";
  const values = [0, id];

  try {
    const [result] = await db.query(query, values);

    if ((result as any).affectedRows === 0) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res
      .status(200)
      .json({ message: "Product removed from cart successfully." });
  } catch (error) {
    console.log("Error updating product:", error);
    return res.status(500).json({ message: "Error updating product." });
  }
};

export const listProductInCart = async (req: Request, res: Response) => {
  const query = "SELECT * FROM products WHERE isInCart = ?";
  try {
    const [rows] = await db.query(query, [1]);
    const data = rows as any[];

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ message: "Error fetching products." });
  }
};
