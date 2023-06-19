const Exercise = require("../models/Exercise");

exports.add = async (req, res) => {
  try {
    const newExercise = new Exercise(req.body);
    await newExercise.save();
    res.send(newExercise);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
exports.take = async (req, res) => {
  try {
    let data = await Exercise.find();
    res.send(data);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
