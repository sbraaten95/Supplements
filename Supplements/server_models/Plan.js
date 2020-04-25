const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
