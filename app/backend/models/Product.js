const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    title: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    shortDesc: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: [{ type: String, required: true }],
    target: {
      type: String,
      enum: ["Combination", "Dry Skin", "Oily Skin", "Sensitive Skin"],
    },
    category: [
      {
        type: String,
        enum: [
          "Milk Soap",
          "Clay Soap",
          "Charcoal Soap",
          "Butter Soap",
          "Spice Soap",
          "Baby Soap",
          "Shampoo Bar",
          "Lip Balm",
          "Body Butter",
        ],
        required: true,
      },
    ],
    productCollection: { type: String },
    images: [{ imageUrl: { type: String, required: true } }],
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
