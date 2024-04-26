
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

var xscore = 0; 
var yscore = 0; 

var xscore_label = document.getElementById("x-score");
//xscore_label.innerHTML= xscore;


var yscore_label = document.getElementById("y-score");
//yscore_label.innerHTML= yscore;

var printWinner = document.getElementById("outputWinner");

istaken = [0, 0, 0, 0, 0, 0, 0, 0, 0];
board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function play(selection) {
    var turnlabel = document.getElementById("player-turn");
    
    var item = items[selection - 1];
   
    if (istaken[selection - 1] === 0){ 

        //player 2 == o
        if (player % 2 == 0){

            //set the users selection to o in the list
            item.innerHTML = "O";
            item.style.backgroundColor = "#ff8080";
            istaken[selection - 1] = 2;
            player += 1;
            turnlabel.innerHTML= "X";
            //winner = isWinner();

        }
        else{
            //player 1 == x
            item.innerHTML = "X";
            item.style.backgroundColor = "#ff8080";
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
            reset();
        } else if (winner === "y") {
            yscore += 1; 
            yscore_label.innerHTML = yscore;
            reset();
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

    outputWinner.innerHTML = "";

}