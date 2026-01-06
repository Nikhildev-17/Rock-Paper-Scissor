let myScr = document.querySelector("#user-score");
let compScr = document.querySelector("#comp-score");
let msg = document.querySelector(".msg-container");

let myscr = 0;
let compscr = 0;

let choices = document.querySelectorAll(".choice")

const generateChoice = () => {
    const choiceGen = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return choiceGen[randIdx];
}


const showResults = (userWin, choiceId, compGen) => {
    if(userWin){
        myscr += 1;
        myScr.innerText = myscr;
        msg.innerText = `You Win! Your ${choiceId} beats ${compGen}`;
        msg.style.backgroundColor = "green";
    }else{
        compscr += 1;
        compScr.innerText = compscr;
        msg.innerText = `You Lost! ${compGen} beats Your ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
} 

const playGame = (choiceId) => {
    let compGen = generateChoice();
    decideWinner(compGen, choiceId);
}

const decideWinner = (compGen, choiceId) => {
    
    if(choiceId == compGen){
        msg.innerText = "Match Drawn!"
        msg.style.backgroundColor = "#081b31"
    }
    else if(choiceId == "rock" && compGen == "scissor" || choiceId == "paper" && compGen == "rock" || choiceId == "scissor" && compGen == "paper"){
        let userWin = true;
        showResults(userWin, choiceId, compGen);
    }
    else{
        let userWin = false;
        showResults(userWin, choiceId, compGen);
    }
    
}



choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        let choiceId = choice.getAttribute("id");
        console.log("Choice was clicked", choiceId);
        playGame(choiceId);
    });
});