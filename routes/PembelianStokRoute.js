const express = require("express");
const content = require("../controllers/PembelianStokController.js");
const getPembelianStoks = content.getPembelianStoks;
const getPembelianStokById = content.getPembelianStokById;
const savePembelianStok = content.savePembelianStok;
const updatePembelianStok = content.updatePembelianStok;
const deletePembelianStok = content.deletePembelianStok;

const router = express.Router();

router.get("/pembelianStoks", getPembelianStoks);
router.get("/pembelianStoks/:id", getPembelianStokById);
router.post("/pembelianStoks", savePembelianStok);
router.patch("/pembelianStoks/:id", updatePembelianStok);
router.delete("/pembelianStoks/:id", deletePembelianStok);

module.exports = router;
