const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
  archived: { type: Boolean, default: false },
  subject: String,
  ownerID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  focusArea: {
    uBehavior: String,
    dBehavior: String,
    value: String
  },
  rootCause: String,
  Weeks: [
    // {
    //   weekNumber: 0,
    //   planning: "",
    //   coach: "",
    //   employee: "",
    //   results: ""
    // }
  ]
  // endDate: { type: Date, required: true },
  // startDate: { type: Date, required: true },
});

const Plan = mongoose.model("Plan", PlanSchema);

module.exports = Plan;
