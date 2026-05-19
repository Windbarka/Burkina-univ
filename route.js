export async function POST(req) {
  try {
    const body = await req.json();

    const prompt = `
Crée un CV professionnel HTML.

Nom: ${body.name}
Email: ${body.email}
Téléphone: ${body.phone}
Localisation: ${body.location}
Diplôme: ${body.degree}
École: ${body.school}
Année: ${body.graduation}
Objectif: ${body.objective}
Compétences: ${body.skills}
Expériences: ${body.experiences}
Langues: ${body.languages}
Extras: ${body.extras}
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
          { role: 'system', content: 'Tu es un expert en création de CV professionnels HTML.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    return Response.json({
      cv: data.choices[0].message.content
    });

  } catch (err) {
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
