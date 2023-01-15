let highScoresList = document.getElementById("highscores")
let scoresButtons = document.getElementById("scores-buttons")

document.body.appendChild(highScoresList)
scoresButtons.style = "display: flex; flex-direction: row; justify-content: center; margin-right: 330px";
document.body.appendChild(scoresButtons)
highScoresList.style = "display: flex; flex-direction: column; text-align: center;";
    



function newScore() {

         let winnersArray = JSON.parse(localStorage.getItem("winnersArray"));
         console.log(winnersArray)
         for (i=0; i<winnersArray.length; i++) {
         scoreLi = document.createElement("li")
         scoreLi.textContent = winnersArray[i]
         scoreLi.style = "text-align: left; justify-content: center; margin-left: 400px; margin-right: 300px"
         highScoresList.appendChild(scoreLi)
         }
        }

        newScore()
    

 
