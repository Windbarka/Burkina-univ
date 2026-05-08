<!DOCTYPE html>

<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Campus Faso – Ton Guide Universitaire au Burkina Faso</title>
  <meta name="description" content="Trouve ton université au Burkina Faso. Infos, conseils et discussions pour réussir ton parcours universitaire." />

  <!-- Google Fonts -->

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

  <style>
    /* ==========================================
       VARIABLES & RESET
    ========================================== */
    :root {
      --vert:       #1a6b3c;
      --vert-clair: #27a85e;
      --or:         #e8a020;
      --or-clair:   #f5c84a;
      --rouge:      #c0392b;
      --sable:      #fdf6ec;
      --blanc:      #ffffff;
      --gris-clair: #f4f4f0;
      --gris:       #7a7a72;
      --noir:       #1a1a18;
      --texte:      #2d2d2b;
      --ombre:      0 4px 24px rgba(26,107,60,0.12);
      --ombre-forte:0 8px 40px rgba(26,107,60,0.22);
      --radius:     14px;
      --transition: 0.28s cubic-bezier(.4,0,.2,1);
      --nav-h:      68px;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; font-size: 16px; }

    body {
      font-family: 'Sora', sans-serif;
      color: var(--texte);
      background: var(--blanc);
      line-height: 1.65;
      overflow-x: hidden;
    }

    img { max-width: 100%; display: block; }
    a { text-decoration: none; color: inherit; }
    ul { list-style: none; }

    .container {
      max-width: 1160px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* ==========================================
       BARRE DE NAVIGATION
    ========================================== */
    #navbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      height: var(--nav-h);
      background: rgba(255,255,255,0.96);
      backdrop-filter: blur(10px);
      border-bottom: 2px solid transparent;
      transition: border-color var(--transition), box-shadow var(--transition);
    }

    #navbar.scrolled {
      border-color: var(--vert-clair);
      box-shadow: 0 2px 20px rgba(26,107,60,0.1);
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    /* Logo */
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 800;
      font-size: 1.35rem;
      color: var(--vert);
      letter-spacing: -0.5px;
    }

    .logo-icon {
      width: 40px; height: 40px;
      background: linear-gradient(135deg, var(--vert) 0%, var(--vert-clair) 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: var(--blanc);
      font-weight: 900;
      box-shadow: 0 2px 10px rgba(26,107,60,0.3);
    }

    .logo span { color: var(--or); }

    /* Liens nav */
    .nav-links {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .nav-links a {
      padding: 7px 14px;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--texte);
      transition: background var(--transition), color var(--transition);
    }

    .nav-links a:hover {
      background: var(--gris-clair);
      color: var(--vert);
    }

    /* Bouton menu hamburger */
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      transition: background var(--transition);
    }

    .hamburger:hover { background: var(--gris-clair); }

    .hamburger span {
      display: block;
      width: 24px; height: 2px;
      background: var(--vert);
      border-radius: 2px;
      transition: transform var(--transition), opacity var(--transition);
    }

    .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* Menu mobile */
    .mobile-menu {
      display: none;
      position: fixed;
      top: var(--nav-h);
      left: 0; right: 0;
      background: var(--blanc);
      border-bottom: 2px solid var(--vert-clair);
      padding: 16px 20px 24px;
      z-index: 999;
      flex-direction: column;
      gap: 4px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .mobile-menu.open { display: flex; }

    .mobile-menu a {
      padding: 12px 16px;
      border-radius: 10px;
      font-weight: 600;
      color: var(--texte);
      transition: background var(--transition);
    }

    .mobile-menu a:hover {
      background: var(--gris-clair);
      color: var(--vert);
    }

    /* ==========================================
       HERO
    ========================================== */
    #hero {
      min-height: 100vh;
      padding-top: var(--nav-h);
      background:
        radial-gradient(ellipse at 70% 20%, rgba(39,168,94,0.18) 0%, transparent 60%),
        radial-gradient(ellipse at 20% 80%, rgba(232,160,32,0.14) 0%, transparent 50%),
        var(--sable);
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    /* Motif décoratif africain */
    #hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(26,107,60,0.03) 30px, rgba(26,107,60,0.03) 31px),
        repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(232,160,32,0.03) 30px, rgba(232,160,32,0.03) 31px);
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      padding: 80px 0;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(26,107,60,0.1);
      border: 1px solid rgba(26,107,60,0.2);
      color: var(--vert);
      padding: 6px 16px;
      border-radius: 100px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      margin-bottom: 28px;
      animation: fadeUp 0.6s ease both;
    }

    .hero-badge::before { content: '🇧🇫'; }

    .hero-title {
      font-size: clamp(2.2rem, 6vw, 4rem);
      font-weight: 800;
      line-height: 1.12;
      color: var(--noir);
      letter-spacing: -1.5px;
      margin-bottom: 22px;
      animation: fadeUp 0.7s 0.1s ease both;
    }

    .hero-title .accent { color: var(--vert); }
    .hero-title .gold { color: var(--or); }

    .hero-slogan {
      font-family: 'Lora', serif;
      font-size: clamp(1rem, 2.5vw, 1.2rem);
      color: var(--gris);
      max-width: 540px;
      margin-bottom: 40px;
      animation: fadeUp 0.7s 0.2s ease both;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      animation: fadeUp 0.7s 0.3s ease both;
    }

    /* Barre de recherche hero */
    .search-bar {
      display: flex;
      align-items: center;
      background: var(--blanc);
      border: 2px solid rgba(26,107,60,0.2);
      border-radius: 100px;
      padding: 6px 8px 6px 20px;
      width: 100%;
      max-width: 480px;
      box-shadow: var(--ombre);
      transition: border-color var(--transition), box-shadow var(--transition);
      animation: fadeUp 0.7s 0.4s ease both;
      margin-bottom: 36px;
    }

    .search-bar:focus-within {
      border-color: var(--vert-clair);
      box-shadow: var(--ombre-forte);
    }

    .search-bar input {
      flex: 1;
      border: none;
      outline: none;
      font-family: 'Sora', sans-serif;
      font-size: 0.9rem;
      background: transparent;
      color: var(--texte);
    }

    .search-bar input::placeholder { color: var(--gris); }

    .search-bar button {
      background: var(--vert);
      color: var(--blanc);
      border: none;
      border-radius: 100px;
      padding: 10px 20px;
      font-family: 'Sora', sans-serif;
      font-size: 0.85rem;
      font-weight: 700;
      cursor: pointer;
      transition: background var(--transition), transform var(--transition);
    }

    .search-bar button:hover {
      background: var(--vert-clair);
      transform: scale(1.04);
    }

    .hero-stats {
      display: flex;
      gap: 32px;
      margin-top: 48px;
      animation: fadeUp 0.7s 0.5s ease both;
      flex-wrap: wrap;
    }

    .stat {
      display: flex;
      flex-direction: column;
    }

    .stat-nb {
      font-size: 1.9rem;
      font-weight: 800;
      color: var(--vert);
      line-height: 1;
    }

    .stat-label {
      font-size: 0.8rem;
      color: var(--gris);
      font-weight: 600;
    }

    /* Cartes flottantes décoratives */
    .hero-visual {
      position: absolute;
      right: 0; top: 50%;
      transform: translateY(-50%);
      width: 420px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding-right: 40px;
      animation: floatIn 0.8s 0.4s ease both;
      pointer-events: none;
    }

    .float-card {
      background: var(--blanc);
      border-radius: var(--radius);
      padding: 16px 20px;
      box-shadow: var(--ombre-forte);
      border-left: 4px solid var(--vert-clair);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--texte);
    }

    .float-card.gold { border-color: var(--or); }
    .float-card.red  { border-color: var(--rouge); }

    .float-card-top {
      font-size: 0.72rem;
      color: var(--gris);
      margin-bottom: 4px;
      font-weight: 400;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes floatIn {
      from { opacity: 0; transform: translateY(-50%) translateX(40px); }
      to   { opacity: 1; transform: translateY(-50%) translateX(0); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(-50%) translateY(0px); }
      50%       { transform: translateY(-50%) translateY(-10px); }
    }

    /* ==========================================
       BOUTONS GLOBAUX
    ========================================== */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 26px;
      border-radius: 100px;
      font-family: 'Sora', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all var(--transition);
    }

    .btn-primary {
      background: var(--vert);
      color: var(--blanc);
      box-shadow: 0 4px 14px rgba(26,107,60,0.3);
    }

    .btn-primary:hover {
      background: var(--vert-clair);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(26,107,60,0.35);
    }

    .btn-outline {
      background: transparent;
      color: var(--vert);
      border-color: var(--vert);
    }

    .btn-outline:hover {
      background: var(--vert);
      color: var(--blanc);
      transform: translateY(-2px);
    }

    .btn-gold {
      background: var(--or);
      color: var(--noir);
      box-shadow: 0 4px 14px rgba(232,160,32,0.3);
    }

    .btn-gold:hover {
      background: var(--or-clair);
      transform: translateY(-2px);
    }

    /* ==========================================
       SECTIONS
    ========================================== */
    section {
      padding: 90px 0;
    }

    .section-header {
      text-align: center;
      margin-bottom: 56px;
    }

    .section-chip {
      display: inline-block;
      background: rgba(26,107,60,0.08);
      color: var(--vert);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 5px 14px;
      border-radius: 100px;
      margin-bottom: 14px;
    }

    .section-chip.gold-chip {
      background: rgba(232,160,32,0.12);
      color: #8a5c00;
    }

    .section-title {
      font-size: clamp(1.7rem, 4vw, 2.6rem);
      font-weight: 800;
      color: var(--noir);
      letter-spacing: -1px;
      margin-bottom: 14px;
    }

    .section-sub {
      font-family: 'Lora', serif;
      color: var(--gris);
      font-size: 1rem;
      max-width: 520px;
      margin: 0 auto;
    }

    /* ==========================================
       PUBLICITÉ – bannière top
    ========================================== */
    .ad-banner {
      background: linear-gradient(90deg, #fffbea 0%, #fff8e0 100%);
      border: 1px dashed var(--or);
      border-radius: var(--radius);
      padding: 18px 24px;
      text-align: center;
      margin: 20px 0;
      font-size: 0.8rem;
      color: #7a6000;
      font-weight: 600;
      position: relative;
      overflow: hidden;
    }

    .ad-banner::before {
      content: 'PUBLICITÉ';
      position: absolute;
      top: 4px; right: 10px;
      font-size: 0.65rem;
      color: var(--or);
      letter-spacing: 1px;
    }

    .ad-banner-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      min-height: 60px;
    }

    .ad-placeholder-icon {
      font-size: 1.8rem;
    }

    .ad-text strong { display: block; font-size: 1rem; color: var(--noir); }
    .ad-text span { font-size: 0.78rem; color: var(--gris); }

    /* Bloc latéral pub */
    .ad-sidebar {
      background: linear-gradient(135deg, #fffbea 0%, #fff3d6 100%);
      border: 1px dashed var(--or);
      border-radius: var(--radius);
      padding: 24px 16px;
      text-align: center;
      min-height: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .ad-sidebar-label {
      font-size: 0.65rem;
      color: var(--or);
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .ad-sidebar-icon { font-size: 2.2rem; }
    .ad-sidebar-text { font-size: 0.8rem; color: var(--gris); font-weight: 600; }

    /* ==========================================
       GRILLE UNIVERSITÉS
    ========================================== */
    #universites { background: var(--gris-clair); }

    .univ-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
      gap: 24px;
    }

    .univ-card {
      background: var(--blanc);
      border-radius: 18px;
      padding: 28px 26px;
      box-shadow: var(--ombre);
      border: 2px solid transparent;
      transition: all var(--transition);
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    .univ-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--vert), var(--vert-clair));
    }

    .univ-card.privee::before {
      background: linear-gradient(90deg, var(--or), var(--or-clair));
    }

    .univ-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--ombre-forte);
      border-color: rgba(26,107,60,0.15);
    }

    .univ-card.privee:hover {
      border-color: rgba(232,160,32,0.2);
    }

    .univ-type-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 100px;
      margin-bottom: 14px;
      letter-spacing: 0.3px;
    }

    .badge-public {
      background: rgba(26,107,60,0.1);
      color: var(--vert);
    }

    .badge-privee {
      background: rgba(232,160,32,0.15);
      color: #7a4f00;
    }

    .univ-name {
      font-size: 1.08rem;
      font-weight: 800;
      color: var(--noir);
      margin-bottom: 6px;
      line-height: 1.3;
    }

    .univ-city {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.8rem;
      color: var(--gris);
      margin-bottom: 14px;
    }

    .univ-city::before { content: '📍'; font-size: 0.85rem; }

    .univ-desc {
      font-size: 0.875rem;
      color: #5a5a55;
      line-height: 1.6;
      margin-bottom: 20px;
      font-family: 'Lora', serif;
    }

    .univ-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .tag {
      background: var(--gris-clair);
      color: var(--gris);
      font-size: 0.72rem;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 100px;
    }

    .univ-tab-switcher {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-bottom: 36px;
    }

    .tab-btn {
      padding: 10px 24px;
      border-radius: 100px;
      font-family: 'Sora', sans-serif;
      font-size: 0.875rem;
      font-weight: 700;
      cursor: pointer;
      border: 2px solid var(--vert);
      background: transparent;
      color: var(--vert);
      transition: all var(--transition);
    }

    .tab-btn.active, .tab-btn:hover {
      background: var(--vert);
      color: var(--blanc);
    }

    .tab-btn.gold-tab {
      border-color: var(--or);
      color: #7a4f00;
    }

    .tab-btn.gold-tab.active, .tab-btn.gold-tab:hover {
      background: var(--or);
      color: var(--noir);
    }

    .univ-section { display: none; }
    .univ-section.active { display: block; }

    .section-label-bar {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 24px;
    }

    .section-label-bar h3 {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--noir);
    }

    .section-label-bar::after {
      content: '';
      flex: 1;
      height: 2px;
      background: var(--gris-clair);
    }

    /* ==========================================
       COMPARAISON
    ========================================== */
    #comparaison { background: var(--blanc); }

    .compare-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      margin-bottom: 40px;
    }

    .compare-card {
      border-radius: 18px;
      padding: 32px 28px;
      position: relative;
      overflow: hidden;
    }

    .compare-card.public {
      background: linear-gradient(135deg, #eaf7ef 0%, #d4f0e0 100%);
      border: 2px solid rgba(26,107,60,0.15);
    }

    .compare-card.privee {
      background: linear-gradient(135deg, #fffaed 0%, #fef0c0 100%);
      border: 2px solid rgba(232,160,32,0.2);
    }

    .compare-icon {
      font-size: 2.4rem;
      margin-bottom: 14px;
    }

    .compare-card h3 {
      font-size: 1.2rem;
      font-weight: 800;
      margin-bottom: 20px;
      color: var(--noir);
    }

    .compare-list li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 12px;
      font-size: 0.875rem;
      color: var(--texte);
    }

    .check { color: var(--vert-clair); font-size: 1rem; }
    .cross  { color: var(--rouge);     font-size: 1rem; }

    .conseil-box {
      background: linear-gradient(135deg, #1a6b3c 0%, #27a85e 100%);
      color: var(--blanc);
      border-radius: 18px;
      padding: 32px 36px;
      display: flex;
      gap: 28px;
      align-items: flex-start;
    }

    .conseil-icon { font-size: 2.4rem; flex-shrink: 0; }

    .conseil-box h3 {
      font-size: 1.15rem;
      font-weight: 800;
      margin-bottom: 12px;
    }

    .conseil-box ul { display: flex; flex-direction: column; gap: 8px; }

    .conseil-box ul li {
      font-size: 0.875rem;
      opacity: 0.92;
      display: flex;
      gap: 8px;
    }

    .conseil-box ul li::before { content: '→'; font-weight: 700; }

    /* ==========================================
       FORUM
    ========================================== */
    #forum { background: var(--gris-clair); }

    .forum-layout {
      display: grid;
      grid-template-columns: 1fr 300px;
      gap: 32px;
    }

    .forum-new-post {
      background: var(--blanc);
      border-radius: 18px;
      padding: 28px;
      margin-bottom: 24px;
      box-shadow: var(--ombre);
    }

    .forum-new-post h3 {
      font-size: 1rem;
      font-weight: 800;
      margin-bottom: 14px;
      color: var(--noir);
    }

    .forum-input {
      width: 100%;
      border: 2px solid var(--gris-clair);
      border-radius: 12px;
      padding: 12px 16px;
      font-family: 'Sora', sans-serif;
      font-size: 0.875rem;
      color: var(--texte);
      resize: none;
      transition: border-color var(--transition);
      margin-bottom: 12px;
    }

    .forum-input:focus {
      outline: none;
      border-color: var(--vert-clair);
    }

    .forum-posts { display: flex; flex-direction: column; gap: 16px; }

    .forum-post {
      background: var(--blanc);
      border-radius: 16px;
      padding: 22px 24px;
      box-shadow: var(--ombre);
      border-left: 4px solid var(--vert-clair);
      transition: transform var(--transition);
    }

    .forum-post:hover { transform: translateX(4px); }

    .forum-post.highlight { border-color: var(--or); }

    .post-meta {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }

    .post-avatar {
      width: 36px; height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--blanc);
      flex-shrink: 0;
    }

    .avatar-green { background: var(--vert); }
    .avatar-gold  { background: var(--or);   color: var(--noir); }
    .avatar-red   { background: var(--rouge);}

    .post-author { font-size: 0.85rem; font-weight: 700; color: var(--noir); }
    .post-date   { font-size: 0.75rem; color: var(--gris); margin-left: auto; }

    .post-question {
      font-weight: 700;
      color: var(--noir);
      margin-bottom: 8px;
      font-size: 0.95rem;
    }

    .post-answer {
      font-size: 0.85rem;
      color: #5a5a55;
      font-family: 'Lora', serif;
      line-height: 1.65;
    }

    .post-actions {
      display: flex;
      gap: 14px;
      margin-top: 14px;
    }

    .post-action {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.78rem;
      color: var(--gris);
      font-weight: 600;
      cursor: pointer;
      transition: color var(--transition);
      background: none;
      border: none;
      font-family: 'Sora', sans-serif;
      padding: 0;
    }

    .post-action:hover { color: var(--vert); }
    .post-action.liked { color: var(--vert); }

    .forum-sidebar-card {
      background: var(--blanc);
      border-radius: 16px;
      padding: 24px;
      box-shadow: var(--ombre);
      margin-bottom: 20px;
    }

    .forum-sidebar-card h4 {
      font-size: 0.9rem;
      font-weight: 800;
      color: var(--noir);
      margin-bottom: 14px;
    }

    .trending-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid var(--gris-clair);
      font-size: 0.82rem;
      color: var(--texte);
      cursor: pointer;
      transition: color var(--transition);
    }

    .trending-item:last-child { border-bottom: none; }
    .trending-item:hover { color: var(--vert); }
    .trending-num { font-weight: 800; color: var(--vert-clair); flex-shrink: 0; }

    /* ==========================================
       CONSEILS
    ========================================== */
    #conseils { background: var(--blanc); }

    .conseils-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 22px;
    }

    .conseil-card {
      background: var(--blanc);
      border: 2px solid var(--gris-clair);
      border-radius: 18px;
      padding: 30px 26px;
      transition: all var(--transition);
      position: relative;
      overflow: hidden;
    }

    .conseil-card::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--vert), var(--or));
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--transition);
    }

    .conseil-card:hover {
      border-color: transparent;
      box-shadow: var(--ombre-forte);
      transform: translateY(-4px);
    }

    .conseil-card:hover::after { transform: scaleX(1); }

    .conseil-emoji { font-size: 2rem; margin-bottom: 14px; }

    .conseil-card h3 {
      font-size: 1rem;
      font-weight: 800;
      color: var(--noir);
      margin-bottom: 10px;
    }

    .conseil-card p {
      font-size: 0.875rem;
      color: var(--gris);
      font-family: 'Lora', serif;
      line-height: 1.65;
      margin-bottom: 18px;
    }

    .conseil-card ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .conseil-card ul li {
      font-size: 0.82rem;
      color: var(--texte);
      display: flex;
      gap: 8px;
    }

    .conseil-card ul li::before {
      content: '✓';
      color: var(--vert-clair);
      font-weight: 700;
      flex-shrink: 0;
    }

    /* ==========================================
       CONTACT
    ========================================== */
    #contact { background: var(--gris-clair); }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: start;
    }

    .contact-info h3 {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--noir);
      margin-bottom: 14px;
    }

    .contact-info p {
      font-family: 'Lora', serif;
      color: var(--gris);
      margin-bottom: 32px;
      font-size: 0.95rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 0;
      border-bottom: 1px solid rgba(0,0,0,0.06);
    }

    .contact-item-icon {
      width: 42px; height: 42px;
      background: rgba(26,107,60,0.1);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
    }

    .contact-item-label {
      font-size: 0.72rem;
      color: var(--gris);
      font-weight: 600;
    }

    .contact-item-value {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--noir);
    }

    .contact-form {
      background: var(--blanc);
      border-radius: 20px;
      padding: 36px;
      box-shadow: var(--ombre);
    }

    .form-group {
      margin-bottom: 18px;
    }

    .form-group label {
      display: block;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--texte);
      margin-bottom: 6px;
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid var(--gris-clair);
      border-radius: 10px;
      font-family: 'Sora', sans-serif;
      font-size: 0.875rem;
      color: var(--texte);
      background: var(--blanc);
      transition: border-color var(--transition);
      outline: none;
    }

    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
      border-color: var(--vert-clair);
    }

    .form-group textarea { resize: vertical; min-height: 120px; }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    .form-success {
      display: none;
      background: rgba(26,107,60,0.08);
      border: 1px solid rgba(26,107,60,0.2);
      color: var(--vert);
      border-radius: 10px;
      padding: 12px 16px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-top: 14px;
      text-align: center;
    }

    /* ==========================================
       FOOTER
    ========================================== */
    footer {
      background: var(--noir);
      color: rgba(255,255,255,0.75);
      padding: 60px 0 30px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 48px;
    }

    .footer-brand .logo {
      color: var(--blanc);
      margin-bottom: 14px;
    }

    .footer-brand .logo span { color: var(--or); }
    .footer-brand .logo-icon { background: linear-gradient(135deg, var(--vert), var(--vert-clair)); }

    .footer-brand p {
      font-size: 0.85rem;
      line-height: 1.7;
      margin-bottom: 20px;
    }

    .footer-col h4 {
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--blanc);
      margin-bottom: 16px;
      letter-spacing: 0.3px;
    }

    .footer-col ul { display: flex; flex-direction: column; gap: 10px; }

    .footer-col ul li a {
      font-size: 0.82rem;
      color: rgba(255,255,255,0.6);
      transition: color var(--transition);
    }

    .footer-col ul li a:hover { color: var(--or); }

    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.08);
      font-size: 0.78rem;
    }

    .footer-flag { display: flex; align-items: center; gap: 6px; }

    /* ==========================================
       BOUTON WHATSAPP
    ========================================== */
    /* ==========================================
       BOUTON WHATSAPP FLOTTANT — MODERNE
    ========================================== */
    .whatsapp-wrap {
      position: fixed;
      bottom: 28px;
      right: 24px;
      z-index: 900;
      display: flex;
      align-items: center;
      gap: 0;
    }

    /* Étiquette texte qui glisse depuis la droite */
    .whatsapp-label {
      background: #fff;
      color: #075e54;
      font-family: 'Sora', sans-serif;
      font-size: 0.8rem;
      font-weight: 700;
      padding: 8px 16px 8px 18px;
      border-radius: 100px 0 0 100px;
      box-shadow: -3px 2px 16px rgba(0,0,0,0.12);
      white-space: nowrap;
      max-width: 0;
      overflow: hidden;
      opacity: 0;
      transition: max-width 0.4s cubic-bezier(.4,0,.2,1),
                  opacity    0.3s ease,
                  padding    0.4s ease;
      pointer-events: none;
    }

    .whatsapp-wrap:hover .whatsapp-label {
      max-width: 180px;
      opacity: 1;
      padding: 8px 16px 8px 18px;
      pointer-events: auto;
    }

    .whatsapp-btn {
      position: relative;
      width: 60px; height: 60px;
      background: linear-gradient(135deg, #25d366 0%, #128c4e 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 24px rgba(37,211,102,0.45);
      cursor: pointer;
      transition: transform 0.28s cubic-bezier(.4,0,.2,1),
                  box-shadow 0.28s ease;
      text-decoration: none;
      flex-shrink: 0;
    }

    .whatsapp-btn:hover {
      transform: scale(1.1) translateY(-3px);
      box-shadow: 0 12px 36px rgba(37,211,102,0.55);
    }

    .whatsapp-btn:active {
      transform: scale(0.96);
    }

    /* Anneau de pulse */
    .whatsapp-pulse {
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      border: 3px solid #25d366;
      opacity: 0;
      animation: waPulse 2.4s ease-out infinite;
    }

    .whatsapp-pulse:nth-child(2) {
      animation-delay: 0.8s;
    }

    @keyframes waPulse {
      0%   { transform: scale(1);    opacity: 0.7; }
      80%  { transform: scale(1.65); opacity: 0;   }
      100% { transform: scale(1.65); opacity: 0;   }
    }

    /* SVG WhatsApp logo */
    .whatsapp-icon {
      position: relative;
      z-index: 1;
      width: 32px; height: 32px;
      fill: #ffffff;
      transition: transform 0.28s ease;
    }

    .whatsapp-btn:hover .whatsapp-icon {
      transform: rotate(-8deg) scale(1.08);
    }

    /* Badge "en ligne" */
    .whatsapp-online {
      position: absolute;
      top: 4px; right: 4px;
      width: 12px; height: 12px;
      background: #a8ff78;
      border: 2px solid #fff;
      border-radius: 50%;
      z-index: 2;
      animation: blink 2s ease-in-out infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.4; }
    }

    /* ==========================================
       SCROLL ANIMATIONS
    ========================================== */
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .reveal-delay-1 { transition-delay: 0.1s; }
    .reveal-delay-2 { transition-delay: 0.2s; }
    .reveal-delay-3 { transition-delay: 0.3s; }
    .reveal-delay-4 { transition-delay: 0.4s; }

    /* ==========================================
       TOAST NOTIFICATION
    ========================================== */
    #toast {
      position: fixed;
      bottom: 90px;
      right: 24px;
      background: var(--vert);
      color: var(--blanc);
      padding: 12px 20px;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 600;
      z-index: 999;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.3s ease;
      pointer-events: none;
      max-width: 280px;
    }

    #toast.show {
      transform: translateY(0);
      opacity: 1;
    }

    /* ==========================================
       RECHERCHE – RÉSULTATS
    ========================================== */
    #search-results {
      display: none;
      background: var(--blanc);
      border: 2px solid rgba(26,107,60,0.15);
      border-radius: 14px;
      padding: 16px;
      margin-top: 10px;
      box-shadow: var(--ombre-forte);
    }

    .search-result-item {
      padding: 10px 12px;
      border-radius: 10px;
      cursor: pointer;
      transition: background var(--transition);
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.875rem;
    }

    .search-result-item:hover { background: var(--gris-clair); }
    .search-result-icon { font-size: 1rem; }
    .search-result-name { font-weight: 700; color: var(--noir); }
    .search-result-type { font-size: 0.72rem; color: var(--gris); }

    /* ==========================================
       RESPONSIVE
    ========================================== */
    @media (max-width: 1024px) {
      .hero-visual { display: none; }
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
    }

    @media (max-width: 768px) {
      section { padding: 60px 0; }
      .nav-links { display: none; }
      .hamburger { display: flex; }

      .compare-grid { grid-template-columns: 1fr; }

      .forum-layout { grid-template-columns: 1fr; }
      .forum-layout .forum-sidebar { display: none; }

      .contact-grid { grid-template-columns: 1fr; }

      .footer-grid { grid-template-columns: 1fr; gap: 24px; }
      .footer-bottom { flex-direction: column; gap: 10px; text-align: center; }

      .conseil-box { flex-direction: column; gap: 14px; padding: 24px; }
    }

    @media (max-width: 500px) {
      .form-row { grid-template-columns: 1fr; }
      .hero-stats { gap: 20px; }
      .univ-tab-switcher { flex-direction: column; align-items: center; }
    }
  </style>

