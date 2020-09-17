var choices = ["heads" , "tails"];
var score = 0;

for (var i = 1; i < 11; i++) {
    var userChoice = prompt("Heads or tails?").toLowerCase();
    var computerChoice = Math.floor(Math.random() * 2);

    if (computerChoice == 0 && userChoice == choices[1]){
        alert("Better luck next time. Your score is " + score + "! Question " + i + " out of 10");
    }
    if (computerChoice == 1 && userChoice == choices[0]){
        alert("Better luck next time. Your score is " + score + "! Question " + i + " out of 10");
    } 
    if (computerChoice == 0 && userChoice == choices[0] || computerChoice == 1 && userChoice == choices[1]) { 
        score++;
        alert("Good Job it was " + choices[computerChoice] + "! Your score is " + score + "! Question " + i + " out of 10");
    }
    if (i == 10) {
        alert("Game over! Your final score is " + score + "!");
    }
}


    
    
console.log(computerChoice)