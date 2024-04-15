import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.listen(PORT, console.log(`Server listening on PORT: ${PORT}`));
