const launches = new Map();

let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer INDIA",
  launchDate: new Date("February 20, 2024"),
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch); // key, value pair

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}
function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ["India"],
      upcoming: true,
      success: true,
    })
  );
  console.log(launches);
}

function abortLaunchWithId(launchId) {
  const aborted = launches.get(launchId); // get the launch
  aborted.upcoming = false; // make it false so that it remains aborted rather deleting
  aborted.success = false;
  return aborted;
}
module.exports = {
  addNewLaunch,
  launches,
  existsLaunchWithId,
  abortLaunchWithId,
};
