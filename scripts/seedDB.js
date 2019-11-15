const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/teamcoach");

const userSeed = [
  {
    fName: "Root",
    lName: "User",
    email: "user1@gmail.com",
    password: "test",
    userType: 3,
    teamID: "ALL",
    plans: ["1"]
  },
  {
    fName: "Super",
    lName: "Virsor",
    email: "user2@gmail.com",
    password: "test",
    userType: 2,
    teamID: "ALL",
    plans: []
  },
  {
    fName: "Manager",
    lName: "Person",
    email: "user3@gmail.com",
    password: "test",
    userType: 1,
    teamID: "ALL",
    plans: []
  },
  {
    fName: "Base",
    lName: "User",
    email: "user4@gmail.com",
    password: "test",
    userType: 0,
    teamID: "ALL",
    plans: []
  },
  {
    fName: "Base2",
    lName: "User2",
    email: "user5@gmail.com",
    password: "test",
    userType: 0,
    teamID: "ALL",
    plans: []
  }
];

const teamSeed = [
  {
    teamName: "Blue Berries",
    supervisor: ["123123123"],
    users: []
  },
  {
    teamName: "Icey Box",
    supervisor: ["12321323"],
    users: []
  }
];
db.Team.remove({})
  .then(() => db.Team.collection.insertMany(teamSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

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
