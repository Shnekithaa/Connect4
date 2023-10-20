let playerWon = document.getElementById("playerWon");
let coins = document.getElementById("coins");
let playerDetails = document.getElementById("playerDetails");
let playAgainBtn = document.getElementById("playAgainBtn");
let tie = document.getElementById("tie");
let heading = document.getElementById("heading");
let homeIcon = document.getElementById("homeIcon");

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

homeIcon.onclick = function(){
    location.href = "index.html";
}


let winner = localStorage.getItem("winner");

if(winner == "Player1"){
    playerWon.textContent = localStorage.getItem("player1");
    addPlayerToLeaderBoard(localStorage.getItem("player1"), localStorage.getItem("redCoinCount"));
    decideComments(localStorage.getItem("redCoinCount"));
}else if(winner == "Player2"){
    playerWon.textContent = localStorage.getItem("player2");
    addPlayerToLeaderBoard(localStorage.getItem("player2"), localStorage.getItem("yellowCoinCount"));
    decideComments(localStorage.getItem("yellowCoinCount"));
}else{
    playerWon.textContent = "It's a tie!!";
    tie.style.display = "none";
}


function addPlayerToLeaderBoard(player, coins){
    let playerData = JSON.parse(localStorage.getItem('leaderboard')) || [];

    const existingPlayer = playerData.find((entry) => entry.player === player);
    if (existingPlayer) {
        existingPlayer.coins = coins;
    } else {
        playerData.push({ player, coins });
    }

    playerData.sort((a, b) => a.coins - b.coins);

    localStorage.setItem('leaderboard', JSON.stringify(playerData));

    displayLeaderboard(playerData);
}

function displayLeaderboard(playerData){
    playerDetails.innerHTML = "";
    playerData.forEach((playerObj) => {
        let div = document.createElement('div');
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        playerDetails.appendChild(div);

        let para1 = document.createElement('p');
        para1.textContent = playerObj.player;

        let para2 = document.createElement('p');
        para2.textContent = playerObj.coins;

        div.appendChild(para1);
        div.appendChild(para2);
    });
}

// localStorage.clear()
