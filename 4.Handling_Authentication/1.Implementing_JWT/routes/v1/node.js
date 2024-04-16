import express from "express";
import validator from "express-validator";

import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "../../controllers/v1/notes.js";

const router = express.Router();

const { body } = validator;

router.get("/", getNotes);

router.get("/:id", getNote);

router.post(
  "/",
  body("title").exists(),
  body("isDraft").isBoolean(),
  createNote
);

router.delete("/:id", deleteNote);

router.patch("/:id", updateNote);

export default router;
