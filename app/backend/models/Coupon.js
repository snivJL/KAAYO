const mongoose = require("mongoose");

const couponSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    discount: { type: Number, required: true },
    validFrom: { type: Date, required: true },
    validUntil: { type: Date, required: true },
    categories: {
      type: Array,
      default: ["All"],
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
