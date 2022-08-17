import express from "express";
import { getAPembelianStok, getAPembelianStokById, saveAPembelianStok, updateAPembelianStok, deleteAPembelianStok } from "../controllers/APembelianStokController.js";

const router = express.Router();

router.get("/aPembelianStoks", getAPembelianStok);
router.get("/aPembelianStoks/:id", getAPembelianStokById);
router.post("/aPembelianStoks", saveAPembelianStok);
router.patch('/aPembelianStoks/:id', updateAPembelianStok);
router.delete('/aPembelianStoks/:id', deleteAPembelianStok);

export default router;