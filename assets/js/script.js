//selects the html element that contains the timer
let timer = document.getElementById('count');
//selects the html header that displays the quiz questions
let quizQuestion = document.getElementById('mainHeader');
//selects the list items the have the answers to the questions in it
let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');
let choice3 = document.getElementById('choice3');
let choice4 = document.getElementById('choice4');
//assings how much time the timer starts at
let timeLeft = 75;
//creates an empty global variable 
let userans;
//assigns what number of question youre on
let questNum = 0;
//empty array that will store info to send to local storage 
let highscoreArr = [];
let highscore = JSON.parse(localStorage.getItem('highscoreArr'));
//array of objects with the quiz questions, choices and answer 
let questions = [
    {
        question: "Whats the proper way to create a varible in javascript?",
        choices: ["name = 'Josh'", "var name = 'Josh'", "createvar name = 'Josh'", "'Josh' = name"], 
        answer: 2
    },
    {
        question: "What does the term 'API' stand for",
        choices: ["Application Performace Interface", "Application Problem Interface", "Apreciation Prose Interjection", "Application Programming Interface"],
        answer: 4
        
    },
    {
        question: "What is used used to store multiple values in a single variable?",
        choices: ["Variable", "Array", "Boolean", "Function"],
        answer: 2
        
    },
    {
        question: "What is a collection of properties that are assigined a key and a value?",
        choices: ["Array", "Variable", "Object", "Integer"],
        answer: 3
        
    },
    {
        question: "Which of the following allows the user to type in their own custom answer?",
        choices: ["prompt", "alert", "confirm", "None of the above"],
        answer: 1
        
    },
]

//displays the questoin and choices when called based on what question number your on 
function displayQuestion () {
    quizQuestion.innerHTML = questions[questNum].question
    choice1.innerHTML = questions[questNum].choices[0]
    choice2.innerHTML = questions[questNum].choices[1]
    choice3.innerHTML = questions[questNum].choices[2]
    choice4.innerHTML = questions[questNum].choices[3]
};

//checks if the answer is correct if its not correct subtracts 15 seconds off the time
function checkAns() {
    if(userans == questions[questNum].answer) {
        return;
    } else {
        timeLeft = timeLeft - 15
    }
};
   
//starts the counts down when called and stops the timer and the quiz when it hits 0
function countdown () {
    timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = `Time: ${timeLeft}`
        if(timeLeft <= 0){
            clearInterval(timeInterval);
            timeLeft = 0
            timer.textContent = `Time: ${timeLeft}`
            if(questNum != 5){
                stopQuiz()
        }
        }
    },1000);
};

//stops the quiz and asks the user to enter initials and show them their score
function stopQuiz() {
    if(timeLeft < 0){
        timeLeft = 0
    }
    let score = timeLeft
    let initials = prompt(`Your score was ${timeLeft}! Please enter your initials.`)
    //stores users score and initals in object
    let results = {
        initials: initials,
        score: score
    };
    //saves object into an array then saves to local storage
    if(highscore === null) {
        highscoreArr = highscoreArr.concat(results);
        localStorage.setItem('highscoreArr', JSON.stringify(highscoreArr));
    } else {
        highscoreArr = highscore;
        highscoreArr = highscoreArr.concat(results);
        localStorage.setItem('highscoreArr', JSON.stringify(highscoreArr));
    };
    //directs you to the highscore html page
    location.href = "./highscore.html";

};

//starts coutn down when page is loaded
countdown();
//fills the 1st question when page is loaded
displayQuestion();

//event listener stores which choice the user picks
choice1.addEventListener('click', function() {
    userans = choice1.value
    //checks if answer is correct
    checkAns();
    //adds 1 to question number
    questNum++
    //displays next question with the updated question number or end the quiz after the 5th question
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