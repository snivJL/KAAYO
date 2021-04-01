const express = require("express");
const router = express.Router();
const email = require("../helpers/email");

/**
 * @route GET api/email/test-email
 * @description Send test email
 * @access Public
 */
router.get("/test-email", (req, res) => {
  email.sendTestEmail();
  res.send("email sent");
});

/**
 * @route GET api/email/confirmation
 * @description Send order confirmation email
 * @access Public
 */
router.get("/confirmation", (req, res) => {
  email.sendTestEmail();
  res.send("email sent");
});

module.exports = router;
