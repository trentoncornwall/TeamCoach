const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.User.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(422).json(err));
  },
  createUser: (req, res) => {
    db.User.create(req.body.data)
      //* Need to add a .then to push user to teams, and plans to user
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },

  deleteUser: (req, res) => {
    //! delete by user ID
    console.log(req.body);
    db.User.deleteOne(req.body.data)
      .then(success => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  }
};
