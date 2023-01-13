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
startButton.addEventListener("click", function() {
startTimer() //starts timer on button click
displayQuestion()})

//Timer function counts down from 10
//Resets back to 10 when finished
var secondsLeft = 10;

function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    secondsLeft = 10;
    }
  }, 500);
}

//function displaying questions.
// First it "disappears" the start screen
//Then it adds text to <h2 id="question-title"></h2> 
//Then it appends it to page
//Then it adds questions options

function displayQuestion(){
     startScreen.style.display = "none";
     questionText.textContent = "TEST QUESTION"
     
     document.body.appendChild(questionText);
     newQuestionButton ()
     newQuestionButton ()
     newQuestionButton ()
     newQuestionButton ()
    };


// function to add a new button (eventually containing an answer)

    function newQuestionButton (){
    let questionsContainer = document.createElement("div")
    questionsContainer.style.display = "flex";
    questionsContainer.style.flexDirection = "column";
    document.body.appendChild(questionsContainer)
    let newButton = document.createElement("button");
    newButton.style.width = newButton.offsetWidth + "300px";
    // Set the text content of the new button
    newButton.textContent = "Answer 1";
    questionsContainer.append(newButton)
    }

    