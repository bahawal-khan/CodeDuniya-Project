import type { LearningPath } from "../types";

const fullStackPath: LearningPath = {
  "id": "path-fullstack",
  "slug": "full-stack-web-development",
  "title": "Full Stack Web Development",
  "titleUrdu": "Full Stack Web Development (Zero Se Hero Tak)",
  "description": "Go from zero to a job-ready full stack developer — HTML to deployed apps.",
  "descriptionUr": "Zero se le kar ek job-ready full stack developer tak — HTML se le kar deployed apps tak.",
  "theme": "rani",
  "icon": "Layers",
  "level": "Beginner → Advanced",
  "estWeeks": 16,
  "modules": [
    {
      "id": "fs-m1",
      "slug": "web-fundamentals",
      "title": "Web Fundamentals",
      "titleUrdu": "Web Fundamentals",
      "description": "Start from zero — how the web works, and your first HTML & CSS pages.",
      "topics": [
        "How the web works",
        "HTML structure",
        "Basic CSS styling",
        "Semantic tags"
      ],
      "lessons": [
        {
          "id": "fs-1-1",
          "slug": "html-building-blocks",
          "title": "HTML Building Blocks",
          "titleUrdu": "HTML Ki Building Blocks",
          "estMinutes": 20,
          "summaryEn": "HTML (HyperText Markup Language) is the skeleton of every website. In this lesson you'll learn the basic tags that structure a page.",
          "summaryUr": "HTML har website ka structure banata hai. Is lesson mein hum seekhein ge woh basic tags jo kisi bhi webpage ko organize karte hain.",
          "explanationEn": "Think of a webpage like a house. HTML builds the rooms and walls — it doesn't decide the paint color (that's CSS) or the electricity (that's JavaScript). Every HTML document starts with a <!DOCTYPE html> declaration, then an <html> tag wraps everything. Inside it, <head> holds metadata (title, links to CSS) that the browser needs but doesn't show, while <body> holds everything the visitor actually sees: headings, paragraphs, images, links and more. Tags almost always come in pairs — an opening tag and a closing tag — with your content sitting in between.",
          "explanationUr": "Webpage ko ek ghar samjho. HTML us ghar ke kamre aur deewarein banata hai — paint ka color CSS decide karta hai, aur bijli (interactivity) JavaScript deti hai. Har HTML document <!DOCTYPE html> se start hota hai, phir <html> tag sab kuch ko wrap karta hai. Uske andar <head> mein woh cheezein hoti hain jo browser ko chahiye hoti hain lekin visitor ko nazar nahi aatin (jaise title, CSS links), aur <body> mein woh sab kuch hota hai jo visitor asal mein dekhta hai — headings, paragraphs, images, links waghera. Tags aksar jode mein aate hain — ek opening tag aur ek closing tag — aur inke darmiyan tumhara content hota hai.",
          "codeExample": {
            "language": "html",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Assalam-o-Alaikum, Duniya!</h1>\n    <p>Yeh mera pehla HTML page hai.</p>\n    <a href=\"https://codeduniya.dev\">CodeDuniya par jao</a>\n  </body>\n</html>"
          },
          "lineByLine": [
            {
              "line": "<!DOCTYPE html>",
              "explanationEn": "Tells the browser this is a modern HTML5 document, so it renders it correctly.",
              "explanationUr": "Browser ko batata hai ke yeh ek modern HTML5 document hai, taake sahi tarah render ho."
            },
            {
              "line": "<html lang=\"en\">",
              "explanationEn": "The root tag that wraps the whole page; lang tells screen readers and search engines the page language.",
              "explanationUr": "Yeh root tag pooray page ko wrap karta hai; lang attribute screen readers aur search engines ko page ki zaban batata hai."
            },
            {
              "line": "<title>My First Page</title>",
              "explanationEn": "Sets the text that shows up in the browser tab.",
              "explanationUr": "Yeh woh text set karta hai jo browser ke tab mein dikhta hai."
            },
            {
              "line": "<h1>Assalam-o-Alaikum, Duniya!</h1>",
              "explanationEn": "h1 is the biggest, most important heading on the page — use only one per page usually.",
              "explanationUr": "h1 page ki sab se badi aur important heading hoti hai — aksar ek page mein sirf ek hi use hoti hai."
            },
            {
              "line": "<a href=\"https://codeduniya.dev\">CodeDuniya par jao</a>",
              "explanationEn": "Creates a clickable link; href holds the destination URL.",
              "explanationUr": "Yeh ek clickable link banata hai; href attribute mein destination ka URL hota hai."
            }
          ],
          "whyItWorksEn": "Browsers read HTML top to bottom and build a tree of elements called the DOM. Because every tag is properly opened and closed, the browser knows exactly where one element ends and another begins — that's what lets it draw the page correctly on any device.",
          "whyItWorksUr": "Browser HTML ko upar se neeche parhta hai aur elements ka ek tree banata hai jise DOM kehte hain. Chunke har tag sahi tarah open aur close hota hai, browser ko pata hota hai ke ek element kahan khatam hota hai aur doosra kahan shuru — isi wajah se page har device par sahi dikhta hai.",
          "tryItYourself": "Create a new file called index.html. Add an h2 with your name, a paragraph about why you're learning to code, and a link to your favourite website. Open it in your browser by double-clicking the file!",
          "tryItYourselfUr": "index.html naam ki nayi file banao. Usmein apna naam ek h2 mein likho, ek paragraph likho ke tum code kyun seekh rahe ho, aur apni favourite website ka link add karo. File ko double-click karke browser mein khol kar dekho!",
          "analogyTitle": "Ghar Ka Naqsha (Blueprint)",
          "analogyEn": "HTML is like the blueprint of a house that a mistri (builder) follows — it marks where the walls, doors and rooms go, before anyone thinks about paint colour or furniture.",
          "analogyUr": "HTML bilkul us naqshay ki tarah hai jo mistri ghar banate waqt follow karta hai — pehle yeh decide hota hai deewarein, darwazay aur kamre kahan honge, paint ka color ya furniture baad mein aata hai.",
          "hasFullContent": true,
          "realLifeExampleEn": "Every website you've ever visited — Facebook, a news site, your school portal — has HTML underneath it. View-source on any page and you'll see the same tags you just learned, just more of them.",
          "realLifeExampleUr": "Har website jo tumne kabhi visit ki hai — Facebook, koi news site, school portal — uske neeche HTML hai. Kisi bhi page ka view-source kholo, wahi tags milenge jo abhi seekhe, bas zyada tadaad mein.",
          "commonMistakesEn": "Forgetting to close a tag (like <p> without </p>) — the browser usually recovers, but nested unclosed tags can break your whole layout. Also mixing up <a> (link) and <p> (paragraph) tags, and forgetting the quotes around attribute values like href=\"...\".",
          "commonMistakesUr": "Tag close karna bhool jana (jaise <p> bina </p> ke) — browser aksar sambhal leta hai, lekin nested unclosed tags poora layout tod sakte hain. <a> (link) aur <p> (paragraph) ko mix karna bhi aam ghalti hai, aur href=\"...\" jaisi attribute values ke around quotes bhoolna.",
          "dryRun": [
            { "stepEn": "Browser reads <!DOCTYPE html> and switches to standards mode.", "stepUr": "Browser <!DOCTYPE html> parhta hai aur standards mode mein chala jata hai." },
            { "stepEn": "It opens <html>, then <head> — reads <title> but doesn't display it in the page body.", "stepUr": "Yeh <html> kholta hai, phir <head> — <title> parhta hai lekin page body mein nahi dikhata." },
            { "stepEn": "It opens <body> and starts rendering visible elements top to bottom: h1, then p, then a.", "stepUr": "Yeh <body> kholta hai aur visible elements upar se neeche render karna shuru karta hai: h1, phir p, phir a." }
          ],
          "cheatSheetEn": "<!DOCTYPE html> = HTML5 declaration · <html lang=\"..\"> = root · <head> = metadata (not visible) · <body> = visible content · <h1>-<h6> = headings · <p> = paragraph · <a href=\"..\"> = link",
          "cheatSheetUr": "<!DOCTYPE html> = HTML5 declaration · <html lang=\"..\"> = root · <head> = metadata (nazar nahi aata) · <body> = visible content · <h1>-<h6> = headings · <p> = paragraph · <a href=\"..\"> = link",
          "topicTags": ["html.structure", "html.tags"],
          "quiz": [
            {
              "question": "What does the <head> tag contain?",
              "questionUr": "<head> tag mein kya hota hai?",
              "options": ["Visible page content", "Metadata the browser needs but doesn't display", "The page's main heading", "CSS styles only"],
              "correctIndex": 1,
              "explanation": "<head> holds metadata like <title> and CSS links — nothing inside it shows up in the page body."
            },
            {
              "question": "Which tag creates the biggest, most important heading?",
              "questionUr": "Sab se badi heading konsa tag banata hai?",
              "options": ["<h6>", "<head>", "<h1>", "<title>"],
              "correctIndex": 2,
              "explanation": "<h1> is the largest heading level — usually used once per page for the main title."
            }
          ],
          "codingChallenge": {
            "promptEn": "Build a mini bio page: an <h1> with your name, one <p> about yourself, and an <a> linking to a site you like.",
            "promptUr": "Ek mini bio page banao: apna naam <h1> mein, apne baare mein ek <p>, aur ek <a> jo apni pasandeeda site ko link kare.",
            "starterCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>My Bio</title>\n</head>\n<body>\n  <!-- add your h1, p and a here -->\n</body>\n</html>",
            "language": "html",
            "hints": [
              "Remember every opening tag needs a matching closing tag.",
              "href goes inside the opening <a> tag, in quotes: <a href=\"https://example.com\">"
            ]
          }
        },
        {
          "id": "fs-1-2",
          "slug": "css-basics",
          "title": "CSS Basics: Colors, Fonts & Boxes",
          "titleUrdu": "CSS Basics: Colors, Fonts Aur Boxes",
          "estMinutes": 25,
          "summaryEn": "CSS is how you style HTML — colors, fonts, spacing and layout. Learn the box model and basic selectors.",
          "summaryUr": "CSS se HTML ko style kiya jata hai — colors, fonts, spacing aur layout. Box model aur basic selectors seekho.",
          "explanationEn": "If HTML is the house structure, CSS is the paint, furniture and decoration. You write rules that select HTML elements and change how they look. The most important idea is the Box Model: every element is a box with content, padding (inner space), border, and margin (outer space). Selectors tell CSS which elements to style — by tag name (h1), class (.card), or id (#hero).",
          "explanationUr": "Agar HTML ghar ka structure hai to CSS uska paint, furniture aur decoration hai. Tum rules likhte ho jo HTML elements ko select karke unka look change karte hain. Sab se important idea Box Model hai: har element ek box hota hai jisme content, padding (andar ki space), border, aur margin (bahar ki space) hoti hai. Selectors CSS ko batate hain konsa element style karna hai — tag name (h1), class (.card), ya id (#hero) se.",
          "codeExample": {
            "language": "css",
            "code": "/* Tag selector */\nh1 {\n  color: #D6336C;\n  font-size: 2rem;\n}\n\n/* Class selector */\n.card {\n  background: #FBF6EC;\n  padding: 16px;\n  border-radius: 12px;\n  margin-bottom: 12px;\n}\n\n/* Box model in action */\n.box {\n  width: 200px;\n  padding: 20px;   /* andar ki space */\n  border: 2px solid #F2A93B;\n  margin: 10px;    /* bahar ki space */\n}"
          },
          "lineByLine": [
            {
              "line": "h1 { color: #D6336C; }",
              "explanationEn": "Selects every h1 on the page and sets its text color to rani pink.",
              "explanationUr": "Page ke har h1 ko select karke uska text color rani pink set karta hai."
            },
            {
              "line": ".card { padding: 16px; }",
              "explanationEn": "Class selector — only elements with class=\"card\" get this inner spacing.",
              "explanationUr": "Class selector — sirf un elements ko milta hai jinke class=\"card\" ho. Andar ki space (padding) set hoti hai."
            },
            {
              "line": "border: 2px solid #F2A93B;",
              "explanationEn": "Adds a 2-pixel solid saffron border around the element.",
              "explanationUr": "Element ke around 2-pixel solid saffron border add karta hai."
            }
          ],
          "whyItWorksEn": "Browsers apply CSS rules by specificity and source order. Classes are more specific than tags, so .card beats a plain div rule. The box model ensures consistent spacing across devices when you understand padding vs margin.",
          "whyItWorksUr": "Browser CSS rules ko specificity aur order ke hisaab se apply karta hai. Class tag se zyada specific hoti hai, is liye .card plain div rule se jeet jati hai. Box model samajhne se har device par spacing consistent rehti hai — padding andar, margin bahar.",
          "tryItYourself": "Create a .card class with padding, a soft background, rounded corners and a thin border. Apply it to 2–3 divs in your HTML.",
          "tryItYourselfUr": "Ek .card class banao jisme padding, soft background, rounded corners aur thin border ho. Apne HTML ke 2–3 divs par lagao.",
          "analogyTitle": "Ghar Ka Paint Aur Furniture",
          "analogyEn": "CSS is the paint, curtains and furniture of the house that HTML built. Same walls (HTML), completely different feel once you style them.",
          "analogyUr": "CSS us paint, curtains aur furniture ki tarah hai jo HTML wale ghar mein lagaya jata hai. Deewarein wahi (HTML), lekin style badalte hi poora feel change ho jata hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Personal Portfolio Page",
        "titleUrdu": "Apna Portfolio Page",
        "description": "Build a single static HTML/CSS page introducing yourself, with a photo, bio and social links.",
        "requirements": [
          "Use at least 5 different HTML tags correctly",
          "Style it with your own CSS (no frameworks yet)",
          "Make it look good on both mobile and desktop"
        ]
      }
    },
    {
      "id": "fs-m2",
      "slug": "javascript-deep-dive",
      "title": "JavaScript Deep Dive",
      "titleUrdu": "JavaScript Deep Dive",
      "description": "Variables, functions, DOM manipulation and the fundamentals every JS dev needs.",
      "topics": [
        "Variables & data types",
        "Functions & scope",
        "DOM manipulation",
        "Events",
        "Intro to async"
      ],
      "lessons": [
        {
          "id": "fs-2-1",
          "slug": "javascript-variables-data-types",
          "title": "JavaScript Variables & Data Types",
          "titleUrdu": "JavaScript Variables Aur Data Types",
          "estMinutes": 25,
          "summaryEn": "Variables are labelled boxes that store data. JavaScript gives you let, const and a handful of core data types to work with.",
          "summaryUr": "Variables un dabbon (boxes) ki tarah hain jinme hum data store karte hain. JavaScript mein hum let, const aur kuch basic data types use karte hain.",
          "explanationEn": "In real life you label boxes so you remember what's inside — 'kitchen stuff', 'books'. In code, variables do the same job for data. We declare them with let (value can change later) or const (value stays fixed). JavaScript's core data types are: string (text, in quotes), number (integers and decimals), boolean (true/false), and more advanced ones like arrays and objects which we'll meet soon. JavaScript is 'dynamically typed', meaning you don't have to declare the type — it figures it out from the value you give it.",
          "explanationUr": "Real life mein hum dabbon par label lagate hain taake yaad rahe andar kya hai — 'kitchen ka saman', 'kitaabein'. Code mein variables bhi data ke liye yehi kaam karte hain. Hum inhe let (jiski value baad mein badal sakti hai) ya const (jiski value fix rehti hai) se banate hain. JavaScript ke basic data types hain: string (text, quotes ke andar), number (poore aur decimal numbers), boolean (true/false), aur aage arrays aur objects bhi hote hain jo hum jald seekhein ge. JavaScript 'dynamically typed' hai, matlab type declare karne ki zaroorat nahi — yeh khud value dekh kar samajh leta hai.",
          "codeExample": {
            "language": "javascript",
            "code": "let studentName = \"Ali\";\nconst age = 21;\nlet isEnrolled = true;\n\nconsole.log(studentName + \" ki age \" + age + \" saal hai.\");\nconsole.log(\"Enrolled?\", isEnrolled);\n\nage = 22; // ❌ Error! const ki value nahi badal sakti"
          },
          "lineByLine": [
            {
              "line": "let studentName = \"Ali\";",
              "explanationEn": "Creates a variable that can be reassigned later; here it stores a text (string) value.",
              "explanationUr": "Ek variable banata hai jise baad mein badla ja sakta hai; yahan iska matlab hai ke isme text (string) store hai."
            },
            {
              "line": "const age = 21;",
              "explanationEn": "Creates a constant — its value cannot change after this line.",
              "explanationUr": "Ek constant banata hai — is line ke baad iski value badal nahi sakti."
            },
            {
              "line": "let isEnrolled = true;",
              "explanationEn": "A boolean variable — only ever true or false, perfect for yes/no logic.",
              "explanationUr": "Yeh boolean variable hai — sirf true ya false hota hai, yes/no logic ke liye perfect."
            },
            {
              "line": "age = 22; // ❌ Error!",
              "explanationEn": "JavaScript throws an error here because you can't reassign a const.",
              "explanationUr": "JavaScript yahan error deta hai kyun ke const ki value dobara set nahi ki ja sakti."
            }
          ],
          "whyItWorksEn": "let and const both create variables scoped to the nearest block ({ }), which prevents accidental leaks of data between unrelated parts of your code — a big improvement over the older 'var' keyword. const additionally protects you from bugs caused by accidentally overwriting a value you meant to keep fixed.",
          "whyItWorksUr": "let aur const dono variables ko nearest block ({ }) tak mehdood rakhte hain, jisse data galti se code ke doosre hisson mein 'leak' nahi hota — yeh purane 'var' keyword se kaafi behtar hai. const is se aage aapko un bugs se bachata hai jo galti se kisi fixed value ko overwrite karne se hote hain.",
          "tryItYourself": "Declare three variables: your name (string), your favourite number (number), and whether you like tea (boolean). Print a sentence using all three with console.log.",
          "tryItYourselfUr": "Teen variables banao: apna naam (string), apna favourite number (number), aur kya tumhe chai pasand hai (boolean). In teenon ko istemal karte hue console.log se ek jumla print karo.",
          "analogyTitle": "Dabba Jisme Cheez Rakhte Hain",
          "analogyEn": "A variable is exactly like a labelled dabba (box) in your kitchen — the label tells you what's inside without opening it. A let dabba you can empty and refill anytime; a const dabba is taped shut for good once you've packed it.",
          "analogyUr": "Variable bilkul kitchen ke us dabbay ki tarah hai jis par label laga ho — label dekh kar pata chal jata hai andar kya hai, khol'ne ki zaroorat nahi. let wala dabba tum jab chaho khali karke dobara bhar sakte ho; const wala dabba ek baar pack hone ke baad hamesha ke liye seal ho jata hai.",
          "hasFullContent": true,
          "realLifeExampleEn": "When you fill in a signup form, every field you type into (name, email, password) is temporarily held in variables in the page's JavaScript before it's sent to a server.",
          "realLifeExampleUr": "Jab tum koi signup form bharte ho, har field (name, email, password) jo tum type karte ho, server ko bhejne se pehle page ke JavaScript mein variables mein hold hoti hai.",
          "commonMistakesEn": "Trying to reassign a const (as shown in the error line above) — the fix is to use let if the value needs to change. Also forgetting quotes around strings (name = Ali instead of name = \"Ali\"), which JavaScript reads as a variable name, not text.",
          "commonMistakesUr": "const ko dobara assign karne ki koshish (upar wali error line jaisi) — fix yeh hai ke agar value change honi hai to let use karo. Strings ke around quotes bhoolna bhi aam ghalti hai (name = Ali instead of name = \"Ali\"), JavaScript isay text nahi, variable ka naam samajhta hai.",
          "dryRun": [
            { "stepEn": "let studentName = \"Ali\" — JS creates a box labelled studentName, puts the text \"Ali\" inside.", "stepUr": "let studentName = \"Ali\" — JS ek dabba banata hai studentName label ke sath, andar \"Ali\" text daalta hai." },
            { "stepEn": "const age = 21 — a sealed box labelled age, holding the number 21.", "stepUr": "const age = 21 — age label wala seal dabba, andar number 21." },
            { "stepEn": "age = 22 — JS tries to open the sealed const box and throws a TypeError instead.", "stepUr": "age = 22 — JS seal dabbay ko kholne ki koshish karta hai aur TypeError de deta hai." }
          ],
          "cheatSheetEn": "let = can reassign · const = cannot reassign · string = \"text\" · number = 42 or 3.14 · boolean = true/false · typeof x tells you the type",
          "cheatSheetUr": "let = dobara assign ho sakta hai · const = nahi ho sakta · string = \"text\" · number = 42 ya 3.14 · boolean = true/false · typeof x se type pata chalta hai",
          "topicTags": ["js.variables", "js.data-types"],
          "quiz": [
            {
              "question": "What happens if you try to reassign a const?",
              "questionUr": "Agar const ko dobara assign karo to kya hota hai?",
              "options": ["It silently ignores the change", "It throws an error", "It converts to let automatically", "Nothing, it works fine"],
              "correctIndex": 1,
              "explanation": "const locks the binding — JavaScript throws a TypeError if you try to reassign it."
            },
            {
              "question": "Which of these is a boolean value?",
              "questionUr": "In mein se boolean value konsi hai?",
              "options": ["\"true\"", "1", "true", "\"1\""],
              "correctIndex": 2,
              "explanation": "true (without quotes) is the actual boolean type — \"true\" in quotes is just a string."
            }
          ],
          "codingChallenge": {
            "promptEn": "Declare a const for a city name, a let for a temperature (number), and a let for isRaining (boolean). Log a sentence combining all three.",
            "promptUr": "City name ke liye const, temperature (number) ke liye let, aur isRaining (boolean) ke liye let banao. Teenon ko combine karke ek sentence log karo.",
            "starterCode": "// declare your variables here\n\nconsole.log(/* your sentence here */);",
            "language": "javascript",
            "hints": [
              "Use + to join strings and variables together in console.log.",
              "Booleans don't need quotes: isRaining = true, not \"true\"."
            ]
          }
        },
        {
          "id": "fs-2-2",
          "slug": "dom-manipulation",
          "title": "Talking to the Page: DOM Manipulation",
          "titleUrdu": "DOM Manipulation: Page Se Baat Karna",
          "estMinutes": 30,
          "summaryEn": "The DOM is the live tree of your page. JavaScript can select elements and change them instantly.",
          "summaryUr": "DOM aapke page ka live tree hai. JavaScript elements select karke unhe foran change kar sakta hai.",
          "explanationEn": "When the browser loads HTML it builds a tree called the DOM (Document Object Model). JavaScript can reach into that tree, find elements, and change their text, styles, or structure — without reloading the page. This is how buttons respond, lists update, and interactive websites feel alive.",
          "explanationUr": "Jab browser HTML load karta hai to woh ek tree banata hai jise DOM (Document Object Model) kehte hain. JavaScript us tree mein ja kar elements dhoondh sakta hai aur unka text, style ya structure change kar sakta hai — page reload kiye baghair. Buttons isi se respond karte hain, lists update hoti hain, aur websites zinda feel hoti hain.",
          "codeExample": {
            "language": "javascript",
            "code": "// Element select karo\nconst heading = document.querySelector(\"h1\");\nconst btn = document.querySelector(\"#changeBtn\");\n\n// Text change karo\nheading.textContent = \"Assalam-o-Alaikum!\";\n\n// Click pe react karo\nbtn.addEventListener(\"click\", () => {\n  heading.style.color = \"#D6336C\";\n  heading.textContent = \"Color change ho gaya!\";\n});"
          },
          "lineByLine": [
            {
              "line": "document.querySelector(\"h1\")",
              "explanationEn": "Finds the first h1 element on the page and returns it so you can work with it.",
              "explanationUr": "Page ka pehla h1 element dhoondhta hai aur return karta hai taake aap uske sath kaam kar sako."
            },
            {
              "line": "heading.textContent = ...",
              "explanationEn": "Replaces the text inside the element. Visitors see the change instantly.",
              "explanationUr": "Element ke andar ka text badal deta hai. Visitor ko foran nazar aata hai."
            },
            {
              "line": "btn.addEventListener(\"click\", () => { ... })",
              "explanationEn": "Listens for a click on the button, then runs the function you give it.",
              "explanationUr": "Button ke click ka wait karta hai, phir woh function chalta hai jo aapne diya."
            }
          ],
          "whyItWorksEn": "The DOM is a live representation. When you change a property, the browser re-renders just that part. Event listeners let you react to user actions without constant checking.",
          "whyItWorksUr": "DOM live representation hai. Jab aap property change karte ho, browser sirf us hisse ko dobara draw karta hai. Event listeners user ke actions pe react karne dete hain — continuous checking ki zaroorat nahi.",
          "tryItYourself": "Add a button and a paragraph. On click, change the paragraph text and its color using JavaScript.",
          "tryItYourselfUr": "Ek button aur ek paragraph add karo. Click pe JavaScript se paragraph ka text aur color change karo.",
          "analogyTitle": "Restaurant Ka Waiter",
          "analogyEn": "The DOM is like a restaurant floor plan. JavaScript is the waiter who can go to any table (element), change the order (text/style), or rearrange chairs — without rebuilding the whole restaurant.",
          "analogyUr": "DOM restaurant ke floor plan jaisa hai. JavaScript waiter hai jo kisi bhi table (element) pe ja sakta hai, order change kar sakta hai (text/style), ya chairs rearrange kar sakta hai — poora restaurant dobara banaye baghair.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Interactive To-Do List",
        "titleUrdu": "Interactive To-Do List",
        "description": "A to-do app where users can add, complete and delete tasks — no framework, pure JS.",
        "requirements": [
          "Add new tasks via an input + button",
          "Mark tasks complete with a click",
          "Delete tasks",
          "Store tasks in localStorage so they persist on refresh"
        ]
      }
    },
    {
      "id": "fs-m3",
      "slug": "git-github",
      "title": "Git & GitHub for Developers",
      "titleUrdu": "Git Aur GitHub",
      "description": "Version control basics every developer must know before working on real projects.",
      "topics": [
        "git init/add/commit",
        "Branches & merging",
        "Pushing to GitHub",
        "Pull requests"
      ],
      "lessons": [
        {
          "id": "fs-3-1",
          "slug": "git-basics",
          "title": "Git Basics: Save Your Progress",
          "titleUrdu": "Git Basics: Apni Progress Save Karo",
          "estMinutes": 25,
          "summaryEn": "Git tracks every change in your project so you never lose work and can collaborate safely.",
          "summaryUr": "Git aapke project ki har change track karta hai taake kaam kabhi waste na ho aur team ke sath safe collaboration ho.",
          "explanationEn": "Git is version control. Think of it as a time machine for your code. You take snapshots (commits) of your project. If something breaks, you can go back. The basic flow is: change files → git add (stage) → git commit (save snapshot) → git push (upload to GitHub).",
          "explanationUr": "Git version control hai. Ise apne code ka time machine samjho. Aap project ke snapshots (commits) lete ho. Agar kuch toot jaye to peeche ja sakte ho. Basic flow: files change karo → git add (stage) → git commit (snapshot save) → git push (GitHub pe bhejo).",
          "codeExample": {
            "language": "bash",
            "code": "git init\ngit add .\ngit commit -m \"Pehla commit: portfolio page\"\ngit branch -M main\ngit remote add origin https://github.com/username/repo.git\ngit push -u origin main"
          },
          "lineByLine": [
            {
              "line": "git init",
              "explanationEn": "Creates a new Git repository in the current folder.",
              "explanationUr": "Current folder mein naya Git repository banata hai."
            },
            {
              "line": "git add .",
              "explanationEn": "Stages all changed files so they are ready to be committed.",
              "explanationUr": "Saari changed files ko stage karta hai taake commit ke liye ready ho jayein."
            },
            {
              "line": "git commit -m \"...\"",
              "explanationEn": "Saves a snapshot with a short message describing what changed.",
              "explanationUr": "Ek snapshot save karta hai short message ke sath ke kya change hua."
            },
            {
              "line": "git push -u origin main",
              "explanationEn": "Uploads your commits to GitHub so others (and you) can access them online.",
              "explanationUr": "Commits ko GitHub pe upload karta hai taake online available ho jayein."
            }
          ],
          "whyItWorksEn": "Git stores differences (deltas) efficiently. Each commit points to a previous one, forming a history chain. Branching lets you experiment without breaking the main work.",
          "whyItWorksUr": "Git differences (deltas) efficiently store karta hai. Har commit pehle wale ko point karta hai, history chain banti hai. Branching se aap main kaam tode baghair experiment kar sakte ho.",
          "tryItYourself": "Create a folder, git init, add a README.md, commit it, and push to a new GitHub repo.",
          "tryItYourselfUr": "Ek folder banao, git init karo, README.md add karo, commit karo, aur naye GitHub repo pe push karo.",
          "analogyTitle": "School Ki Notebook Ke Pages",
          "analogyEn": "Each commit is like finishing a page in your notebook and numbering it. You can always flip back to an older page if the new one goes wrong.",
          "analogyUr": "Har commit notebook ke page khatam karke number lagane jaisa hai. Agar naya page kharab ho jaye to purane page pe wapas ja sakte ho.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Publish Your First Repository",
        "titleUrdu": "Apna Pehla Repository Publish Karo",
        "description": "Push your portfolio project to GitHub with a clean README.",
        "requirements": [
          "Initialize a git repo",
          "Write a helpful README.md",
          "Push to a public GitHub repository"
        ]
      }
    },
    {
      "id": "fs-m4",
      "slug": "react-fundamentals",
      "title": "React Fundamentals",
      "titleUrdu": "React Fundamentals",
      "description": "Components, props, state and hooks — the building blocks of modern frontend apps.",
      "topics": [
        "JSX",
        "Components & props",
        "useState & useEffect",
        "Conditional rendering",
        "Lists & keys"
      ],
      "lessons": [
        {
          "id": "fs-4-1",
          "slug": "react-components",
          "title": "Your First React Component",
          "titleUrdu": "Apna Pehla React Component",
          "estMinutes": 30,
          "summaryEn": "Components are reusable UI building blocks. Learn JSX, props and how React renders your screen.",
          "summaryUr": "Components reusable UI blocks hain. JSX, props aur React ka screen render karna seekho.",
          "explanationEn": "React lets you build UIs from small pieces called components. A component is a function that returns JSX (HTML-like syntax). You can pass data into it with props. When data changes, React efficiently updates only what needs to change on the screen.",
          "explanationUr": "React UI ko chhote pieces (components) se banata hai. Component ek function hai jo JSX return karta hai (HTML jaisa syntax). Props se data pass hota hai. Jab data badalta hai, React sirf zaroori hisse update karta hai.",
          "codeExample": {
            "language": "jsx",
            "code": "function Greeting({ name }) {\n  return <h1>Assalam-o-Alaikum, {name}!</h1>;\n}\n\nexport default function App() {\n  return (\n    <div>\n      <Greeting name=\"Ali\" />\n      <Greeting name=\"Sara\" />\n    </div>\n  );\n}"
          },
          "lineByLine": [
            {
              "line": "function Greeting({ name })",
              "explanationEn": "Defines a component. { name } pulls the name prop out of the props object.",
              "explanationUr": "Component define karta hai. { name } props object se name nikalta hai."
            },
            {
              "line": "return <h1>...</h1>",
              "explanationEn": "JSX — looks like HTML but is actually JavaScript that React turns into real DOM elements.",
              "explanationUr": "JSX — HTML jaisa dikhta hai lekin JavaScript hai jo React real DOM elements mein convert karta hai."
            },
            {
              "line": "<Greeting name=\"Ali\" />",
              "explanationEn": "Uses the component and passes a prop. You can reuse it with different data.",
              "explanationUr": "Component use karta hai aur prop pass karta hai. Alag data ke sath dobara use kar sakte ho."
            }
          ],
          "whyItWorksEn": "React builds a virtual DOM, compares it with the previous version, and applies only the minimal real DOM updates. Components make large apps maintainable.",
          "whyItWorksUr": "React virtual DOM banata hai, pehle version se compare karta hai, aur sirf zaroori real DOM updates apply karta hai. Components bari apps ko maintain karne layak banate hain.",
          "tryItYourself": "Create a ProfileCard component that accepts name and city props and displays them in a styled card.",
          "tryItYourselfUr": "ProfileCard component banao jo name aur city props le aur styled card mein dikhaye.",
          "analogyTitle": "Ami Ka Recipe Card",
          "analogyEn": "A component is like your ami's recipe card — write the steps once, give different ingredients (props), and reuse it whenever you need that dish.",
          "analogyUr": "Component ami ke recipe card jaisa hai — steps ek dafa likho, alag ingredients (props) do, aur jab zaroorat ho dobara bana lo.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Movie Search App",
        "titleUrdu": "Movie Search App",
        "description": "Search movies using a public API and display posters, ratings and summaries.",
        "requirements": [
          "Fetch data from a public movie API",
          "Search input with live results",
          "Loading & empty states"
        ]
      }
    },
    {
      "id": "fs-m5",
      "slug": "advanced-react",
      "title": "Advanced React & State Management",
      "titleUrdu": "Advanced React Aur State Management",
      "description": "Context API, custom hooks, and managing state across a bigger app.",
      "topics": [
        "Context API",
        "Custom hooks",
        "Zustand/Redux basics",
        "Performance basics"
      ],
      "lessons": [
        {
          "id": "fs-5-1",
          "slug": "context-api",
          "title": "Sharing State with Context API",
          "titleUrdu": "Context API Se State Share Karna",
          "estMinutes": 30,
          "summaryEn": "Context lets you share data across components without prop drilling.",
          "summaryUr": "Context se aap data ko components ke beech share kar sakte ho bina prop drilling ke.",
          "explanationEn": "When many components need the same data (theme, user, language), passing props through every level becomes messy — prop drilling. React Context provides a way to broadcast that data. You create a context, wrap a tree with a Provider, and any child can read it with useContext.",
          "explanationUr": "Jab kai components ko same data chahiye (theme, user, language), har level se props pass karna messy ho jata hai — prop drilling. React Context us data ko broadcast karne ka tareeqa deta hai. Context banao, Provider se tree wrap karo, koi bhi child useContext se padh sakta hai.",
          "codeExample": {
            "language": "jsx",
            "code": "import { createContext, useContext, useState } from \"react\";\n\nconst ThemeContext = createContext(\"light\");\n\nfunction App() {\n  const [theme, setTheme] = useState(\"light\");\n  return (\n    <ThemeContext.Provider value={theme}>\n      <Toolbar />\n      <button onClick={() => setTheme(theme === \"light\" ? \"dark\" : \"light\")}>\n        Toggle\n      </button>\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  const theme = useContext(ThemeContext);\n  return <div className={theme}>Toolbar theme: {theme}</div>;\n}"
          },
          "lineByLine": [
            {
              "line": "createContext(\"light\")",
              "explanationEn": "Creates a context with a default value.",
              "explanationUr": "Default value ke sath context banata hai."
            },
            {
              "line": "<ThemeContext.Provider value={theme}>",
              "explanationEn": "Makes theme available to all children below.",
              "explanationUr": "Neeche ke saare children ko theme available karta hai."
            },
            {
              "line": "useContext(ThemeContext)",
              "explanationEn": "Reads the current context value inside a child component.",
              "explanationUr": "Child component ke andar current context value padhta hai."
            }
          ],
          "whyItWorksEn": "Provider stores the value in React's internal tree. useContext subscribes the component so it re-renders when the value changes.",
          "whyItWorksUr": "Provider value ko React ke internal tree mein store karta hai. useContext component ko subscribe karta hai taake value change pe re-render ho.",
          "tryItYourself": "Create a LanguageContext with 'ur' and 'en'. Toggle language and show a greeting in both components.",
          "tryItYourselfUr": "LanguageContext banao 'ur' aur 'en' ke sath. Language toggle karo aur dono components mein greeting dikhao.",
          "analogyTitle": "School Ka Loudspeaker",
          "analogyEn": "Context is the school loudspeaker — one announcement reaches every classroom without sending a note through each hallway.",
          "analogyUr": "Context school ke loudspeaker jaisa hai — ek announcement har classroom tak pohanch jati hai bina har corridor se chitthi bheje.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "E-commerce Cart",
        "titleUrdu": "E-commerce Cart",
        "description": "A shopping cart with add/remove/quantity logic managed via Context.",
        "requirements": [
          "Global cart state via Context",
          "Add/remove/update quantity",
          "Cart total calculation"
        ]
      }
    },
    {
      "id": "fs-m6",
      "slug": "backend-node-express",
      "title": "Backend with Node.js & Express",
      "titleUrdu": "Node.js Aur Express Se Backend",
      "description": "Build your first REST API and understand how servers work.",
      "topics": [
        "Node.js basics",
        "Express routing",
        "Middleware",
        "REST API design"
      ],
      "lessons": [
        {
          "id": "fs-6-1",
          "slug": "express-server",
          "title": "Your First Express Server",
          "titleUrdu": "Apna Pehla Express Server",
          "estMinutes": 30,
          "summaryEn": "Build a simple backend server that responds to HTTP requests with Express.",
          "summaryUr": "Express se simple backend server banao jo HTTP requests ka jawab de.",
          "explanationEn": "The browser (frontend) often needs data from a server (backend). Express is a minimal Node.js framework for handling HTTP requests. You define routes (URLs) and what to send back. This is the foundation of APIs and full-stack apps.",
          "explanationUr": "Browser (frontend) aksar server (backend) se data mangaata hai. Express Node.js ka lightweight framework hai HTTP requests handle karne ke liye. Aap routes (URLs) define karte ho aur batate ho kya wapas bhejna hai. Yahi APIs aur full-stack apps ki bunyaad hai.",
          "codeExample": {
            "language": "javascript",
            "code": "const express = require(\"express\");\nconst app = express();\n\napp.get(\"/api/hello\", (req, res) => {\n  res.json({ message: \"Assalam-o-Alaikum from server!\" });\n});\n\napp.listen(3000, () => {\n  console.log(\"Server http://localhost:3000 pe chal raha hai\");\n});"
          },
          "lineByLine": [
            {
              "line": "const app = express()",
              "explanationEn": "Creates an Express application instance.",
              "explanationUr": "Express application ka instance banata hai."
            },
            {
              "line": "app.get(\"/api/hello\", ...)",
              "explanationEn": "Defines a GET route. When someone visits this URL, the function runs.",
              "explanationUr": "GET route define karta hai. Jab koi is URL pe aaye to function chalta hai."
            },
            {
              "line": "res.json({ ... })",
              "explanationEn": "Sends a JSON response back to the client.",
              "explanationUr": "Client ko JSON response wapas bhejta hai."
            },
            {
              "line": "app.listen(3000, ...)",
              "explanationEn": "Starts the server on port 3000.",
              "explanationUr": "Server ko port 3000 pe start karta hai."
            }
          ],
          "whyItWorksEn": "HTTP is request-response. Express matches the incoming URL and method to your route handlers and lets you send back data, status codes, or files.",
          "whyItWorksUr": "HTTP request-response model hai. Express aane wali URL aur method ko aapke route handlers se match karta hai aur data, status codes ya files wapas bhejne deta hai.",
          "tryItYourself": "Create an Express server with a /api/students route that returns a JSON array of 3 student names.",
          "tryItYourselfUr": "Express server banao jisme /api/students route ho jo 3 student names ka JSON array return kare.",
          "analogyTitle": "Restaurant Ka Kitchen",
          "analogyEn": "The frontend is the dining area. Express is the kitchen. A request is an order ticket; the route handler is the cook who prepares the response plate.",
          "analogyUr": "Frontend dining area hai. Express kitchen hai. Request order ticket hai; route handler woh cook hai jo response ki plate taiyar karta hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "REST API for a Blog",
        "titleUrdu": "Blog Ke Liye REST API",
        "description": "CRUD API for blog posts using Express.",
        "requirements": [
          "GET, POST, PUT, DELETE routes",
          "Input validation",
          "Proper status codes & error handling"
        ]
      }
    },
    {
      "id": "fs-m7",
      "slug": "databases",
      "title": "Databases (SQL + MongoDB)",
      "titleUrdu": "Databases (SQL + MongoDB)",
      "description": "Store data permanently using relational and NoSQL databases.",
      "topics": [
        "SQL basics",
        "MongoDB & Mongoose",
        "Schema design",
        "Queries"
      ],
      "lessons": [
        {
          "id": "fs-7-1",
          "slug": "mongodb-basics",
          "title": "Storing Data with MongoDB",
          "titleUrdu": "MongoDB Se Data Store Karna",
          "estMinutes": 30,
          "summaryEn": "MongoDB stores flexible JSON-like documents. Learn collections, insert and find.",
          "summaryUr": "MongoDB flexible JSON-like documents store karta hai. Collections, insert aur find seekho.",
          "explanationEn": "Relational databases use tables and rows. MongoDB uses collections and documents (like JSON objects). This flexibility is great for rapidly changing data shapes. You connect with a driver, then insertOne / find to save and read data.",
          "explanationUr": "Relational databases tables aur rows use karti hain. MongoDB collections aur documents (JSON objects jaisa) use karta hai. Rapidly changing data ke liye yeh flexible hai. Driver se connect karo, phir insertOne / find se save aur read karo.",
          "codeExample": {
            "language": "javascript",
            "code": "const { MongoClient } = require(\"mongodb\");\n\nasync function main() {\n  const client = new MongoClient(\"mongodb://localhost:27017\");\n  await client.connect();\n  const db = client.db(\"codeduniya\");\n  const students = db.collection(\"students\");\n\n  await students.insertOne({ name: \"Ali\", city: \"Lahore\" });\n  const all = await students.find({}).toArray();\n  console.log(all);\n  await client.close();\n}\nmain();"
          },
          "lineByLine": [
            {
              "line": "client.db(\"codeduniya\")",
              "explanationEn": "Selects (or creates) a database named codeduniya.",
              "explanationUr": "codeduniya naam ka database select (ya create) karta hai."
            },
            {
              "line": "db.collection(\"students\")",
              "explanationEn": "Gets a collection — like a table for student documents.",
              "explanationUr": "Collection milti hai — student documents ke liye table jaisi."
            },
            {
              "line": "insertOne({...})",
              "explanationEn": "Inserts one document into the collection.",
              "explanationUr": "Collection mein ek document insert karta hai."
            },
            {
              "line": "find({}).toArray()",
              "explanationEn": "Finds all documents and returns them as an array.",
              "explanationUr": "Saare documents dhoondh kar array ke form mein return karta hai."
            }
          ],
          "whyItWorksEn": "Documents map naturally to JavaScript objects. No fixed schema means you can add fields later without migrations for every change.",
          "whyItWorksUr": "Documents naturally JavaScript objects se match karte hain. Fixed schema na hone se baad mein fields add karna asaan hai bina har change pe migration ke.",
          "tryItYourself": "Insert 3 student documents and find only those from 'Karachi'.",
          "tryItYourselfUr": "3 student documents insert karo aur sirf 'Karachi' wale find karo.",
          "analogyTitle": "Lockers Mein Files",
          "analogyEn": "A collection is a room of lockers. Each document is a file folder you can stuff with whatever papers (fields) you need.",
          "analogyUr": "Collection lockers wale room jaisi hai. Har document ek file folder hai jisme aap jo papers (fields) chaho rakh sakte ho.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Connect Blog API to MongoDB",
        "titleUrdu": "Blog API Ko MongoDB Se Connect Karo",
        "description": "Persist blog posts in MongoDB instead of memory.",
        "requirements": [
          "Mongoose schema for posts",
          "Replace in-memory array with DB calls",
          "Seed sample data"
        ]
      }
    },
    {
      "id": "fs-m8",
      "slug": "fullstack-auth",
      "title": "Full Stack Integration & Auth",
      "titleUrdu": "Full Stack Integration Aur Auth",
      "description": "Connect frontend and backend, and add real user authentication.",
      "topics": [
        "Connecting React to Express",
        "JWT authentication",
        "Protected routes",
        "Password hashing"
      ],
      "lessons": [
        {
          "id": "fs-8-1",
          "slug": "jwt-auth",
          "title": "Authentication with JWT",
          "titleUrdu": "JWT Se Authentication",
          "estMinutes": 35,
          "summaryEn": "JWTs let your API know who is logged in without storing session on the server.",
          "summaryUr": "JWT se API ko pata chal jata hai kaun login hai — server pe session store kiye baghair.",
          "explanationEn": "After login, the server creates a signed token (JWT) and sends it to the client. The client stores it and sends it on later requests. The server verifies the signature — if valid, the user is authenticated. No server-side session store needed.",
          "explanationUr": "Login ke baad server signed token (JWT) banata hai aur client ko bhejta hai. Client use store karke baad ki requests pe bhejta hai. Server signature verify karta hai — valid ho to user authenticated. Server-side session store ki zaroorat nahi.",
          "codeExample": {
            "language": "javascript",
            "code": "const jwt = require(\"jsonwebtoken\");\n\n// Login success pe token banao\nconst token = jwt.sign(\n  { userId: 42, name: \"Ali\" },\n  \"SECRET_KEY\",\n  { expiresIn: \"7d\" }\n);\n\n// Protected route pe verify karo\ntry {\n  const data = jwt.verify(token, \"SECRET_KEY\");\n  console.log(\"User:\", data.name);\n} catch {\n  console.log(\"Invalid token\");\n}"
          },
          "lineByLine": [
            {
              "line": "jwt.sign({...}, secret, options)",
              "explanationEn": "Creates a signed token containing user data.",
              "explanationUr": "User data wala signed token banata hai."
            },
            {
              "line": "jwt.verify(token, secret)",
              "explanationEn": "Checks signature and expiry; returns payload if valid.",
              "explanationUr": "Signature aur expiry check karta hai; valid ho to payload return karta hai."
            }
          ],
          "whyItWorksEn": "The signature proves the token was issued by your server and was not tampered with. Expiry limits damage if a token is stolen.",
          "whyItWorksUr": "Signature prove karta hai token aapke server ne issue kiya aur change nahi hua. Expiry token chori hone pe nuksaan limit karti hai.",
          "tryItYourself": "Create a token for a user object and verify it. Then try verifying with a wrong secret and see the error.",
          "tryItYourselfUr": "User object ka token banao aur verify karo. Phir galat secret se verify karke error dekho.",
          "analogyTitle": "Cinema Ki Ticket",
          "analogyEn": "A JWT is like a cinema ticket with a special stamp. The guard only checks the stamp — they don't keep a list of every person inside.",
          "analogyUr": "JWT cinema ticket jaisi hai jisme khaas stamp ho. Guard sirf stamp check karta hai — andar har shakhs ki list nahi rakhta.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Full Stack Blog App with Login",
        "titleUrdu": "Login Ke Sath Full Stack Blog App",
        "description": "Users can sign up, log in, and manage their own blog posts.",
        "requirements": [
          "Signup/login screens",
          "JWT-protected API routes",
          "Only authors can edit/delete their posts"
        ]
      }
    },
    {
      "id": "fs-m9",
      "slug": "deployment-devops",
      "title": "Deployment & DevOps Basics",
      "titleUrdu": "Deployment Aur DevOps Basics",
      "description": "Ship your app to the real internet with confidence.",
      "topics": [
        "Environment variables",
        "Deploying to Vercel",
        "Deploying a backend to Render",
        "CI basics"
      ],
      "lessons": [
        {
          "id": "fs-9-1",
          "slug": "deploy-vercel",
          "title": "Deploying to Vercel",
          "titleUrdu": "Vercel Par Deploy Karna",
          "estMinutes": 25,
          "summaryEn": "Push your Next.js app to GitHub and deploy it live on Vercel in minutes.",
          "summaryUr": "Next.js app GitHub pe push karke Vercel par minutes mein live deploy karo.",
          "explanationEn": "Vercel is built for Next.js. Connect your GitHub repo, and every push can auto-deploy. You get a live HTTPS URL, preview deployments for branches, and easy environment variables for API keys.",
          "explanationUr": "Vercel Next.js ke liye bana hai. GitHub repo connect karo, har push auto-deploy ho sakti hai. Live HTTPS URL, branch previews, aur API keys ke liye environment variables asani se milte hain.",
          "codeExample": {
            "language": "bash",
            "code": "# Terminal se\ngit add .\ngit commit -m \"Ready to deploy\"\ngit push origin main\n\n# Phir vercel.com pe:\n# 1. New Project\n# 2. Import GitHub repo\n# 3. Deploy\n# 4. Settings → Environment Variables mein keys add karo"
          },
          "lineByLine": [
            {
              "line": "git push origin main",
              "explanationEn": "Uploads your latest code to GitHub.",
              "explanationUr": "Latest code GitHub pe upload karta hai."
            },
            {
              "line": "Import GitHub repo on Vercel",
              "explanationEn": "Vercel clones and builds your Next.js app automatically.",
              "explanationUr": "Vercel automatically clone karke Next.js app build karta hai."
            }
          ],
          "whyItWorksEn": "Vercel detects Next.js, runs next build, and serves the output on a global CDN. Env vars are injected at build/runtime securely.",
          "whyItWorksUr": "Vercel Next.js detect karta hai, next build chalta hai, output global CDN pe serve hota hai. Env vars build/runtime pe securely inject hoti hain.",
          "tryItYourself": "Deploy this CodeDuniya project (or a small Next app) to Vercel and open the live URL on your phone.",
          "tryItYourselfUr": "Is CodeDuniya project (ya chhoti Next app) ko Vercel pe deploy karo aur live URL phone pe kholo.",
          "analogyTitle": "Dukan Khana Online",
          "analogyEn": "Localhost is practicing in your room. Deploying is opening a real shop on a busy street so customers can walk in.",
          "analogyUr": "Localhost apne room mein practice hai. Deploy karna asli dukan busy street pe kholna hai taake customers aa saken.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Deploy Your Full Stack App",
        "titleUrdu": "Apna Full Stack App Deploy Karo",
        "description": "Deploy frontend to Vercel and backend to Render, fully connected.",
        "requirements": [
          "Live frontend URL",
          "Live backend URL with env vars set",
          "Working end-to-end demo"
        ]
      }
    }
  ],
  "dailyTasks": [
    {
      "id": "daily-fs-1",
      "title": "Build a small HTML/CSS component",
      "titleUrdu": "Ek chota HTML/CSS component banao",
      "description": "Recreate a card UI you saw online using only HTML & CSS."
    },
    {
      "id": "daily-fs-2",
      "title": "Solve one JavaScript logic problem",
      "titleUrdu": "Ek JavaScript logic problem solve karo",
      "description": "Pick a beginner problem (e.g. reverse a string) and solve it without looking anything up."
    }
  ]
};

export default fullStackPath;
