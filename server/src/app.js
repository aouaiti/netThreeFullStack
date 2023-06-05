const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const buildingRouter = require("./routers/network.router");
const modelRouter = require("./routers/model.router");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("combined"));
app.use(express.json());
app.use("/network", buildingRouter);
app.use("/model", modelRouter);

module.exports = app;
