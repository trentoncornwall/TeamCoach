const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const keys = require("./config/keys");

// Define middleware here
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport config
require("./services/passport");

// Passport Middleware
app.use(session({ secret: keys.secretOrKey, resave: false }));
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
app.use(routes);

// mongoose.connect(
//   process.env.MONGODB_URI ||
//     "mongodb://admin:teamcoach1@ds155616.mlab.com:55616/heroku_pdt46ltjh",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   }
// );

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/teamcoach", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
