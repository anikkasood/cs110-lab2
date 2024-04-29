
//store all items in the class in a list
var items = document.getElementsByClassName("xo");
//parallel array called 'taken' to prevent overwrite in game
var istaken = [];
//istaken.length = 9;

//make player 1 start
var player = 1;

console.log("script loaded") 

var turnlabel = document.getElementById("player-turn");
turnlabel.innerHTML= "X";

var playerNum = document.getElementById("playerNumLabel");
playerNum.innerHTML = "Switch to AI";

var modes = ["Switch to Two Player", "Switch to AI"];

var xscore = 0; 
var yscore = 0; 

var xscore_label = document.getElementById("x-score");
//xscore_label.innerHTML= xscore;


var yscore_label = document.getElementById("y-score");
//yscore_label.innerHTML= yscore;

var printWinner = document.getElementById("outputWinner");

istaken = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let scores = {
    x: -1, 
    y: 1, //o
    b: 0, // it's a tie
    a: 0
}

mode = 1;

function switchMode() {
    newGame();
    mode +=1;
    if(mode %2 == 0){ // mode is divisible by 2 : AI
        playerNum.innerHTML = modes[0];
    }
    else{
        playerNum.innerHTML = modes[1];
    }
}

function play(selection){
    if(mode %2 == 0){ // mode is divisible by 2 : AI
        playAI(selection);
    }
    else{
        play2Player(selection);
    }
}

/* referenced geeks for geeks article for ai portion! */

function bestMove(){
    let bestScore = -Infinity; 
    let bestMove = null;

    // check each spot
    for (let i = 0; i < 9; i++){
        if(istaken[i] === 0){
            istaken[i] = 2; 

            var currMove = minmax(istaken, 0, false); 
            istaken[i] = 0; 

            if(currMove > bestScore){ // curr move is best score
                bestScore = currMove; 
                bestMove = i;
            }
        }
    }
    return bestMove; // return index of best possible move
}

function minmax(istaken, depth, isMaximizing){ 
    // can ai win w curr move
    if(isWinner() === 'y'){ // if O is the winner
        return 1; 
    } else if(isWinner() === 'x'){ // if X is the winner
        return -1; 
    } else if(full()){ //tie
        return 0;
    }

    // max
    if(isMaximizing){
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++){
            if(istaken[i] === 0){
                istaken[i] = 2;
                let value = minmax(istaken, depth+1, false);
                istaken[i] = 0; 
                bestScore = Math.max(value, bestScore); 
            }
        }
        return bestScore;
    }
    else{ // min
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++){
            if(istaken[i] === 0){
                istaken[i] = 1;
                
                let value = minmax(istaken, depth+1, true); 

                istaken[i] = 0; 
                bestScore = Math.min(value, bestScore); 
            }
        }
        
        return bestScore;
    }
}


function play2Player(selection){
    
        var item = items[selection - 1];
       
        if (istaken[selection - 1] === 0){ 
    
            //player 2 == o
            if (player % 2 == 0){
    
                //set the users selection to o in the list
                item.innerHTML = "O";
                item.style.backgroundColor = "#ff8080";
                item.style.height = "159px";
                istaken[selection - 1] = 2;
                player += 1;
                turnlabel.innerHTML= "X";
    
            }
            else{
                //player 1 == x
                item.innerHTML = "X";
                item.style.backgroundColor = "#ff8080";
                item.style.height = "159px";
                istaken[selection - 1] = 1;
                player += 1;
                turnlabel.innerHTML= "O";
                //winner = isWinner();
            
            }
    
            // CHECK IF WINNER
            //  end game if yes, otherwise continue
            var winner = isWinner();
            if (winner === "x") {
                xscore += 1; 
                xscore_label.innerHTML = xscore;
                for (var i = 0; i < 9; i++) {
                    istaken[i] = 3;
                }
                
                
            } else if (winner === "y") {
                yscore += 1; 
                yscore_label.innerHTML = yscore;
                for (var i = 0; i < 9; i++) {
                    istaken[i] = 3;
                }
                
            }
    
    
        }
}
function playAI(selection) {
    
    var item = items[selection - 1];
   
    if (istaken[selection - 1] === 0){ // if the current square is empty
        // fill the spot with the user's move    
        item.innerHTML = "X";
        item.style.backgroundColor = "#ff8080";
        item.style.height = "159px";
        istaken[selection - 1] = 1;
        player += 1;
        turnlabel.innerHTML= "O";

        // CHECK IF WINNER
        //  end game if yes, otherwise continue
        var winner = isWinner();
        if (winner === "x") {
            xscore += 1; 
            xscore_label.innerHTML = xscore;
            for (var i = 0; i < 9; i++) {
                istaken[i] = 3;
            }
            
            
        } else if (winner === "y") {
            yscore += 1; 
            yscore_label.innerHTML = yscore;
            for (var i = 0; i < 9; i++) {
                istaken[i] = 3;
            }
        }

        // AI TURN
        aiMove = bestMove();
        item = items[aiMove];
        item.innerHTML = "O";
        item.style.backgroundColor = "#ff8080";
        item.style.height = "159px";
        istaken[aiMove] = 2;
        player += 1;
        turnlabel.innerHTML= "X"; 

        


        // CHECK IF WINNER
        //  end game if yes, otherwise continue
        var winner = isWinner();
        if (winner === "x") {
            xscore += 1; 
            xscore_label.innerHTML = xscore;
            for (var i = 0; i < 9; i++) {
                istaken[i] = 3;
            }
            
            
        } else if (winner === "y") {
            yscore += 1; 
            yscore_label.innerHTML = yscore;
            for (var i = 0; i < 9; i++) {
                istaken[i] = 3;
            }
        }


    }

}


