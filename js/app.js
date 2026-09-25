/* Application du cours interactif : routage, rendu, quiz, progression et mini-outils. */

const STORAGE_KEY = "tc_progress_v1";

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) { /* stockage indisponible : progression non sauvegardée */ }
}

function markModuleDone(moduleId, score, total) {
  const progress = getProgress();
  progress[moduleId] = { done: true, score, total };
  saveProgress(progress);
  updateGlobalProgress();
}

function isModuleDone(moduleId) {
  return !!getProgress()[moduleId]?.done;
}

function updateGlobalProgress() {
  const progress = getProgress();
  const total = COURSE.modules.length;
  const done = COURSE.modules.filter(m => progress[m.id]?.done).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById("globalProgressFill").style.width = pct + "%";
  document.getElementById("globalProgressLabel").textContent = pct + "% (" + done + "/" + total + ")";
}

/* ---------------- Routeur ---------------- */

function currentPath() {
  return location.hash.replace(/^#/, "") || "/";
}

function navigate(path) {
  location.hash = path;
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  buildSidebarModuleList();
  updateGlobalProgress();
  render();

  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });
  document.getElementById("content").addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("open");
  });
});

function buildSidebarModuleList() {
  const nav = document.getElementById("moduleNav");
  nav.innerHTML = COURSE.modules.map(m => `
    <a href="#/module/${m.id}" class="nav-item" data-nav="/module/${m.id}">
      <span>${m.icon}</span> <span>${m.title}</span>
      <span class="check" data-check="${m.id}"></span>
    </a>
  `).join("");
}

function refreshSidebarChecks() {
  COURSE.modules.forEach(m => {
    const el = document.querySelector(`[data-check="${m.id}"]`);
    if (el) el.textContent = isModuleDone(m.id) ? "✓" : "";
  });
}

function setActiveNav(path) {
  document.querySelectorAll(".nav-item").forEach(a => {
    a.classList.toggle("active", a.dataset.nav === path);
  });
}

function render() {
  const path = currentPath();
  const content = document.getElementById("content");
  refreshSidebarChecks();

  const moduleMatch = path.match(/^\/module\/(.+)$/);

  if (path === "/") {
    setActiveNav("/");
    content.innerHTML = renderHome();
  } else if (path === "/propositions") {
    setActiveNav("/propositions");
    content.innerHTML = renderPropositions();
  } else if (moduleMatch) {
    const mod = COURSE.modules.find(m => m.id === moduleMatch[1]);
    if (!mod) { navigate("/"); return; }
    setActiveNav("/module/" + mod.id);
    content.innerHTML = renderModuleShell(mod);
    mountModuleWidget(mod);
    mountQuiz(mod);
  } else {
    navigate("/");
  }
  window.scrollTo(0, 0);
}

/* ---------------- Pages ---------------- */

function renderHome() {
  const progress = getProgress();
  const cards = COURSE.modules.map(m => `
    <a class="module-card" href="#/module/${m.id}">
      ${progress[m.id]?.done ? '<span class="badge-done">Terminé</span>' : ''}
      <div class="icon">${m.icon}</div>
      <h3>${m.title}</h3>
      <p>${m.summary}</p>
    </a>
  `).join("");

  return `
    <div class="hero">
      <h1>${COURSE.title}</h1>
      <p>${COURSE.subtitle}</p>
      <a href="#/module/${COURSE.modules[0].id}" class="btn">Commencer le cours →</a>
    </div>
    <div class="module-grid">${cards}</div>
    <div class="hero" style="padding-top:1rem">
      <h2 style="margin-bottom:0.3rem">🎮 Leçons spéciales</h2>
      <p>Des leçons jeu complètes, avec robot guide, chrono, badges et bilan imprimable.</p>
    </div>
    <div class="module-grid">
      <a class="module-card" href="lecons/TC_M1_L3_bit_octet.html">
        <div class="icon">🔌</div>
        <h3>Le bit et l'octet</h3>
        <p>Module 1, Leçon 3 — le langage binaire, l'octet, les conversions, les unités de mesure et le code ASCII.</p>
      </a>
    </div>
  `;
}

function renderPropositions() {
  const cards = COURSE.proposals.map(p => `
    <div class="proposal-card">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `).join("");

  return `
    <div class="hero">
      <h1>Propositions pour la suite</h1>
      <p>Voici des idées de modules à ajouter au cours. Dites-nous lesquels vous intéressent le plus et nous les développerons en priorité.</p>
    </div>
    <div class="proposal-grid">${cards}</div>
  `;
}