</head>
<body>

<!-- ==========================================
     NAVIGATION
========================================== -->

<nav id="navbar">
  <div class="container nav-inner">

```
<!-- Logo -->
<a href="#" class="logo" aria-label="Campus Faso - Accueil">
  <div class="logo-icon">CF</div>
  Campus <span>Faso</span>
</a>

<!-- Liens desktop -->
<ul class="nav-links">
  <li><a href="#universites">Universités</a></li>
  <li><a href="#comparaison">Comparaison</a></li>
  <li><a href="#forum">Forum</a></li>
  <li><a href="#conseils">Conseils</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

<!-- Bouton hamburger (mobile) -->
<button class="hamburger" id="hamburger" aria-label="Ouvrir le menu" aria-expanded="false">
  <span></span><span></span><span></span>
</button>
```

  </div>
</nav>

<!-- Menu mobile -->

<div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Menu mobile">
  <a href="#universites" onclick="closeMobileMenu()">🏛️ Universités</a>
  <a href="#comparaison" onclick="closeMobileMenu()">⚖️ Comparaison</a>
  <a href="#forum"       onclick="closeMobileMenu()">💬 Forum</a>
  <a href="#conseils"    onclick="closeMobileMenu()">📚 Conseils</a>
  <a href="#contact"     onclick="closeMobileMenu()">📩 Contact</a>
