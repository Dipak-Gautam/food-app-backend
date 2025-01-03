const express = require("express");
const app = express();
require("dotenv").config();
require("./db");
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const port = process.env.PORT;

app.get("/", function (req, res) {
  res.send("hello from server of food app developed by dipak");
});

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);
const productRoutes = require("./routes/productRoutes");
app.use("/product", productRoutes);
const orderRoutes = require("./routes/orderRoutes");
app.use("/order", orderRoutes);

app.listen(3123, "0.0.0.0", () => {
  console.log("listening on port 3123");
});
