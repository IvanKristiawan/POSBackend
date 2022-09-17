const express = require("express");
const content = require("../controllers/SupplierController.js");
const getSuppliers = content.getSuppliers;
const getSuppliersNextLength = content.getSuppliersNextLength;
const getSupplierForTable = content.getSupplierForTable;
const getSupplierMainInfo = content.getSupplierMainInfo;
const getSupplierById = content.getSupplierById;
const saveSupplier = content.saveSupplier;
const updateSupplier = content.updateSupplier;
const deleteSupplier = content.deleteSupplier;

const router = express.Router();

router.get("/suppliers", getSuppliers);
router.get("/suppliersNextLength", getSuppliersNextLength);
router.get("/supplierForTable", getSupplierForTable);
router.get("/supplierMainInfo", getSupplierMainInfo);
router.get("/suppliers/:id", getSupplierById);
router.post("/suppliers", saveSupplier);
router.patch("/suppliers/:id", updateSupplier);
router.delete("/suppliers/:id", deleteSupplier);

module.exports = router;
