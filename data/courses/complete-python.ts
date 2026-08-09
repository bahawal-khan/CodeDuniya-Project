import type { LearningPath } from "../types";

const pythonPath: LearningPath = {
  "id": "path-python",
  "slug": "complete-python",
  "title": "Complete Python",
  "titleUrdu": "Complete Python",
  "description": "From your very first print() to building real command-line tools and small apps.",
  "descriptionUr": "Apne pehle print() se le kar real command-line tools aur choti apps banane tak.",
  "theme": "saffron",
  "icon": "Code2",
  "level": "Beginner → Intermediate",
  "estWeeks": 10,
  "modules": [
    {
      "id": "py-m1",
      "slug": "python-basics",
      "title": "Python Basics",
      "titleUrdu": "Python Ki Bunyaad",
      "description": "Syntax, variables, input/output — your very first steps in Python.",
      "topics": [
        "Syntax & indentation",
        "Variables",
        "print() & input()",
        "Basic data types"
      ],
      "lessons": [
        {
          "id": "py-1-1",
          "slug": "variables-print-statement",
          "title": "Variables & the print() Statement",
          "titleUrdu": "Variables Aur print() Statement",
          "estMinutes": 15,
          "summaryEn": "Your very first Python concepts: storing values in variables and displaying output.",
          "summaryUr": "Python ke sab se pehle concepts: variables mein values store karna aur output dikhana.",
          "explanationEn": "A variable in Python is simply a name that points to a value in memory. Unlike some languages, you don't need to declare a type — just write name = value and Python figures out the rest. print() is how you show something on the screen; it's usually the very first function every programmer learns, and you'll use it constantly to debug and understand what your code is doing.",
          "explanationUr": "Python mein variable sirf ek naam hota hai jo memory mein kisi value ki taraf ishara karta hai. Kuch aur languages ke bar-aks, tumhe type declare karne ki zaroorat nahi — bas naam = value likho aur Python baaqi khud samajh leta hai. print() se hum screen par kuch dikhate hain; yeh aksar har programmer ka sab se pehla seekha hua function hota hai, aur tum isay hamesha apna code samajhne aur debug karne ke liye use karo ge.",
          "codeExample": {
            "language": "python",
            "code": "name = \"Ayesha\"\ncity = \"Lahore\"\nage = 19\n\nprint(\"Naam:\", name)\nprint(\"Shehar:\", city)\nprint(\"Age:\", age)"
          },
          "lineByLine": [
            {
              "line": "name = \"Ayesha\"",
              "explanationEn": "Creates a variable called name and stores the text 'Ayesha' in it.",
              "explanationUr": "Naam ka ek variable banata hai aur usmein 'Ayesha' text store karta hai."
            },
            {
              "line": "age = 19",
              "explanationEn": "Creates a variable holding a whole number (integer), no quotes needed for numbers.",
              "explanationUr": "Ek variable banata hai jisme poora number (integer) hai, numbers ke liye quotes ki zaroorat nahi."
            },
            {
              "line": "print(\"Naam:\", name)",
              "explanationEn": "Prints the label 'Naam:' followed by the value stored in the name variable, separated by a space automatically.",
              "explanationUr": "'Naam:' label print karta hai, uske baad name variable ki value — dono ke darmiyan automatic space aa jata hai."
            }
          ],
          "whyItWorksEn": "Python is an interpreted language — it reads and runs your code line by line, top to bottom. When it sees name = \"Ayesha\", it stores that string in memory and links the label 'name' to it, so every time you refer to name afterward, Python fetches that same value.",
          "whyItWorksUr": "Python ek interpreted language hai — yeh code ko ek ek line karke, upar se neeche parh kar chalata hai. Jab yeh name = \"Ayesha\" dekhta hai, to us string ko memory mein store kar deta hai aur 'name' label ko us se jorr deta hai, is liye jab bhi baad mein name likha jaye, Python wohi value nikal kar deta hai.",
          "tryItYourself": "Create three variables about yourself: your name, your city and your favourite subject. Print all three in one nicely formatted sentence.",
          "tryItYourselfUr": "Apne baare mein teen variables banao: naam, shehar aur favourite subject. In teenon ko ek acha sa jumla bana kar print karo.",
          "analogyTitle": "Suitcase Par Naam Ka Tag",
          "analogyEn": "A variable is like putting a name tag on your suitcase at the airport — the tag (variable name) doesn't change, but you can always open the suitcase and swap what's inside.",
          "analogyUr": "Variable airport par suitcase ke sath naam ka tag lagane jaisa hai — tag (variable ka naam) wahi rehta hai, lekin suitcase khol kar andar ka saman kabhi bhi badla ja sakta hai.",
          "hasFullContent": true,
          "realLifeExampleEn": "Every app that greets you by name (a banking app, a food delivery app) stored your name in a variable somewhere and used print()-like logic to display 'Welcome, Ayesha!'",
          "realLifeExampleUr": "Har app jo tumhe naam se greet karti hai (banking app, food delivery app) ne kahin na kahin tumhara naam variable mein store kiya aur print()-jaisi logic se 'Welcome, Ayesha!' dikhaya.",
          "commonMistakesEn": "Forgetting quotes around text (city = Lahore instead of city = \"Lahore\") causes a NameError since Python thinks Lahore is a variable. Also mixing tabs and spaces for indentation — Python cares about this even outside if/loops in some editors.",
          "commonMistakesUr": "Text ke around quotes bhoolna (city = Lahore instead of city = \"Lahore\") NameError deta hai kyun ke Python Lahore ko variable samajhta hai. Tabs aur spaces ko indentation ke liye mix karna bhi ghalti hai — Python isay kabhi kabhi if/loops ke bahar bhi notice karta hai.",
          "dryRun": [
            { "stepEn": "name = \"Ayesha\" — Python creates a string object \"Ayesha\" and points the name label at it.", "stepUr": "name = \"Ayesha\" — Python ek string object \"Ayesha\" banata hai aur name label usay point karta hai." },
            { "stepEn": "age = 19 — Python creates an integer object 19 and points age at it.", "stepUr": "age = 19 — Python ek integer object 19 banata hai aur age usay point karta hai." },
            { "stepEn": "print(\"Naam:\", name) — Python evaluates name (gets \"Ayesha\"), then prints both values separated by a space.", "stepUr": "print(\"Naam:\", name) — Python name ko evaluate karta hai (\"Ayesha\" milta hai), phir dono values space se separate karke print karta hai." }
          ],
          "cheatSheetEn": "name = value → creates/updates a variable · print(a, b) → prints a and b separated by a space · strings need \"quotes\" · numbers don't · type(x) tells you the type",
          "cheatSheetUr": "name = value → variable banata/update karta hai · print(a, b) → a aur b space se separate karke print karta hai · strings ko \"quotes\" chahiye · numbers ko nahi · type(x) se type pata chalta hai",
          "topicTags": ["python.variables", "python.print"],
          "quiz": [
            {
              "question": "What will print(\"Age:\", 19) output?",
              "questionUr": "print(\"Age:\", 19) kya output dega?",
              "options": ["Age:19", "Age: 19", "\"Age: 19\"", "Error"],
              "correctIndex": 1,
              "explanation": "print() automatically separates comma-separated arguments with a single space: Age: 19."
            },
            {
              "question": "Why does city = Lahore (no quotes) cause an error?",
              "questionUr": "city = Lahore (bina quotes) error kyun deta hai?",
              "options": ["Lahore is too long", "Python treats Lahore as a variable name, which doesn't exist", "City names need capital letters", "It doesn't cause an error"],
              "correctIndex": 1,
              "explanation": "Without quotes, Python looks for a variable named Lahore instead of treating it as text."
            }
          ],
          "codingChallenge": {
            "promptEn": "Create three variables about yourself (name, city, favourite_subject) and print them as one formatted sentence using print().",
            "promptUr": "Apne baare mein teen variables banao (name, city, favourite_subject) aur print() se ek formatted sentence banao.",
            "starterCode": "# create your variables here\n\nprint(/* your sentence here */)",
            "language": "python",
            "hints": [
              "print() can take multiple comma-separated values — it joins them with spaces automatically.",
              "Text values need quotes; numbers don't."
            ]
          }
        }
      ],
      "miniProject": {
        "title": "Simple Bio Generator",
        "titleUrdu": "Simple Bio Generator",
        "description": "Ask the user for their name, age and hobby, then print a short bio.",
        "requirements": [
          "Use input() for three pieces of info",
          "Combine them into a sentence",
          "Print a formatted bio"
        ]
      }
    },
    {
      "id": "py-m2",
      "slug": "control-flow",
      "title": "Control Flow",
      "titleUrdu": "Control Flow",
      "description": "Make decisions and repeat actions with if/else and loops.",
      "topics": [
        "if / elif / else",
        "for loops",
        "while loops",
        "break & continue"
      ],
      "lessons": [
        {
          "id": "py-2-1",
          "slug": "if-else",
          "title": "Making Decisions with if/else",
          "titleUrdu": "if/else Se Faislay Karna",
          "estMinutes": 20,
          "summaryEn": "Programs need to make decisions. if/else lets your code choose different paths based on conditions.",
          "summaryUr": "Programs ko faisle lene hote hain. if/else conditions ke basis pe alag paths choose karne deta hai.",
          "explanationEn": "Real programs react to situations. if checks a condition; when it's true, that block runs. else runs when it's false. You can chain elif for multiple cases. Indentation (spaces) defines which lines belong to the block — this is critical in Python.",
          "explanationUr": "Asal programs situations pe react karte hain. if condition check karta hai; true hone pe woh block chalta hai. else false hone pe chalta hai. Multiple cases ke liye elif chain kar sakte ho. Indentation (spaces) batati hai kaunsi lines block ki hain — Python mein yeh critical hai.",
          "codeExample": {
            "language": "python",
            "code": "marks = 75\n\nif marks >= 90:\n    print(\"A+ — Shabash!\")\nelif marks >= 60:\n    print(\"Pass — achha kiya\")\nelse:\n    print(\"Fail — dobara try karo\")"
          },
          "lineByLine": [
            {
              "line": "if marks >= 90:",
              "explanationEn": "Checks if marks are 90 or above. The colon starts the block.",
              "explanationUr": "Check karta hai marks 90 ya us se zyada hain. Colon block start karta hai."
            },
            {
              "line": "elif marks >= 60:",
              "explanationEn": "Checked only if the first if was false. Handles the middle case.",
              "explanationUr": "Sirf tab check hota hai jab pehla if false ho. Beech wala case handle karta hai."
            },
            {
              "line": "else:",
              "explanationEn": "Runs when none of the above conditions were true.",
              "explanationUr": "Jab upar ki koi condition true na ho to yeh chalta hai."
            }
          ],
          "whyItWorksEn": "Python evaluates conditions top to bottom and runs the first matching block, then skips the rest. Clear conditions prevent messy nested logic.",
          "whyItWorksUr": "Python conditions upar se neeche check karta hai aur pehla matching block chala kar baaki skip kar deta hai. Clear conditions nested logic ko messy hone se bachati hain.",
          "tryItYourself": "Write a program that asks for temperature and prints whether to take an umbrella, wear a jacket, or enjoy the sun.",
          "tryItYourselfUr": "Aisa program likho jo temperature le aur bataye chatri leni hai, jacket pehenni hai, ya dhoop enjoy karni hai.",
          "analogyTitle": "Barish Ho To Chatri",
          "analogyEn": "if/else is your morning routine: if it's raining, take an umbrella; else wear sunglasses. The condition decides the action.",
          "analogyUr": "if/else subah ki routine jaisi hai: agar barish ho rahi hai to chatri le lo, warna dhoop ka chashma. Condition hi action decide karti hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Number Guessing Game",
        "titleUrdu": "Number Guessing Game",
        "description": "The computer picks a random number; the user guesses until correct.",
        "requirements": [
          "Use random module",
          "Loop until correct guess",
          "Give hints (higher/lower)"
        ]
      }
    },
    {
      "id": "py-m3",
      "slug": "data-structures",
      "title": "Data Structures",
      "titleUrdu": "Data Structures",
      "description": "Lists, dictionaries, tuples and sets — how Python organizes data.",
      "topics": [
        "Lists",
        "Dictionaries",
        "Tuples",
        "Sets"
      ],
      "lessons": [
        {
          "id": "py-3-1",
          "slug": "dictionaries",
          "title": "Dictionaries: Key-Value Pairs",
          "titleUrdu": "Dictionaries: Key-Value Pairs",
          "estMinutes": 25,
          "summaryEn": "Dictionaries store data as key → value pairs for fast lookup by name.",
          "summaryUr": "Dictionaries data ko key → value pairs mein store karti hain taake name se fast lookup ho.",
          "explanationEn": "Lists use positions (0, 1, 2). Dictionaries use keys (\"name\", \"age\"). Perfect for records like a student profile. Lookup by key is very fast.",
          "explanationUr": "Lists positions use karti hain (0, 1, 2). Dictionaries keys use karti hain (\"name\", \"age\"). Student profile jaisi records ke liye perfect. Key se lookup bohot tez hai.",
          "codeExample": {
            "language": "python",
            "code": "student = {\n    \"name\": \"Ali\",\n    \"age\": 21,\n    \"city\": \"Lahore\"\n}\n\nprint(student[\"name\"])\nstudent[\"age\"] = 22\nstudent[\"course\"] = \"Python\"\nprint(student.keys())\nprint(student.get(\"grade\", \"N/A\"))"
          },
          "lineByLine": [
            {
              "line": "student[\"name\"]",
              "explanationEn": "Reads the value for key name.",
              "explanationUr": "name key ki value padhta hai."
            },
            {
              "line": "student[\"course\"] = \"Python\"",
              "explanationEn": "Adds a new key-value pair.",
              "explanationUr": "Naya key-value pair add karta hai."
            },
            {
              "line": "student.get(\"grade\", \"N/A\")",
              "explanationEn": "Safe read — returns default if key is missing.",
              "explanationUr": "Safe read — key na ho to default return karta hai."
            }
          ],
          "whyItWorksEn": "Dictionaries use hash tables internally, so average lookup is O(1) — does not slow down as the dict grows.",
          "whyItWorksUr": "Dictionaries andar hash tables use karti hain, is liye average lookup O(1) hai — dict badhne se slow nahi hoti.",
          "tryItYourself": "Make a dict of 3 cities and their famous foods. Print each city with its food using a loop.",
          "tryItYourselfUr": "3 cities aur unke famous foods ka dict banao. Loop se har city ke sath food print karo.",
          "analogyTitle": "ID Card Ki Fields",
          "analogyEn": "A dictionary is an ID card: each field has a label (key) and a value — name, roll number, photo.",
          "analogyUr": "Dictionary ID card jaisi hai: har field ka label (key) aur value — naam, roll number, photo.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Contact Book",
        "titleUrdu": "Contact Book",
        "description": "A command-line contact manager using a dictionary of dictionaries.",
        "requirements": [
          "Add, view, delete contacts",
          "Store name, phone, email",
          "Search by name"
        ]
      }
    },
    {
      "id": "py-m4",
      "slug": "functions-modules",
      "title": "Functions & Modules",
      "titleUrdu": "Functions Aur Modules",
      "description": "Write reusable code and organize it across files.",
      "topics": [
        "Defining functions",
        "Parameters & return values",
        "Importing modules",
        "Your own modules"
      ],
      "lessons": [
        {
          "id": "py-4-1",
          "slug": "defining-functions",
          "title": "Writing Your Own Functions",
          "titleUrdu": "Apne Functions Likhna",
          "estMinutes": 25,
          "summaryEn": "Functions package reusable logic. Write once, call many times with different inputs.",
          "summaryUr": "Functions reusable logic ko package karte hain. Ek dafa likho, alag inputs ke sath kai baar call karo.",
          "explanationEn": "When the same steps repeat, put them in a function. Functions take inputs (parameters), do work, and can return a result. This keeps code short, readable, and easy to test.",
          "explanationUr": "Jab wahi steps dobara dobara chahiye hon, unhe function mein daalo. Functions inputs (parameters) lete hain, kaam karte hain, aur result return kar sakte hain. Code chhota, readable aur testable rehta hai.",
          "codeExample": {
            "language": "python",
            "code": "def greet(name):\n    return f\"Assalam-o-Alaikum, {name}!\"\n\ndef average(a, b):\n    return (a + b) / 2\n\nprint(greet(\"Ali\"))\nprint(\"Average:\", average(80, 90))"
          },
          "lineByLine": [
            {
              "line": "def greet(name):",
              "explanationEn": "Defines a function named greet that accepts one parameter: name.",
              "explanationUr": "greet naam ka function define karta hai jo ek parameter name leta hai."
            },
            {
              "line": "return f\"...\"",
              "explanationEn": "Sends a value back to the caller. f-string inserts the variable into the text.",
              "explanationUr": "Caller ko value wapas bhejta hai. f-string variable ko text mein insert karti hai."
            },
            {
              "line": "greet(\"Ali\")",
              "explanationEn": "Calls the function with the argument \"Ali\".",
              "explanationUr": "Function ko argument \"Ali\" ke sath call karta hai."
            }
          ],
          "whyItWorksEn": "Functions create their own scope. Variables inside don't leak out unless returned. This isolation prevents bugs in larger programs.",
          "whyItWorksUr": "Functions apna scope banate hain. Andar ke variables bahar leak nahi hote jab tak return na kiye jayein. Yeh isolation bari programs mein bugs kam karta hai.",
          "tryItYourself": "Write a function is_even(n) that returns True if n is even, False otherwise. Test it with 4 and 7.",
          "tryItYourselfUr": "is_even(n) function likho jo even pe True, odd pe False return kare. 4 aur 7 se test karo.",
          "analogyTitle": "Recipe Card Dobara Use Karna",
          "analogyEn": "A function is a recipe card: write the method once, give different ingredients each time, get a consistent dish.",
          "analogyUr": "Function recipe card hai: method ek dafa likho, har baar alag ingredients do, consistent result milta hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Simple Calculator Module",
        "titleUrdu": "Simple Calculator Module",
        "description": "Build a calculator.py module with add/subtract/multiply/divide functions and import it.",
        "requirements": [
          "4 separate functions",
          "Handle divide-by-zero",
          "Import & use from another file"
        ]
      }
    },
    {
      "id": "py-m5",
      "slug": "oop-python",
      "title": "Object-Oriented Programming",
      "titleUrdu": "Object-Oriented Programming",
      "description": "Model real-world things as classes and objects.",
      "topics": [
        "Classes & objects",
        "__init__ & self",
        "Inheritance",
        "Encapsulation basics"
      ],
      "lessons": [
        {
          "id": "py-5-1",
          "slug": "first-class",
          "title": "Your First Python Class",
          "titleUrdu": "Apni Pehli Python Class",
          "estMinutes": 30,
          "summaryEn": "Classes let you bundle data and behavior together into objects.",
          "summaryUr": "Classes data aur behavior ko objects mein bundle karti hain.",
          "explanationEn": "Object-oriented programming models real things. A class is the blueprint; an object is one instance. Methods are functions that belong to the object and can use its data (self).",
          "explanationUr": "Object-oriented programming asli cheezon ko model karti hai. Class blueprint hai; object ek instance hai. Methods woh functions hain jo object se belong karti hain aur uska data (self) use kar sakti hain.",
          "codeExample": {
            "language": "python",
            "code": "class Student:\n    def __init__(self, name, marks):\n        self.name = name\n        self.marks = marks\n\n    def is_pass(self):\n        return self.marks >= 60\n\n    def intro(self):\n        return f\"Main {self.name} hoon, marks {self.marks}\"\n\ns = Student(\"Sara\", 85)\nprint(s.intro())\nprint(\"Pass?\", s.is_pass())"
          },
          "lineByLine": [
            {
              "line": "def __init__(self, name, marks)",
              "explanationEn": "Constructor — runs when you create a new Student.",
              "explanationUr": "Constructor — jab naya Student banate ho to chalta hai."
            },
            {
              "line": "self.name = name",
              "explanationEn": "Stores name on this particular object.",
              "explanationUr": "Is particular object pe name store karta hai."
            },
            {
              "line": "Student(\"Sara\", 85)",
              "explanationEn": "Creates one instance of the class.",
              "explanationUr": "Class ka ek instance banata hai."
            }
          ],
          "whyItWorksEn": "self always refers to the current instance. Each object has its own copy of the data defined in __init__.",
          "whyItWorksUr": "self hamesha current instance ko refer karta hai. Har object ke paas __init__ mein define data ki apni copy hoti hai.",
          "tryItYourself": "Create a BankAccount class with deposit and balance methods.",
          "tryItYourselfUr": "BankAccount class banao deposit aur balance methods ke sath.",
          "analogyTitle": "Ghar Ka Naqsha vs Asli Ghar",
          "analogyEn": "The class is the architect's blueprint. Each object is a real house built from that blueprint with its own address and furniture.",
          "analogyUr": "Class architect ka naqsha hai. Har object us naqshe se bana asli ghar hai — apna address aur furniture ke sath.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Library Management System",
        "titleUrdu": "Library Management System",
        "description": "Model Book and Library classes with borrow/return functionality.",
        "requirements": [
          "Book & Library classes",
          "Borrow/return methods",
          "Track available copies"
        ]
      }
    },
    {
      "id": "py-m6",
      "slug": "file-handling-exceptions",
      "title": "File Handling & Exceptions",
      "titleUrdu": "File Handling Aur Exceptions",
      "description": "Read/write files and handle errors gracefully.",
      "topics": [
        "Reading & writing files",
        "try/except",
        "Custom exceptions"
      ],
      "lessons": [
        {
          "id": "py-6-1",
          "slug": "try-except",
          "title": "Handling Errors with try/except",
          "titleUrdu": "try/except Se Errors Handle Karna",
          "estMinutes": 25,
          "summaryEn": "try/except prevents your program from crashing when something goes wrong.",
          "summaryUr": "try/except program ko crash hone se bachata hai jab kuch galat ho.",
          "explanationEn": "Errors happen — bad input, missing files, network issues. try runs risky code. except catches specific errors so you can recover or show a friendly message instead of a traceback.",
          "explanationUr": "Errors hoti hain — galat input, missing files, network issues. try risky code chalata hai. except specific errors pakadti hai taake aap recover kar saken ya friendly message dikha saken, traceback ki jagah.",
          "codeExample": {
            "language": "python",
            "code": "def divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return \"Yar zero se divide nahi hota!\"\n    except TypeError:\n        return \"Numbers do, text nahi.\"\n\nprint(divide(10, 2))\nprint(divide(10, 0))"
          },
          "lineByLine": [
            {
              "line": "try:",
              "explanationEn": "Starts a block where errors may occur.",
              "explanationUr": "Us block ko start karta hai jahan error ho sakti hai."
            },
            {
              "line": "except ZeroDivisionError:",
              "explanationEn": "Runs only if division by zero happened.",
              "explanationUr": "Sirf tab chalta hai jab zero se divide hua ho."
            }
          ],
          "whyItWorksEn": "Python looks for a matching except clause up the call stack. Uncaught errors terminate the program.",
          "whyItWorksUr": "Python call stack pe matching except dhoondhta hai. Uncaught errors program band kar deti hain.",
          "tryItYourself": "Ask user for a filename, try to open it, and print a friendly message if it does not exist.",
          "tryItYourselfUr": "User se filename poocho, open karne ki koshish karo, na mile to friendly message print karo.",
          "analogyTitle": "Lock Aur Spare Key",
          "analogyEn": "An unhandled error is forcing a lock without a key — it jams. try/except is carrying a spare key so you can recover.",
          "analogyUr": "Unhandled error lock ko bina key ke kholne jaisi hai — atak jata hai. try/except spare key rakhna hai taake sambhal sako.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Expense Tracker (File-based)",
        "titleUrdu": "Expense Tracker (File-based)",
        "description": "Save expenses to a text/CSV file and read a summary report.",
        "requirements": [
          "Append new expenses to a file",
          "Read & summarize by category",
          "Handle missing file gracefully"
        ]
      }
    },
    {
      "id": "py-m7",
      "slug": "working-with-libraries",
      "title": "Working with Libraries",
      "titleUrdu": "Libraries Ke Sath Kaam",
      "description": "Use Python's ecosystem — requests, datetime and more.",
      "topics": [
        "pip & virtual environments",
        "requests library",
        "datetime module",
        "JSON handling"
      ],
      "lessons": [
        {
          "id": "py-7-1",
          "slug": "requests-library",
          "title": "Calling APIs with requests",
          "titleUrdu": "requests Se APIs Call Karna",
          "estMinutes": 25,
          "summaryEn": "The requests library makes HTTP calls simple so you can fetch data from APIs.",
          "summaryUr": "requests library HTTP calls asaan banati hai taake APIs se data le sako.",
          "explanationEn": "APIs expose data over HTTP. requests.get(url) downloads a response. response.json() parses JSON into Python dicts/lists. Always check status codes and handle failures.",
          "explanationUr": "APIs HTTP pe data deti hain. requests.get(url) response download karta hai. response.json() JSON ko Python dicts/lists mein badalta hai. Status codes check karo aur failures handle karo.",
          "codeExample": {
            "language": "python",
            "code": "import requests\n\nurl = \"https://api.github.com/users/octocat\"\nres = requests.get(url, timeout=10)\n\nif res.status_code == 200:\n    data = res.json()\n    print(\"Name:\", data.get(\"name\"))\n    print(\"Repos:\", data.get(\"public_repos\"))\nelse:\n    print(\"Error:\", res.status_code)"
          },
          "lineByLine": [
            {
              "line": "requests.get(url, timeout=10)",
              "explanationEn": "Sends GET request; timeout avoids hanging forever.",
              "explanationUr": "GET request bhejta hai; timeout forever hang hone se bachata hai."
            },
            {
              "line": "res.json()",
              "explanationEn": "Parses JSON body into a Python object.",
              "explanationUr": "JSON body ko Python object mein parse karta hai."
            }
          ],
          "whyItWorksEn": "HTTP is text over the network. requests handles connections, headers and decoding so you focus on the data.",
          "whyItWorksUr": "HTTP network pe text hai. requests connections, headers aur decoding handle karti hai taake aap data pe focus karo.",
          "tryItYourself": "Call a public API of your choice and print one field from the JSON.",
          "tryItYourselfUr": "Koi public API call karo aur JSON se ek field print karo.",
          "analogyTitle": "Restaurant Order",
          "analogyEn": "requests is the waiter: you place an order (URL), kitchen (server) prepares, plate (JSON) comes back to your table.",
          "analogyUr": "requests waiter hai: aap order dete ho (URL), kitchen (server) taiyar karta hai, plate (JSON) table pe aa jati hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Weather CLI Tool",
        "titleUrdu": "Weather CLI Tool",
        "description": "A command-line tool that fetches and displays current weather for a city.",
        "requirements": [
          "Call a public weather API",
          "Parse JSON response",
          "Nicely formatted CLI output"
        ]
      }
    },
    {
      "id": "py-m8",
      "slug": "python-mini-projects",
      "title": "Mini Projects & Practice",
      "titleUrdu": "Mini Projects Aur Practice",
      "description": "Put it all together with capstone-style practice projects.",
      "topics": [
        "Combining concepts",
        "Code review practices",
        "Debugging strategies"
      ],
      "lessons": [
        {
          "id": "py-8-1",
          "slug": "debugging-strategies",
          "title": "How to Debug Like a Pro",
          "titleUrdu": "Pro Ki Tarah Debug Karna",
          "estMinutes": 20,
          "summaryEn": "Debugging is a skill: reproduce, isolate, fix, verify. Learn practical tactics.",
          "summaryUr": "Debugging ek skill hai: reproduce, isolate, fix, verify. Practical tactics seekho.",
          "explanationEn": "Don't guess randomly. Reproduce the bug. Read the error message fully. Add print/log statements. Binary search the code (comment half). Change one thing at a time. Write down what you tried.",
          "explanationUr": "Random guess mat karo. Bug reproduce karo. Error message poori padho. Print/log add karo. Code ka binary search (aadha comment). Ek waqt pe ek change. Jo try kiya woh likh kar rakho.",
          "codeExample": {
            "language": "python",
            "code": "def average(nums):\n    print(\"DEBUG nums:\", nums)  # temporary\n    total = sum(nums)\n    count = len(nums)\n    if count == 0:\n        return 0\n    return total / count\n\nprint(average([10, 20, 30]))\n# print(average([]))  # edge case test"
          },
          "lineByLine": [
            {
              "line": "print(\"DEBUG nums:\", nums)",
              "explanationEn": "Temporary visibility into values at runtime.",
              "explanationUr": "Runtime pe values dekhne ke liye temporary print."
            },
            {
              "line": "if count == 0",
              "explanationEn": "Guard edge cases before they crash.",
              "explanationUr": "Crash se pehle edge cases handle karo."
            }
          ],
          "whyItWorksEn": "Systematic debugging reduces time. Most bugs are small assumptions that prints and edge-case tests expose quickly.",
          "whyItWorksUr": "Systematic debugging time kam karti hai. Aksar bugs chhoti assumptions hoti hain jo prints aur edge-case tests jaldi pakad leti hain.",
          "tryItYourself": "Break a working function on purpose, then use prints to find the break in under 5 minutes.",
          "tryItYourselfUr": "Ek working function ko jaan boojh kar todo, phir prints se 5 minute mein break dhoondho.",
          "analogyTitle": "Doctor Ki Diagnosis",
          "analogyEn": "A good doctor doesn't prescribe at random — they ask questions, run tests, then treat. Debugging is the same.",
          "analogyUr": "Achha doctor random dawai nahi deta — sawal poochta hai, tests karta hai, phir ilaaj. Debugging bhi yahi hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Personal Finance Dashboard (CLI)",
        "titleUrdu": "Personal Finance Dashboard (CLI)",
        "description": "Combine file handling, functions & OOP into one capstone CLI app.",
        "requirements": [
          "Uses classes for accounts/transactions",
          "Persists data to a file",
          "Menu-driven CLI interface"
        ]
      }
    }
  ],
  "dailyTasks": [
    {
      "id": "daily-py-1",
      "title": "Solve one small Python problem",
      "titleUrdu": "Ek chota Python problem solve karo",
      "description": "Pick a bite-sized challenge and solve it without any help first."
    }
  ]
};

export default pythonPath;
