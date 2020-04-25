const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Supplement = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    purchaseUrl: {
      type: String,
    },
    depression: {
      type: Number,
    },
    anxiety: {
      type: Number,
    },
    sleep: {
      type: Number,
    },
    productivity: {
      type: Number,
    },
    heartHealth: {
      type: Number,
    },
    immuneSystem: {
      type: Number,
    },
    exercise: {
      type: Number,
    },
    memory: {
      type: Number,
    },
  },
  {
    collection: "supplements",
  }
);

module.exports = mongoose.model("Supplement", Supplement);
