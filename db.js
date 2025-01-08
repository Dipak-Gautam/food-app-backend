const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.mongoDbUrl;

mongoose.connect(mongoUrl, {
  ssl: true,
  sslValidate: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database connected");
});

db.on("error", (error) => {
  console.log("mongoDb connection error ", error);
});

db.on("disconnected", () => {
  console.log("DataBase disconnected");
});

module.exports = db;
