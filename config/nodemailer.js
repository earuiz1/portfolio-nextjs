import nodemailer from "nodemailer";

/* Getting the email and password from the .env file. */
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

/* Creating a transporter object that will be used to send emails. */
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

/* Setting the from and to email addresses. */
export const mailOptions = {
  from: email,
  to: email,
};
