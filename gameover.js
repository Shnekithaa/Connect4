let playerWon = document.getElementById("playerWon");
let coins = document.getElementById("coins");
let playerDetails = document.getElementById("playerDetails");
let playAgainBtn = document.getElementById("playAgainBtn");
let tie = document.getElementById("tie");
let heading = document.getElementById("heading");

let commentsArr = ["Awesome!!", "Good Job!!", "Almost There!!"];

function decideComments(coins){
    if(coins <= 4){
        heading.textContent = commentsArr[0];
    }else if(coins > 4 && coins <= 8){
        heading.textContent = commentsArr[1];
    }else{
        heading.textContent = commentsArr[2];
    }
}

playAgainBtn.onclick = function(){
    location.href = "game.html";
}

function createAndAppendPlayer(name, coins){
    let playerName = document.createElement('p');
    playerName.id = "leaderBoardPlayer";
    playerName.textContent = name;
    playerDetails.appendChild(playerName);

    let numberOfCoins = document.createElement('p');
    numberOfCoins.textContent = coins.toString() + " coins" ;
    playerDetails.appendChild(numberOfCoins);
}


let winner = localStorage.getItem("winner");

if(winner == "Player1"){
    playerWon.textContent = localStorage.getItem("player1");
    createAndAppendPlayer(localStorage.getItem("player1"), localStorage.getItem("redCoinCount"));
    decideComments(localStorage.getItem("redCoinCount"));
}else if(winner == "Player2"){
    playerWon.textContent = localStorage.getItem("player2");
    createAndAppendPlayer(localStorage.getItem("player2"), localStorage.getItem("yellowCoinCount"));
    decideComments(localStorage.getItem("yellowCoinCount"));
}else{
    playerWon.textContent = "It's a tie!!";
    tie.style.display = "none";
}

window.onload = function(){
    localStorage.setItem("playerCoins", JSON.stringify(playersArr));
}
