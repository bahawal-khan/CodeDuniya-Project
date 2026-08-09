// CodeYaar's "brain" — smart mock responses. Swap the getCodeYaarReply body
// for a real LLM API call later; the interface stays the same.

export interface YaarContext {
  pathTitle?: string;
  lessonTitle?: string;
  streak?: number;
}

const GREETINGS = [
  "Yar kya haal hai? Aaj kya scene hai coding ka? 😄",
  "Wapas aa gaya tu! Bata, kahan se shuru karein aaj?",
];

const SALAM_REPLY = "Walaikum Assalam!";

const MOTIVATION = [
  "Dekh, har bada developer kabhi tumhari jagah tha — bas rukna nahi hai. Chal, ek aur step aage!",
  "Shabash! Yeh wala part clear ho gaya lagta hai. Ab agla try kar, main yahan hoon agar atak jao.",
  "Coding seekhna bilkul cricket practice jaisa hai — pehli baar bat seedhi nahi lagti, par net practice se lagne lagti hai. Tu bhi lagta reh.",
  "Ek cheez yaad rakh: error aana matlab tu try kar raha hai. Jo try hi nahi karta usko error bhi nahi aata!",
];

const STREAK_NUDGE = [
  "3 din se nahi aya tu. Kahan gayab tha bhai? Wapas aa ja, streak tootne wali hai! 🔥",
  "Chal ek chhota sa 10-minute lesson kar lete hain, streak bhi bach jayegi aur guilt bhi khatam.",
];

