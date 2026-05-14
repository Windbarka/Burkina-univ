export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      location,
      degree,
      school,
      graduation,
      objective,
      skills,
      experiences,
      languages,
      extras,
      style
    } = req.body;

    const prompt = `
Crée un CV professionnel moderne en HTML propre.

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

Le CV doit être élégant, structuré, professionnel et en HTML uniquement.
`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: [
          {
            role: 'system',
            content: 'Tu es un expert en rédaction de CV professionnels.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({
        error: data.error?.message || 'Erreur OpenAI'
      });
    }

    const cv = data.choices[0].message.content;

    return res.status(200).json({ cv });

  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Erreur serveur'
    });
  }
}
