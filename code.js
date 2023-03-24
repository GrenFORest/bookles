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
const joke = "JavaScript walked into a bar....";
let toldJoke = true;
const punchline = "Better watch out for those semi-colons.";

if (toldJoke == false) {
    document.write(punchline);
} else {
    document.write(joke);
}
//Movie Night