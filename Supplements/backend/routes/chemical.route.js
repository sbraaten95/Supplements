const express = require("express");
const app = express();
const chemicalRoute = express.Router();

// User model
let Chemical = require("../models/chemical");

// Add User
chemicalRoute.route("/chemicals/create").post((req, res, next) => {
  console.log(req);
  Chemical.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("chemical successfully created");
      res.json(data);
    }
  });
});

// Get All chemicals
chemicalRoute.route("/chemicals").get((req, res) => {
  Chemical.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single chemical
chemicalRoute.route("/chemicals/:id").get((req, res) => {
  Chemical.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Update chemical
chemicalRoute.route("/chemicals/:id").put((req, res, next) => {
  Chemical.findByIdAndUpdate(
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

// Delete chemical
chemicalRoute.route("/chemicals/:id").delete((req, res) => {
  Chemical.deleteOne({ _id: req.params.id }, (error, data) => {
    console.log(req.params);
    if (error) {
      res.json(error);
    } else {
    }
  });
});

module.exports = chemicalRoute;
