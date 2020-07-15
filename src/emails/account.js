const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ganeshh27@gmail.com",
    subject: "Welcome to Task Man",
    text: `Welcome ${name}. Manage your tasks and move forward`,
  });
};

const sendClosureMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ganeshh27@gmail.com",
    subject: "Miss you.. from Task Man",
    text: `Thanks ${name}. Waiting for you to join again`,
  });
};

module.exports = {
  sendWelcomeMail,
  sendClosureMail
};