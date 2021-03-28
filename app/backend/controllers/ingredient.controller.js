const Ingredient = require("../models/Ingredient");
const utilsHelper = require("../helpers/utils.helper");

const validator = require("../middlewares/validation");
const { Error } = require("mongoose");

let ingredientController = {};

ingredientController.createIngredient = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { name, description } = req.body;
    validator.checkObjectId(userId);

    const ingredient = await Ingredient.create({
      name,
      description,
    });

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { ingredient },
      null,
      "Ingredient created"
    );
  } catch (error) {
    next(error);
  }
};

ingredientController.updateIngredient = async (req, res, next) => {
  try {
    const ingredientId = req.params.id;
    const { name, description } = req.body;
    let fields = {};
    if (name) fields.name = name;
    if (description) fields.description = description;

    const ingredient = await Ingredient.findByIdAndUpdate(
      { _id: ingredientId },
      { $set: fields },
      { new: true }
    );

    if (!ingredient) return next(new Error("401 - Ingredient not found"));
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { ingredient },
      null,
      "ingredient updated"
    );
  } catch (error) {
    next(error);
  }
};

ingredientController.deleteIngredient = async (req, res, next) => {
  try {
    const ingredientId = req.params.id;

    const ingredient = await Ingredient.findByIdAndUpdate(
      { _id: ingredientId },
      { isDeleted: true },
      { new: true }
    );

    if (!ingredient) return next(new Error("401 - ingredient not found"));
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { ingredient },
      null,
      "ingredient Deleted"
    );
  } catch (error) {
    next(error);
  }
};

ingredientController.getAllIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.find({});
    if (!ingredient) return next(new Error("401 - ingredient not found"));
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { ingredient },
      null,
      "Get all ingredients"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = ingredientController;