function renderModuleShell(mod) {
  const idx = COURSE.modules.findIndex(m => m.id === mod.id);
  const prev = COURSE.modules[idx - 1];
  const next = COURSE.modules[idx + 1];

  return `
    <div class="module-header">
      <div class="eyebrow">Module ${idx + 1} / ${COURSE.modules.length}</div>
      <h1>${mod.icon} ${mod.title}</h1>
    </div>
    <div class="lesson">${mod.content}</div>
    <div class="widget" id="widgetBox"><h4>🛠️ À vous de jouer</h4><div id="widgetInner"></div></div>
    <div class="quiz-box" id="quizBox"></div>
    <div class="module-nav-buttons">
      ${prev ? `<a class="btn secondary" href="#/module/${prev.id}">← ${prev.title}</a>` : `<span></span>`}
      ${next ? `<a class="btn" href="#/module/${next.id}">${next.title} →</a>` : `<a class="btn" href="#/propositions">Voir les propositions →</a>`}
    </div>
  `;
}

/* ---------------- Quiz ---------------- */

function mountQuiz(mod) {
  const box = document.getElementById("quizBox");
  const state = { index: 0, score: 0, answered: false };

  function renderQuestion() {
    const q = mod.quiz[state.index];
    box.innerHTML = `
      <div class="quiz-progress">Quiz — question ${state.index + 1} / ${mod.quiz.length}</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${opt}</button>`).join("")}
      </div>
      <div id="quizExplain"></div>
      <div style="margin-top:1rem; text-align:right;">
        <button class="btn" id="quizNextBtn" style="display:none;">${state.index === mod.quiz.length - 1 ? "Voir le résultat" : "Question suivante →"}</button>
      </div>
    `;

    box.querySelectorAll(".quiz-option").forEach(btn => {
      btn.addEventListener("click", () => {
        if (state.answered) return;
        state.answered = true;
        const i = Number(btn.dataset.i);
        const correct = i === q.correct;
        if (correct) state.score++;

        box.querySelectorAll(".quiz-option").forEach((b2, i2) => {
          b2.disabled = true;
          if (i2 === q.correct) b2.classList.add("correct");
          else if (i2 === i) b2.classList.add("incorrect");
        });

        document.getElementById("quizExplain").innerHTML =
          `<div class="quiz-explain">${correct ? "✅ Exact ! " : "❌ Pas tout à fait. "}${q.explain}</div>`;
        document.getElementById("quizNextBtn").style.display = "inline-flex";
      });
    });

    document.getElementById("quizNextBtn").addEventListener("click", () => {
      state.index++;
      state.answered = false;
      if (state.index < mod.quiz.length) {
        renderQuestion();
      } else {
        renderResult();
      }
    });
  }

  function renderResult() {
    markModuleDone(mod.id, state.score, mod.quiz.length);
    refreshSidebarChecks();
    box.innerHTML = `
      <div class="quiz-result">
        <div class="score">${state.score} / ${mod.quiz.length}</div>
        <p>Module marqué comme terminé ✓</p>
        <button class="btn secondary" id="retryBtn">Refaire le quiz</button>
      </div>
    `;
    document.getElementById("retryBtn").addEventListener("click", () => {
      state.index = 0; state.score = 0; state.answered = false;
      renderQuestion();
    });
  }

  renderQuestion();
}

/* ---------------- Widgets ---------------- */

function mountModuleWidget(mod) {
  const inner = document.getElementById("widgetInner");
  const type = mod.widget?.type;
  const renderers = {
    binary: renderBinaryWidget,
    sort: renderSortWidget,
    playground: renderPlaygroundWidget,
    password: renderPasswordWidget,
    array: renderArrayWidget,
    classify: renderClassifyWidget,
    dns: renderDnsWidget
  };
  if (renderers[type]) {
    renderers[type](inner);
  } else {
    document.getElementById("widgetBox").style.display = "none";
  }
}

/* --- Convertisseur binaire (module architecture) --- */
function renderBinaryWidget(el) {
  let value = 42;
  el.innerHTML = `
    <div class="binary-tool">
      <p>Entrez un nombre (0–255), ou cliquez sur les bits pour construire un nombre :</p>
      <input type="number" id="binInput" min="0" max="255" value="${value}">
      <div class="bit-row" id="bitRow"></div>
    </div>
  `;
  const input = document.getElementById("binInput");
  const row = document.getElementById("bitRow");

  function draw() {
    const bits = value.toString(2).padStart(8, "0").split("");
    row.innerHTML = bits.map((b, i) => {
      const placeValue = 2 ** (7 - i);
      return `<div class="bit ${b === "1" ? "on" : ""}" data-place="${placeValue}">${b}<span class="bit-value">${placeValue}</span></div>`;
    }).join("");
    row.querySelectorAll(".bit").forEach(bitEl => {
      bitEl.addEventListener("click", () => {
        const place = Number(bitEl.dataset.place);
        value = bitEl.classList.contains("on") ? value - place : value + place;
        input.value = value;
        draw();
      });
    });
  }

  input.addEventListener("input", () => {
    let v = Number(input.value);
    if (isNaN(v)) v = 0;
    value = Math.max(0, Math.min(255, v));
    draw();
  });

  draw();
}

/* --- Visualiseur de tri à bulles (module algorithmique) --- */
function renderSortWidget(el) {
  el.innerHTML = `
    <div class="sort-tool">
      <p>Tri à bulles, étape par étape : on compare deux voisins et on les échange s'ils sont mal ordonnés.</p>
      <div class="sort-track" id="sortTrack"></div>
      <div class="sort-status" id="sortStatus">Cliquez sur "Étape suivante" pour démarrer.</div>
      <div class="sort-controls">
        <button class="btn" id="sortStepBtn">Étape suivante ▶</button>
        <button class="btn secondary" id="sortResetBtn">Nouveau tableau 🔀</button>
      </div>
    </div>
  `;

  let arr, i, j, sortedFrom, done;

  function reset() {
    arr = Array.from({ length: 7 }, () => 10 + Math.floor(Math.random() * 90));
    i = 0; j = 0; sortedFrom = arr.length; done = false;
    document.getElementById("sortStatus").textContent = "Cliquez sur \"Étape suivante\" pour démarrer.";
    draw([]);
  }

  function draw(highlightClasses) {
    const track = document.getElementById("sortTrack");
    const max = Math.max(...arr);
    track.innerHTML = arr.map((v, idx) => {
      let cls = "sort-bar";
      if (idx >= sortedFrom) cls += " sorted";
      if (highlightClasses[idx]) cls += " " + highlightClasses[idx];
      const h = Math.round((v / max) * 130) + 20;
      return `<div class="${cls}" style="height:${h}px">${v}</div>`;
    }).join("");
  }

  function step() {
    if (done) return;
    if (sortedFrom <= 1) {
      done = true;
      sortedFrom = 0;
      draw([]);
      document.getElementById("sortStatus").textContent = "✅ Tableau trié !";
      return;
    }
    if (j >= sortedFrom - 1) {
      j = 0;
      sortedFrom--;
      if (sortedFrom <= 1) {
        done = true;
        sortedFrom = 0;
        draw([]);
        document.getElementById("sortStatus").textContent = "✅ Tableau trié !";
        return;
      }
    }
    const highlight = {};
    if (arr[j] > arr[j + 1]) {
      const tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
      highlight[j] = "swap"; highlight[j + 1] = "swap";
      document.getElementById("sortStatus").textContent = `Comparaison : ${arr[j+1]} > ${arr[j]} → on échange.`;
    } else {
      highlight[j] = "compare"; highlight[j + 1] = "compare";
      document.getElementById("sortStatus").textContent = `Comparaison : ${arr[j]} ≤ ${arr[j+1]} → pas d'échange.`;
    }
    draw(highlight);
    j++;
  }

  document.getElementById("sortStepBtn").addEventListener("click", step);
  document.getElementById("sortResetBtn").addEventListener("click", reset);
  reset();
}