</div>

<!-- ==========================================
     HERO
========================================== -->

<section id="hero">
  <div class="container hero-content">

```
<div class="hero-badge">Plateforme étudiante du Burkina Faso</div>

<h1 class="hero-title">
  Trouve ton <span class="accent">université</span><br/>
  au <span class="gold">Burkina Faso</span>
</h1>

<p class="hero-slogan">
  Infos, conseils et discussions pour réussir ton parcours universitaire. 
  Compare les établissements et rejoins ta communauté.
</p>

<!-- Barre de recherche -->
<div style="position:relative; max-width: 480px;">
  <div class="search-bar">
    <input
      type="text"
      id="searchInput"
      placeholder="Rechercher une université…"
      autocomplete="off"
      aria-label="Rechercher une université"
    />
    <button onclick="doSearch()">Rechercher 🔍</button>
  </div>
  <div id="search-results" role="listbox" aria-label="Résultats de recherche"></div>
</div>

<!-- CTA -->
<div class="hero-actions">
  <a href="#universites" class="btn btn-primary">🏛️ Explorer les universités</a>
  <a href="#forum"       class="btn btn-outline">💬 Rejoindre le forum</a>
</div>

<!-- Stats -->
<div class="hero-stats">
  <div class="stat"><span class="stat-nb">8+</span><span class="stat-label">Universités</span></div>
  <div class="stat"><span class="stat-nb">5</span><span class="stat-label">Publiques</span></div>
  <div class="stat"><span class="stat-nb">3+</span><span class="stat-label">Privées</span></div>
  <div class="stat"><span class="stat-nb">∞</span><span class="stat-label">Possibilités</span></div>
</div>
```

  </div>

  <!-- Cartes flottantes (desktop) -->

  <div class="hero-visual" aria-hidden="true">
    <div class="float-card">
      <div class="float-card-top">🏛️ Université publique</div>
      Université Joseph Ki-Zerbo — Sciences & Lettres
    </div>
    <div class="float-card gold">
      <div class="float-card-top">🎓 Conseil du jour</div>
      Dépose ta demande de bourse avant mars !
    </div>
    <div class="float-card red">
      <div class="float-card-top">💬 Discussion populaire</div>
      "Quelle filière choisir après le bac D ?"
    </div>
  </div>
