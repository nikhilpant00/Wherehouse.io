const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

function startServer() {
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

startServer();
