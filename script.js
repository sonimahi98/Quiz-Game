const quesJSON = {
    "maths": [
        {
            correctAnswer: "4",
            options: ["2", "3", "4", "5"],
            question: "Q-1 What is 2 + 2?"
        },
        {
            "correctAnswer": "3.14",
            "options": ["3.14", "2.71", "1.41", "1.73"],
            "question": "Q-2 What is the approximate value of pi (π)?"
          },
          {
            "correctAnswer": "180 degrees",
            "options": ["90 degrees", "180 degrees", "360 degrees", "45 degrees"],
            "question": "Q-3 What is the sum of the interior angles of a triangle?"
          },
          {
            "correctAnswer": "Quadrilateral",
            "options": ["Triangle", "Quadrilateral", "Pentagon", "Hexagon"],
            "question": "Q-4 What do you call a four-sided polygon?"
          },
          {
            "correctAnswer": "Pythagoras",
            "options": ["Euclid", "Pythagoras", "Archimedes", "Newton"],
            "question": "Q-5 Who is credited with the Pythagorean theorem?"
          },
          {
            "correctAnswer": "2",
            "options": ["1", "2", "3", "4"],
            "question": "Q-6 What is the square root of 4?"
          },
          {
            "correctAnswer": "Factorial",
            "options": ["Exponent", "Factorial", "Polynomial", "Logarithm"],
            "question": "Q-7 What is the product of all positive integers up to a given number called?"
          },
          {
            "correctAnswer": "45 degrees",
            "options": ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
            "question": "Q-8 What is the angle in a right isosceles triangle?"
          },
          {
            "correctAnswer": "Prime",
            "options": ["Prime", "Composite", "Odd", "Even"],
            "question": "Q-9 What type of number has only two factors: 1 and itself?"
          },
          {
            "correctAnswer": "10",
            "options": ["9", "10", "11", "12"],
            "question": "Q-10 How many digits are in a standard mobile phone number?"
          }
    ],
    "english": [
        {
            correctAnswer: "Verb",
            options: ["Noun", "Adjective", "Verb", "Adverb"],
            question: "Q-1 What part of speech is 'run'?"
        },
        {
            "correctAnswer": "Shakespeare",
            "options": ["Charles Dickens", "J.K. Rowling", "Shakespeare", "Jane Austen"],
            "question": "Q-2 Who wrote 'Romeo and Juliet'?"
          },
          {
            "correctAnswer": "Metaphor",
            "options": ["Simile", "Metaphor", "Personification", "Hyperbole"],
            "question": "Q-3 Which literary device compares two things without using 'like' or 'as'?"
          },
          {
            "correctAnswer": "I",
            "options": ["I", "Me", "Mine", "Myself"],
            "question": "Q-4 Which is the subject pronoun in 'I went to the store'?"
          },
          {
            "correctAnswer": "Plural",
            "options": ["Plural", "Singular", "Adverbial", "Passive"],
            "question": "Q-5 What is the form of 'children'?"
          },
          {
            "correctAnswer": "Past Perfect",
            "options": ["Present Continuous", "Past Perfect", "Future Simple", "Present Perfect"],
            "question": "Q-6 'She had eaten before you arrived.' Which tense is this?"
          },
          {
            "correctAnswer": "Antonym",
            "options": ["Synonym", "Antonym", "Homonym", "Homophone"],
            "question": "Q-7 What is the opposite of a word called?"
          },
          {
            "correctAnswer": "Apostrophe",
            "options": ["Colon", "Semicolon", "Apostrophe", "Hyphen"],
            "question": "Q-8 Which punctuation mark shows possession?"
          },
          {
            "correctAnswer": "Adjective",
            "options": ["Adjective", "Verb", "Noun", "Preposition"],
            "question": "Q-9 What part of speech describes a noun?"
          },
          {
            "correctAnswer": "Passive",
            "options": ["Active", "Passive", "Imperative", "Interrogative"],
            "question": "Q-10 What type of voice is used in the sentence 'The cake was eaten by the children'?"
          }
    ],
    "science": [
        {
            correctAnswer: "Gravity",
            options: ["Magnetism", "Gravity", "Electricity", "Friction"],
            question: "Q-1 What force keeps us on the ground?"
        },
        {
            "correctAnswer": "Jupiter",
            "options": ["Mars", "Earth", "Jupiter", "Venus"],
            "question": "Q-2 Which is the largest planet in our solar system?"
          },
          {
            "correctAnswer": "Isaac Newton",
            "options": ["Albert Einstein", "Isaac Newton", "Galileo", "Marie Curie"],
            "question": "Q-3 Who formulated the laws of motion?"
          },
          {
            "correctAnswer": "Oxygen",
            "options": ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"],
            "question": "Q-4 What element do humans need to breathe in order to survive?"
          },
          {
            "correctAnswer": "Photosynthesis",
            "options": ["Respiration", "Photosynthesis", "Fermentation", "Decomposition"],
            "question": "Q-5 What process do plants use to convert sunlight into food?"
          },
          {
            "correctAnswer": "299,792 km/s",
            "options": ["150,000 km/s", "299,792 km/s", "500,000 km/s", "1,000,000 km/s"],
            "question": "Q-6 What is the speed of light in a vacuum?"
          },
          {
            "correctAnswer": "Vertebrates",
            "options": ["Invertebrates", "Vertebrates", "Arthropods", "Mollusks"],
            "question": "Q-7 Animals with backbones are called what?"
          },
          {
            "correctAnswer": "Mitochondria",
            "options": ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
            "question": "Q-8 Which part of the cell is known as the powerhouse?"
          },
          {
            "correctAnswer": "Evolution",
            "options": ["Revolution", "Evolution", "Adaptation", "Mutation"],
            "question": "Q-9 What theory did Charles Darwin propose?"
          },
          {
            "correctAnswer": "Mercury",
            "options": ["Mercury", "Water", "Oil", "Alcohol"],
            "question": "Q-10 What liquid metal is used in thermometers?"
          }
    ],
    "gk": [
        {
            correctAnswer: "Three",
            options: ["Two", "Three", "Four", "Five"],
            question: "Q-1 How many colors are in the Indian flag?"
        },
        {
            correctAnswer: "28",
            options: ["28", "29", "27", "31"],
            question:
                "Q-2 How many states are in India?"
        },
        {
            "correctAnswer": "Ganga",
            "options": ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
            "question": "Q-3 Which is the longest river in India?"
          },
          {
            "correctAnswer": "1950",
            "options": ["1947", "1950", "1952", "1960"],
            "question": "Q-4 In which year was the Constitution of India adopted?"
          },
          {
            "correctAnswer": "Sikkim",
            "options": ["Sikkim", "Assam", "Nagaland", "Tripura"],
            "question": "Q-5 Which is the least populous state in India?"
          },
          {
            "correctAnswer": "Mahatma Gandhi",
            "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Bhagat Singh"],
            "question": "Q-6 Who is known as the Father of the Nation in India?"
          },
          {
            "correctAnswer": "Kolkata",
            "options": ["Delhi", "Mumbai", "Chennai", "Kolkata"],
            "question": "Q-7 Which city was the capital of British India before New Delhi?"
          },
          {
            "correctAnswer": "Kohinoor",
            "options": ["Hope Diamond", "Kohinoor", "Orlov Diamond", "Sancy Diamond"],
            "question": "Q-8 What is the name of the famous diamond that was taken from India and is now part of the British Crown Jewels?"
          },
          {
            "correctAnswer": "Shivaji",
            "options": ["Ashoka", "Akbar", "Shivaji", "Prithviraj Chauhan"],
            "question": "Q-9 Who founded the Maratha Empire in India?"
          },
          {
            "correctAnswer": "Rajya Sabha",
            "options": ["Lok Sabha", "Rajya Sabha", "President", "Supreme Court"],
            "question": "Q-10 Which is the upper house of the Indian Parliament?"
          }
    ],
    "finance":[
        {
            "correctAnswer": "Equity",
            "options": ["Debt", "Equity", "Asset", "Liability"],
            "question": "Q-1 What is the term for ownership in a company in the form of shares?"
          },
          {
            "correctAnswer": "Inflation",
            "options": ["Recession", "Inflation", "Deflation", "Stagflation"],
            "question": "Q-2 What is the term for the rise in the general level of prices over time?"
          },
          {
            "correctAnswer": "Liquidity",
            "options": ["Liquidity", "Solvency", "Leverage", "Profitability"],
            "question": "Q-3 What is the ability to quickly convert assets into cash called?"
          },
          {
            "correctAnswer": "Compound interest",
            "options": ["Simple interest", "Compound interest", "Fixed interest", "Variable interest"],
            "question": "Q-4 What type of interest is calculated on the initial principal and also on the accumulated interest?"
          },
          {
            "correctAnswer": "Bond",
            "options": ["Stock", "Bond", "Mutual fund", "Derivative"],
            "question": "Q-5 What is a fixed income instrument that represents a loan made by an investor to a borrower?"
          },
          {
            "correctAnswer": "Bull market",
            "options": ["Bull market", "Bear market", "Flat market", "Recession market"],
            "question": "Q-6 What is a financial market called when prices are rising or expected to rise?"
          },
          {
            "correctAnswer": "GDP",
            "options": ["GDP", "GNP", "CPI", "NDP"],
            "question": "Q-7 What is the total value of goods produced and services provided in a country called?"
          },
          {
            "correctAnswer": "Fiscal policy",
            "options": ["Monetary policy", "Fiscal policy", "Trade policy", "Labor policy"],
            "question": "Q-8 What is the government's use of spending and taxation to influence the economy called?"
          },
          {
            "correctAnswer": "Interest rate",
            "options": ["Exchange rate", "Interest rate", "Inflation rate", "Growth rate"],
            "question": "Q-9 What is the cost of borrowing money or the return on savings called?"
          },
          {
            "correctAnswer": "Capital gains",
            "options": ["Capital gains", "Dividends", "Revenue", "Expenses"],
            "question": "Q-10 What is the profit made from selling an asset for more than its purchase price?"
          }
    ],
    "reasoning": [
        {
          "correctAnswer": "East",
          "options": ["North", "South", "East", "West"],
          "question": "Q-1 If you are facing North and turn 90 degrees to your right, which direction are you facing?"
        },
        {
          "correctAnswer": "Square",
          "options": ["Triangle", "Circle", "Square", "Rectangle"],
          "question": "Q-2 Which shape has all sides equal and all angles 90 degrees?"
        },
        {
          "correctAnswer": "6",
          "options": ["4", "5", "6", "8"],
          "question": "Q-3 What comes next in the sequence: 2, 4, 6, ?"
        },
        {
          "correctAnswer": "26",
          "options": ["24", "26", "28", "30"],
          "question": "Q-4 How many letters are there in the English alphabet?"
        },
        {
          "correctAnswer": "Triangle",
          "options": ["Circle", "Square", "Triangle", "Pentagon"],
          "question": "Q-5 What is the name of a three-sided polygon?"
        },
        {
          "correctAnswer": "32",
          "options": ["30", "31", "32", "33"],
          "question": "Q-6 If there are 8 apples and you multiply them by 4, how many do you have?"
        },
        {
          "correctAnswer": "B",
          "options": ["A", "B", "C", "D"],
          "question": "Q-7 If A = 1, B = 2, what letter corresponds to the number 2?"
        },
        {
          "correctAnswer": "7",
          "options": ["5", "6", "7", "8"],
          "question": "Q-8 What comes next in this series: 1, 3, 5, ?"
        },
        {
          "correctAnswer": "March",
          "options": ["April", "March", "July", "August"],
          "question": "Q-9 Which month of the year has 31 days?"
        },
        {
          "correctAnswer": "Odd",
          "options": ["Prime", "Odd", "Even", "Composite"],
          "question": "Q-10 Which type of number is 15: Prime, Odd, Even, or Composite?"
        }
    ],
    "programming": [
        {
          "correctAnswer": "console.log()",
          "options": ["alert()", "console.log()", "document.write()", "window.alert()"],
          "question": "Q-1 Which method is used to print messages to the browser console in JavaScript?"
        },
        {
          "correctAnswer": "Boolean",
          "options": ["Integer", "String", "Boolean", "Array"],
          "question": "Q-2 What data type can hold only true or false values?"
        },
        {
          "correctAnswer": "Python",
          "options": ["Java", "Python", "C++", "JavaScript"],
          "question": "Q-3 Which programming language uses indentation to define blocks of code?"
        },
        {
          "correctAnswer": "for loop",
          "options": ["if statement", "switch case", "while loop", "for loop"],
          "question": "Q-4 Which loop is best used when you know how many iterations you need?"
        },
        {
          "correctAnswer": "React",
          "options": ["Angular", "Vue", "React", "Laravel"],
          "question": "Q-5 Which JavaScript framework is maintained by Facebook?"
        },
        {
          "correctAnswer": "div",
          "options": ["div", "p", "header", "section"],
          "question": "Q-6 Which HTML tag is used to create a division or section in an HTML document?"
        },
        {
          "correctAnswer": "CSS",
          "options": ["JavaScript", "HTML", "CSS", "SQL"],
          "question": "Q-7 Which language is used for styling web pages?"
        },
        {
          "correctAnswer": "Object-Oriented Programming",
          "options": ["Functional Programming", "Object-Oriented Programming", "Procedural Programming", "Event-Driven Programming"],
          "question": "Q-8 What does OOP stand for?"
        },
        {
          "correctAnswer": "fetch()",
          "options": ["get()", "fetch()", "setInterval()", "send()"],
          "question": "Q-9 Which JavaScript method is used to make network requests?"
        },
        {
          "correctAnswer": "null",
          "options": ["undefined", "null", "0", "false"],
          "question": "Q-10 What is the value of an uninitialized variable in JavaScript?"
        }
      ],
      "zoology": [
        {
          "correctAnswer": "Vertebrates",
          "options": ["Vertebrates", "Invertebrates", "Mammals", "Reptiles"],
          "question": "Q-1 Animals with backbones are called what?"
        },
        {
          "correctAnswer": "Cold-blooded",
          "options": ["Cold-blooded", "Warm-blooded", "Ectothermic", "Endothermic"],
          "question": "Q-2 Reptiles are what type of animal in terms of blood temperature?"
        },
        {
          "correctAnswer": "Amphibians",
          "options": ["Mammals", "Amphibians", "Reptiles", "Birds"],
          "question": "Q-3 Frogs belong to which class of animals?"
        },
        {
          "correctAnswer": "Invertebrates",
          "options": ["Vertebrates", "Invertebrates", "Birds", "Fish"],
          "question": "Q-4 Animals without backbones are called what?"
        },
        {
          "correctAnswer": "Herbivores",
          "options": ["Herbivores", "Carnivores", "Omnivores", "Detritivores"],
          "question": "Q-5 Animals that only eat plants are called what?"
        },
        {
          "correctAnswer": "Marsupials",
          "options": ["Marsupials", "Primates", "Carnivores", "Rodents"],
          "question": "Q-6 Kangaroos belong to which group of mammals?"
        },
        {
          "correctAnswer": "Metamorphosis",
          "options": ["Photosynthesis", "Respiration", "Metamorphosis", "Digestion"],
          "question": "Q-7 What is the process by which a caterpillar turns into a butterfly called?"
        },
        {
          "correctAnswer": "Venomous",
          "options": ["Venomous", "Poisonous", "Herbivorous", "Carnivorous"],
          "question": "Q-8 Snakes that inject toxins through a bite are called what?"
        },
        {
          "correctAnswer": "Gills",
          "options": ["Lungs", "Gills", "Skin", "Fins"],
          "question": "Q-9 Fish breathe through what organs?"
        },
        {
          "correctAnswer": "Migration",
          "options": ["Hibernation", "Migration", "Evolution", "Mating"],
          "question": "Q-10 What is the term for the seasonal movement of animals from one region to another?"
        }
      ]
};

