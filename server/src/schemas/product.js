import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  Stock: Number,
});

mongoose.model("productSchema", productSchema);
