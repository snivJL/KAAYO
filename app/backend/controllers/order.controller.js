const User = require("../models/User");
const Coupon = require("../models/Coupon");
const Order = require("../models/Order");
const Product = require("../models/Product");
const utilsHelper = require("../helpers/utils.helper");
const email = require("../helpers/email");
const { validationResult, check } = require("express-validator");
const validator = require("../middlewares/validation");
const { Error } = require("mongoose");

let orderController = {};

const updateStock = async (p) => {
  console.log("updating stock", p);
  const product = await Product.findById(p);
  console.log("Product - stock", product.name, product.countInStock);

  // if (product) {
  const updatedProduct = await Product.findByIdAndUpdate(
    { _id: product._id },
    { $inc: { countInStock: -1 } },
    { new: true }
  );
  console.log(updatedProduct);
  // }
  console.log("Product stock updated", product);
};

orderController.createOrder = async (req, res, next) => {
  try {
    const userId = req.body.user._id;
    const guestOrder = userId === undefined ? true : false;
    const couponId = req.body.validCoupon ? req.body.validCoupon._id : null;
    if (couponId) validator.checkObjectId(couponId.toString());

    if (guestOrder) {
      console.log("gusrt Order");
      const { products, shipping, total } = req.body;
      await products.map((p) => {
        updateStock(p);
      });
      const order = await Order.create({
        products,
        shipping,
        total,
        coupon: couponId,
      });
      utilsHelper.sendResponse(
        res,
        200,
        true,
        { order },
        null,
        "Order created"
      );
    } else {
      console.log("member Order");

      const { products, shipping, total, user } = req.body;
      validator.checkObjectId(userId);
      products.map((p) => validator.checkObjectId(p));
      await products.map((p) => {
        updateStock(p);
      });
      const order = await Order.create({
        userId,
        products,
        shipping,
        total,
        coupon: couponId,
      });

      utilsHelper.sendResponse(
        res,
        200,
        true,
        { order },
        null,
        "Order created"
      );
      email.sendOrderConfirmation(order, user);
      email.sendAlertEmail(order, user);
    }
  } catch (error) {
    next(error);
  }
};

orderController.updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const {
      userId,
      products,
      status,
      total,
      shipping,
      isSent,
      isPaid,
      isDelivered,
    } = req.body;
    let fields = {};
    if (shipping) fields.shipping = shipping;
    if (products) fields.products = products;
    if (status) fields.status = status;
    if (total) fields.total = total;
    if (isSent) {
      fields.isSent = isSent;
      fields.sentAt = Date();
    }
    if (isDelivered) {
      fields.isDelivered = isDelivered;
      fields.deliveredAt = Date();
    }
    if (isPaid) {
      fields.isPaid = isPaid;
      fields.paidAt = Date();
    }
    const order = await Order.findByIdAndUpdate(
      { _id: orderId },
      { $set: fields },
      { new: true }
    ).populate("products");

    if (!order) return next(new Error("401 - Order not found"));
    utilsHelper.sendResponse(res, 200, true, { order }, null, "Order updated");
  } catch (error) {
    next(error);
  }
};

orderController.deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findByIdAndUpdate(
      { _id: orderId },
      { isDeleted: true },
      { new: true }
    );

    if (!order) return next(new Error("401 - Order not found"));
    utilsHelper.sendResponse(res, 200, true, { order }, null, "Order Deleted");
  } catch (error) {
    next(error);
  }
};

orderController.getAllOrders = async (req, res, next) => {
  try {
    const order = await Order.find({})
      .populate("products")
      .populate("userId")
      .sort({ createdAt: -1 });
    if (!order) return next(new Error("401 - Order not found"));
    utilsHelper.sendResponse(res, 200, true, { order }, null, "Get all orders");
  } catch (error) {
    next(error);
  }
};

orderController.getSingleOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId)
      .populate("products")
      .populate("userId");
    if (!order) return next(new Error("401 - Order not found"));
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { order },
      null,
      "Get single order"
    );
  } catch (error) {
    next(error);
  }
};

orderController.getAllOrders = async (req, res, next) => {
  try {
    let { page } = req.query;
    page = parseInt(page) || 1;
    const limit = 10;
    const totalOrders = await Order.countDocuments({
      isDeleted: false,
    });

    console.log("total orders", totalOrders);

    const totalPages = Math.ceil(totalOrders / limit);
    console.log("totalpages", totalPages);

    const offset = limit * (page - 1);
    console.log("offset", offset);

    const order = await Order.find({})
      .populate("products")
      .populate("userId")
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    if (!order) return next(new Error("401 - Order not found"));
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { order, page, totalPages, totalOrders },
      null,
      "Get all orders"
    );
  } catch (error) {
    next(error);
  }
};

orderController.updateOrderToPay = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (!order) return next(new Error("401 - Order not found"));
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { updatedOrder },
      null,
      "Order updated to paid"
    );
  } catch (error) {
    next(error);
  }
};

orderController.applyCoupon = async (req, res, next) => {
  try {
    const { couponName, cart } = req.body;
    const coupon = await Coupon.findOne({ name: couponName, isDeleted: false });
    if (!coupon) return next(new Error("401 - Coupon does not exist"));
    if (!coupon.categories.includes("All")) {
      return;
    }
    const datetime = new Date();
    if (
      datetime.getTime() > coupon.validUntil.getTime() ||
      datetime.getTime() < coupon.validFrom.getTime()
    ) {
      return next(new Error("401 - Coupon is not valid"));
    }
    utilsHelper.sendResponse(res, 200, true, { coupon }, null, "Coupon valid!");
  } catch (error) {
    next(error);
  }
};
module.exports = orderController;
