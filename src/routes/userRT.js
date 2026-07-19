import  { userCreate, userUpdate, userDelete, getAllUsers } from "../controllers/userCT.js";

import express from "express";

const router = express.Router();

router.post("/", userCreate);
router.put("/:id", userUpdate);
router.delete("/:id", userDelete);
router.get("/", getAllUsers);

export default router;