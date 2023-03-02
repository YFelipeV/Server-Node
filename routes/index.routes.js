import { Router } from "express";
import {
  getAdmin,
  deleteAdmin,
  getAdminId,
  postAdmin,
  putAdmin,
} from "../controllers/listcontrollers.js";
const router = Router();

router.get("/admin", getAdmin);
router.get("/admin/:id", getAdminId);
router.post("/admin", postAdmin);
router.put("/admin/:id", putAdmin);
router.delete("/admin/:id", deleteAdmin);

export default router;
