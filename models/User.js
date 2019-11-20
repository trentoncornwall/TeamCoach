const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: Number, required: true, default: 0 },
  teamID: String,
  plans: [
    {
      type: Schema.Types.ObjectId,
      ref: "Plan"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
