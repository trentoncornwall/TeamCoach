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
  teamName: "Alfa",
  supervisor: ["Manager Person"],
  users: ["User One Alfa","User Two Alfa", "User Three Alfa", "User Four Alfa", "User Five Alfa"]
}, 
{
  teamName: "Bravo",
  supervisor: ["Super Virsir"],
  users: ["User One Bravo","User Two Bravo", "User Three Bravo", "User Four Bravo", "User Five Bravo"]
}, 
{
  teamName: "Charlie",
  supervisor: ["Super Virsir"],
  users: ["User One Charlie","User Two Charlie", "User Three Charlie", "User Four Charlie", "User Five Charlie"]
}, 
{
  teamName: "Delta",
  supervisor: ["Super Virsir"],
  users: ["User One Delta","User Two Delta", "User Three Delta", "User Four Delta", "User Five Delta"]
}, 

]
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
