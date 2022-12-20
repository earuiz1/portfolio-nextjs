import { mailOptions, transporter } from "../../config/nodemailer";

/**
 * It checks if the request method is POST and if the data is valid, then it sends an email using the
 * data provided
 */
const handler = async (req, res) => {
  console.log(req.body);

  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad Request!" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "This is a test string",
        html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Email: ${data.message}</p>`,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  res.status(200).json({ name: "John Doe" });
};

export default handler;
