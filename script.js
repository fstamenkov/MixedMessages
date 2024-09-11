// Subjects array
const subjects = [
    "Archmage",
    "Highlander",
    "Ancient Wyrm",
    "Historian",
    "Emperor",
    "Shadowblade",
    "Elementalist",
    "Woodland Sentinel",
    "Paladin",
    "Chimera"
  ];
  
  // Verbs array
  const verbs = [
    "Invokes",
    "Vanquishes",
    "Fortifies",
    "Subjugates",
    "Deciphers",
    "Provokes",
    "Manipulates",
    "Patrols",
    "Tracks",
    "Harnesses"
  ];
  
  // Objects array
  const objects = [
    "Grimoire of Shadows",
    "Blade of the Ancients",
    "Obsidian Fortress",
    "Orb of Foresight",
    "Eternal Codex",
    "Aegis of the Gods",
    "Sovereign’s Mantle",
    "Phylactery of Power",
    "Crown of Destiny",
    "Elixir of Immortality"
  ];


  const randomChoice = (arr) => {
    const chooseIndex = Math.floor(Math.random() * arr.length);
    return chooseIndex;
  };

const sentenceMaker = () => {
    let subjectWord = subjects[randomChoice(subjects)];
    let verbWord = verbs[randomChoice(verbs)];
    let objectWord = objects[randomChoice(objects)];

    console.log(subjectWord + ' ' + verbWord + ' ' + objectWord);
};

sentenceMaker();