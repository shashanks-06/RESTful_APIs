import express from "express";
import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "../../controllers/v1/notes.js";

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNote);
router.post("/", createNote);
router.delete("/:id", deleteNote);
router.patch("/:id", updateNote);

export default router;
