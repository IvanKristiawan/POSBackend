import express from "express";
import {
  getGroupStoks,
  getGroupStokById,
  saveGroupStok,
  updateGroupStok,
  deleteGroupStok,
} from "../controllers/GroupStokController.js";

const router = express.Router();

router.get("/groupStoks", getGroupStoks);
router.get("/groupStoks/:id", getGroupStokById);
router.post("/groupStoks", saveGroupStok);
router.patch("/groupStoks/:id", updateGroupStok);
router.delete("/groupStoks/:id", deleteGroupStok);

export default router;
