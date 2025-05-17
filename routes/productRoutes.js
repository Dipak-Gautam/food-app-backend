const express = require("express");
const router = express.Router();
const Product = require("../modals/products");
const { jwtAuthMiddleWare } = require("./../jwt");

router.post("/add", jwtAuthMiddleWare, async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = new Product(productData);
    const response = await newProduct.save();

    res.status(200).json({ message: "Data saved sucessfully", data: response });
  } catch (error) {
    console.log("product/add", error);
    res.status(500).json(error);
  }
});

router.get("/all", jwtAuthMiddleWare, async (req, res) => {
  try {
    const products = await Product.find();
    res
      .status(200)
      .json({ message: "Products fetched successfully", data: products });
  } catch (error) {
    console.log("product/all", error);
    res.status(500).json(error);
  }
});

router.get("/all-unauth", async (req, res) => {
  try {
    const products = await Product.find();
    res
      .status(200)
      .json({ message: "Products fetched successfully", data: products });
  } catch (error) {
    console.log("product/all", error);
    res.status(500).json(error);
  }
});

router.get("/get", jwtAuthMiddleWare, async (req, res) => {
  try {
    const data = req.body;
    const catogery = data.catogery;
    const products = await Product.find({ category: catogery });
    res
      .status(200)
      .json({ message: "Products fetched successfully", data: products });
  } catch (error) {
    console.log("product/get", error);
    res.status(500).json(error);
  }
});

router.delete("/", jwtAuthMiddleWare, async (req, res) => {
  try {
    const data = req.body.id;
    const response = await Product.findByIdAndDelete(data);
    res.status(200).json({ message: "Item deleted sucessfully" });
  } catch (error) {
    console.log("product/delete", error);
    res.status(500).json(error);
  }
});

router.patch("/", jwtAuthMiddleWare, async (req, res) => {
  try {
    const { id, ...updateData } = req.body;

    const response = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!response) {
      return res.status(404).json({ message: "Product not found" });
    }

    res
      .status(200)
      .json({ message: "Product updated successfully", data: response });
  } catch (error) {
    console.log("product/update", error);
    res.status(500).json(error);
  }
});

module.exports = router;
