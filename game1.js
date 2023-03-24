let locationOne = 3;
let locationTwo = 4;
let locationThree = 5;

let guess;

let hits = 0;
let guesses =0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, Fire! (enter a number from 0 - 6):");
    if (guess<0 || guess>6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;

        if(guess == locationOne|| guess==locationTwo|| guess==locationThree) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("you sank my battleship!");
            } else {
                alert("MI$$");
            }
        }
    }
}
let stats = "You took" + guesses + "guesses to sink the battleship, "+
      "which means your shooting accuracy was "+ (3/guesses);

alert(stats);
