const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Will implement plan into webpage later on.

let Plan = new Schema(
  {
    user: {
      type: String,
    },
    supplements: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Supplement" }],
    },
    category: {
      type: String,
    },
  },
  {
    collection: "plans",
  }
);

module.exports = mongoose.model("Plan", Plan);
