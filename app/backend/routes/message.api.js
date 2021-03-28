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
    check("content").notEmpty().withMessage("content is required"),
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

/**
 * @route Put api/message/:id/update
 * @description Admin update a message
 * @access Admin
 */
router.put(
  "/:id/update",
  authMiddleware.adminRequired,
  authMiddleware.loginRequired,
  messageController.updateMessage
);

/**
 * @route DELETE api/message/:id/delete
 * @description Admin can delete a message
 * @access Admin
 */
router.get(
  "/:id/delete",
  authMiddleware.adminRequired,
  authMiddleware.loginRequired,
  messageController.deleteMessage
);

/**
 * @route GET api/message/:id
 * @description Admin can see a single message
 * @access Admin
 */
router.get(
  "/:id",
  authMiddleware.adminRequired,
  authMiddleware.loginRequired,
  messageController.getSingleMessage
);

module.exports = router;