</section>

<!-- ==========================================
     BANNIÈRE PUBLICITAIRE
========================================== -->

<div class="container" style="padding-top:24px; padding-bottom:8px;">
  <!-- 
    ESPACE PUBLICITAIRE — Google AdSense
    Remplace ce bloc par ton code AdSense quand ton compte est approuvé.
    Exemple : <ins class="adsbygoogle" ...></ins>
  -->
  <div class="ad-banner reveal">
    <div class="ad-banner-inner">
      <span class="ad-placeholder-icon">📢</span>
      <div class="ad-text">
        <strong>Partenariat & Publicité — Campus Faso</strong>
        <span>Touchez des milliers d'étudiants burkinabè — Écrivez-nous : Windbarkasteveg@gmail.com</span>
      </div>
    </div>
  </div>
</div>

<!-- ==========================================
     UNIVERSITÉS
========================================== -->

<section id="universites">
  <div class="container">

```
<div class="section-header reveal">
  <div class="section-chip">📚 Établissements</div>
  <h2 class="section-title">Les universités du Burkina Faso</h2>
  <p class="section-sub">Découvre les institutions publiques et privées pour trouver celle qui correspond à ton projet.</p>
</div>

<!-- Onglets Publiques / Privées -->
<div class="univ-tab-switcher reveal">
  <button class="tab-btn active" id="tab-public"  onclick="switchTab('public')">🏛️ Universités Publiques</button>
  <button class="tab-btn gold-tab" id="tab-privee" onclick="switchTab('privee')">🎓 Universités Privées</button>
</div>

<!-- PUBLIQUES -->
<div class="univ-section active" id="section-public">
  <div class="section-label-bar reveal">
    <h3>🟢 5 universités publiques</h3>
  </div>
  <div class="univ-grid" id="publicGrid">

    <div class="univ-card reveal">
      <div class="univ-type-badge badge-public">🏛️ Publique</div>
      <div class="univ-name">Université Joseph Ki-Zerbo</div>
      <div class="univ-city">Ouagadougou</div>
      <p class="univ-desc">Grande université publique offrant plusieurs filières en sciences, lettres et sciences humaines. Très demandée par les étudiants, elle est le fleuron de l'enseignement supérieur burkinabè.</p>
      <div class="univ-tags">
        <span class="tag">Sciences</span>
        <span class="tag">Lettres</span>
        <span class="tag">Sciences humaines</span>
        <span class="tag">Droit</span>
      </div>
    </div>

    <div class="univ-card reveal reveal-delay-1">
      <div class="univ-type-badge badge-public">🏛️ Publique</div>
      <div class="univ-name">Université Nazi Boni</div>
      <div class="univ-city">Bobo-Dioulasso</div>
      <p class="univ-desc">Université reconnue avec des formations en économie, droit, sciences et technologies. Deuxième grande ville du Burkina, elle offre un cadre d'études agréable et dynamique.</p>
      <div class="univ-tags">
        <span class="tag">Économie</span>
        <span class="tag">Droit</span>
        <span class="tag">Technologies</span>
      </div>
    </div>

    <div class="univ-card reveal reveal-delay-2">
      <div class="univ-type-badge badge-public">🏛️ Publique</div>
      <div class="univ-name">Université Norbert Zongo</div>
      <div class="univ-city">Koudougou</div>
      <p class="univ-desc">Spécialisée en sciences de l'éducation, lettres et sciences sociales. Idéale pour ceux qui veulent se former dans l'enseignement ou les sciences humaines.</p>
      <div class="univ-tags">
        <span class="tag">Éducation</span>
        <span class="tag">Lettres</span>
        <span class="tag">Sciences sociales</span>
      </div>
    </div>

    <div class="univ-card reveal reveal-delay-3">
      <div class="univ-type-badge badge-public">🏛️ Publique</div>
      <div class="univ-name">Université de Dédougou</div>
      <div class="univ-city">Dédougou</div>
      <p class="univ-desc">Université en développement avec plusieurs filières adaptées aux besoins du pays. Elle contribue au développement de la région de la Boucle du Mouhoun.</p>
      <div class="univ-tags">
        <span class="tag">Développement</span>
        <span class="tag">Sciences</span>
        <span class="tag">Gestion</span>
      </div>
    </div>

    <div class="univ-card reveal reveal-delay-4">
      <div class="univ-type-badge badge-public">🏛️ Publique</div>
      <div class="univ-name">Université Thomas Sankara</div>
      <div class="univ-city">Ouagadougou</div>
      <p class="univ-desc">Université publique moderne avec des formations en sciences et technologies. Portant le nom du célèbre président révolutionnaire, elle incarne l'ambition scientifique du pays.</p>
      <div class="univ-tags">
        <span class="tag">Sciences</span>
        <span class="tag">Technologies</span>
        <span class="tag">Ingénierie</span>
      </div>
    </div>

  </div>
</div>

<!-- PRIVÉES -->
<div class="univ-section" id="section-privee">
  <div class="section-label-bar reveal">
    <h3>🔵 Universités privées reconnues</h3>
  </div>
  <div class="univ-grid">

    <div class="univ-card privee reveal">
      <div class="univ-type-badge badge-privee">🎓 Privée</div>
      <div class="univ-name">Université Aube Nouvelle</div>
      <div class="univ-city">Ouagadougou</div>
      <p class="univ-desc">Université privée reconnue pour ses formations professionnelles en gestion, informatique et communication. Elle se distingue par un suivi personnalisé de ses étudiants.</p>
      <div class="univ-tags">
        <span class="tag">Gestion</span>
        <span class="tag">Informatique</span>
        <span class="tag">Communication</span>
      </div>
    </div>

    <div class="univ-card privee reveal reveal-delay-1">
      <div class="univ-type-badge badge-privee">🎓 Privée</div>
      <div class="univ-name">Université Africaine (ex-IAM)</div>
      <div class="univ-city">Ouagadougou</div>
      <p class="univ-desc">Institution privée orientée vers le management, le commerce et les affaires internationales. Une institution de référence pour les futurs gestionnaires et entrepreneurs.</p>
      <div class="univ-tags">
        <span class="tag">Management</span>
        <span class="tag">Commerce</span>
        <span class="tag">International</span>
      </div>
    </div>

    <div class="univ-card privee reveal reveal-delay-2">
      <div class="univ-type-badge badge-privee">🎓 Privée</div>
      <div class="univ-name">Institut Supérieur de Technologies</div>
      <div class="univ-city">Ouagadougou</div>
      <p class="univ-desc">Spécialisé dans les domaines techniques et informatiques avec une approche pratique et professionnalisante. Idéal pour ceux qui veulent une insertion rapide dans le monde du travail.</p>
      <div class="univ-tags">
        <span class="tag">Informatique</span>
        <span class="tag">Technique</span>
        <span class="tag">Pratique</span>
      </div>
    </div>

  </div>
</div>
```

  </div>
