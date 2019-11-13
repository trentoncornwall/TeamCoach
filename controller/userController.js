const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.User.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(422).json(err));
  },

  CreateUser: (req, res) => {
    console.log(req.body.data);
    db.User.create(req.body.data)
      .then(dbUser => res.json(dbUser))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },

  deleteUser: (req, res) => {
    const query = req.body;
    console.log("query", query);
    db.User.deleteOne(query)
      .then(success => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  }
};
