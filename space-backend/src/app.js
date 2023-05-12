const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

app.use(express.json()); // check the content type
app.use(cors()); // we can also whitelist the origins to support only some specific origins

app.use(morgan("combined"));
app.use(planetsRouter);
app.use(launchesRouter);

module.exports = app;
