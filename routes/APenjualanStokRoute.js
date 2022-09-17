const express = require("express");
const content = require("../controllers/APenjualanStokController.js");
const getAPenjualanStok = content.getAPenjualanStok;
const getAPenjualanStokById = content.getAPenjualanStokById;
const getAPenjualanStokByKodeStok = content.getAPenjualanStokByKodeStok;
const getAPenjualanStokByNomorNota = content.getAPenjualanStokByNomorNota;
const saveAPenjualanStok = content.saveAPenjualanStok;
const updateAPenjualanStok = content.updateAPenjualanStok;
const deleteAPenjualanStok = content.deleteAPenjualanStok;

const router = express.Router();

router.get("/aPenjualanStoks", getAPenjualanStok);
router.get("/aPenjualanStoks/:id", getAPenjualanStokById);
router.post("/aPenjualanStokByKodeStok", getAPenjualanStokByKodeStok);
router.get(
  "/aPenjualanStokByNomorNota/:nomorNota",
  getAPenjualanStokByNomorNota
);
router.post("/aPenjualanStoks", saveAPenjualanStok);
router.patch("/aPenjualanStoks/:id", updateAPenjualanStok);
router.delete("/aPenjualanStoks/:id", deleteAPenjualanStok);

module.exports = router;