/* --- Bac à sable JavaScript (module programmation) --- */
function renderPlaygroundWidget(el) {
  const defaultCode = `// Modifiez ce code puis cliquez sur "Exécuter"
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
  console.log("i =", i, "total =", total);
}
console.log("Somme finale :", total);`;

  el.innerHTML = `
    <div class="playground">
      <textarea id="codeInput" spellcheck="false">${defaultCode}</textarea>
      <div>
        <button class="btn" id="runBtn" style="margin-top:0.6rem;">▶ Exécuter</button>
      </div>
      <div class="playground-output" id="codeOutput">La sortie de votre code (console.log) s'affichera ici.</div>
    </div>
  `;

  document.getElementById("runBtn").addEventListener("click", () => {
    const code = document.getElementById("codeInput").value;
    runSandboxed(code, (lines) => {
      const out = document.getElementById("codeOutput");
      out.innerHTML = lines.length
        ? lines.map(l => `<div class="${l.type === "error" ? "err" : ""}">${escapeHtml(l.text)}</div>`).join("")
        : "(aucune sortie — essayez d'ajouter des console.log)";
    });
  });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

function runSandboxed(code, callback) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("sandbox", "allow-scripts");
  iframe.style.display = "none";

  const listener = (event) => {
    if (event.source !== iframe.contentWindow) return;
    window.removeEventListener("message", listener);
    callback(event.data);
    iframe.remove();
  };
  window.addEventListener("message", listener);

  const srcdoc = `
    <script>
      const lines = [];
      const send = () => parent.postMessage(lines, "*");
      console.log = (...args) => { lines.push({type:"log", text: args.map(String).join(" ")}); };
      console.error = (...args) => { lines.push({type:"error", text: args.map(String).join(" ")}); };
      try {
        ${code}
      } catch (e) {
        lines.push({type:"error", text: "Erreur : " + e.message});
      }
      send();
    <\/script>
  `;
  iframe.srcdoc = srcdoc;
  document.body.appendChild(iframe);

  setTimeout(() => {
    if (document.body.contains(iframe)) {
      window.removeEventListener("message", listener);
      callback([{ type: "error", text: "Le code met trop de temps à s'exécuter (boucle infinie ?)." }]);
      iframe.remove();
    }
  }, 2000);
}

