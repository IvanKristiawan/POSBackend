import express from "express";
import { getPembelianStoks, getPembelianStokById, savePembelianStok, updatePembelianStok, deletePembelianStok } from "../controllers/PembelianStokController.js";

const router = express.Router();

router.get('/pembelianStoks', getPembelianStoks);
router.get('/pembelianStoks/:id', getPembelianStokById);
router.post('/pembelianStoks', savePembelianStok);
router.patch('/pembelianStoks/:id', updatePembelianStok);
router.delete('/pembelianStoks/:id', deletePembelianStok);

export default router;