const choices = ["ROCK", "PAPER", "SCISSORS"];

const rockButton = document.querySelector("rock-button");
rockButton.addEventListener("click", function chooseRock() {
    checkChoice (0);
});

const paperButton = document.querySelector("paper-button");
paperButton.addEventListener("click", function choosePaper() {
    checkChoice (1);
});

const scissorsButton = document.querySelector("scissors-button");
scissorsButton.addEventListener("click", function chooseScissors() {
    checkChoice (2);
});

function checkChoice(userChoice)
{
    let computerChoice = Math.floor(Math.random() * 3);
    console.log("computer choice", computerChoice);
    console.log("my choice", userChoice);
    const selection = document.querySelector("#selection");
    selection.innerHTML = `<p> user choice : ${choices[userChoice]} </p> <p> computer choice : ${choices[computerChoice]
}