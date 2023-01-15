let highScoresList = document.getElementById("highscores")
let scoresButtons = document.getElementById("scores-buttons")
let clear = document.getElementById("clear")


//append ol with high scores to the document and sets its style
document.body.appendChild(highScoresList)
highScoresList.style = "display: flex; flex-direction: column; text-align: center;";

//append buttons to the document and sets style
document.body.appendChild(scoresButtons)
scoresButtons.style = "display: flex; flex-direction: row; justify-content: center; margin-right: 330px";

//Function retrieving the up to date winners list from the local storage and adding it to the
//ol list.

function newScore() {

         let winnersArray = JSON.parse(localStorage.getItem("winnersArray"));
         for (i=0; i<winnersArray.length; i++) {
         scoreLi = document.createElement("li")
         scoreLi.textContent = winnersArray[i]
         scoreLi.style = "text-align: left; justify-content: center; margin-left: 400px; margin-right: 300px"
         highScoresList.appendChild(scoreLi)
         }
        }

newScore()


//Function clearing the list of winners and clearing local storage
clear.addEventListener("click", function () {
    highScoresList.innerHTML = ""
    localStorage.clear();
})