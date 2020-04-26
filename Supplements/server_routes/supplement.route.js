const express = require("express");
const app = express();
const supplementRoute = express.Router();

// Supplement model
let Supplement = require("../server_models/Supplement");

// Add Supplement
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

// Get supplements that match depression criteria
supplementRoute.route("/supplements/depression").get((req, res) => {
  Supplement.find({ depression: { $gte: 5 } }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Get supplements that match anxiety criteria
supplementRoute.route("/supplements/anxiety").get((req, res) => {
  Supplement.find({ anxiety: { $gte: 5 } }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Get supplements that match sleep criteria
supplementRoute.route("/supplements/sleep").get((req, res) => {
  Supplement.find({ sleep: { $gte: 5 } }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Get supplements that match productivity criteria
supplementRoute.route("/supplements/productivity").get((req, res) => {
  Supplement.find({ productivity: { $gte: 5 } }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Get supplements that match heartHealth criteria
supplementRoute.route("/supplements/heartHealth").get((req, res) => {
  Supplement.find({ heartHealth: { $gte: 5 } }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Get supplements that match immuneSystem criteria
supplementRoute.route("/supplements/immuneSystem").get((req, res) => {
  Supplement.find({ immuneSystem: { $gte: 5 } }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Get supplements that match exercise criteria
supplementRoute.route("/supplements/exercise").get((req, res) => {
  Supplement.find({ exercise: { $gte: 5 } }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Get supplements that match memory criteria
supplementRoute.route("/supplements/memory").get((req, res) => {
  Supplement.find({ memory: { $gte: 5 } }, (error, data) => {
    if (error) {
      console.log(error);
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
supplementRoute.route("/supplements/:id").delete((req, res) => {
  Supplement.deleteOne({ _id: req.params.id }, (error, data) => {
    if (error) {
      res.json(error);
    } else {
    }
  });
});

module.exports = supplementRoute;
