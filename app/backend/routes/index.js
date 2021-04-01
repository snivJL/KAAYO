const express = require("express");
const router = express.Router();

// userApi
const userApi = require("./user.api");
router.use("/user", userApi);

// authApi
const authApi = require("./auth.api");
router.use("/auth", authApi);

// productApi
const productApi = require("./product.api");
router.use("/product", productApi);

// orderApi
const orderApi = require("./order.api");
router.use("/order", orderApi);

// ingredientApi
const ingredientApi = require("./ingredient.api");
router.use("/ingredient", ingredientApi);

// messageApi
const messageApi = require("./message.api");
router.use("/message", messageApi);

// messageApi
const mailsApi = require("./mails.api");
router.use("/email", mailsApi);

module.exports = router;
