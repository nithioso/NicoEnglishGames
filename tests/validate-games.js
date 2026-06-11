const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const games = [
  'games/travel-time-machine-1/data.js',
  'games/travel-time-machine-2/data.js',
  'games/travel-detective-3/data.js'
];

function normalize(v){ return String(v || '').toLowerCase().trim().replace(/[’']/g,"'").replace(/[?!.,]/g,'').replace(/\s+/g,' '); }
function loadGame(file){
  const code = fs.readFileSync(path.join(root,file),'utf8');
  const sandbox = {window:{}};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, {filename:file});
  return sandbox.window.NEG_GAME_DATA;
}
function assert(condition, message){ if(!condition) throw new Error(message); }

let totalItems = 0;
for(const file of games){
  const data = loadGame(file);
  assert(data && data.slug && data.title, `${file}: missing game metadata`);
  assert(Array.isArray(data.missions) && data.missions.length > 0, `${file}: no missions`);
  const ids = new Set();
  for(const mission of data.missions){
    assert(mission.id && !ids.has(mission.id), `${file}: duplicate or missing mission id`);
    ids.add(mission.id);
    assert(mission.title && mission.type && mission.skill, `${file}/${mission.id}: missing mission metadata`);
    assert(Array.isArray(mission.items) && mission.items.length > 0, `${file}/${mission.id}: no items`);
    assert((mission.passScore || Math.ceil(mission.items.length*.7)) <= mission.items.length, `${file}/${mission.id}: passScore exceeds item count`);
    if(mission.type === 'category'){
      assert(Array.isArray(mission.categories) && mission.categories.length >= 2, `${file}/${mission.id}: missing categories`);
      const catIds = new Set(mission.categories.map(c => c.id));
      for(const item of mission.items){
        assert(item.term && item.answer, `${file}/${mission.id}: category item missing term/answer`);
        assert(catIds.has(item.answer), `${file}/${mission.id}/${item.term}: answer category not found`);
      }
    }
    for(const [index,item] of mission.items.entries()){
      totalItems++;
      if(['choice','listen','dialogue','reading'].includes(mission.type)){
        assert(item.answer, `${file}/${mission.id}#${index}: missing answer`);
        assert(Array.isArray(item.options) && item.options.length >= 3, `${file}/${mission.id}#${index}: missing options`);
        const normOptions = item.options.map(normalize);
        assert(normOptions.includes(normalize(item.answer)), `${file}/${mission.id}#${index}: answer is not included in options: ${item.answer}`);
        assert(new Set(normOptions).size === normOptions.length, `${file}/${mission.id}#${index}: duplicate options`);
      }
      if(mission.type === 'type'){
        assert(item.q && (item.answer || item.answers), `${file}/${mission.id}#${index}: type item missing q/answer`);
      }
      if(mission.type === 'build'){
        assert(item.answer && Array.isArray(item.words), `${file}/${mission.id}#${index}: build item missing answer/words`);
        const answerWords = normalize(item.answer).split(' ');
        const bankWords = item.words.map(normalize);
        for(const word of answerWords){
          assert(bankWords.includes(word), `${file}/${mission.id}#${index}: word bank missing "${word}" for answer "${item.answer}"`);
        }
      }
      if(mission.type === 'pronounce'){
        assert(item.sentence, `${file}/${mission.id}#${index}: pronounce item missing sentence`);
      }
    }
  }
  console.log(`OK: ${data.title} · ${data.missions.length} missions`);
}
console.log(`Validation passed. Total checked items: ${totalItems}`);
