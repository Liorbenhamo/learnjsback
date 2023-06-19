const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  exercisename: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  startfunc: {
    type: String,
    required: true,
  },
  hints: [
    {
      type: String,
      required: false,
    },
  ],
  examples: [
    {
      input: { type: String, required: false },
      output: { type: String, required: false },
    },
  ],
});
module.exports = mongoose.model("Exercise", exerciseSchema);
