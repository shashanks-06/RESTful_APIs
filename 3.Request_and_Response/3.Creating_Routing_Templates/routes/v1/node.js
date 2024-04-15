import express from "express";
import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "../../controllers/v1/notes.js";

const router = express.Router();

router.get("/v1/notes", getNotes);
router.get("/v1/notes/:id", getNote);
router.post("/v1/notes", createNote);
router.delete("/v1/notes/:id", deleteNote);
router.patch("/v1/notes/:id", updateNote);

export default router;
