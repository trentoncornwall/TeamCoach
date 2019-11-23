const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/teamcoach");

const userSeed = [
  {
    userType: 3,
    plans: [],
    fName: "Root",
    lName: "User",
    email: "admin@teamcoach.com",
    password: "$2a$10$CFpab0ry.7czDJAzi6JfBu6k3LCoFnRLbIGkf/dAPxSs26UDEfSZi",
    __v: 0
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
