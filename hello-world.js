console.log("hello world");

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// var fs = require("fs");

// fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("done");
// });

// fs.readFile("welcome.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
var fs = require("fs");

fs.appendFile("password-generator.txt", "hello", function (err) {
  if (err) throw err;
  console.log("done");
});

var generator = require("generate-password");

var password = generator.generate({
  length: 10,
  numbers: true,
});

// 'uEyMTw32v9'
console.log(password);
