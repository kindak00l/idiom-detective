// Global state
const state = {
  currentUser: null,
  savedIdioms: new Set(),
  userVotes: {},
  userPoints: 0,
  currentSelectedIdiom: null,
  userNotes: {},
  communityTranslations: {},
  leaderboard: [
    { user: "SherlockVN", points: 15200 },
    { user: "MysterySeeker", points: 11400 },
    { user: "AceDetective", points: 10800 },
    { user: "VietDetective", points: 9700 },
    { user: "IdiomMaster", points: 9200 },
    { user: "MazeRunner", points: 8500 },
    { user: "WordHacker", points: 7100 },
    { user: "BeginnerSpy", points: 4300 }
  ]
};

const validAccounts = Array.from({ length: 25 }, (_, i) => `admin${i + 1}`);
const GOOGLE_CLIENT_ID = "972001194250-93krbd7r9441mtg804um81c1mmdo00r7.apps.googleusercontent.com";

// --- Helper Functions ---
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

const literalMeaningHints = {
  a: "an indefinite article used before a singular noun",
  about: "concerning or around something",
  act: "to do something or behave in a certain way",
  actions: "things people do",
  add: "to put something together with something else",
  after: "following in time or order",
  air: "the space above the ground or the mixture of gases we breathe",
  all: "the whole amount or every part",
  an: "an indefinite article used before a vowel sound",
  and: "used to connect words or ideas",
  arm: "the body part from shoulder to hand",
  around: "in a circle or surrounding area",
  at: "in, on, or near a place or time",
  back: "to return or the rear part of something",
  ball: "a round object used in games",
  bandwagon: "a wagon carrying a band in a parade",
  bark: "the sound a dog makes",
  barking: "making a dog-like sound",
  be: "to exist or happen",
  beans: "seeds used as food",
  beat: "to hit repeatedly or defeat",
  benefit: "an advantage or helpful result",
  best: "better than all others",
  birds: "animals with wings and feathers",
  bite: "to cut or hold with the teeth",
  blessing: "something good or fortunate",
  blue: "the color of the sky on a clear day",
  board: "a flat piece of wood or a planning surface",
  book: "pages bound together for reading",
  books: "written or printed works",
  bridge: "a structure built over water, road, or gap",
  bridges: "structures built over gaps",
  bullet: "a small metal projectile fired from a gun",
  burn: "to damage with fire",
  bush: "a low plant with many branches",
  cake: "a sweet baked dessert",
  call: "to name, shout, or contact",
  cart: "a small vehicle pulled or pushed",
  cat: "a small household animal",
  caution: "care taken to avoid danger",
  chase: "to run after someone or something",
  chew: "to crush food with the teeth",
  chin: "the lower part of the face",
  cold: "low temperature",
  come: "to move toward a place",
  corners: "places where two edges meet",
  cost: "to require payment",
  court: "a place where games are played or law is judged",
  cover: "the outside part of a book or object",
  cry: "to shout or shed tears",
  curiosity: "a strong desire to know something",
  day: "a period of 24 hours",
  devil: "an evil spirit or symbol of evil",
  disguise: "something that hides the real appearance",
  dog: "a common pet animal",
  dogs: "common pet animals",
  doubt: "uncertainty",
  down: "toward a lower place",
  drawing: "a picture made with lines",
  dust: "fine dry particles",
  earth: "the ground or the planet we live on",
  easy: "not difficult",
  egg: "an oval object laid by a bird",
  eggs: "oval objects laid by birds",
  elephant: "a very large animal with a trunk",
  every: "each one in a group",
  eye: "an organ used for seeing",
  eyes: "organs used for seeing",
  face: "the front part of the head",
  feather: "one of the light parts covering a bird",
  fence: "a barrier around an area",
  fiddle: "a violin",
  fly: "to move through the air",
  flies: "moves through the air",
  flock: "to gather together",
  for: "intended to help or be given to",
  from: "showing the starting point",
  get: "to receive, become, or obtain",
  give: "to hand something to someone",
  go: "to move or travel",
  good: "pleasant, correct, or useful",
  goose: "a large water bird",
  grain: "a small hard seed or tiny particle",
  hand: "the body part at the end of the arm",
  hands: "body parts at the ends of the arms",
  hang: "to stay or be suspended",
  head: "the top part of the body",
  heat: "high temperature",
  heart: "the organ that pumps blood or the center of emotion",
  horse: "a large animal people ride",
  horses: "large animals people ride",
  in: "inside or within",
  injury: "physical harm",
  insult: "a rude or offensive remark",
  it: "a thing already mentioned",
  judge: "to form an opinion",
  jump: "to push yourself off the ground",
  keep: "to continue to hold or maintain",
  leg: "a body part used for standing or walking",
  let: "to allow",
  line: "a long thin mark or boundary",
  lines: "long thin marks or rows of words",
  long: "great in length or time",
  look: "to use your eyes",
  louder: "with more volume",
  madness: "wild or confused behavior",
  make: "to create or cause",
  matters: "situations or problems",
  medicine: "something used to treat illness",
  method: "a planned way of doing something",
  milk: "white liquid produced by mammals",
  moon: "the natural object that orbits Earth",
  music: "organized sounds, often with melody",
  nail: "a small metal pin or the hard part of a finger",
  nine: "the number 9",
  no: "not any",
  of: "showing belonging or connection",
  off: "away from or not on",
  on: "touching or supported by a surface",
  once: "one time",
  "one's": "belonging to one person",
  out: "away from inside",
  pain: "physical or emotional hurt",
  penny: "a small coin",
  peeled: "with the outer layer removed",
  piece: "one part of something",
  pigs: "farm animals often raised for pork",
  play: "to take part in a game or performance",
  put: "to place something somewhere",
  rain: "water falling from clouds",
  read: "to look at and understand written words",
  red: "the color of blood",
  raincheck: "a promise to accept an invitation later",
  rule: "a guide or instruction",
  sack: "a large bag",
  salt: "a white mineral used to season food",
  saved: "kept for later",
  say: "to speak words",
  see: "to notice with the eyes",
  shine: "to give off light",
  shoulder: "the body part between the neck and arm",
  silver: "a shiny gray-white metal",
  skin: "the outer covering of the body",
  slack: "loose rope or extra freedom",
  sleeping: "resting with eyes closed",
  so: "to such a degree or in this way",
  speak: "to say words",
  spilt: "poured out accidentally",
  square: "a shape with four equal sides",
  steal: "to take something without permission",
  stone: "a small rock",
  straight: "not bent or curved",
  take: "to get or accept",
  taste: "to sense flavor",
  teeth: "hard white objects in the mouth",
  that: "used to point to a specific thing",
  the: "used before a specific noun",
  thick: "wide from one side to the other",
  thin: "narrow from one side to the other",
  through: "from one side to the other",
  throw: "to send something through the air",
  thunder: "the loud sound after lightning",
  time: "minutes, hours, days, or years",
  to: "toward or in order to",
  tongue: "the organ in the mouth used for speaking and tasting",
  top: "the highest part",
  towel: "cloth used for drying",
  two: "the number 2",
  under: "below something",
  up: "toward a higher place",
  water: "a clear liquid people drink",
  weather: "the condition of the air outside",
  when: "at what time or during the time that",
  whole: "complete or entire",
  wild: "living in nature or uncontrolled",
  wolf: "a wild animal related to dogs",
  words: "units of language that carry meaning",
  worse: "more bad",
  wrap: "to cover or fold around something",
  yards: "units of length or areas of land",
  your: "belonging to you"
};

