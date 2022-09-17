const express = require("express");
const content = require("../controllers/PenjualanStokController.js");
const getPenjualanStoks = content.getPenjualanStoks;
const getPenjualanStokForKlerekan = content.getPenjualanStokForKlerekan;
const getPenjualanStoksCount = content.getPenjualanStoksCount;
const getPenjualanStokById = content.getPenjualanStokById;
const savePenjualanStok = content.savePenjualanStok;
const updatePenjualanStok = content.updatePenjualanStok;
const deletePenjualanStok = content.deletePenjualanStok;

const router = express.Router();

router.get("/penjualanStoks", getPenjualanStoks);
router.get("/penjualanStoksCount", getPenjualanStoksCount);
router.post("/penjualanStokForKlerekan", getPenjualanStokForKlerekan);
router.get("/penjualanStoks/:id", getPenjualanStokById);
router.post("/penjualanStoks", savePenjualanStok);
router.patch("/penjualanStoks/:id", updatePenjualanStok);
router.delete("/penjualanStoks/:id", deletePenjualanStok);

module.exports = router;
