import express from "express";
import {
  addProduct,
  editProduct,
  deleteProduct,
  getEditProductValue
} from "../controllers/adminController";

export const router = express.Router();

router.post("/add-product", addProduct);

router.get("/edit-product/:id",getEditProductValue);

router.patch("/edit-product/:id", editProduct);

router.delete("/delete-product/:id", deleteProduct);
