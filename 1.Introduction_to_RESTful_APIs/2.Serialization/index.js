import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // res.write({ foo: "bar" }); // Can't Serialize object Data to JSON

    res.write(JSON.stringify({ foo: "bar" })); //Serialize object Data to JSON

    console.log(JSON.parse('{"foo": "bar"}')); //Deserialize JSON to object
    //Reload page and you'll get output from server

    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");
