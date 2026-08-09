import type { LearningPath } from "../types";

const webBasicsPath: LearningPath = {
  "id": "path-web-basics",
  "slug": "web-development-basics",
  "title": "Web Development Basics",
  "titleUrdu": "Web Development Basics",
  "description": "The perfect first step — HTML, CSS and a little JavaScript, explained simply.",
  "descriptionUr": "Pehla sab se acha qadam — HTML, CSS aur thori JavaScript, aasan tareeqe se samjhai gayi.",
  "theme": "saffron",
  "icon": "Globe",
  "level": "Absolute Beginner",
  "estWeeks": 6,
  "modules": [
    {
      "id": "web-m1",
      "slug": "intro-web-dev",
      "title": "Introduction to Web Development",
      "titleUrdu": "Web Development Ka Taaruf",
      "description": "How the internet, browsers and websites actually work together.",
      "topics": [
        "Client vs server",
        "How browsers render pages",
        "Setting up your first code editor"
      ],
      "lessons": [
        {
          "id": "web-1-1",
          "slug": "how-web-works",
          "title": "How the Web Actually Works",
          "titleUrdu": "Web Asal Mein Kaise Kaam Karta Hai",
          "estMinutes": 20,
          "summaryEn": "Browser, DNS, server, HTTP — the journey of a page load.",
          "summaryUr": "Browser, DNS, server, HTTP — page load ka safar.",
          "explanationEn": "You type a URL. DNS finds the server IP. Browser sends an HTTP request. Server responds with HTML/CSS/JS. Browser renders the page. Understanding this makes debugging network issues much easier.",
          "explanationUr": "URL type karte ho. DNS server IP dhoondhta hai. Browser HTTP request bhejta hai. Server HTML/CSS/JS se jawab deta hai. Browser page render karta hai. Yeh samajhne se network issues debug karna asaan ho jata hai.",
          "codeExample": {
            "language": "text",
            "code": "1. URL: https://codeduniya.dev/paths\n2. DNS: codeduniya.dev → 76.76.21.21\n3. Request: GET /paths HTTP/1.1\n4. Response: 200 OK + HTML\n5. Browser paints the page"
          },
          "lineByLine": [
            {
              "line": "DNS lookup",
              "explanationEn": "Phonebook of the internet — domain name to IP address.",
              "explanationUr": "Internet ki phonebook — domain name se IP address."
            },
            {
              "line": "HTTP request/response",
              "explanationEn": "The language browsers and servers speak.",
              "explanationUr": "Woh zaban jo browsers aur servers bolte hain."
            }
          ],
          "whyItWorksEn": "Layered design: DNS, TCP, TLS, HTTP each solve one problem. DevTools Network tab shows this journey live.",
          "whyItWorksUr": "Layered design: DNS, TCP, TLS, HTTP har ek problem solve karti hai. DevTools Network tab yeh safar live dikhata hai.",
          "tryItYourself": "Open DevTools → Network, reload a site, and find the first document request status code.",
          "tryItYourselfUr": "DevTools → Network kholo, site reload karo, pehli document request ka status code dhoondho.",
          "analogyTitle": "Post Office",
          "analogyEn": "DNS is finding the address. HTTP is the letter format. The server is the person who writes back.",
          "analogyUr": "DNS address dhoondhna hai. HTTP khat ka format hai. Server woh shakhs hai jo jawab likhta hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Set Up Your Dev Environment",
        "titleUrdu": "Apna Dev Environment Set Up Karo",
        "description": "Install VS Code, a browser, and create your first project folder.",
        "requirements": [
          "VS Code installed with a live-preview extension",
          "First HTML file created and opened in browser"
        ]
      }
    },
    {
      "id": "web-m2",
      "slug": "html-essentials",
      "title": "HTML Essentials",
      "titleUrdu": "HTML Essentials",
      "description": "The core tags you'll reach for constantly.",
      "topics": [
        "Headings & paragraphs",
        "Lists",
        "Images & links",
        "Forms basics"
      ],
      "lessons": [
        {
          "id": "web-2-1",
          "slug": "html-tags-samajhna",
          "title": "Understanding HTML Tags",
          "titleUrdu": "HTML Tags Samajhna",
          "estMinutes": 12,
          "summaryEn": "A friendly tour of the most common HTML tags you'll use in almost every page.",
          "summaryUr": "Un aam HTML tags ka aasan tour jo tum tqreeban har page mein use karo ge.",
          "explanationEn": "HTML tags are like labelled containers, each with a specific job. <h1> to <h6> are headings (h1 biggest, h6 smallest). <p> holds a paragraph of text. <img> shows an image (and needs a src attribute pointing to the file). <ul>/<ol> create bullet or numbered lists, with <li> for each item. Learning what each tag means — not just how it looks — helps browsers, search engines, and people using screen readers understand your page properly.",
          "explanationUr": "HTML tags labelled containers ki tarah hain, har ek ka apna kaam hota hai. <h1> se <h6> tak headings hoti hain (h1 sab se badi, h6 sab se choti). <p> ek paragraph ka text rakhta hai. <img> ek image dikhata hai (aur isay src attribute chahiye jo file ki taraf ishara kare). <ul>/<ol> bullet ya numbered lists banate hain, jinme har item <li> mein hota hai. Har tag ka matlab seekhna — sirf dikhawat nahi — browsers, search engines aur screen reader use karne walon ko page sahi tarah samajhne mein madad karta hai.",
          "codeExample": {
            "language": "html",
            "code": "<h1>Meri Recipe Book</h1>\n<p>Yahan meri pasandeeda recipes ki list hai:</p>\n<ul>\n  <li>Chicken Biryani</li>\n  <li>Seekh Kabab</li>\n  <li>Gulab Jamun</li>\n</ul>\n<img src=\"biryani.jpg\" alt=\"Chicken Biryani plate\" />"
          },
          "lineByLine": [
            {
              "line": "<h1>Meri Recipe Book</h1>",
              "explanationEn": "The main heading of the page — there should typically be just one h1.",
              "explanationUr": "Page ki main heading — aksar sirf ek hi h1 honi chahiye."
            },
            {
              "line": "<ul> ... </ul>",
              "explanationEn": "Wraps a bullet-point list; each item inside goes in its own <li> tag.",
              "explanationUr": "Bullet-point list ko wrap karta hai; har item apne <li> tag ke andar hota hai."
            },
            {
              "line": "<img src=\"biryani.jpg\" alt=\"Chicken Biryani plate\" />",
              "explanationEn": "Displays an image; the alt text describes it for screen readers and shows if the image fails to load.",
              "explanationUr": "Ek image dikhata hai; alt text screen readers ke liye tasveer bayan karta hai aur agar image load na ho to yehi nazar aata hai."
            }
          ],
          "whyItWorksEn": "Because each tag carries meaning (semantic HTML), tools other than a visual browser — search engines, screen readers, translation tools — can correctly understand your content's structure, not just its appearance. This is why using the 'right' tag matters, not just any tag that looks similar.",
          "whyItWorksUr": "Chunke har tag ka apna matlab hota hai (semantic HTML), visual browser ke ilawa doosray tools — search engines, screen readers, translation tools — bhi tumhare content ka structure sahi samajh sakte hain, sirf uski shakal nahi. Isi liye 'sahi' tag use karna zaroori hai, na ke koi bhi milta julta tag.",
          "tryItYourself": "Build a small 'About Me' section: an h2 heading, a paragraph about yourself, and an unordered list of 3 hobbies.",
          "tryItYourselfUr": "Ek chota 'About Me' section banao: h2 heading, apne baare mein ek paragraph, aur 3 hobbies ki unordered list.",
          "analogyTitle": "Cricket Team Ki Batting Lineup",
          "analogyEn": "A <ul> list is like a cricket team's batting order — each <li> is one player, and just like the lineup, the order you write them in is exactly the order they'll appear on the field (or screen).",
          "analogyUr": "<ul> list bilkul cricket team ki batting lineup jaisi hai — har <li> ek player hai, aur jis order mein tum unhe likhte ho, wohi order field (ya screen) par nazar aata hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Recipe Page",
        "titleUrdu": "Recipe Page",
        "description": "A page listing your favourite recipe with ingredients, steps and a photo.",
        "requirements": [
          "Use headings, lists, and an image",
          "Correct, semantic tag choices",
          "No CSS needed yet"
        ]
      }
    },
    {
      "id": "web-m3",
      "slug": "css-styling-layout",
      "title": "CSS Styling & Layout",
      "titleUrdu": "CSS Styling Aur Layout",
      "description": "Bring color, spacing and personality to your HTML.",
      "topics": [
        "Selectors",
        "Box model",
        "Colors & typography",
        "Positioning basics"
      ],
      "lessons": [
        {
          "id": "web-3-1",
          "slug": "box-model",
          "title": "The CSS Box Model",
          "titleUrdu": "CSS Box Model",
          "estMinutes": 25,
          "summaryEn": "Every element is a box: content, padding, border, margin.",
          "summaryUr": "Har element ek box hai: content, padding, border, margin.",
          "explanationEn": "Layout bugs often come from misunderstanding the box model. Content is the text/image. Padding is inner space. Border wraps it. Margin is outer space between elements. box-sizing: border-box makes width include padding and border — usually what you want.",
          "explanationUr": "Layout bugs aksar box model na samajhne se aati hain. Content text/image hai. Padding andar ki space. Border uske around. Margin elements ke darmiyan bahar ki space. box-sizing: border-box width mein padding aur border shamil karta hai — aksar yahi chahiye hota hai.",
          "codeExample": {
            "language": "css",
            "code": "* {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 300px;\n  padding: 16px;\n  border: 2px solid #D6336C;\n  margin: 12px;\n}"
          },
          "lineByLine": [
            {
              "line": "box-sizing: border-box",
              "explanationEn": "Width includes padding + border, so layouts are predictable.",
              "explanationUr": "Width mein padding + border shamil — layouts predictable."
            },
            {
              "line": "padding: 16px",
              "explanationEn": "Space inside the border, around the content.",
              "explanationUr": "Border ke andar, content ke around space."
            }
          ],
          "whyItWorksEn": "The browser calculates used width from these layers. border-box aligns with how designers think about total size.",
          "whyItWorksUr": "Browser in layers se used width nikalta hai. border-box designers ke total size sochne ke andaz se match karta hai.",
          "tryItYourself": "Create two boxes with same width but different padding and compare their visual size with and without border-box.",
          "tryItYourselfUr": "Same width ke do boxes alag padding se banao aur border-box ke sath/baghair visual size compare karo.",
          "analogyTitle": "Photo Frame",
          "analogyEn": "Content is the photo. Padding is the mat. Border is the frame. Margin is the gap from other frames on the wall.",
          "analogyUr": "Content photo hai. Padding mat hai. Border frame hai. Margin deewar pe doosre frames se faasla hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Style the Recipe Page",
        "titleUrdu": "Recipe Page Ko Style Karo",
        "description": "Apply colors, fonts, spacing to your earlier recipe page.",
        "requirements": [
          "Custom color palette",
          "Consistent spacing using the box model",
          "Readable typography choices"
        ]
      }
    },
    {
      "id": "web-m4",
      "slug": "responsive-flexbox-grid",
      "title": "Responsive Design & Flexbox/Grid",
      "titleUrdu": "Responsive Design Aur Flexbox/Grid",
      "description": "Make your pages look great on phones, tablets and desktops.",
      "topics": [
        "Flexbox",
        "CSS Grid",
        "Media queries",
        "Mobile-first thinking"
      ],
      "lessons": [
        {
          "id": "web-4-1",
          "slug": "flexbox-basics",
          "title": "Flexbox in Plain Terms",
          "titleUrdu": "Flexbox Aasan Alfaaz Mein",
          "estMinutes": 30,
          "summaryEn": "Flexbox aligns items in a row or column with powerful spacing controls.",
          "summaryUr": "Flexbox items ko row ya column mein align karta hai powerful spacing ke sath.",
          "explanationEn": "Set display: flex on a parent. Children become flex items. justify-content controls main axis spacing; align-items controls cross axis. flex-wrap allows wrapping. This solves most horizontal/vertical centering problems.",
          "explanationUr": "Parent pe display: flex. Children flex items ban jate hain. justify-content main axis spacing; align-items cross axis. flex-wrap wrapping allow karta hai. Horizontal/vertical centering ki zyada problems yahan solve hoti hain.",
          "codeExample": {
            "language": "css",
            "code": ".row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n\n.row.wrap {\n  flex-wrap: wrap;\n}"
          },
          "lineByLine": [
            {
              "line": "display: flex",
              "explanationEn": "Turns the container into a flex formatting context.",
              "explanationUr": "Container ko flex formatting context banata hai."
            },
            {
              "line": "justify-content: space-between",
              "explanationEn": "Distributes items with space between them on the main axis.",
              "explanationUr": "Main axis pe items ke darmiyan space distribute karta hai."
            },
            {
              "line": "align-items: center",
              "explanationEn": "Centers items on the cross axis.",
              "explanationUr": "Cross axis pe items center karta hai."
            }
          ],
          "whyItWorksEn": "Flex calculates free space and distributes it according to justify/align rules in one layout pass.",
          "whyItWorksUr": "Flex free space calculate karke justify/align rules ke mutabiq ek layout pass mein distribute karta hai.",
          "tryItYourself": "Build a navbar with logo on the left and links on the right using flexbox.",
          "tryItYourselfUr": "Flexbox se navbar banao — left pe logo, right pe links.",
          "analogyTitle": "Train Ki Berths",
          "analogyEn": "Flexbox is arranging passengers in a train coach — you decide row vs column and how to spread them out.",
          "analogyUr": "Flexbox train coach mein passengers arrange karna hai — row ya column aur unhe kaise failana hai aap decide karte ho.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Responsive Navbar",
        "titleUrdu": "Responsive Navbar",
        "description": "A navbar that collapses into a mobile-friendly layout on small screens.",
        "requirements": [
          "Flexbox-based layout",
          "Media query for mobile breakpoint",
          "Looks good at 375px and 1440px wide"
        ]
      }
    },
    {
      "id": "web-m5",
      "slug": "js-for-interactivity",
      "title": "JavaScript Basics for Interactivity",
      "titleUrdu": "Interactivity Ke Liye JavaScript Basics",
      "description": "Add life to your pages — buttons that do things, forms that respond.",
      "topics": [
        "Variables & functions",
        "Selecting elements",
        "Event listeners",
        "Simple DOM updates"
      ],
      "lessons": [
        {
          "id": "web-5-1",
          "slug": "first-interactive-script",
          "title": "Your First Interactive Script",
          "titleUrdu": "Apna Pehla Interactive Script",
          "estMinutes": 25,
          "summaryEn": "Connect HTML buttons to JavaScript and change the page live.",
          "summaryUr": "HTML buttons ko JavaScript se jodo aur page live change karo.",
          "explanationEn": "Put a script at the end of body (or use defer). Select elements, listen for events, update text or styles. This is the bridge from static pages to interactive ones.",
          "explanationUr": "Script body ke end pe rakho (ya defer). Elements select karo, events suno, text ya styles update karo. Static se interactive pages ka bridge yahi hai.",
          "codeExample": {
            "language": "html",
            "code": "<button id=\"btn\">Rang Badlo</button>\n<p id=\"msg\">Hello</p>\n<script>\n  const btn = document.getElementById(\"btn\");\n  const msg = document.getElementById(\"msg\");\n  btn.addEventListener(\"click\", () => {\n    msg.textContent = \"Shabash!\";\n    msg.style.color = \"#D6336C\";\n  });\n</script>"
          },
          "lineByLine": [
            {
              "line": "getElementById(\"btn\")",
              "explanationEn": "Finds the element with that id.",
              "explanationUr": "Us id wala element dhoondhta hai."
            },
            {
              "line": "msg.style.color = ...",
              "explanationEn": "Changes CSS from JavaScript.",
              "explanationUr": "JavaScript se CSS change karta hai."
            }
          ],
          "whyItWorksEn": "The DOM API exposes page structure to JS. Event-driven updates avoid full page reloads.",
          "whyItWorksUr": "DOM API page structure ko JS ko deta hai. Event-driven updates full page reload se bachati hain.",
          "tryItYourself": "Add two buttons that increase and decrease a number shown on the page.",
          "tryItYourselfUr": "Do buttons add karo jo page pe dikhe number ko increase/decrease karein.",
          "analogyTitle": "Remote Control",
          "analogyEn": "HTML is the TV. JavaScript is the remote — buttons trigger actions on the screen without rebuilding the TV.",
          "analogyUr": "HTML TV hai. JavaScript remote hai — buttons screen pe actions trigger karte hain bina TV dobara banaye.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Dark Mode Toggle",
        "titleUrdu": "Dark Mode Toggle",
        "description": "A button that switches your recipe page between light and dark themes.",
        "requirements": [
          "Toggle a CSS class via JS",
          "Remember choice with localStorage",
          "Smooth visual transition"
        ]
      }
    },
    {
      "id": "web-m6",
      "slug": "capstone-first-website",
      "title": "Build Your First Website (Capstone)",
      "titleUrdu": "Apni Pehli Website Banao (Capstone)",
      "description": "Combine everything into one polished, multi-section personal website.",
      "topics": [
        "Planning a layout",
        "Combining HTML/CSS/JS",
        "Polish & final touches"
      ],
      "lessons": [
        {
          "id": "web-6-1",
          "slug": "planning-a-website",
          "title": "Planning Before You Code",
          "titleUrdu": "Code Se Pehle Planning",
          "estMinutes": 20,
          "summaryEn": "Sketch structure, content and flow before writing HTML — it saves hours.",
          "summaryUr": "HTML likhne se pehle structure, content aur flow sketch karo — hours bachti hain.",
          "explanationEn": "Decide pages, sections, and user goals first. Paper wireframes beat jumping into code. List content blocks, then components, then styles. Good planning reduces rewrites.",
          "explanationUr": "Pehle pages, sections aur user goals decide karo. Paper wireframes code mein koodne se behtar hain. Content blocks list karo, phir components, phir styles. Achhi planning rewrites kam karti hai.",
          "codeExample": {
            "language": "text",
            "code": "Plan checklist:\n1. User ka goal kya hai?\n2. Kaunse pages chahiye?\n3. Har page ke sections?\n4. Mobile pe pehle kya dikhe?\n5. Forms / buttons kahan?\n6. Content ready hai ya lorem?"
          },
          "lineByLine": [
            {
              "line": "User ka goal",
              "explanationEn": "Every page should help a clear user outcome.",
              "explanationUr": "Har page kisi clear user outcome mein help kare."
            },
            {
              "line": "Mobile pehle",
              "explanationEn": "Most Pakistani users are on phones — design mobile-first.",
              "explanationUr": "Zyada Pakistani users phone pe hain — mobile-first design."
            }
          ],
          "whyItWorksEn": "Planning externalizes decisions so coding becomes execution, not constant redesign.",
          "whyItWorksUr": "Planning decisions bahar nikal deti hai taake coding execution ban jaye, constant redesign nahi.",
          "tryItYourself": "On paper, wireframe a 3-section landing page for a local tuition service.",
          "tryItYourselfUr": "Paper pe local tuition service ke liye 3-section landing page wireframe banao.",
          "analogyTitle": "Ghar Se Pehle Naqsha",
          "analogyEn": "Building without a plan is starting construction without a blueprint — expensive mistakes.",
          "analogyUr": "Bina plan ke banana naqsha ke baghair construction shuru karne jaisa hai — mehangi ghaltiyan.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Personal Website Capstone",
        "titleUrdu": "Personal Website Capstone",
        "description": "A multi-section personal site: hero, about, projects, contact — fully responsive.",
        "requirements": [
          "At least 4 sections",
          "Fully responsive",
          "One interactive JS feature"
        ]
      }
    }
  ],
  "dailyTasks": [
    {
      "id": "daily-basics-1",
      "title": "Recreate a simple webpage section",
      "titleUrdu": "Ek simple webpage section dobara banao",
      "description": "Pick any website you like and recreate one section using HTML/CSS."
    }
  ]
};

export default webBasicsPath;
