const Coupon = require("../models/Coupon");
const utilsHelper = require("../helpers/utils.helper");

const validator = require("../middlewares/validation");
const { Error } = require("mongoose");

let couponController = {};

couponController.createCoupon = async (req, res, next) => {
  try {
    const userId = req.userId;
    if (!userId) return next(new Error("401 - User not found"));
    const {
      name,
      description,
      discount,
      validFrom,
      validUntil,
      category,
    } = req.body;
    validator.checkObjectId(userId);
    const exist = await Coupon.find({ name });
    if (exist.length > 0)
      return next(new Error("401 - Coupon name already exist"));
    const coupon = await Coupon.create({
      name,
      description,
      discount,
      validFrom,
      validUntil,
      category,
    });

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { coupon },
      null,
      "Coupon created"
    );
  } catch (error) {
    next(error);
  }
};

couponController.updateCoupon = async (req, res, next) => {
  try {
    const couponId = req.params.id;
    const {
      name,
      description,
      discount,
      validFrom,
      validUntil,
      category,
    } = req.body;
    let fields = {};
    if (name) fields.name = name;
    if (description) fields.description = description;
    if (discount) fields.discount = discount;
    if (validFrom) fields.validFrom = validFrom;
    if (validUntil) fields.validUntil = validUntil;
    if (category) fields.category = category;

    const coupon = await Coupon.findByIdAndUpdate(
      { _id: couponId },
      { $set: fields },
      { new: true }
    );

    if (!coupon) return next(new Error("401 - Coupon not found"));
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { coupon },
      null,
      "coupon updated"
    );
  } catch (error) {
    next(error);
  }
};
couponController.getSingleCoupon = async (req, res, next) => {
  try {
    const couponName = req.params.name;

    const coupon = await Coupon.find({ name: couponName, isDeleted: false });
    if (!coupon) return next(new Error("401 - Coupon not valid"));
    utilsHelper.sendResponse(res, 200, true, { coupon }, null, "coupon");
  } catch (error) {
    next(error);
  }
};

couponController.deleteCoupon = async (req, res, next) => {
  try {
    const couponId = req.params.id;

    const coupon = await Coupon.findByIdAndUpdate(
      { _id: couponId },
      { isDeleted: true },
      { new: true }
    );

    if (!coupon) return next(new Error("401 - Coupon not found"));
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { coupon },
      null,
      "Coupon Deleted"
    );
  } catch (error) {
    next(error);
  }
};

couponController.getAllCoupons = async (req, res, next) => {
  try {
    const coupons = await Coupon.find({ isDeleted: false });
    if (!coupons) return next(new Error("401 - coupons not found"));
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { coupons },
      null,
      "Get all coupons"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = couponController;
