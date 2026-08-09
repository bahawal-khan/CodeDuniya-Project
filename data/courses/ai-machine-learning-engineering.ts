import type { LearningPath } from "../types";

const aiPath: LearningPath = {
  "id": "path-ai-ml",
  "slug": "ai-machine-learning-engineering",
  "title": "AI & Machine Learning Engineering",
  "titleUrdu": "AI Aur Machine Learning Engineering",
  "description": "Learn to build, train and deploy real machine learning models — from math to production.",
  "descriptionUr": "Real machine learning models banana, train karna aur deploy karna seekho — math se le kar production tak.",
  "theme": "teal",
  "icon": "BrainCircuit",
  "level": "Intermediate → Advanced",
  "estWeeks": 14,
  "modules": [
    {
      "id": "ai-m1",
      "slug": "python-for-ai",
      "title": "Python for AI/ML",
      "titleUrdu": "AI/ML Ke Liye Python",
      "description": "Refresh core Python with an AI lens — lists, loops, functions, and comprehensions.",
      "topics": [
        "Lists & loops",
        "Functions",
        "List comprehensions",
        "Reading CSV files"
      ],
      "lessons": [
        {
          "id": "ai-1-1",
          "slug": "python-lists-loops-for-data",
          "title": "Python Lists & Loops for Data",
          "titleUrdu": "Data Ke Liye Python Lists Aur Loops",
          "estMinutes": 22,
          "summaryEn": "Almost all AI work starts with lists of data. Learn how to store, loop through, and transform data using Python lists.",
          "summaryUr": "Tqreeban har AI kaam data ki lists se shuru hota hai. Seekho ke Python lists mein data kaise store, loop aur transform karte hain.",
          "explanationEn": "In AI/ML, you constantly work with collections — a list of student marks, a list of images, a list of words. Python's list is an ordered, changeable collection written with square brackets. A for loop lets you visit every item one by one and do something with it — like checking if a mark passes, or converting text to lowercase. This 'loop through and process' pattern is the heartbeat of almost every data pipeline you'll ever build.",
          "explanationUr": "AI/ML mein hum hamesha collections ke sath kaam karte hain — students ke marks ki list, images ki list, words ki list. Python ki list ek ordered, changeable collection hoti hai jo square brackets [] mein likhi jati hai. for loop hume har item ko ek ek karke visit karne deta hai aur us par kuch process karne deta hai — jaise check karna ke mark pass hai ya nahi, ya text ko lowercase mein badalna. Yeh 'loop through and process' pattern tqreeban har data pipeline ka dil hota hai jo tum kabhi bhi banao ge.",
          "codeExample": {
            "language": "python",
            "code": "marks = [45, 88, 62, 90, 34]\npassing = []\n\nfor mark in marks:\n    if mark >= 50:\n        passing.append(mark)\n\nprint(\"Passing students:\", passing)\nprint(\"Total passed:\", len(passing))"
          },
          "lineByLine": [
            {
              "line": "marks = [45, 88, 62, 90, 34]",
              "explanationEn": "Creates a list holding five numbers — this could just as easily be a list of exam scores from a CSV file.",
              "explanationUr": "Panch numbers wali ek list banata hai — yeh kisi CSV file se aaye exam scores bhi ho sakte hain."
            },
            {
              "line": "passing = []",
              "explanationEn": "An empty list to collect only the marks that pass.",
              "explanationUr": "Ek khaali list, sirf pass hone wale marks jama karne ke liye."
            },
            {
              "line": "for mark in marks:",
              "explanationEn": "Loops through the list one item at a time, calling each one 'mark' inside the loop.",
              "explanationUr": "List mein se ek ek item ko loop karta hai, har item ko loop ke andar 'mark' kehte hain."
            },
            {
              "line": "if mark >= 50:",
              "explanationEn": "A condition — only marks 50 or above pass this check.",
              "explanationUr": "Ek shart — sirf 50 ya us se zyada marks is check ko pass karte hain."
            },
            {
              "line": "passing.append(mark)",
              "explanationEn": "Adds the current mark to the end of the passing list.",
              "explanationUr": "Current mark ko passing list ke aakhir mein add karta hai."
            }
          ],
          "whyItWorksEn": "Python evaluates the for loop's condition on every single item, running the indented block each time it's true. This 'filter' pattern — loop + condition + collect — is exactly what libraries like Pandas do internally at massive scale, just faster and with extra features. Understanding it in plain Python makes those libraries far less mysterious later.",
          "whyItWorksUr": "Python for loop har item par condition check karta hai, aur jab woh true ho to indented block chalata hai. Yeh 'filter' pattern — loop + condition + collect — bilkul wahi kaam hai jo Pandas jaisi libraries andar hi andar bade scale par karti hain, bas tez raftar aur extra features ke sath. Isay plain Python mein samajhna baad mein un libraries ko kam mushkil bana deta hai.",
          "tryItYourself": "Given a list of ages [12, 25, 17, 40, 15, 60], write a loop that collects only the adults (18+) into a new list called adults, then print it.",
          "tryItYourselfUr": "Ages ki list [12, 25, 17, 40, 15, 60] di gayi hai, ek loop likho jo sirf adults (18+) ko adults naam ki nayi list mein jama kare, phir usay print karo.",
          "analogyTitle": "Cricket Ke Overs Ki Tarah",
          "analogyEn": "A for loop is like bowling an over in cricket — six balls, one after another, and you react to each one individually (dot ball, boundary, wicket) before moving to the next. The loop 'bowls' through every item in your list the exact same way.",
          "analogyUr": "for loop bilkul cricket ke over jaisa hai — chhe balls, ek ke baad ek, aur har ball par tumhara alag reaction hota hai (dot ball, boundary, wicket) is se pehle ke agli ball par jao. Loop bhi tumhari list ke har item par isi tarah 'bowl' karta hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Student Grade Analyzer",
        "titleUrdu": "Student Grade Analyzer",
        "description": "Given a list of student scores, compute averages, pass rate, and top scorer.",
        "requirements": [
          "Compute class average",
          "Find highest & lowest scorer",
          "Print a formatted summary"
        ]
      }
    },
    {
      "id": "ai-m2",
      "slug": "math-foundations",
      "title": "Math Foundations",
      "titleUrdu": "Math Ki Bunyaad",
      "description": "The minimum linear algebra, probability and calculus you actually need for ML.",
      "topics": [
        "Vectors & matrices",
        "Probability basics",
        "Derivatives intuition",
        "Mean, variance, std dev"
      ],
      "lessons": [
        {
          "id": "ai-2-1",
          "slug": "vectors-matrices",
          "title": "Vectors & Matrices, Intuitively",
          "titleUrdu": "Vectors Aur Matrices, Aasan Tarike Se",
          "estMinutes": 30,
          "summaryEn": "Vectors and matrices are how ML stores and transforms numbers at scale.",
          "summaryUr": "Vectors aur matrices ML mein numbers ko scale pe store aur transform karne ka tareeqa hain.",
          "explanationEn": "A vector is an ordered list of numbers (like [2, 5, 1]). A matrix is a grid of numbers (rows and columns). Neural networks multiply matrices to transform data. You don't need heavy theory first — understand shape and simple operations.",
          "explanationUr": "Vector numbers ki ordered list hai (jaise [2, 5, 1]). Matrix numbers ka grid hai (rows aur columns). Neural networks data transform karne ke liye matrices multiply karti hain. Pehle heavy theory ki zaroorat nahi — shape aur simple operations samjho.",
          "codeExample": {
            "language": "python",
            "code": "import numpy as np\n\nv = np.array([2, 5, 1])\nprint(\"Vector:\", v, \"shape:\", v.shape)\n\nm = np.array([[1, 2], [3, 4], [5, 6]])\nprint(\"Matrix shape:\", m.shape)\n\n# Dot product\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(\"Dot:\", np.dot(a, b))"
          },
          "lineByLine": [
            {
              "line": "np.array([2, 5, 1])",
              "explanationEn": "Creates a 1D vector with 3 numbers.",
              "explanationUr": "3 numbers wala 1D vector banata hai."
            },
            {
              "line": "m.shape",
              "explanationEn": "Shows (rows, columns) — critical for ML operations.",
              "explanationUr": "(rows, columns) dikhata hai — ML operations ke liye critical."
            },
            {
              "line": "np.dot(a, b)",
              "explanationEn": "Multiplies matching pairs and sums — used heavily in neural nets.",
              "explanationUr": "Matching pairs multiply karke sum — neural nets mein bohot use hota hai."
            }
          ],
          "whyItWorksEn": "NumPy stores data in contiguous memory and runs math in optimized C under the hood, so vector ops are much faster than Python loops.",
          "whyItWorksUr": "NumPy data contiguous memory mein rakhta hai aur math optimized C mein chalta hai, is liye vector ops Python loops se kahin tez hote hain.",
          "tryItYourself": "Create a 3x3 matrix and a vector of length 3. Multiply them with np.dot and print the result.",
          "tryItYourselfUr": "3x3 matrix aur length 3 ka vector banao. np.dot se multiply karke result print karo.",
          "analogyTitle": "Cricket Scorecard",
          "analogyEn": "A vector is one player's scores across matches. A matrix is the whole team scorecard — rows players, columns matches.",
          "analogyUr": "Vector ek player ke matches ke scores hain. Matrix poori team ka scorecard hai — rows players, columns matches.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Stats Mini-Toolkit",
        "titleUrdu": "Stats Mini-Toolkit",
        "description": "Write functions to compute mean, variance and standard deviation from scratch.",
        "requirements": [
          "mean(), variance(), std_dev() functions",
          "No external libraries",
          "Test with sample datasets"
        ]
      }
    },
    {
      "id": "ai-m3",
      "slug": "numpy-pandas",
      "title": "Data Handling with NumPy & Pandas",
      "titleUrdu": "NumPy Aur Pandas Se Data Handling",
      "description": "The two libraries every ML engineer uses daily to wrangle data.",
      "topics": [
        "NumPy arrays",
        "Pandas DataFrames",
        "Cleaning messy data",
        "GroupBy & aggregation"
      ],
      "lessons": [
        {
          "id": "ai-3-1",
          "slug": "pandas-dataframes",
          "title": "Your First Pandas DataFrame",
          "titleUrdu": "Apna Pehla Pandas DataFrame",
          "estMinutes": 30,
          "summaryEn": "Pandas DataFrames are the spreadsheet of Python — load, filter and summarize tabular data.",
          "summaryUr": "Pandas DataFrame Python ka spreadsheet hai — tabular data load, filter aur summarize karo.",
          "explanationEn": "Almost every ML project starts with data cleaning. Pandas gives you DataFrames: tables with rows and named columns. You can filter rows, select columns, compute averages, and handle missing values with a few clear lines of code.",
          "explanationUr": "Almost har ML project data cleaning se start hota hai. Pandas DataFrames deta hai: rows aur named columns wali tables. Aap rows filter, columns select, average nikal, aur missing values handle kar sakte ho chand clear lines se.",
          "codeExample": {
            "language": "python",
            "code": "import pandas as pd\n\ndf = pd.DataFrame({\n    \"name\": [\"Ali\", \"Sara\", \"Ahmed\"],\n    \"marks\": [85, 92, 78]\n})\n\nprint(df)\nprint(\"Average:\", df[\"marks\"].mean())\nprint(\"Topper:\", df.loc[df[\"marks\"].idxmax(), \"name\"])"
          },
          "lineByLine": [
            {
              "line": "pd.DataFrame({...})",
              "explanationEn": "Creates a table from a dictionary of columns.",
              "explanationUr": "Columns ki dictionary se table banata hai."
            },
            {
              "line": "df[\"marks\"].mean()",
              "explanationEn": "Selects the marks column and computes the average.",
              "explanationUr": "marks column select karke average nikalta hai."
            },
            {
              "line": "df.loc[df[\"marks\"].idxmax(), \"name\"]",
              "explanationEn": "Finds the row with highest marks and returns that student's name.",
              "explanationUr": "Sab se zyada marks wali row dhoondh kar us student ka naam return karta hai."
            }
          ],
          "whyItWorksEn": "DataFrames store data in efficient columnar format and vectorize operations — one command works on the whole column instead of writing loops.",
          "whyItWorksUr": "DataFrames data ko efficient columnar format mein rakhte hain aur operations vectorize karte hain — ek command poori column pe kaam karti hai, loops likhne ki zaroorat nahi.",
          "tryItYourself": "Create a DataFrame of 5 cities and their temperatures. Print the hottest city and the average temperature.",
          "tryItYourselfUr": "5 cities aur unke temperatures ka DataFrame banao. Sab se garam city aur average temperature print karo.",
          "analogyTitle": "Excel Sheet Python Mein",
          "analogyEn": "A DataFrame is an Excel sheet you can control with code — filter, sort, and calculate without clicking around.",
          "analogyUr": "DataFrame woh Excel sheet hai jise aap code se control karte ho — filter, sort, calculate, mouse click kiye baghair.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Clean a Messy Dataset",
        "titleUrdu": "Ek Messy Dataset Saaf Karo",
        "description": "Take a CSV with missing values and inconsistent formatting and clean it fully.",
        "requirements": [
          "Handle missing values",
          "Fix inconsistent text formatting",
          "Export a clean CSV"
        ]
      }
    },
    {
      "id": "ai-m4",
      "slug": "ml-fundamentals",
      "title": "Machine Learning Fundamentals",
      "titleUrdu": "Machine Learning Ki Bunyaadi Baatein",
      "description": "Train your first models with scikit-learn and understand how learning actually happens.",
      "topics": [
        "Supervised vs unsupervised",
        "Train/test split",
        "Linear & logistic regression",
        "Model evaluation"
      ],
      "lessons": [
        {
          "id": "ai-4-1",
          "slug": "first-ml-model",
          "title": "Training Your First Model",
          "titleUrdu": "Apna Pehla Model Train Karna",
          "estMinutes": 35,
          "summaryEn": "Train a simple linear regression model to predict values from data using scikit-learn.",
          "summaryUr": "scikit-learn se simple linear regression model train karke data se values predict karo.",
          "explanationEn": "Machine learning finds patterns in data. Linear regression is the simplest model: it draws the best straight line through points so you can predict new values. The flow is always: prepare data → train model → evaluate → predict.",
          "explanationUr": "Machine learning data mein patterns dhoondhti hai. Linear regression sab se simple model hai: points ke through best seedhi line draw karti hai taake nayi values predict ho saken. Flow hamesha: data prepare → model train → evaluate → predict.",
          "codeExample": {
            "language": "python",
            "code": "from sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Hours studied → marks\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([40, 50, 60, 70, 80])\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\nprint(\"6 hours study pe prediction:\", model.predict([[6]])[0])"
          },
          "lineByLine": [
            {
              "line": "LinearRegression()",
              "explanationEn": "Creates an empty linear regression model ready to learn.",
              "explanationUr": "Ek khali linear regression model banata hai jo seekhne ke liye ready hai."
            },
            {
              "line": "model.fit(X, y)",
              "explanationEn": "Trains the model: finds the best line that maps X (hours) to y (marks).",
              "explanationUr": "Model train karta hai: best line dhoondhta hai jo X (hours) ko y (marks) se map kare."
            },
            {
              "line": "model.predict([[6]])",
              "explanationEn": "Uses the learned pattern to predict marks for 6 hours of study.",
              "explanationUr": "Seekhe hue pattern se 6 hours study ke marks predict karta hai."
            }
          ],
          "whyItWorksEn": "fit() adjusts the line's slope and intercept to minimize prediction error on the training data. predict() then uses that line for new inputs.",
          "whyItWorksUr": "fit() line ka slope aur intercept adjust karta hai taake training data pe error kam ho. predict() phir usi line ko naye inputs pe use karta hai.",
          "tryItYourself": "Change the data to house size (sq ft) vs price. Train a model and predict the price of a 1500 sq ft house.",
          "tryItYourselfUr": "Data ko house size (sq ft) vs price se change karo. Model train karke 1500 sq ft house ki price predict karo.",
          "analogyTitle": "Teacher Jo Pattern Yaad Rakhta Hai",
          "analogyEn": "Training is like a teacher looking at many solved examples until they can predict the answer for a new, similar question.",
          "analogyUr": "Training us teacher jaisi hai jo kai solved examples dekh kar naye similar sawal ka jawab predict karne lagta hai.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "House Price Predictor",
        "titleUrdu": "House Price Predictor",
        "description": "Predict house prices from features using linear regression.",
        "requirements": [
          "Train/test split",
          "Train a regression model",
          "Report accuracy metrics"
        ]
      }
    },
    {
      "id": "ai-m5",
      "slug": "neural-networks",
      "title": "Neural Networks & Deep Learning",
      "titleUrdu": "Neural Networks Aur Deep Learning",
      "description": "From perceptrons to your first neural network with PyTorch.",
      "topics": [
        "Neurons & layers",
        "Activation functions",
        "Backpropagation intuition",
        "Building a network in PyTorch"
      ],
      "lessons": [
        {
          "id": "ai-5-1",
          "slug": "first-neural-net",
          "title": "Building Your First Neural Network",
          "titleUrdu": "Apna Pehla Neural Network Banana",
          "estMinutes": 40,
          "summaryEn": "A neural net learns by adjusting weights. Build a tiny one with scikit-learn style intuition.",
          "summaryUr": "Neural net weights adjust karke seekhta hai. Chhota sa net intuition ke sath banao.",
          "explanationEn": "A neural network is layers of numbers (weights) that transform inputs into outputs. Training means adjusting those weights so predictions get closer to correct answers. Start with sklearn's MLPClassifier to see the idea before deep frameworks.",
          "explanationUr": "Neural network weights (numbers) ki layers hain jo inputs ko outputs mein badalti hain. Training matlab un weights ko adjust karna taake predictions sahi answers ke qareeb aa jayein. Deep frameworks se pehle sklearn ke MLPClassifier se idea samjho.",
          "codeExample": {
            "language": "python",
            "code": "from sklearn.neural_network import MLPClassifier\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\n\nX, y = make_classification(n_samples=200, n_features=4, random_state=42)\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\nclf = MLPClassifier(hidden_layer_sizes=(8, 4), max_iter=500)\nclf.fit(X_train, y_train)\nprint(\"Accuracy:\", clf.score(X_test, y_test))"
          },
          "lineByLine": [
            {
              "line": "hidden_layer_sizes=(8, 4)",
              "explanationEn": "Two hidden layers with 8 and 4 neurons.",
              "explanationUr": "Do hidden layers — 8 aur 4 neurons ke sath."
            },
            {
              "line": "clf.fit(X_train, y_train)",
              "explanationEn": "Trains the network by adjusting weights on training data.",
              "explanationUr": "Training data pe weights adjust karke network train karta hai."
            },
            {
              "line": "clf.score(X_test, y_test)",
              "explanationEn": "Measures accuracy on data the model has not seen.",
              "explanationUr": "Us data pe accuracy measure karta hai jo model ne nahi dekha."
            }
          ],
          "whyItWorksEn": "Backpropagation computes how much each weight contributed to the error and nudges it to reduce that error, repeated many times (epochs).",
          "whyItWorksUr": "Backpropagation calculate karti hai har weight ne error mein kitna hissa diya, phir usay kam karne ke liye adjust karti hai — yeh kai baar (epochs) hota hai.",
          "tryItYourself": "Change hidden_layer_sizes to (16,) and compare accuracy. What happens?",
          "tryItYourselfUr": "hidden_layer_sizes ko (16,) karo aur accuracy compare karo. Kya hota hai?",
          "analogyTitle": "Exam Ki Practice",
          "analogyEn": "Each training epoch is like another practice test — the network keeps correcting mistakes until it generalizes.",
          "analogyUr": "Har training epoch practice test jaisi hai — network ghaltiyan correct karta rehta hai jab tak general pattern samajh na le.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Digit Classifier",
        "titleUrdu": "Digit Classifier",
        "description": "Classify handwritten digits (MNIST) using a small neural network.",
        "requirements": [
          "Load MNIST dataset",
          "Build & train a small network",
          "Report test accuracy"
        ]
      }
    },
    {
      "id": "ai-m6",
      "slug": "nlp-llms",
      "title": "NLP & Working with LLMs",
      "titleUrdu": "NLP Aur LLMs Ke Sath Kaam",
      "description": "Text processing fundamentals and how to use modern LLM APIs in your own apps.",
      "topics": [
        "Tokenization",
        "Embeddings",
        "Prompting LLMs",
        "Calling an LLM API"
      ],
      "lessons": [
        {
          "id": "ai-6-1",
          "slug": "tokenization-embeddings",
          "title": "Tokenization & Embeddings",
          "titleUrdu": "Tokenization Aur Embeddings",
          "estMinutes": 30,
          "summaryEn": "LLMs break text into tokens and map them to number vectors called embeddings.",
          "summaryUr": "LLMs text ko tokens mein todti hain aur unhe number vectors (embeddings) mein map karti hain.",
          "explanationEn": "Computers don't understand words — they understand numbers. Tokenization splits text into pieces (tokens). Embeddings convert each token into a vector so similar meanings sit closer in space. This is the foundation of ChatGPT-style models.",
          "explanationUr": "Computers words nahi samajhte — numbers samajhte hain. Tokenization text ko pieces (tokens) mein todti hai. Embeddings har token ko vector banati hain taake similar meanings space mein qareeb hon. Yahi ChatGPT-style models ki bunyaad hai.",
          "codeExample": {
            "language": "python",
            "code": "# Conceptual demo with simple counts\ntext = \"Yar coding seekhna maza aa raha hai\"\ntokens = text.lower().split()\nprint(\"Tokens:\", tokens)\n\n# Fake embedding: length + first letter code\ndef embed(token):\n    return [len(token), ord(token[0])]\n\nembeds = [embed(t) for t in tokens]\nprint(\"Embeddings:\", embeds)"
          },
          "lineByLine": [
            {
              "line": "text.lower().split()",
              "explanationEn": "Very simple tokenization by whitespace after lowercasing.",
              "explanationUr": "Lowercase karke whitespace se simple tokenization."
            },
            {
              "line": "embed(token)",
              "explanationEn": "Maps a token to a numeric vector (toy example).",
              "explanationUr": "Token ko numeric vector mein map karta hai (toy example)."
            }
          ],
          "whyItWorksEn": "Real models use subword tokenizers (BPE) and high-dimensional embeddings trained so that 'king' - 'man' + 'woman' ≈ 'queen'.",
          "whyItWorksUr": "Asal models subword tokenizers (BPE) aur high-dimensional embeddings use karte hain jo train hote hain taake similar meaning qareeb aa jayein.",
          "tryItYourself": "Tokenize a Urdu-English mixed sentence and print token count.",
          "tryItYourselfUr": "Urdu-English mixed sentence tokenize karke token count print karo.",
          "analogyTitle": "Dictionary Ke Codes",
          "analogyEn": "Tokenization is cutting a letter into words. Embeddings are giving each word a secret number code so the computer can do math on meaning.",
          "analogyUr": "Tokenization khat ko words mein kaatna hai. Embeddings har word ko secret number code dena hai taake computer meaning pe math kar sake.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Simple Chatbot with an LLM API",
        "titleUrdu": "LLM API Se Simple Chatbot",
        "description": "Build a command-line chatbot that calls an LLM API with a custom persona.",
        "requirements": [
          "Call a real LLM API",
          "Maintain conversation history",
          "Give the bot a custom personality"
        ]
      }
    },
    {
      "id": "ai-m7",
      "slug": "deploying-ml",
      "title": "Deploying ML Models",
      "titleUrdu": "ML Models Deploy Karna",
      "description": "Turn a trained model into a real product people can use.",
      "topics": [
        "Saving/loading models",
        "Building an API with FastAPI",
        "Simple UIs with Streamlit"
      ],
      "lessons": [
        {
          "id": "ai-7-1",
          "slug": "fastapi-model-serving",
          "title": "Serving a Model with FastAPI",
          "titleUrdu": "FastAPI Se Model Serve Karna",
          "estMinutes": 35,
          "summaryEn": "Wrap a trained model in a FastAPI endpoint so apps can call it over HTTP.",
          "summaryUr": "Trained model ko FastAPI endpoint mein wrap karo taake apps HTTP se call kar saken.",
          "explanationEn": "Training is only half the job. Serving means other programs can send data and get predictions. FastAPI makes this easy: define a route, load the model once, and return JSON predictions.",
          "explanationUr": "Training sirf aadha kaam hai. Serving matlab doosre programs data bhej kar predictions le saken. FastAPI se asaan hai: route define karo, model ek dafa load karo, JSON predictions return karo.",
          "codeExample": {
            "language": "python",
            "code": "from fastapi import FastAPI\nfrom pydantic import BaseModel\nimport pickle\n\napp = FastAPI()\nmodel = pickle.load(open(\"model.pkl\", \"rb\"))\n\nclass Input(BaseModel):\n    hours: float\n\n@app.post(\"/predict\")\ndef predict(data: Input):\n    pred = model.predict([[data.hours]])[0]\n    return {\"predicted_marks\": float(pred)}"
          },
          "lineByLine": [
            {
              "line": "class Input(BaseModel)",
              "explanationEn": "Defines the expected JSON body shape and validates it.",
              "explanationUr": "Expected JSON body ka shape define karke validate karta hai."
            },
            {
              "line": "@app.post(\"/predict\")",
              "explanationEn": "HTTP POST endpoint for predictions.",
              "explanationUr": "Predictions ke liye HTTP POST endpoint."
            },
            {
              "line": "model.predict([[data.hours]])",
              "explanationEn": "Runs the trained model on the incoming value.",
              "explanationUr": "Aane wali value pe trained model chalta hai."
            }
          ],
          "whyItWorksEn": "The model stays in memory after startup. Each request is a lightweight function call plus JSON serialization.",
          "whyItWorksUr": "Startup ke baad model memory mein rehta hai. Har request lightweight function call + JSON serialization hoti hai.",
          "tryItYourself": "Add a GET /health route that returns {\"status\": \"ok\"}.",
          "tryItYourselfUr": "GET /health route add karo jo {\"status\": \"ok\"} return kare.",
          "analogyTitle": "Counter Pe Order",
          "analogyEn": "The model is the kitchen expert. FastAPI is the counter where customers place orders (requests) and get dishes (predictions).",
          "analogyUr": "Model kitchen expert hai. FastAPI counter hai jahan customers order (request) dete hain aur dish (prediction) lete hain.",
          "hasFullContent": true
        }
      ],
      "miniProject": {
        "title": "Ship Your Model as a Web App",
        "titleUrdu": "Apne Model Ko Web App Ki Tarah Ship Karo",
        "description": "Deploy your digit classifier or price predictor behind a simple Streamlit UI.",
        "requirements": [
          "Load your trained model",
          "Build a simple input UI",
          "Deploy it publicly"
        ]
      }
    }
  ],
  "dailyTasks": [
    {
      "id": "daily-ai-1",
      "title": "Practice one NumPy operation",
      "titleUrdu": "Ek NumPy operation practice karo",
      "description": "Pick a new NumPy function daily and try it on a small array."
    },
    {
      "id": "daily-ai-2",
      "title": "Read about one ML concept",
      "titleUrdu": "Ek ML concept ke baare mein parho",
      "description": "Spend 10 minutes reading about a term you don't fully understand yet."
    }
  ]
};

export default aiPath;
