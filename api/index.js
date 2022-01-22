const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to mongo"))
  .catch((err) => {
    console.log(err);
  });
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("3000", () => {
  console.log("backend is running");
});

module.exports = app;