const literalMeaningHintsVi = {
  a: "một, một cái",
  about: "về, liên quan đến",
  act: "hành động, cư xử",
  actions: "những hành động",
  add: "thêm vào",
  after: "sau",
  air: "không khí",
  all: "tất cả",
  an: "một, một cái",
  and: "và",
  arm: "cánh tay",
  around: "xung quanh",
  at: "ở, tại",
  back: "trở lại; phía sau",
  ball: "quả bóng",
  bandwagon: "xe chở ban nhạc trong diễu hành",
  bark: "sủa",
  barking: "đang sủa",
  be: "là, tồn tại",
  beans: "đậu",
  beat: "đánh; đánh bại",
  benefit: "lợi ích",
  best: "tốt nhất",
  birds: "những con chim",
  bite: "cắn",
  blessing: "phước lành, điều may mắn",
  blue: "màu xanh dương",
  board: "tấm bảng",
  book: "quyển sách",
  books: "những quyển sách",
  bridge: "cây cầu",
  bridges: "những cây cầu",
  bullet: "viên đạn",
  burn: "đốt cháy",
  bush: "bụi cây",
  cake: "bánh ngọt",
  call: "gọi",
  cart: "xe kéo",
  cat: "con mèo",
  caution: "sự thận trọng",
  chase: "đuổi theo",
  chew: "nhai",
  chin: "cằm",
  cold: "lạnh",
  come: "đến",
  corners: "các góc",
  cost: "có giá, tốn",
  court: "sân; tòa án",
  cover: "bìa, lớp phủ",
  cry: "khóc; kêu lên",
  curiosity: "sự tò mò",
  day: "ngày",
  devil: "ác quỷ",
  disguise: "sự ngụy trang",
  dog: "con chó",
  dogs: "những con chó",
  doubt: "sự nghi ngờ",
  down: "xuống",
  drawing: "bản vẽ",
  dust: "bụi",
  earth: "trái đất; mặt đất",
  easy: "dễ dàng",
  egg: "quả trứng",
  eggs: "những quả trứng",
  elephant: "con voi",
  every: "mọi, mỗi",
  eye: "mắt",
  eyes: "đôi mắt",
  face: "khuôn mặt; đối mặt",
  feather: "lông chim",
  fence: "hàng rào",
  fiddle: "đàn vĩ cầm",
  fly: "bay",
  flies: "bay",
  flock: "tụ tập thành đàn",
  for: "cho, dành cho",
  from: "từ",
  get: "nhận được; trở nên",
  give: "đưa, cho",
  go: "đi",
  good: "tốt",
  goose: "con ngỗng",
  grain: "hạt nhỏ",
  hand: "bàn tay",
  hands: "những bàn tay",
  hang: "treo; ở lại",
  head: "cái đầu",
  heat: "sức nóng",
  heart: "trái tim",
  horse: "con ngựa",
  horses: "những con ngựa",
  in: "trong",
  injury: "vết thương",
  insult: "lời xúc phạm",
  it: "nó",
  judge: "đánh giá",
  jump: "nhảy",
  keep: "giữ, tiếp tục",
  leg: "chân",
  let: "để, cho phép",
  line: "đường, dòng",
  lines: "các dòng",
  long: "dài, lâu",
  look: "nhìn",
  louder: "to hơn",
  madness: "sự điên rồ, hỗn loạn",
  make: "làm, tạo ra",
  matters: "vấn đề, sự việc",
  medicine: "thuốc",
  method: "phương pháp",
  milk: "sữa",
  moon: "mặt trăng",
  music: "âm nhạc",
  nail: "cái đinh; móng tay",
  nine: "số chín",
  no: "không",
  of: "của",
  off: "rời khỏi; tắt",
  on: "trên",
  once: "một lần",
  "one's": "của một người nào đó",
  out: "ra ngoài",
  pain: "nỗi đau",
  penny: "đồng xu nhỏ",
  peeled: "đã bóc vỏ",
  piece: "một mảnh",
  pigs: "những con lợn/heo",
  play: "chơi; đóng vai",
  put: "đặt, để",
  rain: "mưa",
  read: "đọc",
  red: "màu đỏ",
  raincheck: "lời hẹn để dịp khác",
  rule: "quy tắc",
  sack: "bao tải",
  salt: "muối",
  saved: "đã lưu, đã tiết kiệm",
  say: "nói",
  see: "nhìn thấy",
  shine: "chiếu sáng",
  shoulder: "vai",
  silver: "bạc; màu bạc",
  skin: "da",
  slack: "phần dây chùng; sự dễ dãi",
  sleeping: "đang ngủ",
  so: "rất; vì vậy",
  speak: "nói",
  spilt: "bị đổ",
  square: "hình vuông; ô vuông",
  steal: "ăn cắp",
  stone: "hòn đá",
  straight: "thẳng",
  take: "lấy, nhận",
  taste: "vị; nếm",
  teeth: "răng",
  that: "đó, cái đó",
  the: "mạo từ xác định",
  thick: "dày",
  thin: "mỏng",
  through: "xuyên qua; vượt qua",
  throw: "ném",
  thunder: "sấm",
  time: "thời gian",
  to: "đến, để",
  tongue: "lưỡi",
  top: "đỉnh, phần trên",
  towel: "khăn",
  two: "số hai",
  under: "dưới",
  up: "lên",
  water: "nước",
  weather: "thời tiết",
  when: "khi, khi nào",
  whole: "toàn bộ",
  wild: "hoang dã; mất kiểm soát",
  wolf: "con sói",
  words: "những từ ngữ",
  worse: "tệ hơn",
  wrap: "bọc, quấn",
  yards: "thước Anh; khoảng sân",
  your: "của bạn"
};

