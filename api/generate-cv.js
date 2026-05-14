export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Tu es Doko AI, expert en création de CV professionnels."
          },
          {
            role: "user",
            content: "Crée un CV professionnel à partir de : " + JSON.stringify(data)
          }
        ]
      })
    });

    const result = await response.json();

    res.status(200).json({
      cv: result.choices?.[0]?.message?.content
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
