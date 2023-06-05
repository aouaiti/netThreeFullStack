const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const nodesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  UUID: {
    type: "UUID",
    default: () => randomUUID(),
  },
  equipments: [
    {
      name: String,
      type: String,
      model: String,
      UUID: String,
      position: {
        x: Number,
        y: Number,
        z: Number,
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
    },
  ],
  vlans: [
    {
      vlan: Number,
      description: String,
      network: String,
      mask: String,
      startIp: String,
      lastIp: String,
      capacity: Number,
    },
  ],
  coords: {
    type: String,
  },
});

module.exports = mongoose.model("Node", nodesSchema);

// "name": "sw2",
// "type": "switch",
// "id": "ca1c0ea2-f623-11ed-b67e-0242ac120002",
// "interfaces": ["Ge0/0/48"],
// "position": {
//   "x": -3.701783406367899,
//   "y": 0,
//   "z": 0.3325500919727977
// }

// const { randomUUID } = require('crypto');

// const schema = new mongoose.Schema({
//   docId: {
//     type: 'UUID',
//     default: () => randomUUID()
//   }
// });
