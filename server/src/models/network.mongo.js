const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const networksSchema = new mongoose.Schema({
  networkName: {
    type: Number,
    required: true,
  },
  UUID: {
    type: "UUID",
    default: () => randomUUID(),
  },
});

module.exports = mongoose.model("Network", networksSchema);

// const { randomUUID } = require('crypto');

// const schema = new mongoose.Schema({
//   docId: {
//     type: 'UUID',
//     default: () => randomUUID()
//   }
// });
