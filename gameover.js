let playerWon = document.getElementById("playerWon");
let coins = document.getElementById("coins");
let playerDetails = document.getElementById("playerDetails");
let playAgainBtn = document.getElementById("playAgainBtn");

playAgainBtn.onclick = function(){
    location.href = "game.html";
}

function createAndAppendPlayer(name, coins){
    let playerName = document.createElement('p');
    playerName.id = "leaderBoardPlayer";
    playerName.textContent = name;
    playerDetails.appendChild(playerName);

    let numberOfCoins = document.createElement('p');
    numberOfCoins.textContent = coins;
    playerDetails.appendChild(numberOfCoins);
}


let winner = localStorage.getItem("winner");
console.log(winner);

if(winner == "Player1"){
    playerWon.textContent = localStorage.getItem("player1");
    createAndAppendPlayer(localStorage.getItem("player1"), localStorage.getItem("redCoinCount"));
}else if(winner == "Player2"){
    playerWon.textContent = localStorage.getItem("player2");
    createAndAppendPlayer(localStorage.getItem("player2"), localStorage.getItem("yellowCoinCount"));
}

let coinsCount = localStorage.getItem("coinCount");
console.log(coinsCount);