</section>

<!-- ==========================================
     COMPARAISON
========================================== -->

<section id="comparaison">
  <div class="container">

```
<div class="section-header reveal">
  <div class="section-chip">⚖️ Aide au choix</div>
  <h2 class="section-title">Université publique vs privée</h2>
  <p class="section-sub">Comprends les différences pour faire le meilleur choix selon ta situation.</p>
</div>

<div class="compare-grid reveal">

  <!-- Publique -->
  <div class="compare-card public">
    <div class="compare-icon">🏛️</div>
    <h3>Université Publique</h3>
    <ul class="compare-list">
      <li><span class="check">✅</span> Frais de scolarité très faibles (accessibles à tous)</li>
      <li><span class="check">✅</span> Diplômes officiellement reconnus par l'État</li>
      <li><span class="check">✅</span> Accès aux bourses d'État plus facile</li>
      <li><span class="check">✅</span> Large choix de filières</li>
      <li><span class="cross">❌</span> Accès difficile (concours, notes élevées requises)</li>
      <li><span class="cross">❌</span> Effectifs très élevés (surpopulation)</li>
      <li><span class="cross">❌</span> Encadrement parfois insuffisant</li>
      <li><span class="cross">❌</span> Grèves fréquentes pouvant retarder les cours</li>
    </ul>
  </div>

  <!-- Privée -->
  <div class="compare-card privee">
    <div class="compare-icon">🎓</div>
    <h3>Université Privée</h3>
    <ul class="compare-list">
      <li><span class="check">✅</span> Encadrement personnalisé et suivi régulier</li>
      <li><span class="check">✅</span> Accès plus facile (critères moins stricts)</li>
      <li><span class="check">✅</span> Formations professionnalisantes</li>
      <li><span class="check">✅</span> Moins de grèves, calendrier respecté</li>
      <li><span class="cross">❌</span> Frais de scolarité élevés</li>
      <li><span class="cross">❌</span> Moins de filières disponibles</li>
      <li><span class="cross">❌</span> Qualité variable selon l'établissement</li>
      <li><span class="cross">❌</span> Bourses d'État rarement disponibles</li>
    </ul>
  </div>

</div>

<!-- Conseil final -->
<div class="conseil-box reveal">
  <div class="conseil-icon">💡</div>
  <div>
    <h3>Comment faire ton choix ?</h3>
    <ul>
      <li>Si tu as un bon dossier scolaire → tente une université publique, tu économiseras sur les frais.</li>
      <li>Si tu veux une insertion rapide dans le monde du travail → préfère une formation privée professionnalisante.</li>
      <li>Toujours vérifier que l'établissement est reconnu par le MESRSI (Ministère de l'Enseignement Supérieur).</li>
      <li>Demande des informations aux anciens étudiants avant de t'inscrire.</li>
      <li>Pense à ta situation géographique et aux coûts de logement sur place.</li>
    </ul>
  </div>
</div>
```

  </div>
</section>

<!-- ==========================================
     PUBLICITÉ – bloc horizontal
========================================== -->

<div class="container">
  <!-- Espace Google AdSense – bannière horizontale 728×90 ou responsive -->
  <div class="ad-banner reveal" style="margin: 0 0 0 0;">
    <div class="ad-banner-inner">
      <span class="ad-placeholder-icon">🎓</span>
      <div class="ad-text">
        <strong>Formation en ligne — Prépare ton concours !</strong>
        <span>Cours de mathématiques, physique, SVT et bien plus — espace publicitaire disponible</span>
      </div>
    </div>
  </div>
</div>

<!-- ==========================================
     FORUM
========================================== -->

<section id="forum">
  <div class="container">

