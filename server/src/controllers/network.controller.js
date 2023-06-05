const model = require("../models/network.model");

function getBuildings(req, res) {
  res.send(model.buildings);
}
function getBuilding(req, res) {
  res.send(model.buildings[parseInt(req.params.id)]);
}

module.exports = { getBuildings, getBuilding };
