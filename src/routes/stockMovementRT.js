import { stockMovementCreate, stockMovementUpdate, stockMovementDelete, getAllStockMovements } from "../controllers/stockMovementCT.js";

import express from "express";

const router = express.Router();

router.post("/", stockMovementCreate);
router.put("/:id", stockMovementUpdate);
router.delete("/:id", stockMovementDelete);
router.get("/", getAllStockMovements);

export default router;