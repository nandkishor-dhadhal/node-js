import { Request, Response } from "express";
import { pool as db } from "../util/database";

export const addProduct = async (req: Request, res: Response) => {
  const { name, image, description } = req.body;

  const query = `
    INSERT INTO products (title, imageUrl, description, isInCart)
    VALUES (?, ?, ?, ?)
  `;
  const values = [name, image, description, false];

  try {
    const [result] = await db.query(query, values);
    const insertId = (result as any).insertId;

    return res.status(201).json({
      message: "Product added successfully.",
      id: insertId,
    });
  } catch (err) {
    console.error("Error inserting product:", err);
    return res.status(500).json({ message: "Error adding product." });
  }
};

export const getEditProductValue = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
    const data = (rows as any[])[0];

    if (!data) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching product:", err);
    return res.status(500).json({ message: "Error fetching product." });
  }
};

export const editProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, image, description } = req.body;

  const query = `
    UPDATE products
    SET title = ?, imageUrl = ?, description = ?
    WHERE id = ?
  `;
  const values = [name, image, description, id];

  try {
    const [result] = await db.query(query, values);

    if ((result as any).affectedRows === 0) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res.status(200).json({ message: "Product updated successfully." });
  } catch (err) {
    console.error("Error updating product:", err);
    return res.status(500).json({ message: "Error updating product." });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const query = `DELETE FROM products WHERE id = ?`;

  try {
    const [result] = await db.query(query, [id]);

    if ((result as any).affectedRows === 0) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res.status(200).json({ message: "Product deleted successfully." });
  } catch (err) {
    console.error("Error deleting product:", err);
    return res.status(500).json({ message: "Error deleting product." });
  }
};
