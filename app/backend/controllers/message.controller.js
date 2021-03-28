const Message = require("../models/Message");
const utilsHelper = require("../helpers/utils.helper");
const validator = require("../middlewares/validation");
const { Error } = require("mongoose");

let messageController = {};

messageController.createMessage = async (req, res, next) => {
  try {
    const { name, email, content } = req.body;
    const message = await Message.create({
      name,
      email,
      content,
    });
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { message },
      null,
      "Message created"
    );
  } catch (error) {
    next(error);
  }
};

messageController.getAllMessages = async (req, res, next) => {
  try {
    const message = await Message.find({});
    if (!message) return next(new Error("401 - message not found"));
    utilsHelper.sendResponse(
      res,
      200,
      true,
      { message },
      null,
      "Get all messages"
    );
  } catch (error) {
    next(error);
  }
};

messageController.updateMessage = async (req, res, next) => {
  const { name, email, content, isRead } = req.body;
  const messageId = req.params.id;
  let fields = {};

  if (name) fields.name = name;
  if (email) fields.email = email;
  if (content) fields.content = content;
  if (isRead) fields.isRead = isRead;

  try {
    const message = await Message.findByIdAndUpdate(
      { _id: messageId },
      { $set: fields },
      { new: true }
    );
    if (!message) {
      return next(new Error("Message not found"));
    }
    utilsHelper.sendResponse(res, 200, true, message, null, "Message updated");
  } catch (error) {
    next(error);
  }
};

messageController.deleteMessage = async (req, res, next) => {
  const messageId = req.params.id;
  try {
    const message = await Message.findByIdAndUpdate(
      { _id: messageId },
      { isDeleted: true },
      { new: true }
    );
    if (!message) {
      return next(new Error("Message not found"));
    }
    utilsHelper.sendResponse(res, 200, true, message, null, "Message updated");
  } catch (error) {
    next(error);
  }
};

messageController.getSingleMessage = async (req, res, next) => {
  const messageId = req.params.id;
  try {
    const message = await Message.find({ messageId });
    if (!message) {
      return next(new Error("Message not found"));
    }
    utilsHelper.sendResponse(res, 200, true, message, null, "Message updated");
  } catch (error) {
    next(error);
  }
};

module.exports = messageController;
