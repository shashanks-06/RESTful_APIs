import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 5000;

let notes = [];

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello from Noter"));

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.post("/notes", (req, res) => {
  const note = req.body;
  notes.push({ ...note, id: uuidv4() });
  res.send(`Created a note of title ${note.title}`);
});

app.get("/notes/:id", (req, res) => {
  const { id } = req.params;
  const note = notes.find((note) => note.id === id);

  res.send(note);
});

app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;

  notes = notes.filter((note) => note.id != id);

  res.send(`Note with id ${id} is deleted`);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
