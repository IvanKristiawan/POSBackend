import express from "express";
import {
  getAPenjualanStok,
  getAPenjualanStokById,
  getAPenjualanStokByKodeStok,
  saveAPenjualanStok,
  updateAPenjualanStok,
  deleteAPenjualanStok,
} from "../controllers/APenjualanStokController.js";

const router = express.Router();

router.get("/aPenjualanStoks", getAPenjualanStok);
router.get("/aPenjualanStoks/:id", getAPenjualanStokById);
router.post("/aPenjualanStokByKodeStok", getAPenjualanStokByKodeStok);
router.post("/aPenjualanStoks", saveAPenjualanStok);
router.patch("/aPenjualanStoks/:id", updateAPenjualanStok);
router.delete("/aPenjualanStoks/:id", deleteAPenjualanStok);

export default router;
