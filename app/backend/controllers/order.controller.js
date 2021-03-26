const User = require("../models/User");
const Order = require("../models/Order");
const utilsHelper = require("../helpers/utils.helper");

const { validationResult, check } = require("express-validator");
const validator = require("../middlewares/validation");
const { Error } = require("mongoose");

let orderController = {};

const updateStock = async (productId, qty) => {
  const product = await Product.findById(productId);
  if (product) {
    product.update({ _id: productId }, { $inc: { countInStock: -qty } });
  }
};
orderController.createOrder = async (req, res, next) => {
  try {
    const userId = req.userId;
    console.log(req.body);
    const { products, status, shipping, total } = req.body;
    validator.checkObjectId(userId);
    products.map((p) => validator.checkObjectId(p));
    //remove duplicate
    [...new Set(products)].map((p) => updateStock(p._id, p.qty));
    const order = await Order.create({
      userId,
      products,
      shipping,
      total,
    });

    utilsHelper.sendResponse(res, 200, true, { order }, null, "Order created");
  } catch (error) {
    next(error);
  }
};

orderController.updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const { userId, products, status, total, shipping } = req.body;
    let fields = {};
    if (shipping) fields.shipping = shipping;
    if (products) fields.products = products;
    if (status) fields.status = status;
    if (total) fields.total = total;

    const order = await Order.findByIdAndUpdate(
      { _id: orderId },
      { $set: fields },
      { new: true }
    );

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
    const order = await Order.find({}).populate("products").populate("userId");
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
module.exports = orderController;