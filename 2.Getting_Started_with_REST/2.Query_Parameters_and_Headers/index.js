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

app.post("/create", (req, res) => {
  const note = req.body;
  notes.push({ ...note, id: uuidv4() });
  res.send(`Created a note of title ${note.title}`);
});

app.get("/note/:id", (req, res) => {
  console.log(req.params);
  res.send("A Note");
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
