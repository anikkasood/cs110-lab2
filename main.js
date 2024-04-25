
//store all items in the class in a list
var items = document.getElementsByClassName("xo");
var printw = document.getElementById("printwinner")
//parallel array called 'taken' to prevent overwrite in game
var istaken = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var grid = ["a", "a", "a", "a", "a", "a", "a", "a", "a"];

//make player 1 start
var player = 1;




function play(selection) {
    
    //Go to user selection and store in item var.
    var item = items[selection - 1];
  
    if(player >= 10){
        //board is full and no one won...? so its a tie
        // need to restart the board, "click new game" 
    }

    if (istaken[selection - 1] == 0){

        //player 2 == o
        if (player % 2 == 0){

            //set the users selection to o in the list
            item.innerHTML = "o";
            istaken[selection - 1] = 1;
            grid[selection - 1] = "o";
            player += 1;
            
        }
        else{
            //player 1 == x
            item.innerHTML = "x";
            istaken[selection - 1] = 1;
            grid[selection - 1] = "x";
            player += 1;
        
        }
    //end of check
    }

}


function win(){
    
    //diagonal
    if((grid[0] == grid[4] == grid[8] == "x") || (grid[2] == grid[4] == grid[6] == "x") ){
        //x wins diagonally
        printw.innerHTML = "x Wins!"
    }
    else if ((grid[0] == grid[4] == grid[8] == "o") || (grid[2] == grid[4] == grid[6] == "o")){
        //o wins diagonally
        printw.innerHTML = "o Wins!"
    }

    //horizontal
    else if((grid[0] == grid[3] == grid[6] == "x") || (grid[1] == grid[4] == grid[7] == "x") || (grid[2] == grid[5] == grid[8] == "x")){
        //x wins horizontally
        printw.innerHTML = "x Wins!"
    }
    else if((grid[0] == grid[3] == grid[6] == "o") || (grid[1] == grid[4] == grid[7] == "o") || (grid[2] == grid[5] == grid[8] == "o")){
        //o wins horizontally
        printw.innerHTML = "o Wins!"
    }

    //vertical
    else if((grid[0] == grid[1] == grid[2] == "x") || (grid[3] == grid[4] == grid[5] == "x") || (grid[6] == grid[7] == grid[8] == "x")){
        //x wins vertically
        printw.innerHTML = "x Wins!"
    }
    else if((grid[0] == grid[1] == grid[2] == "o") || (grid[3] == grid[4] == grid[5] == "o") || (grid[6] == grid[7] == grid[8] == "o")){
        //o wins vertically
        printw.innerHTML = "o Wins!"
    }

}

// function full(){

//     for (var i = 0; i < 9; i++) {
//         if(grid[i] == "a"){
//             return false;
//         }

//         return true;
//     }

// }