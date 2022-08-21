import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/UserController.js";
import { verifyUser, verifyUserSPV } from "../utils/verifyToken.js";
const router = express.Router();

// UPDATE
router.put("/:id", verifyUserSPV, updateUser);
// DELETE
router.delete("/:id", verifyUserSPV, deleteUser);
// GET
router.post("/:id", verifyUser, getUser);
// GET ALL
router.get("/", verifyUserSPV, getUsers);

export default router;
