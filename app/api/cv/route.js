export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, phone, location, degree, school, graduation, objective, skills, experiences, languages, extras } = req.body;

    const prompt = `
Crée un CV professionnel en HTML.

Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Localisation: ${location}
Diplôme: ${degree}
École: ${school}
Année: ${graduation}
Objectif: ${objective}
Compétences: ${skills}
Expériences: ${experiences}
Langues: ${languages}
Extras: ${extras}
`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          { role: 'system', content: 'Tu es un expert en CV professionnels.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.error?.message || 'Erreur Groq' });
    }

    return res.status(200).json({
      cv: data.choices[0].message.content
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
