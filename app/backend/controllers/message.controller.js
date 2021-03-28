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
    utilsHelper.sendResponse(res, 200, true, { lala }, null, "Message created");
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

module.exports = messageController;
