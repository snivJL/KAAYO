const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message.controller");
const validators = require("../middlewares/validation");
const { check } = require("express-validator");
const authMiddleware = require("../middlewares/auth");

/**
 * @route POST api/message/add
 * @description User can create message
 * @access Public
 */
router.post(
  "/add",
  validators.validate([
    check("name").notEmpty().withMessage("Name is required"),
    check("email").notEmpty().withMessage("email is required"),
    check("message").notEmpty().withMessage("message is required"),
  ]),
  messageController.createMessage
);

/**
 * @route GET api/message
 * @description Admin can see all messages
 * @access Admin
 */
router.get(
  "/",
  authMiddleware.adminRequired,
  authMiddleware.loginRequired,
  messageController.getAllMessages
);

module.exports = router;
