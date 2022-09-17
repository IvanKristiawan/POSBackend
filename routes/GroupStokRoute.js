const express = require("express");
const content = require("../controllers/GroupStokController.js");
const getGroupStoks = content.getGroupStoks;
const getGroupStokById = content.getGroupStokById;
const saveGroupStok = content.saveGroupStok;
const updateGroupStok = content.updateGroupStok;
const deleteGroupStok = content.deleteGroupStok;

const router = express.Router();

router.get("/groupStoks", getGroupStoks);
router.get("/groupStoks/:id", getGroupStokById);
router.post("/groupStoks", saveGroupStok);
router.patch("/groupStoks/:id", updateGroupStok);
router.delete("/groupStoks/:id", deleteGroupStok);

module.exports = router;
