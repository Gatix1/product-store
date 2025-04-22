import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.js";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js";

dotenv.config();

const app = express();

app.use(express.json()); // Allows to accept JSON in request.body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000...");
});