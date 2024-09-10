const quesJSON = {
    "maths": [
        {
            correctAnswer: "4",
            options: ["2", "3", "4", "5"],
            question: "Q-1 What is 2 + 2?"
        },
        // Add more Maths questions here...
    ],
    "english": [
        {
            correctAnswer: "Verb",
            options: ["Noun", "Adjective", "Verb", "Adverb"],
            question: "Q-1 What part of speech is 'run'?"
        },
        // Add more English questions here...
    ],
    "science": [
        {
            correctAnswer: "Gravity",
            options: ["Magnetism", "Gravity", "Electricity", "Friction"],
            question: "Q-1 What force keeps us on the ground?"
        },
        // Add more Science questions here...
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
            correctAnswer: "eight",
            options: ["Four", "Five", "eight", "Three"],
            question:
                "Q-3 How many Union territories are in India?"
        },
        {
            correctAnswer: "Kanchenjunga",
            options: ["Mount Godwin- Austen", "K2", "Kanchenjunga", "Mount Everest"],
            question:
                "Q-4 Which is the highest mountain peak in India?"
        },
        {
            correctAnswer: "Kunchikal Falls",
            options: ["Jog Falls", "Kunchikal Falls", "Nohkalikai Falls", "Dudhsagar Falls"],
            question:
                "Q-5 Which is the highest waterfall in India?"
        },
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
const quizContentEl = document.getElementById("quiz-content");
const qstnBlock = document.getElementById("qstn-block");
const subTestHeadingEl = document.getElementById("sub-test-heading");

console.log(subTestHeadingEl);

const mathsBtn = document.getElementById("mathsBtn");
const englishBtn = document.getElementById("englishBtn");
const scienceBtn = document.getElementById("scienceBtn");
const gkBtn = document.getElementById("gkBtn");

let selectedQuestions = [];

// Add event listeners to the "Subject" buttons
mathsBtn.addEventListener('click', () => startQuiz("maths"));
englishBtn.addEventListener('click', () => startQuiz("english"));
scienceBtn.addEventListener('click', () => startQuiz("science"));
gkBtn.addEventListener('click', () => startQuiz("gk"));

// Add event listener to the "Next" button 
nextBtnEl.addEventListener("click", () => {
    // scoreEl.textContent = `score =${score}/${totalScore}`;
    nextQuestion();
});

function startQuiz(subject) {
    if(quizContentEl.style.display==='flex'){
        quizContentEl.style.display="none";
    }
    quizContentEl.style.display = "flex";
    console.log("test =" + subTestHeadingEl);
    const subCapitalized = subject[0].toUpperCase() + subject.slice(1)
    subTestHeadingEl.textContent = `${subCapitalized} Test`;
    qstnArray = quesJSON[subject];
    totalScore = qstnArray.length;
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent="SCORE = 0";
    showQuestion();
}

function showQuestion() {
    // destructuting the object
    // const { correctAnswer, options, question, } = quesJSON[currentQuestion];
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
            if (opt === correctAnswer) {
                score++;
            } else {
                score = score - 0.25;
            }
            scoreEl.textContent = `SCORE = ${score}/${totalScore}`;
            nextQuestion();
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
