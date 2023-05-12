const app = require("./app");
const http = require("http");

const PORT = process.env.PORT || 8000;

const { loadPlanetsData } = require("./models/planets.models");
const { start } = require("repl");

async function startServer() {
  await loadPlanetsData(); // to allow to load data before server listens to any requests

  server.listen(PORT, () => {
    console.log("Server is listening on port = ", PORT);
  });
}

const server = http.createServer(app);

startServer();
