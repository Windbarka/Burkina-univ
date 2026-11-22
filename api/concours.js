const ALLOWED = ['https://windbarka.github.io'];
const PROJECT = 'burkinauniv';
const FS = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;
const COST = { qcm: { ia: 1 }, fiche: { ia: 1 }, correction: { ia: 1 }, examen: { ia: 2 }, cv: { cv: 1 } };

function uidFromToken(t) {
  try {
    const p = JSON.parse(Buffer.from(t.split('.')[1], 'base64url').toString());
    if (!p.exp || p.exp * 1000 < Date.now() || p.aud !== PROJECT) return null;
    return p.user_id || p.sub || null;
  } catch (e) { return null; }
}
const num = f => (f && f.integerValue !== undefined) ? parseInt(f.integerValue, 10)
  : (f && f.doubleValue !== undefined) ? Math.floor(f.doubleValue) : 0;

// Appelle Gemini si GEMINI_API_KEY existe dans Vercel, sinon Groq
async function askAI(prompt) {
  const gk = process.env.GEMINI_API_KEY, gm = process.env.GEMINI_MODEL;
  if (gk) {
    if (!gm) return { text: '', info: { fournisseur: 'gemini', detail: 'GEMINI_MODEL manquant dans Vercel' } };
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(gm)}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': gk },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { maxOutputTokens: 2048 } })
    });
    const d = await r.json().catch(() => ({}));
    const parts = d && d.candidates && d.candidates[0] && d.candidates[0].content && d.candidates[0].content.parts;
    const text = parts ? parts.map(p => p.text || '').join('') : '';
    return { text, info: { fournisseur: 'gemini', statut: r.status, modele: gm, detail: (d && d.error && d.error.message) || '' } };
  }
  const model = process.env.GROQ_MODEL || 'openai/gpt-oss-120b';
  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.GROQ_API_KEY}` },
    body: JSON.stringify({ model, max_tokens: 4096, messages: [{ role: 'user', content: prompt }] })
  });
  const d = await r.json().catch(() => ({}));
  const text = d && d.choices && d.choices[0] && d.choices[0].message && d.choices[0].message.content || '';
  return { text, info: { fournisseur: 'groq', modele: model, statut: r.status, cle: process.env.GROQ_API_KEY ? 'presente' : 'ABSENTE', detail: (d && d.error && d.error.message) || '' } };
}

export default async function handler(req, res) {
  const origin = req.headers.origin;
  if (ALLOWED.includes(origin)) res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();
  if (!ALLOWED.includes(origin)) return res.status(403).json({ error: 'Origine non autorisée' });

  const h = req.headers.authorization || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : '';
  const uid = token ? uidFromToken(token) : null;
  if (!uid) return res.status(401).json({ error: 'Connexion requise' });

  const { prompt, type } = req.body || {};
  const cost = COST[type];
  if (!cost) return res.status(400).json({ error: 'Type de service invalide' });
  if (typeof prompt !== 'string' || !prompt.trim()) return res.status(400).json({ error: 'Prompt manquant' });
  if (prompt.length > 4000) return res.status(413).json({ error: 'Prompt trop long' });

  const url = `${FS}/wallets/${uid}`;
  const hdr = { Authorization: `Bearer ${token}` };
  try {
    // 1. Lire les crédits avec le jeton de l'étudiant (les règles Firestore font la vérification)
    const wr = await fetch(url, { headers: hdr });
    if (wr.status === 404) return res.status(402).json({ error: "Tu n'as pas de crédits. Achète un pack dans ton espace." });
    if (!wr.ok) return res.status(401).json({ error: 'Connexion invalide, reconnecte-toi.' });
    const wdoc = await wr.json();
    const f = wdoc.fields || {};
    const have = { ia: num(f.ia), cv: num(f.cv) };
    const key = Object.keys(cost)[0];
    if (have[key] < cost[key]) return res.status(402).json({ error: 'Crédits insuffisants. Achète un pack dans ton espace.' });

    // 2. Appeler l'IA (Gemini ou Groq)
    const ai = await askAI(prompt);
    if (!ai.text) return res.status(502).json({ error: "Erreur du service IA, réessaie.", ...ai.info });

    // 3. Débiter les crédits (échoue si les crédits ont changé entre-temps)
    const left = have[key] - cost[key];
    const pr = await fetch(
      `${url}?updateMask.fieldPaths=${key}&currentDocument.updateTime=${encodeURIComponent(wdoc.updateTime)}`,
      { method: 'PATCH', headers: { ...hdr, 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: { [key]: { integerValue: String(left) } } }) }
    );
    if (!pr.ok) return res.status(409).json({ error: 'Débit impossible, réessaie.' });

    return res.status(200).json({ text: ai.text, ia: key === 'ia' ? left : have.ia, cv: key === 'cv' ? left : have.cv });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
