const { planets } = require("../../models/planets.models");
const getAllPlanets = (req, res) => {
  return res.status(200).send(planets);
};

module.exports = { getAllPlanets };
