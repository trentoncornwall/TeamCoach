const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

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
    console.log(req.body.data);
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

  deleteUser: (req, res) => {
    const query = req.body;
    console.log("query", query._id);
    db.User.deleteOne(query)
      .then(() => {
        return db.Team.findOneAndUpdate({}, { $pull: { users: query._id } });
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
        console.log(data);
        res.send(data);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  //! LOGIN ///////////////////////////////////////////////
  checkLogin: (req, res) => {
    db.User.findOne({email: req.body.data.user})
      .then(user => {
        if(!user) {
          return res.status(404).json({ emailnotfound: "Email not found" });
        }
        bcrypt.compare(req.body.data.password, user.password).then(isMatch => {
          if (isMatch) {
            //User Matched
            // Create JWT Payload
            const payload = {
              id: user._id,
              name: user.email
            };
            
            // Sign token
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: 31556926 // 1 year in seconds
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            return res.status(400).json({ passwordincorrect: "Password incorrect" });
          }
        })
      })
  }
};
