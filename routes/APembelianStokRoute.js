const express = require("express");
const content = require("../controllers/APembelianStokController.js");
const getAPembelianStok = content.getAPembelianStok;
const getAPembelianStokById = content.getAPembelianStokById;
const saveAPembelianStok = content.saveAPembelianStok;
const updateAPembelianStok = content.updateAPembelianStok;
const deleteAPembelianStok = content.deleteAPembelianStok;

const router = express.Router();

router.get("/aPembelianStoks", getAPembelianStok);
router.get("/aPembelianStoks/:id", getAPembelianStokById);
router.post("/aPembelianStoks", saveAPembelianStok);
router.patch("/aPembelianStoks/:id", updateAPembelianStok);
router.delete("/aPembelianStoks/:id", deleteAPembelianStok);

module.exports = router;
