import express from "express";
import {
  getAllUser,
  getUserById,
  saveUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUser);
router.get("/userbyid/:id", getUserById);
router.post("/users", saveUser);
router.patch("/updateuser/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
