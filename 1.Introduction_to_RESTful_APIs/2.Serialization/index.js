import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write({ foo: "bar" }); // Can't Serialize object Data to JSON
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");
