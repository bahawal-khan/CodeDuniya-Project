import type { LearningPath } from "../types";

const javascriptPath: LearningPath = {
  "id": "path-javascript",
  "slug": "complete-javascript",
  "title": "Complete JavaScript",
  "titleUrdu": "Complete JavaScript",
  "description": "Master the language that powers the web — from variables to async APIs.",
  "descriptionUr": "Woh zaban seekho jo web ko chalati hai — variables se le kar async APIs tak.",
  "theme": "truckblue",
  "icon": "Braces",
  "level": "Beginner → Intermediate",
  "estWeeks": 8,
  "modules": [
    {
      "id": "js-m1",
      "slug": "js-basics",
      "title": "JavaScript Basics",
      "titleUrdu": "JavaScript Ki Bunyaad",
      "description": "Variables, data types and the fundamentals of the language of the web.",
      "topics": [
        "let/const/var",
        "Data types",
        "Type coercion",
        "Console & debugging"
      ],
      "lessons": [
        {
          "id": "js-1-1",
          "slug": "let-const-var-farq",
          "title": "let, const & var — What's the Difference?",
          "titleUrdu": "let, const Aur var Ka Farq",
          "estMinutes": 15,
          "summaryEn": "JavaScript has three ways to declare a variable. Here's when — and why — to use each one.",
          "summaryUr": "JavaScript mein variable declare karne ke teen tareeqe hain. Har ek kab aur kyun use karna hai, yahan seekho.",
          "explanationEn": "var is the old way JavaScript declared variables — it's function-scoped and can cause confusing bugs because it 'leaks' outside blocks like if statements. let and const, introduced in ES6, are block-scoped, meaning they only exist inside the { } they were created in. The modern rule of thumb: use const by default, and only switch to let when you know the value needs to change later. Avoid var in new code entirely.",
          "explanationUr": "var JavaScript ka purana tareeqa hai variable declare karne ka — yeh function-scoped hota hai aur confusing bugs paida kar sakta hai kyunke yeh if jaisi blocks se bahar 'leak' ho jata hai. let aur const, jo ES6 mein aaye, block-scoped hain, matlab yeh sirf usi { } ke andar exist karte hain jahan banaye gaye. Modern rule yeh hai: default mein const use karo, aur sirf tab let par jao jab pata ho ke value baad mein badalni hai. Naye code mein var se bilkul bacho.",
          "codeExample": {
            "language": "javascript",
            "code": "const siteName = \"CodeDuniya\"; // kabhi nahi badlega\nlet streak = 5;                 // roz badal sakta hai\n\nstreak = streak + 1;\nconsole.log(siteName, \"par streak hai:\", streak);\n\nif (true) {\n  let message = \"Andar wali value\";\n  console.log(message); // ✅ chalega\n}\n// console.log(message); ❌ yahan error aayega, message block ke bahar nahi hai"
          },
          "lineByLine": [
            {
              "line": "const siteName = \"CodeDuniya\";",
              "explanationEn": "A value that will never change, so const is the right, safer choice.",
              "explanationUr": "Ek value jo kabhi nahi badlegi, is liye const hi sahi aur mehfooz intekhaab hai."
            },
            {
              "line": "let streak = 5;",
              "explanationEn": "We expect this number to change (it's a daily streak count), so let fits here.",
              "explanationUr": "Hum expect karte hain ke yeh number badlega (daily streak count hai), is liye yahan let sahi hai."
            },
            {
              "line": "streak = streak + 1;",
              "explanationEn": "Reassigns streak to one more than its current value — only possible because it was declared with let.",
              "explanationUr": "streak ko uski current value se ek zyada set karta hai — yeh sirf is liye mumkin hai kyunke yeh let se banaya gaya tha."
            },
            {
              "line": "let message = \"Andar wali value\";",
              "explanationEn": "This variable only exists inside the if block's curly braces.",
              "explanationUr": "Yeh variable sirf if block ke curly braces ke andar exist karta hai."
            }
          ],
          "whyItWorksEn": "JavaScript engines create a new 'scope' every time they see a { }. Variables declared with let/const inside that scope are invisible outside it — this is called block scoping, and it's what prevents a variable in one part of your app from accidentally clashing with a same-named variable somewhere else.",
          "whyItWorksUr": "JavaScript engine har { } dekhte hi ek naya 'scope' banata hai. Us scope ke andar let/const se banaye gaye variables uske bahar nazar nahi aate — isay block scoping kehte hain, aur yehi cheez app ke ek hisse ke variable ko doosri jagah ke hum-naam variable se takraane se bachati hai.",
          "tryItYourself": "Declare a const called PI with value 3.14159, and a let called radius with value 5. Calculate and print the area of the circle (PI * radius * radius).",
          "tryItYourselfUr": "PI naam ka const banao jiski value 3.14159 ho, aur radius naam ka let banao jiski value 5 ho. Circle ka area calculate karke print karo (PI * radius * radius).",
          "analogyTitle": "Locked Dabba vs Khulnay Wala Dabba",
          "analogyEn": "const is like a sealed steel trunk you locked before a wedding — nobody's opening that again. let is like your everyday lunch dabba — you refill it every single day without a second thought.",
          "analogyUr": "const us seel-band trunk ki tarah hai jo shaadi se pehle lock kar diya jata hai — dobara koi nahi kholta. let roz wale lunch dabbay ki tarah hai — jise tum har roz bina soche bhar dete ho.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Unit Converter",
        "titleUrdu": "Unit Converter",
        "description": "Convert between km/miles and Celsius/Fahrenheit using variables and math.",
        "requirements": [
          "At least two conversion types",
          "Take user input via prompt()",
          "Print formatted results"
        ]
      }
    },
    {
      "id": "js-m2",
      "slug": "operators-control-flow",
      "title": "Operators & Control Flow",
      "titleUrdu": "Operators Aur Control Flow",
      "description": "Comparisons, logic and branching your code's behaviour.",
      "topics": [
        "Comparison & logical operators",
        "if/else",
        "switch",
        "Ternary operator"
      ],
      "lessons": [
        {
          "id": "js-2-1",
          "slug": "comparison-operators",
          "title": "Comparison & Logical Operators",
          "titleUrdu": "Comparison Aur Logical Operators",
          "estMinutes": 20,
          "summaryEn": "Compare values and combine conditions with ===, !==, &&, || and !.",
          "summaryUr": "Values compare karo aur conditions ko ===, !==, &&, || aur ! se combine karo.",
          "explanationEn": "Programs decide using comparisons. Prefer === over == to avoid type coercion surprises. && needs all true; || needs one true; ! flips true/false.",
          "explanationUr": "Programs comparisons se decide karte hain. == ki jagah === prefer karo taake type coercion surprises na hon. && sab true maangta hai; || ek true; ! true/false ulat deta hai.",
          "codeExample": {
            "language": "javascript",
            "code": "const age = 18;\nconsole.log(age >= 18);      // true\nconsole.log(age === \"18\");   // false (strict)\nconsole.log(age == \"18\");    // true  (loose — avoid)\n\nconst hasId = true;\nif (age >= 18 && hasId) {\n  console.log(\"Entry allowed\");\n}"
          },
          "lineByLine": [
            {
              "line": "age === \"18\"",
              "explanationEn": "Strict equality — value and type both must match.",
              "explanationUr": "Strict equality — value aur type dono match hone chahiye."
            },
            {
              "line": "age >= 18 && hasId",
              "explanationEn": "Both conditions must be true for the block to run.",
              "explanationUr": "Block chalane ke liye dono conditions true honi chahiye."
            }
          ],
          "whyItWorksEn": "Strict operators prevent bugs like 0 == false. Logical operators short-circuit for efficiency.",
          "whyItWorksUr": "Strict operators 0 == false jaisi bugs rok te hain. Logical operators efficiency ke liye short-circuit karte hain.",
          "tryItYourself": "Write a condition that is true only if score is between 60 and 100 inclusive.",
          "tryItYourselfUr": "Aisi condition likho jo tab true ho jab score 60 se 100 (inclusive) ke darmiyan ho.",
          "analogyTitle": "Gate Ke Rules",
          "analogyEn": "=== is checking ID photo matches exactly. && is needing both ticket and ID. || is accepting either cash or card.",
          "analogyUr": "=== ID photo exact match check karna hai. && ticket aur ID dono chahiye. || cash ya card — koi ek.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Grade Calculator",
        "titleUrdu": "Grade Calculator",
        "description": "Convert a numeric score into a letter grade using if/else or switch.",
        "requirements": [
          "Handle A-F grading scale",
          "Validate input range 0-100",
          "Clear console output"
        ]
      }
    },
    {
      "id": "js-m3",
      "slug": "functions-scope",
      "title": "Functions & Scope",
      "titleUrdu": "Functions Aur Scope",
      "description": "Declare, call, and understand where your variables 'live'.",
      "topics": [
        "Function declarations vs expressions",
        "Arrow functions",
        "Scope & closures intro"
      ],
      "lessons": [
        {
          "id": "js-3-1",
          "slug": "arrow-functions",
          "title": "Arrow Functions Explained",
          "titleUrdu": "Arrow Functions Ki Wazahat",
          "estMinutes": 20,
          "summaryEn": "Arrow functions are a shorter way to write functions in modern JavaScript.",
          "summaryUr": "Arrow functions modern JavaScript mein functions likhne ka short tareeqa hain.",
          "explanationEn": "Instead of function keyword, you can write () => {}. They are great for short callbacks. For single expressions you can omit return and braces. Be careful: they don't have their own 'this'.",
          "explanationUr": "function keyword ki jagah () => {} likh sakte ho. Short callbacks ke liye best hain. Single expression pe return aur braces hata sakte ho. Careful: inka apna 'this' nahi hota.",
          "codeExample": {
            "language": "javascript",
            "code": "// Traditional\nfunction add(a, b) {\n  return a + b;\n}\n\n// Arrow\nconst addArrow = (a, b) => a + b;\n\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6]"
          },
          "lineByLine": [
            {
              "line": "const addArrow = (a, b) => a + b",
              "explanationEn": "Arrow function that takes a and b and returns their sum in one line.",
              "explanationUr": "Arrow function jo a aur b le kar unka sum ek line mein return karta hai."
            },
            {
              "line": "numbers.map(n => n * 2)",
              "explanationEn": "map runs the arrow function on every item and builds a new array.",
              "explanationUr": "map har item pe arrow function chala kar nayi array banata hai."
            }
          ],
          "whyItWorksEn": "Arrow functions are syntactic sugar that also lexically bind 'this'. They shine in array methods and React event handlers.",
          "whyItWorksUr": "Arrow functions syntactic sugar hain jo 'this' ko lexically bind karti hain. Array methods aur React event handlers mein bohot kaam aati hain.",
          "tryItYourself": "Use map with an arrow function to convert an array of names to uppercase.",
          "tryItYourselfUr": "map + arrow function se names ki array ko uppercase mein convert karo.",
          "analogyTitle": "Short Form Mein Order Dena",
          "analogyEn": "A normal function is a full sentence. An arrow function is the short text-message version of the same order.",
          "analogyUr": "Normal function poora jumla hai. Arrow function usi order ka short text-message version hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Tip Calculator",
        "titleUrdu": "Tip Calculator",
        "description": "A set of functions that calculate tip amount and total bill split between friends.",
        "requirements": [
          "calculateTip() function",
          "splitBill() function",
          "Use only function parameters, no globals"
        ]
      }
    },
    {
      "id": "js-m4",
      "slug": "arrays-objects",
      "title": "Arrays & Objects",
      "titleUrdu": "Arrays Aur Objects",
      "description": "JavaScript's two most important data structures, and the methods that make them powerful.",
      "topics": [
        "Array methods (map/filter/reduce)",
        "Objects & properties",
        "Nested data",
        "Destructuring"
      ],
      "lessons": [
        {
          "id": "js-4-1",
          "slug": "array-methods",
          "title": "map, filter & reduce",
          "titleUrdu": "map, filter Aur reduce",
          "estMinutes": 30,
          "summaryEn": "These three methods let you transform, filter and summarize arrays without writing classic loops.",
          "summaryUr": "Yeh teen methods arrays ko transform, filter aur summarize karte hain — classic loops ke baghair.",
          "explanationEn": "map transforms every item. filter keeps only items that pass a test. reduce combines all items into a single value (sum, object, etc.). Together they replace most for-loops in modern JS.",
          "explanationUr": "map har item transform karta hai. filter sirf woh items rakhta hai jo test pass karein. reduce saari items ko ek value (sum, object) mein combine karta hai. Modern JS mein yeh mostly for-loops ki jagah le lete hain.",
          "codeExample": {
            "language": "javascript",
            "code": "const marks = [40, 75, 90, 55, 88];\n\nconst passed = marks.filter(m => m >= 60);\nconst bonus = marks.map(m => m + 5);\nconst total = marks.reduce((sum, m) => sum + m, 0);\n\nconsole.log(\"Passed:\", passed);\nconsole.log(\"With bonus:\", bonus);\nconsole.log(\"Total:\", total);"
          },
          "lineByLine": [
            {
              "line": "marks.filter(m => m >= 60)",
              "explanationEn": "Keeps only marks that are 60 or higher.",
              "explanationUr": "Sirf 60 ya us se zyada marks rakhta hai."
            },
            {
              "line": "marks.map(m => m + 5)",
              "explanationEn": "Creates a new array where each mark is increased by 5.",
              "explanationUr": "Nayi array banata hai jisme har mark 5 se badh jata hai."
            },
            {
              "line": "marks.reduce((sum, m) => sum + m, 0)",
              "explanationEn": "Starts at 0 and adds each mark, ending with the total.",
              "explanationUr": "0 se start karke har mark jodta hai, aakhir mein total milta hai."
            }
          ],
          "whyItWorksEn": "These methods are chainable and declarative — you describe what you want, not the step-by-step loop. They return new arrays/values and don't mutate the original.",
          "whyItWorksUr": "Yeh methods chainable aur declarative hain — aap batate ho kya chahiye, step-by-step loop nahi. Nayi arrays/values return karti hain, original mutate nahi hota.",
          "tryItYourself": "From an array of ages, use filter + map to get only adults' ages multiplied by 12 (in months).",
          "tryItYourselfUr": "Ages ki array se filter + map se sirf adults ki ages nikaalo aur unhe 12 se multiply karke months mein do.",
          "analogyTitle": "Factory Ki Assembly Line",
          "analogyEn": "map is a machine that changes every item. filter is a quality gate that drops rejects. reduce is the packing station that combines everything into one box.",
          "analogyUr": "map woh machine hai jo har item change karti hai. filter quality gate hai jo reject items hata deta hai. reduce packing station hai jo sab kuch ek box mein combine karti hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Student Records Manager",
        "titleUrdu": "Student Records Manager",
        "description": "Manage an array of student objects — filter passers, sort by score, compute average.",
        "requirements": [
          "Use map/filter/reduce",
          "Sort by score",
          "Print formatted summary"
        ]
      }
    },
    {
      "id": "js-m5",
      "slug": "dom-manipulation-js",
      "title": "DOM Manipulation",
      "titleUrdu": "DOM Manipulation",
      "description": "Make static pages interactive by selecting and changing elements live.",
      "topics": [
        "querySelector",
        "Event listeners",
        "Changing styles & content",
        "Creating elements dynamically"
      ],
      "lessons": [
        {
          "id": "js-5-1",
          "slug": "event-listeners",
          "title": "Responding to Clicks with Event Listeners",
          "titleUrdu": "Event Listeners Se Clicks Par React Karna",
          "estMinutes": 25,
          "summaryEn": "Event listeners run your code when the user clicks, types, or submits.",
          "summaryUr": "Event listeners user ke click, type ya submit pe aapka code chalati hain.",
          "explanationEn": "The browser fires events for user actions. addEventListener attaches a function to an event on an element. Inside the handler you update the page — this is the heart of interactive JS.",
          "explanationUr": "Browser user actions pe events fire karta hai. addEventListener element pe event se function jodta hai. Handler ke andar page update hota hai — yahi interactive JS ki jaan hai.",
          "codeExample": {
            "language": "javascript",
            "code": "const btn = document.querySelector(\"#btn\");\nconst out = document.querySelector(\"#out\");\n\nbtn.addEventListener(\"click\", () => {\n  out.textContent = \"Button dab gaya! \" + new Date().toLocaleTimeString();\n});\n\ndocument.querySelector(\"#name\").addEventListener(\"input\", (e) => {\n  out.textContent = \"Hello, \" + e.target.value;\n});"
          },
          "lineByLine": [
            {
              "line": "addEventListener(\"click\", () => {...})",
              "explanationEn": "Runs the function every time the element is clicked.",
              "explanationUr": "Har click pe function chalta hai."
            },
            {
              "line": "e.target.value",
              "explanationEn": "The current value of the input that fired the event.",
              "explanationUr": "Us input ki current value jisne event fire ki."
            }
          ],
          "whyItWorksEn": "The browser maintains an event queue and calls your listeners when matching events occur. You don't poll — you react.",
          "whyItWorksUr": "Browser event queue rakhta hai aur matching events pe aapke listeners call karta hai. Poll nahi — react karte ho.",
          "tryItYourself": "Add a button that toggles a paragraph's visibility on each click.",
          "tryItYourselfUr": "Aisa button banao jo har click pe paragraph hide/show kare.",
          "analogyTitle": "Doorbell",
          "analogyEn": "An event listener is a doorbell: you don't stand watching the door — when someone presses, your function runs.",
          "analogyUr": "Event listener doorbell hai: darwaza dekhte nahi khade rehte — jab koi press kare, function chal jata hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Color Palette Generator",
        "titleUrdu": "Color Palette Generator",
        "description": "Generate and display random color palettes on button click, with copy-to-clipboard.",
        "requirements": [
          "Generate random hex colors",
          "Display as clickable swatches",
          "Copy hex code on click"
        ]
      }
    },
    {
      "id": "js-m6",
      "slug": "async-js",
      "title": "Async JavaScript",
      "titleUrdu": "Async JavaScript",
      "description": "Promises, async/await and fetching real data from APIs.",
      "topics": [
        "Callbacks",
        "Promises",
        "async/await",
        "fetch API"
      ],
      "lessons": [
        {
          "id": "js-6-1",
          "slug": "fetch-api",
          "title": "Fetching Data with fetch()",
          "titleUrdu": "fetch() Se Data Lena",
          "estMinutes": 30,
          "summaryEn": "fetch() loads data from APIs asynchronously and returns promises.",
          "summaryUr": "fetch() APIs se data asynchronously load karta hai aur promises return karta hai.",
          "explanationEn": "Modern web apps load data without refreshing the page. fetch(url) returns a Promise. You await the response, then await response.json(). Always handle errors with try/catch.",
          "explanationUr": "Modern apps page refresh kiye baghair data load karti hain. fetch(url) Promise return karta hai. Pehle response await karo, phir response.json(). Errors try/catch se handle karo.",
          "codeExample": {
            "language": "javascript",
            "code": "async function loadUser() {\n  try {\n    const res = await fetch(\"https://api.github.com/users/octocat\");\n    if (!res.ok) throw new Error(\"Network error\");\n    const data = await res.json();\n    console.log(data.login, data.public_repos);\n  } catch (err) {\n    console.error(\"Fail:\", err.message);\n  }\n}\nloadUser();"
          },
          "lineByLine": [
            {
              "line": "await fetch(url)",
              "explanationEn": "Waits for the HTTP response without blocking the whole UI thread design-wise.",
              "explanationUr": "HTTP response ka wait — UI design ke hisaab se block kiye baghair."
            },
            {
              "line": "await res.json()",
              "explanationEn": "Parses the body as JSON into a JS object.",
              "explanationUr": "Body ko JSON parse karke JS object banata hai."
            }
          ],
          "whyItWorksEn": "fetch is promise-based and non-blocking. async/await is syntax that makes promise chains read like sequential code.",
          "whyItWorksUr": "fetch promise-based aur non-blocking hai. async/await syntax hai jo promise chains ko sequential code jaisa padhne layak banati hai.",
          "tryItYourself": "Fetch a public JSON API and display one field inside a DOM element.",
          "tryItYourselfUr": "Public JSON API fetch karke ek field DOM element mein dikhao.",
          "analogyTitle": "Online Order Tracking",
          "analogyEn": "fetch is placing an online order and waiting for the delivery notification — your code continues life until the parcel (data) arrives.",
          "analogyUr": "fetch online order place karke delivery notification ka wait hai — data aane tak aapka code aur kaam kar sakta hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Quote of the Day App",
        "titleUrdu": "Quote of the Day App",
        "description": "Fetch a random quote from a public API on page load and on button click.",
        "requirements": [
          "Use fetch + async/await",
          "Loading state while fetching",
          "Handle fetch errors gracefully"
        ]
      }
    },
    {
      "id": "js-m7",
      "slug": "modern-js",
      "title": "ES6+ Modern JavaScript",
      "titleUrdu": "ES6+ Modern JavaScript",
      "description": "Spread/rest, template literals, modules and the features that define modern JS.",
      "topics": [
        "Template literals",
        "Spread & rest",
        "Modules (import/export)",
        "Optional chaining"
      ],
      "lessons": [
        {
          "id": "js-7-1",
          "slug": "template-literals",
          "title": "Template Literals",
          "titleUrdu": "Template Literals",
          "estMinutes": 15,
          "summaryEn": "Template literals make string building clean with backticks and ${}.",
          "summaryUr": "Template literals backticks aur ${} se string banana clean banate hain.",
          "explanationEn": "Old style used + to join strings and variables — messy. Template literals use backticks (`) and ${expression} to embed values directly. Multi-line strings become easy.",
          "explanationUr": "Purane style mein + se strings join hoti thin — messy. Template literals backticks (`) aur ${expression} se values seedha embed karti hain. Multi-line strings asaan ho jati hain.",
          "codeExample": {
            "language": "javascript",
            "code": "const name = \"Ali\";\nconst marks = 92;\n\nconst msg = `Shabash ${name}!\nTumhare marks: ${marks}\nGrade: ${marks >= 90 ? \"A+\" : \"A\"}`;\n\nconsole.log(msg);"
          },
          "lineByLine": [
            {
              "line": "`Shabash ${name}!`",
              "explanationEn": "Backticks start a template; ${name} inserts the variable.",
              "explanationUr": "Backticks template start; ${name} variable insert karta hai."
            },
            {
              "line": "${marks >= 90 ? \"A+\" : \"A\"}",
              "explanationEn": "Any expression can go inside ${}.",
              "explanationUr": "${} ke andar koi bhi expression aa sakti hai."
            }
          ],
          "whyItWorksEn": "The engine evaluates expressions inside ${} and concatenates the parts into one string at runtime.",
          "whyItWorksUr": "Engine ${} ke andar expressions evaluate karke parts ko runtime pe ek string mein jodta hai.",
          "tryItYourself": "Build a multi-line bio string from name, city and hobby variables.",
          "tryItYourselfUr": "name, city aur hobby variables se multi-line bio string banao.",
          "analogyTitle": "Form Letter",
          "analogyEn": "Template literals are form letters with blanks — you fill names and details automatically.",
          "analogyUr": "Template literals un form letters jaisi hain jisme blanks hote hain — naam aur details automatic bhar jati hain.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Refactor Challenge",
        "titleUrdu": "Refactor Challenge",
        "description": "Take an earlier project and refactor it using modern ES6+ syntax throughout.",
        "requirements": [
          "Replace string concatenation with template literals",
          "Use spread/rest where useful",
          "Split code into modules"
        ]
      }
    }
  ],
  "dailyTasks": [
    {
      "id": "daily-js-1",
      "title": "Rewrite a loop using array methods",
      "titleUrdu": "Ek loop ko array methods se dobara likho",
      "description": "Take an old for-loop and rewrite it with map/filter/reduce."
    }
  ]
};

export default javascriptPath;
