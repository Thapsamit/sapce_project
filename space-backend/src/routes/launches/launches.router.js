const express = require("express");
const {
  getAllLaunches,
  httpAddNewLaunch,
  httpDeleteLaunch,
} = require("./launches.controller");
const launchesRouter = express.Router();

launchesRouter.get("/launches", getAllLaunches);
launchesRouter.post("/launches", httpAddNewLaunch);
launchesRouter.delete("/launches/:id", httpDeleteLaunch);
module.exports = launchesRouter;
