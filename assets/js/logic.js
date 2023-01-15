let scores = document.querySelector("scores")
let timer = document.getElementById("time")
let startButton = document.getElementById("start")
let questionsPage = document.getElementById("questions")
let startScreen = document.getElementById("start-screen")
let questionText = document.getElementById("question-title")
let feedback = document.getElementById("feedback")
let endScreen = document.getElementById("end-screen")
let finalScoreSpan = document.getElementById("final-score")

let questionsContainer //variable foe the questions container defined in global scope
let questionsCounter = 0;
let selectedAnswer


//This is the start button with a event listener attached
//It starts the timer
//And activates the startGame function which displays first question
startButton.addEventListener("click", function () {
    startTimer() //starts timer on button click
    startGame()
})

//Timer function counts down from 10
//Resets back to 10 when finished
let timerInterval
let secondsLeft = 100;

function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

//function starting the game containing other functions controlling the game

function startGame() {
    firstQuestion() // displays new question
    firstAnswers()


}
// Function display the first questions. 
// First it hides the start page
//Then it creates a div for question and answers
//then it sets the css properties of that div
//Then it appends the new div to the doc body
//Then it sets the question text to the text
//Then it appends question text to the questions div
// Then it adds 1 to the variable counting the questions
function firstQuestion() {
    startScreen.style.display = "none";
    questionsContainer = document.createElement("div")
    questionsContainer.style = "display: flex; flex-direction: column; text-align: center;";
    document.body.appendChild(questionsContainer)
    questionText.textContent = quizQuestions[0].question;
    questionsContainer.appendChild(questionText);
    questionsCounter++
    console.log(questionsCounter)
}

// function to display the first set of answers
// first it creates a div container for answers
// It then uses a for loop to make for buttons and assign it answers from the quizQuestions array
// it then appends these buttons to answers container
// it then adds eventListeners to button which check if the selected answer is correct
// penalize player if it's not
//proceed to next question 
let answerButton
function firstAnswers() {
    answersContainer = document.createElement("div")
    answersContainer.style = "display: flex; flex-direction: column; text-align: center;";
    document.body.appendChild(answersContainer)
    for (let i = 0; i < 4; i++) {
        answerButton = document.createElement("button");
        answerButton.textContent = quizQuestions[0].answers[i]
        answerButton.style.alignSelf = "center"
        answersContainer.appendChild(answerButton);
        answerButton.addEventListener("click", function () {
            if (this.textContent === correctAnswer1) {
                console.log("Correct answer!");
                rightFeedback() 
            } else {
                console.log("Incorrect answer.");
                wrongFeedback()
                penalty()
            }
            nextQuestion()
            nextAnswers()
            console.log(questionsCounter)

        })
    }
}

//This function replaces previous question text with next question text
function nextQuestion() {
    questionText.textContent = quizQuestions[questionsCounter].question;
    questionsContainer.appendChild(questionText);
    questionsCounter++
}

//This function replaces previous answers with next answers. 
// If final question answered, it finishes the game.

function nextAnswers() {
    answersContainer.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        answerButton = document.createElement("button");
        answerButton.textContent = quizQuestions[questionsCounter - 1].answers[i]
        answerButton.style.alignSelf = "center"
        answersContainer.appendChild(answerButton);
        answerButton.addEventListener("click", function () {
            if (this.textContent === correctAnswer2 || this.textContent === correctAnswer3
                || this.textContent === correctAnswer3 || this.textContent === correctAnswer4 ||
                this.textContent === correctAnswer5) {
                console.log("Correct answer!");
                rightFeedback() 
            } else {
                console.log("Incorrect answer.");
                wrongFeedback()
                penalty()
            }
            if (questionsCounter == 5) {
                gameOver()
            }
            else {
                nextQuestion()
                nextAnswers()
                console.log(questionsCounter)
            }})}}
        

// Function finishing the game
function gameOver() {
    clearInterval(timerInterval)
    let result = secondsLeft
    answersContainer.innerHTML = '';
    questionsContainer.innerHTML = '';
    feedback.classList.add('hide');
    endScreen.classList.remove('hide');
    finalScoreSpan.textContent = result



    console.log("The result is "  + result)
    console.log("GAME OVER")
}

// Function punishing player for wrong answer be removing seconds 
function penalty() {
    secondsLeft = timer.textContent = secondsLeft - 10
}

// //Function playing sound on wrong answer selection
// function wrongSound() {
// 	let wrong  = new Audio('./assets/sfx/incorrect.wav');
// 	wrong.play();
// }
// //Function playing sound on right answer selection
// function rightSound() {
// 	let right  = new Audio('./assets/sfx/correct.wav');
// 	right.play();
// }

function wrongFeedback() {
    feedback.classList.remove('hide');
    feedback.textContent = "Wrong answer!"
    document.body.appendChild(feedback)
    let wrong  = new Audio('./assets/sfx/incorrect.wav');
	wrong.play();
    setTimeout(function(){
        feedback.innerHTML = '';
        }, 1200);
}

function rightFeedback() {
    feedback.classList.remove('hide');
    feedback.textContent = "Correct answer!"
    document.body.appendChild(feedback)
    let right  = new Audio('./assets/sfx/correct.wav');
	right.play();
    setTimeout(function(){
    feedback.innerHTML = '';
    }, 1200);
}


