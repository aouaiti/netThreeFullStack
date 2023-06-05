const mongoose = require("mongoose");

const devicesSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    required: true,
  },
  deviceType: {
    type: String,
    required: true,
  },
  interfaces: [
    {
      name: String,
      portType: String,
      mediaType: String,
      state: String,
      vlan: [Number],
      ip: {
        type: String,
        default: null,
      },
      target: {
        type: String,
        default: null,
      },
      POE: { type: Boolean, default: false },
    },
  ],
  vlanIfs: [
    {
      name: Number,
      ip: {
        type: String,
        default: null,
      },
    },
  ],
});

module.exports = mongoose.model("Device", devicesSchema);
