let scores = document.querySelector("scores")
let timer = document.getElementById("time")
let startButton = document.getElementById("start")
let questionsPage = document.getElementById("questions")
let startScreen = document.getElementById("start-screen")
let questionText = document.getElementById("question-title")


let questionsOptions = []
let answersOptions = []


//This is the start button with a event listener attached
//It starts the timer
//And activates the startGame function which displays first question
startButton.addEventListener("click", function () {
    startTimer() //starts timer on button click
    startGame()
})

//Timer function counts down from 10
//Resets back to 10 when finished
var secondsLeft = 10;

function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            secondsLeft = 10;
        }
    }, 1000);
}

//function starting the game containing other functions controlling the game

function startGame() {
    newQuestion() // displays new question
    answersButtons()
  
};

// function display a new questions. 
// First it hides the start page
//Then it creates a div for question and answers
//then it sets the css properties of that div
//Then it appends to the doc body
//Then it sets the question text to the text of first question in the quizQuestions array
//Then it appends question text to the questions div

let questionsContainer //variable foe the questions container defined in global scope

function newQuestion() {
    startScreen.style.display = "none";
    questionsContainer = document.createElement("div")
    questionsContainer.style.display = "flex";
    questionsContainer.style.flexDirection = "column";
    questionsContainer.style.textAlign = "center"
    document.body.appendChild(questionsContainer)

    // questionText.textContent = quizQuestions[0].question1;

    
    for (let i = 0; i < 4; i++) {
        questionText.textContent = quizQuestions[0].question1 
    }
    questionsContainer.appendChild(questionText);
}

// function to display answers buttons. 
// It uses a for loop to make for buttons and assign it answers from the quizQuestions array

function answersButtons() {
    for (let i = 0; i < 4; i++) {
        let answerButton = document.createElement("button");
        answerButton.textContent = quizQuestions[0].answers1[i]            
        answerButton.style.width = answerButton.offsetWidth + "200px";
        answerButton.style.alignSelf = "center"
        questionsContainer.appendChild(answerButton);
    }
}







