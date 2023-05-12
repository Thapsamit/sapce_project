const {
  launches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchWithId,
} = require("../../models/launches.models");

const getAllLaunches = (req, res) => {
  return res.status(200).json(Array.from(launches.values())); // this will give json type key value pair instead of map data type
};

const httpAddNewLaunch = (req, res) => {
  const launch = req.body;

  launch.launchDate = new Date(launch.launchDate);
  addNewLaunch(launch);
  return res.status(201).json(Array.from(launches.values()));
};

const httpDeleteLaunch = (req, res) => {
  const launchId = parseInt(req.params.id);
  // if no launchId
  if (!existsLaunchWithId(launchId)) {
    return res.status(404).json({ error: "Launch not found" });
  }

  // else exits the abort
  const aborted = abortLaunchWithId(launchId);
  if (aborted) {
    return res.status(200).json(aborted);
  }
};

module.exports = { getAllLaunches, httpAddNewLaunch, httpDeleteLaunch };
