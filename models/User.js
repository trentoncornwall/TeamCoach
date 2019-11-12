const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: Number, required: true, default: 0 },
  teamID: String,
  plans: []
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
