import express from "express";
import bodyParser from "body-parser";
import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "./controllers/v1/note.js";
import { getNotes } from "./controllers/v2/notes.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello from Noter"));

app.get("/v1/notes", getNotes);
app.get("/v1/notes/:id", getNote);
app.post("/v1/notes", createNote);
app.delete("/v1/notes/:id", deleteNote);
app.patch("/v1/notes/:id", updateNote);

app.get("/v2/notes", getNotes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
