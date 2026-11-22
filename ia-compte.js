import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const cfg = { apiKey:"AIzaSyD4Ox-oQtzaI9UmP1KNCxKp0_FV74vBsoA", authDomain:"burkinauniv.firebaseapp.com", projectId:"burkinauniv", storageBucket:"burkinauniv.firebasestorage.app", messagingSenderId:"1016400582124", appId:"1:1016400582124:web:9966aa034c532521089cc9" };
const app = getApps().length ? getApps()[0] : initializeApp(cfg);
const auth = getAuth(app), db = getFirestore(app);
const API = "https://burkina-univ.vercel.app/api/concours";
const COST = { entrainement:1, examen:2, fiche:1, correction:1 };
const TYPE = { entrainement:"qcm", examen:"examen", fiche:"fiche", correction:"correction" };
let svc = "entrainement", wallet = { ia:0, cv:0 }, cvKeep = false, resolveReady;
const ready = new Promise(r => { resolveReady = r; });

// ---- Crédits ----
async function loadWallet(){
  const u = auth.currentUser;
  if (!u) { wallet = { ia:0, cv:0 }; paint(); return; }
  try {
    const s = await getDoc(doc(db, "wallets", u.uid));
    const w = s.exists() ? s.data() : {};
    wallet = { ia: w.ia || 0, cv: w.cv || 0 };
  } catch (e) { wallet = { ia:0, cv:0 }; }
  paint();
}
function paint(){
  const b = document.querySelector(".ia-interface-badge");
  if (b) b.textContent = "Crédits : " + wallet.ia;
  refreshCv();
}
onAuthStateChanged(auth, async () => { resolveReady(); await loadWallet(); });