const wordClassHints = {
  a: { english: "article", vietnamese: "mạo từ" },
  about: { english: "preposition", vietnamese: "giới từ" },
  after: { english: "preposition", vietnamese: "giới từ" },
  all: { english: "determiner", vietnamese: "từ hạn định" },
  an: { english: "article", vietnamese: "mạo từ" },
  and: { english: "conjunction", vietnamese: "liên từ" },
  around: { english: "preposition", vietnamese: "giới từ" },
  at: { english: "preposition", vietnamese: "giới từ" },
  back: { english: "adverb", vietnamese: "trạng từ" },
  be: { english: "verb", vietnamese: "động từ" },
  best: { english: "adjective", vietnamese: "tính từ" },
  bite: { english: "verb", vietnamese: "động từ" },
  blue: { english: "adjective", vietnamese: "tính từ" },
  call: { english: "verb", vietnamese: "động từ" },
  cold: { english: "adjective", vietnamese: "tính từ" },
  come: { english: "verb", vietnamese: "động từ" },
  cost: { english: "verb", vietnamese: "động từ" },
  cry: { english: "verb", vietnamese: "động từ" },
  down: { english: "adverb", vietnamese: "trạng từ" },
  easy: { english: "adjective", vietnamese: "tính từ" },
  every: { english: "determiner", vietnamese: "từ hạn định" },
  face: { english: "verb/noun", vietnamese: "động từ/danh từ" },
  fly: { english: "verb", vietnamese: "động từ" },
  flies: { english: "verb", vietnamese: "động từ" },
  flock: { english: "verb", vietnamese: "động từ" },
  for: { english: "preposition", vietnamese: "giới từ" },
  from: { english: "preposition", vietnamese: "giới từ" },
  get: { english: "verb", vietnamese: "động từ" },
  give: { english: "verb", vietnamese: "động từ" },
  go: { english: "verb", vietnamese: "động từ" },
  good: { english: "adjective", vietnamese: "tính từ" },
  hang: { english: "verb", vietnamese: "động từ" },
  in: { english: "preposition", vietnamese: "giới từ" },
  it: { english: "pronoun", vietnamese: "đại từ" },
  judge: { english: "verb", vietnamese: "động từ" },
  jump: { english: "verb", vietnamese: "động từ" },
  keep: { english: "verb", vietnamese: "động từ" },
  let: { english: "verb", vietnamese: "động từ" },
  long: { english: "adjective", vietnamese: "tính từ" },
  look: { english: "verb", vietnamese: "động từ" },
  louder: { english: "adjective/adverb", vietnamese: "tính từ/trạng từ" },
  make: { english: "verb", vietnamese: "động từ" },
  no: { english: "determiner", vietnamese: "từ hạn định" },
  of: { english: "preposition", vietnamese: "giới từ" },
  off: { english: "adverb/preposition", vietnamese: "trạng từ/giới từ" },
  on: { english: "preposition", vietnamese: "giới từ" },
  once: { english: "adverb", vietnamese: "trạng từ" },
  out: { english: "adverb", vietnamese: "trạng từ" },
  peeled: { english: "adjective/verb", vietnamese: "tính từ/động từ" },
  pigs: { english: "noun", vietnamese: "danh từ" },
  play: { english: "verb", vietnamese: "động từ" },
  put: { english: "verb", vietnamese: "động từ" },
  read: { english: "verb", vietnamese: "động từ" },
  red: { english: "adjective", vietnamese: "tính từ" },
  saved: { english: "verb/adjective", vietnamese: "động từ/tính từ" },
  say: { english: "verb", vietnamese: "động từ" },
  see: { english: "verb", vietnamese: "động từ" },
  sleeping: { english: "adjective/verb", vietnamese: "tính từ/động từ" },
  so: { english: "adverb", vietnamese: "trạng từ" },
  speak: { english: "verb", vietnamese: "động từ" },
  spilt: { english: "verb/adjective", vietnamese: "động từ/tính từ" },
  straight: { english: "adjective/adverb", vietnamese: "tính từ/trạng từ" },
  take: { english: "verb", vietnamese: "động từ" },
  that: { english: "pronoun/determiner", vietnamese: "đại từ/từ hạn định" },
  the: { english: "article", vietnamese: "mạo từ" },
  thick: { english: "adjective", vietnamese: "tính từ" },
  thin: { english: "adjective", vietnamese: "tính từ" },
  through: { english: "preposition", vietnamese: "giới từ" },
  throw: { english: "verb", vietnamese: "động từ" },
  to: { english: "preposition", vietnamese: "giới từ" },
  under: { english: "preposition", vietnamese: "giới từ" },
  up: { english: "adverb/preposition", vietnamese: "trạng từ/giới từ" },
  when: { english: "adverb/conjunction", vietnamese: "trạng từ/liên từ" },
  whole: { english: "adjective", vietnamese: "tính từ" },
  wild: { english: "adjective", vietnamese: "tính từ" },
  worse: { english: "adjective/adverb", vietnamese: "tính từ/trạng từ" },
  wrap: { english: "verb", vietnamese: "động từ" },
  your: { english: "possessive determiner", vietnamese: "từ hạn định sở hữu" }
};

function getWordClass(word) {
  const key = word.toLowerCase();
  if (wordClassHints[key]) return wordClassHints[key];
  return { english: "noun", vietnamese: "danh từ" };
}

function normalizeBreakdownItem(item) {
  const key = item.word.toLowerCase();
  const english = item.english || item.englishMeaning || item.definitionEn || literalMeaningHints[key] || item.definition || `Literal word: "${item.word}".`;
  const vietnamese = item.vietnamese || item.vietnameseMeaning || item.definitionVi || literalMeaningHintsVi[key] || item.definition || "Vietnamese meaning not added yet.";
  const fallbackClass = getWordClass(item.word);
  const englishClass = item.englishClass || item.wordClass || item.partOfSpeech || item.pos || fallbackClass.english;
  const vietnameseClass = item.vietnameseClass || item.wordClassVi || item.partOfSpeechVi || item.posVi || fallbackClass.vietnamese;
  return { word: item.word, english, vietnamese, englishClass, vietnameseClass };
}

