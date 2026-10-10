// --------------------
// WORD DATA
// --------------------
const wordSets = {
  controlled_or: [
    { word: "fort", parts: ["f", "or", "t"], image: "zimages/controlledr_or/fort" },
    { word: "porch", parts: ["p", "or", "ch"], image: "zimages/controlledr_or/porch" },
    { word: "short", parts: ["sh", "or", "t"], image: "zimages/controlledr_or/short" },
    { word: "sport", parts: ["sp", "or", "t"], image: "zimages/controlledr_or/sport" },
    { word: "stork", parts: ["st", "or", "k"], image: "zimages/controlledr_or/stork" },
    { word: "storm", parts: ["st", "or", "m"], image: "zimages/controlledr_or/storm" },
    { word: "sword", parts: ["s", "w", "or", "d"], image: "zimages/controlledr_or/sword" },
    { word: "thorn", parts: ["th", "or", "n"], image: "zimages/controlledr_or/thorn" },

    // -------------------------
    // ⭐ NEW WORDS — OR
    // -------------------------
    { word: "corn", parts: ["c", "or", "n"], image: "zimages/controlledr_or/corn" },              // new word
    { word: "fork", parts: ["f", "or", "k"], image: "zimages/controlledr_or/fork" },              // new word
    { word: "horn", parts: ["h", "or", "n"], image: "zimages/controlledr_or/horn" },              // new word
    { word: "north", parts: ["n", "or", "th"], image: "zimages/controlledr_or/north" },          // new word
    { word: "torch", parts: ["t", "or", "ch"], image: "zimages/controlledr_or/torch" },          // new word
    { word: "torn", parts: ["t", "or", "n"], image: "zimages/controlledr_or/torn" },              // new word
    { word: "worn", parts: ["w", "or", "n"], image: "zimages/controlledr_or/worn" },              // new word
    { word: "pork", parts: ["p", "or", "k"], image: "zimages/controlledr_or/pork" },              // new word
    { word: "cord", parts: ["c", "or", "d"], image: "zimages/controlledr_or/cord" },              // new word
    { word: "sort", parts: ["s", "or", "t"], image: "zimages/controlledr_or/sort" },              // new word
    { word: "snort", parts: ["sn", "or", "t"], image: "zimages/controlledr_or/snort" },          // new word
    { word: "stormy", parts: ["st", "or", "m", "y"], image: "zimages/controlledr_or/stormy" },   // new word

    // -------------------------
    // ⭐ EXTRA NEW WORDS — OR
    // -------------------------
    { word: "born", parts: ["b", "or", "n"], image: "zimages/controlledr_or/born" }, // new word
    { word: "form", parts: ["f", "or", "m"], image: "zimages/controlledr_or/form" }, // new word
    { word: "story", parts: ["st", "or", "y"], image: "zimages/controlledr_or/story" }, // new word
    { word: "store", parts: ["st", "or", "e"], image: "zimages/controlledr_or/store" }, // new word
    { word: "more", parts: ["m", "or", "e"], image: "zimages/controlledr_or/more" }, // new word
    { word: "ignore", parts: ["i", "g", "n", "or", "e"], image: "zimages/controlledr_or/ignore" }, // new word
    { word: "explore", parts: ["e", "x", "pl", "or", "e"], image: "zimages/controlledr_or/explore" }, // new word
    { word: "score", parts: ["sc", "or", "e"], image: "zimages/controlledr_or/score" }, // new word
    { word: "adore", parts: ["a", "d", "or", "e"], image: "zimages/controlledr_or/adore" } // new word
  ],

  controlled_ir: [
    { word: "dirt", parts: ["d", "ir", "t"], image: "zimages/controlledr_ir/dirt" },
    { word: "first", parts: ["f", "ir", "s", "t"], image: "zimages/controlledr_ir/first" },
    { word: "shirt", parts: ["sh", "ir", "t"], image: "zimages/controlledr_ir/shirt" },
    { word: "skirt", parts: ["sk", "ir", "t"], image: "zimages/controlledr_ir/skirt" },
    { word: "stir", parts: ["s", "t", "ir"], image: "zimages/controlledr_ir/stir" },
    { word: "third", parts: ["th", "ir", "d"], image: "zimages/controlledr_ir/third" },
    { word: "twirl", parts: ["tw", "ir", "l"], image: "zimages/controlledr_ir/twirl" },
    { word: "squirt", parts: ["squ", "ir", "t"], image: "zimages/controlledr_ir/squirt" },

    // -------------------------
    // ⭐ NEW WORDS — IR
    // -------------------------
    { word: "bird", parts: ["b", "ir", "d"], image: "zimages/controlledr_ir/bird" },              // new word
    { word: "girl", parts: ["g", "ir", "l"], image: "zimages/controlledr_ir/girl" },              // new word
    { word: "firm", parts: ["f", "ir", "m"], image: "zimages/controlledr_ir/firm" },              // new word
    { word: "chirp", parts: ["ch", "ir", "p"], image: "zimages/controlledr_ir/chirp" },          // new word
    { word: "birth", parts: ["b", "ir", "th"], image: "zimages/controlledr_ir/birth" },          // new word
    { word: "circle", parts: ["c", "ir", "c", "l", "e"], image: "zimages/controlledr_ir/circle" },   // new word
    { word: "dirty", parts: ["d", "ir", "t", "y"], image: "zimages/controlledr_ir/dirty" },      // new word
    { word: "thirst", parts: ["th", "ir", "s", "t"], image: "zimages/controlledr_ir/thirst" },       // new word
    { word: "swirl", parts: ["sw", "ir", "l"], image: "zimages/controlledr_ir/swirl" },          // new word
    { word: "thirty", parts: ["th", "ir", "t", "y"], image: "zimages/controlledr_ir/thirty" }, // new word
    { word: "dirty", parts: ["d", "ir", "t", "y"], image: "zimages/controlledr_ir/dirty" } // new word
  ],


  // --------------------
  // CONTROLLED R — AR
  // --------------------
  controlled_ar: [
    { word: "car", parts: ["c", "ar"], image: "zimages/controlledr_ar/car" },
    { word: "jar", parts: ["j", "ar"], image: "zimages/controlledr_ar/jar" },
    { word: "star", parts: ["st", "ar"], image: "zimages/controlledr_ar/star" },
    { word: "bar", parts: ["b", "ar"], image: "zimages/controlledr_ar/bar" },
    { word: "far", parts: ["f", "ar"], image: "zimages/controlledr_ar/far" },
    { word: "arm", parts: ["ar", "m"], image: "zimages/controlledr_ar/arm" },
    { word: "art", parts: ["ar", "t"], image: "zimages/controlledr_ar/art" },
    { word: "cart", parts: ["c", "ar", "t"], image: "zimages/controlledr_ar/cart" },
    { word: "card", parts: ["c", "ar", "d"], image: "zimages/controlledr_ar/card" },
    { word: "yard", parts: ["y", "ar", "d"], image: "zimages/controlledr_ar/yard" },
    { word: "hard", parts: ["h", "ar", "d"], image: "zimages/controlledr_ar/hard" },
    { word: "park", parts: ["p", "ar", "k"], image: "zimages/controlledr_ar/park" },
    { word: "dark", parts: ["d", "ar", "k"], image: "zimages/controlledr_ar/dark" },
    { word: "bark", parts: ["b", "ar", "k"], image: "zimages/controlledr_ar/bark" },
    { word: "shark", parts: ["sh", "ar", "k"], image: "zimages/controlledr_ar/shark" },
    { word: "spark", parts: ["sp", "ar", "k"], image: "zimages/controlledr_ar/spark" },
    { word: "farm", parts: ["f", "ar", "m"], image: "zimages/controlledr_ar/farm" },
    { word: "harp", parts: ["h", "ar", "p"], image: "zimages/controlledr_ar/harp" },
    { word: "sharp", parts: ["sh", "ar", "p"], image: "zimages/controlledr_ar/sharp" },
    { word: "scarf", parts: ["sc", "ar", "f"], image: "zimages/controlledr_ar/scarf" },
    { word: "barn", parts: ["b", "ar", "n"], image: "zimages/controlledr_ar/barn" },
    { word: "yarn", parts: ["y", "ar", "n"], image: "zimages/controlledr_ar/yarn" },
    { word: "chart", parts: ["ch", "ar", "t"], image: "zimages/controlledr_ar/chart" },
    { word: "smart", parts: ["sm", "ar", "t"], image: "zimages/controlledr_ar/smart" },
    { word: "start", parts: ["st", "ar", "t"], image: "zimages/controlledr_ar/start" },
    { word: "march", parts: ["m", "ar", "ch"], image: "zimages/controlledr_ar/march" },
    { word: "arch", parts: ["ar", "ch"], image: "zimages/controlledr_ar/arch" },
    { word: "tart", parts: ["t", "ar", "t"], image: "zimages/controlledr_ar/tart" }
  ],

  // --------------------
  // CONTROLLED R — ER
  // --------------------
  controlled_er: [
    { word: "her", parts: ["h", "er"], image: "zimages/controlledr_er/her" },
    { word: "fern", parts: ["f", "er", "n"], image: "zimages/controlledr_er/fern" },
    { word: "herd", parts: ["h", "er", "d"], image: "zimages/controlledr_er/herd" },
    { word: "perch", parts: ["p", "er", "ch"], image: "zimages/controlledr_er/perch" },
    { word: "verb", parts: ["v", "er", "b"], image: "zimages/controlledr_er/verb" },
    { word: "stern", parts: ["st", "er", "n"], image: "zimages/controlledr_er/stern" },
    { word: "clerk", parts: ["cl", "er", "k"], image: "zimages/controlledr_er/clerk" },
    { word: "germ", parts: ["g", "er", "m"], image: "zimages/controlledr_er/germ" },
    { word: "term", parts: ["t", "er", "m"], image: "zimages/controlledr_er/term" },
    { word: "serve", parts: ["s", "er", "v", "e"], image: "zimages/controlledr_er/serve" },
    { word: "nerve", parts: ["n", "er", "v", "e"], image: "zimages/controlledr_er/nerve" },
    { word: "swerve", parts: ["sw", "er", "v", "e"], image: "zimages/controlledr_er/swerve" },
    { word: "tiger", parts: ["t", "i", "g", "er"], image: "zimages/controlledr_er/tiger" },
    { word: "letter", parts: ["l", "e", "tt", "er"], image: "zimages/controlledr_er/letter" },
    { word: "butter", parts: ["b", "u", "tt", "er"], image: "zimages/controlledr_er/butter" },
    { word: "ladder", parts: ["l", "a", "dd", "er"], image: "zimages/controlledr_er/ladder" },
    { word: "hammer", parts: ["h", "a", "mm", "er"], image: "zimages/controlledr_er/hammer" },
    { word: "river", parts: ["r", "i", "v", "er"], image: "zimages/controlledr_er/river" },
    { word: "sister", parts: ["s", "i", "s", "t", "er"], image: "zimages/controlledr_er/sister" },
    { word: "winter", parts: ["w", "i", "n", "t", "er"], image: "zimages/controlledr_er/winter" },
    { word: "spider", parts: ["sp", "i", "d", "er"], image: "zimages/controlledr_er/spider" },
    { word: "flower", parts: ["fl", "ow", "er"], image: "zimages/controlledr_er/flower" },
    { word: "dinner", parts: ["d", "i", "nn", "er"], image: "zimages/controlledr_er/dinner" },
    { word: "number", parts: ["n", "u", "m", "b", "er"], image: "zimages/controlledr_er/number" },
    { word: "silver", parts: ["s", "i", "l", "v", "er"], image: "zimages/controlledr_er/silver" },
    { word: "zipper", parts: ["z", "i", "pp", "er"], image: "zimages/controlledr_er/zipper" },
    { word: "monster", parts: ["m", "o", "n", "st", "er"], image: "zimages/controlledr_er/monster" },
    { word: "finger", parts: ["f", "i", "ng", "er"], image: "zimages/controlledr_er/finger" }
  ],

  // --------------------
  // CONTROLLED R — UR
  // --------------------
  controlled_ur: [
    { word: "fur", parts: ["f", "ur"], image: "zimages/controlledr_ur/fur" },
    { word: "burn", parts: ["b", "ur", "n"], image: "zimages/controlledr_ur/burn" },
    { word: "turn", parts: ["t", "ur", "n"], image: "zimages/controlledr_ur/turn" },
    { word: "hurt", parts: ["h", "ur", "t"], image: "zimages/controlledr_ur/hurt" },
    { word: "curl", parts: ["c", "ur", "l"], image: "zimages/controlledr_ur/curl" },
    { word: "surf", parts: ["s", "ur", "f"], image: "zimages/controlledr_ur/surf" },
    { word: "church", parts: ["ch", "ur", "ch"], image: "zimages/controlledr_ur/church" },
    { word: "churn", parts: ["ch", "ur", "n"], image: "zimages/controlledr_ur/churn" },
    { word: "burp", parts: ["b", "ur", "p"], image: "zimages/controlledr_ur/burp" },
    { word: "purr", parts: ["p", "ur", "r"], image: "zimages/controlledr_ur/purr" },
    { word: "purse", parts: ["p", "ur", "s", "e"], image: "zimages/controlledr_ur/purse" },
    { word: "nurse", parts: ["n", "ur", "s", "e"], image: "zimages/controlledr_ur/nurse" },
    { word: "curve", parts: ["c", "ur", "v", "e"], image: "zimages/controlledr_ur/curve" },
    { word: "blur", parts: ["bl", "ur"], image: "zimages/controlledr_ur/blur" },
    { word: "curb", parts: ["c", "ur", "b"], image: "zimages/controlledr_ur/curb" },
    { word: "turtle", parts: ["t", "ur", "t", "l", "e"], image: "zimages/controlledr_ur/turtle" },
    { word: "purple", parts: ["p", "ur", "p", "l", "e"], image: "zimages/controlledr_ur/purple" },
    { word: "burger", parts: ["b", "ur", "g", "er"], image: "zimages/controlledr_ur/burger" },
    { word: "turkey", parts: ["t", "ur", "k", "ey"], image: "zimages/controlledr_ur/turkey" },
    { word: "turf", parts: ["t", "ur", "f"], image: "zimages/controlledr_ur/turf" },
    { word: "burst", parts: ["b", "ur", "s", "t"], image: "zimages/controlledr_ur/burst" },
    { word: "slurp", parts: ["sl", "ur", "p"], image: "zimages/controlledr_ur/slurp" },
    { word: "hurdle", parts: ["h", "ur", "d", "l", "e"], image: "zimages/controlledr_ur/hurdle" },
    { word: "return", parts: ["r", "e", "t", "ur", "n"], image: "zimages/controlledr_ur/return" },
    { word: "curly", parts: ["c", "ur", "l", "y"], image: "zimages/controlledr_ur/curly" },
    { word: "turnip", parts: ["t", "ur", "n", "i", "p"], image: "zimages/controlledr_ur/turnip" }
  ],


  // --------------------
  // LONG VOWELS
  // --------------------
  longvowels_a: [
    { word: "brake", parts: ["br", "a", "k", "e"], image: "zimages/longvowels/a_brake" },
    { word: "cape", parts: ["c", "a", "p", "e"], image: "zimages/longvowels/a_cape" },
    { word: "chase", parts: ["ch", "a", "s", "e"], image: "zimages/longvowels/a_chase" },
    { word: "crate", parts: ["cr", "a", "t", "e"], image: "zimages/longvowels/a_crate" },
    { word: "grade", parts: ["gr", "a", "d", "e"], image: "zimages/longvowels/a_grade" },
    { word: "lame", parts: ["l", "a", "m", "e"], image: "zimages/longvowels/a_lame" },
    { word: "mane", parts: ["m", "a", "n", "e"], image: "zimages/longvowels/a_mane" },
    { word: "pane", parts: ["p", "a", "n", "e"], image: "zimages/longvowels/a_pane" },
    { word: "paste", parts: ["p", "a", "s", "t", "e"], image: "zimages/longvowels/a_paste" },
    { word: "save", parts: ["s", "a", "v", "e"], image: "zimages/longvowels/a_save" },
    { word: "tape", parts: ["t", "a", "p", "e"], image: "zimages/longvowels/a_tape" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — A
    // -------------------------
    { word: "grape", parts: ["gr", "a", "p", "e"], image: "zimages/longvowels/a_grape" }, // new word
    { word: "shape", parts: ["sh", "a", "p", "e"], image: "zimages/longvowels/a_shape" }, // new word
    { word: "scale", parts: ["sc", "a", "l", "e"], image: "zimages/longvowels/a_scale" }, // new word
    { word: "plane", parts: ["pl", "a", "n", "e"], image: "zimages/longvowels/a_plane" } // new word
  ],


  // --------------------
  // LONG VOWEL — E  (e_e, open e, ee, ea)  — max 5 sounds
  // --------------------
  longvowels_e: [
    { word: "these", parts: ["th", "e", "s", "e"], image: "zimages/longvowels/e_these" },
    { word: "theme", parts: ["th", "e", "m", "e"], image: "zimages/longvowels/e_theme" },
    { word: "scene", parts: ["sc", "e", "n", "e"], image: "zimages/longvowels/e_scene" },
    { word: "me", parts: ["m", "e"], image: "zimages/longvowels/e_me" },
    { word: "he", parts: ["h", "e"], image: "zimages/longvowels/e_he" },
    { word: "we", parts: ["w", "e"], image: "zimages/longvowels/e_we" },
    { word: "she", parts: ["sh", "e"], image: "zimages/longvowels/e_she" },
    { word: "bee", parts: ["b", "ee"], image: "zimages/longvowels/e_bee" },
    { word: "tree", parts: ["tr", "ee"], image: "zimages/longvowels/e_tree" },
    { word: "feet", parts: ["f", "ee", "t"], image: "zimages/longvowels/e_feet" },
    { word: "seed", parts: ["s", "ee", "d"], image: "zimages/longvowels/e_seed" },
    { word: "sheep", parts: ["sh", "ee", "p"], image: "zimages/longvowels/e_sheep" },
    { word: "green", parts: ["gr", "ee", "n"], image: "zimages/longvowels/e_green" },
    { word: "queen", parts: ["qu", "ee", "n"], image: "zimages/longvowels/e_queen" },
    { word: "wheel", parts: ["wh", "ee", "l"], image: "zimages/longvowels/e_wheel" },
    { word: "teeth", parts: ["t", "ee", "th"], image: "zimages/longvowels/e_teeth" },
    { word: "cheese", parts: ["ch", "ee", "s", "e"], image: "zimages/longvowels/e_cheese" },
    { word: "sleep", parts: ["sl", "ee", "p"], image: "zimages/longvowels/e_sleep" },
    { word: "leaf", parts: ["l", "ea", "f"], image: "zimages/longvowels/e_leaf" },
    { word: "seal", parts: ["s", "ea", "l"], image: "zimages/longvowels/e_seal" },
    { word: "beach", parts: ["b", "ea", "ch"], image: "zimages/longvowels/e_beach" },
    { word: "peach", parts: ["p", "ea", "ch"], image: "zimages/longvowels/e_peach" },
    { word: "eat", parts: ["ea", "t"], image: "zimages/longvowels/e_eat" },
    { word: "sweet", parts: ["sw", "ee", "t"], image: "zimages/longvowels/e_sweet" },
    { word: "meat", parts: ["m", "ea", "t"], image: "zimages/longvowels/e_meat" },
    { word: "sea", parts: ["s", "ea"], image: "zimages/longvowels/e_sea" },
    { word: "team", parts: ["t", "ea", "m"], image: "zimages/longvowels/e_team" },
    { word: "dream", parts: ["dr", "ea", "m"], image: "zimages/longvowels/e_dream" }
  ],

  longvowels_i: [
    { word: "bride", parts: ["br", "i", "d", "e"], image: "zimages/longvowels/i_bride" },
    { word: "pine", parts: ["p", "i", "n", "e"], image: "zimages/longvowels/i_pine" },
    { word: "shine", parts: ["sh", "i", "n", "e"], image: "zimages/longvowels/i_shine" },
    { word: "spine", parts: ["sp", "i", "n", "e"], image: "zimages/longvowels/i_spine" },
    { word: "stripe", parts: ["str", "i", "p", "e"], image: "zimages/longvowels/i_stripe" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — I
    // -------------------------
    { word: "slide", parts: ["sl", "i", "d", "e"], image: "zimages/longvowels/i_slide" }, // new word
    { word: "smile", parts: ["sm", "i", "l", "e"], image: "zimages/longvowels/i_smile" }, // new word
    { word: "while", parts: ["wh", "i", "l", "e"], image: "zimages/longvowels/i_while" }, // new word
    { word: "bribe", parts: ["br", "i", "b", "e"], image: "zimages/longvowels/i_bribe" } // new word
  ],


  longvowels_o: [
    { word: "choke", parts: ["ch", "o", "k", "e"], image: "zimages/longvowels/o_choke" },
    { word: "dome", parts: ["d", "o", "m", "e"], image: "zimages/longvowels/o_dome" },
    { word: "globe", parts: ["gl", "o", "b", "e"], image: "zimages/longvowels/o_globe" },
    { word: "smoke", parts: ["sm", "o", "k", "e"], image: "zimages/longvowels/o_smoke" },
    { word: "stove", parts: ["st", "o", "v", "e"], image: "zimages/longvowels/o_stove" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — O
    // -------------------------
    { word: "rope", parts: ["r", "o", "p", "e"], image: "zimages/longvowels/o_rope" }, // new word
    { word: "stone", parts: ["st", "o", "n", "e"], image: "zimages/longvowels/o_stone" }, // new word
    { word: "phone", parts: ["ph", "o", "n", "e"], image: "zimages/longvowels/o_phone" }, // new word
    { word: "throne", parts: ["thr", "o", "n", "e"], image: "zimages/longvowels/o_throne" } // new word
  ],


  longvowels_u: [
    { word: "dune", parts: ["d", "u", "n", "e"], image: "zimages/longvowels/u_dune" },
    { word: "flute", parts: ["fl", "u", "t", "e"], image: "zimages/longvowels/u_flute" },
    { word: "mule", parts: ["m", "u", "l", "e"], image: "zimages/longvowels/u_mule" },
    { word: "mute", parts: ["m", "u", "t", "e"], image: "zimages/longvowels/u_mute" },
    { word: "plume", parts: ["pl", "u", "m", "e"], image: "zimages/longvowels/u_plume" },
    { word: "prune", parts: ["pr", "u", "n", "e"], image: "zimages/longvowels/u_prune" },
    { word: "tune", parts: ["t", "u", "n", "e"], image: "zimages/longvowels/u_tune" },
    
    // -------------------------
    // ⭐ EXTRA NEW WORDS — U
    // -------------------------
    { word: "cube", parts: ["c", "u", "b", "e"], image: "zimages/longvowels/u_cube" }, // new word
    { word: "cute", parts: ["c", "u", "t", "e"], image: "zimages/longvowels/u_cute" }, // new word
    { word: "huge", parts: ["h", "u", "g", "e"], image: "zimages/longvowels/u_huge" }, // new word
    { word: "rude", parts: ["r", "u", "d", "e"], image: "zimages/longvowels/u_rude" } // new word
  ],



  // --------------------
  // CONSONANT BLEND L
  // --------------------
  consonantblend_l: [
    { word: "blimp", parts: ["bl", "i", "m", "p"], image: "zimages/consonantblend_l/blimp" },
    { word: "clam", parts: ["cl", "a", "m"], image: "zimages/consonantblend_l/clam" },
    { word: "clap", parts: ["cl", "a", "p"], image: "zimages/consonantblend_l/clap" },
    { word: "clock", parts: ["cl", "o", "ck"], image: "zimages/consonantblend_l/clock" },
    { word: "flag", parts: ["fl", "a", "g"], image: "zimages/consonantblend_l/flag" },
    { word: "flame", parts: ["fl", "a", "m", "e"], image: "zimages/consonantblend_l/flame" },
    { word: "flap", parts: ["fl", "a", "p"], image: "zimages/consonantblend_l/flap" },
    { word: "floss", parts: ["fl", "o", "ss"], image: "zimages/consonantblend_l/floss" },
    { word: "glad", parts: ["gl", "a", "d"], image: "zimages/consonantblend_l/glad" },
    { word: "glass", parts: ["gl", "a", "ss"], image: "zimages/consonantblend_l/glass" },
    { word: "globe", parts: ["gl", "o", "b", "e"], image: "zimages/consonantblend_l/globe" },
    { word: "plug", parts: ["pl", "u", "g"], image: "zimages/consonantblend_l/plug" },
    { word: "sled", parts: ["sl", "e", "d"], image: "zimages/consonantblend_l/sled" },
    { word: "sleep", parts: ["sl", "ee", "p"], image: "zimages/consonantblend_l/sleep" },
    { word: "sleeve", parts: ["sl", "ee", "v", "e"], image: "zimages/consonantblend_l/sleeve" },
    { word: "slide", parts: ["sl", "i", "d", "e"], image: "zimages/consonantblend_l/slide" },
    { word: "slime", parts: ["sl", "i", "m", "e"], image: "zimages/consonantblend_l/slime" },


    { word: "black", parts: ["bl", "a", "ck"], image: "zimages/consonantblend_l/black" }, // new
    { word: "blast", parts: ["bl", "a", "s", "t"], image: "zimages/consonantblend_l/blast" }, // new
    { word: "blend", parts: ["bl", "e", "n", "d"], image: "zimages/consonantblend_l/blend" }, // new
    { word: "blink", parts: ["bl", "i", "n", "k"], image: "zimages/consonantblend_l/blink" }, // new
    { word: "block", parts: ["bl", "o", "ck"], image: "zimages/consonantblend_l/block" }, // new
    { word: "blaze", parts: ["bl", "a", "z", "e"], image: "zimages/consonantblend_l/blaze" }, // new

    { word: "cliff", parts: ["cl", "i", "ff"], image: "zimages/consonantblend_l/cliff" }, // new
    { word: "cling", parts: ["cl", "i", "ng"], image: "zimages/consonantblend_l/cling" }, // new
    { word: "clip", parts: ["cl", "i", "p"], image: "zimages/consonantblend_l/clip" }, // new
    { word: "climb", parts: ["cl", "i", "m", "b"], image: "zimages/consonantblend_l/climb" }, // new
    { word: "clown", parts: ["cl", "ow", "n"], image: "zimages/consonantblend_l/clown" }, // new
    { word: "close", parts: ["cl", "o", "s", "e"], image: "zimages/consonantblend_l/close" }, // new

    { word: "flake", parts: ["fl", "a", "k", "e"], image: "zimages/consonantblend_l/flake" }, // new
    { word: "fling", parts: ["fl", "i", "ng"], image: "zimages/consonantblend_l/fling" }, // new
    { word: "float", parts: ["fl", "oa", "t"], image: "zimages/consonantblend_l/float" }, // new
    { word: "flock", parts: ["fl", "o", "ck"], image: "zimages/consonantblend_l/flock" }, // new
    { word: "flute", parts: ["fl", "u", "t", "e"], image: "zimages/consonantblend_l/flute" }, // new
    { word: "flint", parts: ["fl", "i", "n", "t"], image: "zimages/consonantblend_l/flint" }, // new

    { word: "glove", parts: ["gl", "o", "v", "e"], image: "zimages/consonantblend_l/glove" }, // new
    { word: "glide", parts: ["gl", "i", "d", "e"], image: "zimages/consonantblend_l/glide" }, // new
    { word: "glow", parts: ["gl", "ow"], image: "zimages/consonantblend_l/glow" }, // new
    { word: "gleam", parts: ["gl", "ea", "m"], image: "zimages/consonantblend_l/gleam" }, // new
    { word: "glare", parts: ["gl", "a", "r", "e"], image: "zimages/consonantblend_l/glare" }, // new
    { word: "gloss", parts: ["gl", "o", "ss"], image: "zimages/consonantblend_l/gloss" }, // new

    { word: "place", parts: ["pl", "a", "c", "e"], image: "zimages/consonantblend_l/place" }, // new
    { word: "plant", parts: ["pl", "a", "n", "t"], image: "zimages/consonantblend_l/plant" }, // new
    { word: "plate", parts: ["pl", "a", "t", "e"], image: "zimages/consonantblend_l/plate" }, // new
    { word: "plank", parts: ["pl", "a", "n", "k"], image: "zimages/consonantblend_l/plank" }, // new
    { word: "pluck", parts: ["pl", "u", "ck"], image: "zimages/consonantblend_l/pluck" }, // new
    { word: "plain", parts: ["pl", "ai", "n"], image: "zimages/consonantblend_l/plain" }, // new

    { word: "slam", parts: ["sl", "a", "m"], image: "zimages/consonantblend_l/slam" }, // new
    { word: "slap", parts: ["sl", "a", "p"], image: "zimages/consonantblend_l/slap" }, // new
    { word: "slant", parts: ["sl", "a", "n", "t"], image: "zimages/consonantblend_l/slant" }, // new
    { word: "slick", parts: ["sl", "i", "ck"], image: "zimages/consonantblend_l/slick" }, // new
    { word: "slip", parts: ["sl", "i", "p"], image: "zimages/consonantblend_l/slip" }, // new
    { word: "sloth", parts: ["sl", "o", "th"], image: "zimages/consonantblend_l/sloth" } // new
  ],

  // --------------------
  // CONSONANT BLEND R
  // --------------------
  consonantblend_r: [
    { word: "braid", parts: ["br", "ai", "d"], image: "zimages/consonantblend_r/braid" },
    { word: "brick", parts: ["br", "i", "ck"], image: "zimages/consonantblend_r/brick" },
    { word: "broom", parts: ["br", "oo", "m"], image: "zimages/consonantblend_r/broom" },
    { word: "crate", parts: ["cr", "a", "t", "e"], image: "zimages/consonantblend_r/crate" },
    { word: "cross", parts: ["cr", "o", "ss"], image: "zimages/consonantblend_r/cross" },
    { word: "dress", parts: ["dr", "e", "ss"], image: "zimages/consonantblend_r/dress" },
    { word: "drill", parts: ["dr", "i", "ll"], image: "zimages/consonantblend_r/drill" },
    { word: "drink", parts: ["dr", "i", "n", "k"], image: "zimages/consonantblend_r/drink" },
    { word: "frame", parts: ["fr", "a", "m", "e"], image: "zimages/consonantblend_r/frame" },
    { word: "frost", parts: ["fr", "o", "s", "t"], image: "zimages/consonantblend_r/frost" },
    { word: "grill", parts: ["gr", "i", "ll"], image: "zimages/consonantblend_r/grill" },
    { word: "print", parts: ["pr", "i", "n", "t"], image: "zimages/consonantblend_r/print" },
    { word: "prize", parts: ["pr", "i", "z", "e"], image: "zimages/consonantblend_r/prize" },
    { word: "train", parts: ["tr", "ai", "n"], image: "zimages/consonantblend_r/train" },
    { word: "trash", parts: ["tr", "a", "sh"], image: "zimages/consonantblend_r/trash" },
    { word: "trunk", parts: ["tr", "u", "n", "k"], image: "zimages/consonantblend_r/trunk" },

    { word: "brag", parts: ["br", "a", "g"], image: "zimages/consonantblend_r/brag" }, // new
    { word: "brim", parts: ["br", "i", "m"], image: "zimages/consonantblend_r/brim" }, // new
    { word: "brush", parts: ["br", "u", "sh"], image: "zimages/consonantblend_r/brush" }, // new
    { word: "brass", parts: ["br", "a", "ss"], image: "zimages/consonantblend_r/brass" }, // new
    { word: "bread", parts: ["br", "ea", "d"], image: "zimages/consonantblend_r/bread" }, // new

    { word: "crab", parts: ["cr", "a", "b"], image: "zimages/consonantblend_r/crab" }, // new
    { word: "crack", parts: ["cr", "a", "ck"], image: "zimages/consonantblend_r/crack" }, // new
    { word: "crisp", parts: ["cr", "i", "s", "p"], image: "zimages/consonantblend_r/crisp" }, // new
    { word: "crow", parts: ["cr", "ow"], image: "zimages/consonantblend_r/crow" }, // new
    { word: "crust", parts: ["cr", "u", "s", "t"], image: "zimages/consonantblend_r/crust" }, // new

    { word: "drag", parts: ["dr", "a", "g"], image: "zimages/consonantblend_r/drag" }, // new
    { word: "drip", parts: ["dr", "i", "p"], image: "zimages/consonantblend_r/drip" }, // new
    { word: "droop", parts: ["dr", "oo", "p"], image: "zimages/consonantblend_r/droop" }, // new
    { word: "drain", parts: ["dr", "ai", "n"], image: "zimages/consonantblend_r/drain" }, // new
    { word: "draft", parts: ["dr", "a", "f", "t"], image: "zimages/consonantblend_r/draft" }, // new

    { word: "crab", parts: ["cr", "a", "b"], image: "zimages/consonantblend_r/crab" }, // new
    { word: "crack", parts: ["cr", "a", "ck"], image: "zimages/consonantblend_r/crack" }, // new
    { word: "crisp", parts: ["cr", "i", "s", "p"], image: "zimages/consonantblend_r/crisp" }, // new
    { word: "crow", parts: ["cr", "ow"], image: "zimages/consonantblend_r/crow" }, // new
    { word: "crust", parts: ["cr", "u", "s", "t"], image: "zimages/consonantblend_r/crust" }, // new

    { word: "drag", parts: ["dr", "a", "g"], image: "zimages/consonantblend_r/drag" }, // new
    { word: "drip", parts: ["dr", "i", "p"], image: "zimages/consonantblend_r/drip" }, // new
    { word: "droop", parts: ["dr", "oo", "p"], image: "zimages/consonantblend_r/droop" }, // new
    { word: "drain", parts: ["dr", "ai", "n"], image: "zimages/consonantblend_r/drain" }, // new
    { word: "draft", parts: ["dr", "a", "f", "t"], image: "zimages/consonantblend_r/draft" }, // new

    { word: "fry", parts: ["fr", "y"], image: "zimages/consonantblend_r/fry" }, // new
    { word: "fresh", parts: ["fr", "e", "sh"], image: "zimages/consonantblend_r/fresh" }, // new
    { word: "friend", parts: ["fr", "ie", "nd"], image: "zimages/consonantblend_r/friend" }, // new
    { word: "freight", parts: ["fr", "ei", "gh", "t"], image: "zimages/consonantblend_r/freight" }, // new
    { word: "fruit", parts: ["fr", "ui", "t"], image: "zimages/consonantblend_r/fruit" }, // new

    { word: "grab", parts: ["gr", "a", "b"], image: "zimages/consonantblend_r/grab" }, // new
    { word: "grain", parts: ["gr", "ai", "n"], image: "zimages/consonantblend_r/grain" }, // new
    { word: "grew", parts: ["gr", "ew"], image: "zimages/consonantblend_r/grew" }, // new
    { word: "grip", parts: ["gr", "i", "p"], image: "zimages/consonantblend_r/grip" }, // new
    { word: "groan", parts: ["gr", "oa", "n"], image: "zimages/consonantblend_r/groan" }, // new

    { word: "pram", parts: ["pr", "a", "m"], image: "zimages/consonantblend_r/pram" }, // new
    { word: "press", parts: ["pr", "e", "ss"], image: "zimages/consonantblend_r/press" }, // new
    { word: "pride", parts: ["pr", "i", "d", "e"], image: "zimages/consonantblend_r/pride" }, // new
    { word: "prank", parts: ["pr", "a", "n", "k"], image: "zimages/consonantblend_r/prank" }, // new
    { word: "prove", parts: ["pr", "o", "v", "e"], image: "zimages/consonantblend_r/prove" }, // new

    { word: "track", parts: ["tr", "a", "ck"], image: "zimages/consonantblend_r/track" }, // new
    { word: "trap", parts: ["tr", "a", "p"], image: "zimages/consonantblend_r/trap" }, // new
    { word: "tread", parts: ["tr", "ea", "d"], image: "zimages/consonantblend_r/tread" }, // new
    { word: "treat", parts: ["tr", "ea", "t"], image: "zimages/consonantblend_r/treat" }, // new
    { word: "trout", parts: ["tr", "ou", "t"], image: "zimages/consonantblend_r/trout" } // new
  ],

  // --------------------
  // CONSONANT BLEND S
  // --------------------
  consonantblend_s: [
    { word: "scab", parts: ["sc", "a", "b"], image: "zimages/consonantblend_s/scab" },
    { word: "scarf", parts: ["sc", "ar", "f"], image: "zimages/consonantblend_s/scarf" },
    { word: "scoop", parts: ["sc", "oo", "p"], image: "zimages/consonantblend_s/scoop" },
    { word: "skate", parts: ["sk", "a", "t", "e"], image: "zimages/consonantblend_s/skate" },
    { word: "skull", parts: ["sk", "u", "ll"], image: "zimages/consonantblend_s/skull" },
    { word: "skunk", parts: ["sk", "u", "n", "k"], image: "zimages/consonantblend_s/skunk" },
    { word: "smell", parts: ["sm", "e", "ll"], image: "zimages/consonantblend_s/smell" },
    { word: "smock", parts: ["sm", "o", "ck"], image: "zimages/consonantblend_s/smock" },
    { word: "sneeze", parts: ["sn", "ee", "z", "e"], image: "zimages/consonantblend_s/sneeze" },
    { word: "snip", parts: ["sn", "i", "p"], image: "zimages/consonantblend_s/snip" },
    { word: "snore", parts: ["sn", "or", "e"], image: "zimages/consonantblend_s/snore" },
    { word: "snout", parts: ["sn", "ou", "t"], image: "zimages/consonantblend_s/snout" },
    { word: "stack", parts: ["st", "a", "ck"], image: "zimages/consonantblend_s/stack" },
    { word: "stem", parts: ["st", "e", "m"], image: "zimages/consonantblend_s/stem" },
    { word: "sting", parts: ["st", "i", "ng"], image: "zimages/consonantblend_s/sting" },
    { word: "storm", parts: ["st", "or", "m"], image: "zimages/consonantblend_s/storm" },
    { word: "sweet", parts: ["sw", "ee", "t"], image: "zimages/consonantblend_s/sweet" },
    { word: "swim", parts: ["sw", "i", "m"], image: "zimages/consonantblend_s/swim" },

    { word: "scale", parts: ["sc", "a", "l", "e"], image: "zimages/consonantblend_s/scale" }, // new
    { word: "scold", parts: ["sc", "o", "l", "d"], image: "zimages/consonantblend_s/scold" }, // new
    { word: "scout", parts: ["sc", "ou", "t"], image: "zimages/consonantblend_s/scout" }, // new
    { word: "screen", parts: ["scr", "ee", "n"], image: "zimages/consonantblend_s/screen" }, // new
    { word: "scrap", parts: ["scr", "a", "p"], image: "zimages/consonantblend_s/scrap" }, // new

    { word: "skid", parts: ["sk", "i", "d"], image: "zimages/consonantblend_s/skid" }, // new
    { word: "skill", parts: ["sk", "i", "ll"], image: "zimages/consonantblend_s/skill" }, // new
    { word: "skip", parts: ["sk", "i", "p"], image: "zimages/consonantblend_s/skip" }, // new
    { word: "skirt", parts: ["sk", "ir", "t"], image: "zimages/consonantblend_s/skirt" }, // new
    { word: "skate", parts: ["sk", "a", "t", "e"], image: "zimages/consonantblend_s/skate" }, // new

    { word: "smart", parts: ["sm", "ar", "t"], image: "zimages/consonantblend_s/smart" }, // new
    { word: "smash", parts: ["sm", "a", "sh"], image: "zimages/consonantblend_s/smash" }, // new
    { word: "smirk", parts: ["sm", "ir", "k"], image: "zimages/consonantblend_s/smirk" }, // new
    { word: "smoke", parts: ["sm", "o", "k", "e"], image: "zimages/consonantblend_s/smoke" }, // new

    { word: "snack", parts: ["sn", "a", "ck"], image: "zimages/consonantblend_s/snack" }, // new
    { word: "snap", parts: ["sn", "a", "p"], image: "zimages/consonantblend_s/snap" }, // new
    { word: "snake", parts: ["sn", "a", "k", "e"], image: "zimages/consonantblend_s/snake" }, // new
    { word: "snoop", parts: ["sn", "oo", "p"], image: "zimages/consonantblend_s/snoop" }, // new
    { word: "snow", parts: ["sn", "ow"], image: "zimages/consonantblend_s/snow" }, // new

    { word: "space", parts: ["sp", "a", "c", "e"], image: "zimages/consonantblend_s/space" }, // new
    { word: "spade", parts: ["sp", "a", "d", "e"], image: "zimages/consonantblend_s/spade" }, // new
    { word: "spend", parts: ["sp", "e", "n", "d"], image: "zimages/consonantblend_s/spend" }, // new
    { word: "spice", parts: ["sp", "i", "c", "e"], image: "zimages/consonantblend_s/spice" }, // new
    { word: "spoon", parts: ["sp", "oo", "n"], image: "zimages/consonantblend_s/spoon" }, // new

    { word: "stage", parts: ["st", "a", "g", "e"], image: "zimages/consonantblend_s/stage" }, // new
    { word: "stair", parts: ["st", "ai", "r"], image: "zimages/consonantblend_s/stair" }, // new
    { word: "straw", parts: ["st", "r", "aw"], image: "zimages/consonantblend_s/straw" }, // new
    { word: "string", parts: ["st", "r", "i", "ng"], image: "zimages/consonantblend_s/string" }, // new
    { word: "stone", parts: ["st", "o", "n", "e"], image: "zimages/consonantblend_s/stone" }, // new

    { word: "swirl", parts: ["sw", "ir", "l"], image: "zimages/consonantblend_s/swirl" }, // new
    { word: "swing", parts: ["sw", "i", "ng"], image: "zimages/consonantblend_s/swing" }, // new
    { word: "swarm", parts: ["sw", "ar", "m"], image: "zimages/consonantblend_s/swarm" }, // new
    { word: "swipe", parts: ["sw", "i", "p", "e"], image: "zimages/consonantblend_s/swipe" }, // new
    { word: "swoop", parts: ["sw", "oo", "p"], image: "zimages/consonantblend_s/swoop" } // new
  ],

  // --------------------
  // DIAGRAPHS
  // --------------------
  diagraphs_ch: [
    { word: "beach", parts: ["b", "ea", "ch"], image: "zimages/diagraphs/ch/beach" },
    { word: "bunch", parts: ["b", "u", "n", "ch"], image: "zimages/diagraphs/ch/bunch" },
    { word: "chat", parts: ["ch", "a", "t"], image: "zimages/diagraphs/ch/chat" },
    { word: "cheek", parts: ["ch", "ee", "k"], image: "zimages/diagraphs/ch/cheek" },
    { word: "cheese", parts: ["ch", "ee", "s", "e"], image: "zimages/diagraphs/ch/cheese" },
    { word: "chest", parts: ["ch", "e", "s", "t"], image: "zimages/diagraphs/ch/chest" },
    { word: "chimp", parts: ["ch", "i", "m", "p"], image: "zimages/diagraphs/ch/chimp" },
    { word: "chip", parts: ["ch", "i", "p"], image: "zimages/diagraphs/ch/chip" },
    { word: "chop", parts: ["ch", "o", "p"], image: "zimages/diagraphs/ch/chop" },
    { word: "church", parts: ["ch", "ur", "ch"], image: "zimages/diagraphs/ch/church" },
    { word: "couch", parts: ["c", "ou", "ch"], image: "zimages/diagraphs/ch/couch" },
    { word: "lunch", parts: ["l", "u", "n", "ch"], image: "zimages/diagraphs/ch/lunch" },
    { word: "march", parts: ["m", "ar", "ch"], image: "zimages/diagraphs/ch/march" },
    { word: "peach", parts: ["p", "ea", "ch"], image: "zimages/diagraphs/ch/peach" },
    { word: "pinch", parts: ["p", "i", "n", "ch"], image: "zimages/diagraphs/ch/pinch" },
    { word: "punch", parts: ["p", "u", "n", "ch"], image: "zimages/diagraphs/ch/punch" },
    { word: "search", parts: ["s", "ear", "ch"], image: "zimages/diagraphs/ch/search" },
    { word: "teach", parts: ["t", "ea", "ch"], image: "zimages/diagraphs/ch/teach" },
    { word: "torch", parts: ["t", "or", "ch"], image: "zimages/diagraphs/ch/torch" },

    { word: "chin", parts: ["ch", "i", "n"], image: "zimages/diagraphs/ch/chin" }, // new
    { word: "chef", parts: ["ch", "e", "f"], image: "zimages/diagraphs/ch/chef" }, // new
    { word: "chess", parts: ["ch", "e", "ss"], image: "zimages/diagraphs/ch/chess" }, // new
    { word: "check", parts: ["ch", "e", "ck"], image: "zimages/diagraphs/ch/check" }, // new
    { word: "chick", parts: ["ch", "i", "ck"], image: "zimages/diagraphs/ch/chick" }, // new
    { word: "champ", parts: ["ch", "a", "m", "p"], image: "zimages/diagraphs/ch/champ" }, // new
    { word: "chunk", parts: ["ch", "u", "n", "k"], image: "zimages/diagraphs/ch/chunk" }, // new
    
    { word: "chase", parts: ["ch", "a", "s", "e"], image: "zimages/diagraphs/ch/chase" }, // new
    { word: "chore", parts: ["ch", "or", "e"], image: "zimages/diagraphs/ch/chore" }, // new
    { word: "chime", parts: ["ch", "i", "m", "e"], image: "zimages/diagraphs/ch/chime" }, // new

    { word: "chain", parts: ["ch", "ai", "n"], image: "zimages/diagraphs/ch/chain" }, // new
    { word: "chair", parts: ["ch", "air"], image: "zimages/diagraphs/ch/chair" }, // new
    { word: "chart", parts: ["ch", "ar", "t"], image: "zimages/diagraphs/ch/chart" }, // new
    { word: "cheap", parts: ["ch", "ea", "p"], image: "zimages/diagraphs/ch/cheap" }, // new
    { word: "cheat", parts: ["ch", "ea", "t"], image: "zimages/diagraphs/ch/cheat" }, // new

    { word: "chew", parts: ["ch", "ew"], image: "zimages/diagraphs/ch/chew" }, // new
    { word: "chili", parts: ["ch", "i", "l", "i"], image: "zimages/diagraphs/ch/chili" }, // new
    { word: "churn", parts: ["ch", "ur", "n"], image: "zimages/diagraphs/ch/churn" }, // new

    { word: "bench", parts: ["b", "e", "n", "ch"], image: "zimages/diagraphs/ch/bench" }, // new
    { word: "branch", parts: ["br", "a", "n", "ch"], image: "zimages/diagraphs/ch/branch" }, // new
    { word: "catch", parts: ["c", "a", "t", "ch"], image: "zimages/diagraphs/ch/catch" }, // new
    { word: "cinch", parts: ["c", "i", "n", "ch"], image: "zimages/diagraphs/ch/cinch" }, // new
    { word: "ditch", parts: ["d", "i", "t", "ch"], image: "zimages/diagraphs/ch/ditch" }, // new
    { word: "finch", parts: ["f", "i", "n", "ch"], image: "zimages/diagraphs/ch/finch" }, // new
    { word: "hatch", parts: ["h", "a", "t", "ch"], image: "zimages/diagraphs/ch/hatch" }, // new
    { word: "latch", parts: ["l", "a", "t", "ch"], image: "zimages/diagraphs/ch/latch" }, // new
    { word: "match", parts: ["m", "a", "t", "ch"], image: "zimages/diagraphs/ch/match" }, // new
    { word: "stretch", parts: ["str", "e", "t", "ch"], image: "zimages/diagraphs/ch/stretch" } // new
  ],

  diagraphs_ng: [
    { word: "bang", parts: ["b", "a", "ng"], image: "zimages/diagraphs/ng/bang" },
    { word: "fang", parts: ["f", "a", "ng"], image: "zimages/diagraphs/ng/fang" },
    { word: "gong", parts: ["g", "o", "ng"], image: "zimages/diagraphs/ng/gong" },
    { word: "king", parts: ["k", "i", "ng"], image: "zimages/diagraphs/ng/king" },
    { word: "long", parts: ["l", "o", "ng"], image: "zimages/diagraphs/ng/long" },
    { word: "lung", parts: ["l", "u", "ng"], image: "zimages/diagraphs/ng/lung" },
    { word: "pong", parts: ["p", "o", "ng"], image: "zimages/diagraphs/ng/pong" },
    { word: "ring", parts: ["r", "i", "ng"], image: "zimages/diagraphs/ng/ring" },
    { word: "rung", parts: ["r", "u", "ng"], image: "zimages/diagraphs/ng/rung" },
    { word: "sing", parts: ["s", "i", "ng"], image: "zimages/diagraphs/ng/sing" },
    { word: "song", parts: ["s", "o", "ng"], image: "zimages/diagraphs/ng/song" },
    { word: "spring", parts: ["sp", "r", "i", "ng"], image: "zimages/diagraphs/ng/spring" },
    { word: "sting", parts: ["st", "i", "ng"], image: "zimages/diagraphs/ng/sting" },
    { word: "string", parts: ["str", "i", "ng"], image: "zimages/diagraphs/ng/string" },
    { word: "strong", parts: ["str", "o", "ng"], image: "zimages/diagraphs/ng/strong" },
    { word: "swing", parts: ["sw", "i", "ng"], image: "zimages/diagraphs/ng/swing" },
    { word: "tong", parts: ["t", "o", "ng"], image: "zimages/diagraphs/ng/tong" },
    { word: "wing", parts: ["w", "i", "ng"], image: "zimages/diagraphs/ng/wing" },

    { word: "hang", parts: ["h", "a", "ng"], image: "zimages/diagraphs/ng/hang" }, // new
    { word: "sang", parts: ["s", "a", "ng"], image: "zimages/diagraphs/ng/sang" }, // new
    { word: "sung", parts: ["s", "u", "ng"], image: "zimages/diagraphs/ng/sung" }, // new
    { word: "gang", parts: ["g", "a", "ng"], image: "zimages/diagraphs/ng/gang" }, // new

    { word: "clang", parts: ["cl", "a", "ng"], image: "zimages/diagraphs/ng/clang" }, // new
    { word: "slang", parts: ["sl", "a", "ng"], image: "zimages/diagraphs/ng/slang" }, // new
    { word: "cling", parts: ["cl", "i", "ng"], image: "zimages/diagraphs/ng/cling" }, // new
    { word: "sling", parts: ["sl", "i", "ng"], image: "zimages/diagraphs/ng/sling" }, // new
    { word: "fling", parts: ["fl", "i", "ng"], image: "zimages/diagraphs/ng/fling" }, // new
    { word: "flung", parts: ["fl", "u", "ng"], image: "zimages/diagraphs/ng/flung" }, // new

    { word: "bring", parts: ["br", "i", "ng"], image: "zimages/diagraphs/ng/bring" }, // new
    { word: "wring", parts: ["wr", "i", "ng"], image: "zimages/diagraphs/ng/wring" }, // new
    { word: "wrong", parts: ["wr", "o", "ng"], image: "zimages/diagraphs/ng/wrong" }, // new
    { word: "stung", parts: ["st", "u", "ng"], image: "zimages/diagraphs/ng/stung" }, // new
    { word: "sprung", parts: ["spr", "u", "ng"], image: "zimages/diagraphs/ng/sprung" }, // new

    { word: "thong", parts: ["th", "o", "ng"], image: "zimages/diagraphs/ng/thong" }, // new
    { word: "along", parts: ["a", "l", "o", "ng"], image: "zimages/diagraphs/ng/along" }, // new
    { word: "young", parts: ["y", "ou", "ng"], image: "zimages/diagraphs/ng/young" }, // new
    { word: "sitting", parts: ["s", "i", "tt", "i", "ng"], image: "zimages/diagraphs/ng/sitting" }, // new    
    { word: "ping", parts: ["p", "i", "ng"], image: "zimages/diagraphs/ng/ping" }, // new
    { word: "zing", parts: ["z", "i", "ng"], image: "zimages/diagraphs/ng/zing" } // new
  ],

  diagraphs_sh: [
    { word: "blush", parts: ["bl", "u", "sh"], image: "zimages/diagraphs/sh/blush" },
    { word: "cash", parts: ["c", "a", "sh"], image: "zimages/diagraphs/sh/cash" },
    { word: "ship", parts: ["sh", "i", "p"], image: "zimages/diagraphs/sh/ship" },
    { word: "shrimp", parts: ["sh", "r", "i", "m", "p"], image: "zimages/diagraphs/sh/shrimp" },
    { word: "shrug", parts: ["sh", "r", "u", "g"], image: "zimages/diagraphs/sh/shrug" },

    { word: "shock", parts: ["sh", "o", "ck"], image: "zimages/diagraphs/sh/shock" }, // new
    { word: "shook", parts: ["sh", "oo", "k"], image: "zimages/diagraphs/sh/shook" }, // new
    { word: "shoot", parts: ["sh", "oo", "t"], image: "zimages/diagraphs/sh/shoot" }, // new
    { word: "shack", parts: ["sh", "a", "ck"], image: "zimages/diagraphs/sh/shack" }, // new
    { word: "shell", parts: ["sh", "e", "ll"], image: "zimages/diagraphs/sh/shell" }, // new
    { word: "shelf", parts: ["sh", "e", "l", "f"], image: "zimages/diagraphs/sh/shelf" }, // new
    { word: "shrub", parts: ["sh", "r", "u", "b"], image: "zimages/diagraphs/sh/shrub" }, // new

    { word: "shade", parts: ["sh", "a", "d", "e"], image: "zimages/diagraphs/sh/shade" }, // new
    { word: "shake", parts: ["sh", "a", "k", "e"], image: "zimages/diagraphs/sh/shake" }, // new
    { word: "shine", parts: ["sh", "i", "n", "e"], image: "zimages/diagraphs/sh/shine" }, // new
    { word: "shrine", parts: ["sh", "r", "i", "n", "e"], image: "zimages/diagraphs/sh/shrine" }, // new

    { word: "sharp", parts: ["sh", "ar", "p"], image: "zimages/diagraphs/sh/sharp" }, // new
    { word: "sheep", parts: ["sh", "ee", "p"], image: "zimages/diagraphs/sh/sheep" }, // new
    { word: "sheet", parts: ["sh", "ee", "t"], image: "zimages/diagraphs/sh/sheet" }, // new
    { word: "shirt", parts: ["sh", "ir", "t"], image: "zimages/diagraphs/sh/shirt" }, // new
    { word: "shore", parts: ["sh", "or", "e"], image: "zimages/diagraphs/sh/shore" }, // new
    { word: "short", parts: ["sh", "or", "t"], image: "zimages/diagraphs/sh/short" }, // new
    { word: "shout", parts: ["sh", "ou", "t"], image: "zimages/diagraphs/sh/shout" }, // new

    { word: "shrink", parts: ["sh", "r", "i", "n", "k"], image: "zimages/diagraphs/sh/shrink" }, // new
    { word: "shrill", parts: ["sh", "r", "i", "ll"], image: "zimages/diagraphs/sh/shrill" }, // new
    { word: "shuffle", parts: ["sh", "u", "ff", "l", "e"], image: "zimages/diagraphs/sh/shuffle" }, // new

    { word: "shower", parts: ["sh", "ow", "er"], image: "zimages/diagraphs/sh/shower" }, // new
    { word: "shimmer", parts: ["sh", "i", "mm", "er"], image: "zimages/diagraphs/sh/shimmer" }, // new
    { word: "shiver", parts: ["sh", "i", "v", "er"], image: "zimages/diagraphs/sh/shiver" } // new
  ],

  diagraphs_th: [
    { word: "bath", parts: ["b", "a", "th"], image: "zimages/diagraphs/th/bath" },
    { word: "earth", parts: ["ear", "th"], image: "zimages/diagraphs/th/earth" },
    { word: "moth", parts: ["m", "o", "th"], image: "zimages/diagraphs/th/moth" },
    { word: "sloth", parts: ["sl", "o", "th"], image: "zimages/diagraphs/th/sloth" },
    { word: "thick", parts: ["th", "i", "ck"], image: "zimages/diagraphs/th/thick" },
    { word: "thief", parts: ["th", "ie", "f"], image: "zimages/diagraphs/th/thief" },
    { word: "think", parts: ["th", "i", "n", "k"], image: "zimages/diagraphs/th/think" },
    { word: "thorn", parts: ["th", "or", "n"], image: "zimages/diagraphs/th/thorn" },
    { word: "three", parts: ["th", "r", "ee"], image: "zimages/diagraphs/th/three" },
    { word: "thumb", parts: ["th", "u", "m", "b"], image: "zimages/diagraphs/th/thumb" },
    { word: "tooth", parts: ["t", "oo", "th"], image: "zimages/diagraphs/th/tooth" },

    { word: "thank", parts: ["th", "a", "n", "k"], image: "zimages/diagraphs/th/thank" }, // new
    { word: "thin", parts: ["th", "i", "n"], image: "zimages/diagraphs/th/thin" }, // new
    { word: "thing", parts: ["th", "i", "ng"], image: "zimages/diagraphs/th/thing" }, // new
    { word: "then", parts: ["th", "e", "n"], image: "zimages/diagraphs/th/then" }, // new
    { word: "them", parts: ["th", "e", "m"], image: "zimages/diagraphs/th/them" }, // new
    { word: "thirst", parts: ["th", "ir", "s", "t"], image: "zimages/diagraphs/th/thirst" }, // new

    { word: "throb", parts: ["th", "r", "o", "b"], image: "zimages/diagraphs/th/throb" }, // new
    { word: "thud", parts: ["th", "u", "d"], image: "zimages/diagraphs/th/thud" }, // new
    { word: "thug", parts: ["th", "u", "g"], image: "zimages/diagraphs/th/thug" }, // new
    { word: "thumbs", parts: ["th", "u", "m", "b", "s"], image: "zimages/diagraphs/th/thumbs" }, // new
    { word: "thump", parts: ["th", "u", "m", "p"], image: "zimages/diagraphs/th/thump" }, // new
    { word: "thunder", parts: ["th", "u", "n", "d", "er"], image: "zimages/diagraphs/th/thunder" }, // new

    { word: "thatch", parts: ["th", "a", "t", "ch"], image: "zimages/diagraphs/th/thatch" }, // new
    { word: "thatch", parts: ["th", "a", "t", "ch"], image: "zimages/diagraphs/th/thatch" }, // new
    { word: "thaw", parts: ["th", "aw"], image: "zimages/diagraphs/th/thaw" }, // new
    { word: "thrice", parts: ["th", "r", "i", "c", "e"], image: "zimages/diagraphs/th/thrice" }, // new

    { word: "there", parts: ["th", "ere"], image: "zimages/diagraphs/th/there" }, // new
    { word: "these", parts: ["th", "e", "s", "e"], image: "zimages/diagraphs/th/these" }, // new
    { word: "they", parts: ["th", "ey"], image: "zimages/diagraphs/th/they" }, // new

    { word: "thrice", parts: ["th", "r", "i", "c", "e"], image: "zimages/diagraphs/th/thrice" }, // new
    { word: "throw", parts: ["th", "r", "ow"], image: "zimages/diagraphs/th/throw" }, // new
    { word: "thinker", parts: ["th", "i", "n", "k", "er"], image: "zimages/diagraphs/th/thinker" }, // new

    { word: "throne", parts: ["th", "r", "o", "n", "e"], image: "zimages/diagraphs/th/throne" }, // new
    { word: "throat", parts: ["th", "r", "oa", "t"], image: "zimages/diagraphs/th/throat" }, // new
    { word: "thrive", parts: ["th", "r", "i", "v", "e"], image: "zimages/diagraphs/th/thrive" } // new
  ]
};







/* =========================================================================== */
/* ⭐⭐⭐⭐⭐ PHONICS ENGINE — COPY AND PASTE THIS PART START⭐⭐⭐⭐⭐ */
/* =========================================================================== */

/* ===================================================== */
/* 🔗 GET SET FROM MAIN MENU */
/* ===================================================== */

const urlParams = new URLSearchParams(window.location.search)
/* one set ("?set=diagraphs_ch") or a mix ("?set=diagraphs_ch,longvowels_a") */
const selectedSets = (urlParams.get("set") || "controlled_or")
  .split(",")
  .map(s => s.trim())
  .filter(s => wordSets[s])

/* join the chosen sets, skipping any repeated words */
let words = []
const seenWords = new Set()

selectedSets.forEach(setName=>{
  wordSets[setName].forEach(w=>{
    if(!seenWords.has(w.word)){
      seenWords.add(w.word)
      words.push(w)
    }
  })
})

if(words.length === 0) words = wordSets.controlled_or

let currentIndex = 0
let selectedLetters = []
let currentWord = null

/* ===================================================== */
/* 🧠 BOARD LOCK SYSTEM */
/* ===================================================== */

let isBoardLocked = false

/* ===================================================== */
/* 📦 DOM ELEMENTS */
/* ===================================================== */

const imageEl = document.getElementById("image")
const lettersEl = document.getElementById("letters")
const blendBtn = document.getElementById("blendBtn")

/* HEADER */

const shuffleBtn = document.getElementById("shuffleBtn")
const prevWordBtn = document.getElementById("prevWordBtn")
const nextWordBtn = document.getElementById("nextWordBtn")
const mainMenuBtn = document.getElementById("mainMenuBtn")

/* ===================================================== */
/* 🖼 IMAGE LOADER */
/* ===================================================== */

function loadImage(basePath){

  const placeholder = "zimages/zplaceholder.png"
  imageEl.src = placeholder

  const formats = [".png",".jpg",".jpeg"]
  let loaded = false

  formats.forEach(ext=>{
    const img = new Image()

    img.onload = ()=>{
      if(!loaded){
        loaded = true
        imageEl.src = basePath + ext
      }
    }

    img.src = basePath + ext
  })
}

/* ===================================================== */
/* 🔤 LOAD WORD */
/* ===================================================== */

function loadWord(wordObj){

  if(isBoardLocked) return

  currentWord = wordObj

  lettersEl.innerHTML = ""
  selectedLetters = []

  /* IMAGE */
  loadImage(wordObj.image)

  /* LETTERS */
  wordObj.parts.forEach((part,index)=>{

    const btn = document.createElement("button")
    btn.className = "letter-btn"
    btn.innerText = part

    btn.onclick = ()=>selectLetter(btn,index)

    lettersEl.appendChild(btn)

  })

  blendBtn.disabled = true
  blendBtn.classList.remove("ready")

}

/* ===================================================== */
/* 🔤 SELECT LETTER */
/* ===================================================== */

function selectLetter(btn,index){

  if(isBoardLocked) return
  if(btn.classList.contains("selected")) return

  btn.classList.add("selected")
  selectedLetters.push(index)

  if(selectedLetters.length === currentWord.parts.length){

    blendBtn.disabled = false
    blendBtn.classList.add("ready")

  }
}

/* ===================================================== */
/* 🔊 BLEND */
/* ===================================================== */

blendBtn.onclick = ()=>{

  if(isBoardLocked || gameOver) return

  blendBtn.classList.remove("ready")
  blendBtn.disabled = true

  document.querySelectorAll(".letter-btn").forEach(btn=>{
    btn.classList.remove("selected")
    btn.classList.add("blended")
  })

  /* 🔒 LOCK WORD AFTER SUCCESS */
  isBoardLocked = true

  /* 🎮 UNLOCK GAME */
  setTimeout(()=>{
    unlockGame()
  },800)

}

/* ===================================================== */
/* 🟩 HEADER BUTTONS */
/* ===================================================== */

shuffleBtn.onclick = ()=>{

  if(isBoardLocked) return

  currentIndex = Math.floor(Math.random()*words.length)
  loadWord(words[currentIndex])

}

prevWordBtn.onclick = ()=>{

  if(isBoardLocked) return

  currentIndex--
  if(currentIndex < 0) currentIndex = words.length - 1

  loadWord(words[currentIndex])

}

nextWordBtn.onclick = ()=>{

  if(isBoardLocked) return

  currentIndex++
  if(currentIndex >= words.length) currentIndex = 0

  loadWord(words[currentIndex])

}

mainMenuBtn.onclick = ()=>{
  window.location.href = "index.html"
}

/* =========================================================================== */
/* ⭐⭐⭐⭐⭐ PHONICS ENGINE — COPY AND PASTE THIS PART END⭐⭐⭐⭐⭐ */
/* =========================================================================== */
















/* ===================================================== */
/* 🎮 GAME ENGINE START — PICK A CREATURE + SECRET NUMBER */
/* ===================================================== */


/* ===================== */
/* 🎯 SETTINGS */
/* ===================== */

const animals = ["🐬","🐠","🐙","🐡","🦑"]

const animalNames = {
  "🐬":"dolphin",
  "🐠":"fish",
  "🐙":"octopus",
  "🐡":"blowfish",
  "🦑":"squid"
}

const ROWS = 4          // 7 columns x 4 rows = 28 creatures
const RARE_COUNT = 3    // ✨ how many creatures hide the number 7
const RARE_NUMBER = 7


/* ===================== */
/* 🧠 GAME STATE */
/* ===================== */

let currentTeam = "dog"   // dog starts first
let gameUnlocked = false  // locked until the word is blended
let isBusy = false        // true while net + roll animation is playing
let gameOver = false

let dogScore = 0
let tigerScore = 0

const NO_RARE_TURNS = 4   // 🚫 no rare 7 in the first 4 picks of a game
let picksThisGame = 0


/* ===================== */
/* 📦 DOM */
/* ===================== */

const dogTeamEl = document.getElementById("dogTeam")
const tigerTeamEl = document.getElementById("tigerTeam")
const dogScoreEl = document.getElementById("dogScore")
const tigerScoreEl = document.getElementById("tigerScore")

const gameArea = document.getElementById("game-area")
const forestGrid = document.getElementById("forestGrid")
const animalLayer = document.getElementById("animalLayer")

const rollBox = document.getElementById("rollBox")
const reelStrip = document.getElementById("reelStrip")

const endGameBtn = document.getElementById("endGameBtn")
const instructionText = document.getElementById("instructionText")


/* ===================================================== */
/* 📝 INSTRUCTION */
/* ===================================================== */

function aliveCreatures(){
  return Array.from(animalLayer.querySelectorAll(".animal"))
    .filter(a => a.dataset.caught !== "true")
}

function raresLeft(){
  return aliveCreatures().filter(a => a.dataset.secret === String(RARE_NUMBER)).length
}

function teamLabel(){
  return currentTeam === "dog" ? "🐶 Dog Team" : "🐯 Tiger Team"
}

function updateInstruction(){

  instructionText.innerHTML =
    `<div class="instr-line">Each creature hides a secret number 1–6. ${RARE_COUNT} rare ones hide a 7! ✨ (Rare 7s left: ${raresLeft()})</div>`
}


/* ===================================================== */
/* 🔒 LOCK / 🔓 UNLOCK FIELD */
/* ===================================================== */

function lockField(){
  gameUnlocked = false
  gameArea.classList.add("locked")
}

function unlockGame(){
  if(gameOver) return
  gameUnlocked = true
  gameArea.classList.remove("locked")
  updateInstruction()
}


/* ===================================================== */
/* 🔁 TEAM UI */
/* ===================================================== */

function updateTeamUI(){

  dogTeamEl.classList.toggle("active", currentTeam === "dog")
  tigerTeamEl.classList.toggle("active", currentTeam === "tiger")

}

function switchTurn(){
  currentTeam = currentTeam === "dog" ? "tiger" : "dog"
  updateTeamUI()
}


/* ===================================================== */
/* 🧮 SCORE BOXES */
/* ===================================================== */

function renderScores(){
  dogScoreEl.textContent = dogScore
  tigerScoreEl.textContent = tigerScore
}

function addScore(points){

  const teamEl  = currentTeam === "dog" ? dogTeamEl  : tigerTeamEl
  const scoreEl = currentTeam === "dog" ? dogScoreEl : tigerScoreEl

  if(currentTeam === "dog") dogScore += points
  else tigerScore += points

  renderScores()

  /* 💥 bump the number */
  scoreEl.classList.remove("bump")
  void scoreEl.offsetWidth
  scoreEl.classList.add("bump")

  /* ⬆️ floating +N */
  const float = document.createElement("div")
  float.className = "score-float"
  float.textContent = "+" + points
  teamEl.appendChild(float)
  setTimeout(()=>float.remove(), 1400)
}


/* ===================================================== */
/* 🌲 GENERATE GRID + SECRET NUMBERS */
/* ===================================================== */

function generateGrid(){

  forestGrid.innerHTML = ""
  const tiles = []

  const cols = getComputedStyle(forestGrid)
                .gridTemplateColumns
                .split(" ").length

  const totalTiles = cols * ROWS

  /* ✨ choose which creatures hide the rare 7 */
  const rareIndexes = new Set()
  while(rareIndexes.size < Math.min(RARE_COUNT, totalTiles)){
    rareIndexes.add(Math.floor(Math.random()*totalTiles))
  }

  for(let i = 0; i < totalTiles; i++){

    const tile = document.createElement("div")
    tile.className = "tile"
    tile.dataset.animal = animals[Math.floor(Math.random()*animals.length)]
    tile.dataset.secret = rareIndexes.has(i)
      ? RARE_NUMBER
      : 1 + Math.floor(Math.random()*6)

    forestGrid.appendChild(tile)
    tiles.push(tile)
  }

  spawnAnimals(tiles)
}


/* ===================================================== */
/* 🐾 SPAWN FLOATING ANIMALS */
/* ===================================================== */

function spawnAnimals(tiles){

  animalLayer.innerHTML = ""

  tiles.forEach(tile=>{

    const el = document.createElement("div")
    el.className = "animal normal"
    el.innerText = tile.dataset.animal
    el.dataset.animal = tile.dataset.animal
    el.dataset.secret = tile.dataset.secret
    el.dataset.caught = "false"
    el.dataset.bubbly = Math.random() < 0.4 ? "true" : "false"   // 🫧 random bubble breathers

    /* 🎯 RANDOM POSITION */
    el.style.left = (15 + Math.random()*70) + "%"
    el.style.top  = (15 + Math.random()*70) + "%"

    /* 👆 TAP TO PICK */
    el.addEventListener("click", ()=>pickCreature(el))

    animalLayer.appendChild(el)
  })

  startAnimalMovement()
  startBubbleTrails()
}


/* ===================================================== */
/* 🐾 SEA CREATURE MOVEMENT — DIRECTION + IDLE + FACING */
/* ===================================================== */

let animalMoveLoop = null

function startAnimalMovement(){

  if(animalMoveLoop) clearInterval(animalMoveLoop)

  /* 🧠 INIT STATE */
  document.querySelectorAll(".animal").forEach(el=>{
    if(!el.dataset.vx){
      el.dataset.vx = (Math.random()*4 - 2)
      el.dataset.vy = (Math.random()*4 - 2)
      el.dataset.moving = "true"
      el.dataset.pauseTimer = 0
    }
  })

  animalMoveLoop = setInterval(()=>{

    document.querySelectorAll(".animal").forEach(el=>{

      if(el.dataset.caught === "true") return

      const animal = el.dataset.animal

      let left = parseFloat(el.style.left)
      let top  = parseFloat(el.style.top)

      let vx = parseFloat(el.dataset.vx)
      let vy = parseFloat(el.dataset.vy)

      let moving = el.dataset.moving === "true"
      let pauseTimer = parseInt(el.dataset.pauseTimer)

      /* ⏸️ START / STOP SYSTEM (FLOAT + DRIFT) */

      if(moving && Math.random() < 0.02){
        el.dataset.moving = "false"
        el.dataset.pauseTimer = 10 + Math.random()*20
        return
      }

      if(!moving){
        pauseTimer--
        el.dataset.pauseTimer = pauseTimer

        if(pauseTimer <= 0){
          el.dataset.moving = "true"
        }

        return
      }

      /* 🐬 DOLPHIN — FAST CURVED SWIM */

      if(animal === "🐬"){

        vx += Math.sin(Date.now()/400) * 0.6
        vy += Math.cos(Date.now()/500) * 0.6

        vx = Math.max(-5, Math.min(5, vx))
        vy = Math.max(-5, Math.min(5, vy))

        el.style.transition = "0.25s ease-in-out"

        const angle = Math.atan2(vy, vx) * (180/Math.PI)
        el.style.transform = `rotate(${angle}deg)`
      }

      /* 🐠 FISH — SMOOTH SWIM */

      else if(animal === "🐠"){

        vx += (Math.random()*0.6 - 0.3)
        vy += (Math.random()*0.6 - 0.3)

        vx = Math.max(-3, Math.min(3, vx))
        vy = Math.max(-3, Math.min(3, vy))

        el.style.transition = "0.4s ease-in-out"

        el.style.transform = vx < 0
          ? "scaleX(-1)"
          : "scaleX(1)"
      }

      /* 🐙 OCTOPUS — FLOAT + SINK */

      else if(animal === "🐙"){

        vx += (Math.random()*0.5 - 0.25)
        vy += Math.sin(Date.now()/600) * 0.4

        vx = Math.max(-2.5, Math.min(2.5, vx))
        vy = Math.max(-2.5, Math.min(2.5, vy))

        el.style.transition = "0.5s ease-in-out"

        const pulse = Math.sin(Date.now()/200) * 0.1

        el.style.transform = `scale(${1 + pulse})`
      }

      /* 🐡 BLOWFISH — BOUNCY DRIFT */

      else if(animal === "🐡"){

        vx += (Math.random()*0.4 - 0.2)
        vy += (Math.random()*0.4 - 0.2)

        vx = Math.max(-2, Math.min(2, vx))
        vy = Math.max(-2, Math.min(2, vy))

        el.style.transition = "0.5s ease-in-out"

        const puff = 1 + Math.abs(Math.sin(Date.now()/300))*0.2

        el.style.transform = `scale(${puff})`
      }

      /* 🦑 SQUID — QUICK DASH */

      else if(animal === "🦑"){

        if(Math.random() < 0.05){
          vx += (Math.random()*6 - 3)
          vy += (Math.random()*6 - 3)
        }

        vx *= 0.95
        vy *= 0.95

        vx = Math.max(-5, Math.min(5, vx))
        vy = Math.max(-5, Math.min(5, vy))

        el.style.transition = "0.2s linear"

        const angle = Math.atan2(vy, vx) * (180/Math.PI)
        el.style.transform = `rotate(${angle}deg)`
      }

      /* 🧠 APPLY MOVEMENT */

      left += vx
      top  += vy

      const MIN = 8
      const MAX = 92

      if(left < MIN || left > MAX){
        vx *= -1
        left = Math.max(MIN, Math.min(MAX, left))
      }

      if(top < MIN || top > MAX){
        vy *= -1
        top = Math.max(MIN, Math.min(MAX, top))
      }

      el.dataset.vx = vx
      el.dataset.vy = vy

      el.style.left = left + "%"
      el.style.top  = top + "%"

    })

  }, 120)
}


/* ===================================================== */
/* 🫧 AMBIENT BUBBLES — some creatures breathe bubbles as they swim */
/* ===================================================== */

let bubbleLoop = null

function startBubbleTrails(){

  if(bubbleLoop) clearInterval(bubbleLoop)

  bubbleLoop = setInterval(()=>{

    const swimmers = aliveCreatures().filter(a => a.dataset.bubbly === "true")
    if(swimmers.length === 0) return

    /* 1–2 random creatures puff bubbles each tick */
    const puffs = 1 + Math.floor(Math.random()*2)

    for(let p = 0; p < puffs; p++){

      const el = swimmers[Math.floor(Math.random()*swimmers.length)]
      const n = 2 + Math.floor(Math.random()*3)

      for(let i = 0; i < n; i++){
        setTimeout(()=>{
          if(!el.isConnected || el.dataset.caught === "true") return

          const b = document.createElement("div")
          b.className = "swim-bubble"
          const size = 9 + Math.random()*12
          b.style.width = size + "px"
          b.style.height = size + "px"
          b.style.left = `calc(${el.style.left} + ${(Math.random()*30 - 15)}px)`
          b.style.top  = `calc(${el.style.top} - 30px)`
          b.style.setProperty("--rise", -(60 + Math.random()*80) + "px")
          b.style.setProperty("--wob", (Math.random()*24 - 12) + "px")
          const dur = 1.6 + Math.random()*1.2
          b.style.animationDuration = dur + "s"

          animalLayer.appendChild(b)
          setTimeout(()=>b.remove(), dur*1000)
        }, i * 180)
      }
    }

  }, 700)
}

/* ===================================================== */
/* 😱 PANIC SYSTEM — OTHER CREATURES DODGE THE NET */
/* ===================================================== */

function panicAnimals(netX, netY){

  const parentRect = animalLayer.getBoundingClientRect()

  const netPercentX = (netX - parentRect.left) / parentRect.width * 100
  const netPercentY = (netY - parentRect.top) / parentRect.height * 100

  document.querySelectorAll(".animal").forEach(el=>{

    if(el.dataset.caught === "true") return

    let left = parseFloat(el.style.left)
    let top  = parseFloat(el.style.top)

    const dx = left - netPercentX
    const dy = top  - netPercentY

    if(Math.hypot(dx, dy) < 20){

      left += dx * 0.6
      top  += dy * 0.6

      left = Math.max(10, Math.min(90, left))
      top  = Math.max(10, Math.min(90, top))

      el.style.transition = "0.35s ease-out"
      el.style.left = left + "%"
      el.style.top  = top + "%"
    }

  })
}


/* ===================================================== */
/* 👆 STEP 1 — PLAYER PICKS A CREATURE */
/* ===================================================== */

function pickCreature(el){

  if(!gameUnlocked || isBusy || gameOver) return
  if(el.dataset.caught === "true") return

  isBusy = true
  gameArea.classList.add("busy")

  /* 🚫 too early for a rare 7 — secretly move the 7 to another creature */
  if(picksThisGame < NO_RARE_TURNS && el.dataset.secret === String(RARE_NUMBER)){
    moveRareAway(el)
  }
  picksThisGame++

  /* 🛑 this one stops swimming — the others keep swimming */
  el.dataset.caught = "true"
  el.style.transition = "none"
  el.style.transform = ""
  el.classList.remove("normal")
  el.classList.add("picked", currentTeam === "dog" ? "picked-dog" : "picked-tiger")

  updateInstruction(`${teamLabel()} picked a ${animalNames[el.dataset.animal]}! 🕸️ Here comes the net...`)

  /* short glow on the spot, then fly to the centre */
  setTimeout(()=>{
    const r = el.getBoundingClientRect()
    panicAnimals(r.left + r.width/2, r.top + r.height/2)
    showStage(el)
  }, 450)
}


/* keeps the total of 3 rare 7s — just hides this one somewhere else */
function moveRareAway(el){
  const others = aliveCreatures().filter(a =>
    a !== el && a.dataset.secret !== String(RARE_NUMBER))
  if(others.length === 0) return
  const swap = others[Math.floor(Math.random()*others.length)]
  swap.dataset.secret = RARE_NUMBER
  el.dataset.secret = 1 + Math.floor(Math.random()*6)
}


/* ===================================================== */
/* 🕸️ STEP 2 — BIG SPOTLIGHT: CREATURE + NET IN THE CENTRE */
/* ===================================================== */

function showStage(original){

  const stage = document.createElement("div")
  stage.className = "catch-stage"

  const wrap = document.createElement("div")
  wrap.className = "big-wrap"

  const big = document.createElement("div")
  big.className = "big-creature " + (currentTeam === "dog" ? "picked-dog" : "picked-tiger")
  big.textContent = original.dataset.animal

  wrap.appendChild(big)
  stage.appendChild(wrap)
  gameArea.appendChild(stage)

  /* 📍 magnify it right where it is (nudged in only if it would spill off the field) */
  const field = stage.getBoundingClientRect()
  const from  = original.getBoundingClientRect()
  const bigR  = big.getBoundingClientRect()

  const halfW = bigR.width / 2
  const halfH = bigR.height / 2

  let x = (from.left + from.width/2) - field.left
  let y = (from.top + from.height/2) - field.top
  x = Math.max(halfW, Math.min(field.width  - halfW, x))
  y = Math.max(halfH, Math.min(field.height - halfH, y))

  wrap.style.left = x + "px"
  wrap.style.top  = y + "px"

  /* small → big, on the spot */
  const fx = (from.left + from.width/2) - field.left - x
  const fy = (from.top + from.height/2) - field.top - y
  const s  = Math.max(0.2, from.width / bigR.width)

  original.style.visibility = "hidden"

  wrap.animate([
    { transform:`translate(${fx}px, ${fy}px) scale(${s})` },
    { transform:"translate(0,0) scale(1)" }
  ], { duration:600, easing:"cubic-bezier(.2,.9,.3,1.25)", fill:"both" })

  requestAnimationFrame(()=>stage.classList.add("show"))

  /* 🕸️ net drops → hovers → spins + snaps — right over the creature */
  setTimeout(()=>{

    const net = document.createElement("div")
    net.className = "big-net"
    net.textContent = "🕸️"
    wrap.appendChild(net)

    setTimeout(()=> net.classList.add("snap"), 1300)

    /* 🫧 after the net snaps shut — 3 spurts of big bubbles */
    setTimeout(()=> bigBubbleBurst(big), 2550)
    setTimeout(()=> bigBubbleBurst(big), 2930)
    setTimeout(()=> bigBubbleBurst(big), 3310)

    /* 🎰 then the number box rolls */
    setTimeout(()=> startRoll(original, stage, big), 4050)

  }, 650)
}


/* ===================================================== */
/* 🎰 STEP 3 — SLOT-MACHINE ROLL IN THE DIGIT BOX */
/* ===================================================== */

const REEL_SPINS = 26

function digitHTML(n){
  return `<div class="reel-digit d${n}">${n}</div>`
}

function randomDigit(){
  /* occasionally flash a 7 to build suspense */
  return Math.random() < 0.08 ? RARE_NUMBER : 1 + Math.floor(Math.random()*6)
}

/* builds the strip and returns the index of the "near miss" digit
   (the one it pretends to stop on before sliding to the real one) */
function buildReel(finalNumber){

  const nums = []
  let prev = 0

  for(let i = 0; i < REEL_SPINS; i++){
    let n
    do{ n = randomDigit() }while(n === prev)
    nums.push(n)
    prev = n
  }

  /* 😮 near miss — sometimes teases a 7! */
  let near
  if(finalNumber !== RARE_NUMBER && Math.random() < 0.35){
    near = RARE_NUMBER
  }else{
    do{ near = 1 + Math.floor(Math.random()*6) }while(near === finalNumber)
  }

  if(nums[nums.length-1] === near){
    nums[nums.length-1] = near === 1 ? 2 : near - 1
  }

  nums.push(near)
  nums.push(finalNumber)

  /* one extra digit below, so the bounce never shows empty space */
  let after
  do{ after = 1 + Math.floor(Math.random()*6) }while(after === finalNumber)
  nums.push(after)

  reelStrip.innerHTML = nums.map(digitHTML).join("")

  return REEL_SPINS   // index of the near-miss digit
}

function startRoll(original, stage, big){

  const secret = parseInt(original.dataset.secret)

  updateInstruction("🎰 What is the secret number...?")

  reelStrip.getAnimations().forEach(a=>a.cancel())
  rollBox.className = "roll-box rolling fast " + currentTeam

  const nearIdx = buildReel(secret)
  const h = reelStrip.firstElementChild.offsetHeight
  const y = i => `translateY(${-i*h}px)`

  /* 🎵 rhythm: fast fast fast → slow down → stops on a number...
         → hesitates → SLIDES to the real number */
  const anim = reelStrip.animate([
    { transform:y(0),                    easing:"linear",                       offset:0     },
    { transform:y(nearIdx - 10),         easing:"cubic-bezier(.2,.6,.35,1)",    offset:0.299 },
    { transform:y(nearIdx),              easing:"ease-in-out",                  offset:0.636 },
    { transform:y(nearIdx + 0.22),       easing:"ease-in-out",                  offset:0.738 },
    { transform:y(nearIdx + 0.04),       easing:"cubic-bezier(.34,1.5,.64,1)",  offset:0.804 },
    { transform:y(nearIdx + 1),                                                 offset:1     }
  ], { duration:4600, fill:"forwards" })

  /* stop the motion blur once it starts slowing down */
  setTimeout(()=> rollBox.classList.remove("fast"), 1500)
  /* extra tension during the near-miss */
  setTimeout(()=> rollBox.classList.add("tease"), 2900)

  anim.finished.then(()=> landRoll(original, stage, big, secret))
}


/* ===================================================== */
/* 🎉 BURST EFFECTS */
/* ===================================================== */

const dotColors = ["#ff2e2e","#ff8c00","#ffd400","#22cc44","#1e90ff","#9b30ff","#ff2fa8"]

/* colourful dots (or emojis) bursting out of an element */
function burstFrom(el, count, emojis){

  const r = el.getBoundingClientRect()
  const cx = r.left + r.width/2
  const cy = r.top + r.height/2

  for(let i = 0; i < count; i++){

    const d = document.createElement("div")
    d.className = "burst-dot" + (emojis ? " emoji" : "")

    if(emojis){
      d.textContent = emojis[Math.floor(Math.random()*emojis.length)]
      d.style.fontSize = (28 + Math.random()*34) + "px"
    }else{
      const size = 10 + Math.random()*16
      d.style.width = size + "px"
      d.style.height = size + "px"
      d.style.background = dotColors[Math.floor(Math.random()*dotColors.length)]
    }

    d.style.left = cx + "px"
    d.style.top  = cy + "px"

    const angle = Math.random() * Math.PI * 2
    const dist  = 90 + Math.random() * (emojis ? 380 : 210)
    d.style.setProperty("--x", Math.cos(angle)*dist + "px")
    d.style.setProperty("--y", Math.sin(angle)*dist + "px")
    d.style.setProperty("--r", (Math.random()*720 - 360) + "deg")

    const dur = 0.7 + Math.random()*0.7
    d.style.animationDuration = dur + "s"

    document.body.appendChild(d)
    setTimeout(()=>d.remove(), dur*1000 + 50)
  }
}

/* 🫧 bubble fireworks — sparkly blue bubbles popping out close around the box */
const bubbleBlues = ["79,195,255","47,168,255","0,224,255","130,220,255","30,144,255","120,180,255"]

function fireworksFrom(el, bursts){

  const r = el.getBoundingClientRect()
  const cx = r.left + r.width/2
  const cy = r.top + r.height/2

  for(let b = 0; b < bursts; b++){
    setTimeout(()=>{

      /* each burst pops close around the box */
      const ox = cx + (b === 0 ? 0 : (Math.random()*2 - 1) * 70)
      const oy = cy + (b === 0 ? 0 : (Math.random()*2 - 1) * 50)

      const flash = document.createElement("div")
      flash.className = "fw-flash"
      flash.style.left = ox + "px"
      flash.style.top  = oy + "px"
      document.body.appendChild(flash)
      setTimeout(()=>flash.remove(), 500)

      const count = 70

      for(let i = 0; i < count; i++){
        const d = document.createElement("div")
        d.className = "fw-spark"
        d.style.setProperty("--b", bubbleBlues[Math.floor(Math.random()*bubbleBlues.length)])
        const size = 10 + Math.random()*20
        d.style.width = size + "px"
        d.style.height = size + "px"
        d.style.left = ox + "px"
        d.style.top  = oy + "px"

        const angle = (i / count) * Math.PI * 2 + Math.random()*0.3
        const dist  = 80 + Math.random()*130
        d.style.setProperty("--x", Math.cos(angle)*dist + "px")
        d.style.setProperty("--y", Math.sin(angle)*dist + "px")

        const dur = 1.0 + Math.random()*0.6
        d.style.animationDuration = `${dur}s, ${0.2 + Math.random()*0.2}s`
        document.body.appendChild(d)
        setTimeout(()=>d.remove(), dur*1000 + 50)
      }

    }, b * 380)
  }
}

/* 🫧 BIG bubbles bursting out of the caught creature */
function bigBubbleBurst(el){

  const r = el.getBoundingClientRect()
  const cx = r.left + r.width/2
  const cy = r.top + r.height/2
  const count = 22

  for(let i = 0; i < count; i++){
    const b = document.createElement("div")
    b.className = "big-bubble"
    const size = 40 + Math.random()*70
    b.style.width = size + "px"
    b.style.height = size + "px"
    b.style.left = cx + "px"
    b.style.top  = cy + "px"

    const angle = (i / count) * Math.PI * 2 + Math.random()*0.4
    const dist  = 120 + Math.random()*200
    b.style.setProperty("--x", Math.cos(angle)*dist + "px")
    b.style.setProperty("--y", Math.sin(angle)*dist - 40 + "px")

    const dur = 0.9 + Math.random()*0.5
    b.style.animationDuration = dur + "s"
    b.style.animationDelay = (Math.random()*0.15) + "s"
    document.body.appendChild(b)
    setTimeout(()=>b.remove(), (dur + 0.2)*1000)
  }

  /* 💥 white pop flash */
  const flash = document.createElement("div")
  flash.className = "fw-flash"
  flash.style.left = cx + "px"
  flash.style.top  = cy + "px"
  document.body.appendChild(flash)
  setTimeout(()=>flash.remove(), 500)
}


/* ✨ spinning golden rays behind the digit box */
function showRays(el, ms){
  const r = el.getBoundingClientRect()
  const rays = document.createElement("div")
  rays.className = "rays"
  rays.style.left = (r.left + r.width/2) + "px"
  rays.style.top  = (r.top + r.height/2) + "px"
  rays.style.animationDuration = `3s, ${ms}ms`
  document.body.appendChild(rays)
  setTimeout(()=>rays.remove(), ms)
}


/* ===================================================== */
/* 🎯 STEP 4 — LAND, CELEBRATE, ADD POINTS */
/* ===================================================== */

function landRoll(original, stage, big, secret){

  const isRare = secret === RARE_NUMBER
  const team = teamLabel()

  rollBox.classList.remove("rolling","fast","tease")
  rollBox.classList.add("landed")

  /* 🎊 dots burst out of the box */
  fireworksFrom(rollBox, isRare ? 5 : 3)

  if(isRare){

    /* 🌟 RARE 7 — the big show */
    rollBox.classList.add("rare")
    big.classList.add("gold")

    const banner = document.createElement("div")
    banner.className = "rare-banner"
    banner.textContent = "🌟 RARE 7! 🌟"
    stage.appendChild(banner)

    showRays(rollBox, 4800)
    burstFrom(rollBox, 26, ["⭐","🌟","✨","💛"])
    setTimeout(()=> burstFrom(rollBox, 26, ["⭐","🌟","✨","💛"]), 700)
    setTimeout(()=> fireworksFrom(rollBox, 3), 1900)

    startConfetti()
    setTimeout(stopConfetti, 3800)

    updateInstruction(`🌟 WOW! A RARE 7! +7 points for ${team}! 🌟`)

  }else{

    updateInstruction(`🎉 +${secret} point${secret === 1 ? "" : "s"} for ${team}!`)

  }

  /* ➕ add score, then the creature + net disappear */
  setTimeout(()=>{

    addScore(secret)

    stage.classList.add("gone")
    setTimeout(()=>{
      stage.remove()
      original.remove()
      updateInstruction(isRare
        ? `🌟 RARE 7! +7 points for ${team}! 🌟`
        : `🎉 +${secret} point${secret === 1 ? "" : "s"} for ${team}!`)
    }, 500)

  }, isRare ? 3200 : 1300)

  /* ➡️ next turn */
  setTimeout(endTurn, isRare ? 5400 : 2700)
}


/* ===================================================== */
/* 🔁 END OF TURN */
/* ===================================================== */

function resetRollBox(){
  reelStrip.getAnimations().forEach(a=>a.cancel())
  rollBox.className = "roll-box idle"
  reelStrip.innerHTML = `<div class="reel-digit q">?</div>`
}

function endTurn(){

  resetRollBox()

  isBusy = false
  gameArea.classList.remove("busy")

  if(aliveCreatures().length === 0){
    finishGame()
    return
  }

  returnToPhonics()
}

function returnToPhonics(){

  switchTurn()
  lockField()

  isBoardLocked = false

  /* ➡️ auto-advance to the next word
     (moderator can still use ← Previous / Next → / Shuffle) */
  currentIndex++
  if(currentIndex >= words.length) currentIndex = 0

  loadWord(words[currentIndex])
  updateInstruction()
}


/* ===================================================== */
/* 🛑 END GAME BUTTON (MODERATOR) */
/* ===================================================== */

endGameBtn.onclick = ()=>{

  if(isBusy || gameOver) return

  if(!confirm("End the game now and see who wins?")) return

  finishGame()
}


/* ===================================================== */
/* 🏆 FINISH GAME */
/* ===================================================== */

function finishGame(){

  gameOver = true
  gameUnlocked = false
  /* keep the field bright so the winner popup isn't faded */
  gameArea.classList.remove("locked")
  gameArea.classList.add("busy")

  let result
  if(dogScore > tigerScore) result = "dog"
  else if(tigerScore > dogScore) result = "tiger"
  else result = "tie"

  showWinnerPopup(result)
}


/* ===================================================== */
/* 🏆 WINNER / TIE POPUP */
/* ===================================================== */

function showWinnerPopup(result){

  const popup = document.createElement("div")
  popup.className = "result-popup"

  const box = document.createElement("div")
  box.className = "result-box"

  const emoji = document.createElement("div")
  emoji.className = "result-emoji winner"

  const text = document.createElement("div")
  text.className = "result-text"

  const scoreLine = document.createElement("div")
  scoreLine.className = "result-score"
  scoreLine.innerHTML =
    `<span class="dog">🐶 ${dogScore}</span> — <span class="tiger">${tigerScore} 🐯</span>`

  if(result === "dog"){
    box.classList.add("dog-win")
    emoji.innerText = "🐶"
    text.innerText = "Dog Team WINS!!! 🎉"
    updateInstruction("🏆 Dog Team wins!")
  }
  else if(result === "tiger"){
    box.classList.add("tiger-win")
    emoji.innerText = "🐯"
    text.innerText = "Tiger Team WINS!!! 🎉"
    updateInstruction("🏆 Tiger Team wins!")
  }
  else{
    box.classList.add("tie-win")
    emoji.innerText = "🐶🤝🐯"
    emoji.classList.add("tie")
    text.innerText = "It's a TIE!!! 🎉 Both teams win!"
    updateInstruction("🤝 It's a tie!")
  }

  box.appendChild(emoji)
  box.appendChild(text)
  box.appendChild(scoreLine)
  popup.appendChild(box)

  gameArea.appendChild(popup)

  startConfetti()

  setTimeout(()=>{
    popup.remove()
    stopConfetti()
    newGame()
  }, 6000)
}


/* ===================================================== */
/* 🎉 ULTRA CONFETTI SYSTEM */
/* ===================================================== */

let confettiInterval = null
let burstLoop = null
let confettiActive = false

const confettiColors = ["#ff3b3b","#2f80ff","#ffd84d","#3ecf5b","#ff8c00","#ff66cc"]

function startConfetti(){

  if(confettiActive) return
  stopConfetti()
  confettiActive = true

  /* 🌧 RAIN */
  confettiInterval = setInterval(()=>{

    for(let i=0;i<30;i++){

      const c = document.createElement("div")
      c.className = "confetti"

      c.style.background = confettiColors[Math.floor(Math.random()*confettiColors.length)]

      c.style.left = Math.random()*100 + "vw"
      c.style.top = "-20px"

      const size = Math.random()*12 + 6
      c.style.width = size + "px"
      c.style.height = size + "px"

      const duration = Math.random()*0.8 + 0.8
      c.style.animationDuration = duration + "s"

      const drift = (Math.random() - 0.5) * 200
      c.style.setProperty("--drift", drift + "px")

      document.body.appendChild(c)

      setTimeout(()=>c.remove(), duration*1000)
    }

  }, 90)

  /* 💥 BURST LOOP */
  burstLoop = setInterval(burstConfetti, 600)
}

function stopConfetti(){

  clearInterval(confettiInterval)
  clearInterval(burstLoop)

  confettiInterval = null
  burstLoop = null
  confettiActive = false
}

function burstConfetti(){

  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2

  for(let i=0;i<80;i++){

    const c = document.createElement("div")
    c.className = "confetti burst"

    c.style.background = confettiColors[Math.floor(Math.random()*confettiColors.length)]

    c.style.left = centerX + "px"
    c.style.top = centerY + "px"

    const size = Math.random()*14 + 6
    c.style.width = size + "px"
    c.style.height = size + "px"

    const angle = Math.random() * Math.PI * 2
    const distance = Math.random()*400 + 200

    c.style.setProperty("--x", Math.cos(angle) * distance + "px")
    c.style.setProperty("--y", Math.sin(angle) * distance + "px")

    const duration = Math.random()*0.6 + 0.8
    c.style.animationDuration = duration + "s"

    document.body.appendChild(c)

    setTimeout(()=>c.remove(), duration*1000)
  }
}


/* ===================================================== */
/* 🔄 NEW GAME */
/* ===================================================== */

function newGame(){

  gameOver = false
  isBusy = false
  gameArea.classList.remove("busy")

  dogScore = 0
  tigerScore = 0
  picksThisGame = 0
  renderScores()

  currentTeam = "dog"
  updateTeamUI()

  resetRollBox()
  generateGrid()
  lockField()

  isBoardLocked = false
  loadWord(words[currentIndex])

  updateInstruction()
}


/* ===================================================== */
/* 🚀 INIT */
/* ===================================================== */

newGame()

/* ===================================================== */
/* 🎮 GAME ENGINE END */
/* ===================================================== */
