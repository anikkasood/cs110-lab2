
//store all items in the class in a list
var items = document.getElementsByClassName("xo");
//parallel array called 'taken' to prevent overwrite in game
var istaken = [];
//istaken.length = 9;

//make player 1 start
var player = 1;




function play(selection) {
    
    //Go to user selection and store in item var.
    var item = items[selection - 1];
    var takenitem = istaken[selection - 1];


    //not working 
    istaken = [0, 0, 0, 0, 0, 0, 0, 0, 0];


    
    //THIS CHECK ISNT WORKING, CAN KEEP SELECTING THE SAME SQR. :(
    if (takenitem == 0){

        //player 2 == o
        if (player % 2 == 0){

            //set the users selection to o in the list
            item.innerHTML = "o";
            takenitem = 1;
            player += 1;
            
        }
        else{
            //player 1 == x
            item.innerHTML = "x";
            takenitem = 1;
            player += 1;
        
        }
    //end of check
    }
    //else do not change square b/c its taken

}