function getBreakdownForIdiom(idiom) {
  if (idiom.breakdown && idiom.breakdown.length > 0) {
    return idiom.breakdown.map(normalizeBreakdownItem);
  }
  return idiom.title
    .replace(/[^\w\s']/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map(word => ({
      word,
      english: literalMeaningHints[word.toLowerCase()] || `Literal word: "${word}".`,
      vietnamese: literalMeaningHintsVi[word.toLowerCase()] || "Vietnamese meaning not added yet.",
      englishClass: getWordClass(word).english,
      vietnameseClass: getWordClass(word).vietnamese
    }));
}

function showTab(tab) {
  document.querySelectorAll(".tab-page").forEach(page => page.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
  document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
  const activeLink = Array.from(document.querySelectorAll("nav a")).find(link => link.getAttribute("onclick")?.includes(`'${tab}'`));
  if (activeLink) activeLink.classList.add("active");
}

function showClue(element, word, english, vietnamese, englishClass = "word", vietnameseClass = "từ") {
  document.querySelectorAll(".jigsaw-word").forEach(w => w.classList.remove("active"));
  if (element) element.classList.add("active");
  const clueBox = document.getElementById("clueBox");
  if (clueBox) {
    clueBox.innerHTML = `
      🔎 <strong>Word clue for [${escapeHTML(word)}]</strong>
      <div><strong>English (${escapeHTML(englishClass)}):</strong> ${escapeHTML(english)}</div>
      <div><strong>Tiếng Việt (${escapeHTML(vietnameseClass)}):</strong> ${escapeHTML(vietnamese)}</div>
    `;
  }
}

function searchIdioms(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  const queryWords = normalized.match(/[a-z0-9']+/g) || [];
  return casesData.filter(idiom => {
    const titleWords = idiom.title.toLowerCase().match(/[a-z0-9']+/g) || [];
    return queryWords.every(queryWord => titleWords.includes(queryWord));
  });
}

function getIdiomImage(idiom) {
  return idiom.image || idiom.imageUrl || idiom.illustration || "";
}

function updateHomeIllustration(idiom) {
  const illustrationBox = document.getElementById("homeIllustrationBox");
  if (!illustrationBox) return;
  if (!state.defaultIllustrationHTML) state.defaultIllustrationHTML = illustrationBox.innerHTML;

  const imageSrc = getIdiomImage(idiom);
  if (!imageSrc) {
    illustrationBox.innerHTML = state.defaultIllustrationHTML;
    return;
  }

  const imageAlt = idiom.imageAlt || `Illustration for ${idiom.title}`;
  illustrationBox.innerHTML = "";
  const image = document.createElement("img");
  image.className = "idiom-illustration";
  image.src = imageSrc;
  image.alt = imageAlt;
  image.addEventListener("error", () => {
    illustrationBox.innerHTML = state.defaultIllustrationHTML;
  });
  illustrationBox.appendChild(image);
}

function updateHomeIdiom(idiom) {
  if (!idiom) return;
  state.currentSelectedIdiom = idiom.title;
  document.getElementById("homeCaseTitle").innerText = `🗂️ CASE FILE: ${idiom.title}`;
  updateHomeIllustration(idiom);
  document.getElementById("homeEnglishMeaning").innerText = idiom.englishMeaning || idiom.desc;
  document.getElementById("homeDesc").innerText = idiom.desc;
  document.getElementById("homeStory").innerText = idiom.story || "The origin of this idiom has not been recorded in detail here, but its image gives learners a memorable way to understand the meaning.";
  const equivalents = document.getElementById("homeVietnameseEquivalents");
  equivalents.innerHTML = idiom.vietnameseEquivalents
    ? idiom.vietnameseEquivalents.map(eq => `<span class="equiv-badge">${escapeHTML(eq)}</span>`).join("")
    : `<span class="equiv-badge">${escapeHTML(idiom.desc)}</span>`;
  const breakdown = document.getElementById("homeBreakdownContainer");
  breakdown.innerHTML = "";
  getBreakdownForIdiom(idiom).forEach(item => {
    const wordButton = document.createElement("button");
    wordButton.type = "button";
    wordButton.className = "jigsaw-word";
    wordButton.innerText = item.word;
    wordButton.addEventListener("click", () => showClue(wordButton, item.word, item.english, item.vietnamese, item.englishClass, item.vietnameseClass));
    breakdown.appendChild(wordButton);
  });
  const contextExample = document.getElementById("homeContextExample");
  contextExample.innerHTML = idiom.example
    ? `<p style="margin: 0 0 8px 0"><strong>Context:</strong></p><p style="margin: 0">${escapeHTML(idiom.example)}</p>`
    : `<p style="margin: 0;">No context example is available yet.</p>`;
  document.getElementById("clueBox").innerText = "💡 Click each word above to reveal its literal meaning.";
  setupHomeCommunityHeader();
  renderHomeTranslations(idiom.title);
}

function handleSearch() {
  const query = document.getElementById("idiomInput").value.trim();
  const resultsContainer = document.getElementById("homeSearchResults");
  if (!query) {
    alert("Please enter an idiom to investigate.");
    if (resultsContainer) resultsContainer.style.display = "none";
    return;
  }
  const results = searchIdioms(query);
  const exactMatch = results.find(c => c.title.toLowerCase() === query.toLowerCase());
  if (exactMatch || results.length === 1) {
    selectSearchResult((exactMatch || results[0]).title);
  } else if (results.length > 0) {
    resultsContainer.style.display = "grid";
    resultsContainer.innerHTML = results.map(c => `
      <div class="case-card" style="cursor: pointer; border: 2px solid var(--color-orange);" onclick="selectSearchResult('${c.title.replace(/'/g, "\\'")}')">
        <h3 style="margin-bottom: 5px; font-size: 15px;">${c.title}</h3>
        <p style="font-size: 13px; margin: 0; color: #555;">${escapeHTML(c.desc)}</p>
      </div>
    `).join("");
  } else {
    resultsContainer.style.display = "block";
    resultsContainer.innerHTML = `<p style="text-align: center; color: #666; font-style: italic;">No case found for "${escapeHTML(query)}".</p>`;
  }
}

function selectSearchResult(title) {
  const idiom = casesData.find(c => c.title === title);
  if (idiom) {
    document.getElementById("homeSearchResults").style.display = "none";
    document.getElementById("idiomInput").value = "";
    updateHomeIdiom(idiom);
    showTab("home");
  }
}

function renderCases() {
  const grid = document.getElementById("casesGrid");
  grid.innerHTML = casesData.map(c => `
    <div class="case-card">
      <div>
        <span class="case-difficulty ${c.difficulty}">${c.diffText}</span>
        ${c.tags.map(t => `<span class="case-difficulty tag-academic" style="background:#e0d4f5">${t}</span>`).join("")}
      </div>
      <h3>${c.title}</h3>
      <p style="margin-bottom: 5px;"><strong>Meaning:</strong> ${escapeHTML(c.desc)}</p>
      <p style="flex-grow: 1; font-size: 13px; color: #555; font-style: italic;"><strong>Example:</strong> "${escapeHTML(c.example)}"</p>
      <div style="display: flex; gap: 10px; margin-top: 15px;">
        <button class="btn-action" style="flex: 1; font-size: 13px; padding: 8px;" onclick="selectSearchResult('${c.title.replace(/'/g, "\\'")}')">🔍 View</button>
        <button class="btn-action" style="flex: 1; font-size: 13px; padding: 8px; background-color: var(--color-pink);" onclick="saveIdiom('${c.title.replace(/'/g, "\\'")}')">➕ Save</button>
      </div>
    </div>
  `).join("");
}

function setupHomeCommunityHeader() {
  const homeCommunity = document.querySelector("#home .community-box");
  if (!homeCommunity || document.getElementById("homeSubmitTransBtn")) return;
  const header = homeCommunity.querySelector(".community-header");
  if (!header) return;
  const contributeButton = document.createElement("button");
  contributeButton.id = "homeSubmitTransBtn";
  contributeButton.className = "btn-action";
  contributeButton.type = "button";
  contributeButton.innerText = "Contribute a Solution";
  contributeButton.addEventListener("click", contributeHomeTranslation);
  header.appendChild(contributeButton);
}

function getCommunityTranslations(title) {
  if (!state.communityTranslations[title]) state.communityTranslations[title] = [];
  return state.communityTranslations[title];
}

function getContributorName() {
  const suggestedName = state.currentUser || "";
  const displayName = prompt("Your display name for this contribution:", suggestedName);
  if (displayName === null) return null;
  return displayName.trim() || "Anonymous Detective";
}

function addCommunityTranslation(title, translation, author) {
  getCommunityTranslations(title).unshift({
    id: `contrib_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    text: translation.trim(),
    author,
    votesUp: 0,
    votesDown: 0
  });
}

function contributeHomeTranslation() {
  const title = state.currentSelectedIdiom || "When pigs fly";
  const displayName = getContributorName();
  if (displayName === null) return;
  const userTranslation = prompt(`Contribute a Vietnamese translation for:\n"${title}"\n\nEnter your solution:`);
  if (!userTranslation || userTranslation.trim() === "") return;
  addCommunityTranslation(title, userTranslation, displayName);
  renderHomeTranslations(title);
  alert(`Your translation "${userTranslation.trim()}" was added to this case.`);
}

function renderHomeTranslations(title) {
  const list = document.getElementById("contribList");
  if (!list) return;
  const translations = getCommunityTranslations(title);
  if (translations.length === 0) {
    list.innerHTML = `<p style="text-align: center; color: #666; font-style: italic; padding: 20px;">No community translations yet for this idiom. Be the first detective to add one.</p>`;
    return;
  }
  list.innerHTML = translations.map(t => `
    <div class="contribution-item">
      <div class="item-details">
        <strong>"${escapeHTML(t.text)}"</strong>
        <p>By student detective: <em>@${escapeHTML(t.author)}</em></p>
      </div>
      <div class="voting-panel">
        <button class="btn-vote ${state.userVotes[t.id] === 'up' ? 'voted-up' : ''}" onclick="handleCommunityVote('${title.replace(/'/g, "\\'")}', '${t.id}', 'up', this, 'home')">
          👍 <span>${t.votesUp}</span>
        </button>
        <button class="btn-vote ${state.userVotes[t.id] === 'down' ? 'voted-down' : ''}" onclick="handleCommunityVote('${title.replace(/'/g, "\\'")}', '${t.id}', 'down', this, 'home')">
          👎 <span>${t.votesDown}</span>
        </button>
      </div>
    </div>
  `).join("");
}

function openIdiomDetail(title) {
  const idiom = casesData.find(c => c.title === title);
  if (!idiom) return;
  state.currentSelectedIdiom = title;
  document.getElementById("detailTitle").innerText = idiom.title;
  document.getElementById("detailDesc").innerText = idiom.desc;
  document.getElementById("detailExample").innerText = `"${idiom.example}"`;
  const tagsHtml = idiom.tags.map(t => `<span class="case-difficulty tag-academic" style="background:#e0d4f5">${t}</span>`).join(" ");
  document.getElementById("detailTags").innerHTML = `<span class="case-difficulty ${idiom.difficulty}">${idiom.diffText}</span> ${tagsHtml}`;
  const notesInput = document.getElementById("detailNotes");
  notesInput.value = state.userNotes[title] || "";
  document.getElementById("saveNoteBtn").onclick = () => {
    state.userNotes[title] = notesInput.value;
    updateSavedUI();
    alert(`Notes saved for case: "${title}"`);
  };
  document.getElementById("detailSaveIdiomBtn").onclick = () => saveIdiom(title);
  renderDetailTranslations(title);
  document.getElementById("detailSubmitTransBtn").onclick = () => {
    const displayName = getContributorName();
    if (displayName === null) return;
    const userTranslation = prompt(`Contribute a Vietnamese translation for:\n"${title}"\n\nEnter your solution:`);
    if (userTranslation && userTranslation.trim() !== "") {
      addCommunityTranslation(title, userTranslation, displayName);
      renderDetailTranslations(title);
      if (state.currentSelectedIdiom === title) renderHomeTranslations(title);
      alert(`Your translation "${userTranslation.trim()}" was added to this case.`);
    }
  };
  showTab("idiom-detail");
}

function renderDetailTranslations(title) {
  const list = document.getElementById("detailContribList");
  const translations = getCommunityTranslations(title);
  if (translations.length === 0) {
    list.innerHTML = `<p style="text-align: center; color: #666; font-style: italic; padding: 20px;">No community translations yet for this idiom. Be the first detective to add one.</p>`;
    return;
  }
  list.innerHTML = translations.map(t => `
    <div class="contribution-item">
      <div class="item-details">
        <strong>"${escapeHTML(t.text)}"</strong>
        <p>By student detective: <em>@${escapeHTML(t.author)}</em></p>
      </div>
      <div class="voting-panel">
        <button class="btn-vote ${state.userVotes[t.id] === 'up' ? 'voted-up' : ''}" onclick="handleCommunityVote('${title.replace(/'/g, "\\'")}', '${t.id}', 'up', this, 'detail')">
          👍 <span>${t.votesUp}</span>
        </button>
        <button class="btn-vote ${state.userVotes[t.id] === 'down' ? 'voted-down' : ''}" onclick="handleCommunityVote('${title.replace(/'/g, "\\'")}', '${t.id}', 'down', this, 'detail')">
          👎 <span>${t.votesDown}</span>
        </button>
      </div>
    </div>
  `).join("");
}

function handleCommunityVote(title, contributionId, voteType, btnElement, source) {
  if (state.userVotes[contributionId]) {
    alert("You already voted for this translation. Each detective gets one vote.");
    return;
  }
  state.userVotes[contributionId] = voteType;
  const translations = getCommunityTranslations(title);
  const item = translations.find(t => t.id === contributionId);
  if (item) voteType === 'up' ? item.votesUp++ : item.votesDown++;
  const span = btnElement.querySelector("span");
  span.innerText = parseInt(span.innerText) + 1;
  btnElement.classList.add(voteType === "up" ? "voted-up" : "voted-down");
  if (source !== "home" && state.currentSelectedIdiom === title) renderHomeTranslations(title);
  if (source !== "detail" && document.getElementById("idiom-detail").classList.contains("active")) renderDetailTranslations(title);
}

function completeSignIn(profile) {
  const displayName = profile.name || profile.email || profile.username || "Google Detective";
  state.currentUser = displayName;
  if (!state.leaderboard.find(p => p.user === displayName)) state.leaderboard.push({ user: displayName, points: 0 });
  state.userPoints = state.leaderboard.find(p => p.user === displayName).points;
  document.getElementById("navLogin").style.display = "none";
  document.getElementById("navSaved").style.display = "inline-block";
  const infoBar = document.getElementById("userInfoBar");
  infoBar.style.display = "block";
  infoBar.innerHTML = `
    👋 Welcome, Detective <strong>${escapeHTML(displayName)}</strong>! Current score:
    <span id="navXP">${state.userPoints}</span> XP
    <button type="button" class="btn-signout" onclick="handleSignOut()">Sign out</button>
  `;
  renderLeaderboard();
  showTab("home");
}

function decodeJwtPayload(token) {
  const payload = token.split(".")[1];
  const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
  const decoded = decodeURIComponent(atob(normalized).split("").map(char =>
    `%${(`00${char.charCodeAt(0).toString(16)}`).slice(-2)}`
  ).join(""));
  return JSON.parse(decoded);
}

function handleGoogleCredentialResponse(response) {
  try {
    const profile = decodeJwtPayload(response.credential);
    completeSignIn({
      name: profile.name,
      email: profile.email,
      username: profile.email || profile.name
    });
    alert(`🎉 Google sign-in successful. Welcome, ${profile.name || profile.email}.`);
  } catch (error) {
    console.error(error);
    alert("Google sign-in worked, but the profile could not be read.");
  }
}

function initGoogleSignIn(retries = 20) {
  const buttonContainer = document.getElementById("googleSignInButton");
  const status = document.getElementById("googleSignInStatus");
  if (!buttonContainer) return;

  if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID.includes("PASTE_YOUR_GOOGLE_CLIENT_ID_HERE")) {
    status.innerText = "Google sign-in is ready to configure. Replace GOOGLE_CLIENT_ID in script.js with your real OAuth Client ID.";
    return;
  }

  if (!window.google?.accounts?.id) {
    if (retries > 0) {
      setTimeout(() => initGoogleSignIn(retries - 1), 250);
    } else {
      status.innerText = "Google sign-in could not load. Check your internet connection and try again.";
    }
    return;
  }

  window.google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredentialResponse
  });
  window.google.accounts.id.renderButton(buttonContainer, {
    theme: "outline",
    size: "large",
    type: "standard",
    shape: "rectangular",
    text: "sign_in_with",
    width: 280
  });
  status.innerText = "Choose your Google account to continue.";
}

function handleSignOut() {
  if (window.google?.accounts?.id) window.google.accounts.id.disableAutoSelect();
  state.currentUser = null;
  state.userPoints = 0;
  document.getElementById("navLogin").style.display = "inline-block";
  document.getElementById("navSaved").style.display = "none";
  document.getElementById("userInfoBar").style.display = "none";
  showTab("home");
}

function handleDisplayNameSignIn() {
  const displayName = prompt("Enter the display name you want to use for this device:");
  if (!displayName || displayName.trim() === "") return;
  completeSignIn({ username: displayName.trim() });
  alert(`Signed in as ${displayName.trim()} on this device.`);
}

function handleLogin(event) {
  event.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;
  if (validAccounts.includes(user) && pass === "123456") {
    completeSignIn({ username: user });
    alert(`🎉 Sign-in successful. Welcome, ${user}.`);
  } else {
    alert("❌ Incorrect username or password. Hint: admin1, password: 123456.");
  }
}

function renderLeaderboard() {
  state.leaderboard.sort((a, b) => b.points - a.points);
  const list = document.getElementById("leaderboardList");
  if (list) {
    list.innerHTML = state.leaderboard.slice(0, 8).map((p, index) => {
      let badge = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "";
      let bgClass = index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : "";
      let isMe = p.user === state.currentUser ? "current-user" : "";
      return `<div class="rank-item ${bgClass} ${isMe}"><span>#${index+1} ${badge}</span><strong>${p.user} ${isMe ? "(You)" : ""}</strong><span>${p.points} XP</span></div>`;
    }).join("");
  }
}

