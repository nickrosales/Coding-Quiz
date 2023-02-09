let scoreList = document.getElementById("scores");
let inList = document.getElementById("initials");

//pull data from loacal storage and displays it on the highscore html
function highscore () {

    scoreList.textContent = ""
    let highscores = JSON.parse(localStorage.getItem('highscoreArr'));
    if(highscores !== null) {
        for(i = 0; i < highscores.length; i++) {
            let scoreItem = document.createElement("li");
            let inItem = document.createElement("li");
            scoreItem.textContent = highscores[i].score;
            inItem.textContent = highscores[i].initials;
            scoreList.appendChild(scoreItem);
            inList.appendChild(inItem);
        }
    } else {
        return;
    }
};

highscore();