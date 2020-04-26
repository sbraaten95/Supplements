const express = require("express");
const app = express();
const planRoute = express.Router();

// Will incorporate this later.

// Plan model
let Plan = require("../server_models/Plan");
let Supplement = mongoose.model("Supplement");

// Add Plan
planRoute.route("/plans/create").post((req, res, next) => {
  Plan.create(req.body, (error, data) => {
    console.log("here");
    if (error) {
      return next(error);
    } else {
      console.log("Plan successfully created");
      res.json(data);
    }
  });
});

// Get All Plans
planRoute.route("/plans").get((req, res) => {
  Plan.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single Plan
planRoute.route("/plans/:id").get((req, res) => {
  Plan.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Update Plan
planRoute.route("/plans/:id").put((req, res, next) => {
  Plan.findByIdAndUpdate(
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

// Delete Plan
planRoute.route("/plans/:id").delete((req, res) => {
  Plan.deleteOne({ _id: req.params.id }, (error, data) => {
    console.log(req.params);
    if (error) {
      res.json(error);
    } else {
    }
  });
});

module.exports = planRoute;
