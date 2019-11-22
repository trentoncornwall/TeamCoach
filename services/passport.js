const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const keys = require("../config/keys");
const db = require("../models");
const bcrypt = require('bcryptjs');

passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  db.User.findById(id).then(user => {
    done(null, user);
  })
})

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function (email, password, cb) {
    return db.User.findOne({ email})
      .then(user => {
        
        if (!user) {
          return cb(null, false, {message: 'Incorrect email or password.'});
        }
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
    
            return cb(null, user, {message: 'Logged In Sucessfully'});
          } else {
            return res
              .status(400)
              .json({ passwordincorrect: "Password incorrect" });
          }
        });
      })
  }
));

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : keys.secretOrKey
  },
  function(jwtPayload, cb) {
    return db.User.findOne({ id: jwtPayload.id })
      .then(user => {
        return cb(null, user);
      })
      .catch(err => {
        return cb(err);
      });
  }
));