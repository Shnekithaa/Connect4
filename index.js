let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let playBtn = document.getElementById("playBtn");
let instructions = document.getElementById("instructions");

function checkNames(){
    if(player1.value === "" || player2.value === ""){
        alert("Enter valid name");
    }
}

function showInstructions(){
    location.href = "instructions.html";
}

function startGame(){
    checkNames();
    if(player1.value !== "" && player2.value !== ""){
        location.href = "game.html";
    }
}

function storePlayerName1(event){
    let name = event.target.value;
    localStorage.setItem("player1", name);
}
function storePlayerName2(event){
    let name = event.target.value;
    localStorage.setItem("player2", name);
}

player1.addEventListener("keyup", storePlayerName1);
player2.addEventListener("keyup", storePlayerName2);
playBtn.addEventListener("click", startGame);
instructions.addEventListener("click", showInstructions);