function pick(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Word-boundary matching, not naive substring — plain .includes() falsely
// matched the "hi" greeting keyword inside "nahi" (Roman Urdu for "no/not"),
// misclassifying almost any negative sentence as a greeting.
function containsAny(text: string, words: string[]) {
  const lower = text.toLowerCase();
  return words.some((w) => new RegExp(`\\b${escapeRegex(w)}\\b`, "i").test(lower));
}

export function getCodeYaarReply(userMessage: string, ctx: YaarContext = {}): string {
  const msg = userMessage.trim();

  if (msg.length === 0) {
    return pick(GREETINGS);
  }

  // Salam gets a plain, simple reply — not the full greeting pool.
  if (containsAny(msg, ["salam", "assalam"])) {
    return SALAM_REPLY;
  }

  // Other greetings
  if (containsAny(msg, ["hi", "hello", "hey", "kya haal"])) {
    return pick(GREETINGS) + (ctx.lessonTitle ? `\n\nWaise tu abhi "${ctx.lessonTitle}" wala lesson kar raha tha — wapas usi pe chalein?` : "");
  }

  // Error / stuck detection
  if (containsAny(msg, ["error", "ghalat", "kaam nahi", "nahi chal", "stuck", "atak", "samajh nahi", "confuse"])) {
    return "Tension na le, sab ke sath hota hai. Exact error message aur jis line par aa raha hai, copy-paste kar de — main dekh kar batata hoon kya masla hai. 🔑";
  }

  // Motivation / feeling down
  if (containsAny(msg, ["mushkil", "difficult", "hard", "give up", "chhod", "bore", "mann nahi", "demotivate", "tired", "thak"])) {
    return "Yar sun — " + pick(MOTIVATION);
  }

  // Streak related
  if (containsAny(msg, ["streak", "kal nahi aya", "busy tha", "miss ho gaya"])) {
    return pick(STREAK_NUDGE);
  }

  // What to learn next
  if (containsAny(msg, ["next", "agay", "aage", "kya seekhu", "kya karu", "suggest", "recommend"])) {
    if (ctx.lessonTitle) {
      return `Mera suggestion: pehle "${ctx.lessonTitle}" wala lesson mukammal karo, "Try it yourself" wala task zaroor khud se karo — sirf parh kar mat aage barho. Uske baad module ka mini project try karna, wahi asal seekh hai.`;
    }
    return "Sab se pehle ek learning path choose kar lo jo tumhare goal se match kare. Agar job ke liye web dev seekhna hai to Full Stack path se shuru karo, agar AI mein interest hai to seedha AI & ML path try karo!";
  }

  // Asking what/who is CodeYaar
  if (containsAny(msg, ["kon ho", "who are you", "what are you", "codeyaar kya"])) {
    return "Main CodeYaar hoon — tumhara coding wala dost, jo hamesha yahan available hai. Na main tumhein judge karta hoon, na tumhari speed pe hansta hoon. Bas sath sath seekhte hain, ek ek concept karke. Chal batao, kahan se shuru karein? 😊";
  }

  // Concept explanation triggers — quick desi-analogy powered mini explanations
  if (containsAny(msg, ["loop", "for loop", "while"])) {
    return "Loop ko cricket ke over ki tarah socho — 6 balls, ek ke baad ek, har ball par tumhara alag response hota hai. Code mein bhi loop tumhari list ke har item par ek ek karke 'bowl' karta hai jab tak list khatam na ho jaye. Kis lesson mein loop atka hai, bata dena main line-by-line samjhata hoon.";
  }
  if (containsAny(msg, ["function", "funtion"])) {
    return "Function ko ami ke recipe card jaisa socho — ingredients do (arguments), steps ek dafa likho, aur jab bhi zaroorat ho dobara use karo bina dobara likhe. Yehi cheez function ko itna powerful banati hai!";
  }
  if (containsAny(msg, ["array", "list"])) {
    return "Array/List cricket team ki batting lineup jaisi hai — order matlab rakhta hai, aur har player (value) ka apna number (index) hota hai. Pehla player index 0 par hota hai, yaad rakhna!";
  }
  if (containsAny(msg, ["object", "dictionary", "dict"])) {
    return "Object bilkul student ki ID card jaisa hai — naam, roll number, department sab ek hi jagah bundle hote hain, alag alag variables mein bikharay nahi hote.";
  }
  if (containsAny(msg, ["api", "fetch", "backend se data"])) {
    return "API call restaurant mein order dene jaisi hai — tum waiter (request) ko order do, kitchen (server) taiyar karta hai, aur plate (response) tumhari table tak pohanchti hai. Kabhi kabhi kitchen busy ho to der lagti hai — isi liye loading state dikhate hain!";
  }
  if (containsAny(msg, ["if else", "if-else", "condition"])) {
    return "Condition (if/else) subah ki routine jaisi hai — agar barish ho rahi hai to chatri le lo, warna dhoop ka chashma. Code bhi condition check kar ke decide karta hai konsa rasta lena hai.";
  }
  if (containsAny(msg, ["variable"])) {
    return "Variable ek labelled dabba jaisa hai — label dekh kar pata chal jata hai andar kya hai, khol'ne ki zaroorat nahi. let wala dabba refill ho sakta hai, const wala hamesha ke liye seal.";
  }

  // Thanks / bye
  if (containsAny(msg, ["thanks", "shukriya", "thank you", "shukr"])) {
    return "Koi baat nahi yar, isi liye to hoon! Jab bhi atko, seedha yahan aa jana. Chal ab jaake practice kar! 💪";
  }
  if (containsAny(msg, ["bye", "khuda hafiz", "allah hafiz", "chalta hoon"])) {
    return "Theek hai yar, apna khayal rakhna. Kal wapas aana — streak yaad rakhna! Allah Hafiz 👋";
  }

  // Default friendly fallback, still in-persona
  const lessonNote = ctx.lessonTitle
    ? `Waise tum abhi "${ctx.lessonTitle}" wale lesson par ho — usi ke baare mein poochna chahte ho?`
    : "Kisi bhi lesson, error, ya concept ke baare mein pooch sakte ho.";

  return `Hmm samajh gaya. ${lessonNote} 😄`;
}

export const codeYaarStarters = [
  "Yeh concept samajh nahi aaya",
  "Mera code error de raha hai",
  "Aaj kya seekhna chahiye?",
  "Mujhe motivate karo yar",
];
