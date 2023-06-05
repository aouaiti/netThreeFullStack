const express = require("express");
const modelController = require("../controllers/threeDmodel.controller");

const modelRouter = express.Router();

modelRouter.get("/:id", modelController.getModel);

module.exports = modelRouter;
