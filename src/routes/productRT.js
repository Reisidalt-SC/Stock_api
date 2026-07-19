import { productCreate, productUpdate, productDelete, getAllProducts } from "../controllers/productCT.js";
import express from "express";


const router = express.Router();

router.post("/", productCreate);
router.put("/:id", productUpdate);
router.delete("/:id", productDelete);
router.get("/", getAllProducts);


export default router;