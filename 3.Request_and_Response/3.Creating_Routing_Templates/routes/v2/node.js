import express from "express";
import { getNotes } from "../../controllers/v2/notes.js";

const router = express.Router();

router.get("/", getNotes);

export default router;