/* --- Testeur de mot de passe (module sécurité) --- */
function renderPasswordWidget(el) {
  el.innerHTML = `
    <div class="password-tool">
      <p>Testez la robustesse d'un mot de passe (rien n'est envoyé ni enregistré) :</p>
      <input type="text" id="pwInput" placeholder="Tapez un mot de passe d'exemple...">
      <div class="strength-track"><div class="strength-fill" id="strengthFill"></div></div>
      <div class="strength-label" id="strengthLabel"></div>
      <div class="tips" id="strengthTips"></div>
    </div>
  `;
  const input = document.getElementById("pwInput");
  const fill = document.getElementById("strengthFill");
  const label = document.getElementById("strengthLabel");
  const tips = document.getElementById("strengthTips");

  input.addEventListener("input", () => {
    const pw = input.value;
    let score = 0;
    const missing = [];
    if (pw.length >= 8) score++; else missing.push("au moins 8 caractères");
    if (pw.length >= 12) score++;
    if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++; else missing.push("majuscules et minuscules");
    if (/[0-9]/.test(pw)) score++; else missing.push("au moins un chiffre");
    if (/[^A-Za-z0-9]/.test(pw)) score++; else missing.push("au moins un symbole (!, %, #...)");

    const levels = [
      { pct: 10, label: "Très faible", color: "var(--danger)" },
      { pct: 30, label: "Faible", color: "var(--danger)" },
      { pct: 55, label: "Moyen", color: "var(--warning)" },
      { pct: 80, label: "Fort", color: "var(--success)" },
      { pct: 100, label: "Très fort", color: "var(--success)" }
    ];
    const lvl = levels[Math.min(score, 4)];
    fill.style.width = pw ? lvl.pct + "%" : "0%";
    fill.style.background = lvl.color;
    label.textContent = pw ? "Robustesse : " + lvl.label : "";
    tips.textContent = (pw && missing.length) ? "Pour renforcer : " + missing.join(", ") + "." : (pw ? "Excellent ! 👍" : "");
  });
}

/* --- Tableaux interactifs (module structures de données) --- */
function renderArrayWidget(el) {
  let arr = ["pomme", "banane", "cerise"];
  el.innerHTML = `
    <div class="array-tool">
      <p>Manipulez un tableau et observez le code JavaScript correspondant :</p>
      <div class="arr-row" id="arrRow"></div>
      <div class="sort-controls">
        <button class="btn secondary" id="pushBtn">push("mangue")</button>
        <button class="btn secondary" id="popBtn">pop()</button>
        <button class="btn secondary" id="shiftBtn">shift()</button>
      </div>
      <pre><code id="arrCode"></code></pre>
    </div>
  `;
  function draw() {
    document.getElementById("arrRow").innerHTML = arr.map((v, i) =>
      `<div class="arr-cell"><span class="idx">${i}</span>${v}</div>`
    ).join("") || "<em>(tableau vide)</em>";
    document.getElementById("arrCode").textContent = `let fruits = [${arr.map(v => `"${v}"`).join(", ")}];`;
  }
  document.getElementById("pushBtn").addEventListener("click", () => { arr.push("mangue"); draw(); });
  document.getElementById("popBtn").addEventListener("click", () => { arr.pop(); draw(); });
  document.getElementById("shiftBtn").addEventListener("click", () => { arr.shift(); draw(); });
  draw();
}

