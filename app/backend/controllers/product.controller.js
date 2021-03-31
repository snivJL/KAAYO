const Product = require("../models/Product");
const utilsHelper = require("../helpers/utils.helper");

const { validationResult, check } = require("express-validator");
const validator = require("../middlewares/validation");

let productController = {};

productController.getAllProducts = async (req, res, next) => {
  try {
    let { page, limit, sortBy, search, cat, ...filter } = req.query;

    const keywords = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { ingredients: { $regex: search, $options: "i" } },
          ],
        }
      : {};
    const category = cat
      ? cat === "soap"
        ? { category: { $regex: cat, $options: "i" } }
        : { category: { $in: [cat] } }
      : {};
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const totalProducts = await Product.countDocuments({
      ...filter,
      ...keywords,
      ...category,
      isDeleted: false,
    });
    console.log("totalproducts", totalProducts);

    const totalPages = Math.ceil(totalProducts / limit);
    console.log("totalpages", totalPages);

    const offset = limit * (page - 1);
    console.log("offset", offset);

    const products = await Product.find({
      isDeleted: false,
      ...keywords,
      ...category,
    })
      .skip(offset)
      .limit(limit);

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { products, page, totalPages },
      null,
      "List of products"
    );
  } catch (error) {
    next(error);
  }
};

productController.getSingleProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) return next(new Error("401 - Product not found"));

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { product },
      null,
      "Product detail found"
    );
  } catch (error) {
    next(error);
  }
};
productController.createProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      shortDesc,
      price,
      images,
      category,
      stock,
      ingredients,
      productCollection,
      target,
    } = req.body;
    const ingArray = ingredients.split(",");
    const product = await Product.create({
      name,
      shortDesc,
      description,
      price,
      images,
      category,
      ingredients: ingArray,
      countInStock: stock,
      productCollection,
      target,
    });

    utilsHelper.sendResponse(res, 200, true, product, null, "Product created");
  } catch (error) {
    next(error);
  }
};

productController.updateProduct = async (req, res, next) => {
  const {
    name,
    description,
    shortDesc,
    price,
    images,
    category,
    countInStock,
    ingredients,
    productCollection,
    target,
  } = req.body;
  const productId = req.params.id;
  let fields = {};

  if (name) fields.name = name;
  if (description) fields.description = description;
  if (shortDesc) fields.shortDesc = shortDesc;
  if (price) fields.price = price;
  if (images) fields.images = images;
  if (category) fields.category = category;
  if (countInStock) fields.countInStock = countInStock;
  if (ingredients) fields.ingredients = ingredients;
  if (productCollection) fields.productCollection = productCollection;
  if (target) fields.target = target;
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      { $set: fields },
      { new: true }
    );
    if (!product) {
      return next(new Error("Product not found"));
    }
    console.log(product);
    utilsHelper.sendResponse(res, 200, true, product, null, "Product updated");
  } catch (error) {
    next(error);
  }
};

productController.deleteProduct = async (req, res, next) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      { isDeleted: true }
    );
    if (!product) {
      return next(new Error("Product not found"));
    }
    utilsHelper.sendResponse(res, 200, true, product, null, "Product deleted");
  } catch (error) {
    next(error);
  }
};

productController.getDeletedProducts = async (req, res, next) => {
  try {
    let { page, limit, sortBy, search, ...filter } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const totalProducts = await Product.countDocuments({
      ...filter,
      isDeleted: true,
    });
    console.log("totalproducts", totalProducts);

    const totalPages = Math.ceil(totalProducts / limit);
    console.log("totalpages", totalPages);

    const offset = limit * (page - 1);
    console.log("offset", offset);

    const products = await Product.find({ isDeleted: true })
      .skip(offset)
      .limit(limit);

    utilsHelper.sendResponse(
      res,
      200,
      true,
      { products },
      null,
      "List of deleted products"
    );
  } catch (error) {
    next(error);
  }
};

productController.restoreProduct = async (req, res, next) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      { isDeleted: false }
    );
    if (!product) {
      return next(new Error("Product not found"));
    }
    utilsHelper.sendResponse(res, 200, true, product, null, "Product restored");
  } catch (error) {
    next(error);
  }
};

productController.createReview = async (req, res, next) => {
  try {
    const { rating, comment, name, title } = req.body;
    const userId = req.userId;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(new Error("Product not found"));
    } else {
      const alreadyReviewed = product.reviews.find((x) => x.userId);
      if (alreadyReviewed) return next(new Error("Product already reviewed"));
      const review = { name, comment, rating, title, userId };

      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, product) => product.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      utilsHelper.sendResponse(
        res,
        201,
        true,
        { product },
        null,
        "Review added"
      );
    }
  } catch (error) {
    next(error);
  }
};

productController.deleteReview = async (req, res, next) => {
  const userId = req.userId;
  const productId = req.params.productId;
  const reviewId = req.params.reviewId;
  try {
    validator.checkObjectId(productId);

    let product = await Product.findById(productId);
    if (!product) {
      return next(new Error("Product not found"));
    }
    const review = product.reviews.filter(
      (r) => r._id.toString() === reviewId.toString()
    );
    if (review.length === 0) return next(new Error("Review not found"));
    if (review[0].userId.toString() !== userId.toString()) {
      return next(
        new Error("Unauthorized - Only author can delete his review")
      );
    }
    product.reviews = product.reviews.filter(
      (r) => r._id.toString() !== reviewId.toString()
    );
    product.numReviews = product.reviews.length;
    if (product.numReviews > 0)
      product.rating =
        product.reviews.reduce((acc, product) => product.rating + acc, 0) /
        product.reviews.length;
    else product.rating = 0;
    product.save();
    utilsHelper.sendResponse(res, 200, true, product, null, "Review deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = productController;
