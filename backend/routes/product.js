import express from "express";
import { deleteProducts, getProduct, getProducts, postProducts, updateProduct } from "../controllers/product.js";

const router = express.Router();

router.post("/", postProducts);
router.delete("/:id", deleteProducts);
router.get("/:id", getProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);

export default router;