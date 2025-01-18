const express = require("express");
const router = express.Router();
const Delivery = require("../modals/delivery");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newDelivery = new Delivery(data);
    await newDelivery.save();
    res.status(200).json("delivery saved sucessfully");
  } catch (error) {
    console.log("delivery/post", error);
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Delivery.find();
    res.status(200).json(data);
  } catch (error) {
    console.log("delivery/post", error);
    res.status(500).json(error);
  }
});

module.exports = router;
