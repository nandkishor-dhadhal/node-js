import { Request, Response } from "express";
import { pool as db } from "../util/database";

export const listProduct = async (req: Request, res: Response) => {
  const query = "SELECT * from products";
  try {
    const [rows] = await db.query(query);
    const data = rows as any[];
    if (data.length === 0) {
      return res.status(404).json({ message: "No products found." });
    }
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ message: "Error fetching products." });
  }
};

export const productDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = "SELECT * FROM products WHERE id = ?";
  const value = [id];

  try {
    const [rows] = await db.query(query, value);
    const data = (rows as any[])[0];

    if (!data) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({ message: "Error fetching product." });
  }
};

