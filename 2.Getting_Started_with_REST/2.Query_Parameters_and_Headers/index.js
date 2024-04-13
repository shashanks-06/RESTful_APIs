import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

let notes = [
  {
    title: "Sample Note",
    content: "A note should have a content",
    isDraft: true,
  },
  {
    title: "Sample Note 2",
    content: "A content should have a Note",
    isDraft: true,
  },
];

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello from Noter"));

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.post("/create", (req, res) => {
  console.log(req.body);
  res.send("Created a note");
});

app.get("/note/:id", (req, res) => {
  console.log(req.params);
  res.send("A Note");
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
