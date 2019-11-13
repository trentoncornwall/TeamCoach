const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/teamcoach");

const userSeed = [
  {
    fName: "Root",
    lName: "User",
    email: "ROOT@ROOT.com",
    password: "test",
    userType: 3,
    teamID: "ALL",
    plans: ["1"]
  },
  {
    fName: "Super",
    lName: "Virsor",
    email: "SuperVIRsor",
    password: "test",
    userType: 2,
    teamID: "ALL",
    plans: []
  },
  {
    fName: "Manager",
    lName: "Person",
    email: "MANAGER",
    password: "test",
    userType: 1,
    teamID: "ALL",
    plans: []
  },
  {
    fName: "Base",
    lName: "User",
    email: "BASE",
    password: "test",
    userType: 0,
    teamID: "ALL",
    plans: []
  },
  {
    fName: "Base2",
    lName: "User2",
    email: "BASE2",
    password: "test",
    userType: 0,
    teamID: "ALL",
    plans: []
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
