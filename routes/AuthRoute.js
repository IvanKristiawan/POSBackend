const express = require("express");
const content = require("../controllers/AuthController.js");
const register = content.register;
const login = content.login;

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