var qstnArray = [];
var currentQuestion = 0;
var score = 0;
var totalScore = 0;

// accessing all the elements
const questionEl = document.getElementById("questions");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtnEl = document.getElementById("nextBtn");
const subjectsEl = document.getElementById("subjects");
const homeBg = document.getElementById("home-bg");
const quizContentEl = document.getElementById("quiz-content");
const qstnBlock = document.getElementById("qstn-block");
const subTestHeadingEl = document.getElementById("sub-test-heading");
const welcomeWordsEl = document.getElementById("welcome-words");


const mathsBtn = document.getElementById("mathsBtn");
const englishBtn = document.getElementById("englishBtn");
const scienceBtn = document.getElementById("scienceBtn");
const gkBtn = document.getElementById("gkBtn");
const finBtn = document.getElementById("financeBtn");
const reasBtn = document.getElementById("reasoningBtn");
const progBtn = document.getElementById("programmingBtn");
const zooBtn = document.getElementById("zoologyBtn");

let selectedQuestions = [];

// Add event listeners to the "Subject" buttons
mathsBtn.addEventListener('click', () => startQuiz("maths"));
englishBtn.addEventListener('click', () => startQuiz("english"));
scienceBtn.addEventListener('click', () => startQuiz("science"));
gkBtn.addEventListener('click', () => startQuiz("gk"));
finBtn.addEventListener('click', () => startQuiz("finance"));
reasBtn.addEventListener('click', () => startQuiz("reasoning"));
progBtn.addEventListener('click', () => startQuiz("programming"));
zooBtn.addEventListener('click', () => startQuiz("zoology"));


