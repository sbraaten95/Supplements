const express = require("express");
const app = express();
const supplementRoute = express.Router();

// User model
let Supplement = require("../models/Supplement");

// Add User
supplementRoute.route("/supplements/create").post((req, res, next) => {
  Supplement.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("supplement successfully created");
      res.json(data);
    }
  });
});

// Get All Supplements
supplementRoute.route("/supplements").get((req, res) => {
  Supplement.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single Supplement
supplementRoute.route("/supplements/:id").get((req, res) => {
  Supplement.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Update Supplement
supplementRoute.route("/supplements/:id").put((req, res, next) => {
  Supplement.findByIdAndUpdate(
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

// Delete Supplement
supplementRoute.route("/delete/:id").delete((req, res) => {
  Supplement.deleteOne({ _id: req.params.id }, (error, data) => {
    console.log(req.params);
    if (error) {
      res.json(error);
    } else {
    }
  });
});

module.exports = supplementRoute;
