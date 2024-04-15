import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 5000;

let notes = [];

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello from Noter"));

app.get("/v1/notes", (req, res) => {
  res.send(notes);
});

app.get("/v2/notes", (req, res) => {
  console.log(notes);
  res.send(notes);
});

app.post("/v1/notes", (req, res) => {
  const note = req.body;
  notes.push({ ...note, id: uuidv4() });
  res.send(`Created a note of title: ${note.title}`);
});

app.get("/v1/notes/:id", (req, res) => {
  const { id } = req.params;
  const note = notes.find((note) => note.id === id);

  res.send(note);
});

app.delete("/v1/notes/:id", (req, res) => {
  const { id } = req.params;

  notes = notes.filter((note) => note.id != id);

  res.send(`Note with id ${id} is deleted`);
});

app.patch("/v1/notes/:id", (req, res) => {
  const { id } = req.params;
  const { title, content, isDraft } = req.body;

  const note = notes.find((note) => note.id === id);

  if (title) {
    note.title = title;
  }

  if (content) {
    note.content = content;
  }

  if (isDraft) {
    note.isDraft = isDraft;
  }

  res.send(`Note with id: ${id} is updated with ease!`);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
