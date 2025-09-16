const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>My First Node js code</title></head>");
    res.write("<body>");
    res.write("<form method='POST' action='/message'>");
    res.write("<input type='text' name='message'>");
    res.write("<button>Send</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  res.write("<html>");
  res.write("<head>");
  res.write("<title>My First Node js code</title></head>");
  res.write("<body>");
  res.write("<h1>Hello my first node js code</h1>");
  res.write("</body>");
  res.write("</html>");
};
exports.handler = requestHandler;
exports.someText = "Some hard coded text";

// module.exports = requestHandler;

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";

// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text",
// };
