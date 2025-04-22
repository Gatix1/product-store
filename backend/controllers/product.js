import Product from "../models/product.js";
import mongoose from "mongoose";

export const postProducts = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    } 

    const newProduct = await Product.create(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, data: `Server Error: ${error.message}`});
    }
};

export const deleteProducts = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, messaeg: "Product deleted" }); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, data: `Server Error: ${error.message}`});
    }
};

export const getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, data: `Server Error: ${error.message}`});
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, data: `Server Error: ${error.message}`});
    }
};

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Product not found" });
    } 

    try {
        await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({ success: true, message: "Product updated" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, data: `Server Error: ${error.message}`});
    }
};