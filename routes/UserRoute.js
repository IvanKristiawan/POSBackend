const express = require("express");
const content = require("../controllers/UserController.js");
const content2 = require("../utils/verifyToken.js");
const updateUser = content.updateUser;
const deleteUser = content.deleteUser;
const getUser = content.getUser;
const getUsers = content.getUsers;
const verifyUser = content2.verifyUser;
const verifyUserSPV = content2.verifyUserSPV;
const router = express.Router();

// UPDATE
router.put("/:id", verifyUser, updateUser);
// DELETE
router.post("/deleteUser/:id", verifyUserSPV, deleteUser);
// GET
router.post("/:id", verifyUser, getUser);
// GET ALL
router.post("/", verifyUserSPV, getUsers);

module.exports = router;
