import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello from Noter"));

app.get("/notes", (req, res) => {
  res.send("All Notes");
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
