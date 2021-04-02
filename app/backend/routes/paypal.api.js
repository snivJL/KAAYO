const express = require("express");
const router = express.Router();
const utilsHelper = require("../helpers/utils.helper");

router.get("/", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

module.exports = router;