```
<div class="section-header reveal">
  <div class="section-chip">💬 Communauté</div>
  <h2 class="section-title">Forum des étudiants</h2>
  <p class="section-sub">Pose tes questions, partage ton expérience et aide les autres étudiants burkinabè.</p>
</div>

<div class="forum-layout">

  <!-- Colonne principale -->
  <div class="forum-main">

    <!-- Nouvelle question -->
    <div class="forum-new-post reveal">
      <h3>✏️ Poser une question</h3>
      <input
        type="text"
        class="forum-input"
        id="postTitle"
        placeholder="Titre de ta question…"
        style="height:44px;"
      />
      <textarea
        class="forum-input"
        id="postContent"
        placeholder="Décris ta situation ou ta question en détail…"
      ></textarea>
      <button class="btn btn-primary" onclick="addPost()" style="font-size:0.85rem; padding:11px 22px;">
        📤 Publier ma question
      </button>
    </div>

    <!-- Liste des posts -->
    <div class="forum-posts reveal" id="forumPosts">

      <article class="forum-post">
        <div class="post-meta">
          <div class="post-avatar avatar-green">AK</div>
          <div>
            <div class="post-author">Aminata Koné</div>
          </div>
          <span class="post-date">Il y a 2 jours</span>
        </div>
        <div class="post-question">❓ Quelle université choisir après le bac D ?</div>
        <div class="post-answer">
          Après le bac D, tu as plusieurs options : l'Université Thomas Sankara propose d'excellentes formations en sciences et technologies. Si tu vises la médecine ou la pharmacie, renseigne-toi aussi sur les concours d'entrée. Je te conseille de regarder les filières disponibles et les débouchés professionnels avant de décider.
        </div>
        <div class="post-actions">
          <button class="post-action" onclick="like(this)">👍 J'aime <span class="likes">24</span></button>
          <button class="post-action" onclick="showToast('Fonctionnalité bientôt disponible !')">💬 Répondre</button>
          <button class="post-action" onclick="showToast('Lien copié !')">🔗 Partager</button>
        </div>
      </article>

      <article class="forum-post highlight">
        <div class="post-meta">
          <div class="post-avatar avatar-gold">BT</div>
          <div>
            <div class="post-author">Boubacar Traoré</div>
          </div>
          <span class="post-date">Il y a 5 jours</span>
        </div>
        <div class="post-question">❓ Comment obtenir une bourse au Burkina Faso ?</div>
        <div class="post-answer">
          Pour obtenir une bourse, tu dois d'abord être inscrit dans une université publique reconnue. Le CNŒRS gère les bourses nationales. Les critères incluent les résultats scolaires et la situation économique de la famille. Rends-toi au service des bourses de ton université dès le début de l'année. Les dépôts se font généralement avant fin décembre.
        </div>
        <div class="post-actions">
          <button class="post-action" onclick="like(this)">👍 J'aime <span class="likes">41</span></button>
          <button class="post-action" onclick="showToast('Fonctionnalité bientôt disponible !')">💬 Répondre</button>
          <button class="post-action" onclick="showToast('Lien copié !')">🔗 Partager</button>
        </div>
      </article>

      <article class="forum-post">
        <div class="post-meta">
          <div class="post-avatar avatar-red">FO</div>
          <div>
            <div class="post-author">Fatimata Ouédraogo</div>
          </div>
          <span class="post-date">Il y a 1 semaine</span>
        </div>
        <div class="post-question">❓ Université publique ou privée : que recommandez-vous ?</div>
        <div class="post-answer">
          Ça dépend de ta situation. Si tu peux te permettre une privée, l'encadrement est généralement meilleur. Mais si les finances sont limitées, une université publique reste une excellente option. L'essentiel est de travailler sérieusement quelle que soit l'institution. Regarde aussi la section comparaison de ce site !
        </div>
        <div class="post-actions">
          <button class="post-action" onclick="like(this)">👍 J'aime <span class="likes">18</span></button>
          <button class="post-action" onclick="showToast('Fonctionnalité bientôt disponible !')">💬 Répondre</button>
          <button class="post-action" onclick="showToast('Lien copié !')">🔗 Partager</button>
        </div>
      </article>

      <article class="forum-post">
        <div class="post-meta">
          <div class="post-avatar avatar-green">SK</div>
          <div>
            <div class="post-author">Souleymane Kiénou</div>
          </div>
          <span class="post-date">Il y a 2 semaines</span>
        </div>
        <div class="post-question">❓ Quels documents préparer pour l'inscription à l'université ?</div>
        <div class="post-answer">
          En général, tu as besoin de : l'original et des copies de ton baccalauréat, des copies de ta carte d'identité, des photos d'identité, un extrait de naissance, et parfois un certificat de résidence. Vérifie les exigences spécifiques de l'université visée sur leur site ou en te rendant directement à la scolarité.
        </div>
        <div class="post-actions">
          <button class="post-action" onclick="like(this)">👍 J'aime <span class="likes">33</span></button>
          <button class="post-action" onclick="showToast('Fonctionnalité bientôt disponible !')">💬 Répondre</button>
          <button class="post-action" onclick="showToast('Lien copié !')">🔗 Partager</button>
        </div>
      </article>

    </div>
  </div>

  <!-- Sidebar forum (desktop) -->
  <aside class="forum-sidebar">

    <!-- Pub sidebar -->
    <div class="ad-sidebar reveal" style="margin-bottom:20px;">
      <div class="ad-sidebar-label">Publicité</div>
      <div class="ad-sidebar-icon">📖</div>
      <div class="ad-sidebar-text">Espace publicitaire<br/><small>Contactez-nous</small></div>
    </div>

    <div class="forum-sidebar-card reveal">
      <h4>🔥 Sujets tendances</h4>
      <ul>
        <li class="trending-item" onclick="showToast('Rubrique en cours de développement')">
          <span class="trending-num">#1</span>
          Bac 2025 : quelles filières ?
        </li>
        <li class="trending-item" onclick="showToast('Rubrique en cours de développement')">
          <span class="trending-num">#2</span>
          Bourses d'études en Chine
        </li>
        <li class="trending-item" onclick="showToast('Rubrique en cours de développement')">
          <span class="trending-num">#3</span>
          Logement étudiant Ouaga
        </li>
        <li class="trending-item" onclick="showToast('Rubrique en cours de développement')">
          <span class="trending-num">#4</span>
          Informatique ou Gestion ?
        </li>
        <li class="trending-item" onclick="showToast('Rubrique en cours de développement')">
          <span class="trending-num">#5</span>
          Master à l'étranger après licence
        </li>
      </ul>
    </div>

    <div class="forum-sidebar-card reveal">
      <h4>📊 Stats communauté</h4>
      <div style="display:flex; flex-direction:column; gap:10px; font-size:0.82rem;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="color:var(--gris);">Questions posées</span>
          <strong style="color:var(--vert);">247</strong>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="color:var(--gris);">Réponses données</span>
          <strong style="color:var(--vert);">1 082</strong>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="color:var(--gris);">Membres actifs</span>
          <strong style="color:var(--vert);">3 400+</strong>
        </div>
      </div>
    </div>

  </aside>
</div>
```

  </div>
</section>

<!-- ==========================================
     CONSEILS
========================================== -->

<section id="conseils">
  <div class="container">

```
<div class="section-header reveal">
  <div class="section-chip">📚 Guides pratiques</div>
  <h2 class="section-title">Conseils pour réussir</h2>
  <p class="section-sub">Des guides pratiques pour t'aider à chaque étape de ton parcours universitaire.</p>
</div>

<div class="conseils-grid">

  <div class="conseil-card reveal">
    <div class="conseil-emoji">🎯</div>
    <h3>Réussir à l'université</h3>
    <p>La réussite académique demande organisation, méthode et persévérance. Voici les clés essentielles.</p>
    <ul>
      <li>Assiste à tous tes cours et prends des notes</li>
      <li>Crée un planning de révision hebdomadaire</li>
      <li>Forme des groupes de travail avec tes camarades</li>
      <li>Consulte régulièrement tes professeurs</li>
      <li>Repose-toi suffisamment avant les examens</li>
    </ul>
  </div>

  <div class="conseil-card reveal reveal-delay-1">
    <div class="conseil-emoji">💰</div>
    <h3>Obtenir une bourse</h3>
    <p>Plusieurs organismes proposent des bourses aux étudiants burkinabè méritants. Voici comment postuler.</p>
    <ul>
      <li>Renseigne-toi au CNŒRS dès la rentrée</li>
      <li>Maintiens une excellente moyenne (≥ 12/20)</li>
      <li>Prépare tes documents en avance</li>
      <li>Cherche aussi les bourses d'ambassades (France, Chine, Maroc…)</li>
      <li>Consulte les ONG et fondations locales</li>
    </ul>
  </div>

  <div class="conseil-card reveal reveal-delay-2">
    <div class="conseil-emoji">🧭</div>
    <h3>Bien s'orienter</h3>
    <p>Choisir la bonne filière est crucial pour ton avenir professionnel. Prends le temps de bien réfléchir.</p>
    <ul>
      <li>Identifie tes passions et compétences naturelles</li>
      <li>Renseigne-toi sur les débouchés professionnels</li>
      <li>Parle aux professionnels du secteur visé</li>
      <li>Ne choisis pas uniquement selon les tendances</li>
      <li>Pense au marché de l'emploi local et régional</li>
    </ul>
  </div>

  <div class="conseil-card reveal reveal-delay-3">
    <div class="conseil-emoji">🌍</div>
    <h3>Étudier à l'étranger</h3>
    <p>Un diplôme obtenu à l'étranger peut booster ta carrière. Voici les étapes pour y parvenir.</p>
    <ul>
      <li>Commence à préparer dès la 2ᵉ année de licence</li>
      <li>Améliore ton niveau en français et en anglais</li>
      <li>Postule aux programmes comme Campus France</li>
      <li>Explore les bourses chinoises (CSC), marocaines, indiennes</li>
      <li>Prépare ton dossier avec rigueur</li>
    </ul>
  </div>

  <div class="conseil-card reveal reveal-delay-1">
    <div class="conseil-emoji">💼</div>
    <h3>Insertion professionnelle</h3>
    <p>Le diplôme ne suffit plus. Prépare ton entrée dans le monde du travail dès le début de tes études.</p>
    <ul>
      <li>Fais des stages dès ta 1ʳᵉ année si possible</li>
      <li>Crée ton profil LinkedIn et développe ton réseau</li>
      <li>Participe aux foires à l'emploi et concours</li>
      <li>Développe des compétences en informatique</li>
      <li>Rejoins des associations étudiantes actives</li>
    </ul>
  </div>

  <div class="conseil-card reveal reveal-delay-2">
    <div class="conseil-emoji">🧠</div>
    <h3>Gérer son stress</h3>
    <p>La vie universitaire peut être intense. Prends soin de ta santé mentale et de ton équilibre.</p>
    <ul>
      <li>Fais du sport régulièrement (30 min/jour minimum)</li>
      <li>Évite de tout remettre au lendemain</li>
      <li>Parle de tes difficultés à un proche ou conseiller</li>
      <li>Dors suffisamment (7–8 heures par nuit)</li>
      <li>Accorde-toi des moments de détente mérités</li>
    </ul>
  </div>

</div>
```

  </div>
