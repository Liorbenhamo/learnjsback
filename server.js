const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const exerciseRoutes = require("./routes/exerciseRoutes");
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://liorbenhamo:0502730029@cluster0.hzf3enx.mongodb.net/teachingjs?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB is Connected"))
  .catch((error) => {
    console.log("Connection Failed");
    console.log(error);
  });
app.use("/exercise", exerciseRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
