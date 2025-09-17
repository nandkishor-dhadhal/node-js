import express from "express";
import {
  addProductInCart,
  listProductInCart,
  removeProductInCart,
} from "../controllers/cartController";

export const router = express.Router();

router.get("/cart", listProductInCart);

router.post("/add-in-cart/:id", addProductInCart);

router.post("/remove-from-cart/:id", removeProductInCart);
