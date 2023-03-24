//Bubble Factory Test Lab
let scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

 let highScore = 0;
 let output;
 
 for (i=0;i<scores.length;i++) {
    output = 'Bubble solution #' + i + ' score: ' + scores[i] + '</br>';
    document.write(output);

    if (scores[i] > highScore) {
        highScore = scores[i];
    }
}

document.write("Bubbles tests: " + scores.length + "</br>");
document.write("Highest bubble score: " + highScore + "</br>");

let bestSolutions = [];
for (i=0;i<scores.length;i++) {
    if(scores[i] == highScore ) {
        bestSolutions.push(i);
    }
}

document.write("Solutions with the highest score: " + bestSolutions);
