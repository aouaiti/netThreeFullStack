const express = require("express");
const buildingController = require("../controllers/network.controller");

const buildingRouter = express.Router();

buildingRouter.get("/", buildingController.getBuildings);
buildingRouter.get("/:id", buildingController.getBuilding);

module.exports = buildingRouter;
