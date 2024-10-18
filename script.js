const http = require("http");

http
  .createServer((req, res) => {
    switch (req.url) {
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
  .listen(3000, () => {
    console.log("Server running on port 3000");
  });
