const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

let User = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

// User.methods.generateHash = function (password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
// };

// User.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };

// User.pre("save", function (done) {
//   this.password = this.generateHash(this.password);
//   done();
// });

module.exports = mongoose.model("User", User);
