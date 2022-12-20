import { mailOptions, transporter } from "../../config/nodemailer";

/**
 * This function checks if the req method is POST. If true, it sends an email to myself using the transporter sendMail method. If not, it returns a JSON object with a message property set to the error message.
 */
const handler = async (req, res) => {
  //console.log(req.body);

  /* Checking if the request method is POST and checking if data is valid. */
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad Request!" });
    }
    /* Sending an email using the transporter.sendMail method */
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "This is a test string",
        html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
      });

      /* Returning a JSON object with a success property set to true. */
      return res.status(200).json({ success: true });
    } catch (error) {
      /* Catching any errors that may occur and returning a JSON object with a message property set to
    the error message. */
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  /* Returning a JSON object with a message property set to the error message. */
  return res.status(400).json({ message: error.message });
};

export default handler;