// ---- Appel sécurisé à l'IA ----
async function callApi(prompt, type){
  const u = auth.currentUser;
  if (!u) { location.href = "compte.html"; throw new Error("Connexion requise"); }
  const token = await u.getIdToken();
  const r = await fetch(API, {
    method: "POST",
    headers: { "Content-Type":"application/json", "Authorization":"Bearer " + token },
    body: JSON.stringify({ prompt, type })
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) {
    if (r.status === 402) alert(d.error || "Crédits insuffisants.");
    else if (typeof showToast === "function") showToast("⚠️ " + (d.error || "Erreur"), "err");
    throw new Error(d.error || "Erreur");
  }
  wallet = { ia: d.ia, cv: d.cv };
  paint();
  return d.text;
}
window.callGroq = prompt => callApi(prompt, TYPE[svc]);

// ---- Ouverture des services IA : plus de paiement ni de code ----
const origOpen = window.openIaModal;
window.openIaModal = async function(service){
  await ready;
  if (!auth.currentUser) { location.href = "compte.html"; return; }
  await loadWallet();
  if (wallet.ia < COST[service]) {
    alert("Crédits IA insuffisants (" + wallet.ia + "). Achète un Pack IA dans ton espace.");
    location.href = "espace.html";
    return;
  }
  svc = service;
  origOpen(service);
  iaSetupInterface();
  iaShowStep("ia-step-ia");
  paint();
};

// ---- CV IA ----
function refreshCv(){
  const pay = document.getElementById("cv-step-pay"), form = document.getElementById("cv-step-form");
  if (!pay || !form) return;
  const logged = !!auth.currentUser;
  if (logged && (wallet.cv > 0 || cvKeep)) {
    pay.classList.remove("cv-step--on"); form.classList.add("cv-step--on");
  } else {
    form.classList.remove("cv-step--on"); pay.classList.add("cv-step--on");
    pay.innerHTML = logged
      ? '<div style="text-align:center;padding:8px 0"><div style="font-size:15px;font-weight:700;margin-bottom:8px">Tu n\'as pas de CV IA disponible</div><p style="font-size:13px;color:var(--t2);margin-bottom:16px">Le CV IA coûte 1 000 FCFA (Orange Money ou Wave). Après confirmation de ton paiement, il s\'ajoute à ton compte.</p><a class="btn btn--amber btn--full" href="espace.html">Acheter un CV IA →</a></div>'
      : '<div style="text-align:center;padding:8px 0"><div style="font-size:15px;font-weight:700;margin-bottom:8px">Connecte-toi pour générer ton CV</div><p style="font-size:13px;color:var(--t2);margin-bottom:16px">Crée un compte gratuit, puis achète ton CV IA à 1 000 FCFA.</p><a class="btn btn--amber btn--full" href="compte.html">Se connecter →</a></div>';
  }
}
window.cvGenerer = async function(){
  const g = id => document.getElementById(id).value.trim();
  const nom = g("cv-nom"), tel = g("cv-tel"), ville = g("cv-ville"), poste = g("cv-poste"), niveau = g("cv-niveau");
  const errEl = document.getElementById("cv-form-err");
  errEl.style.display = "none";
  if (!nom || !tel || !ville || !poste || !niveau) {
    errEl.textContent = "⚠️ Remplis tous les champs obligatoires (*).";
    errEl.style.display = "block";
    return;
  }
  const email = g("cv-email"), exp = g("cv-exp"), comp = g("cv-comp"), langues = g("cv-langues");
  document.getElementById("cv-gen-btn").style.display = "none";
  document.getElementById("cv-loading").style.display = "block";
  document.getElementById("cv-result-box").classList.remove("cv-result-box--on");
  const prompt = `Tu es un expert en rédaction de CV professionnels pour le marché de l'emploi au Burkina Faso.
Crée un CV professionnel complet et structuré pour cette personne :
- Nom : ${nom}
- Téléphone : ${tel}
${email ? `- Email : ${email}` : ""}
- Ville : ${ville}
- Poste visé : ${poste}
- Formation : ${niveau}
${exp ? `- Expériences : ${exp}` : ""}
- Compétences : ${comp || "Non précisées"}
${langues ? `- Langues : ${langues}` : ""}

Rédige un CV complet avec ces sections :
1. EN-TÊTE (nom, coordonnées)
2. OBJECTIF PROFESSIONNEL (2-3 lignes percutantes)
3. FORMATION
4. EXPÉRIENCES PROFESSIONNELLES
5. COMPÉTENCES
6. LANGUES
7. DIVERS / CENTRES D'INTÉRÊT

Adapte le contenu au contexte burkinabè et au poste visé. Style professionnel. Réponds directement avec le CV.`;
  try {
    const text = await callApi(prompt, "cv");
    cvKeep = true;
    document.getElementById("cv-loading").style.display = "none";
    document.getElementById("cv-gen-btn").style.display = "block";
    document.getElementById("cv-result-content").textContent = text;
    document.getElementById("cv-result-box").classList.add("cv-result-box--on");
    if (typeof showToast === "function") showToast("✅ CV généré avec succès !", "ok");
  } catch (e) {
    document.getElementById("cv-loading").style.display = "none";
    document.getElementById("cv-gen-btn").style.display = "block";
  }
};
const origNew = window.cvNouveau;
window.cvNouveau = function(){ cvKeep = false; if (origNew) origNew(); refreshCv(); };

// ---- Achats : tout passe par ton espace ----
window.openModal = function(){ location.href = "espace.html"; };
document.querySelectorAll('a[href="#espace"]').forEach(a => { a.href = "espace.html"; });
const esp = document.getElementById("espace"); if (esp) esp.style.display = "none";
const prem = document.getElementById("premium"); if (prem) prem.style.display = "none";
document.querySelectorAll('a[href="#premium"]').forEach(a => { const li = a.closest("li"); if (li) li.style.display = "none"; });
document.querySelectorAll(".ia-scard__price").forEach((p, i) => { p.textContent = ["1 crédit","2 crédits","1 crédit","1 crédit"][i] || ""; });
refreshCv();
