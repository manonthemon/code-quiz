let highScoresList = document.getElementById("highscores")
let storedScore = JSON.parse(localStorage.getItem("winner"));

console.log(storedScore)

highScoresList.style = "display: flex; flex-direction: column; text-align: center;";
    document.body.appendChild(highScoresList)
    
    function newScore() {
        scoreEntry = document.createElement("li")
         scoreEntry.style = "text-align: left; margin: 30px"
        
         scoreEntry.appendChild(document.createTextNode(storedScore))
         highScoresList.append(scoreEntry)
        //  scoreEntry.textContent = storedScore
        }
 
        newScore()
 

    // function function1() {
    //     var ul = document.getElementById("list");
    //     var li = document.createElement("li");
    //     li.appendChild(document.createTextNode("Four"));
    //     ul.appendChild(li);
    //   }