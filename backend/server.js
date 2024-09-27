import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});
import connectDB from "./config/db.js";
import { products } from "./data/product.js";

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
