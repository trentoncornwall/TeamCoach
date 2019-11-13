const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.User.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(422).json(err));
  },
  CreateUser: (req, res) => {
    console.log(req.body);

    db.User.create({
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
      password: req.body.password,
      userType: parseInt(req.body.userType),
      teamID: req.body.teamID,
      plans: []
    })
      .then(res => res.send("OKAY!"))
      .catch(err => res.send(err));

    //TEST WORKS ______\/____
    // db.User.create({
    //   fName: "testFirstName",
    //   lName: "testLastName",
    //   password: "testPassword",
    //   userType: 0,
    //   teamID: "testTeamID",
    //   plans: []
    // })
    //   .then(res => console.log("OKAY!"))
    //   .catch(err => console.log(err));
  }
};
