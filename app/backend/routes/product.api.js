const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const authMiddleware = require("../middlewares/auth");
const validators = require("../middlewares/validation");
const { check } = require("express-validator");

//
/**
 * @route GET api/product?page=1&limit=10
 * @description User can see list of all products
 * @access Public
 */
router.get("/", productController.getAllProducts);

/**
 * @route GET api/product/:id
 * @description User can see one single product
 * @access Public
 */
router.get("/:id", productController.getSingleProduct);

/**
 * @route POST api/product/add
 * @description Admin can add product
 * @access Admin Required
 */
router.post(
  "/add",
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  validators.validate([
    check("name").notEmpty().withMessage("Name is required"),
    check("description").notEmpty().withMessage("Description is required"),
    check("price").notEmpty().withMessage("Price is required"),
    check("ingredients").notEmpty().withMessage("Ingredient is required"),
    check("stock").notEmpty().withMessage("Stock is required"),
    check("images")
      .isArray({ min: 1 })
      .withMessage("At least one image is required"),
    check("categories")
      .isArray({ min: 1 })
      .withMessage("At least one category is required"),
  ]),
  productController.createProduct
);

/**
 * @route PUT api/product/:id/update
 * @description Admin can update product
 * @access Admin required
 */
router.put(
  "/:id/update",
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  productController.updateProduct
);

/**
 * @route DELETE api/product/:id/delete
 * @description Admin can delete product
 * @access Admin required
 */
router.delete(
  "/:id/delete",
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  productController.deleteProduct
);

/**
 * @route GET api/product/deleted?page=1&limit=10
 * @description Admin can see list of deleted products
 * @access Admin
 */
router.get(
  "/admin/deleted",

  productController.getDeletedProducts
);

/**
 * @route PUT api/product/:id/restore
 * @description Admin can restore product
 * @access Admin required
 */
router.put(
  "/:id/restore",
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  productController.restoreProduct
);

/**
 * @route POST api/product/:id/reviews
 * @description USer can add a review
 * @access login Required
 */
router.post(
  "/:id/reviews",
  authMiddleware.loginRequired,
  validators.validate([
    check("name").notEmpty().withMessage("Name is required"),
    check("rating").notEmpty().withMessage("Description is required"),
    check("comment").notEmpty().withMessage("Price is required"),
  ]),
  productController.createReview
);

module.exports = router;
