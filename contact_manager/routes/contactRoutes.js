import express from "express";
import {
  createContact,
  deleteContact,
  getContactById,
  getContacts,
  updateContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.route("/").get(getContacts).post(createContact);

router.route("/:id").put(updateContact);

router.route("/:id").get(getContactById).delete(deleteContact);

export default router;
