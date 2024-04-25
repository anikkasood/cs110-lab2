
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
xscore_label.innerHTML= xscore;

var yscore_label = document.getElementById("y-score");
yscore_label.innerHTML= yscore;

//not working 
istaken = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function play(selection) {
    var turnlabel = document.getElementById("player-turn");
    
    
    //Go to user selection and store in item var.
    var item = items[selection - 1];
    var takenitem = istaken[selection - 1]; // hold istaken prev value
    
    istaken[selection-1] = 1; // set new istaken value
    
    if (takenitem == 0){ // if it was previously not taken, you can play that space

        //player 2 == o
        if (player % 2 == 0){

            //set the users selection to o in the list
            item.innerHTML = "O";
            player += 1;
            turnlabel.innerHTML= "X";
            
        }
        else{
            //player 1 == x
            item.innerHTML = "X";
            takenitem = 1;
            player += 1;
            turnlabel.innerHTML= "O";
        
        }
    //end of check
    }

    
    //else do not change square b/c its taken

}
