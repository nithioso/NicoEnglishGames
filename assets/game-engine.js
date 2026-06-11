(function(){
  "use strict";
  const $ = (id) => document.getElementById(id);
  const data = window.NEG_GAME_DATA;
  if(!data){ document.body.innerHTML = "<p>Game data not found.</p>"; return; }
  const storageKey = `NEG_PROGRESS_${data.slug}`;
  const voiceKey = "NEG_VOICE_SETTINGS";
  const defaultState = {score:0, lives:5, completed:{}, active:null, current:null, streak:0};
  let state = loadState();
  let voices = [];
  let selectedWords = [];

  function loadState(){
    try { return Object.assign({}, defaultState, JSON.parse(localStorage.getItem(storageKey) || "{}")); }
    catch(e){ return {...defaultState}; }
  }
  function saveState(){ localStorage.setItem(storageKey, JSON.stringify(state)); }
  function resetState(){ state = {...defaultState, completed:{}}; selectedWords=[]; saveState(); renderApp(firstOpenMission()); }
  function loadVoiceSettings(){
    try { return Object.assign({rate:.86, pitch:1.02, voiceName:""}, JSON.parse(localStorage.getItem(voiceKey) || "{}")); }
    catch(e){ return {rate:.86, pitch:1.02, voiceName:""}; }
  }
  function saveVoiceSettings(settings){ localStorage.setItem(voiceKey, JSON.stringify(settings)); }
  function normalize(v){ return String(v || "").toLowerCase().trim().replace(/[’']/g,"'").replace(/[?!.,]/g,"").replace(/\s+/g," "); }
  function shuffle(arr){ return [...arr].sort(()=>Math.random()-.5); }
  function missionById(id){ return data.missions.find(m => m.id === id); }
  function missionIndex(id){ return data.missions.findIndex(m => m.id === id); }
  function isUnlocked(id){ const idx = missionIndex(id); return idx === 0 || !!state.completed[data.missions[idx-1].id]; }
  function firstOpenMission(){ return data.missions.find(m => !state.completed[m.id] && isUnlocked(m.id))?.id || data.missions[0].id; }
  function completedCount(){ return data.missions.filter(m => state.completed[m.id]).length; }
  function getItems(m){ return m.items || []; }
  function passTarget(m){ return Math.min(m.passScore || Math.ceil(getItems(m).length * .7), getItems(m).length); }
  function escapeHtml(s){ return String(s ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c])); }
  function escapeForAttr(s){ return String(s || "").replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/\n/g," "); }
  function completedPct(){ return Math.round((completedCount()/data.missions.length)*100); }

  function refreshVoices(){
    if(!("speechSynthesis" in window)) return;
    voices = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang || ""));
    const voiceSelect = $("voiceSelect");
    if(!voiceSelect) return;
    const settings = loadVoiceSettings();
    const opts = voices.map(v => `<option value="${escapeHtml(v.name)}">${escapeHtml(v.name)} · ${escapeHtml(v.lang)}</option>`).join("");
    voiceSelect.innerHTML = `<option value="">Auto best English voice</option>${opts}`;
    voiceSelect.value = settings.voiceName || "";
  }
  function bestVoice(){
    const settings = loadVoiceSettings();
    const exact = voices.find(v => v.name === settings.voiceName);
    if(exact) return exact;
    const prefer = ["Jenny","Aria","Guy","Sonia","Ryan","Google US English","Google UK English Female","Google UK English Male","Samantha","Alex","Daniel","Karen"];
    return prefer.map(name => voices.find(v => (v.name || "").includes(name))).find(Boolean) || voices.find(v => v.lang === "en-US") || voices[0] || null;
  }
  function speak(text, slow){
    if(!("speechSynthesis" in window)) return;
    speechSynthesis.cancel(); refreshVoices();
    const settings = loadVoiceSettings();
    const u = new SpeechSynthesisUtterance(text);
    const v = bestVoice();
    if(v) u.voice = v;
    u.lang = v?.lang || "en-US";
    u.rate = slow ? Math.max(.62, Number(settings.rate || .86) - .18) : Number(settings.rate || .86);
    u.pitch = Number(settings.pitch || 1.02);
    speechSynthesis.speak(u);
  }
  function applyBestVoice(){
    refreshVoices();
    const v = bestVoice();
    const settings = loadVoiceSettings();
    settings.voiceName = v?.name || "";
    saveVoiceSettings(settings);
    refreshVoices();
    speak("Hello Nicolás. Let's practice English. You can do it!");
  }
  window.NEG_speak = speak;
  window.NEG_reset = resetState;
  window.NEG_applyBestVoice = applyBestVoice;

  function renderApp(openId){
    state.active = openId || state.active || firstOpenMission();
    saveState();
    const root = $("app");
    const pct = completedPct();
    root.innerHTML = `
      <div class="grid">
        <aside class="side-card">
          <div class="game-title"><div class="game-icon">${data.icon || "🎮"}</div><div><h3>${escapeHtml(data.shortTitle || data.title)}</h3><p style="margin:2px 0 0">${escapeHtml(data.subtitle || "")}</p></div></div>
          <div class="stat-grid">
            <div class="stat"><b>${state.score}</b><span>Points</span></div>
            <div class="stat"><b>${state.lives}</b><span>Lives</span></div>
            <div class="stat"><b>${state.streak}</b><span>Streak</span></div>
          </div>
          <div class="progress" aria-label="Progress"><span style="width:${pct}%"></span></div>
          <p class="hint"><b>${pct}%</b> complete · ${completedCount()}/${data.missions.length} missions</p>
          <div class="mission-list">${data.missions.map((m,i)=>missionButton(m,i)).join("")}</div>
          <div class="voice-panel">
            <label for="voiceSelect">English voice</label>
            <select id="voiceSelect" aria-label="English voice"></select>
            <div class="range-wrap"><input id="rateRange" type="range" min="0.6" max="1.1" step="0.01" aria-label="Voice speed"><span id="rateText"></span></div>
            <div class="range-wrap"><input id="pitchRange" type="range" min="0.8" max="1.25" step="0.01" aria-label="Voice pitch"><span id="pitchText"></span></div>
            <button class="secondary" onclick="NEG_applyBestVoice()">✨ Best voice</button>
          </div>
          <div class="btn-row"><button class="danger" onclick="NEG_reset()">Reset game</button><a class="ghost" href="../../">Home</a></div>
        </aside>
        <main class="game-shell">
          <div class="game-header">
            <div><span class="kicker">${escapeHtml(data.levelLabel || "English game")}</span><h2>${escapeHtml(data.title)}</h2><p style="margin:0">${escapeHtml(data.goal || "")}</p></div>
            <div class="top-tools"><button class="secondary" onclick="NEG_speak('${escapeForAttr(data.speakIntro || data.title)}')">🔊 Intro</button></div>
          </div>
          <div class="mobile-note">📱 Mobile mode: use taps. No drag-and-drop is required.</div>
          <section id="missionArea"></section>
        </main>
      </div>`;
    initVoicePanel();
    renderMission(state.active);
  }
  function missionButton(m,i){
    const locked = !isUnlocked(m.id), done = !!state.completed[m.id], active = state.active === m.id;
    return `<button class="mission-btn ${locked?'locked':''} ${done?'done':''} ${active?'active':''}" ${locked?'disabled':''} onclick="NEG_openMission('${m.id}')"><span>${done?'✅':locked?'🔒':'▶️'} ${i+1}. ${escapeHtml(m.title)}<small>${escapeHtml(m.skill || '')}</small></span><b>${passTarget(m)}/${getItems(m).length}</b></button>`;
  }
  function initVoicePanel(){
    const settings = loadVoiceSettings(); refreshVoices();
    const voiceSelect = $("voiceSelect"), rate = $("rateRange"), pitch = $("pitchRange");
    if(!voiceSelect || !rate || !pitch) return;
    rate.value = settings.rate; pitch.value = settings.pitch;
    $("rateText").textContent = `${Number(rate.value).toFixed(2)}x`; $("pitchText").textContent = Number(pitch.value).toFixed(2);
    voiceSelect.onchange = () => { const s=loadVoiceSettings(); s.voiceName = voiceSelect.value; saveVoiceSettings(s); speak("Voice selected."); };
    rate.oninput = () => { const s=loadVoiceSettings(); s.rate = Number(rate.value); saveVoiceSettings(s); $("rateText").textContent = `${Number(rate.value).toFixed(2)}x`; };
    pitch.oninput = () => { const s=loadVoiceSettings(); s.pitch = Number(pitch.value); saveVoiceSettings(s); $("pitchText").textContent = Number(pitch.value).toFixed(2); };
  }
  window.NEG_openMission = function(id){ if(!isUnlocked(id)) return; state.current = null; selectedWords=[]; renderApp(id); };

  function renderMission(id){
    const m = missionById(id); if(!m) return;
    const area = $("missionArea");
    if(!state.current || state.current.id !== id){ state.current = {id, i:0, correct:0, mistakes:0}; saveState(); }
    const intro = state.current.i === 0 ? `<div class="feedback show info"><b>Mission:</b> ${escapeHtml(m.intro || '')}<br><b>Target:</b> ${passTarget(m)} correct out of ${getItems(m).length}.</div>` : "";
    area.innerHTML = intro + `<div id="questionHost"></div>`;
    renderQuestion();
  }
  function renderQuestion(){
    const m = missionById(state.current.id), i = state.current.i, item = getItems(m)[i];
    const host = $("questionHost");
    if(!item){ finishMission(); return; }
    const common = `<div class="mission-meta"><span class="pill">${escapeHtml(m.skill || 'Practice')}</span><span class="pill green">Question ${i+1}/${getItems(m).length}</span><span class="pill orange">Need ${passTarget(m)}</span></div>`;
    if(m.type === "choice") return renderChoice(host, common, item);
    if(m.type === "category") return renderCategory(host, common, item, m);
    if(m.type === "type") return renderType(host, common, item);
    if(m.type === "build") return renderBuild(host, common, item);
    if(m.type === "listen") return renderListen(host, common, item);
    if(m.type === "dialogue") return renderDialogue(host, common, item);
    if(m.type === "pronounce") return renderPronounce(host, common, item);
    if(m.type === "reading") return renderReading(host, common, item);
  }
  function renderChoice(host, common, item){
    host.innerHTML = `<div class="q-panel">${common}<div class="question">${escapeHtml(item.q)}</div>${speakButtons(item.speak || item.q)}<p class="hint">${escapeHtml(item.hint || '')}</p><div class="options">${shuffle(item.options).map(o => `<button class="option" data-value="${escapeHtml(o)}">${escapeHtml(o)} <span>›</span></button>`).join("")}</div><div id="fb" class="feedback"></div></div>`;
    bindOptions((v,btn)=>checkAnswer(v, item.answer, item.explanation, btn));
  }
  function renderCategory(host, common, item, m){
    host.innerHTML = `<div class="q-panel">${common}<div class="question">${escapeHtml(item.term)}</div>${speakButtons(item.term)}<p class="hint">${escapeHtml(item.q || 'Choose the correct category.')}</p><div class="options">${m.categories.map(c => `<button class="option" data-value="${escapeHtml(c.id)}"><span><b>${escapeHtml(c.label)}</b><br><small>${escapeHtml(c.tip || '')}</small></span><span>›</span></button>`).join("")}</div><div id="fb" class="feedback"></div></div>`;
    bindOptions((v,btn)=>checkAnswer(v, item.answer, item.explanation, btn, true));
  }
  function renderType(host, common, item){
    host.innerHTML = `<div class="q-panel">${common}<div class="question">${escapeHtml(item.q)}</div>${speakButtons(item.speak || item.q)}<p class="hint">${escapeHtml(item.hint || 'Type the answer.')}</p><div class="input-line"><input id="answerInput" autocomplete="off" autocapitalize="none" spellcheck="false" inputmode="text" placeholder="Write your answer"><button class="primary" id="checkBtn">Check</button></div><div id="fb" class="feedback"></div></div>`;
    const input = $("answerInput"); input.focus(); $("checkBtn").onclick = () => checkType(item); input.addEventListener("keydown", e => { if(e.key === "Enter") checkType(item); });
  }
  function renderBuild(host, common, item){
    selectedWords = [];
    host.innerHTML = `<div class="q-panel">${common}<div class="question">${escapeHtml(item.q || 'Build the sentence')}</div>${speakButtons(item.answer)}<p class="hint">Tap words in order. This works better than drag-and-drop on mobile.</p><div id="sentenceBox" class="sentence-box"></div><div class="word-bank">${shuffle(item.words).map(w => `<button class="word" data-word="${escapeHtml(w)}">${escapeHtml(w)}</button>`).join("")}</div><div class="btn-row"><button class="primary" id="checkBtn">Check sentence</button><button class="secondary" id="clearBtn">Clear</button></div><div id="fb" class="feedback"></div></div>`;
    document.querySelectorAll(".word-bank .word").forEach(btn => btn.onclick = () => { selectedWords.push(btn.dataset.word); btn.disabled=true; btn.style.opacity=.45; renderSentenceBox(); });
    $("clearBtn").onclick = () => renderBuild(host, common, item);
    $("checkBtn").onclick = () => checkAnswer(selectedWords.join(" "), item.answer, item.explanation, null);
  }
  function renderSentenceBox(){ $("sentenceBox").innerHTML = selectedWords.map((w,i)=>`<button class="word" onclick="NEG_removeWord(${i})">${escapeHtml(w)}</button>`).join(""); }
  window.NEG_removeWord = function(index){ selectedWords.splice(index,1); renderSentenceBox(); };
  function renderListen(host, common, item){
    host.innerHTML = `<div class="q-panel">${common}<div class="question">Listen and choose</div><div class="btn-row"><button class="primary" onclick="NEG_speak('${escapeForAttr(item.sentence)}')">🔊 Listen</button><button class="secondary" onclick="NEG_speak('${escapeForAttr(item.sentence)}', true)">🐢 Slow</button></div><p class="hint">${escapeHtml(item.hint || 'What did you hear?')}</p><div class="options">${shuffle(item.options).map(o => `<button class="option" data-value="${escapeHtml(o)}">${escapeHtml(o)} <span>›</span></button>`).join("")}</div><div id="fb" class="feedback"></div></div>`;
    setTimeout(()=>speak(item.sentence),250);
    bindOptions((v,btn)=>checkAnswer(v, item.answer, `<b>${escapeHtml(item.sentence)}</b><br>${escapeHtml(item.explanation || '')}`, btn));
  }
  function renderDialogue(host, common, item){
    host.innerHTML = `<div class="q-panel">${common}<div class="dialogue-card"><b>${escapeHtml(item.place)}</b>${item.lines.map(l=>`<div class="dialogue-line">${escapeHtml(l)}</div>`).join("")}</div>${speakButtons(item.lines.join(' '))}<p class="hint">Choose the most natural answer.</p><div class="options">${shuffle(item.options).map(o => `<button class="option" data-value="${escapeHtml(o)}">${escapeHtml(o)} <span>›</span></button>`).join("")}</div><div id="fb" class="feedback"></div></div>`;
    bindOptions((v,btn)=>checkAnswer(v, item.answer, item.explanation, btn));
  }
  function renderReading(host, common, item){
    host.innerHTML = `<div class="q-panel">${common}<div class="reading-card">${escapeHtml(item.text)}</div>${speakButtons(item.text)}<div class="question">${escapeHtml(item.q)}</div><div class="options">${shuffle(item.options).map(o => `<button class="option" data-value="${escapeHtml(o)}">${escapeHtml(o)} <span>›</span></button>`).join("")}</div><div id="fb" class="feedback"></div></div>`;
    bindOptions((v,btn)=>checkAnswer(v, item.answer, item.explanation, btn));
  }
  function renderPronounce(host, common, item){
    const supported = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    host.innerHTML = `<div class="q-panel">${common}<div class="question">Say it: ${escapeHtml(item.sentence)}</div>${speakButtons(item.sentence)}<p class="hint">Practice pronunciation. If the microphone is not available, press “I practiced it”.</p><div class="btn-row"><button class="primary" id="micBtn" ${supported?'':'disabled'}>🎙️ Use microphone</button><button class="secondary" id="doneBtn">✅ I practiced it</button></div><div id="fb" class="feedback"></div></div>`;
    $("doneBtn").onclick = () => { state.current.correct++; state.score += 8; state.streak++; showFeedback(true, `Good practice. Repeat one more time: <b>${escapeHtml(item.sentence)}</b>`); nextButton(); };
    if(supported){ $("micBtn").onclick = () => runSpeechRecognition(item); }
  }
  function runSpeechRecognition(item){
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new Rec(); rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 1;
    showFeedback(true, "Listening...");
    rec.onresult = e => {
      const heard = e.results[0][0].transcript;
      const expected = normalize(item.expected || item.sentence);
      const ok = normalize(heard) === expected || expected.split(" ").filter(w => normalize(heard).includes(w)).length >= Math.max(2, Math.ceil(expected.split(" ").length*.55));
      if(ok){ state.current.correct++; state.score += 10; state.streak++; showFeedback(true, `I heard: <b>${escapeHtml(heard)}</b>`); }
      else { state.lives = Math.max(0,state.lives-1); state.streak=0; showFeedback(false, `I heard: <b>${escapeHtml(heard)}</b><br>Try again slowly. You can still press “I practiced it”.`); }
      saveState(); nextButton();
    };
    rec.onerror = () => { showFeedback(false,"The microphone did not work here. Use the practice button."); };
    rec.start();
  }
  function speakButtons(text){ return `<div class="btn-row"><button class="secondary" onclick="NEG_speak('${escapeForAttr(text)}')">🔊 Hear it</button><button class="secondary" onclick="NEG_speak('${escapeForAttr(text)}', true)">🐢 Slow</button></div>`; }
  function bindOptions(fn){ document.querySelectorAll(".option").forEach(btn => btn.onclick = () => fn(btn.dataset.value, btn)); }
  function lockInputs(){ document.querySelectorAll("button.option, #checkBtn, #answerInput, .word").forEach(el => el.disabled = true); }
  function mark(btn, ok, expected){ if(btn) btn.classList.add(ok ? "correct" : "wrong"); document.querySelectorAll(".option").forEach(o => { if(normalize(o.dataset.value) === normalize(expected)) o.classList.add("correct"); }); }
  function checkType(item){
    const val = $("answerInput").value;
    const answers = item.answers || [item.answer];
    const ok = answers.map(normalize).includes(normalize(val));
    if(ok) correct(item.explanation || `Correct: ${item.solution || answers[0]}`);
    else wrong(`Answer: <b>${escapeHtml(item.solution || answers[0])}</b><br>${escapeHtml(item.explanation || '')}`);
    lockInputs(); nextButton();
  }
  function checkAnswer(value, expected, explanation, btn, exact){
    const ok = exact ? value === expected : normalize(value) === normalize(expected);
    mark(btn, ok, expected);
    if(ok) correct(explanation || "Correct."); else wrong(`Correct answer: <b>${escapeHtml(expected)}</b><br>${explanation || ''}`);
    lockInputs(); nextButton();
  }
  function correct(msg){ state.current.correct++; state.score += 10 + Math.min(10,state.streak); state.streak++; showFeedback(true, msg); }
  function wrong(msg){ state.current.mistakes++; state.lives = Math.max(0,state.lives-1); state.streak = 0; showFeedback(false, msg); }
  function showFeedback(ok,msg){ const fb=$("fb"); fb.className = `feedback show ${ok?'good':'bad'}`; fb.innerHTML = msg; saveState(); }
  function nextButton(){
    const fb=$("fb");
    if(fb.querySelector(".next-btn")) return;
    const btn=document.createElement("button"); btn.className="primary next-btn"; btn.style.marginTop="12px";
    btn.textContent = state.current.i+1 >= getItems(missionById(state.current.id)).length ? "Finish level" : "Next";
    btn.onclick = () => { state.current.i++; saveState(); renderApp(state.active); };
    fb.appendChild(document.createElement("br")); fb.appendChild(btn);
  }
  function coachMessage(pct, passed, m){
    const topic = m.coachTopic || m.skill || "este tema";
    if(passed && pct >= 90) return {tone:"good", title:"¡Qué nota, Nico!", body:`La rompiste en ${topic}. Vas muy fino; ahora súbele el nivel y léelo en voz alta como si estuvieras en el aeropuerto.`};
    if(passed && pct >= 75) return {tone:"good", title:"¡Muy bien, Nico!", body:`Vas firme. Te falta pulir una que otra cosita de ${topic}, pero ya estás cogiendo cancha. Repasa las que fallaste y sigue derecho.`};
    if(passed) return {tone:"warn", title:"Bien, pero pilas, Nico", body:`Pasaste, pero quedaste justo. Eso significa que sí puedes, solo toca meterle más práctica a ${topic}. Una repasadita y quedas mucho más sólido.`};
    if(pct >= 40) return {tone:"warn", title:"Vas algo flojo, pero tranquilo", body:`No pasa nada, esto se arregla practicando. En ${topic} hay que repasar más despacio, leer en voz alta y volver a intentar. Vas a mejorar.`};
    return {tone:"bad", title:"Toca estudiar más, Nico", body:`Esta ronda estuvo dura, pero no te me desanimes. Vamos paso a paso: repasa ${topic}, escucha la voz lenta y vuelve a jugar. De a poquito se gana.`};
  }
  function finishMission(){
    const m = missionById(state.current.id); const total = getItems(m).length; const target = passTarget(m); const correctCount = state.current.correct; const mistakeCount = state.current.mistakes; const ratio = total ? correctCount/total : 0; const ok = correctCount >= target; const next = data.missions[missionIndex(m.id)+1]; const coach = coachMessage(ratio*100, ok, m);
    if(ok){ state.completed[m.id]=true; state.score += 25; }
    state.current=null; saveState(); renderResult(ok, m, total, target, correctCount, mistakeCount, next, coach);
  }
  function renderResult(ok,m,total,target,correctCount,mistakeCount,next,coach){
    const area=$("missionArea");
    area.innerHTML = `<div class="result-panel"><div class="big-emoji">${ok?'🏆':'🔁'}</div><h2>${ok?'Level complete':'Try this level again'}</h2><p>You got <b>${correctCount}/${total}</b>. Target: <b>${target}</b>. Mistakes: <b>${mistakeCount}</b>.</p><div class="coach-card feedback show ${coach.tone}"><b>${coach.title}</b><br>${coach.body}<div class="answer-note">Tip: repite en voz alta 3 frases antes de pasar al siguiente nivel.</div></div><div class="btn-row">${ok && next ? `<button class="primary" onclick="NEG_openMission('${next.id}')">Continue to next level</button>` : ''}${ok && !next ? `<a class="primary" href="../../">Back to games</a>` : ''}<button class="secondary" onclick="NEG_retryMission('${m.id}')">Practice this level again</button></div></div>`;
  }
  window.NEG_retryMission = function(id){ state.completed[id]=false; state.current=null; selectedWords=[]; saveState(); renderApp(id); };
  window.addEventListener("DOMContentLoaded",()=>{ renderApp(firstOpenMission()); if("speechSynthesis" in window){ speechSynthesis.onvoiceschanged = refreshVoices; setTimeout(refreshVoices,300); } });
})();
