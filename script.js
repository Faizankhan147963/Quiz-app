var questionBox = document.querySelector(".questionBox")
var choiceBox = document.querySelector(".choiceBox")
var nextButton = document.querySelector(".nextButton")
var scoreBoard = document.querySelector(".scoreBoard")
var alertBopx = document.querySelector(".alertBopx")


const quiz = [
    {
        question: "1). Which of the following is not a CSS box model property?",
        choices: ["margin", "padding", "border-radius", "border-collapse"],
        answer: "border-collapse"
    },
    {
        question: "2). Which of the following is not a valid way to declare a function in JavaScript?",
        choices: ["function myFunction() {}", " let myFunction = function() {};", "myFunction: function() {}", "const myFunction = () => {};"],
        answer: "myFunction: function() {}"
    },
    {
        question: "3). Which of the following is not a JavaScript data type?",
        choices: ["string", "boolean", "object", "float"],
        answer: "float"
    },
    {
        question: "4). What is the purpose of the this keyword in JavaScript?",
        choices: ["It refers to the current function.", "It refers to the current object.", "It refers to the parent object.", " It is used for comments."],
        answer: "It refers to the current object."
    }
];

let currentIndex = 0;
let score = 0;
let over = false;
function StartGame() {
    const questionnDetails = quiz[currentIndex];
    questionBox.textContent = questionnDetails.question;
    choiceBox.textContent = ""
    for (let i = 0; i < questionnDetails.choices.length; i++) {
        const currentDiv = questionnDetails.choices[i];
        const choiceDiv = document.createElement("div")
        choiceDiv.classList.add("choice")
        choiceDiv.textContent = currentDiv;
        choiceDiv.addEventListener("click", () => {
            if (choiceDiv.classList.contains("select")) {
                choiceDiv.classList.remove("select")
            } else {
                choiceDiv.classList.add("select")
            }
        })
        choiceBox.appendChild(choiceDiv);
    }

}

function checkAnswer() {
    let seletedChoice = document.querySelector(".choice.select")
    if (seletedChoice.innerHTML === quiz[currentIndex].answer) {
        alert("Right Answer")
    } else {
        alert(`Wrong Answer Rigth Is -> ${quiz[currentIndex].answer}`)
    }
    currentIndex++;
    if (currentIndex < quiz.length) {
        StartGame();
    } else {
        showScore();
        over = true;
    }
}

function showScore() {
    scoreBoard.innerHTML = `Your Score : ${score} : Out Of ${quiz.length}`
    questionBox.textContent = ""
    choiceBox.textContent = ""
    nextButton.textContent = "Play Again!.."
}

function alert(msg) {
    alertBopx.style.display = "block"
    alertBopx.textContent = msg;
    setTimeout(() => {
        alertBopx.style.display = "none"
    }, 1000);
}

nextButton.addEventListener("click", () => {

    if (over) {
        alert(`Restart The Quiz`)
        nextButton.innerHTML = "NEXT"
        scoreBoard.textContent = ""
        currentIndex = 0;
        StartGame();
        over = false;
        score = 0;
    } else {
        checkAnswer();
    }
})



StartGame();