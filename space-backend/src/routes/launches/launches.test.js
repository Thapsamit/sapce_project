const request = require("supertest");
const app = require("../../app");

describe("TEST GET /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("TEST POST /launches", () => {
  const completeLaunchData = {
    mission: "Kepler Exploration X",
    rocket: "Explorer IS",
    launchDate: "February 20, 2025",
    target: "Kepler-442 b",
  };

  const launchDataWithoutDate = {
    mission: "Kepler Exploration X",
    rocket: "Explorer IS",
    target: "Kepler-442 b",
  };
  test("It should respond with 201 Created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf;
    const responseDate = new Date(response.body.launchDate).valueOf;
    console.log(response.body);
    expect(requestDate).toBe(responseDate);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });
});