// Add event listener to the "Next" button 
nextBtnEl.addEventListener("click", () => {
    // scoreEl.textContent = `score =${score}/${totalScore}`;
    nextQuestion();
});

function startQuiz(subject) {
    if(quizContentEl.style.display==='flex'){
        quizContentEl.style.display="none";
    }
    homeBg.style.display="none";
    welcomeWordsEl.style.display="none";
    quizContentEl.style.display = "flex";
    console.log("test =" + subTestHeadingEl);
    const subCapitalized = subject[0].toUpperCase() + subject.slice(1)
    subTestHeadingEl.textContent = `${subCapitalized} Test`;
    qstnArray = quesJSON[subject];
    totalScore = (qstnArray.length)*4;
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent="SCORE = 0";
    showQuestion();
}

function showQuestion() {
    // destructuting the object
    const { correctAnswer, options, question, } = qstnArray[currentQuestion];

    // setting question text content
    // directly accessing 'question due to destructuring
    questionEl.textContent = question;

    // optionsEl.textContent = "";
    optionsEl.innerHTML = "";

    const shuffledOptions = shuffleOptions(options);

    // populating the options div with the button
    shuffledOptions.forEach((opt) => {
        // creating the button and appending it inside options div
        const btn = document.createElement("button");
        btn.textContent = opt;
        optionsEl.appendChild(btn);

        // event handling on the button
        btn.addEventListener("click", () => {
          btn.onclick =()=>{
            btn.disabled = true;
          }
            if (opt === correctAnswer) {
                btn.style.background ="green";
                score+=4;


            } else {
                score = score - 1;
                btn.style.background ="red";

            }
            scoreEl.textContent = `SCORE = ${score}/${totalScore}`;
            // nextQuestion();

        });

    });
}

function nextQuestion() {
    currentQuestion++;
    optionsEl.textContent = "";
    if (currentQuestion >= qstnArray.length) {
        questionEl.textContent = "Quiz Completed";
        console.log("quiz completed")
        nextBtnEl.remove();
    } else {
        showQuestion();
    }
}
// shuffle the options

function shuffleOptions(options) {
    for (let i = options.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [
            options[j],
            options[i],
        ];
    }
    return options;
}
