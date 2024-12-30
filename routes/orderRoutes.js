const express = require("express");
const router = express.Router();
const Order = require("../modals/order");
const { jwtAuthMiddleWare } = require("./../jwt");

router.post("/add", jwtAuthMiddleWare, async (req, res) => {
  try {
    const data = req.body;
    const newOrder = new Order(data);
    const response = await newOrder.save();
    res
      .status(200)
      .json({ message: "Order saved sucessfully", data: response });
  } catch (error) {
    console.log("order/add", error);
    res.status(500).json(error);
  }
});

router.delete("/delete", jwtAuthMiddleWare, async (req, res) => {
  try {
    const id = req.body.id;
    await Order.findByIdAndDelete(id);
    res.status(200).json({ message: "Order deleted sucessfully" });
  } catch (error) {
    console.log("order/delete", error);
    res.status(500).json(error);
  }
});

router.get("/all", jwtAuthMiddleWare, async (req, res) => {
  try {
    const response = await Order.find();
    res.status(200).json(response);
  } catch (error) {
    console.log("order/delete", error);
    res.status(500).json(error);
  }
});

module.exports = router;
