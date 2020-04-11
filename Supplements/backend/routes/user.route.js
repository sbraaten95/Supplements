const express = require("express");
const app = express();
const userRoute = express.Router();

// User model
let User = require("../models/User");

// Add User
userRoute.route("/users/register").post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("user successfully created");
      res.json(data);
    }
  });
});

userRoute.route("/users/login").post((req, res) => {
  User.find({ email: req.body.email }, (error, data) => {
    if (error) {
      return res.json(error);
    } else {
      res.json(data);
    }
  });
});

// Get All Users
userRoute.route("/users").get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single User
userRoute.route("/users/:id").get((req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Update User
userRoute.route("/update/:id").put((req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Data updated successfully");
      }
    }
  );
});

// Delete User
userRoute.route("/delete/:id").delete((req, res) => {
  User.deleteOne({ _id: req.params.id }, (error, data) => {
    console.log(req.params);
    if (error) {
      res.json(error);
    } else {
    }
  });
});

module.exports = userRoute;
