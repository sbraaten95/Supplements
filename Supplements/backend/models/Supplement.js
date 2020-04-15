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
    purchase_url: {
      type: String,
    },
  },
  {
    collection: "supplements",
  }
);

module.exports = mongoose.model("Supplement", Supplement);
