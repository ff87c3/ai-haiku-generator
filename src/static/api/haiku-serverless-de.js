const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        temperature: 1,
        max_tokens: 30,
        frequency_penalty: 1,
        presence_penalty: 1,
        top_p: 0.9,
        messages: [{ role: "user", content: "Haiku auf Deustch generieren" }],
      });

      res.json({ haiku: response.choices[0].message.content });
    } catch (error) {
      console.error(
        "OpenAI API error:",
        error.response ? error.response.data : error.message
      );
      res.status(500).json({ error: "Error generating haiku" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
