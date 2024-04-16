import express from "express";
import validator from "express-validator";

import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "../../controllers/v1/notes.js";
import { authenticateJWT } from "../../controllers/v1/auth.js";

const router = express.Router();

const { body } = validator;

router.get("/", authenticateJWT, getNotes);

router.get("/:id", authenticateJWT, getNote);

router.post(
  "/",
  authenticateJWT,
  body("title").exists(),
  body("isDraft").isBoolean(),
  createNote
);

router.delete("/:id", authenticateJWT, deleteNote);

router.patch("/:id", authenticateJWT, updateNote);

export default router;
