const mongoose = require("mongoose");

const ingredientSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);
ingredientSchema.plugin(require("./plugins/isDeletedFalse"));

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
