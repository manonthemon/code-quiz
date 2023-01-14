let scores = document.querySelector("scores")
let timer = document.getElementById("time")
let startButton = document.getElementById("start")
let questionsPage = document.getElementById("questions")
let startScreen = document.getElementById("start-screen")
let questionText = document.getElementById("question-title")

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
    console.log(questionsAnswered)
 

};

// function display a new questions. 
// First it hides the start page
//Then it creates a div for question and answers
//then it sets the css properties of that div
//Then it appends the new div to the doc body
//Then it sets the question text to the text of first question in the quizQuestions array - TO BE UPDATED
//Then it appends question text to the questions div

let questionsContainer //variable foe the questions container defined in global scope
let questionsAnswered = 0;

function newQuestion() {
    startScreen.style.display = "none";
    questionsContainer = document.createElement("div")
    questionsContainer.style = "display: flex; flex-direction: column; text-align: center;";
    document.body.appendChild(questionsContainer)
    questionText.textContent = quizQuestions[0].question;
    questionsContainer.appendChild(questionText);
    questionsAnswered++
}

// function to display answers buttons. 
// It uses a for loop to make for buttons and assign it answers from the quizQuestions array

function answersButtons() {
    for (let i = 0; i < 4; i++) {
        let answerButton = document.createElement("button");
        answerButton.textContent = quizQuestions[0].answers[i]           
        answerButton.style.alignSelf = "center"
        questionsContainer.appendChild(answerButton);
    
    } 
}


// function nextQuestion () {
//     for (let i = 0; i < quizQuestions.length; i++) {
//         startScreen.style.display = "none";
//         document.body.appendChild(questionsContainer)
//         questionText.textContent = quizQuestions[i].question;
//         questionsContainer.appendChild(questionText); 
// }
// }

// function nextQuestion() {
//     questionsContainer.style.display = "none";
//     questionsContainer = document.createElement("div")
//     questionsContainer.style.display = "flex";
//     questionsContainer.style.flexDirection = "column";
//     questionsContainer.style.textAlign = "center"
//     document.body.appendChild(questionsContainer)
    
//     questionText.textContent = quizQuestions[1].question;
//     questionsContainer.appendChild(questionText);
// }








