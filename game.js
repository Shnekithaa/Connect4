
var playerRed = "R";
var playerYellow = "Y";
var currentPlayer = playerRed;

var gameOver = false;
var board;
var currentColumns;

var rows = 6;
var columns = 7;

let coinCount = 0;
let redCount = 0;
let yellowCount = 0;

window.onload = function(){
    setGame();
}

function setGame(){
    board = [];
    currentColumns = [5, 5, 5, 5, 5, 5, 5];
    for(let r = 0; r < rows; r++){
        let row = [];
        for(let c = 0; c < columns; c++){
            row.push(" ");

            let tile = document.createElement('div');
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener('click', setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece(){
    if(gameOver){
        return;
    }

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = currentColumns[c];
    if(r < 0){
        return;
    }

    board[r][c] = currentPlayer;
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if(currentPlayer == playerRed){
        redCount += 1;
        coinCount += 1;
        tile.classList.add("red-piece");
        currentPlayer = playerYellow;
    }else{
        yellowCount += 1;
        coinCount += 1;
        tile.classList.add("yellow-piece");
        currentPlayer = playerRed;
    }

    localStorage.setItem("coinCount", coinCount);
    localStorage.setItem("redCoinCount", redCount);
    localStorage.setItem("yellowCoinCount", yellowCount);

    r -= 1;
    currentColumns[c] = r;

    checkWinner();
}

function checkWinner(){
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns - 3; c++){
            if(board[r][c] != " "){
                if(board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]){
                    setWinner(r,c);
                    return;
                }
            }
        }
    }

    for(let c = 0; c < columns; c++){
        for(let r = 0; r < rows-3; r++){
            if(board[r][c] != " "){
                if(board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]){
                    setWinner(r,c);
                    return;
                }
            }
        }
    }

    for(let r = 0; r < rows-3; r++){
        for(let c = 0; c < columns - 3; c++){
            if(board[r][c] != " "){
                if(board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]){
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    for(let r=3; r < rows; r++){
        for(let c = 0; c < columns-3; c++){
            if(board[r][c] != " "){
                if(board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]){
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
}

function setWinner(r, c){
    if(board[r][c] == playerRed){
        location.href = "gameover.html";
        localStorage.setItem("winner", "Player1");
    }else if(board[r][c] == playerYellow){
        location.href = "gameover.html";
        localStorage.setItem("winner", "Player2");
    }
    gameOver = true;
}

