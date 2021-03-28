const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);
messageSchema.plugin(require("./plugins/isDeletedFalse"));

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