function handleVote(contributionId, voteType, btnElement) {
  if (!state.currentUser) { alert("🔒 Please sign in to vote."); showTab("login"); return; }
  if (state.userVotes[contributionId]) { alert("⚠️ You already voted for this translation."); return; }
  state.userVotes[contributionId] = voteType;
  const span = btnElement.querySelector("span");
  span.innerText = parseInt(span.innerText) + 1;
  btnElement.classList.add(voteType === "up" ? "voted-up" : "voted-down");
}

function saveIdiom(idiomTitle) {
  if (!state.currentUser) { alert("🔒 Please sign in to use My Notebook."); showTab("login"); return; }
  if (state.savedIdioms.has(idiomTitle)) { alert("📝 This idiom is already in your notebook."); return; }
  state.savedIdioms.add(idiomTitle);
  updateSavedUI();
  alert(`✅ "${idiomTitle}" was added to My Notebook.`);
}

function updateSavedUI() {
  const grid = document.getElementById("savedGrid");
  if (state.savedIdioms.size === 0) {
    grid.innerHTML = `<div class="empty-state col-12">Your notebook is empty. Go back to Case Files to collect more idioms.</div>`;
    return;
  }
  let html = "";
  state.savedIdioms.forEach(title => {
    const data = casesData.find(c => c.title === title) || { title, desc: "Custom record", example: "N/A" };
    const userNote = state.userNotes[title] ? state.userNotes[title] : "No notes yet.";
    html += `
      <div class="case-card bg-yellow">
        <h3>${data.title}</h3>
        <p><strong>Meaning:</strong> ${escapeHTML(data.desc)}</p>
        <p style="font-size: 13px; font-style: italic;"><strong>Example:</strong> "${escapeHTML(data.example)}"</p>
        <div style="background: white; padding: 10px; border-radius: 8px; font-size: 13px; margin: 10px 0; border: 1px dashed var(--color-dark);">
          <strong>Notes:</strong> ${escapeHTML(userNote)}
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn-action" style="flex:1; padding:8px; background-color: var(--color-purple);" onclick="selectSearchResult('${title.replace(/'/g, "\\'")}')">View</button>
          <button class="btn-action" style="flex:1; padding:8px; background-color: #ffc5c5;" onclick="removeSaved('${title.replace(/'/g, "\\'")}')">Remove</button>
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;
}

function removeSaved(title) { state.savedIdioms.delete(title); updateSavedUI(); }

function exportToBlooket(title) { alert(`🎮 Creating a CSV import set for Blooket Battle Royale.\nTarget idiom: ${title}`); }
function exportAllSavedToBlooket() { 
  if (state.savedIdioms.size === 0) return alert("Your notebook is empty. Save idioms before exporting.");
  alert(`🎮 Exporting ${state.savedIdioms.size} idioms in Blooket/Quizizz format. A CSV file will be downloaded.`);
}

// --- MAZE GAME ---
const canvas = document.getElementById("mazeCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
const TILE_SIZE = 40, COLS = 14, ROWS = 14;
let mazeMap = [], player = { x: 1, y: 1 }, isGameActive = false, isQuizActive = false, currentGate = null, currentAnswer = "";
let currentMazeTopic = "all";

const baseMaze = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,3,1,1,1,1,0,1,1,3,0],
  [0,1,0,0,0,1,0,0,1,0,1,0,1,0],
  [0,1,0,1,1,1,0,3,1,1,1,0,1,0],
  [0,3,0,1,0,0,0,1,0,0,0,0,1,0],
  [0,1,1,1,1,3,1,1,3,1,1,1,1,0],
  [0,0,0,0,1,0,0,1,0,0,0,3,0,0],
  [0,1,1,3,1,1,0,1,1,1,0,1,1,0],
  [0,1,0,0,0,1,0,0,0,1,0,0,1,0],
  [0,1,1,1,0,1,1,3,1,1,3,1,1,0],
  [0,0,0,1,0,0,0,1,0,0,0,1,0,0],
  [0,1,3,1,1,1,3,1,1,0,1,1,3,0],
  [0,1,0,0,0,0,0,0,0,0,0,0,2,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

function initGame() {
  const topicSelect = document.getElementById("mazeTopicSelect");
  currentMazeTopic = topicSelect ? topicSelect.value : "all";
  mazeMap = JSON.parse(JSON.stringify(baseMaze));
  player = { x: 1, y: 1 };
  isGameActive = true;
  isQuizActive = false;
  document.getElementById("quizOverlay").style.display = "none";
  document.getElementById("msgOverlay").style.display = "none";
  updateMazeTopicInfo();
  drawMaze();
}

function getMazeTopics() {
  return [...new Set(casesData.flatMap(idiom => idiom.tags || []))].sort((a, b) => a.localeCompare(b));
}

function populateMazeTopicSelect() {
  const topicSelect = document.getElementById("mazeTopicSelect");
  if (!topicSelect) return;
  const topics = getMazeTopics();
  topicSelect.innerHTML = `
    <option value="all">All topics</option>
    ${topics.map(topic => `<option value="${escapeHTML(topic)}">${escapeHTML(topic)}</option>`).join("")}
  `;
  topicSelect.addEventListener("change", () => {
    currentMazeTopic = topicSelect.value;
    updateMazeTopicInfo();
    if (document.getElementById("maze").classList.contains("active")) initGame();
  });
  updateMazeTopicInfo();
}

function getMazeQuestionPool() {
  if (currentMazeTopic === "all") return casesData;
  const topicPool = casesData.filter(idiom => idiom.tags?.includes(currentMazeTopic));
  return topicPool.length > 0 ? topicPool : casesData;
}

function updateMazeTopicInfo() {
  const info = document.getElementById("mazeTopicInfo");
  if (!info) return;
  const pool = getMazeQuestionPool();
  const topicText = currentMazeTopic === "all" ? "all topics" : currentMazeTopic;
  info.innerText = `Current maze: ${pool.length} idioms from ${topicText}.`;
}

function drawMaze() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      let tile = mazeMap[row][col], x = col * TILE_SIZE, y = row * TILE_SIZE;
      if (tile === 0) { ctx.fillStyle = "#3a3a52"; ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE); }
      else if (tile === 1) { ctx.fillStyle = "#faf9f5"; ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE); }
      else if (tile === 2) { ctx.fillStyle = "#ffd273"; ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE); ctx.font = "20px Arial"; ctx.fillText("🏆", x+8, y+28); }
      else if (tile === 3) { ctx.fillStyle = "#fec5e6"; ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE); ctx.fillStyle = "#3a3a52"; ctx.font = "bold 20px Arial"; ctx.fillText("?", x+12, y+28); }
    }
  }
  ctx.beginPath();
  ctx.arc(player.x * TILE_SIZE + TILE_SIZE/2, player.y * TILE_SIZE + TILE_SIZE/2, TILE_SIZE/2 - 6, 0, Math.PI*2);
  ctx.fillStyle = "#bfaee3"; ctx.fill();
  ctx.strokeStyle = "#3a3a52"; ctx.lineWidth = 3; ctx.stroke();
}

window.addEventListener("keydown", function(e) {
  if (!isGameActive || isQuizActive || !document.getElementById("maze").classList.contains("active")) return;
  let dx = 0, dy = 0;
  if (e.key === "w" || e.key === "W") dy = -1;
  if (e.key === "s" || e.key === "S") dy = 1;
  if (e.key === "a" || e.key === "A") dx = -1;
  if (e.key === "d" || e.key === "D") dx = 1;
  if (dx !== 0 || dy !== 0) movePlayer(dx, dy);
  if (["w","a","s","d"].includes(e.key.toLowerCase())) e.preventDefault();
});

function movePlayer(dx, dy) {
  if (!isGameActive || isQuizActive || !document.getElementById("maze").classList.contains("active")) return;
  let nx = player.x + dx, ny = player.y + dy;
  if (nx < 0 || nx >= COLS || ny < 0 || ny >= ROWS) return;
  let targetTile = mazeMap[ny][nx];
  if (targetTile === 1) { player.x = nx; player.y = ny; }
  else if (targetTile === 2) { player.x = nx; player.y = ny; winGame(); }
  else if (targetTile === 3) triggerQuiz(nx, ny);
  drawMaze();
}

function triggerQuiz(x, y) {
  isQuizActive = true;
  currentGate = { x, y };
  const topicQuestions = [...getMazeQuestionPool()].sort(() => 0.5 - Math.random());
  const answerIdiom = topicQuestions[0];
  const distractorSource = topicQuestions.length >= 4 ? topicQuestions : casesData;
  const distractors = distractorSource
    .filter(idiom => idiom.title !== answerIdiom.title)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(idiom => idiom.desc);
  currentAnswer = answerIdiom.desc;
  let options = [currentAnswer, ...distractors].filter(v => v).sort(() => 0.5 - Math.random());
  const topicLabel = currentMazeTopic === "all" ? "All topics" : currentMazeTopic;
  document.getElementById("quizQuestion").innerText = `Topic: ${topicLabel}\nDecode this idiom:\n"${answerIdiom.title}"`;
  const container = document.getElementById("quizOptions");
  container.innerHTML = "";
  options.forEach(opt => {
    let btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.innerText = opt;
    btn.onclick = () => submitAnswer(opt);
    container.appendChild(btn);
  });
  document.getElementById("quizOverlay").style.display = "flex";
}

function submitAnswer(selected) {
  document.getElementById("quizOverlay").style.display = "none";
  isQuizActive = false;
  if (selected === currentAnswer) { mazeMap[currentGate.y][currentGate.x] = 1; player.x = currentGate.x; player.y = currentGate.y; }
  else { mazeMap[currentGate.y][currentGate.x] = 0; if (!checkPathExists()) loseGame(); }
  drawMaze();
}

function checkPathExists() {
  let queue = [{x: player.x, y: player.y}], visited = new Set([`${player.x},${player.y}`]), dirs = [[0,1],[1,0],[0,-1],[-1,0]];
  while (queue.length) {
    let curr = queue.shift();
    if (mazeMap[curr.y][curr.x] === 2) return true;
    for (let d of dirs) {
      let nx = curr.x + d[0], ny = curr.y + d[1];
      if (nx >= 0 && nx < COLS && ny >= 0 && ny < ROWS && mazeMap[ny][nx] !== 0 && !visited.has(`${nx},${ny}`)) {
        visited.add(`${nx},${ny}`); queue.push({x: nx, y: ny});
      }
    }
  }
  return false;
}

function winGame() {
  isGameActive = false;
  if (state.currentUser) {
    let userObj = state.leaderboard.find(p => p.user === state.currentUser);
    userObj.points += 100;
    state.userPoints = userObj.points;
    document.getElementById("navXP").innerText = state.userPoints;
    renderLeaderboard();
  }
  document.getElementById("msgTitle").innerText = "🎉 CASE CLOSED!";
  document.getElementById("msgDesc").innerText = "Excellent work. You escaped the Detective Maze and earned +100 XP on the leaderboard.";
  document.getElementById("msgOverlay").style.display = "flex";
}

function loseGame() {
  isGameActive = false;
  document.getElementById("msgTitle").innerText = "🚨 GAME OVER!";
  document.getElementById("msgDesc").innerText = "All possible paths are blocked. The detective is trapped in the maze.";
  document.getElementById("msgOverlay").style.display = "flex";
}

function seedDefaultCommunityTranslations() {
  if (state.communityTranslations["When pigs fly"]) return;
  state.communityTranslations["When pigs fly"] = [
    { id: "home_seed_1", text: "Còn khuya nhé! / Đừng có mơ!", author: "langson_genius", votesUp: 54, votesDown: 1 },
    { id: "home_seed_2", text: "Mơ đi Diễm!", author: "saigon_teen9x", votesUp: 42, votesDown: 3 }
  ];
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const idiomInput = document.getElementById("idiomInput");
  if (searchBtn) searchBtn.addEventListener("click", handleSearch);
  if (idiomInput) idiomInput.addEventListener("keydown", e => { if (e.key === "Enter") handleSearch(); });

  renderCases();
  updateSavedUI();
  renderLeaderboard();
  try {
    populateMazeTopicSelect();
  } catch (error) {
    console.error("Maze topic setup failed:", error);
  }
  try {
    initGoogleSignIn();
  } catch (error) {
    console.error("Google sign-in setup failed:", error);
    const status = document.getElementById("googleSignInStatus");
    if (status) status.innerText = "Google sign-in could not start, but the rest of the site is ready.";
  }
  
  const contribForm = document.getElementById("contribForm");
  if (contribForm) {
    contribForm.addEventListener("submit", async function(e) {
      e.preventDefault();
      if (!state.currentUser) { alert("🔒 Please sign in before sending a community contribution."); showTab("login"); return; }
      const formData = new FormData();
      formData.append("English_Idiom", document.querySelector('[name="English_Idiom"]').value);
      formData.append("Vietnamese_Meaning", document.querySelector('[name="Vietnamese_Meaning"]').value);
      const API_URL = "https://script.google.com/macros/s/AKfycbxffIaA4VnRGx4McAfAQNoPGMNpfZE2L0-WPGh74GBvm0n4nG9OY1s8DPiy6gQrlFHc7w/exec";
      try {
        await fetch(API_URL, { method: "POST", mode: "no-cors", body: formData });
        alert("✅ Thank you, Detective. Your contribution has been recorded.");
        contribForm.reset();
      } catch(err) { console.error(err); alert("❌ Could not send your contribution."); }
    });
  }
  
  // Set default idiom on home page
  seedDefaultCommunityTranslations();
  const defaultIdiom = casesData.find(c => c.title === "When pigs fly");
  if (defaultIdiom) updateHomeIdiom(defaultIdiom);
});
