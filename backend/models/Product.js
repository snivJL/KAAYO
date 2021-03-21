const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: [{ type: String, required: true }],
    category: [
      {
        type: String,
        enum: [
          "Face Soap",
          "Body Soap",
          "Baby Soap",
          "Shampoo Bar",
          "Lip balm",
          "Body Butter",
        ],
        required: true,
      },
    ],
    images: [{ imageUrl: { type: String, required: true } }],
    reviews: [
      {
        rating: { type: Number, default: null },
        comment: { type: String, default: null },
      },
      { timestamps: true },
    ],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
