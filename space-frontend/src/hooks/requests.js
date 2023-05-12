const BASE_URL = "http://localhost:8000";

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  const res = await fetch(BASE_URL + "/planets");
  return await res.json();
}

async function httpGetLaunches() {
  const res = await fetch(BASE_URL + "/launches");
  return await res.json();
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  try {
    return await fetch(`${BASE_URL}/launches`, {
      method: "post",
      body: JSON.stringify(launch),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return { ok: false };
  }

  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  try {
    return await fetch(`${BASE_URL}/launches/${id}`, {
      method: "delete",
    });
  } catch (err) {
    return { ok: false };
  }

  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
