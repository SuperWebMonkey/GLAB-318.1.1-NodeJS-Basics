/**
 *
 * Use npm run dev to start the app using nodemon
 *
 */

const http = require("http");
const hostname = "127.0.0.1";
const PORT = 3000;

http
  .createServer((req, res) => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
    switch (req.url) {
      case "/":
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write("<p>I wonder what else we can send...</p>");
        break;

      case "/test":
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("Hello World, this is my first server!");
        break;

      case "/self-destruct":
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("This server will blow up in 5 seconds ");
        break;

      case "/are-you-a-coffee-pot":
        res.statusCode = 418;
        res.setHeader("Content-Type", "text/html");
        res.write("No, I'm a teapot");
        break;

      default:
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.write("Not Found");
    }
    res.end();
  })
  .listen(PORT, () => {
    console.log("Server running on port 3000");
  });
