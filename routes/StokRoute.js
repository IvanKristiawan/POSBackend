const express = require("express");
const content = require("../controllers/StokController.js");
const getStoks = content.getStoks;
const getStokByKodeStok = content.getStokByKodeStok;
const getStokForTable = content.getStokForTable;
const getStokMainInfo = content.getStokMainInfo;
const getStokForTransaction = content.getStokForTransaction;
const getStokById = content.getStokById;
const getKodeStokNextLength = content.getKodeStokNextLength;
const saveStok = content.saveStok;
const updateStok = content.updateStok;
const deleteStok = content.deleteStok;

const router = express.Router();

router.get("/stoks", getStoks);
router.get("/stokByKodeStok/:kodeStok", getStokByKodeStok);
router.get("/stokForTable", getStokForTable);
router.get("/stokMainInfo", getStokMainInfo);
router.get("/stokForTransaction", getStokForTransaction);
router.get("/stoks/:id", getStokById);
router.get("/stoks/kodeStokNextLength/:kodeGroup", getKodeStokNextLength);
router.post("/stoks", saveStok);
router.patch("/stoks/:id", updateStok);
router.delete("/stoks/:id", deleteStok);

module.exports = router;