</section>

<!-- ==========================================
     PUBLICITÉ – bande basse
========================================== -->

<div class="container" style="padding-bottom:24px;">
  <div class="ad-banner reveal">
    <div class="ad-banner-inner">
      <span class="ad-placeholder-icon">🏦</span>
      <div class="ad-text">
        <strong>Banque &amp; Services financiers pour étudiants</strong>
        <span>Compte bancaire gratuit, mobile money, prêts étudiants — Espace publicitaire 728×90</span>
      </div>
    </div>
  </div>
</div>

<!-- ==========================================
     CONTACT
========================================== -->

<section id="contact">
  <div class="container">

```
<div class="section-header reveal">
  <div class="section-chip">📩 Nous écrire</div>
  <h2 class="section-title">Contact</h2>
  <p class="section-sub">Une question ? Une suggestion ? Envoie-nous un message, nous te répondrons rapidement.</p>
</div>

<div class="contact-grid">

  <!-- Infos -->
  <div class="contact-info reveal">
    <h3>Restons en contact 🤝</h3>
    <p>Campus Faso est là pour t'aider à trouver ta voie. N'hésite pas à nous contacter pour toute question sur les universités ou pour soumettre du contenu.</p>

    <div class="contact-item">
      <div class="contact-item-icon">📧</div>
      <div>
        <div class="contact-item-label">Email</div>
        <div class="contact-item-value">
          <a href="mailto:Windbarkasteveg@gmail.com" style="color:var(--vert); font-weight:700;">Windbarkasteveg@gmail.com</a>
        </div>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-item-icon">📱</div>
      <div>
        <div class="contact-item-label">WhatsApp</div>
        <div class="contact-item-value">
          <a href="https://wa.me/22605486741" target="_blank" rel="noopener noreferrer" style="color:var(--vert); font-weight:700;">+226 05 48 67 41</a>
        </div>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-item-icon">📍</div>
      <div>
        <div class="contact-item-label">Localisation</div>
        <div class="contact-item-value">Ouagadougou, Burkina Faso</div>
      </div>
    </div>

    <div class="contact-item">
      <div class="contact-item-icon">🕐</div>
      <div>
        <div class="contact-item-label">Disponibilité</div>
        <div class="contact-item-value">Lun – Sam : 8h – 18h</div>
      </div>
    </div>

    <!-- Pub sidebar contact -->
    <div class="ad-banner reveal" style="margin-top:24px; text-align:left;">
      <div class="ad-banner-inner" style="justify-content:flex-start;">
        <span class="ad-placeholder-icon">📣</span>
        <div class="ad-text">
          <strong>Annoncez sur Campus Faso</strong>
          <span>Atteignez des milliers d'étudiants — Écrivez : Windbarkasteveg@gmail.com ou WhatsApp : +226 05 48 67 41</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Formulaire connecté à Formspree → messages reçus sur Gmail -->
  <div class="contact-form reveal reveal-delay-1">
    <form id="contactForm" action="https://formspree.io/f/maqvpelp" method="POST" onsubmit="handleSubmit(event)">
      <div class="form-row">
        <div class="form-group">
          <label for="nomContact">Nom complet *</label>
          <input type="text" id="nomContact" name="nom" placeholder="Ton nom" required />
        </div>
        <div class="form-group">
          <label for="emailContact">Email *</label>
          <input type="email" id="emailContact" name="email" placeholder="ton@email.com" required />
        </div>
      </div>
      <div class="form-group">
        <label for="sujetContact">Sujet</label>
        <select id="sujetContact" name="sujet">
          <option value="">-- Choisir un sujet --</option>
          <option>Question sur une université</option>
          <option>Demande d'informations sur les bourses</option>
          <option>Signaler une erreur</option>
          <option>Proposer du contenu</option>
          <option>Publicité / Partenariat</option>
          <option>Autre</option>
        </select>
      </div>
      <div class="form-group">
        <label for="messageContact">Message *</label>
        <textarea id="messageContact" name="message" placeholder="Écris ton message ici…" required></textarea>
      </div>
      <button type="submit" id="submitBtn" class="btn btn-primary" style="width:100%; justify-content:center;">
        📤 Envoyer le message
      </button>
      <div class="form-success" id="formSuccess">
        ✅ Message envoyé avec succès ! Tu recevras une réponse sous 24h.
      </div>
      <div id="formError" style="display:none; background:rgba(192,57,43,0.08); border:1px solid rgba(192,57,43,0.2); color:#c0392b; border-radius:10px; padding:12px 16px; font-size:0.875rem; font-weight:600; margin-top:14px; text-align:center;">
        ❌ Erreur. Réessaie ou écris à : Windbarkasteveg@gmail.com
      </div>
    </form>
  </div>

</div>
```

  </div>
</section>

<!-- ==========================================
     FOOTER
========================================== -->

<footer>
  <div class="container">
    <div class="footer-grid">

```
  <div class="footer-brand">
    <a href="#" class="logo">
      <div class="logo-icon">CF</div>
      Campus <span>Faso</span>
    </a>
    <p>La plateforme de référence pour les étudiants du Burkina Faso. Nous aidons chaque étudiant à trouver son université et à réussir son parcours académique.</p>
    <div style="display:flex; gap:10px;">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style="background:rgba(255,255,255,0.1); color:rgba(255,255,255,0.7); padding:8px 14px; border-radius:8px; font-size:0.8rem; font-weight:600; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">Facebook</a>
      <a href="https://wa.me/22605486741" target="_blank" rel="noopener noreferrer" style="background:rgba(255,255,255,0.1); color:rgba(255,255,255,0.7); padding:8px 14px; border-radius:8px; font-size:0.8rem; font-weight:600; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">WhatsApp</a>
    </div>
  </div>

  <div class="footer-col">
    <h4>Universités</h4>
    <ul>
      <li><a href="#universites" onclick="switchTab('public')">Publiques</a></li>
      <li><a href="#universites" onclick="switchTab('privee')">Privées</a></li>
      <li><a href="#comparaison">Comparer</a></li>
    </ul>
  </div>

  <div class="footer-col">
    <h4>Étudiants</h4>
    <ul>
      <li><a href="#forum">Forum</a></li>
      <li><a href="#conseils">Conseils</a></li>
      <li><a href="#conseils">Bourses</a></li>
      <li><a href="#conseils">Orientation</a></li>
    </ul>
  </div>

  <div class="footer-col">
    <h4>Informations</h4>
    <ul>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#hero">À propos</a></li>
      <li><a href="mailto:Windbarkasteveg@gmail.com">Publicité</a></li>
      <li><a href="#contact">Mentions légales</a></li>
    </ul>
  </div>

</div>

<div class="footer-bottom">
  <div class="footer-flag">
    🇧🇫 &nbsp;© 2025 Campus Faso — Tous droits réservés
  </div>
  <div style="font-size:0.78rem; opacity:0.6;">
    Fait avec ❤️ pour les étudiants burkinabè
  </div>
</div>
```

  </div>
</footer>

<!-- ==========================================
     BOUTON WHATSAPP FLOTTANT
========================================== -->

