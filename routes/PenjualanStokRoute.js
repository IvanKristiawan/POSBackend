import express from "express";
import {
  getPenjualanStoks,
  getPenjualanStokForKlerekan,
  getPenjualanStoksCount,
  getPenjualanStokById,
  savePenjualanStok,
  updatePenjualanStok,
  deletePenjualanStok,
} from "../controllers/PenjualanStokController.js";

const router = express.Router();

router.get("/penjualanStoks", getPenjualanStoks);
router.get("/penjualanStoksCount", getPenjualanStoksCount);
router.post("/penjualanStokForKlerekan", getPenjualanStokForKlerekan);
router.get("/penjualanStoks/:id", getPenjualanStokById);
router.post("/penjualanStoks", savePenjualanStok);
router.patch("/penjualanStoks/:id", updatePenjualanStok);
router.delete("/penjualanStoks/:id", deletePenjualanStok);

export default router;
