const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    shipping: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      district: { type: String },
      ward: { type: String },
      postalCode: { type: Number },
      country: { type: String, required: true },
    },
    total: { type: Number, default: 0 },
    paymentMethod: { type: String, required: true, default: "Cash" },
    paymentResults: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email: { type: String },
    },
    shippingPrice: { type: Number, default: 0 },
    coupon: { type: mongoose.Schema.Types.ObjectId, ref: "Coupon" },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isSent: { type: Boolean, required: true, default: false },
    sentAt: { type: Date },
    isDelivered: { type: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
orderSchema.plugin(require("./plugins/isDeletedFalse"));

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