function isWinner(){
    
    // Diagonal
    if((istaken[0] === 1 && istaken[4] === 1 && istaken[8] === 1) || (istaken[2] === 1 && istaken[4] === 1 && istaken[6] === 1)) {
        // X wins diagonally
        outputWinner.innerHTML = "X Wins!";
        return "x";
    } else if ((istaken[0] === 2 && istaken[4] === 2 && istaken[8] === 2) || (istaken[2] === 2 && istaken[4] === 2 && istaken[6] === 2)) {
        // O wins diagonally
        outputWinner.innerHTML = "O Wins!";
        return "y";
    }

    // Horizontal
    else if((istaken[0] === 1 && istaken[3] === 1 && istaken[6] === 1) || (istaken[1] === 1 && istaken[4] === 1 && istaken[7] === 1) || (istaken[2] === 1 && istaken[5] === 1 && istaken[8] === 1)) {
        // X wins horizontally
        outputWinner.innerHTML = "X Wins!";
        return "x";
    } else if((istaken[0] === 2 && istaken[3] === 2 && istaken[6] === 2) || (istaken[1] === 2 && istaken[4] === 2 && istaken[7] === 2) || (istaken[2] === 2 && istaken[5] === 2 && istaken[8] === 2)) {
        // O wins horizontally
        outputWinner.innerHTML = "O Wins!";
        return "y";
    }

    // Vertical
    else if((istaken[0] === 1 && istaken[1] === 1 && istaken[2] === 1) || (istaken[3] === 1 && istaken[4] === 1 && istaken[5] === 1) || (istaken[6] === 1 && istaken[7] === 1 && istaken[8] === 1)) {
        // X wins vertically
        outputWinner.innerHTML = "X Wins!";
        return "x";
    } else if((istaken[0] === 2 && istaken[1] === 2 && istaken[2] === 2) || (istaken[3] === 2 && istaken[4] === 2 && istaken[5] === 2) || (istaken[6] === 2 && istaken[7] === 2 && istaken[8] === 2)) {
        // O wins vertically
        outputWinner.innerHTML = "O Wins!";
        return "y";
    } else if(full()){ // if the grid is full check if there's a tie
        outputWinner.innerHTML = "It's a tie!";
        return "b";
    } else {
        outputWinner.innerHTML = "";
        return "a";
    }

}

function reset(){

    for (var i = 0; i < 9; i++) {
        istaken[i] = 0;
        items[i].innerHTML = "";
        items[i].style.backgroundColor = "pink";
    }

    player = 1;
    //your turn to output x
    turnlabel.innerHTML= "X";

    yscore = 0; 
    yscore_label.innerHTML = yscore;

    xscore = 0; 
    xscore_label.innerHTML = xscore;

    outputWinner.innerHTML = "";

}

function newGame(){

    //reset background
    for (var i = 0; i < 9; i++) {
        istaken[i] = 0;
        items[i].innerHTML = "";
        items[i].style.backgroundColor = "pink";
    }

    //reset board
    for (var i = 0; i < 9; i++) {
        istaken[i] = 0;
    }

    //make x start
    player = 1;
    turnlabel.innerHTML= "X";

    //clear winner
    outputWinner.innerHTML = "";

}


function full(){
    var count = 0;
    for (var i = 0; i < 9; i++) {
        if(istaken[i]===0){
            count += 1;
        }
    }
    if (count === 0) { // there are no 0s, so the grid is full
        return true;
    }
    else return false;

}
