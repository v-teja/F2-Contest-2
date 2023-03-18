

//opening ceremony
function OpeningCeremony() {
    var scores = { red: 0, blue: 0, green: 0, yellow: 0 };
    console.log("Let the games begin");

    //takes 1000 time
    setTimeout(function () {
        console.log(`Scores: ${JSON.stringify(scores)}`)
        console.log("Starting Race 100M...");
        Race100M(scores,LongJump)
    }, 1000);
}

//race100M
function Race100M(scores, callback) {
    var previousScore = {...scores}
    //generating random times 
    var redTime = Math.floor(Math.random() * 6 + 10);
    var blueTime = Math.floor(Math.random() * 6 + 10);
    var greenTime = Math.floor(Math.random() * 6 + 10);
    var yellowTime = Math.floor(Math.random() * 6 + 10);

    //award 1st and 2nd prize 
    var times = [redTime, blueTime, greenTime, yellowTime];
    var sortedTimes = times.sort();
    var firstPlace = times.indexOf(sortedTimes[0]);
    var secondPlace = times.indexOf(sortedTimes[1]);

    //add points to first and second place
    scores[Object.keys(scores)[firstPlace]] += 50;
    scores[Object.keys(scores)[secondPlace]] += 25;

    //log scores
    console.log(`Previous scores: ${JSON.stringify(previousScore)}`);
    console.log(`100M Race Completed! ${Object.keys(scores)[firstPlace]} won!`);
    console.log(`Updated scores: ${JSON.stringify(scores)}`);
   

    // 100M race takes 3000
    setTimeout(() => {
    console.log("Starting Long Jump...");
    callback(scores, HighJump);
    }, 3000);
}
//LongJump
function LongJump(scores, callback) {
    var previousScore = {...scores}
    //random selection of color
    var colors = Object.keys(scores);
    var selectedColor = colors[Math.floor(Math.random() * 4)];
    scores[selectedColor] += 150;

    //log scores
    console.log(`Previous scores: ${JSON.stringify(previousScore)}`);
    console.log(`Long Jump completed! ${selectedColor} won!`);
    console.log(`Updated scores: ${JSON.stringify(scores)}`);

    //long jump takes 2000
    setTimeout(() => {
        console.log("Starting High Jump...");
        callback(scores, AwardCeremony);
      }, 2000);
}

//HighJump
function HighJump(scores, callback) {
    var previousScore = {...scores}
    //ask user for winner
    var highestColor = prompt("Which color secured the highest jump?");
    if (highestColor && Object.keys(scores).includes(highestColor.toLowerCase())) {
        // Increment score of highest color 
        scores[highestColor.toLowerCase()] += 100;
    
        // Log scores
        console.log(`Previous scores: ${JSON.stringify(previousScore)}`)
        console.log(`High Jump completed! ${highestColor.toLowerCase()} won!`);
        console.log(`Updated scores: ${JSON.stringify(scores)}`);
 
        // assuming 1000 for highjump
        setTimeout(() => {
            console.log("Starting Award Ceremony...");
            callback(scores);
        }, 1000);
    } else {
        // error if color not chosen or doesnt exist
        console.log("Event was cancelled");
        setTimeout(() => {
            console.log("Starting Award Ceremony...");
            callback(scores);
        }, 1000);
      
    }
}
//Award Ceremony
function AwardCeremony(scores) {
    //scores in order
    var sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

    //log results
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
    console.log(`Award Ceremony completed!`);

}
