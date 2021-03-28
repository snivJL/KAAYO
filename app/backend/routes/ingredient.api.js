const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/ingredient.controller");
const authMiddleware = require("../middlewares/auth");
const validators = require("../middlewares/validation");
const { check } = require("express-validator");

/**
 * @route POST api/ingredient/add
 * @description User can create ingredient
 * @access Admin required
 */
router.post(
  "/add",
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  validators.validate([
    check("name").notEmpty().withMessage("Name is required"),
    check("description").notEmpty().withMessage("Description is required"),
  ]),
  ingredientController.createIngredient
);
/**
 * @route PUT api/ingredient/:id
 * @description User can update ingredient
 * @access Admin required
 */
router.put(
  "/:id/update",
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  ingredientController.updateIngredient
);
/**
 * @route GET api/ingredient
 * @description User can see all ingredients
 * @access Public
 */
router.get("/", ingredientController.getAllIngredients);

/**
 * @route GET api/ingredient/:id
 * @description User can see ingredient detail
 * @access Public
 */
// router.get("/:id", ingredientController.getSingleingredient);

/**
 * @route DELETE api/ingredient/login
 * @description Admin can delete ingredient
 * @access Admin required
 */
router.delete(
  "/:id/delete",
  authMiddleware.loginRequired,
  authMiddleware.adminRequired,
  ingredientController.deleteIngredient
);

module.exports = router;
