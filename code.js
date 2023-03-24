const word = "bottles";
let count = 11;
while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");

    count = count - 1;
    
    if (count > 0) {
        console.log(count + " " + word + " of beer on the wall.");
    } else {
        console.log("No more " + word + " of beeer on the wall.");
    }
}

//Test for jokes
const joke = "JavaScript walked into a bar....</br>";
const punchline = "Better watch out for those semi-colons.";
let toldJoke = true;

if (toldJoke == false) {
    document.write(punchline);
} else {
    document.write(joke);
}
//Movie Night
var zipCode = 98104;
var joesFavoriteMovie = "Forbiddev Planet";
var movieTickets = 7;

if (movieTickets >= 9) {
    document.write('Too much!');
} else {
    document.write("We're going to see " + joesFavoriteMovie);
}