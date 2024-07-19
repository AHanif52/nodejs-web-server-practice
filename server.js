// console.log("Halo, kita akan membuat server");
const http = require("http");

// logika untuk menangani dan menaggapi request ditulisakan pada gfunsi ini

// @param request : objek yang berisikan informasi terkait permintaan
// @param response: objek yang digunkan untuk menanggapi permintaan

const requestListener = (request, response) => {
  response.setHeader("content-Type", "text/html");
  response.statusCode = 200;

  const { method, url } = request;

  if (method === "GET") {
    response.end("<h1>Halo HTTP server!</h1>");
  }

  if (method === "POST") {
    response.end("<h1>Hai! ini adalah method POST</h1>");
  }

  if (method === "PUT") {
    response.end("<h1>Hai! ini adalah method PUT</h1>");
  }

  if (method === "DELETE") {
    response.end("<h1>Hai! ini adalah method DELETE</h1>");
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
