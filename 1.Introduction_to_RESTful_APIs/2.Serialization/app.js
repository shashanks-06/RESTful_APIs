import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ foo: "bar" }); // Express ("send" done Serialization)  Serialize object Data to JSON
});

app.listen(3000, console.log("Listening on port 3000..."));
