let highScoresList = document.getElementById("highscores")
let scoresButtons = document.getElementById("scores-buttons")
let scoresWrapper = document.getElementById("scores-wrapper")
let clear = document.getElementById("clear")

document.body.appendChild(scoresWrapper)
scoresWrapper.style = "display: flex; flex-direction: column"
//append ol with high scores to wrapper and set its style
scoresWrapper.appendChild(highScoresList)
highScoresList.style = "align-items: center; justify-content: flex-start"

//append buttons to the wrapper and sets style
scoresWrapper.appendChild(scoresButtons)
scoresButtons.style = "display: flex; flex-direction: row;";

//Function retrieving the up to date winners list from the local storage and adding it to the
//ol list.

function newScore() {

         let winnersArray = JSON.parse(localStorage.getItem("winnersArray"));
         for (i=0; i<winnersArray.length; i++) {
         scoreLi = document.createElement("li")
         scoreLi.textContent = winnersArray[i]
         highScoresList.appendChild(scoreLi)
         }
        }

newScore()


//Function clearing the list of winners and clearing local storage
clear.addEventListener("click", function () {
    highScoresList.innerHTML = ""
    localStorage.clear();
})