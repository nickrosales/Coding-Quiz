let timer = document.getElementById('count');
let quizQuestion = document.getElementById('mainHeader');
let choice1 = document.getElementById('choice1')
let choice2 = document.getElementById('choice2')
let choice3 = document.getElementById('choice3')
let choice4 = document.getElementById('choice4')
let timeLeft = 75;
let userans
let questNum = 0
let highscoreArr = []
let highscore = JSON.parse(localStorage.getItem('highscoreArr'));
let questions = [
    {
        question: "sdfgsdfg",
        choices: ["a", "b", "c", "d"], 
        answer: 2
    },
    {
        question: "dfgsdfgsdfg",
        choices: ["a", "b", "c", "d"],
        answer: 4
        
    },
    {
        question: "sdfgsdfgsdfg",
        choices: ["a", "b", "c", "d"],
        answer: 2
        
    },
    {
        question: "ssssss",
        choices: ["a", "b", "c", "d"],
        answer: 3
        
    },
    {
        question: "qqqqq",
        choices: ["a", "b", "c", "d"],
        answer: 1
        
    },
]

function displayQuestion () {
    quizQuestion.innerHTML = questions[questNum].question
    choice1.innerHTML = questions[questNum].choices[0]
    choice2.innerHTML = questions[questNum].choices[1]
    choice3.innerHTML = questions[questNum].choices[2]
    choice4.innerHTML = questions[questNum].choices[3]
};

function checkAns() {
    if(userans == questions[questNum].answer) {
        console.log('change to next question')
    } else {
        timeLeft = timeLeft - 15
        console.log('wrong')
    }
};
   

function countdown () {
    timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = `Time: ${timeLeft}`
        if(timeLeft <= 0){
            clearInterval(timeInterval);
            timeLeft = 0
            timer.textContent = `Time: ${timeLeft}`
            stopQuiz()
        }
    },1000);
};

function stopQuiz() {
    let score = timeLeft
    let initials = prompt(`Your score was ${timeLeft}! Please enter your initials.`)
    let results = {
        initials: initials,
        score: score
    };
    if(highscore === null) {
        highscoreArr = highscoreArr.concat(results);
        localStorage.setItem('highscoreArr', JSON.stringify(highscoreArr));
    } else {
        highscoreArr = highscore;
        highscoreArr = highscoreArr.concat(results);
        localStorage.setItem('highscoreArr', JSON.stringify(highscoreArr));
    };

    location.href = "./highscore.html";

};

countdown();
displayQuestion();

choice1.addEventListener('click', function() {
    userans = choice1.value
    checkAns();
    questNum++
    if(questNum < 5) {
        displayQuestion();
    } else {
        stopQuiz();
    }
});
choice2.addEventListener('click', function() {
    userans = choice2.value
    checkAns();
    questNum++
    if(questNum < 5) {
        displayQuestion();
    } else {
        stopQuiz();
    }
});
choice3.addEventListener('click', function() {
    userans = choice3.value
    checkAns();
    questNum++
    if(questNum < 5) {
        displayQuestion();
    } else {
        stopQuiz();
    }
});
choice4.addEventListener('click', function() {
    userans = choice4.value
    checkAns();
    questNum++
    if(questNum < 5) {
        displayQuestion();
    } else {
        stopQuiz();
    }
});


