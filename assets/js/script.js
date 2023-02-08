let timer = document.getElementById('count');
let quizQuestion = document.getElementById('mainHeader');
let choice1 = document.getElementById('choice1')
let choice2 = document.getElementById('choice2')
let choice3 = document.getElementById('choice3')
let choice4 = document.getElementById('choice4')
let timeLeft = 75;
let userans
let questions = [
    {
        question: "sdfgsdfg",
        choices: ["a", "b", "c", "d"], 
        answer: 2
    },
    {
        question: "",
        choices: [],
        
    },
    {
        question: "",
        choices: [],
        
    },
    {
        question: "",
        choices: [],
        
    },
    {
        question: "",
        choices: [],
        
    },
]

function displayQuestion () {
    quizQuestion.innerHTML = questions[0].question
    choice1.innerHTML = questions[0].choices[0]
    choice2.innerHTML = questions[0].choices[1]
    choice3.innerHTML = questions[0].choices[2]
    choice4.innerHTML = questions[0].choices[3]
};

function checkAns(userans) {
    if(userans == questions[0].answer) {
        console.log('change to next question')
    } else {
        timeLeft = timeLeft - 15
        console.log('wrong')
    }
}

function countdown () {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = `Time: ${timeLeft}`
        if(timeLeft === 0){
            //end quiz go to display score
        }
    },1000);
};

countdown();
displayQuestion();

choice1.addEventListener('click', function() {
    userans = choice1.value
    checkAns(userans);
    
});
choice2.addEventListener('click', function() {
    userans = choice2.value
    checkAns(userans);
});
choice3.addEventListener('click', function() {
    userans = choice3.value
    checkAns(userans);
});
choice4.addEventListener('click', function() {
    userans = choice4.value
    checkAns(userans);
});


