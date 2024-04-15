import express from "express";
import { getNotes } from "../../controllers/v2/notes.js";

const router = express.Router();

router.get("/v2/notes", getNotes);

export default router;
