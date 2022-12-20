const handler = (req, res) => {
  console.log(req.body);
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad Request!" });
    }
  }
  return res.status(400).json({ message: "Bad Request!" });
};

export default handler;
