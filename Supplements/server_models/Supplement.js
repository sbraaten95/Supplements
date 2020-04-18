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
  },
  {
    collection: "supplements",
  }
);

module.exports = mongoose.model("Supplement", Supplement);
