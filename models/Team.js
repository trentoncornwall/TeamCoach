const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  teamName: { type: String, required: true },
  supervisor: [{}],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
