const mailgun = require("mailgun-js");
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: DOMAIN,
});
const sendTestEmail = () => {
  const data = {
    from:
      "Mailgun Sandbox <postmaster@sandboxc3756592e6204abf9e096e6740c1e39d.mailgun.org>",
    to: "julien.lejay@gmail.com",
    subject: "Hello",
    text: "Testing some Mailgun awesomness!",
  };
  mg.messages().send(data, function (error, body) {
    console.log(body, error);
  });
};

const sendOrderConfirmation = (order, user) => {
  console.log("user", user, "ORDER", order);
  const data = {
    from:
      "Mailgun Sandbox <postmaster@sandboxc3756592e6204abf9e096e6740c1e39d.mailgun.org>",
    to: user.email,
    subject: "KA.A.YO Order Confirmation",
    template: "order_summary",
    "v:orderId": order._id,
    "v:user": user,
  };
  mg.messages().send(data, function (error, body) {
    console.log(body, error);
  });
};

module.exports = { sendTestEmail, sendOrderConfirmation };
