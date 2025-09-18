import express from "express";
import {
  addProductInCart,
  listProductInCart,
  removeProductInCart,
} from "../controllers/cartController";

export const router = express.Router();

router.get("/cart", listProductInCart);

router.patch("/add-in-cart/:id", addProductInCart);

router.patch("/remove-from-cart/:id", removeProductInCart);
