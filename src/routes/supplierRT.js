import { supplierCreate, supplierUpdate, supplierDelete, getAllSuppliers } from "../controllers/supplierCT.js";

import express from "express";

const router = express.Router();

router.post("/", supplierCreate);
router.put("/:id", supplierUpdate);
router.delete("/:id", supplierDelete);
router.get("/", getAllSuppliers);

export default router;