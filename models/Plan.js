const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
  archived: { type: Boolean, default: false },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  focusArea: {
    uBehavior: String,
    dBehavior: String,
    value: String
  },
  rootCause: String,
  Weeks: []
});

const Plan = mongoose.model("Plan", PlanSchema);

module.exports = Plan;
