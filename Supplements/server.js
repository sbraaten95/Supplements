let express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  dbConfig = require("./server_database/db");

// Connecting with mongo db
mongoose.Promise = global.Promise;
herokuDB =
  "mongodb://sbraaten95:Melvin9463!@ds031721.mlab.com:31721/heroku_q9l0f8l0";
mongoose
  .connect(herokuDB || dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected");
    },
    (error) => {
      console.log("Database could not connected: " + error);
    }
  );

// Setting up port with express js
const userRoute = require("./server_routes/user.route");
const suppRoute = require("./server_routes/supplement.route");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.use("/api", userRoute);
app.use("/api", suppRoute);

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://boiling-woodland-09126.herokuapp.com"
  );
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