<div class="whatsapp-wrap">
  <a
    href="https://wa.me/22605486741?text=Bonjour%20Campus%20Faso%2C%20j%27ai%20une%20question%20!"
    class="whatsapp-label"
    target="_blank"
    rel="noopener noreferrer"
    aria-hidden="true"
    tabindex="-1"
  >Discuter sur WhatsApp</a>
  <a
    href="https://wa.me/22605486741?text=Bonjour%20Campus%20Faso%2C%20j%27ai%20une%20question%20!"
    class="whatsapp-btn"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Nous contacter sur WhatsApp au +226 05 48 67 41"
    title="Discuter sur WhatsApp"
  >
    <div class="whatsapp-pulse"></div>
    <div class="whatsapp-pulse"></div>
    <div class="whatsapp-online"></div>
    <svg class="whatsapp-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.65 4.802 1.782 6.82L2 30l7.38-1.742A13.94 13.94 0 0016.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.52a11.49 11.49 0 01-5.87-1.606l-.42-.25-4.376 1.032 1.054-4.27-.274-.44A11.52 11.52 0 014.48 16.004C4.48 9.65 9.65 4.48 16.004 4.48c6.354 0 11.516 5.17 11.516 11.524 0 6.352-5.162 11.516-11.516 11.516zm6.32-8.626c-.346-.174-2.05-1.012-2.37-1.128-.318-.116-.55-.174-.78.174-.232.346-.896 1.128-1.1 1.36-.2.232-.4.26-.746.086-.346-.174-1.46-.538-2.78-1.716-1.028-.918-1.722-2.05-1.924-2.396-.2-.346-.022-.532.15-.706.156-.156.346-.404.52-.606.172-.2.23-.346.346-.578.116-.23.058-.434-.028-.608-.088-.174-.78-1.878-1.068-2.572-.282-.676-.568-.584-.78-.594-.2-.01-.434-.012-.666-.012-.232 0-.608.086-.926.434-.318.346-1.214 1.186-1.214 2.89 0 1.704 1.243 3.352 1.416 3.584.174.23 2.444 3.73 5.92 5.23.826.356 1.47.57 1.974.73.83.264 1.586.226 2.182.138.666-.1 2.05-.838 2.34-1.648.29-.81.29-1.504.204-1.648-.086-.144-.318-.232-.664-.406z"/>
    </svg>
  </a>
</div>

<!-- Toast notification -->

<div id="toast" role="status" aria-live="polite"></div>

<!-- ==========================================
     JAVASCRIPT
========================================== -->

<script>
  // ========== DONNÉES – universités pour la recherche ==========
  const UNIVERSITIES = [
    { name: "Université Joseph Ki-Zerbo",   city: "Ouagadougou", type: "Publique", section: "public"  },
    { name: "Université Nazi Boni",          city: "Bobo-Dioulasso", type: "Publique", section: "public"  },
    { name: "Université Norbert Zongo",      city: "Koudougou",   type: "Publique", section: "public"  },
    { name: "Université de Dédougou",        city: "Dédougou",    type: "Publique", section: "public"  },
    { name: "Université Thomas Sankara",     city: "Ouagadougou", type: "Publique", section: "public"  },
    { name: "Université Aube Nouvelle",      city: "Ouagadougou", type: "Privée",   section: "privee"  },
    { name: "Université Africaine (ex-IAM)", city: "Ouagadougou", type: "Privée",   section: "privee"  },
    { name: "Institut Supérieur de Technologies", city: "Ouagadougou", type: "Privée", section: "privee" },
  ];

  // ========== NAVBAR SCROLL ==========
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // ========== MENU HAMBURGER ==========
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  // ========== ONGLETS UNIVERSITÉS ==========
  function switchTab(tab) {
    // Sections
    document.querySelectorAll('.univ-section').forEach(s => s.classList.remove('active'));
    document.getElementById('section-' + tab).classList.add('active');

    // Boutons
    document.getElementById('tab-public').classList.toggle('active', tab === 'public');
    document.getElementById('tab-privee').classList.toggle('active', tab === 'privee');

    // Scroll vers section
    document.getElementById('universites').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ========== RECHERCHE ==========
  const searchInput   = document.getElementById('searchInput');
  const searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { searchResults.style.display = 'none'; return; }

    const matches = UNIVERSITIES.filter(u =>
      u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = '<div style="padding:10px 12px; font-size:0.85rem; color:var(--gris);">Aucun résultat trouvé.</div>';
      searchResults.style.display = 'block';
      return;
    }

    searchResults.innerHTML = matches.map(u => `
      <div class="search-result-item" onclick="goToUniversity('${u.section}', '${u.name}')">
        <span class="search-result-icon">${u.type === 'Publique' ? '🏛️' : '🎓'}</span>
        <div>
          <div class="search-result-name">${u.name}</div>
          <div class="search-result-type">${u.type} · ${u.city}</div>
        </div>
      </div>
    `).join('');
    searchResults.style.display = 'block';
  });

  function goToUniversity(section, name) {
    searchInput.value = name;
    searchResults.style.display = 'none';
    switchTab(section);
    setTimeout(() => {
      document.getElementById('universites').scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }

  function doSearch() {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) return;
    const match = UNIVERSITIES.find(u =>
      u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q)
    );
    if (match) { goToUniversity(match.section, match.name); }
    else { showToast('Aucune université trouvée pour "' + searchInput.value + '"'); }
  }

  // Fermer résultats au clic extérieur
  document.addEventListener('click', e => {
    if (!e.target.closest('#searchInput') && !e.target.closest('#search-results')) {
      searchResults.style.display = 'none';
    }
  });

  // ========== FORUM – Ajouter un post ==========
  function addPost() {
    const title   = document.getElementById('postTitle').value.trim();
    const content = document.getElementById('postContent').value.trim();

    if (!title || !content) {
      showToast('⚠️ Remplis le titre et le message !');
      return;
    }

    const initiales = title.split(' ').slice(0,2).map(w => w[0].toUpperCase()).join('') || 'ET';
    const colors    = ['avatar-green', 'avatar-gold', 'avatar-red'];
    const color     = colors[Math.floor(Math.random() * colors.length)];

    const post = document.createElement('article');
    post.className = 'forum-post';
    post.style.animation = 'fadeUp 0.4s ease both';
    post.innerHTML = `
      <div class="post-meta">
        <div class="post-avatar ${color}">${initiales}</div>
        <div><div class="post-author">Toi</div></div>
        <span class="post-date">À l'instant</span>
      </div>
      <div class="post-question">❓ ${title}</div>
      <div class="post-answer">${content}</div>
      <div class="post-actions">
        <button class="post-action" onclick="like(this)">👍 J'aime <span class="likes">0</span></button>
        <button class="post-action" onclick="showToast('Fonctionnalité bientôt disponible !')">💬 Répondre</button>
        <button class="post-action" onclick="showToast('Lien copié !')">🔗 Partager</button>
      </div>
    `;

    const postsContainer = document.getElementById('forumPosts');
    postsContainer.insertBefore(post, postsContainer.firstChild);

    document.getElementById('postTitle').value   = '';
    document.getElementById('postContent').value = '';
    showToast('✅ Ta question a été publiée !');
  }

  // ========== LIKES ==========
  function like(btn) {
    const span = btn.querySelector('.likes');
    const isLiked = btn.classList.toggle('liked');
    span.textContent = isLiked
      ? parseInt(span.textContent) + 1
      : parseInt(span.textContent) - 1;
  }

  // ========== FORMULAIRE CONTACT — Formspree ==========
  async function handleSubmit(event) {
    event.preventDefault();

    const btn   = document.getElementById('submitBtn');
    const ok    = document.getElementById('formSuccess');
    const err   = document.getElementById('formError');
    const form  = document.getElementById('contactForm');

    // Réinitialiser messages
    ok.style.display  = 'none';
    err.style.display = 'none';

    // Bouton en chargement
    btn.innerHTML = '⏳ Envoi en cours…';
    btn.disabled  = true;

    try {
      const data     = new FormData(form);
      const response = await fetch('https://formspree.io/f/maqvpelp', {
        method:  'POST',
        body:    data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // ✅ Succès — message reçu dans Gmail
        ok.style.display = 'block';
        form.reset();
        showToast('📨 Message reçu ! On te répond bientôt.');
        btn.innerHTML = '✅ Envoyé !';
        setTimeout(() => {
          btn.innerHTML = '📤 Envoyer le message';
          btn.disabled  = false;
          ok.style.display = 'none';
        }, 5000);
      } else {
        throw new Error('Erreur serveur');
      }
    } catch (e) {
      // ❌ Erreur
      err.style.display = 'block';
      btn.innerHTML = '📤 Envoyer le message';
      btn.disabled  = false;
      showToast('❌ Erreur. Réessaie plus tard.');
    }
  }

  // ========== TOAST ==========
  let toastTimer;
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
  }

  // ========== SCROLL REVEAL ==========
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // ========== TOUCHE ENTRÉE – recherche ==========
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });
</script>

</body>
</html>
