const path = require("path");

function getModel(req, res) {
  const model = req.params.id + ".js";
  res.sendFile(path.join(__dirname, "..", "models", "threeDmodels", model));
}

module.exports = { getModel };
