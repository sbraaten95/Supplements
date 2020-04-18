const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Chemical = new Schema(
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
  },
  {
    collection: "chemicals",
  }
);

module.exports = mongoose.model("Chemical", Chemical);
