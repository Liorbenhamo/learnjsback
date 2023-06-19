const express = require("express");
const Router = express.Router();
const exerciseController = require("../controllers/exerciseController");

Router.route("/add").post(exerciseController.add);
Router.route("/take").get(exerciseController.take);

module.exports = Router;
