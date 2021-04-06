const express = require("express");
const router = express.Router();
const couponController = require("../controllers/coupon.controller");
const authMiddleware = require("../middlewares/auth");
const validators = require("../middlewares/validation");
const { check } = require("express-validator");

/**
 * @route POST api/coupon/add
 * @description User can create coupon
 * @access Admin required
 */
router.post(
  "/add",
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  validators.validate([
    check("name").notEmpty().withMessage("Name is required"),
    check("description").notEmpty().withMessage("Description is required"),
    check("discount").notEmpty().withMessage("discount is required"),
    check("validFrom").notEmpty().withMessage("validFrom is required"),
    check("validUntil").notEmpty().withMessage("validUntil is required"),
  ]),
  couponController.createCoupon
);
/**
 * @route PUT api/coupon/:id
 * @description User can update coupon
 * @access Admin required
 */
// router.put(
//   "/:id/update",
//   authMiddleware.loginRequired,
//   authMiddleware.adminRequired,
//   couponController.updateCoupon
// );
/**
 * @route GET api/coupon
 * @description User can see all coupons
 * @access Public
 */
router.get("/", couponController.getAllCoupons);

/**
 * @route GET api/coupon/:name
 * @description User can check coupon validity
 * @access Login required
 */
router.get(
  "/:name",
  authMiddleware.loginRequired,
  couponController.getSingleCoupon
);

/**
 * @route DELETE api/coupon/:id/delete
 * @description Admin can delete coupon
 * @access Admin required
 */
router.delete(
  "/:id/delete",
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  couponController.deleteCoupon
);

module.exports = router;
