const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

module.exports = {
  //! USERS ///////////////////////////////////////////

  findAll: (req, res) => {
    db.User.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(422).json(err));
  },

  findOne: (req, res) => {
    db.User.find({ _id: req.params.user })
      .then(userData => res.json(userData))
      .catch(err => res.status(422).json(err));
  },

  CreateUser: (req, res) => {
    db.User.create(req.body.data)
      .then(dbUser => {
        return db.Team.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { users: dbUser._id } },
          { new: false }
        );
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },

  updateUser: (req, res) => {
    db.User.findOneAndUpdate({ _id: req.params.user }, req.body.data)
      .then(() => {
        return db.Team.updateMany({}, { $pull: { users: req.params.user } });
      })
      .then(() => {
        return db.Team.findOneAndUpdate(
          { _id: req.body.data.teamID },
          { $push: { users: req.params.user } },
          { new: false }
        );
      })
      .then(success => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  deleteUser: (req, res) => {
    const query = req.body;
    db.User.deleteOne(query)
      .then(() => {
        return db.Team.findOneAndUpdate({}, { $pull: { users: query._id } });
      })
      .then(() => {
        return db.Plan.findOneAndUpdate({}, { $pull: { users: query._id } });
      })
      .then(success => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  //! TEAMS /////////////////////////////////////////////

  allTeams: (req, res) => {
    db.Team.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(422).json(err));
  },
  getOneTeam: (req, res) => {
    db.Team.find({ _id: req.params.id })
      .then(teamData => {
        res.json(teamData);
      })
      .catch(err => res.status(400).json(err));
  },
  updateTeam: (req, res) => {
    db.Team.findOneAndUpdate({ _id: req.params.id }, req.body.data).then(
      success => {
        res.sendStatus(200);
      }
    );
  },

  createTeam: (req, res) => {
    db.Team.create(req.body.data)
      .then(dbTeam => res.json(dbTeam))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  getTeamUsers: (req, res) => {
    db.Team.find({})
      .populate("users")
      .then(userData => res.json(userData))
      .catch(err => res.status(422).json(err));
  },
  //! PLANS ////////////////////////////////////////////////

  createPlan: (req, res) => {
    db.Plan.create(req.body.data)
      .then(dbPlan => {
        return db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { plans: dbPlan._id } },
          { new: true }
        );
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },

  getPlan: (req, res) => {
    db.Plan.find({ _id: req.params.id })
      .then(planData => res.json(planData))
      .catch(err => res.status(422).json(err));
  },

  updatePlan: (req, res) => {
    db.Plan.findOneAndUpdate({ _id: req.params.id }, req.body.data)
      .then(planData => res.json(planData))
      .catch(err => res.status(422).json(err));
  },

  //! LOGIN ///////////////////////////////////////////////
  checkLogin: (req, res) => {
    res.json(req.user);
  },

  checkUser: (req, res) => {
    res.json(req.user);
  },

  logOut: (req, res) => {
    req.logout();
    res.redirect("/");
  }
};