/* --- Classification matériel / logiciel (module intro) --- */
function renderClassifyWidget(el) {
  const items = [
    { name: "Processeur (CPU)", type: "materiel" },
    { name: "Navigateur web", type: "logiciel" },
    { name: "Clavier", type: "materiel" },
    { name: "Système d'exploitation", type: "logiciel" },
    { name: "Écran", type: "materiel" },
    { name: "Jeu vidéo", type: "logiciel" }
  ];
  const state = {};

  el.innerHTML = `
    <div class="classify-tool">
      <p>Classez chaque élément : est-ce du matériel ou du logiciel ?</p>
      <div class="drop-zone" id="chipZone"></div>
      <button class="btn" id="checkBtn" style="margin-top:0.9rem;">Vérifier mes réponses</button>
      <div id="classifyResult"></div>
    </div>
  `;

  function draw() {
    document.getElementById("chipZone").innerHTML = items.map((it, i) => {
      const chosen = state[i];
      let cls = "chip";
      return `
        <span style="display:inline-flex; flex-direction:column; gap:4px; align-items:center;">
          <span class="${cls}" data-i="${i}">${it.name}</span>
          <span style="display:flex; gap:4px;">
            <button class="btn secondary" style="padding:0.2rem 0.5rem; font-size:0.75rem;" data-choose="${i}" data-type="materiel">Matériel</button>
            <button class="btn secondary" style="padding:0.2rem 0.5rem; font-size:0.75rem;" data-choose="${i}" data-type="logiciel">Logiciel</button>
          </span>
        </span>
      `;
    }).join("");

    el.querySelectorAll("[data-choose]").forEach(btn => {
      btn.addEventListener("click", () => {
        state[btn.dataset.choose] = btn.dataset.type;
        draw();
      });
    });

    items.forEach((it, i) => {
      const chip = el.querySelector(`.chip[data-i="${i}"]`);
      if (!chip) return;
      chip.classList.remove("placed-ok", "placed-bad");
      if (state[i]) chip.textContent = it.name + " → " + (state[i] === "materiel" ? "Matériel" : "Logiciel");
    });
  }

  document.getElementById("checkBtn").addEventListener("click", () => {
    let correct = 0;
    items.forEach((it, i) => {
      const chip = el.querySelector(`.chip[data-i="${i}"]`);
      if (!chip) return;
      if (state[i] === it.type) { chip.classList.add("placed-ok"); chip.classList.remove("placed-bad"); correct++; }
      else if (state[i]) { chip.classList.add("placed-bad"); chip.classList.remove("placed-ok"); }
    });
    document.getElementById("classifyResult").innerHTML =
      `<p style="margin-top:0.8rem;"><strong>${correct} / ${items.length}</strong> bonnes réponses.</p>`;
  });

  draw();
}

/* --- Simulation DNS (module réseaux) --- */
function renderDnsWidget(el) {
  const steps = [
    "1️⃣ Vous tapez « wikipedia.org » dans le navigateur.",
    "2️⃣ Le navigateur interroge un serveur DNS : « quelle est l'adresse IP de wikipedia.org ? »",
    "3️⃣ Le DNS répond avec une adresse IP, par ex. 91.198.174.192.",
    "4️⃣ Le navigateur envoie une requête HTTPS à cette adresse.",
    "5️⃣ Le serveur renvoie la page, affichée dans votre navigateur."
  ];
  el.innerHTML = `
    <div class="dns-tool">
      <p>Simulez ce qu'il se passe quand vous visitez un site :</p>
      <button class="btn" id="dnsStartBtn">▶ Lancer la simulation</button>
      <div class="dns-steps" id="dnsSteps">
        ${steps.map(s => `<div class="dns-step">${s}</div>`).join("")}
      </div>
    </div>
  `;
  document.getElementById("dnsStartBtn").addEventListener("click", (e) => {
    e.target.disabled = true;
    const stepEls = document.querySelectorAll("#dnsSteps .dns-step");
    stepEls.forEach(s => s.classList.remove("active"));
    let i = 0;
    const interval = setInterval(() => {
      stepEls.forEach(s => s.classList.remove("active"));
      stepEls[i].classList.add("active");
      i++;
      if (i >= stepEls.length) {
        clearInterval(interval);
        e.target.disabled = false;
      }
    }, 900);
  });
}
